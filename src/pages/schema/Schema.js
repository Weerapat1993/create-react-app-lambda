import React, { PureComponent } from 'react';
import { get } from 'lodash';
import dedent from 'dedent';
import gq from 'graphql-tag';
import { Query } from 'react-apollo';
import { Collapse, Icon, Row, Col, Tag, Card } from 'antd';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-json';
import './styles.css'
import { Background, Align } from '../../components';
import { notificationWithIcon } from '../../utils/notificationWithIcon';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class Schema extends PureComponent {
  constructor(props) {
    super(props)

    const queryName = get(props.schema, 'definitions.0.name.value', '')
    const source = get(props.schema, 'loc.source.body', '')
    this.state = {
      queryName,
      source: dedent`${source}`,
      sourceVariables: '',
      variables: '',
      query: '',
      tag: '',
    }
  }

  handleQuery = (event) => {
    const { source, sourceVariables } = this.state;
    event.stopPropagation();
    const TEST_GQL = gq`${source}`
    const operation = get(TEST_GQL, 'definitions.0.operation', '')
    console.log(operation)
    if(operation !== 'query') {
      notificationWithIcon('error', `You are can't use ${operation} type.`)
    } else {
      this.setState({ query: source, variables: sourceVariables })
    }
  }

  handleSelectQuery = (value) => {
    const { tag } = this.state;
    if(tag === value) {
      this.setState({ tag: '' })
    } else {
      this.setState({ tag: value })
    }
  }

  render() {
    const { source, sourceVariables, query, variables, tag } = this.state
    const tags = ['ant', 'bird', 'cat', 'dog', 'elephant']
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}
          bordered={false}
          onChange={callback}
          expandIconPosition={'left'}
        >
          <Panel 
            header="GraphQL Search Query" 
            key="1" 
            extra={(
              <Icon 
                type="right-circle"
                theme="twoTone"
                twoToneColor="#eb2f96"
                style={{ fontSize: '34px', marginTop: -6 }}
                onClick={this.handleQuery} 
              />
            )}
          >
            <Row>
              <Col span={24}>
                <div style={{ padding: '10px 0' }}>
                  <Tag 
                    onClick={() => this.handleSelectQuery('new_item')} 
                    color={tag === 'new_item' ? 'green' : 'blue'} 
                    style={{ borderStyle: 'dashed' }}
                  >
                    <Icon type="plus" /> New Tag
                  </Tag>
                  {tags.map((item) => (
                    <Tag 
                      key={item} 
                      onClick={() => this.handleSelectQuery(item)} 
                      color={tag === item ? 'green' : ''}
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </Col>
            </Row>
            <Row type="flex">
              <Col md={12} xs={24} style={{ background: "#fafafa", maxHeight: 500, overflow: 'auto' }}>
                <Editor
                  value={source}
                  onValueChange={source => this.setState({ source })}
                  highlight={source => highlight(source, languages.graphql)}
                  padding={10}
                  style={{ background: 'transparent' }}
                  className="container__editor"
                />
              </Col>
              <Col md={12} xs={24} style={{ background: '#eee', maxHeight: 500, overflow: 'auto' }}>
                {
                  query ? (
                    <Query query={gq`${query}`} variables={variables ? JSON.parse(variables) : null} skip={!query} fetchPolicy="cache-and-network">
                      {({ data, loading, error }) => loading ? (
                        <Align padding="20px" value="center">
                          <Icon
                            type="loading"
                            color="blue"
                            style={{ fontSize: '48px', color: '#777' }} 
                          />
                        </Align>
                      ) : (
                        <Editor
                          value={JSON.stringify(error || data, null, '  ')}
                          highlight={sourceVariables => highlight(sourceVariables, languages.json)}
                          padding={10}
                          style={{ background: 'transparent' }}
                          className="container__editor"
                        />
                      )}
                    </Query>
                  ) : null
                }
              </Col>
            </Row>
            <Row type="flex">
              <Col span={24} style={{ background: '#e8e8e8' }}>
                <Background color="#cecece" padding="10px">
                  <b>QUERY VARIABLES</b>
                </Background>
                <Editor
                  value={sourceVariables}
                  onValueChange={sourceVariables => this.setState({ sourceVariables })}
                  highlight={sourceVariables => highlight(sourceVariables, languages.json)}
                  padding={10}
                  style={{ background: 'transparent' }}
                  className="container__editor"
                />
              </Col>
            </Row>
          </Panel>
        </Collapse> 
        <br />
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    )
  }
}

export default Schema;
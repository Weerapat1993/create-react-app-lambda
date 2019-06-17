import React, { PureComponent } from 'react';
import { get } from 'lodash';
import dedent from 'dedent';
import gq from 'graphql-tag';
import { Query } from 'react-apollo';
import { Collapse, Icon, Row, Col } from 'antd';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-json';
import './styles.css'

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const customVariablesStyle = {
  background: '#eeffcc',
};


const DEFAULT_VARIABLES = `{
  "input": {
    
  }
}`

class Schema extends PureComponent {
  constructor(props) {
    super(props)

    const queryName = get(props.schema, 'definitions.0.name.value', '')
    const source = get(props.schema, 'loc.source.body', '')
    this.state = {
      queryName,
      source: dedent`${source}`,
      sourceVariables: DEFAULT_VARIABLES,
      variables: '',
      query: '',
    }
  }
  render() {
    const { queryName, source, sourceVariables, query, variables } = this.state
    const variableDefinitions = get(this.props.schema, 'definitions.0.variableDefinitions', [])
    return (
      <div>
        <h1>{queryName}</h1>
        <Collapse
          defaultActiveKey={['1']}
          bordered={false}
          onChange={callback}
          expandIconPosition={'left'}
        >
          <Panel 
            header="Query" 
            key="1" 
            extra={(
              <Icon 
                type="right-circle"
                theme="filled"
                style={{ color: '#777', fontSize: '24px' }}
                onClick={(event) => {
                  event.stopPropagation();
                  this.setState({ query: source, variables: sourceVariables })
                }} 
              />
            )}
          >
            <Row type="flex">
              <Col md={12} xs={24} style={{ background: "#fafafa" }}>
                <Editor
                  value={source}
                  onValueChange={source => this.setState({ source })}
                  highlight={source => highlight(source, languages.graphql)}
                  padding={10}
                  style={{ background: 'transparent' }}
                  className="container__editor"
                />
              </Col>
              <Col md={12} xs={24} style={{ background: '#eee' }}>
                {
                  query ? (
                    <Query query={gq`${query}`} variables={JSON.parse(variables)} skip={!query}>
                      {({ data, error }) => (
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
          </Panel>
          {variableDefinitions.length ? (
            <Panel header="Query Variables" key="3" style={customVariablesStyle}>
              <Editor
                value={sourceVariables}
                onValueChange={sourceVariables => this.setState({ sourceVariables })}
                highlight={sourceVariables => highlight(sourceVariables, languages.json)}
                padding={10}
                 style={{ background: 'transparent' }}
                className="container__editor"
              />
            </Panel>
          ) : null}
        </Collapse>
      </div>
    )
  }
}

export default Schema;
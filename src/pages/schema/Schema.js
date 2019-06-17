import React, { PureComponent } from 'react';
import { get } from 'lodash';
import dedent from 'dedent';
import gq from 'graphql-tag';
import { Query } from 'react-apollo';
import { Button } from 'antd'
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-graphql';
import './styles.css'

class Schema extends PureComponent {
  constructor(props) {
    super(props)

    const queryName = get(props.schema, 'definitions.0.name.value', '')
    const source = get(props.schema, 'loc.source.body', '')

    this.state = {
      queryName,
      source: dedent`${source}`,
      query: '',
    }
  }
  render() {
    const { queryName, source, query } = this.state
    return (
      <div>
        <h1>{queryName}</h1>
        <b>Code</b>
        <Editor
          value={source}
          onValueChange={source => this.setState({ source })}
          highlight={source => highlight(source, languages.graphql)}
          padding={10}
          className="container__editor"
        />
        <Button type="primary" onClick={() => this.setState({ query: source })}>Submit</Button>
        {
          query ? (
            <Query query={gq`${query}`} skip={!query}>
              {({ data }) => (
                <pre>
                  {JSON.stringify(data, null, '  ')}
                </pre>
              )}
            </Query>
          ) : null
        }
      </div>
    )
  }
}

export default Schema;
import React from 'react';
import styled from 'styled-components'

const PlaygroundView = styled.div`
  margin: 0 -16px;
  margin-top: -90px;
  position: relative;
`;

const Playground = () => (
  <PlaygroundView>
    <iframe
      title="GraphQL Playground"
      src="/.netlify/functions/graphql"
      width="100%"
      height="743px"
      frameBorder={0}
    />
  </PlaygroundView>
)

export default Playground;

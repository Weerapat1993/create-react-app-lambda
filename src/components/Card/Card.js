import React from 'react';
import styled from 'styled-components';

const CardMain = styled.div`
  width: 100%;
  background: white;
`
const CardBody = styled.div`
  padding: ${props => props.padding || '24px'};
`


const Card = (props) => (
  <CardMain {...props} />
)

Card.Body = CardBody;

export default Card;
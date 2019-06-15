import styled from 'styled-components'

export const Background = styled.div`
  background: ${props => props.color || 'transparent'};
  padding: ${props => props.padding || '0px'};
  margin: ${props => props.margin || '0px'};
`

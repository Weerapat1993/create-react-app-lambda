import styled from 'styled-components'

export const Align = styled.div`
  text-align: ${props => props.value || 'left'};
  padding: ${props => props.padding || '0'};
`;

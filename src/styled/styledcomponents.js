import styled from 'styled-components'

export const CustomButton = styled.button`
  border: 1px solid #db1c48;
  border-radius: 6px;
  padding: 6px;

  color: ${props => (props.check ? '#ffffff' : '#db1c46')};
  background-color: ${props => props.check && '#db1c48'};

  cursor: pointer;
`
export const Value = styled.h1`
  color: black;
`

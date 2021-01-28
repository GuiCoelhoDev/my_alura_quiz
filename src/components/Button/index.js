import styled from 'styled-components'

const Button = styled.button`
    margin-top: 1.5vh;
    
    border-radius: 10px;
    border-color:  ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${({ height }) => height};
    border: 0;
    width: ${({width}) => width}
`

export default Button;
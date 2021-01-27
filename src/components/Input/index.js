import styled from 'styled-components'



const Input = styled.input `
    background-color: ${({ theme }) => theme.colors.primary};
    /*  */
    border-color: ${({theme}) => theme.colors.contrastText};
    border: 0;
    outline: none;
    
`

export default Input;

    

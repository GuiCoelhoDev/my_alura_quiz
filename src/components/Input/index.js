import styled from 'styled-components'



const InputStyle = styled.input`
    /* background-color: ${({ theme }) => theme.colors.primary};
    
    border-color: ${({ theme }) => theme.colors.contrastText};
    border: 0;
    outline: none;   */
    width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`


const Input = ({ onChange, placeholder }) => {
    return (
        <div>

            <InputStyle onChange={onChange} placeholder={placeholder} />


        </div>
    )
}
export default Input;



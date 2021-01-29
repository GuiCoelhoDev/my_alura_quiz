import styled from 'styled-components'



const TextStyle = styled.h1`
    color: red;
 
`


const Text = ({children}) => {
    return (
        <div>

            <TextStyle>{children}</TextStyle>

        </div>
    )
}
export default Text;



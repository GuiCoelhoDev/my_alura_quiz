import styled from 'styled-components'



const TitleStyle = styled.h1`
   margin: ${({ margin }) => margin};
 
`


const Title = ({children, margin}) => {
    return (
        <div>

            <TitleStyle margin={margin}>{children}</TitleStyle>

        </div>
    )
}
export default Title;



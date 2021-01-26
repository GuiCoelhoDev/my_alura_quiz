import styled from 'styled-components'
import Widget from '../src/components/Widget'
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"
import QuizBackground from "../src/components/QuizBackground"
import IndexPage from "../src/components/IndexPage"
//TODO: 1- Colocar background

import db from "../db.json"

const BackGroundImage = styled.div`
  background-image: url("${db.bg}");
  flex: 1;  
  background-size: cover;
  background-position: center;
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <>
      <IndexPage />

      <QuizBackground backgroundImage={db.bg}>

        <QuizContainer>
          <Widget>
            <Widget.Header>

              <h1>League of Legends</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Teste seus conhecimentos sobre o maravilhoso universo de League of Legends e divirta-se criando seu AluraQuiz!
             </p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>

              <h1>Outros Quizes top</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
               Se liga nesses quizes brabissimos desenvolvidos pela comunidade do Alura   
            </p>

            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner />
      </QuizBackground >
    </>

  )
}


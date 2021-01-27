import styled from 'styled-components'
import Widget from '../src/components/Widget'
import Footer from "../src/components/Footer"
import Input from "../src/components/Input"
import Button from "../src/components/Button"
import GitHubCorner from "../src/components/GitHubCorner"
import QuizBackground from "../src/components/QuizBackground"
import IndexPage from "../src/components/IndexPage"
import { useState } from 'react'
import { useRouter } from 'next/router'
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

  const router = useRouter();

  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name)
    router.push(`/quiz?name=${name}`)



  }
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
              <form style={{display: 'flex' ,flexDirection: 'column'}} onSubmit={handleSubmit}>

                <Input placeholder="Put your name here" onChange={(event) => {
                  setName(event.target.value)
                  console.log(name)
                }}>
                </Input>
                <Button disabled={name.length == 0}>
                  Bora Jogar, {name}
                </Button>
             
              </form>
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


import styled from "styled-components";
import Widget from "../Widget";
import db from "../../../db.json"
import Button from "../Button"
import Title from "../Title"
import Text from "../Text"

const QuestionWidget = ({ name, question, questionsIndex, totalQuestions, setQuestionsIndex, setMoment }) => {
  const moments = { loading: 'loading', quiz: 'quiz', result: 'result' }

  return (
    <div>


      <Widget>
        <Widget.Header style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Title>
            Perguta {questionsIndex} de {totalQuestions}
          </Title>
          <Text>
            Usuário: {name}
          </Text>
        </Widget.Header>

        <img
          style={{ height: "20vh", width: "100%" }}
          src={question.image}
        ></img>

        <Widget.Content>
          <h1>{question.title}</h1>
          <p>{question.description}</p>
        </Widget.Content>

        <Widget.Content>
          {/* Alternativas */}
          {question.alternatives.map((alternativa =>


            <div>
              <Button width="100%" height="8vh">

                <input type="radio" id="male" name="gender" value={'male'} />


                <label for="male">{alternativa}</label>
              </Button>

            </div>
          ))}
        </Widget.Content>

        <Widget.Content>
          {/* Confirmar Alternativa */}
          <Button onClick={() => {


            if (questionsIndex == totalQuestions - 1) {
              setMoment(moments.result)


            } else {
              setQuestionsIndex(questionsIndex + 1)

            }
          }} width="100%" height="8vh">Confirmar</Button>
        </Widget.Content>
      </Widget>
    </div>
  );
};

export default QuestionWidget;

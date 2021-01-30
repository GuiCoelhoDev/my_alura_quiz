import styled from "styled-components";
import Widget from "../Widget";
import db from "../../../db.json"
import Button from "../Button"
import Title from "../Title"
import Text from "../Text"

const QuestionWidget = ({ onSubmit, name, question, questionsIndex, totalQuestions}) => {

  const moments = {
    loading: 'loading',
    quiz: 'quiz',
    result: 'result'
  }




  return (
    <div>


      <Widget>
        <Widget.Header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
          <form onSubmit={onSubmit}>
            {question.alternatives.map((alternativa, index) => {

              const alternativeID = `alternative__${index}`;
              console.log('alternativeID', alternativeID)
              return (


                <Widget.Topic >

                  <input type="radio" id={alternativeID} name="alternative" value={'alternative'} />

                  <label htmlFor={alternativeID}>{alternativa}</label>
                </Widget.Topic>


              )
            })}
            {/* Confirmar Alternativa */}
            <Button type="submit" width="100%" height="8vh">Confirmar</Button>


          </form>


        </Widget.Content>


      </Widget>
    </div>
  );
};

export default QuestionWidget;

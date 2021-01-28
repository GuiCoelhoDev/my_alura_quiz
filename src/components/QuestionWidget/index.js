import styled from "styled-components";
import Widget from "../Widget";
import db from "../../../db.json"
import Button from "../Button"

const QuestionWidget = ({ name, question, questionsIndex, totalQuestions }) => {


  console.log('Alternatives', question.alternatives)



  return (
    <div>
      {/* <Widget>
        <Widget.Content>Olá, {name}</Widget.Content>
      </Widget> */}

      <Widget>
        <Widget.Header>Perguta {questionsIndex} de {totalQuestions}</Widget.Header>

        <img
          style={{ height: "20vh", width: "100%" }}
          src={question.image}
        ></img>

        <Widget.Content>
          <h1>{question.title}</h1>
          <p>{question.description}</p>
        </Widget.Content>

        <Widget.Content>
          {question.alternatives.map((alternativa =>


            <div> 
              
              <input type="radio" id="male" name="gender" value={'male'} />
                  
              
              <label for="male">{alternativa}</label>

            </div>
          ))}
        </Widget.Content>

        <Widget.Content>
          <Button width="100%" height="8vh">Confirmar</Button>
        </Widget.Content>
      </Widget>
    </div>
  );
};

export default QuestionWidget;

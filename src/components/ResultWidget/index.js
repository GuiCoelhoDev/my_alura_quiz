import styled from "styled-components";
import Widget from "../Widget";
import db from "../../../db.json"
import Button from "../Button"



const ResultWidgetStyle = styled(Widget)`
        background-color: red;
`
const ResultWidget = ({ name }) => {
    return (
        <div>
            <Widget>
                <Widget.Header>
                    Resultados do Quiz
                </Widget.Header>
                <Widget.Content>
                    Acertou 1 de 2 questões
                </Widget.Content>
            </Widget>
         
        </div>
    );
};

export default ResultWidget;

import styled from "styled-components";
import Widget from "../Widget";
import db from "../../../db.json"
import Button from "../Button"



const LoadingWidgetStyle = styled(Widget)`
        background-color: red;
`
const LoadingWidget = ({name}) => {
    return (
        <div>
            <Widget>
                <Widget.Header>
                    Carregando
                </Widget.Header>
                <Widget.Content>

                </Widget.Content>
            </Widget>  <Widget>
                <Widget.Header>
                Ja já
                </Widget.Header>
                <Widget.Content>

                </Widget.Content>
            </Widget>
        </div>
    );
};

export default LoadingWidget;

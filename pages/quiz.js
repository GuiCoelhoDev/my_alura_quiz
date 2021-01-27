import { useRouter } from 'next/router'
import Widget from '../src/components/Widget';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'

const Quiz = () => {

    const router = useRouter();
    const name = router.query.name


    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <Widget>
                    <Widget.Content>

                        Olá, {name}
                    </Widget.Content>
                </Widget>

                <Widget>
                    <Widget.Header>
                        Perguta 1 de 5
                </Widget.Header>

                    <img style={{ height: '30vh', width: '100%' }} src={db.questions[0].image}>
                    </img>

                    <Widget.Content>
                        <h1>
                            Pergunta
                        </h1>
                        <p>
                            Descrição
                        </p>
                    </Widget.Content>
                    <Widget.Content>
                        Opções
                    </Widget.Content>
                    <Widget.Content>

                        <Button>
                            Confirmar
                        </Button>
                    </Widget.Content>

                </Widget>
            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz;
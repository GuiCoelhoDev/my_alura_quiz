import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuestionWidget from '../src/components/QuestionWidget'
import LoadingWidget from '../src/components/LoadingWidget'
import ResultWidget from '../src/components/ResultWidget'

const Quiz = () => {

    const moments = { loading: 'loading', quiz: 'quiz', result: 'result' }

    const totalQuestions = db.questions.length;//2 questões total
    const [questionsIndex, setQuestionsIndex] = useState(0);
    const [moment, setMoment] = useState(moments.loading)
    const question = db.questions[questionsIndex];
    const router = useRouter();
    const name = router.query.name

    useEffect(() => {
        //Fetch()
        //Iteração que acontece dps que o componente nasceu
        setTimeout(() => setMoment(moments.quiz), 1000)

    }, []);

    const handleSubmitQuiz = (event) => {
        event.preventDefault()
        const nextQuestion = questionsIndex + 1;
        // if (questionsIndex == totalQuestions - 1) {
        //   setMoment(moments.result)
    
    
        // } else {
        //   setQuestionsIndex(questionsIndex + 1)
    
        // }

        if(nextQuestion < totalQuestions) {
            setQuestionsIndex(questionsIndex + 1);
        }else {
            setMoment(moments.result)
        }
      }

    return (
        <QuizBackground backgroundImage={db.bg}>
            
         
            <QuizContainer>
                {/* TODO: Calcular quantas questões foram acertadas */}
                {/* TODO: Como o jogo acaba? Mostrar resultado no final do quiz das questões acertadas */}
                {/* TODO: Trazer questões minhas de lol */}
                {/* TODO: Fazer as alternativas funcionarem (certo ou errado) (useState ou alert)*/}

                {/* Mario: Verificação da questão (alert ou useState pra mostrar resposta?) */}
                {/* Ju: Como funciona o mecanismo do jogo? */}
                {/* Paulo: Trazer questões que toquem vocês */}
                {moment == moments.quiz &&

                    <QuestionWidget onSubmit={handleSubmitQuiz} totalQuestions={totalQuestions} questionsIndex={questionsIndex} question={question} name={name} />
                }
                {moment == moments.loading && <LoadingWidget />}
                {moment == moments.result && <ResultWidget />}

            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz;
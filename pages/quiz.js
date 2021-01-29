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
        setTimeout(() => setMoment(moments.quiz), 1000)

    }, []);





    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>

                {moment == moments.quiz &&

                    <QuestionWidget setMoment={setMoment} setQuestionsIndex={setQuestionsIndex} totalQuestions={totalQuestions} questionsIndex={questionsIndex} question={question} name={name} />
                }
                {moment == moments.loading && <LoadingWidget />}
                {moment == moments.result && <ResultWidget />}

            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz;
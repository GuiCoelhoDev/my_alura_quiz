import { useRouter } from 'next/router'
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuestionWidget from '../src/components/QuestionWidget'
import LoadingWidget from '../src/components/LoadingWidget'

const Quiz = () => {
    
    const totalQuestions = db.questions.length - 1;
    const questionsIndex = 0;
    const question = db.questions[questionsIndex];
    console.log('Questionsss', totalQuestions)


    const router = useRouter();
    
    
    const name = router.query.name
    


    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
               <QuestionWidget totalQuestions={totalQuestions} questionsIndex={questionsIndex} question={question} name={name}/>
            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz;
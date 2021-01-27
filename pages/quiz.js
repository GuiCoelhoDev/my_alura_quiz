import {useRouter} from 'next/router'

const Quiz = () => {

    const router = useRouter();
    const name = router.query.name
   
   
    return(
        <div style={{color: 'red'}}>
            Quiz page of {name}
        </div>
    )
}

export default Quiz;
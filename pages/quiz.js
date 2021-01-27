import {useRouter} from 'next/router'

const Quiz = () => {

    const router = useRouter();
    const {pid} = router.query;
    console.log("pid:" + pid)
   
    return(
        <div style={{color: 'red'}}>
            Quiz page {pid}
        </div>
    )
}

export default Quiz;
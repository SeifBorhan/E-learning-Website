import Card from '../ui/Card';
import { useRef } from 'react';
import axios from 'axios';






function NewPromotionForm() {
        
        
       // const [instCourses,setInstCourses] = useState([]);
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
       
        console.log(id);
       
        

    const percentage = useRef();
    const duration = useRef();
   

    

    // useEffect (() => {
    
    // axios.get("http://localhost:8000/new-exam")
    // .then((res) => {
    //      examId = (res.data);
    //      console.log(examId);
    // }).then();
    // })


    const submitPromotion = async (event) =>{
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        
        console.log(id);
        event.preventDefault();
    
        
    const enteredPromotion = percentage.current.value;
    const enteredDuration = duration.current.value;
    

   
    
    console.log(enteredDuration,enteredPromotion)
    await axios.post(`http://localhost:8000/new-promotion?id=${id}`,{enteredDuration,enteredPromotion})

    // document.getElementById('question').value="";
    // document.getElementById('choice1').value="";
    // document.getElementById('choice2').value="";
    // document.getElementById('choice3').value="";
    // document.getElementById('choice4').value="";
    // document.getElementById('key').value="";
        
        
    
}

// const submitExam = async (event) =>{
   
//     event.preventDefault();
//     console.log(questionsArray)
    
//     await axios.post(`http://localhost:8000/new-promotion?id=${id}`,{questionsArray})

// }


//finish button injected manually until update : NOTE
    return (<Card>
        <form  onSubmit={submitPromotion} >
          

            <div >
                <label htmlFor='question'>enter percentage</label>
                <input type='number' required id='question'  ref={percentage} />
            </div>
            <div >
                <label htmlFor='choice1'>enter duration</label>
                <input type='text' required id='choice1' ref={duration} />
            </div>

           
            <div  type='submit'  >
                <button> add promotion </button>
            </div>

          
            </form>

            
    </Card>)
    
                 

}
export default NewPromotionForm;

//onClick={() => window.location.href = `http://localHost:3000/instructorView?id=${id}`}
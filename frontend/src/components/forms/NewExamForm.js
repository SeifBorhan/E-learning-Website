
import Card from '../ui/Card';
import { useRef } from 'react';
import axios from 'axios';






function NewExamForm() {
        const questionsArray = [];
        
       // const [instCourses,setInstCourses] = useState([]);
        const params = new URLSearchParams(window.location.search);
        const courseid = params.get('courseid')
        // const id = params.get('id');
        const subid = params.get('subid')
       
        //console.log(id);
       // console.log(subid)
       
        

    const question = useRef();
    const choice1 = useRef();
    const choice2 = useRef();
    const choice3 = useRef();
    const choice4 = useRef();
    const key = useRef();
    

    

    // useEffect (() => {
    
    // axios.get("http://localhost:8000/new-exam")
    // .then((res) => {
    //      examId = (res.data);
    //      console.log(examId);
    // }).then();
    // })


    const submitQuestion = async (event) =>{
        const params = new URLSearchParams(window.location.search);
        const courseid = params.get('courseid')
        // const id = params.get('id');
        const subid = params.get('subid')
        
       // console.log(id);
       // console.log(subid)
        event.preventDefault();
    
        
    const enteredQuestion = question.current.value;
    const enteredChoice1 = choice1.current.value;
    const enteredChoice2 = choice2.current.value;
    const enteredChoice3 = choice3.current.value;
    const enteredChoice4 = choice4.current.value;
    const enteredKey = key.current.value;

    var ExamData = [
        enteredQuestion,
        enteredChoice1,
        enteredChoice2,
        enteredChoice3,
        enteredChoice4,
        enteredKey,
    ];
    
    questionsArray.push(ExamData);
    console.log(questionsArray)

    document.getElementById('question').value="";
    document.getElementById('choice1').value="";
    document.getElementById('choice2').value="";
    document.getElementById('choice3').value="";
    document.getElementById('choice4').value="";
    document.getElementById('key').value="";
        
        
    
}

const submitExam = async (event) =>{
   
    event.preventDefault();
    console.log(questionsArray)
    
    await axios.post(`http://localhost:8000/new-exam?subid=${subid}&courseid=${courseid}`,{questionsArray})

}


//finish button injected manually until update : NOTE
    return (<Card>
        <form  onSubmit={submitQuestion} >
          

            <div >
                <label htmlFor='question'>Enter the question</label>
                <input type='text' required id='question'  ref={question} />
            </div>
            <div >
                <label htmlFor='choice1'>Enter choice 1</label>
                <input type='text' required id='choice1' ref={choice1} />
            </div>

            <div >
                <label htmlFor='choice2'>Enter choice 2</label>
                <input type='text' required id='choice2' ref={choice2} />
            </div>

            <div >
                <label htmlFor='choice3'>Enter choice 3</label>
                <textarea type='text' required id='choice3' ref={choice3}></textarea>
            </div>

            <div>
                <label htmlFor='choice4'>Enter choice 4</label>
                <textarea type='text' required id='choice4' ref={choice4}></textarea>
            </div>

            <div >
                <label htmlFor='key'>Enter the correct choice</label>
                <textarea type='number' required id='key' ref={key}></textarea>
            </div>

            <div   type='submit' >
                <button> add question </button>
            </div>

            {/* <div className={classes.actions}  onClick={() => window.location.href = `http://localHost:3000/instructorView?id=635449bb315bb68f0793ac95`} key={id}>
                <button> add another question </button>
            </div> */}
            </form>

            <Card>
                <form  onSubmit={submitExam}>
                    <div   type='submit'   >
                <button > finish </button>
            </div></form>
            
            </Card>
    </Card>)
    
                 

}
export default NewExamForm;

//onClick={() => window.location.href = `http://localHost:3000/instructorView?id=${id}`}
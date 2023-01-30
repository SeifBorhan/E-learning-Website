
import Card from '../ui/Card';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { useEffect, useState, useRef } from 'react';
import axios from 'axios';



function KarimTraineeRateInstructor() {
  const review = useRef();
        
    const [TraineeCourses,setTraineeCourses] = useState([]);
    
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);

     useEffect(()=> {
    axios
    .get(`http://localHost:8000/karim-trainee-view?id=${id}`)
    .then((res) => {
     setTraineeCourses(res.data);
     console.log(res.data);
     //console.log("miniawy")
     
    })

    
},[]);

const rateVal = async (event) => {
  event.preventDefault();
  //var container = document.getElementById('codes').textContent
  var container = instructorID
  const enteredReview = review.current.value
  console.log(enteredReview)

  await axios.patch(`http://localhost:8000/karim-trainee-view?id=${id}`,{value,container,enteredReview})
  
}

const [instructorID, setInstructorID] = useState([]);
const [value, setValue] = React.useState(0);

      return (<Card>
    <Card >
        <div>
          {TraineeCourses.map((course) => (
            <div>
              {course.courseName}
            
             
         <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <div> <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
          
          
        }}
      /></div>


        

        <form  onSubmit={rateVal} >



        {value === 0 ? (
    <div />
  ) : (
    <div >
      <input type='text'  id='review' placeholder='please enter a review' ref={review} />
      
      <div type='submit' >
                <button onClick={()=>{setInstructorID(course.instructorID)}}> add  </button>
            </div>
      </div>
    
  )}





        
          </form>


      
    </Box>
       </div>
       

            
        
        
        ))}
        </div>
         
        
         </Card>
</Card>)

             

}
export default KarimTraineeRateInstructor;
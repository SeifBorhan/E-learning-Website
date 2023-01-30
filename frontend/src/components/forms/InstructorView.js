import Card from '../ui/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';






function InstructorView() {
        
        const [instCourses,setInstCourses] = useState([]);
        
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        console.log(id);

         useEffect(()=> {
        axios
        .get(`http://localHost:8000/new-exam?id=${id}`)
        .then((res) => {
         setInstCourses(res.data);
         console.log(res.data);
         
        })
        
    },[]);
          return (<Card>
        <Card >
            <div>
              {instCourses.map((course) => (
                <div>
                  {course.courseName}

                   <button onClick={() => window.location.href = `http://localHost:3000/new-exam?id=${course._id}`} key={course._id}>
                create exam
             </button>

             <button onClick={() => window.location.href = `http://localHost:3000/new-promotion?id=${course._id}`} key={course._id}>
                add promotion
             </button>
                </div>

                
            ))}
            </div>
             
            
             </Card>
    </Card>)
    
                 

}
export default InstructorView;
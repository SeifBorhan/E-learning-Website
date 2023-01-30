import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Rating from '@mui/material/Rating';
import { Typography } from "@mui/material";
const params = new URLSearchParams(window.location.search);


function Ratings (){
    const [ratings, setRatings] = useState([]);

    const cid = params.get("id");
    useEffect(() => {
      axios
        .get(`http://localhost:8000/courseRatings?id=${cid}`)
        .then((res) => {
          setRatings(res.data);
          console.log(res.data)
        })
        .then();
    }, []);

    return (
        <>
        
        {ratings.map((rating) => (
            <div>
          <Rating
           name="read-only"
           value={rating.rate}
           readOnly
          />
          {rating.review}
        </div>
        ))}
    
        
        </>
      );
    }
    
    export default Ratings;
    


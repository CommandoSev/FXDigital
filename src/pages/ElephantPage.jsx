import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ElephantPage = (props) => {
  
const [elephants, setElephants] = useState([]);
const { name } = useParams();

  const fetchData = () => {
    axios.get('https://elephant-api.herokuapp.com/elephants')
      .then(res => {
        const data = res.data.map((item) => {
          return {
            "_id": item._id,
            "affiliation": item.affiliation,
            "name": item.name,
            "image": item.image,
            "note": item.note,
          }
        })
        const newData = data.filter(item => { return item.name == name });
        setElephants(newData[0]);
      }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData()
  })


    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "15px", color: "#333", border: "solid 1px #333", borderRadius: "5px" }}>
          <div style={{width: "90%", height: "400px", backgroundImage: `url(${elephants.image})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
              <h1>{elephants.name}</h1>
              <h2>{elephants.affiliation}</h2>
              <p>{elephants.note}</p> 
      </div>

    )
  }

export default ElephantPage;
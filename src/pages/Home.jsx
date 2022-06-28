import React, { useState, useEffect} from 'react';
import Card from '../components/Card';
import axios from 'axios';
import { Link } from "react-router-dom";


export const Home = () => {

  const [elephants, setElephants] = useState([]);

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
        const size = 10;
        const newData = data.slice(0, size);
        setElephants(newData);
      }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData()
  })
  

  
  return (
    <>
      <h1>Elephants</h1>
      <div className="App" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px" }}>
        {elephants.map(elephant => (
          <Link to={`/elephant/${elephant.name}`} >
            <Card key={elephant._id} image={elephant.image} name={elephant.name} affiliation={elephant.affiliation} />
          </Link>
        ))}       
      </div>
    </>
  );
};

export default Home;
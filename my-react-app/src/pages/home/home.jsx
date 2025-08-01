// src/pages/home/home.jsx
import React, { useState, useEffect } from 'react';
import Habitations from '../../composants/habitations/habitations';
import Banner from '../../composants/banner/banner';

function Home() {
  const [data, setData] = useState([]);
  
useEffect(() => {
  
  fetch("logements.json")
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
}, []);


  return (
    <div className="home">
      <Banner />
      <Habitations element={data} />
    </div>
  );
}

export default Home; 


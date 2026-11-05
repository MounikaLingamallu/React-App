import React, { useEffect, useState } from "react";
import DoctorCard from "./Doctorcard";
import axios from "axios";
import "./Home.css"

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchDoctors();
  }, []);

  async function fetchDoctors() {
    axios.get("https://doc-back1.onrender.com/doctors").then((res) => {
      setDoctors(res.data);
      console.log(res.data);
    });
  }

  const filteredDoctors = doctors.filter((i)=>{
    return i.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <div className='search'>
        <input type="text" placeholder="Enter a doctor name" 
        onChange={(e)=>setSearchTerm(e.target.value)}
        />

      </div>

      {
      filteredDoctors.length === 0 ? (
        <> No Doctor Matches..... </>
      ) : (
        <div className="card-container">
          {filteredDoctors.map((i) => (
            <DoctorCard
              key={i.id}
              name={i.name}
              age={i.age}
              salary={i.salary}
              gender={i.gender}
              specialization={i.specialization}
            />
          ))}
        </div>
      )}
    </div>
  );
}
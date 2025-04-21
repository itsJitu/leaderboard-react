import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

function Main() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [country, setCountry] = useState("");
    const [score, setScore] = useState("");
const [data, setData] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const obj = {id: Date.now(), 
            name: fname + " " + lname, 
            country: country,
            score: score,
        };


       // setData((preData) => {
        //     const newData = [...preData, obj];
        //     return newData.sort((a, b) => b.score - a.score);
        // });

        setData((preData) => {
            const newData = [...preData, obj];
            return newData.sort((a,b) => b.score - a.score);
        });
        
        setFname("");
        setLname("");
        setCountry("");
        setScore("");
    }
    
    // function modifyScore(id, sign) {
    //   setData(
    //     data.map(obj =>
    //          obj.id === id 
    //            ? { ...obj, score: sign === "+" ? Number (obj.score) + 5 : Number (obj.score) - 5 }
    //            : obj
    //         )
    //     );
    // }

    function modifyScore(id, sign) {
        setData((preData) => {
          const updated = preData.map(obj =>
            obj.id === id
              ? { ...obj, score: sign === "+" ? Number(obj.score) + 5 : Number(obj.score) - 5 }
              : obj
          );
          return updated.sort((a, b) => b.score - a.score);
        });
      }
      
      function handleDelete(id) {
        setData(data.filter((obj) => obj.id !== id));
      }
            
  return (
    <>
    
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="First Name" 
        name="fname" 
        value={fname}
        onChange={(e) => setFname(e.target.value)}> 
        </input>

        <input type="Text" 
        placeholder="Last Name" 
        name="lname" 
        value={lname}
        onChange={(e) => setLname(e.target.value)}>
        </input>

        <select name="country"
        value={country} 
        id=""  
        onChange={(e) => setCountry(e.target.value)}
        >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="Englan">England</option>
            <option value="Australia">Australia</option>
            <option value="Pakistan">Pakistan</option>
            <option value="New-Zeland">New-Zeland</option>
        </select>

        <input type="Number" 
        placeholder="Score" 
        name="score" 
        value={score}
        onChange={(e) => setScore(e.target.value)}>
        </input>

        <button type="submit"> ADD </button>
      </form>

      <div>
        {
           data.length > 0 && 
            data.map((obj) => {
                return (
                  <div key={obj.id} className="flex justify-between m-5"> 
                     <p>{obj.name}</p>
                     <p>{obj.country}</p>
                     <p>{obj.score}</p>
                     <p className="flex">
                        <span onClick={() => handleDelete(obj.id)}><MdDeleteForever /></span>
                        <span onClick={ () => modifyScore(obj.id, "+")}>+5 </span>
                        <span onClick={ () => modifyScore(obj.id, "-")}> -5 </span>
                     </p>
                  </div>
                );
            })
        }
      </div>
    </>

  );
}

export default Main;

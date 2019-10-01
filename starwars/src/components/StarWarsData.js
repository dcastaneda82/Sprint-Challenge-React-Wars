import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCards from "./StarWarsCards.js";
import "./StarWars.css";

// export default function StarWarsData() {
    
//     const [side, setSide] = useState([]);
//     const [character, setCharacter ] = useState([]);

    
//     useEffect(()=>{
//         axios
//         .get(`https://swapi.co/api/people/${character}/`)
//         .then(res => {
//             const about = res.data;
//             setSide(about);
//             console.log("List here,", about);
//         })
//         .catch(error => {
//             console.log("Sorry:",error);
//         });
//     },[character]);
    
//     return (
//         <div className='container'>
//             <div className='buttons'>
//                 <button onClick={()=> {
//                     setCharacter(1);
//                 }}>Luke</button>
//                 <button onClick={()=> setCharacter(2)}>C-3PO</button>
//                 <button onClick={()=> setCharacter(3)}>R2-D2</button>
//                 <button onClick={()=> setCharacter(4)}>Darth Vader</button>
//                 <button onClick={()=> setCharacter(5)}>Leia Organa</button>
//                 <button onClick={()=> setCharacter(6)}>Owen Lars</button>
//                 <button onClick={()=> setCharacter(7)}>Beru Whitesun lars</button>
//                 <button onClick={()=> setCharacter(8)}>R5-D4</button>
//                 <button onClick={()=> setCharacter(9)}>Biggs Darklighter</button>
//                 <button onClick={()=> setCharacter(10)}>Obi-Wan Kenobi</button>
//             </div>
//             <div className="entry">
               
//             <StarWarsCards 
//                 name={side.name}
//                 gender={side.gender}
//                 height={side.height}
//                 birth_year={side.birth_year}
//             />
//             </div>
//         </div>
//     )
// }

export default function StarWarsData() {
    
    const [side, setSide] = useState([]);
    const [character, setCharacter ] = useState([]);

    
    useEffect(()=>{
        axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            const list = res.data.results;
            setSide(list);
            console.log("List here,", list);
        })
        .catch(error => {
            console.log("Sorry:",error);
        });
    },[character]);
    
    return (
        <div className='container'>
            <div className="entry">
                {side.map(d => {
                    return (
                        <StarWarsCards 
                        name={d.name} 
                        height={d.height}
                        mass={d.mass}
                        gender={d.gender}
                        birthYear={d.birth_year}
                        />)
                    })}
            </div>
        </div>
    )
}

// export default function StarWarsData() {
    
//     const [side, setSide] = useState([]);
//     const [character, setCharacter ] = useState([]);

    
//     useEffect(()=>{
//         axios
//         .get(`https://swapi.co/api/people/1/`)
//         .then(res => {
//             const about = res.data;
//             setSide(about);
//             console.log(about);
//         })
//         .catch(error => {
//             console.log("Sorry:",error);
//         });
//     },[character]);


//     return (
        
//         <div>
//             <button onClick={()=> setCharacter(0)}>Luke</button>
//         </div>
//     )
// }
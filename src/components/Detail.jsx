import React, { createContext, useState } from 'react'

export const store=createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Joe",
"Age":"25",
"Course":"MERN",
"Batch":"October",
"id":"1"

},

{

    "Name":"Biden",
    "Age":"22",
    "Course":"MERN",
    "Batch":"september",
    "id":"2"
    
    },
    {

        "Name":"Sam",
        "Age":"22",
        "Course":"MERN",
        "Batch":"December",
        "id":"3"
        
        },
        
        {
        
            "Name":"Mary",
            "Age":"23",
            "Course":"MERN",
            "Batch":"October",
            "id":"4"
            
            },
            {
        
                "Name":"Lumy",
                "Age":"24",
                "Course":"MERN",
                "Batch":"October",
                "id":"5"
                
                },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail
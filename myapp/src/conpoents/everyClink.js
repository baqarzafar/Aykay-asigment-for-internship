import React from "react";


export default function  EveryClick(){


    let array = [

    { name:"Short Videos & Reels" ,
      text:"Share engaging Bite-sized content keep every ordertained "  
    },
    { name:"Small notifications" ,
      text:"Stay updated on what matters without the name"  
    },
    { name:"Interest=Based Communities" ,
      text:"Join groups and discussion that match your passion"  
    }
    ]


    return(

        <div  style={{display:"flex" , justifyContent :"center" }}  >


  <div       >
    
    <div></div>
    <div>
        <div><p>Where Every Click</p></div>
        <div><p>Sparks  a  Connection</p></div>
    </div>

<div>


<p>A small act of kindness today can create a lifetime of impact for someone in itself Give from the heart and change a life !</p>

{array.map((data)=>{

    return(
        <div >

            <p>{data.name}</p>                   
            <p>{data.text}</p>                   

        </div>
    )
})}




</div>
    </div>            
        </div>
    )
}
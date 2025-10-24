import React from "react";
import "./styles.css"
import mobile2 from "./icons/mobile2.png"

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

        <div  style={{display:"flex" , justifyContent :"center", marginTop:"10%"}}  >


  <div style={{display:"flex" , justifyContent:"space-between"}} >
    
    <div  style={{width:"50%"}}    >


         <img  style={{width:"100%"}}  src={mobile2}   ></img>
    </div>
    
      

      <div>
        
    <div style={{fontSize:"2rem" , fontStretch:"expanded" , fontWeight:"bold" , width:"55%"}}                          >
          Where Every Click Sparks a Connection !
    
    </div>

<div>


<div   style={{width:"40%" , fontSize:"1rem"}}   >
    <p>A small act of kindness today can create a lifetime of impact for someone in itself Give from the heart and change a life !</p>
</div>

{array.map((data)=>{

    return(
        <div  className="boxshadow"   style={{ width:"40%" , padding:"2%" , margin:"1%"}}         >

            <p>{data.name}</p>                   
            <p>{data.text}</p>                   

        </div>
    )
})}




</div>
      </div>
    </div>            
        </div>
    )
}
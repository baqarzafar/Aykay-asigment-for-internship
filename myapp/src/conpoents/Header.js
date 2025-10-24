import React from "react";
import "./styles.css"

import  mobile1 from "./icons/mobile1.png"
export  function  Header(){
    

    const  styleFor = {backgroundColor:"#FF5349" , width:"100%" , height:"100vh"}


    return (


        <div  className="outerdive"  style={styleFor}               >


               <div  className="innerdive1"   style={ { display:"flex"  ,   justifyContent:"center"} }>

                    <div>

                    <h1   style={ { color:"white"}   }                     >
                        Mybindle
                    </h1>

                   </div> 
               
             </div> 
            
                
                <div className="innerdive2"  style={{display:"flex"}} >

            <div  style={{color:"white"  , margin:"0% 5%  10%"         , width:"100%"                      }}            >


                 <div         style={{width:"100%"}}                      >
                <p    style={{fontSize:"5vh" , fontStretch:"expanded" , fontWeight:"bold"}}> Stay  Connnected   </p>
                <p        style={{fontSize:"5vh" , fontStretch:"expanded" , fontWeight:"bold"}}                                                     > Stay  Social    </p>
                <p        style={{fontSize:"5vh" , fontStretch:"expanded" , fontWeight:"bold"}}                                                       > Stay  You!   </p>

                <p   style={{width:"50%"}}>A place where  where the friend grow  communities  thrive  and moments turns 
                   into  unforgettable experiences Whether   you'r looking to reconnnect with 
                   old friends build new relationships or share  matters most to you 
                   Mybindle is your home on the internet .
                </p>
                </div> 

                 <button  className="boxshadow"  style={{backgroundColor:"white" , color:"red"   , width:"20vh"  , height:"5vh" , borderRadius:"1vh"   , border:"none"        }}                                      >

                    Get started
                </button> 




             </div> 

          
             <div style={{width:"90%"}}>
                <img style={{width:"100%"}} src={mobile1}></img>
             </div>
       
       </div>
       
        </div>
    )
}
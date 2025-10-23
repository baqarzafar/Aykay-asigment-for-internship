import React from "react";
import "./styles.css"

export  function  Header(){
    

    const  styleFor = {backgroundColor:"#FF5349" , width:"100%" , height:"70vh"}


    return (


        <div   style={styleFor}               >


               <div    style={ { display:"flex"  ,   justifyContent:"center"} }>

                   <div>

                    <h1   style={ { color:"white"}   }                     >
                        Mybindle
                    </h1>

                   </div>
               </div>
            


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

        </div>
    )
}
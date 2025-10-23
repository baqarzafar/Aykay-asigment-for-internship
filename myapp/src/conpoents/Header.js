import React from "react";


export  function  Header(){
    

    const  styleFor = {backgroundColor:"#FF5349" , width:"100%" , height:"100%"}


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
                <p    style={{fontSize:"100%" , fontStretch:"expanded" , fontWeight:"bold"}}> Stay  Connnected   </p>
                <p        style={{fontSize:"100%" , fontStretch:"expanded" , fontWeight:"bold"}}                                                     > Stay  Social    </p>
                <p        style={{fontSize:"100%" , fontStretch:"expanded" , fontWeight:"bold"}}                                                       > Stay  You!   </p>

                <p   style={{width:"20%"}}>A place where  where the friend grow  communities  thrive  and moments turns 
                   into  unforgettable experiences Whether   you'r looking to reconnnect with 
                   old friends build new relationships or share  matters most to you 
                   Mybindle is your home on the internet .
                </p>
                </div>

                <button  style={{backgroundColor:"white" , color:"red"   , width:"7%"  , height:"40px" , borderRadius:"10px"           }}                                      >

                    Get started
                </button>




            </div>

        </div>
    )
}
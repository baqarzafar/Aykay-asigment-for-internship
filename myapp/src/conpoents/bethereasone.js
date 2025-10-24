import React from "react";
import "./styles.css"
import mobile5 from "./icons/mobile5.png"
import mobile6 from "./icons/mobile6.png"


export default function BetheReasone(){



    return(

        <div  style={{display:"flex" , justifyContent:"center" , width:"100%" }}  >


            <div  className="MainNamediv" style={{backgroundColor:"#FF5349" , width:"90%" , borderRadius:"30px",color:"white" , padding:"2%"}}          >


            <div   style={{display:"flex" , width:"100%"}}>
                 
                  <div                         >
                     
                     <div>



     
                   
                   
                    <div>
                           <p      style={{fontSize:"50px" , fontStretch:"expanded" , fontWeight:"bold"}}>Be the Reason</p>
                    </div>






                        <div>
                            <p        style={{fontSize:"50px" , fontStretch:"expanded" , fontWeight:"bold"}}>Someone  Smiles Today !</p>
                        </div> 
                           <div style={{color:"white"}}> 

                 <p                                              >
                        Your generosity can change lives  donation  brings hope support and brighter future Give todday and make a difference
                    </p> 
                  
                    </div>   


                   
                 <div  style={{display:"flex" , width:"100%"   , justifyContent:"space-between" , margintop:"20%" , padding:"2%  " , borderStyle:"solid"}}>

                           <div  > 
                     <button  style={{backgroundColor:"white" , color:"red"   , width:"200%"  , borderRadius:"10px" , border:"none"   , padding:"20%"        }} >
                        Donate now 
                    </button> 

                    </div>


                    <div style={{width:"40%" }}>
                           <img  style={{width:"100%"}}src={mobile5}></img>
                    </div>
                   
                     </div> 



























                     </div>
                    

                 </div>  


                 <div  style={{width:"40%" , marginLeft:"5%"}}>
                    
                     <img style={{width:"100%"}}  src={mobile6} ></img>

                </div>
            

                   
              
                    





             </div> 
             </div> 
             </div> 
            )
}
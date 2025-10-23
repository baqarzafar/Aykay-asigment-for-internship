import React from "react";
import "./styles.css"
import icon1 from "./icons/icon1.png"
import icon2 from "./icons/icon2.png"


export  default function Jointhefun(){




    return(
<div         style={{width:"100%" , display:"flex" , justifyContent:"center " , color:"white"}}           >
    
        <div      style={{backgroundColor:"#FF5349" , width:"90%"   , borderRadius:"40px 40px 0% 0%" , padding:"2%"   }} >


            
                   <div  style={{display:"flex"}}      >
                 <div>
                       


                       <div>

                        <div   style={{fontSize:"3vh" , fontStretch:"expanded" , fontWeight:"bold"}}             >
                            <p>Join the Fun-Download</p>
                        </div>
                        <div  style={{fontSize:"3vh" , fontStretch:"expanded" , fontWeight:"bold"}}                            >
                            <p>MyBindle Now !</p>
                        </div>
                            
                            <div>
                                <p>
                                    Your Social  Network.Your Way
                                </p>
                                <p>
                                  Download Mybindle Now  and Be a Part
                                </p>
                                <p>
                                    of a community  that's always  Evolving
                                </p>
                            </div>
                            





                  
                      
                      
                      
                       </div>


                       <div   style={{width:"30%" , display:"flex" , justifyContent:"space-beteen"}}  >     
                              <img style={{width:"40%"}} src={icon1}>
                              </img>
                              <img  style={{width:"40%"}}            src={icon2}>
                              </img>
                             
                       </div>
                 </div>
                 </div>

       
        </div>
</div>
    )
}
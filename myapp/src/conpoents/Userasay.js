
import React from "react"
import "./styles.css"
export     default  function Usersay(){
            

    const array = [


        {
            
            Rating:5,
            comments:"This plateform changed the way I stay in touch with  my friends and family. The interface is smooth and i love  how easy it is  to  share my moments",
            name:"Ekmily R",
            country: "USA"
        },
        {
            
            Rating:5,
            comments:"This plateform changed the way I stay in touch with  my friends and family. The interface is smooth and i love  how easy it is  to  share my moments",
            name:"Ekmily R",
            country: "USA"
        },
        {
            
            Rating:5,
            comments:"This plateform changed the way I stay in touch with  my friends and family. The interface is smooth and i love  how easy it is  to  share my moments",
            name:"Ekmily R",
            country: "USA"
        },
        {
            
            Rating:5,
            comments:"This plateform changed the way I stay in touch with  my friends and family. The interface is smooth and i love  how easy it is  to  share my moments",
            name:"Ekmily R",
            country: "USA"
        },
        {
            
            Rating:5,
            comments:"This plateform changed the way I stay in touch with  my friends and family. The interface is smooth and i love  how easy it is  to  share my moments",
            name:"Ekmily R",
            country: "USA"
        },
        {
            
            Rating:5,
            comments:"This plateform changed the way I stay in touch with  my friends and family. The interface is smooth and i love  how easy it is  to  share my moments",
            name:"Ekmily R",
            country: "USA"
        }
        
      
    ]

return(
    <div  style={{display:"flex" , justifyContent:"center"  , width:"100%"}}>
           
           <div style={{width:"80%"}} >

            <div style={{display:"flex" , justifyContent:"center"}}>
                   
                <h1   style={{fontSize:"5vh" , fontStretch:"expanded" , fontWeight:"bold"}} >What Our Users Say </h1>

            </div>



                      <div style={{display:"flex", flexFlow:"wrap" , width:"100%"}}>
                 {array.map((data)=>{


                            return(
                                <div className="boxshadow"  style={{backgroundColor:"#F8F7F7"  ,  width:"30%" ,padding:"1%"  , margin:"0% 0% 3% 10px"  }}>
                                    <span>Rating</span>
                               <div>     <text>{data.comments}</text></div>

                                      <div>
                                        <span><image></image> </span>
                                        <p>{data.name}</p>
                                        <p>{data.country}</p>
                                        </div>

                                </div>
                            )
                 })}


            </div>

            <div style={{display:"flex" , justifyContent:"center"}}>
                <button className="boxshadow" style={{backgroundColor:"white" , color:"#FF5349" ,width:"20%", height:"40px" , borderRadius:"10px"   , border:"none"        }}                    >See more</button>
            </div>

           </div>




    </div>
)


}
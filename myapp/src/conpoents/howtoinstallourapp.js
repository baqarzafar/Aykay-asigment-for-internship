import React from "react";
import "./styles.css"

export function Installour(){





    let  content =[

        {name :"Download", content:"Open Play Store or App Store "},
        {name :"Install App", content:"The app will install automatically "},
        {name :"Ready to use", content:"Singn up or log in  to start exploring "},
     
    ]


    return (


        <div     style={{display:"flex" , justifyContent:"center" , width:"100%"}}        >

                  <div>
                 <div    style={{display:"flex" , justifyContent:"center"}}     >
                         <div>
                        <p   style={{fontSize:"50px" , fontStretch:"expanded" , fontWeight:"bold"}}                  >
                            How To Install Our App
                        </p>
                    </div>
                 </div>
                    <div     style={{display:"flex" , justifyContent:"center"}}                              >
                        <p>
                        Getting  started   it quick and easy ! Follow  these simple steps to install and start using MyBindle today
                        </p>
                    </div>

                    <div style={{display:"flex" , justifyContent:"space-around" ,fontWeight:"bold"}}>

                     <p>01</p>
                     <p>02</p>
                     <p>03</p>

                    </div>
                  <div>
                      <div style={{display:"flex", flexFlow:"wrap" }}>

                        {content.map(( data   )=>{

                            return(
                                 <div  className="boxshadow" style={{backgroundColor:"#F8F7F7",   borderRadius:"5px" , borderColor:"black", borderWidth:"1px"   ,  width:"200px" , height:"100px" , padding:"20px"  , margin:"0% 0% 3% 10px"  , boxshadow: "10px 10px lightblue"}}>
                                <p  style={{fontWeight:"bold"}}>    {data.name}</p>
                                <p>    {data.content}</p>
                                 </div>

                            )
                        })}

                    </div>
                  </div>
                  </div>


        </div>
    )

}
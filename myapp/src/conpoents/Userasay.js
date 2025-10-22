

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
    <div  style={{display:"flex" , justifyContent:"center"}}>
           
           <div >

            <div style={{display:"flex" , justifyContent:"center"}}>
                   
                <p    style={{fontSize:"50px" , fontStretch:"expanded" , fontWeight:"bold"}} >What Our Users Say </p>

            </div>



                      <div style={{display:"flex", flexFlow:"wrap" , width:"800px"}}>
                 {array.map((data)=>{


                            return(
                                <div  style={{backgroundColor:"#F8F7F7",   borderRadius:"5px" , borderColor:"black", borderWidth:"1px"   , borderStyle:"solid"  ,  width:"200px" , height:"200px" , padding:"20px"  , margin:"0% 0% 3% 10px"  , boxshadow: "10px 10px lightblue"}}>
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
                <button style={{backgroundColor:"white" , color:"#FF5349" ,width:"20%", height:"40px" , borderRadius:"10px"           }}                    >See more</button>
            </div>

           </div>




    </div>
)


}
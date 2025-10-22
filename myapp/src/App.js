import logo from './logo.svg';

import { Header } from './conpoents/Header';
import { Content } from './conpoents/contenc';
import { Jointhefun } from './conpoents/jointhefun';
import { Installour } from './conpoents/howtoinstallourapp';
import BetheReasone from './conpoents/bethereasone';
function App() {



  const  styleFor = {backgroundColor:"red" , width:"100%" , height:"700px"}

  return (

    <div>
    <div    style={styleFor}  >


     <Header></Header>
    </div>
     <Content></Content> 
     {/* <BetheReasone></BetheReasone> */}
     

     
                 {/* <Jointhefun></Jointhefun> */}

    </div>
  );
}

export default App;

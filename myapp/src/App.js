import logo from './logo.svg';

import { Header } from './conpoents/Header';
import { Content } from './conpoents/contenc';
function App() {



  const  styleFor = {backgroundColor:"red" , width:"100%" , height:"700px"}

  return (

    <div>
    <div    style={styleFor}  >


     <Header></Header>
    </div>
     <Content></Content> 




    </div>
  );
}

export default App;

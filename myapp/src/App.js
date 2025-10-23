import logo from './logo.svg';

import { Header } from './conpoents/Header';
import { Content } from './conpoents/contenc';
import  Jointhefun  from './conpoents/jointhefun';
import { Installour } from './conpoents/howtoinstallourapp';
import BetheReasone from './conpoents/bethereasone';
import Usersay from './conpoents/Userasay';
import EveryClick from './conpoents/everyClink';
import "./conpoents/styles.css"
function App() {



  

  return (

    <div >


     <Header></Header>
     <Content></Content>
     <EveryClick></EveryClick>
      <Installour></Installour>
      <BetheReasone></BetheReasone>
      <Usersay></Usersay>
      <Jointhefun></Jointhefun>

  
     

     
                

    </div>
  );
}

export default App;

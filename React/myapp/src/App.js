import React, { Component, createContext } from 'react';
import CompA from './ContextApi/CompA';
const MyContext=createContext();


class App extends Component{
  state={
  
    name:"Ashish",
    age:25

}
  btnHandler=()=>{
    this.setState({
      name:"Manish",
      age:19
    })
  }
render(){
  const data={
    pData:this.state,
    cData:this.btnHandler
  }
  return (
    <>
        <MyContext.Provider value={data}>
        <CompA/>        
        </MyContext.Provider>
    </>
  
  );
}
}

export default App;
export {MyContext};

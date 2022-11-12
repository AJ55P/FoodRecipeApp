import React, { useState, useEffect } from 'react'
// import Main from './Main';
import Search from './Search';
import Menu from './Menu';

function App () {
  const [stage, setStage] = useState({ currStage: 'Home' })

  return (
    <div>
      <Search/>
      <Menu/>
    </div>
  )
}
export default App

// Going to convert to hook component!
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {state: "home"};
//     }

//     componentDidMount(){

//     }

//     componentWillUnmount(){

//     }

//     render(){
//         return (
//             <Home/>,
//             <Menu/>
//         );
//     }
// }
// export default App;

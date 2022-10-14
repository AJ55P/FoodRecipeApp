import React, { useState, useEffect } from 'react'
import Home from './Home'
import Menu from './Menu'

function App () {
  const [stage, setStage] = useState({ currStage: 'Home' })

  return (
    <div className="border-4 border-red-700 p-2 rounded">
      <Menu />
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

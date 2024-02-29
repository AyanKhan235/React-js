import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function  MyApp() {
  return(
    <div>
      <h2>Custome React |</h2>
    </div>
  )
  
}
// const reactElement={
//   type:'a',
//   props:{
//       href:'http://google.com',
//       target:'_blank'
//   },
//   children:'click me to visit'
// }
const anotherElement=(
  <a href="http://google.com" target="_blank">
    click me to visit
  </a>
)
const reactElement=React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'}, // it object is compulsary 
  'click me to vsit our google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

  // <MyApp/>
  // reactElement      // will not work
  // anotherElement

  // reactElement
  <App/>

 
)

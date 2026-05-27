// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'; 
import FormValidation from './frontend/FormValidation.js';
import ResultPage from './frontend/ResultPage.js';
function App(){
return <>
  <Router>
    <Routes>
      <Route path="/" element={<FormValidation></FormValidation>}></Route>
      <Route path="/successful" element={<ResultPage></ResultPage>}></Route>
    </Routes>
  </Router>
</>
}


export default App;

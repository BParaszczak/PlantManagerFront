import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

// class App extends React.PureComponent {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//         </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//         </a>
//         </header>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
            </p>
        <FirstComponent />
        <div className="NewComponents">
          <div><FunctionalComponent /></div>
          <div><ClassComponent /></div>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            </a>
      </header>
    </div>
  );
}



export default App;

import logo from './logo.svg';
import './App.css';
// 만들어준 컴포넌트 추가
import Component001 from './Component001';
import Hello from './component/Hello';

function App() {
  return (  // html 코드들을 리턴해줌
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <p>20241028 react oss class</p> 
          <h1>Hello World!</h1>
        </div>

        <button onclick="getDataFromJSONFile()">get DATA</button>
        <div id="div_students">
        </div>

        <Hello/>
        <Component001/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        click! move to react
      </header>
    </div>
  );
}

export default App;

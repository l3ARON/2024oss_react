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
          <p>2024-2 react oss class</p>
          <div>22100162 김유영 OSS 수업 Assignment 4-2</div>
          <h1>Hello World!</h1>
        </div>

        <Hello/>
        <Component001/>

        <a
          className="App-link"
          href="https://github.com/l3ARON/2024oss_react"
          target="_blank"
        >
          my_git_hub
        </a>

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

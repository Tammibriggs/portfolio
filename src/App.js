import './App.css';
import Header from './Header'
import Intro from './Intro'
import Skills from './Skills'
import About from './About'
import Works from './Works'
import Articles from './Articles'
import Email from './Email'

function App() {
  return (
    <div className="app">
      <Header/>
      <Intro />
      <Skills/>
      <About/>
      <Works/>
      <Articles/>
      <Email/>
    </div>
  );
}

export default App;

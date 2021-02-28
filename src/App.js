import './App.css';

// Components
import Logo from './components/Logo/index';
import Search from './components/Search/index';
import CardContainer from './components/CardContainer/index';

function App() {
  return (
    <div className="App">
      <Logo />
      <Search />
      <CardContainer />
    </div>
  );
}

export default App;

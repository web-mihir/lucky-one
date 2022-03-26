import './App.css';
import Header from './Components/Header';
import Question from './Components/Question';
import TvHouse from './Components/TvHouse';

function App() {
  return (
    <main className="App">
      <Header></Header>
      <TvHouse></TvHouse>
      <Question></Question>
    </main>
  );
}

export default App;

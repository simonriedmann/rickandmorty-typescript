import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Card from './components/Card';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(
      (data) => {
        setCharacters(data.results)
      })
  }, [])

  return (
    <div className="App">
      <Header title="Rick and Morty" />
      <h1>Rick and Morty App</h1>
      {characters.map((character) => (
        <Card character={character} />
      ))}
    </div>
  );
}

export default App;

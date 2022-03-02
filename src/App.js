import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from './components/Characters'
import Pagination from './components/Pagination'


function App() {

  const [character, setCharacter] = useState([])
  const [info, setInfo] = useState({})


  const fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        setCharacter(data.results);
        setInfo(data.info);
      }) 
      .catch(error => console.log(error))
  };
  const onPrevious = () => {
    fetchCharacters(info.prev)
  }
  const onNext = () => {
    fetchCharacters(info.next)
  }
  useEffect(() => {
    fetchCharacters();
  }, [])
  return (
    <>
      <Navbar></Navbar>
      <Pagination prev={info.prev} next={info.nex} onPrevious={onPrevious} onNext={onNext}></Pagination>
      <div className="container mt-5">
        <Characters characters={character}></Characters>
      </div>
      <Pagination></Pagination>
    </>
  );
}

export default App;

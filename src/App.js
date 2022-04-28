import React, { useState, useEffect } from "react"
import './App.css';
import Container from 'react-bootstrap/Container'
import SearchBar from "./components/SearchBar"


function App() {
  let [search, setSearch] = useState('');
  let [data, setData] = useState([]);
  let [ message, setMessage ] = useState('Capture Pokemon')

  const Poke_URL = `https://pokeapi.co/api/v2/pokemon/`

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
          document.title = `${search} Pokemon`
          const response = await fetch (Poke_URL + search);
          const resData = await response.json();
          console.log(resData)
          if(resData.results.length > 0) {
            setData(resData.results)
          } else {
            setMessage('We have not discovered that Pokemon yet!')
          }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
		e.preventDefault()
		setSearch(term)
	}

  return (
    <Container>
      {message}
         <SearchBar handleSearch = {handleSearch}></SearchBar>
    </Container>
    
  );
}

export default App;

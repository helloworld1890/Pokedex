import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const SearchBar = (props) => {
  let [ searchTerm, setSearchTerm ] = useState('');
  return (
    <div>
      <form>
        <label>Pokedex</label>
        <input type="text" placeholder="I choose you" onChange={(e) => {
          setSearchTerm(e.target.value)
        }} />
        <input type="submit" />
      </form>
    </div>
    // <Container style={{margin: "30px"}}>
    //     <Form>
    //         <Form.Label>Choose your Pokemon!</Form.Label>
    //         <Form.Control type="text" placeholder="I choose you!" />
    //         <Button variant="primary" type="submit">Submit</Button>
    //     </Form>
    // </Container>
  );
};

export default SearchBar;

import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



const SearchBar = (props) => {

  const [ term, setTerm ] = useState('');
  
  return (
    
    <Container style={{margin: "30px"}}>
        <Form>
            <Form.Label>Choose your Pokemon!</Form.Label>
            <Form.Control type="text" onChange={(e) =>  {setTerm(e.target.value) 
              console.log(e.target.value) }} placeholder="I choose you!" />
            <Button variant="primary" onClick={(e) => props.handleSearch(e, term)}  type="submit">Submit</Button>
        </Form>
    </Container>
  )
};

export default SearchBar;

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function SearchResults() {
  return (
    <>
    <Form className="d-flex align-items-center"/* action='/detail'*/>
      <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" className="d-flex align-items-center p-0">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search"
        
        />
      </Dropdown.Toggle>
        <Dropdown.Menu align={{lg:'end'}} style={{width:'80vw'}}>
          <Dropdown.Header>Disease</Dropdown.Header>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Symptoms</Dropdown.Header>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

        </Dropdown.Menu>
        </Dropdown>
        <Button type="submit" variant="light" className=' d-flex align-items-center' style={{height:40}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></Button>
    </Form>
    </>
  )
}

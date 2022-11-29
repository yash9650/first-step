import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearch from '../Hooks/useSearch';
import Spinner from 'react-bootstrap/esm/Spinner';

export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [toggleDropDown,setToggleDropDown] = useState(false);
  const { diseaseList, symptomList, isLoading } = useSearch(value);

  const changeHandler = (e) => {
    setToggleDropDown(true);
    setValue(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setToggleDropDown(false);
    if(value.length === 0){
      return
    }
    navigate('/diseases',{
      state: {
        diseaseList,
        symptomList
      }
    });
  }

  const clickHandler = (e) => {
    setValue(e.dName);
    setToggleDropDown(false);
    navigate(`/disease/${e._id}`);
  }

  return (
    <div className='p-2 sticky-top' style={{ backgroundColor: 'white', boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">First-Step</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/hospitals">Hospitals Nearby</Nav.Link>
              <Nav.Link target="/" href="https://www.worldometers.info/coronavirus/">Covid 19</Nav.Link>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" /></svg>
              </Nav.Link>
            </Nav>
            <Nav>
              <Form className="d-flex align-items-center" onSubmit={submitHandler}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={changeHandler}
                  value={value}
                />
                <Button type="submit" disabled={isLoading} variant="light" className=' d-flex align-items-center' style={{ height: 40 }}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg></Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {value.length > 0 && !isLoading && toggleDropDown && <div className="displayResults px-5 pt-4" id="displaySearches" style={{ width: '98vw', position: 'absolute', display: "flex", flexDirection: 'column', background: 'rgba(255,255,255,0.8)' }}>
        {diseaseList.length > 0 && diseaseList.slice(0, 3).map((e, i) => <div key={e._id}>{i === 0 && "Diseases: "}<button onClick={() => clickHandler(e)} className='btn btn-link' style={{ textDecoration: 'none', color: 'black', width: '100%', textAlign: 'left' }}>{e.dName} </button><hr /></div>)}
        {symptomList.length > 0 && symptomList.slice(0, 3).map((e, index) => {
          return e.symptoms.slice(0, 1).map((ele, i) => {
            return <div key={e._id + i}>{index === 0 && "Symptoms: "}<button onClick={() => clickHandler(e)} className='btn btn-link' style={{ textDecoration: 'none', color: 'black', width: '100%', textAlign: 'left' }}>
              {ele} </button><hr /></div>
          })
        })}
        {(diseaseList.length === 0 && symptomList.length === 0) && <div>
          <h5>Couldn't find anything on '{value}'</h5>
        </div>
        }
      </div>}
      {isLoading && toggleDropDown && value.length > 0 && <div className="displayResults px-5 pt-3 pb-2" id="displaySearches" style={{ width: '98vw', position: 'absolute', display: "flex", flexDirection: 'column', background: 'rgba(255,255,255,0.8)' }}>
        <Spinner className='d-flex m-auto' animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      }
    </div>
  )
}

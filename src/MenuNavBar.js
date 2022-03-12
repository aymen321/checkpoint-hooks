import React from 'react'
import { Navbar, Button, FormControl, Form, Nav, Container, Offcanvas } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactStars from "react-rating-stars-component"
import AddMovie from './AddMovie'
import '../src/style.css'

const MenuNavBar = ({ changeRating, searchTitle, addMovie }) => {

    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand>Menu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link>Home</Nav.Link>

                                <AddMovie addMovie={addMovie} />
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={(e) => searchTitle(e.target.value)}
                                />
                                <Button variant="outline-success">Search </Button>
                            </Form>

                            <Form className="d-flex">
                                <ReactStars
                                    count={5}
                                    onChange={changeRating}
                                    size={24}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                            </Form>


                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default MenuNavBar

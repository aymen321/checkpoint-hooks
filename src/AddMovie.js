import React, { useState } from 'react'
import { Form, Col, Button, Row, Modal, Nav } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/style.css'


const AddMovie = ({ addMovie }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [rate, setRate] = useState(1)
    const [movie, setMovie] = useState({
        title: "",
        imgM: "",
        descreption: "",
        url: "",
    })
    const changerating = (newRating) => {
        console.log("111111", newRating);
    };

    const handleChenge = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addMovie({ ...movie, rating: rate })
    }

    return (
        <div>
            <Nav.Link variant="primary" onClick={handleShow}>
                Add Movie
            </Nav.Link>
            <Modal show={show} onHide={handleClose} >
                <Form className='formAdd'>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Control type="text" placeholder="Movie's title" onChange={handleChenge} name="title" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridDescription">
                            <Form.Control type="text" placeholder="Movie's descreption" onChange={handleChenge} name="descreption" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId="formGridURL" >
                            <Form.Control placeholder="Movie's URL" onChange={handleChenge} name="url" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridImage">
                            <Form.Control placeholder="Image's URL" onChange={handleChenge} name="imgM" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="formGridRating" >
                            {/* <Form.Label>Rating</Form.Label> */}
                            <ReactStars
                                count={5}
                                onChange={changerating}
                                value={rate}
                                onChange={(value) => setRate(value)} name="rating"
                                // isHalf={true}
                                size={24}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                        </Form.Group>
                    </Row>
                    <Button className="btnAdd" variant="primary" type="submit" onClick={handleSubmit} >
                        Submit
                    </Button>
                </Form>
            </Modal>
        </div>
    )
}

export default AddMovie

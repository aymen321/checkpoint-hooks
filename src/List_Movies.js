import React, { useState } from 'react'
import '../src/style.css'
import { Card } from 'react-bootstrap';
import Rating from './Rating';

import 'bootstrap/dist/css/bootstrap.min.css';


const List_Movies = ({ movies }) => {
  console.log(movies)
  return (
    <div className='carsList'>
      {movies.map((mv, i) => (
        <Card className='card'>
          <Card.Img variant="top" src={mv.imgM}  className='imgCard'/>
          <Card.Body className="cadrBody">
            <Card.Title>{mv.title.toUpperCase()}</Card.Title>
            <Card.Text className='descrpt' >
              {mv.descreption}
            </Card.Text>
            <Card.Text>
            <a href={mv.url}>View</a>

              
            </Card.Text>
            <Rating stars={mv.rating} />
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default List_Movies

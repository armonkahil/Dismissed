
import React from 'react'
import Jumbotron from '../components/Jumbotron'
import { Row, Column, Container } from '../components/Grid'

function Home() {
  return (
    <>
      <Container>
        <Row styling='row align-self-center'>
          <Column>
            <Jumbotron title='Welcome to Harmony' lead='Dismissal'></Jumbotron>
          </Column>
        </Row>
      </Container>
    </>
  )
}

export default Home

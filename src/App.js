import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import 'bootstrap/dist/css/bootstrap.min.css'

import MainWeatherWidget from './Components//MainWeatherWidget'
import './App.css'

function App() {

  return (
    <Container>
      <Col
        md={{span:8, offset:2}}
        xl={{span:6, offset:3}}
        className='main-column'
      >
        <MainWeatherWidget />
      </Col>
    </Container>
  )
}

export default App

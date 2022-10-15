import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

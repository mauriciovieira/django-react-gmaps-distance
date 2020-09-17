import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Row,
} from 'shards-react';

import MapContainer from './MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import './App.css';

require('dotenv').config()

const center = {
  lat: -34.6120439,
  lng: -58.4104192
}

function App() {
  const [clear, setClear] = useState(false)

  function resetClear() {
    setClear(() => false);
  }

  return (
    <section>
      <Container style={{ maxWidth: '100vw' }} className="center-items">
        <Row className="mt-5">
          <Col>
            <h2>Calculate distance between two points</h2>
          </Col>
        </Row>
        <Row>
          <Col className="center-items">
            <MapContainer center={center} clear={clear} resetClear={resetClear} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => {
              setClear(() => true);
            }}> Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default App;

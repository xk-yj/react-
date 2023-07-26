import React from 'react';
import Row from '../Row';
import Col from '../Col';

export default function () {
  return (
    <div>
      <span style={{ backgroundColor: '#333' }}></span>
      <Row
        justify="space-between"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }}></Col>
      </Row>

      <Row
        justify="space-around"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }}></Col>
      </Row>

      <Row
        justify="space-between"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }}></Col>
      </Row>

      <Row
        justify="space-around"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={2} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={2} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={2} style={{ backgroundColor: '#86e0fb' }}></Col>
        <Col grow={2} style={{ backgroundColor: '#86e0fb' }}></Col>
      </Row>
    </div>
  );
}

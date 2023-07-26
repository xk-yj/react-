import React from 'react';
import Row from '../Row';
import Col from '../Col';

export default function () {
  return (
    <div>
      <span style={{ backgroundColor: '#333' }}></span>
      <Row style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
        <Col grow={1} style={{ backgroundColor: '#86e0fb' }} gutter={10}></Col>
      </Row>
      <Row
        justify="end"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
      </Row>
      <Row
        justify="state"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
      </Row>
      <Row
        justify="center"
        style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}
      >
        <Col grow={6} style={{ backgroundColor: '#86e0fb' }} gutter={200}></Col>
      </Row>
    </div>
  );
}

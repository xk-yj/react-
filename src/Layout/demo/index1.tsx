import React from 'react';
import Row from '../Row';
import Col from '../Col';

export default function () {
  return (
    <div>
      <span style={{ backgroundColor: '#333' }}></span>
      <Row style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}>
        <Col grow={10} style={{ backgroundColor: '#86e0fb' }}></Col>
      </Row>
      <Row style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}>
        <Col grow={5} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={5} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
      </Row>
      <Row style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={4} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
      </Row>
      <Row style={{ backgroundColor: '#f5f5f5', height: '50px', marginBottom: '10px' }}>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
        <Col grow={3} style={{ backgroundColor: '#86e0fb' }} gutter={20}></Col>
      </Row>
    </div>
  );
}

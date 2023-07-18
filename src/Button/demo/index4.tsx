import React from 'react';
import Button from '../index';

export default function ButtonDemo1() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button type="text">文本按钮</Button>
            <Button type="text">文本按钮</Button>
        </div>
    );
}
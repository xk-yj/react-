import React from 'react';
import Dropdown from '..';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Dropdown option={options} value="鼠标悬浮" />
      </div>

      <div>
        <Dropdown option={options} trigger="click" value="鼠标点击" />
      </div>
    </div>
  );
}

export default App;

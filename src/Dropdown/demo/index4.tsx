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
        <Dropdown option={options} type="button" size="small" value="小型" />
      </div>
      <div>
        <Dropdown option={options} type="button" size="medium" value="中型" />
      </div>
      <div>
        <Dropdown option={options} type="button" size="large" value="大型" />
      </div>
    </div>
  );
}

export default App;

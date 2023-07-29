import React from 'react';
import Dropdown from '..';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <div>
      <Dropdown option={options} />
    </div>
  );
}

export default App;

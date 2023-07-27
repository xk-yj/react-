import React from 'react';
import RadioGroupButton from '../RadioGroupButton';

export default function index4() {
  let radio = 'radio4';
  let radio1 = 'radio5';
  let radio2 = 'radio6';
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <RadioGroupButton
          defaultValue={'春'}
          size={'medium'}
          value={radio1}
          label={'春'}
        ></RadioGroupButton>
        <RadioGroupButton size={'medium'} value={radio1} label={'夏'}></RadioGroupButton>
        <RadioGroupButton size={'medium'} value={radio1} label={'秋'}></RadioGroupButton>
        <RadioGroupButton size={'medium'} value={radio1} label={'冬'}></RadioGroupButton>
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <RadioGroupButton size={'small'} value={radio} label={'上海'}></RadioGroupButton>
        <RadioGroupButton
          defaultValue={'北京'}
          size={'small'}
          value={radio}
          label={'北京'}
        ></RadioGroupButton>
        <RadioGroupButton size={'small'} value={radio} label={'广州'}></RadioGroupButton>
        <RadioGroupButton size={'small'} value={radio} label={'深圳'}></RadioGroupButton>
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <RadioGroupButton size={'mini'} value={radio2} label={'喜羊羊'}></RadioGroupButton>
        <RadioGroupButton size={'mini'} value={radio2} label={'美羊羊'}></RadioGroupButton>
        <RadioGroupButton size={'mini'} value={radio2} label={'懒羊羊'}></RadioGroupButton>
        <RadioGroupButton
          defaultValue={'灰太狼'}
          size={'mini'}
          value={radio2}
          label={'灰太狼'}
        ></RadioGroupButton>
      </div>
    </div>
  );
}

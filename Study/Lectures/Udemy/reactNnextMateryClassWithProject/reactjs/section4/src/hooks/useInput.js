import { useState } from 'react';

export default function useInput() {
  const [value, setValue] = useState('');
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  return [value, onChangeValue];
}

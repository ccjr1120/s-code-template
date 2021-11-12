import { useState } from 'react';

export default function useToggle(initVal) {
  if (typeof initVal !== 'boolean') throw new Error('The value can only be boolean.');
  const [toggle, setToggle] = useState(initVal);
  const changeToggle = (value) => {
    setToggle(typeof value === 'boolean' ? value : !toggle);
  };
  return [toggle, changeToggle];
}

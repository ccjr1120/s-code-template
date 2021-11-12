import { useContext } from 'react';
import Context from './Context';

export default function useNavStore() {
  const { state, dispatch } = useContext(Context);
  return { state, dispatch };
}

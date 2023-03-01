import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { decrement, increment } from './counterSlice';

const Index = () => {
  const navigate = useNavigate();
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <p className='read-the-docs'>Click on the Vite logo to learn more</p>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => dispatch(decrement())}>-</button>
        &nbsp; count is {count} &nbsp;
        <button onClick={() => dispatch(increment())}>+</button>
        <p>
          Edit <code>src/pages/home.tsx</code> and save to test dispatch & HMR
        </p>
      </div>
      <button onClick={() => navigate('/about')}>go about</button>
    </div>
  );
};

export default Index;

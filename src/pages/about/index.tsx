import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { getUserInfo } from '@/api';
import reactLogo from '@/assets/react.svg';

const Index = () => {
  const navigate = useNavigate();
  const [data, setData] = useState('');

  const handleRequest = async () => {
    const userId = Math.round(Math.random() * 10);
    const res = await getUserInfo(userId);
    setData(JSON.stringify(res));
  };

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <p className='read-the-docs'>Click on the React logo to learn more</p>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>data is: {data}</div>
      <button onClick={handleRequest}>request test</button>
      &nbsp;
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default Index;

import { useNavigate } from 'react-router-dom';
import reactLogo from '@assets/react.svg?url';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <p className='read-the-docs'>Click on the React logo to learn more</p>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
};

export default Index;

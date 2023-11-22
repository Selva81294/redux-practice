import { useSelector } from 'react-redux';
import './App.css';
import Login from './Login';
import Profile from './Profile';

function App() {

  const user = useSelector(state => state.user.value);

  return (
    <div className="App">
      <h1>React-Redux</h1>
      {
        user.name ? <Profile/> : ""
      }
      
      <Login/>
    </div>
  );
}

export default App;

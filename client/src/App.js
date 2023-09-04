import axios from 'axios';
import './App.css';
import Routing from './Routing';
import UserContextProvider from './UserContextProvider';

function App() {

  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routing />
    </UserContextProvider>
  );
}

export default App;

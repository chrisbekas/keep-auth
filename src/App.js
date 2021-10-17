import {useIsAuthenticated} from 'react-auth-kit';
import SignIn from './components/SignIn';
import User from './components/User';

function App() {

  const isAuthenticated = useIsAuthenticated();

  return (

    <div className="App">

        <h3>
            KEEP Auth Demo
        </h3>

        { isAuthenticated() ? <User /> : <SignIn /> }

    </div>
    
  );
}

export default App;
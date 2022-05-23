import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile";
import {userAuth0} from '@auth0/auth0-react'

function App() {
  const {isLoading} = userAuth0();
  
  if(isLoading) return <div>Loading...</div>

  return (
    <>
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </>
  );
}

export default App;

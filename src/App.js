import CurrencyDushbord from './components/CurrencyDushbord';
import './App.css';
import { Form } from './components/Form/Form';
import Auth from './components/Auth/Auth';
import {

  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {auth} from './services/firebase'






function App() {

  const onCreateAccount=async(data)=>{
    const {email, password}=data;
    try {
      const {user}=await createUserWithEmailAndPassword(auth, email, password);
      return {token:user.accessToken, email:user.email}
        } catch (error) {
      alert('Something went wrong. Check input data register');
      console.log(error.message);
    }
  };

  const onLoginUser=async(data)=>{
    const {email, password}=data;
    try {
      const {user}=await signInWithEmailAndPassword(auth, email, password);
      return {token:user.accessToken, email:user.email}
    } catch (error) {
      alert('Something went wrong. Check input data login');
      console.log(error.message);
    }
  }

  const onLogOutUser=async()=>{
    try {
     const{result}= await signOut(auth);
     console.log(result);
     return result
    } catch (error) {
      
    }
  }
  return (
  <>
    <div className="App">
      <header className="App-header">
        <p>
          Hello world!
        </p>
      </header>
      <Form/>
      <CurrencyDushbord/>
      <Auth onSaveUserRegister={onCreateAccount} onSaveUserLolgin={onLoginUser} onLogOutUser={onLogOutUser}/>

    </div>
    </>
  );
}

export default App;

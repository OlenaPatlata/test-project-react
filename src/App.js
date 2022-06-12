import CurrencyDushbord from './components/CurrencyDushbord';
import './App.css';
import { Form } from './components/Form/Form';
import Auth from './components/Auth/Auth';
import { firebase } from 'services/firebase';
import Nav from './components/Nav/Nav';


const {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = firebase;

function App() {

  const onCreateAccount=async({email, password})=>{
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
          const user=userCredential.user;
      const token=user.accessToken
      console.log(token);
      return user})
    .catch ((error)=> {
      alert('Something went wrong. Check input data register');
      console.log(error.code);
      console.log(error.message);
    })
  };

  const onLoginUser=async(data)=>{
 
        await signInWithEmailAndPassword(auth,  data.email, data.password)
      .then((userCredential)=>{
        const user=userCredential.user;
        return user})
        .catch ((error)=> {
        alert('Something went wrong. Check input data register');
        console.log(error.code);
        console.log(error.message);
      })
  }

  const onLogOutUser=async()=>{
 await signOut(auth)
     .then(()=>{  
      // const{users}=result
      console.log(111);
      // console.log(users);
      return })
      .catch ((error)=> {
      alert('Something went wrong during logOut');
      console.log(error.message);
    })
  }
  return (
  <>
    <Nav/>
    {/* <div className="App"> */}
      {/* <header className="App-header">
        <p>
          Hello world!
        </p>
      </header> */}
      <Form/>
      <CurrencyDushbord/>
      <Auth onSaveUserRegister={onCreateAccount} onSaveUserLolgin={onLoginUser} onLogOutUser={onLogOutUser}/>
    
    {/* </div> */}
    </>
  );
}

export default App;

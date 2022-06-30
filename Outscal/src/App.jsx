import { MainPage } from "./components/main";

 
 const App = () => {  

  const API = `http://localhost:8080/products`;  

  return (
    <div className='container'>
      <h1>Welcome to the Keydown Listening Component</h1> 
      <MainPage/>
    </div>
  );
};
export default App

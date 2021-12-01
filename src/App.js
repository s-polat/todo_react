
import './App.scss';
import Completed from './components/Completed';
import Header from './components/Header';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App card">
         <Header/>
         <Input/>
        
         <Todo/>
         
         <Completed/>

     
    </div>
  );
}

export default App;

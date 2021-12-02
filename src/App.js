
import './App.scss';
import Completed from './components/Completed';
import Header from './components/Header';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const addTodo = (name) => {
    alert(`Button geklickt. Name der Aufgabe "${name}"`)}
  return (
    <div className="App card">
         <Header/>
         <Input onButton={addTodo}/>
        
         <Todo/>
         
         <Completed/>

     
    </div>
  );
}

export default App;

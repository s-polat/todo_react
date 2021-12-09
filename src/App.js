
import './App.scss';
import Completed from './components/Completed';
import Header from './components/Header';
import Input from './components/Input';
import Todo from './components/Todo';
import {useReducer} from "react"
function reducer(state, action){
  switch (action.type) {
    case 'add':
      const arr=[...state]
      const todo= action.payload.name
      arr.push(todo)
      
      return arr;
      
  
    default:return state;
      
  }
}
function App() {
  const initial=[]
  const [state, dispatch] =useReducer(reducer,initial)
 
  return (
    <div className="App card">
         <Header/>
         <Input dispatch={dispatch}/>
        
         <Todo state={state}/>
         
         <Completed/>

     
    </div>
  );
}

export default App;

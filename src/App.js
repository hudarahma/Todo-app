
import React, { useState , useEffect} from 'react';
import './App.css'; 
import { Button, FormControl, InputLabel, Input} from '@material-ui/core'
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // When the app loads listen to the database and fetch all the todos ad they get added/removed

  useEffect(() => {
    // this code here... fires when the app.js gets load
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    // this will fire off whenwe click the button
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]);
    setInput('');  //Clear up the input after clicking add todo button
  }
  return (
    <div className="App">
      <h1>My TODO App</h1>
    {/* Add things from material UI */}
      <FormControl>
        <InputLabel htmlFor="my-input">Write a Todo</InputLabel>
        <Input  value={input} onChange={event => setInput(event.target.value)} id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
       <Button disabled={!input} type='submit' onClick={addTodo} color="primary">Add Todo</Button>


        <ul>
          {todos.map(todo => (
            <Todo todo={todo} />
          ))}
        </ul>


    </div>
  );
}

export default App;

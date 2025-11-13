import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

   const todoItems = [
      {
         name: 'Buy Milk',
         dueDate: '4/10/2025',
      },

      {
         name: 'Go to College',
         dueDate: '4/10/2025',
      },

      {
         name: 'Like this video',
         dueDate: 'Right Now!',
      },

   ];


   return (
      <center className="todo-container">
         <AppName></AppName>
         <AddTodo></AddTodo>
         <TodoItems todoItems={todoItems}></TodoItems>

      </center>
   );
}

export default App;

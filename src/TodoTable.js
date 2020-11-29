import React from 'react';
import './App.css';

function TodoTable(props) {

  return(
    <div>
        <table>
            <tbody>
              <tr><th>Date</th><th>Description</th></tr>
              {
                props.todos.map((todo, index) => 
                  <tr key={index}>
                    <td>{todo.date}</td>
                    <td>{todo.description}</td>
                    <td><button type="button" id={index} onClick={() => props.deleteTodo(index)}>Delete</button></td>
                  </tr>
                  )}           
            </tbody>
          </table> 
    </div>
  );
};

export default TodoTable;
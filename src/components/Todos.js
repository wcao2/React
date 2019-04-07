//this is a class-based component just like app.js
//27.24min
import React, { Component } from 'react';
import TodoItem from './TodoItem';  
//Due to Todos component has a prop of todos, so I need to import it(todos)
import PropTypes from 'prop-types';


class Todos extends Component {
  // markComplete=()=>{
  //   console.log('11111111111111');
  // }
  render() {
    //console.log(this.props.todos)
    //since i have array of todos,I need to loop through them and output sth(using map method)
    //this.props.todos is an array 
    return this.props.todos.map((todo)=>(
      //for each todo we map through
      //passing prop of todo,markComplete to TodoItem component!!!!!!!!!!!!!!!!! 
      <TodoItem key={todo.id} todo={todo} 
       markComplete={this.props.markComplete}
       delTodo={this.props.delTodo}/>
    )) ;
  }
}

//I want to find any PropTypes for this class
Todos.propTypes={
  //I have a prop called todos
  todos:PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired
}

export default Todos;

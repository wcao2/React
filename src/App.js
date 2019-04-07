import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
//import components into App.js
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
//due to I get data from JsonPlaceholder, so I do not need uuid anymore
//import uuid from 'uuid';

import './App.css';
import axios from 'axios';

class App extends Component {
  //think of state like cloud of data that hovers above all the components and I just send sth up to change it and rains back down
  state={
    todos:[
      // {
      //   id:uuid.v4(),
      //   title:'Take out the Trash',
      //   completed:false
      // },
      // {
      //   id:uuid.v4(),
      //   title:'Dinner with WeiCao',
      //   completed:false
      // },
      // {
      //   id:uuid.v4(),
      //   title:'Talk with Trump',
      //   completed:false
      // }
    ]
  }
  //another lifecycle method
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res=>this.setState({ todos:res.data}))
  }

   markComplete=(id) =>{
     //console.log(id)
     this.setState({todos:this.state.todos.map(todo => {
       //the second is id from the function
        if(todo.id===id){
            todo.completed=!todo.completed//I need to toggle completed
        }
        return todo;
     }
     )})
   }

   //Delete Todo
   //delTodo =(id) =>{!!!!!!!!!!!!!!!code
     //console.log(id)
     //copy everything already in there, using spread operator
     //I want to return the todos that don't match id here 
     //... is a spread operator
     //the deleted one will come back cos there are not a persisting database
     //this.setState({todos:[...this.state.todos.filter(todo => todo.id !==id)]});  !!!!!!!!!!!!!!!code
   //}!!!!!!!!!!!!!!!code

  //delete it on the serve and also update the ui
   delTodo=(id)=>{
     axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res=> this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]}));
   }

   //Add Todo(add to my state)  
  //  addTodo=(title) => {           !!!!!!!!!!!!!!!code
  //    //console.log(title)
  //    const newTodo={       !!!!!!!!!!!!!!!code
  //      //due to here, I use uuid
  //      id: uuid.v4(),    !!!!!!!!!!!!!!!code
  //      title,//key, value are same, so only use one word   !!!!!!!!!!!!!!!code
  //      completed:false      !!!!!!!!!!!!!!!code
  //    }
  //    this.setState({todos:[...this.state.todos,newTodo]});       !!!!!!!!!!!!!!!code
  //  }

  addTodo=(title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    }).then(res=>this.setState({todos:[...this.state.todos,res.data]}))
  }

  render() {
    //console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
            <div className="container">
              <Header/>
              {/* / means index.js , add exact cos If I go to about.js, it will show app.js above it*/}
              <Route exact path="/" render={props=>(
                <React.Fragment>
                      <AddTodo addTodo={this.addTodo}/>
                      {/* the way I embed a component into our main app component is simply with a tag */}
                      {/* I want to set main app component state and pass them down to Todos component as property  */}
                      {/* in here, Todos is a component, todos(prop) is equal to a property I created above 
                          then I passed it(todos) to Todos component as a prop!!!!!!!!!!!*/}
                      <Todos todos={this.state.todos} 
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}/>
                </React.Fragment>)}/>
                
              <Route path="/about" component={About}/>
              
             
            </div>
        </div>
      </Router>
    );
  }
}

export default App;

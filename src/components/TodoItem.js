//generate class-based component
import React,{Component} from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component{
    getStyle = ()=>{
        return{
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
    }

    //this is the method I just created, so if I want to use this, I need to use 'bind' 
    // markComplete(e){
    //     console.log(this.props)
    // }
    //or simply, use below
    // markComplete=(e) => {
    //     console.log(this.props)
    // }

    render(){
        //destructuring to pull the variables out of todo and the props ,like below bind(this,id),{title}
        const{id, title}=this.props.todo;
        return(
            <div style={this.getStyle()}>
                <p>
                    {/* before the title, I want to put check box and add the event*/}
                    {/* put a expression with a space here */}
                    {/* markComplete is a props from Todos */}
                    {/* I need to bind this cos onChange is not a lifecycle method, render() is a lifecycle method*/}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes={
    //here, it is an single object not an array
    todo:PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}

const btnStyle ={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}



export default TodoItem
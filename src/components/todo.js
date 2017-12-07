import React, { Component } from 'react';
import img from '../images/todo.jpg';
import TodoForm from '../components/todoForm';

class TodoComponent extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            detail: "",
            isTrue: false,
            todos:[],
            doingTodo:[],
            doneTodo:[]
        }
    }

    /* Todo form functions */
    addFunc(ev) {
        this.setState({ [ev.target.name]: ev.target.value })
    }
    submit(ev) {
        ev.preventDefault();
        let data = {
            title:this.state.title,
            detail:this.state.detail
        }
        let arr = this.state.todos;
        arr.push(data)
        this.setState({todos:arr})
        this.setState({ isTrue: true })
        console.log(this.state);
    }
    /* End form functions */

    /* DragNDrop functions */
    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        console.log(ev.target.id)
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data)
        console.log(ev.target.id)
        let value = this.state.todos[data];
        ev.target.appendChild(document.getElementById(data));
        let arr2 = this.state.todos;
        // arr2.splice(data,1);
        let arrName = ev.target.id
        let transferedArr = this.state[arrName];
        console.log(transferedArr)
        transferedArr.push(value);
        this.setState({[ev.target.id]:transferedArr})
        // this.setState({todos:arr2})
    }
    /* End functions */

    render() {
        return (
            <div>
                <h2 className="text-center">Drag and Drop Todo List</h2>

                {/* <div id="div1" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                    <img src={img} draggable="true" onDragStart={this.drag.bind(this)} id="drag1" width="88" height="31" />
                </div>

                <div id="div2" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}></div>
                <br /> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <h3 className="card-header card-primary text-center">
                                    Add Todo {this.state.todos.length}
                                </h3>
                                <div className="card-block" id="todos" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                                    <div className="card" >
                                        {
                                            this.state.todos.map((todo,ind)=>{
                                                return (
                                                <div className="card" key={ind} draggable="true" onDragStart={this.drag.bind(this)} id={ind}>
                                                    <img className="card-img-top" src={img} alt="Card image cap" />
                                                    <div className="card-block">
                                                        <h4 className="card-title">Todo</h4>
                                                        <ul className="list-group list-group-flush">
                                                            <li className="list-group-item">{todo.title}</li>
                                                            <li className="list-group-item">{todo.detail}</li>
                                                        </ul>
                                                    </div>
                                                </div>)
                                        })
                                        
                                        }
                                        <div className="card-block">
                                            <TodoForm inputFunc={this.addFunc.bind(this)} formFunc={this.submit.bind(this)} isState={this.state} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h3 className="card-header card-info text-center">
                                    Doing  {this.state.doingTodo.length}
                                </h3>
                                <div className="card-block" id="doingTodo" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <h3 className="card-header card-success text-center">
                                    Done  {this.state.doneTodo.length}
                                </h3>
                                <div className="card-block" id="doneTodo" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoComponent;
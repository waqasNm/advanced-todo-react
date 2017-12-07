import React, { Component } from 'react';

class TodoForm extends Component {
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.formFunc}>
                    <input type="text" className="form-control" name="title" placeholder="Enter Title" onChange={this.props.inputFunc} />
                    <input type="text" className="form-control" name="detail" placeholder="Enter detail" onChange={this.props.inputFunc} />
                    <button className="btn btn-warning">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;
import React, { Component } from 'react'

import './index.less';

export default class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleTodoAdd() {
        const newTodo = {
            text: this.state.text
        };

        this.props.onTodoAdd(newTodo);
        this.setState({ text: '' });
    }

    render() {

        return (
            <div className='row'>
                <form>
                    <div className='form-group'>
                        <div className='col-sm-12'>
                            <div className='input-group'>
                                <input
                                    type='text'
                                    placeholder='Type your new todo...'
                                    className='form-control'
                                    value={this.state.text}
                                    onChange={::this.handleTextChange}
                                />
                                <span className='input-group-btn'>
                                    <button
                                        type='button'
                                        className='btn btn-primary'
                                        disabled={!this.state.text}
                                        onClick={::this.handleTodoAdd}
                                    >
                                        Add Todo
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
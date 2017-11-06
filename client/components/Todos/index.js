import React, { Component } from 'react'

import './index.less';

import AddTodo from '../AddTodo';
import TodosList from '../TodosList';
//import TodosFilters from '../TodosFiltersBlock';

export default class Todos extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className='row border-bottom white-bg'>

                <div className='col-sm-12'>

                    <div className='ibox-content'>

                        <AddTodo onTodoAdd={this.props.createTodo} />

                        {/*<TodosFilters/>*/}

                        <TodosList
                            loading={this.props.isFetching}
                            items={this.props.items}
                            loadTodos={this.props.loadTodos}
                            onTodoDelete={this.props.deleteTodo}
                            onTodoToggle={this.props.toggleTodo}
                        />
                    </div>
                </div>
            </div>
        );

    }
}
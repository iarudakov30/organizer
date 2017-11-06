import React, { Component } from 'react'
import cx from 'classnames';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import './index.less';

import Spinner from '../Common/Spinner';

export default class TodosList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadTodos();
    }

    render() {

        return (
            <div>
            {
                this.props.loading ? (
                    <Spinner loading={this.props.loading}/>
                ) :
                    this.props.items.length ? (
                        <ul className='todo-list m-t'>
                            {
                                this.props.items.map((todo) =>
                                    (
                                        <div key={todo._id}>
                                            <li
                                                className={cx({ 'todo-completed': !todo.status })}
                                            >
                                                <Checkbox
                                                    checked={cx({ 'checked': !todo.status })}
                                                    onChange={this.props.onTodoToggle.bind(null,todo)}
                                                />

                                                <span className='m-l-xs'>{todo.value}</span>
                                            </li>

                                            <small
                                                className={cx('label', todo.date.status )}
                                            >
                                                <i className='fa fa-clock-o'/> {todo.date.time}
                                            </small>
                                        </div>
                                    )
                                )
                            }
                        </ul>
                    ) :
                        <span>
                            <br/>
                            <small>No todos have found. </small>
                        </span>

            }

            </div>
        );
                    /*<Note
                            key={note._id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null,note)}
                            color={note.color}
                            text={note.text}
                            date={note.createdAt}
                        />*/
                    /*
                        <ul className='todo-list m-t'>
                            <li>
                                <input type='checkbox' value='' name='' className='i-checks'/>
                                <span className='m-l-xs'>Buy a milk</span>
                                <small className='label label-primary'><i className='fa fa-clock-o'></i> 1 mins</small>
                            </li>
                            <li>
                                <input type='checkbox' value='' name='' className='i-checks' checked/>
                                <span className='m-l-xs'>Go to shop and find some products.</span>
                                <small className='label label-info'><i className='fa fa-clock-o'></i> 3 mins</small>
                            </li>
                            <li>
                                <input type='checkbox' value='' name='' className='i-checks' />
                                <span className='m-l-xs'>Send documents to Mike</span>
                                <small className='label label-warning'><i className='fa fa-clock-o'></i> 2 mins</small>
                            </li>
                            <li>
                                <input type='checkbox' value='' name='' className='i-checks'/>
                                <span className='m-l-xs'>Go to the doctor dr Smith</span>
                                <small className='label label-danger'><i className='fa fa-clock-o'></i> 42 mins</small>
                            </li>
                        </ul>
                    */
    }
}
import React, { Component } from 'react'

//import FilterLink from '../TodosFilterLink';
//import cx from 'classnames';

import './index.less';

export default class TodosFilter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/>
                <h3 className='font-bold'>Filter todos</h3>
                <div className='btn-group'>
                    <button className='btn btn-success' type='button'>ALL</button>
                    <button className='btn btn-white' type='button'>Active</button>
                    <button className='btn btn-white' type='button'>Done</button>
                </div>
                <br/>
            </div>
        );
    }
}
import React, { Component } from 'react'
//import cx from 'classnames';

import './index.less';

export default class TodoFilterLink extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/>
                <h3 className='font-bold'>Filter todos</h3>
                <div className='btn-group'>
                    <button className='btn btn-success' type='button' filter=''>ALL</button>
                    <button className='btn btn-white' type='button'>Active</button>
                    <button className='btn btn-white' type='button'>Done</button>
                </div>
                <br/>
            </div>
        );
    }
}
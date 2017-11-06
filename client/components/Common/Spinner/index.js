import React, { Component } from 'react'
import {CircleLoader} from 'react-spinners';

import './style.less';

export default class Spinner extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='spinner-loading'>
                <CircleLoader
                    size={150}
                    color={'#1ab394'}
                    loading={this.props.loading}
                />
            </div>
        );
    }
}


import React, { Component } from 'react'

import './index.less';

export default class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style = {
            backgroundColor: this.props.color
        };

        return (
            <div className='Note' style={style}>
                <span className='Note__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                        ?
                        <h4 className='Note__title'>{this.props.title}</h4>
                        :
                        null
                }
                <div className='Note__text'>
                    {this.props.text}
                    <br/>
                    <i>{this.props.date}</i>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react'

import ColorPicker from '../ColorPicker'

import './index.less';

export default class NoteEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.data.title,
            text: props.data.text,
            color: props.data.color
        }
    }

    componentWillReceiveProps() {
        this.setState(
            {
                text: '',
                title: '',
                color: '#FFFFFF'
            }
        );
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleColorChange(color) {
        this.setState({ color: color });
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
    }

    render() {

        return (
            <div className='NoteEditor'>
                <input
                    type='text'
                    className='NoteEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={::this.handleTitleChange}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    className='NoteEditor__text'
                    value={this.state.text}
                    onChange={::this.handleTextChange}
                />
                <div className='NoteEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={::this.handleColorChange}
                    />
                    <button
                        className='NoteEditor__button'
                        disabled={!this.state.text}
                        onClick={::this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
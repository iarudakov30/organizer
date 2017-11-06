import React, { Component } from 'react'

import './index.less';

import NoteEditor from '../NoteEditor';
import NotesGrid from '../NotesGrid';

export default class Notes extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

        <div className='row  border-bottom white-bg'>
            <div className='col-sm-12'>
                <div className='App'>
                    <NoteEditor data={this.props.noteEditor} onNoteAdd={this.props.createNote} />
                    <NotesGrid
                        loading={this.props.isFetching}
                        list={this.props.list}
                        loadNotes={this.props.loadNotes}
                        onNoteDelete={this.props.deleteNote}
                    />
                </div>
            </div>
        </div>
        );
    }
}
import React, { Component } from 'react'
import Masonry from 'react-masonry-component';

import Note from '../Note';
import Spinner from '../Common/Spinner';

import './index.less';

export default class NotesGrid extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadNotes();
    }

    render() {

        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <div>
            {
                this.props.loading ? (
                    <Spinner loading={this.props.loading}/>
                ) :
                    <Masonry
                        className='NoteGrid'
                        options={masonryOptions}
                    >
                        {
                            this.props.list.map(note =>
                                <Note
                                    key={note._id}
                                    title={note.title}
                                    onDelete={this.props.onNoteDelete.bind(null,note)}
                                    color={note.color}
                                    text={note.text}
                                    date={note.createdAt}
                                />
                            )
                        }
                    </Masonry>
            }
            </div>
        );
    }
}
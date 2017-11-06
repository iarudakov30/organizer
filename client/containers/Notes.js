import { connect } from 'react-redux';

import Notes from '../components/Notes';

import * as NotesActions from '../actions/NotesActions';

function mapStateToProps(state) {
    return {
        noteEditor: state.noteEditor,
        list: state.notes.notes,
        isFetching: state.notes.fetching
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadNotes() {
            dispatch(NotesActions.loadNotes.request());
        },
        createNote(data) {
            dispatch(NotesActions.createNote.request(data));
        },
        deleteNote(data) {
            dispatch(NotesActions.deleteNote.request(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)
import NotesConstants from '../constants/NotesConstants';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const loadNotes = {
    request: () => action(NotesConstants.LOAD_NOTES_REQUEST, {}),
    success: data => action(NotesConstants.LOAD_NOTES_SUCCESS, {data}),
    failure: data => action(NotesConstants.LOAD_NOTES_FAILURE, {data})
};

export const deleteNote = {
    request: data => action(NotesConstants.DELETE_NOTE_REQUEST, {data}),
    success: data => action(NotesConstants.DELETE_NOTE_SUCCESS, {data}),
    failure: data => action(NotesConstants.DELETE_NOTE_FAILURE, {data})
};

export const createNote = {
    request: data => action(NotesConstants.CREATE_NOTE_REQUEST, {data}),
    success: data => action(NotesConstants.CREATE_NOTE_SUCCESS, {data}),
    failure: data => action(NotesConstants.CREATE_NOTE_FAILURE, {data})
};
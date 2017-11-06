import NotesConstants from '../constants/NotesConstants';

const initialState = {
    notes: [],
    fetching: true
};

export default function note(state = initialState, action) {

    switch (action.type) {
        case NotesConstants.LOAD_NOTES_REQUEST:
            return { ...state,
                fetching: true
            };

        case NotesConstants.LOAD_NOTES_SUCCESS:
            return { ...state,
                fetching: false,
                notes: action.data
            };

        case NotesConstants.LOAD_NOTES_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case NotesConstants.DELETE_NOTE_REQUEST:
            return { ...state,
                fetching: true
            };

        case NotesConstants.DELETE_NOTE_SUCCESS:
            return { ...state,
                fetching: false
            };

        case NotesConstants.DELETE_NOTE_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case NotesConstants.CREATE_NOTE_REQUEST:
            return { ...state,
                fetching: true
            };

        case NotesConstants.CREATE_NOTE_SUCCESS:
            return { ...state,
                fetching: false
            };

        case NotesConstants.CREATE_NOTE_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        default:
            return state;
    }
}
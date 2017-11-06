import TodosConstants from '../constants/TodosConstants';

const initialState = {
    items: [],
    fetching: true
};

export default function todo(state = initialState, action) {

    switch (action.type) {
        case TodosConstants.LOAD_TODOS_REQUEST:
            return { ...state,
                fetching: true
            };

        case TodosConstants.LOAD_TODOS_SUCCESS:
            return { ...state,
                fetching: false,
                items: action.data
            };

        case TodosConstants.LOAD_TODOS_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case TodosConstants.DELETE_TODO_REQUEST:
            return { ...state,
                fetching: true
            };

        case TodosConstants.DELETE_TODO_SUCCESS:
            return { ...state,
                fetching: false
            };

        case TodosConstants.DELETE_TODO_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case TodosConstants.CREATE_TODO_REQUEST:
            return { ...state,
                fetching: true
            };

        case TodosConstants.CREATE_TODO_SUCCESS:
            return { ...state,
                fetching: false
            };

        case TodosConstants.CREATE_TODO_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        case TodosConstants.TOGGLE_TODO_REQUEST:
            return { ...state,
                fetching: true
            };

        case TodosConstants.TOGGLE_TODO_SUCCESS:
            return { ...state,
                fetching: false
            };

        case TodosConstants.TOGGLE_TODO_FAILURE:
            return { ...state,
                fetching: false,
                error: action.error
            };

        default:
            return state;
    }
}
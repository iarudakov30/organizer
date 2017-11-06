import TodosConstants from '../constants/TodosConstants';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const loadTodos = {
    request: () => action(TodosConstants.LOAD_TODOS_REQUEST, {}),
    success: data => action(TodosConstants.LOAD_TODOS_SUCCESS, {data}),
    failure: data => action(TodosConstants.LOAD_TODOS_FAILURE, {data})
};

export const deleteTodo = {
    request: data => action(TodosConstants.DELETE_TODO_REQUEST, {data}),
    success: data => action(TodosConstants.DELETE_TODO_SUCCESS, {data}),
    failure: data => action(TodosConstants.DELETE_TODO_FAILURE, {data})
};

export const createTodo = {
    request: data => action(TodosConstants.CREATE_TODO_REQUEST, {data}),
    success: data => action(TodosConstants.CREATE_TODO_SUCCESS, {data}),
    failure: data => action(TodosConstants.CREATE_TODO_FAILURE, {data})
};

export const toggleTodo = {
    request: data => action(TodosConstants.TOGGLE_TODO_REQUEST, {data}),
    success: data => action(TodosConstants.TOGGLE_TODO_SUCCESS, {data}),
    failure: data => action(TodosConstants.TOGGLE_TODO_FAILURE, {data})
};
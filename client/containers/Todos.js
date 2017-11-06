import { connect } from 'react-redux';
import Todos from '../components/Todos';
import * as TodosActions from '../actions/TodosActions';


function mapStateToProps(state) {
    return {
        items: state.todos.items,
        isFetching: state.todos.fetching
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadTodos() {
            dispatch(TodosActions.loadTodos.request());
        },
        createTodo(data) {
            dispatch(TodosActions.createTodo.request(data));
        },
        deleteTodo(data) {
            dispatch(TodosActions.deleteTodo.request(data));
        },
        toggleTodo(data) {
            dispatch(TodosActions.toggleTodo.request(data));
        }
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
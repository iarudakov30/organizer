import { takeLatest, put, call } from 'redux-saga/effects';
import {delay} from 'redux-saga'

import AuthConstants from '../constants/AuthConstants';
import * as AuthActions from '../actions/AuthActions';

import NotesConstants from '../constants/NotesConstants';
import * as NotesActions from '../actions/NotesActions';

import TodosConstants from '../constants/TodosConstants';
import * as TodosActions from '../actions/TodosActions';

import NotificationConstants from '../constants/NotificationConstants';
import * as NotificationActions from '../actions/NotificationActions';

import apiHandler from '../services/api';

function* watchNotification() {
    yield call(delay, 2000);
    yield put(NotificationActions.showNotification.hide());
 }

function* watchLogin(action) {
    try {
        const response = yield call(
            apiHandler,
            '/login',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(AuthActions.login.success(response.data));
        } else if (response.status === 'error') {
            yield put(AuthActions.login.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(AuthActions.login.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchRegister(action) {
    try {
        const response = yield call(
            apiHandler,
            '/registry',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(AuthActions.register.success(response.data));
        } else if (response.status === 'error') {
            yield put(AuthActions.register.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(AuthActions.register.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchLoadNotes() {
    try {
        const response = yield call(
            apiHandler,
            '/notes',
            'GET'
        );

        if (response.status === 'ok') {
            yield put(NotesActions.loadNotes.success(response.data));
        } else if (response.status === 'error') {
            yield put(NotesActions.loadNotes.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(NotesActions.loadNotes.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchCreateNote(action) {
    try {

        const response = yield call(
            apiHandler,
            '/notes',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(NotesActions.createNote.success());
            yield put(NotesActions.loadNotes.request());
            yield put(NotificationActions.showNotification.show({
                type: 'success',
                text: 'New Note is added.'
            }));
        } else if (response.status === 'error') {
            yield put(NotesActions.createNote.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(NotesActions.createNote.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchDeleteNote(action) {

    try {
        const response = yield call(
            apiHandler,
            `/notes/${action.data._id}`,
            'DELETE'
        );

        if (response.status === 'ok') {
            yield put(NotesActions.deleteNote.success());
            yield put(NotesActions.loadNotes.request());
            yield put(NotificationActions.showNotification.show({
                type: 'success',
                text: 'The Note have deleted.'
            }));
        } else if (response.status === 'error') {
            yield put(NotesActions.deleteNote.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(NotesActions.deleteNote.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchLoadTodos() {

    try {
        const response = yield call(
            apiHandler,
            '/todos',
            'GET'
        );

        if (response.status === 'ok') {

            const todos = countTodosDiffTime(response.data);
            yield put(TodosActions.loadTodos.success(todos));

        } else if (response.status === 'error') {
            yield put(TodosActions.loadTodos.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(TodosActions.loadTodos.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchCreateTodo(action) {
    try {

        const response = yield call(
            apiHandler,
            '/todos',
            'POST',
            action.data
        );

        if (response.status === 'ok') {
            yield put(TodosActions.createTodo.success());
            yield put(TodosActions.loadTodos.request());
            yield put(NotificationActions.showNotification.show({
                type: 'success',
                text: 'New Todo is added to your tasklist.'
            }));
        } else if (response.status === 'error') {

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
            yield put(TodosActions.createTodo.failure(response.error));
        }

    } catch (error) {
        yield put(TodosActions.createTodo.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function* watchToggleTodo(action) {

    try {
        const response = yield call(
            apiHandler,
            `/todos/${action.data._id}`,
            'PUT'
        );

        if (response.status === 'ok') {
            yield put(TodosActions.toggleTodo.success());
            yield put(TodosActions.loadTodos.request());
            yield put(NotificationActions.showNotification.show({
                type: 'success',
                text: 'The Todo\'s status have changed.'
            }));
        } else if (response.status === 'error') {
            yield put(TodosActions.toggleTodo.failure(response.error));

            const notifData = {
                type: 'warning',
                text: response.error
            };
            yield put(NotificationActions.showNotification.show(notifData));
        }

    } catch (error) {
        yield put(NotesActions.deleteNote.failure(error));
        yield put(NotificationActions.showNotification.show({
            type: 'error',
            text: 'Server-side problem. Try it later.'
        }));
    }
}

function countTodosDiffTime(data) {

    const Now = new Date();
    for (let key in data) {

        const TodoDate = new Date(data[key].date);

        const diffMs   = (Now - TodoDate); // milliseconds between now & Christmas
        const diffDays = Math.floor(diffMs / 86400000); // days
        const diffHrs  = Math.floor((diffMs % 86400000) / 3600000); // hours
        const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        const diffSec  = Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000); // seconds

       let timeSpend =
            diffDays > 0 ? diffDays + ' days' :
            diffHrs > 0 ? diffHrs + ' hours' :
            diffMins > 0 ? diffMins + ' minutes' :
            diffSec > 0 ? diffSec + ' seconds' :
            '';

        timeSpend = timeSpend !== '' ? timeSpend + ' ago' : 'now';
        const status = diffDays > 0 ? 'label-danger' : diffHrs > 0 ? 'label-warning' : 'label-primary';

        data[key].date = {
            time: timeSpend,
            status: status
        };
    }

    return data;
}

export default function* rootSaga() {
    yield takeLatest(NotificationConstants.NOTIFICATION_SHOW, watchNotification);
    yield takeLatest(AuthConstants.REGISTRY_REQUEST, watchRegister);
    yield takeLatest(AuthConstants.LOGIN_REQUEST, watchLogin);
    yield takeLatest(NotesConstants.LOAD_NOTES_REQUEST, watchLoadNotes);
    yield takeLatest(NotesConstants.CREATE_NOTE_REQUEST, watchCreateNote);
    yield takeLatest(NotesConstants.DELETE_NOTE_REQUEST, watchDeleteNote);
    yield takeLatest(TodosConstants.LOAD_TODOS_REQUEST, watchLoadTodos);
    yield takeLatest(TodosConstants.CREATE_TODO_REQUEST, watchCreateTodo);
    yield takeLatest(TodosConstants.TOGGLE_TODO_REQUEST, watchToggleTodo);
    //yield takeLatest(AuthConstants.LOG_OUT, fetchLogout)
}
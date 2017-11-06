const TodoModel = require('../models/todo').Todo;
const log = require('../lib/log')(module);

exports.get = (req, res) => {
    let result = {};

    TodoModel.getAll()
        .then((data) => {

            if (data.error) {
                result.status = 'error';
                result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);
        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
    })
};

exports.post = (req, res) => {

    let result = {};
    let todo = req.body;

    TodoModel.createTodo(todo)
        .then((data) => {

            if (data.error) {
                result.status = 'error';
                result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);
        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
    })
};

exports.put = (req, res) => {

    let result = {};

    let id = req.params.id;

    TodoModel.toggleTodo(id)
        .then((data) => {

            if (data.error) {
                result.status = 'error';
                result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);
        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
    })
};

/*
exports.delete = (req, res) => {

    let result = {};

    let id = req.params.id;

    Note.deleteNote(id)
        .then((data) => {

            if (data.error) {
                result.status = 'error';
                result.error = data.error;
            } else {
                result.status = 'ok';
                result.data = data;
            }

            res.json(result);
        }).catch(err => {

        log.error(err);
        result.status = 'error';
        result.error = err.toString();

        res.json(result);
        res.json(result);
    })
};*/

const Note = require('../models/note').Note;
const log = require('../lib/log')(module);

exports.get = (req, res) => {
    let result = {};

    Note.listNotes()
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
    let note = req.body;

    Note.createNote(note)
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
};

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
    })
};
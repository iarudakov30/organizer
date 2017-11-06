const log = require('../lib/log')(module);

const mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    color: {type: String},
    createdAt: {type: Date}
});

NoteSchema.statics.listNotes = () => {

    const Note = mongoose.model('Note', NoteSchema);
    return Note.find( err => {
        if (err) {
            log.error('[mongoose] No notes found.' + err.errors.title.message);
        }
    });
};

NoteSchema.statics.createNote = (data) => {

    const Note = mongoose.model('Note', NoteSchema);
    const note = new Note({
        title: data.title,
        text: data.text,
        color: data.color,
        createdAt: new Date()
    });

    return note.save( err => {
        if (err) {
           log.error('[mongoose] Can\'t create new note. ' + err.errors.title.message);
        }
    });
};

NoteSchema.statics.deleteNote = (id) => {

    const Note = mongoose.model('Note', NoteSchema);
    return Note.findByIdAndRemove(id, (err) => {
        if (err) {
            log.error('[mongoose] Can\'t find note. ' + err.errors.title.message);
        }
    });
};

exports.Note = mongoose.model('Note', NoteSchema);
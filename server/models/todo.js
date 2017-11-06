const log = require('../lib/log')(module);

const mongoose = require('../lib/mongoose'),
    Schema = mongoose.Schema;

const TodoSchema = new Schema({
    value: {type: String, required: true},
    status: {type: Boolean, required: true},
    createdAt: {type: Date, required: true},
    date: {type: Date}
});

TodoSchema.statics.getAll = () => {

    const Todo = mongoose.model('Todo', TodoSchema);
    return Todo.find( err => {
        if (err) {
            log.error('[mongoose] No todos found.' + err.errors.title.message);
        }
    }).sort({createdAt: -1});
};

TodoSchema.statics.createTodo = (data) => {

    const Todo = mongoose.model('Todo', TodoSchema);
    const note = new Todo({
        value: data.text,
        status: true,
        createdAt: new Date(),
        date: new Date()
    });

    return note.save( err => {
        if (err) {
           log.error('[mongoose] Can\'t create new todo. ' + err.errors.title.message);
        }
    });
};

TodoSchema.statics.toggleTodo = (id) => {

    const Todo = mongoose.model('Todo', TodoSchema);

    let findByIdQuery = Todo.findById(id);
    let promise = findByIdQuery.exec();
    return promise.then((todo) => {
        if (todo) {

            todo.set({
                status: !todo.status,
                date: new Date()
            });

            return todo.save(function (err) {
                if (err) log.error('[mongoose] Can\'t save todo.' . err);
            });

        } else {
            return null;
        }
    });
};

TodoSchema.statics.deleteTodo = (id) => {

    const Todo = mongoose.model('Todo', TodoSchema);
    return Todo.findByIdAndRemove(id, (err) => {
        if (err) {
            log.error('[mongoose] Can\'t find todo. ' + err.errors.title.message);
        }
    });
};

exports.Todo = mongoose.model('Todo', TodoSchema);
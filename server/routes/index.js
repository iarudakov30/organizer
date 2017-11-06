// RESTFul api handlers

module.exports = (app) => {
    app.get('/notes', require('./notes').get);
    app.post('/notes', require('./notes').post);
    app.delete('/notes/:id',  require('./notes').delete);

    app.get('/todos', require('./todos').get);
    app.post('/todos', require('./todos').post);
    app.put('/todos/:id',  require('./todos').put);

    app.post('/login', require('./login').post);
    app.post('/logout', require('./login').post);

    app.post('/registry', require('./registry').post);
};
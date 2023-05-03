const newRouter = require('./news');
const courseRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', courseRouter);

    app.use('/', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });

    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   });

    //   app.get('/search', (req, res) => {
    //     //console.log(req.query.q)
    //     res.render('search');
    //   });

    //   app.post('/search', (req, res) => {

    //     console.log(req.body);

    //     res.send('');
    //   });
}

module.exports = route;

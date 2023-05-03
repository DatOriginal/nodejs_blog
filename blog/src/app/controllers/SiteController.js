const Course = require('../models/Course');

class SiteController {
    //[GET] /
    async index(req, res) {

          Course.find().then((courses) => {
                console.log(courses);
                res.json(courses);
          });
        //res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

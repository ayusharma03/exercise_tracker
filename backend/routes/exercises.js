const router = require('express').Router() ;
const { get } = require('mongoose');
let Exercise = require('../models/exercise.model') ;

router.route('/').get((req, res) => {
    Exercise.find()
        .then (exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newexercise = new Exercise({username, description, duration, date});

    newexercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: '+ err));

});

router.route('/del/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);
            exercise.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+ err));

});

module.exports = router;
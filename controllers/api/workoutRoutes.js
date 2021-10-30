const router = require('express').Router();
const Workout = require('../../models/Workout');

router.get('/', (req, res) => {
    Workout.find({}).sort({ day: -1 }).then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.put('/:id', ({ body }, res) => {
    Workout.updateOne({
        id: req.params.id
    }, {
        ...body
    })
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post('/', ({ body }, res) => {
    Workout.create(body).then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;
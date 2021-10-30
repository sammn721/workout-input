const router = require('express').Router();
const Workout = require('../../models/Workout');

router.get('/', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ]).sort({ day: 1 }).then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get('/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
    .sort({ _id: -1 })
    .limit(7)
    .then(workout => {
        res.json(workout.reverse())
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.put('/:id', ({ body }, res) => {
    Workout.updateOne({
        id: req.params.id
    }, {
        $push: { exercises: req.body }
    })
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.post('/', ({ body }, res) => {
    Workout.create({}).then(workout => {
        res.json(workout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;
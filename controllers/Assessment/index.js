const bcrypt = require('bcrypt');
const Assessment = require('../../models/Assessment');

const getAssessment = async (req, res) => {
    Assessment.find({}, (err, assessment) => {
        if(err) throw err;
        res.send(assessment);
    })
}

const postAssessment = async (req, res) => {
    await Assessment.create(
        {
            title: req.body.title,
            description: req.body.description,
            mentor_id: req.body.mentor_id,
        },
        (err, result) => {
            if (err){
                console.log(err)
                // res.send(err)
                res.json({ message: err })
            } else {
                console.log(result);
                // res.send(result)
                res.json({ message: "assisment added successfully." })
            }
        })
    
}

const updateAssessment = async (req, res) => {
    
    await Assessment.updateOne(
        {_id: req.body._id},
        {
            title: req.body.title,
            description: req.body.description,
            mentor_id: req.body.mentor_id,
        },
        (err, result) => {
            if (err){
                console.log(err)
                res.send(err)
            } else {
                res.send(result)
            }
        })

    res.json({ message: "updateAssessment" })
}

const deleteAssessment = async (req, res) => {
    res.json({ message: "deleteAssessment" })
}

module.exports = {
    getAssessment,
    postAssessment,
    updateAssessment,
    deleteAssessment
};
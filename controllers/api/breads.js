const Bread = require('../../models/bread')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteBread
}

function index(req, res) {
    Bread.find({}, function(err, breads) {
        res.status(200).json(breads)
    })
}

function show(req, res) {
    Bread.findById(req.params.id)
    .then((bread) => {
        res.status(200).json(bread)
    })

    
}

function create(req, res) {
    Bread.findById(req.params.id)
    .then((bread) => {
        res.status(200).json(bread)
    })
}

function update(req, res) {
    
}

function deleteBread(req, res) {
    
}
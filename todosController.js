// all the functions of the app

const createError = require('http-errors');

let todos = []
let idNo = 0
exports.index = function(req, res) {
    res.send(todos)
}

exports.create = function(req, res) {

    if (!req.body.title) {
        return (next(createError(400, "Name is required.")))
    }


    todos.push({
        id: idNo,
        name: req.body.title,
})
idNo++
    res.send({
        result: true
    })
}

exports.show = function(req, res, next) {
    const todoitem = todos.find((todo) => todo.id == req.params.id)
    if (!todoitem) {
        return (next(createError(404, "Todo item not found.")))
    }
    res.send(todoitem)
}

exports.delete = function(req, res, next) {
    const todoitem = todos.find((todo) => todo.id == req.params.id)
    if (!todoitem) {
        return (next(createError(404, "Todo not found.")))
    }
    todos = todos.filter((todo) => todo.id !== req.params.id)
    res.send({
        result: true
    })
}

exports.update = function(req, res, next) {
    const todoitem = todos.find((todo) => todo.id == req.params.id)
    if (!todoitem) {
        return (next(createError(404, "Todo not found.")))
    }
    todos = todos.map(todo => {
        if (todo.id == req.params.id) {
        todo.name = req.body.name 
        }
        return todo
})
    res.send({
        result: true
    })
}


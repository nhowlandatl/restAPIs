var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var todoList = [
    {
        id: 1,
        todo: "Implement a REST API"
    }
];

// GET /api/todos
app.get('/api/todos', (req, res, next) => 
    res.send(todoList))

// GET /api/todos/:id
app.get('/api/todos:id', function(req, res, next) {
    let id = req.params.id
    let foundID = todolist.find(function(item) {
        return item.id == id;
    })
    res.send(foundID);
})

// POST /api/todos
app.post('/api/todos', function(req, res, next) {
    let nextId = todoList.reduce((acc,element) =>{
        if(element.id > acc) {
            return element.id
        }
        return acc++
    }, 0) + 1
    let toDoObj = {
        id: nextId,
        todo: req.body.todo
    }
    todoList.push(toDoObj);
    res.send(toDoObj);
})

// PUT /api/todos/:id
app.put('/api/todos/:id', (req, res, next) => {
        let updatedTodo = todoList.find(function (todo) {
            if(todo.id) {
                return todo.id === parseInt(req.params.id);
            }
        });

        let updated = {
            id: updatedTodo,
            todo: req.body.todo
        };

        todoList.push(updated);     
        res.send(updated);
})
// DELETE /api/todos/:id



app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
})
const Todo = require('../models/Todo');

module.exports = app => {
  app.get(`/todos`, (req, res) => {
    Todo.find()
    .then(result => {
      return res.status(200).send(result);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
  });
  app.post(`/todos`, (req, res) => {
    Todo.create({content: req.body.content})
    .then(result => {
      return res.status(200).send(result);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
  });
  app.get(`/todos/:id`, (req, res) => {
    Todo.findById(req.params.id)
    .then(result => {
      return res.status(200).send(result);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
  });
  app.delete(`/todos/:id`, (req, res) => {
    Todo.deleteOne({_id:req.params.id})
    .then(result => {
      return res.status(200).send(result);
    })
    .catch(error => {
      return res.status(500).send(error);
    })
  });
};

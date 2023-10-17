const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require('../controllers/tasks');

// Original

// app.get(getAllTasks);
// app.post(createTask);
// app.get(getTask);
// app.patch(updateTask);
// app.delete(deleteTask);

// Refactored Alternative
router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;

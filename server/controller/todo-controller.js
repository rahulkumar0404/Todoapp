import todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
  try {
    const newtodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });

    await newtodo.save();

    return response.status(200).json(newtodo);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });
    return response.status(200).json(todos);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const tododef = await todo.findById(request.params.id);
    const todoupdate = await todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !tododef.done }
    );
    await todoupdate.save();
    return response.status(200).json(todoupdate);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    await todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );
    const updatetodo = await todo.findById(request.params.id);
    return response.status(200).json(updatetodo);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const deleted = await todo.findByIdAndDelete(request.params.id);
    return response.status(200).json(deleted);
  } catch (err) {
    return response.status(500).json(err.message);
  }
};

let id = 0;

export default function manageTodo(
  state = {
    todos: []
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO":
      id++;
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    case "DELETE_TODO":
      const todo_index = state.todos.findIndex(todo => todo.id === action.id);
      return {
        todos: [
          ...state.todos.slice(0, todo_index),
          ...state.todos.slice(todo_index + 1)
        ]
      };
    default:
      return state;
  }
}

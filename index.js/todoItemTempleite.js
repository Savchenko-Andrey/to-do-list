const todoItemTempleite = ({ id, text, isDone, date }) => `
    <li class="todo-item" data-id="${id}">
        <div>
            <input class="checkbox" type="checkbox" name="todo-done" ${
              isDone ? "checked" : ""
            }>
            <button class="delete" data-type="remove">
            &#10008</button>
        </div>
        <div>
            <span class="text-todo">${text}</span>
            <span class="text-clock">${new Date(date)}</span>
        </div>
        <div class="btn-item">
            
            <button class="success" data-type="view"><span class="view">View</span></button>
        </div>
    </li>`;

export default todoItemTempleite;

{
  /* <button class="delete" data-type="remove">X</button>; */
}

const todoItemTempleite = ({ id, text, isDone, date }) => `
    <li class="todo-item" data-id="${id}">
        <div>
            <input class="checkbox" type="checkbox" name="todo-done" ${
              isDone ? "checked" : ""
            }>
        </div>
        <div>
            <span class="text-todo">${text}</span>
            <span class="text-clock">${new Date(date)}</span>
        </div>
        <div>
            <button class="btn success" data-type="view">View</button>
            <button class="btn delete" data-type="remove">X</button>
        </div>
    </li>`;

export default todoItemTempleite;

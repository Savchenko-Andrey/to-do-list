const todoItemTempleite = ({ id, text, isDone, date }) => `
    <li class="todo-item" data-id="${id}">
        <div class="todo-item-check">
            <input type="checkbox"
            class="checkbox visually-hidden"
            name="todo-done"
            id="${id}" ${isDone ? "checked" : ""}>
            <label for="${id}" class="checkbox-before"><span class="checkbox-text">Archive</span></label>
        </div>
        <div class="text-todo">
            <div>
                <span class="text-todo">${text}</span>
            </div>
            <div class="date-box">
                <span class="text-clock">${new Date(date).toLocaleDateString(
                  date
                )}</span>
                <span class="text-clock">${new Date(date).toLocaleTimeString(
                  date
                )}</span>
            </div>
        </div>
        <div class="btn-item">
            
            <button class="success" data-type="view"><span class="view">View</span></button>
        </div>
    </li>`;

export default todoItemTempleite;

{
  /*<button class="delete" data-type="remove">X</button> */
}

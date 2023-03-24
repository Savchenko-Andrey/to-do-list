const todoItemTempleite = ({ id, text, isDone, date }) => `
    <li class="todo-item" data-id="${id}">
        <div class="todo-item-check">
            <input class="checkbox visually-hidden" type="checkbox" name="todo-done" ${
              isDone ? "checked" : ""
            }>
            <span for="checkbox" class="checkbox-before"></span>
            
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

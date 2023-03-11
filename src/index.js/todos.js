import todoItemTempleite from "./todoItemTempleite.js";
import modalTemplate from "./modalTemplate.js";
import mockData from "./mockData.js";

let items = mockData;

const refs = {
  todoList: document.querySelector(".todo-list"),
  form: document.querySelector(".form"),
  sortBy: document.querySelector(".sort-by"),
  qweryInput: document.querySelector(".qwery-input"),
};

let qwery = "";
let sortBy = "";

const sort = (filteredItems) => {
  switch (sortBy) {
    case "name-asc":
      return [...filteredItems].sort((a, b) => a.text.localeCompare(b.text));

    case "name-desc":
      return [...filteredItems].sort((a, b) => b.text.localeCompare(a.text));

    case "done-asc":
      return [...filteredItems].sort((a, b) => a.isDone - b.isDone);

    case "done-desc":
      return [...filteredItems].sort((a, b) => b.isDone - a.isDone);

    case "date-desc":
      return [...filteredItems].sort((a, b) => a.date - b.date);

    case "date-desc":
      return [...filteredItems].sort((a, b) => b.date - a.date);

    default:
      return filteredItems;
  }
};

const render = () => {
  const filteredItems = qwery
    ? items.filter(({ text }) => text.toLowerCase().includes(qwery))
    : items;

  const sortedItems = sort(filteredItems);
  const list = sortedItems.map(todoItemTempleite).join("");

  refs.todoList.innerHTML = "";
  refs.todoList.insertAdjacentHTML("beforeend", list);
};

const addItem = (text) => {
  const newTodo = {
    id: uuid.v4(),
    text,
    isDone: false,
    // date: DateNow(),
  };
  items.unshift(newTodo);
  render();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newTodoText = e.target.elements.text.value;
  addItem(newTodoText);
  e.target.elements.text.value = "";
};

const handleQweryInput = (e) => {
  qwery = e.target.value.toLowerCase();

  render();
};

const handleSortChange = (e) => {
  sortBy = e.target.value.toLowerCase();

  render();
};

const removeItem = (id) => {
  items = items.filter((item) => item.id !== id);
  render();
};

const updateItem = (id) => {
  items = items.map((item) =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item
  );

  render();
};

const viewItem = (id) => {
  // ---------- basicLightBox -------------
  const currentItem = items.find((item) => item.id === id);
  const instance = basicLightbox.create(modalTemplate(currentItem.text));

  instance.show();
};

const onButtonClick = (type, id) => {
  switch (type) {
    case "view":
      viewItem(id);
      break;

    case "remove":
      removeItem(id);
      break;
  }
};

const handleItemClick = (e) => {
  const parent = e.target.closest("li");
  const { id } = parent.dataset;

  switch (e.target.nodeName) {
    case "BUTTON":
      onButtonClick(e.target.dataset.type, id);
      break;

    case "INPUT":
      updateItem(id);
      break;
  }
};

render();

// ---------- event listeners -----------

refs.form.addEventListener("submit", handleSubmit);
refs.qweryInput.addEventListener("input", handleQweryInput);
refs.sortBy.addEventListener("change", handleSortChange);
refs.todoList.addEventListener("click", handleItemClick);

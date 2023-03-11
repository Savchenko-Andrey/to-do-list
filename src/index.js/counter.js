const counterTemplate = (value) =>
  `<fieldset>
        <legend>counter</legend>
        <button class="button decrement">-</button>
        <span class="value">${value}</span>
        <button class="button increment">+</button>
    </fieldset>`;

export default class Counter {
  constructor({ value, selector }) {
    this.value = value;
    this.parent = document.querySelector(selector);
    this.refs = {};

    this.parent.insertAdjacentHTML("beforeend", counterTemplate(this.value));

    this.refs.value = this.parent.querySelector(".value");
    this.refs.decrement = this.parent.querySelector(".button.decrement");
    this.refs.increment = this.parent.querySelector(".button.increment");

    this.refs.decrement.addEventListener("click", this.decrement.bind(this));
    this.refs.increment.addEventListener("click", this.increment.bind(this));
  }
  render() {
    this.refs.value.textContent = this.value;
  }

  increment() {
    this.value += 1;
    this.render();
  }

  decrement() {
    this.value -= 1;
    this.render();
  }
}

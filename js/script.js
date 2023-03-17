const input = document.getElementById('input');
const todos = document.getElementById('todos');
const form = document.getElementById('form');


// Получаем индекс дочернего элемента родителя по которому кликнул пользователь
function getIndex(parent, e) {
    const index = Array.from(parent.children).indexOf(e.target);
    return index;
}

// Создание нового элемента
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText) {
        todos.innerHTML += `<li class="todo__item">${todoText}</li>`;
        input.value = '';
    }
});


// Пометить как выполненное
todos.addEventListener('dblclick', (e) => {
    todos.children.item(getIndex(todos, e)).classList.toggle('active');
});


// Удаление элемента
todos.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    const itemToRemove = todos.children.item(getIndex(todos, e));

    itemToRemove.remove();
});

document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form'); // 폼
    const todoInput = document.getElementById('todo-input'); // 입력 필드
    const todoList = document.getElementById('todo-list'); // 투두리스트

    // 폼 제출 이벤트 리스너
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 기본 동작 제어
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    // 새로운 투두리스트 추가
    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', () => {
            li.remove();
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});

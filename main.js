document.addEventListener('DOMContentLoaded', function() {
    // Инициализация огонька
    const ogonjek = document.getElementById('ogonjek');
    let points = localStorage.getItem('userPoints') || 0;
    
    // Обновление внешнего вида огонька в зависимости от баллов
    function updateOgonjek() {
        if (points < 50) {
            ogonjek.className = 'ogonjek-stage1';
        } else if (points < 200) {
            ogonjek.className = 'ogonjek-stage2';
        } // и так далее для других стадий
    }
    
    // Чат с огоньком
    document.getElementById('start-chat').addEventListener('click', function() {
        loadChatPage();
    });
    
    function loadChatPage() {
        // Загрузка чата через AJAX или переход на страницу
    }
    
    // Задания от огонька
    const tasks = [
        { id: 1, title: "Прочитать 10 страниц", points: 20 },
        { id: 2, title: "Сделать зарядку", points: 15 },
        { id: 3, title: "Выучить 5 новых слов", points: 25 }
    ];
    
    // Отображение заданий
    function renderTasks() {
        const taskList = document.getElementById('task-list');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <input type="checkbox" id="task-${task.id}">
                <label for="task-${task.id}">${task.title} (+${task.points} баллов)</label>
            `;
            taskList.appendChild(li);
        });
    }
    
    // Инициализация
    updateOgonjek();
    renderTasks();
});

let root = document.querySelector(':root');
let taskForm = document.querySelector('#task_form');
let container = document.querySelector('.container');
let themeBtn = document.querySelector('.theme_toggle_btn');
let taskList = document.querySelector('#taskList');

taskForm.addEventListener('submit', e => {
    e.preventDefault();

    let taskInputValue = taskForm.elements.task_input;

    addTask(taskInputValue.value);

    taskInputValue.value = '';

    container.classList.remove('empty-list');
});

const addTask = task => {
    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task_item');

    const checkBtn = document.createElement('div');
    checkBtn.setAttribute('class', 'task_check_btn');

    const taskText = document.createElement('span');
    taskText.setAttribute('class', 'task_text');

    taskText.innerText = task;

    newTaskItem.appendChild(checkBtn);
    newTaskItem.appendChild(taskText);
    taskList.appendChild(newTaskItem);

    onTaskClick(checkBtn);
}

const onTaskClick = btn => {
    btn.addEventListener('click', e => {
        let parent = e.target.parentElement;
        parent.classList.add('remove-task');

        setTimeout(() => {
            parent.remove()
        }, 400);

        if (taskList.childNodes.length === 1) {
            setTimeout(() => {
                container.classList.add('empty-list');
            }, 200);
        }
    })
}

themeBtn.addEventListener('click', () => {
    let darkTheme = themeBtn.classList.toggle('dark')

    if (darkTheme) {
        root.style.setProperty('--primary-color', '#1E1E1E');
        root.style.setProperty('--secondary-color', '#3B3B3B');
        root.style.setProperty('--text-color', '#EAEAEA');
        root.style.setProperty('--task-color', '#3B3B3B');
        root.style.setProperty('--footer-color', '#1E1E1E');
        root.style.setProperty('--theme-btn', `url('assets/Light-theme-btn.svg')`);
        root.style.setProperty('--container-bg', `url('./assets/no-task.png')`);
    } else {
        root.style.setProperty('--primary-color', 'white');
        root.style.setProperty('--secondary-color', '#1E1E1E');
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--task-color', 'white');
        root.style.setProperty('--footer-color', '#1E1E1E');
        root.style.setProperty('--theme-btn', `url('assets/Dark-theme-btn.svg')`);
        root.style.setProperty('--container-bg', `url('./assets/no-task.png')`);
    }
});

let playlist = [];

function renderPlaylist(list = playlist) {
    const ul = document.getElementById('playlist');
    ul.innerHTML = '';
    for (const [i, music] of list.entries()) {
        ul.innerHTML += `<li>
            <span>${music}</span>
            <div class="actions">
                <button onclick="editMusic(${i})">Editar</button>
                <button onclick="removeMusic(${i})">Excluir</button>
            </div>
        </li>`;
    }
}

function addMusic() {
    const input = document.getElementById('musicInput');
    const value = input.value.trim();
    if (value) {
        playlist.push(value);
        renderPlaylist();
        input.value = '';
    }
}

function removeMusic(index) {
    playlist.splice(index, 1);
    renderPlaylist();
}

function editMusic(index) {
    const ul = document.getElementById('playlist');
    const li = ul.children[index];
    const music = playlist[index];
    li.innerHTML = `<input type='text' class='editInput' value='${music}' id='editInput${index}'>
        <button onclick='saveEditMusic(${index})'>Salvar</button>
        <button onclick='renderPlaylist()'>Cancelar</button>`;
}

function saveEditMusic(index) {
    const input = document.getElementById(`editInput${index}`);
    const value = input.value.trim();
    if (value) {
        playlist[index] = value;
        renderPlaylist();
    }
}

function sortPlaylist() {
    playlist.sort();
    renderPlaylist();
}

function filterPlaylist() {
    const filtered = playlist.filter(music => music.toLowerCase().includes('a'));
    renderPlaylist(filtered);
}

function popMusic() {
    playlist.pop();
    renderPlaylist();
}

let todoList = [];

function renderTodoList() {
    const ul = document.getElementById('todoList');
    ul.innerHTML = '';
    for (const [i, todo] of todoList.entries()) {
        ul.innerHTML += `<li>
            <span>${todo}</span>
            <div class="actions">
                <button onclick="editTodo(${i})">Editar</button>
                <button onclick="removeTodo(${i})">Excluir</button>
            </div>
        </li>`;
    }
}

window.onload = function() {
    renderPlaylist();
    renderTodoList();
};

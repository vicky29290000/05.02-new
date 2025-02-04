document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/admin/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.username;
                userList.appendChild(li);
            });
        });

    fetch('/api/admin/files')
        .then(response => response.json())
        .then(files => {
            const fileList = document.getElementById('file-list');
            files.forEach(file => {
                const li = document.createElement('li');
                li.textContent = file.filename;
                fileList.appendChild(li);
            });
        });
});

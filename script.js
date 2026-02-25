function login() {
    // Dummy login function
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (username && password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Please enter username and password.');
    }
}

function showAttendance() {
    const content = `
        <h2>Attendance</h2>
        <select id="classSelect">
            <option>Class 1</option>
            <option>Class 2</option>
        </select>
        <ul>
            <li><input type="checkbox"> Student 1</li>
            <li><input type="checkbox"> Student 2</li>
        </ul>
        <button onclick="saveAttendance()">Save Attendance</button>
    `;
    document.getElementById('content').innerHTML = content;
}

function showReport() {
    const content = `<h2>Attendance Reports</h2><p>Coming soon...</p>`;
    document.getElementById('content').innerHTML = content;
}

function showProfile() {
    const content = `<h2>Profile</h2><p>Your profile details...</p>`;
    document.getElementById('content').innerHTML = content;
}

function saveAttendance() {
    alert('Attendance saved!');
}

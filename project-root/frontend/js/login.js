// /frontend/js/login.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem('token', data.token);
    window.location.href = 'admin/dashboard.html'; // Redirect to dashboard
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
});

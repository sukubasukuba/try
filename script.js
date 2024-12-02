function handleSubmit(event) {
    event.preventDefault();
    const us = sessionStorage.getItem('username');
    const ps = sessionStorage.getItem('password');
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === us && password === ps) {
        window.location.href = 'welcome.html';
    }
    else if (username === us && password !== ps) {
        alert("密碼錯誤");
    }
    else {
        alert("帳號不存在，請先註冊");
    }
}
const form = document.getElementById('login');
form.addEventListener('submit', handleSubmit);

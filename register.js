function handleSubmit(event){
    event.preventDefault();
    // 取得輸入資料
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    window.location.href = 'login.html';
    }
    const form = document.getElementById('login');
    form.addEventListener('submit',handleSubmit);

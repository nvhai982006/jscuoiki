const signupForm = document.getElementById('signupForm');

const username = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
    
const userlocal = JSON.parse(localStorage.getItem('formData')) || [];
// Hiển thị dữ liệu đã lưu trong localStorage nếu có

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if(!username.value){
        nameError.style.display = 'block';
    }
    else{
        nameError.style.display = 'none';
    }

    if(!age.value || isNaN(age.value) || age.value < 18){
        ageError.style.display = 'block';
    }
    else{
        ageError.style.display = 'none';
    }

    if (!email.value || !email.value.includes('@')) {
        emailError.style.display = 'block';
    }else{
        emailError.style.display = 'none';
    }

    if (!password.value){
        passwordError.style.display = 'block';
    }else{
        passwordError.style.display = 'none';
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.style.display = 'block';
        confirmPasswordError.textContent = 'Passwords do not match';
    } else {
        confirmPasswordError.style.display = 'none';
    }
    // Điều kiện hợp lệ
    if (
        username.value &&
        age.value && !isNaN(age.value) && Number(age.value) >= 18 &&
        email.value && email.value.includes('@') &&
        password.value &&
        password.value === confirmPassword.value
    ) {
        const formData = {
            username: username.value,
            email: email.value,
            age: age.value,
            password: password.value
        };
        userlocal.push(formData);
        localStorage.setItem('formData', JSON.stringify(userlocal));

        // Chuyển hướng đến trang đăng nhập
        setTimeout(function() {
            window.location.href = 'sign.html';
        }, 1000);
    }
});

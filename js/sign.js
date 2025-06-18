const signinForm = document.getElementById('signinForm');

const emailElement = document.getElementById('email');
const passwordElement = document.getElementById('password');

signinForm.addEventListener('submit', function(e) {
	e.preventDefault();
	//lấy dữ liệu từ localStorage
	const userlocal = JSON.parse(localStorage.getItem('formData')) || [];
	//lấy dữ liệu trên localStorage về email và password
	const findUser = userlocal.find(
		(user) =>
			user.email === emailElement.value &&
			user.password === passwordElement.value
	);
	if (!findUser) {
		//đăng nhập không thành công
		alert('Đăng nhập không thành công. Vui lòng kiểm tra lại email và mật khẩu.');
	} else {
		// Đăng nhập thành công
		alert('Đăng nhập thành công');
		window.location.href = 'index.html';
		// lưu thông tin người dùng vào localStorage
		localStorage.setItem('currentUser', JSON.stringify(findUser));
	}
})
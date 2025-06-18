const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const userName = document.getElementById('currentUser');

if (currentUser) {
  userName.innerHTML =currentUser.username;
}else {
  userName.innerHTML = '';
}

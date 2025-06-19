const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const userName = document.querySelectorAll('.currentUser');

if (currentUser) {
  userName.forEach(name => name.innerHTML = currentUser.username);
}else {
  userName.forEach(name => name.innerHTML = '');
}

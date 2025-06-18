const conten1=document.querySelector('.conten1')
const conten2=document.querySelector('.conten2')

const root=document.getElementById('root');
//thêm tên người dùng vào trang
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const userName = document.getElementById('currentUser');

if (currentUser) {
  userName.innerHTML =currentUser.username;
}else {
  userName.innerHTML = '';
}


let images=JSON.parse(localStorage.getItem('images')) || [];

if(images.length === 0 ){
    conten1.style.display='block';
    conten2.style.display='none';
}
else{
    conten1.style.display='none';
    conten2.style.display='flex';
    renderLibrary();
}
// Hàm để hiển thị thư viện
function renderLibrary(){
    images.forEach(item => {
        const itemElement=createCartItemElement(item);
        root.insertAdjacentHTML('beforeend',itemElement);
    })
}

root.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains('library_remve')) {
        const name = target.closest('.clear').querySelector('.down-item').innerText;
        if(confirm(`xác nhận xoá ${name} ra khỏi giỏ hàng`)) {
            images = images.filter(item => item.name !== name);
            localStorage.setItem('images', JSON.stringify(images));
            location.reload(); // hoặc xóa hết root.innerHTML và gọi lại remderLibrary()
        }
    }
});

function createCartItemElement(item){
    return`
        <div class="item-list" type="adventure">
            <div class="clear">
                    <div class="comingSoon-item">
                        <img src="${item.imgSrc}">
                    </div>   
                <div class="down-item">${item.name}                        
                </div>
                <div class="library_remve" >
                    xoá
                </div>
            </div>
        </div>`
}

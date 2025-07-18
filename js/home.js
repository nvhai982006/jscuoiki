

const filerBtns= document.querySelectorAll('.conten-text, .comingSoon-text');
const productCards=document.querySelectorAll('.conten-item, .comingSoon-list');
const images=JSON.parse(localStorage.getItem('images'))

const overlay = document.getElementById('overlay')
overlay.addEventListener('click', closeViewDetail);
// thêm tên người dùng vào trang
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const userName = document.querySelectorAll('.currentUser');

if (currentUser) {
  userName.forEach(name => name.innerHTML = currentUser.username);
}else {
  userName.forEach(name => name.innerHTML = '');
}


// Thêm sự kiện click cho các nút lọc
productCards.forEach(p=>{
  p.addEventListener('click',(e)=>{
    const target= e.target;
    if(target.classList.contains('down-item')){
      p.classList.add('active')
      overlay.style.display='block';
    }else if(target.classList.contains('see')){
      p.classList.add('active')
      overlay.style.display='block'
    }
    // Nếu người dùng click vào nút "Thêm vào thư viện"
    if(target.classList.contains('shopping')){
      const imgSrc=p.querySelector('img').src;
      const name=p.querySelector('.name').innerText;
      const newImages={
        imgSrc: imgSrc,
        name: name,
        quantity: 1
      }
      const existingItem =images.find(
      item => item.name === newImages.name
      );
      if(existingItem)
        existingItem.quantity++
      else
        images.unshift(newImages);
        localStorage.setItem('images',JSON.stringify(images));//dưa dữ liệu vào localStorage
        closeViewDetail()
      // Hiển thị thông báo
        alert(`Đã thêm ${newImages.name} vào thư viện `)
    }
  })
})

function closeViewDetail(){
  productCards.forEach(p => p.classList.remove('active'));
  overlay.style.display='none'
}



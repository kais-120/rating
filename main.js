const btn = document.querySelectorAll('.btn');
const button = document.querySelector('#sumbit');
let one = document.querySelector('.part-one');
let two = document.querySelector('.part-two');
let text = document.querySelector('.text');

button.addEventListener('click',()=>{
    one.classList.add('hidding');
    two.style.display = 'flex';
});

btn.forEach((i) => {
  i.addEventListener('click', () => {
    let r = i.innerHTML;
    text.innerHTML =`You selectee ${r} out of 5`
  });
});

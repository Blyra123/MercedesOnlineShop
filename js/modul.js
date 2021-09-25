const modulBtn = document.querySelector('.more')
const modal = document.querySelector('.modal')
modulBtn.addEventListener('click', ()=>{
    modal.classList.remove('hidden')
})
modal.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('overlay')|| target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    }
})
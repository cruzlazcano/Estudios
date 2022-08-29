document.getElementById('toggle-menu').addEventListener('click', () => {
    const b = document.body;
    b.classList.toggle('translate');
    b.classList.add('overflow-hidden');
    b.addEventListener('transitionend', () => {
        if(!b.classList.contains('translate'))
        b.classList.remove('overflow-hidden')
    })
})
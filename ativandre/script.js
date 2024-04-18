document.addEventListener('DOMContentLoaded', () => {


    const fieldmenu = document.querySelector('.fieldset-menu')
    const menu = document.querySelector('.menu') 
    const bm = document.querySelector('.bemVindo')
    const sim = document.querySelector('.sim')
    const nao = document.querySelector('.nao')

    sim.addEventListener('click', ()=> {
        menu.classList.add('hidden');
        fieldmenu.classList.add('hidden')
    })





});

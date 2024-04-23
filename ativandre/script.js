document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    const fieldmenu = document.querySelector('.fieldset-menu')
    const menu = document.querySelector('.menu') 
    const fieldmenuSim = document.querySelector('.fieldset-menu-sim')
    const sim = document.querySelector('.sim')
    const nao = document.querySelector('.nao')

    sim.addEventListener('click', ()=> {
        body.classList.add('active');
        menu.classList.add('hidden');
        fieldmenu.classList.add('hidden');
        fieldmenuSim.classList.remove('hidden');


    })


});

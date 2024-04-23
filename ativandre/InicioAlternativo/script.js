document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    const fieldmenu = document.querySelector('.fieldset-menu')
    const menu = document.querySelector('.menu') 
    const fieldmenuSim = document.querySelector('.fieldset-menu-sim')
    const sim = document.querySelector('.sim')
    const nao = document.querySelector('.nao')

    document.body.scrollIntoView({behavior: 'smooth'})

    sim.addEventListener('click', ()=> {
        body.style.overflow = 'visible';
    })

    document.getElementById('sim').addEventListener('click', function() {
        document.getElementById('destinos').scrollIntoView({ behavior: 'smooth' });
    });

});




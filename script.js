
document.querySelector('.menu-linha').addEventListener('click', function() {
    document.querySelector('#container').classList.toggle('show-menu')
});

const btn = document.querySelector('.btn-submit').addEventListener('click', function(e) {
    e.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#mensagem').value;

    if(nome !== '' && email !== '' && msg){
        console.log()
    }
    else {
        alert('preencha todos os campos!')
    }

    
});



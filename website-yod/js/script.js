let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    
}



//modalKey
let modalKey = 0

//variavel para controlar qtnd inicial de camisetas 
let qtndRoupa = 1

let cart = []

//Container e Modal
const seleciona =  (elemento) => document.querySelector(elemento);
const selecionaTodos = (elemento) => document.querySelectorAll(elemento);

const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

const formatoMonetario = (valor) => {
    if(valor){
        return valor.toFixed(2)
    }
}

const openModal = () =>{
    seleciona('.roupaWindowArea').style.opacity = 0
    seleciona('.roupaWindowArea').style.display = 'flex'
    setTimeout(()=>{
        seleciona('.roupaWindowArea').style.opacity = 1
    }, 150)
}

const closeModal = () => {
    seleciona('.roupaWindowArea').style.opacity = 0
    setTimeout(() => {
        seleciona('.roupaWindowArea').style.display = 'none'
    }, 500)
}

const btnClose = () =>{
    selecionaTodos('.roupaInfo--cancelButton, .roupaInfo--cancelMobileButton').forEach((item) =>{
        item.addEventListener('click', closeModal)
    })
}

const preencheContainer = (boxContainer, item , index) =>{
    boxContainer.querySelector('data-key' , index)
    boxContainer.querySelector('.image img').src = item.img
    boxContainer.querySelector('.price').innerHTML = `R$ ${item.price.toFixed(2)}`
    boxContainer.querySelector('.nome').innerHTML = item.name
}

const preencheModal = (item) => {
    seleciona('.roupaBig img').src = item.img
    seleciona('.roupaInfo h1').innerHTML = item.name
    seleciona('.roupaInfo--desc').innerHTML = item.description
    seleciona('.roupaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
}

const getKey = (e) => {
    let key = e.target.closest('.box').getAttribute('data-key')

    qtndRoupa = 1
    modalKey = key
    return key
}

const preencherTamanhos = (key) => {
    seleciona('.roupaInfo--size selected').classList.remove('selected')

    selecionaTodos('.roupaInfo--size').forEach((size) => {
        (sizeIndex == 2) ? size.classList.add('selected') : ''
        // size.querySelector('span').innerHTML= roupasJson[key].sizes[sizeIndex]
    })
}

const escolherTamanho = (key) => {
    selecionaTodos('.roupaInfo--size').forEach((size) => {
        size.addEventListener('click', (e) => {
            seleciona('.roupaInfo--size selected').classList.remove('selected')
            size.classList.add('selected')

            
        })
    })
}

const mudarQntd = () => {
    seleciona('.roupaInfo--qtmais').addEventListener('click', () =>{
        qtndRoupa++
        seleciona('.roupaInfo--qt').innerHTML = qtndRoupa
    })

    seleciona('.roupaInfo--qtmenos').addEventListener('click', () => {
        if(qtndRoupa > 1){
            qtndRoupa--
            seleciona('.roupaInfo--qt').innerHTML = qtndRoupa
        }
    })
}

roupasJson.map((item, index)=> {
    let boxContainer = document.querySelector('.box-container .box').cloneNode(true)

    seleciona('.box-container').append(boxContainer)

    preencheContainer(boxContainer, item, index)


    boxContainer.querySelector('.image img').src = item.img
    boxContainer.querySelector('.price').innerHTML = `R$ ${item.price.toFixed(2)}`
    boxContainer.querySelector('.nome').innerHTML = item.name


    boxContainer.querySelector('.box-container .box .icons a').addEventListener('click',(e) =>{
        e.preventDefault()

        let chave = getKey(e)

        openModal();
        preencheModal(item);

        preencherTamanhos(chave)

        seleciona('.roupaInfo--qt').innerHTML = qtndRoupa

        escolherTamanho(chave)
    })

    btnClose()
    
}) 

mudarQntd()
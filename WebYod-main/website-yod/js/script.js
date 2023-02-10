roupasJson.map((item, index)=> {
    let boxContainer = document.querySelector('.box-container .box').cloneNode(true)

    document.querySelector('.box-container').append(boxContainer)

    boxContainer.querySelector('.image img').src = item.img
    boxContainer.querySelector('.price').innerHTML = `R$ ${item.price.toFixed(2)}`
    boxContainer.querySelector('.nome').innerHTML = item.name

    //carrinho clicado
    boxContainer.querySelector('.box-container .box .icons a').addEventListener('click',(e) =>{
        e.preventDefault()

        document.querySelector('.roupaWindowArea').style.display = 'flex'
        // preenchimento dos dados
        document.querySelector('.roupaBig img').src = item.img
        document.querySelector('.roupaInfo h1').innerHTML = item.name
        document.querySelector('.roupaInfo--desc').innerHTML = item.description
        document.querySelector('.roupaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`

    })

    document.querySelector('.roupaInfo--cancelButton').addEventListener('click', () => {
        document.querySelector('.roupaWindowArea').style.display = 'none'
    })

    document.querySelector('.roupaInfo--cancelMobileButton').addEventListener('click', () => {
        document.querySelector('.roupaWindowArea').style.display = 'none'
    })

    
}) 
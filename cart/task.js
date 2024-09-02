let cartProducts = document.getElementsByClassName('cart__products');
let createElement, newQuantity;

document.addEventListener('click', (e) => {

    if (e.target.className === 'product__quantity-control product__quantity-control_dec') {
        let decQuantity = e.target.nextSibling.nextSibling;
        if (Number(decQuantity.textContent) > 0) {
            decQuantity.textContent = Number(decQuantity.textContent) - 1;
        };
    };

    if (e.target.className === 'product__quantity-control product__quantity-control_inc') {
        let incQuantity = e.target.previousSibling.previousSibling;
        incQuantity.textContent = Number(incQuantity.textContent) + 1;
    };

    if (e.target.className === 'product__add') {
        let product = e.target.parentNode.parentNode.parentNode;
        let cartProductImage = product.querySelector('img').src;
        let productQuantityValue = product.getElementsByClassName('product__quantity-value')[0].textContent;
        let cartProductsList = cartProducts[0].querySelectorAll('.cart__product');
        cartProductsList.forEach(element => {
            if (element.dataset.id === product.dataset.id) {
                newQuantity = product.getElementsByClassName('product__quantity-value')[0].textContent
                element.getElementsByClassName('cart__product-count')[0].textContent = newQuantity
                createElement = 'noCreateElement'
                moveImgProduct(element, product);
            };
        });

        if (createElement !== 'noCreateElement') {
            document.getElementsByClassName('cart')[0].style = 'display: block;'
            cartProducts[0].insertAdjacentHTML('afterBegin',
                `<div class="cart__product" data-id="${product.dataset.id}">
                        <a href="#" class="cart__product-remove">&times;</a>
                        <img class="cart__product-image" src="${cartProductImage}">
                        <div class="cart__product-count">${productQuantityValue}</div>
                     </div>`);

        };

        createElement = 'createElement';
    };

    if (e.target.className === 'cart__product-remove') {
        e.target.parentNode.remove();

    };
});

function moveImgProduct(cartProduct, product) {
    let imgProductCart = cartProduct.querySelector('img');
    let imgProduct = product.querySelector('img');
    let imgProductClone = imgProduct.cloneNode(true);
    document.body.appendChild(imgProductClone);
    let x = imgProduct.getBoundingClientRect().x - imgProductClone.getBoundingClientRect().x;
    let y = imgProduct.getBoundingClientRect().y - imgProductClone.getBoundingClientRect().y;
    let deltaX = imgProductCart.getBoundingClientRect().x - imgProduct.getBoundingClientRect().x;
    let deltaY = imgProductCart.getBoundingClientRect().y - imgProduct.getBoundingClientRect().y + 10;
    imgProductClone.style = `transform: translate(${x}px, ${y}px);`;
    let n = 200;

    for (let i = 0; i < n; i++) {
        setTimeout(() => {
            x = x + (deltaX) / n;
            y = y + (deltaY) / n;
            imgProductClone.style = `transform: translate(${x}px, ${y}px);`;
            console.log(1);
        }, i * 5);
    }

    setTimeout(() => {
        imgProductClone.remove()
    }, n * 5);
};
'use strict'
let product_card_content_nav = document.querySelector('.product-card-content-nav');
let product_content = document.querySelector('.product-content');



product_content.children[0].style.display = 'grid';
product_card_content_nav.children[0].style.borderBottom = '1px solid #000';
for(let i = 0; i < product_card_content_nav.children.length; i++) {
    product_card_content_nav.children[i].onclick = function() {
        for(let b = 0; b < product_content.children.length; b++) {
            product_content.children[b].style.display = 'none';
            product_card_content_nav.children[b].style.borderBottom = 'none';
        };
        product_content.children[i].style.display = 'block';
        product_card_content_nav.children[i].style.borderBottom = '1px solid #000';
    };
};
'use strict'
let brands_hover = document.querySelector('.brands-hover');
let brands_wrapper = document.querySelector('.brands-wrapper');
let brands_list = document.querySelector('.brands-list');


brands_hover.onmouseover  = function() {
    brands_wrapper.style.display = 'grid';
    brands_hover.style.textDecoration = 'underline';
    for(let i = 0; i < brands_wrapper.children.length; i++) {
        brands_wrapper.children[i].onmouseover = function() {
            brands_wrapper.style.display = 'grid';
        };
    };
    brands_wrapper.onmouseout = function() {
        brands_wrapper.style.display = 'none';
        brands_hover.style.textDecoration = 'none';
    };
    /*brands_list.onmouseout = function() {
        brands_wrapper.style.display = 'none';
    };*/
};

let mobile_menu_open = function(event) {
    let mobile_menu = document.querySelector('.mobile-menu');
    console.log(event);
    if(mobile_menu.style.display != 'grid') {
        mobile_menu.style.display = 'grid';
    }
    else{
        mobile_menu.style.display = 'none';
    }
};
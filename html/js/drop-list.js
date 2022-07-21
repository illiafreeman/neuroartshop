'use strict'
let drop_list_title = document.querySelectorAll('.drop-list-title');
console.log(drop_list_title);

for(let i = 0; drop_list_title.length; i++) {
    drop_list_title[i].onclick = function() {
        if(drop_list_title[i].nextElementSibling.style.display != 'grid') {
            drop_list_title[i].nextElementSibling.style.display = 'grid';
        }
        else {
            drop_list_title[i].nextElementSibling.style.display = 'none';
        }
    };
};
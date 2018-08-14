/*jslint devel: true */
/* eslint-env browser */

function categoryListClick (event) {
    console.log("This: " + event.target.innerText);
}

window.onload = function () {
    var category_lists = document.getElementsByClassName("feed-categories__list");
    
    for(var i = 0; i < category_lists.length; i++){
        console.log("foewjfewo");
        category_lists[i].addEventListener('click', categoryListClick);   
    }
}();
/*jslint devel: true */
/* eslint-env browser */

window.onload = function () {
    
    document.addEventListener('click', function (event){
        if (event.target.matches(".feed-categories__category-link")){
            console.log("hello!");
        }
    })
}();
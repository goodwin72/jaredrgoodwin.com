/*jslint devel: true */
/* eslint-env browser */

function filterPostsByCategories(categories){
    //TEMP SOLUTION
    //-- Assumes only one feed on any page with category filtering.
    //-- Also a bit hacked together.
    
    var feed = document.getElementsByClassName("feed")[0];
    
    if (feed){
        var feedItems = feed.getElementsByClassName("feed-item");
        
        if (feedItems.length > 0){
            for (var i = 0; i < feedItems.length; i++)     
            {
                var feedItemCategories = feedItems[i].getAttribute("data-categories").split(" ");
                
                //console.log(feedItemCategories);
                //console.log(categories);
                 
                for (var a = 0; a < feedItemCategories.length; a++){
                    //console.log(category.toString() === feedItemCategories[a]);
                    for (var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++){
                       if (categories[categoryIndex].toString() === feedItemCategories[a]){
                            feedItems[i].style.display = "none";
                        } 
                    }
                    
                }
            }
        }
    }
}

function categoryListClick (event) {
    console.log("EVENT: categoryListClick");
    
    //TEMP SOLUTION
    //-- Assumes only one feed on any page with category filtering.
    var feedItems = document.getElementsByClassName("feed")[0].getElementsByClassName("feed-item");
    
    for (var feedItemIndex = 0; feedItemIndex < feedItems.length; feedItemIndex++){
        feedItems[feedItemIndex].style.display = "initial";   
    }
    
    var categoryList = [];
    for(var i = 0, childNodeList = this.childNodes; childNodeList.length > i; i++){
        if(childNodeList[i].classList.contains("selected")){
            categoryList.push(childNodeList[i].innerText);
        }
        
        filterPostsByCategories(categoryList);
    }
    
    //console.log("This: " + this);
    console.log("-------------------");
}

function categoryListItemClick (event) {
    console.log("EVENT: categoryListItemClick");
    
    if(this.classList.contains("selected")){
        //console.log("Contains selected.");
        this.classList.remove("selected");   
    }
    else{
        //console.log("Does not contan selected.");
        this.classList.add("selected");
    }
    
    //console.log("This: " + this);
    //console.log("-------------------");
}

window.onload = function () {
    var category_lists = document.getElementsByClassName("feed-categories__list");
    var category_list_items = document.getElementsByClassName("feed-categories__list__category");
    
    for(var i = 0; i < category_lists.length; i++){
        console.log("Category List Text: " + category_lists[i].innerHTML);
        category_lists[i].addEventListener('click', categoryListClick);   
    }
    
    for(var i = 0; i < category_list_items.length; i++){
        console.log("Category List Item Text: " + category_list_items[i].innerHTML);
        category_list_items[i].addEventListener('click', categoryListItemClick);
    }
}();
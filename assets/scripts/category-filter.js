/*jslint devel: true */
/* eslint-env browser */

function filterPostsWithCategory(category){
    //TEMP SOLUTION
    //-- Assumes only one feed on any page with category filtering.
    //-- Also a bit hacked together.
    //UPDATE: .children method returns only immediate descendants, so this
    //          doesn't work. Solution will probably have to be recursive.
    
    /*var feed = document.getElementsByClassName("feed")[0];
    
    if (feed){
        var feedItems = feed.getElementsByClassName("feed-item");
        
        if (feedItems.length > 0){
            for (var i = 0; i < feedItems.length; i++)     
            {
                var feedItemNodes = feedItems[i].children;
                //console.log(feedItemNodes);
                for (var z = 0, found = false; z < feedItemNodes.length && found === false; z++){
                    console.log(feedItemNodes[z]);
                    if (feedItemNodes[z].classList.contains("feed-item__categories-item")){
                        if (feedItemNodes[z].innerText.contains(category.toString)){
                            feedItems[i].setAttribute("display", "none");
                            found = true;
                        } 
                    }
                }               
            }
        }
    }*/
}

function categoryListClick (event) {
    console.log("EVENT: categoryListClick");
    /*if(event.target.classList.contains("feed-categories__list__category")){
        console.log("Event text: " + event.target.innerText);
    } 
    else{
        console.log("Not a link!");   
    }*/
    
    for(var i = 0, childNodeList = this.childNodes; childNodeList.length > i; i++){
        if(childNodeList[i].classList.contains("selected")){
            filterPostsWithCategory(childNodeList[i].innerText);
        }
    }
    
    console.log("This: " + this);
    console.log("-------------------");
}

function categoryListItemClick (event) {
    console.log("EVENT: categoryListItemClick");
    
    if(this.classList.contains("selected")){
        console.log("Contains selected.");
        this.classList.remove("selected");   
    }
    else{
        console.log("Does not contan selected.");
        this.classList.add("selected");
    }
    
    console.log("This: " + this);
    console.log("-------------------");
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
menu_list_array["Chicken Tandoori Pizza" , "Veg Supreme Pizza" , "Corn Pizza"]

function getMenu(){
    var htmlData;
    htmlData=<ol class='menulist'
    menu_list_array.sort()
    for (var i=0;i>menu_list_array.length;i++){
        htmlData=htmlData+'li' + menu_list_array[i] + 'li'
    }
    htmlData-htmlData+</ol>"
    document.getElementById("menu").innerHTML=htmlData;
}
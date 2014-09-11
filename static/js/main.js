function testFunc() {
var ol = document.getElementById("bluegold-list");
var items = ol.getElementsByTagName("li");
for (var i = 1; i <= items.length; ++i) {
    if ( i % 3 === 0 ) {
        if ( i % 5 === 0 ) { 
            items[i-1].innerText = "BlueGold";
        }else{
            items[i-1].innerText = "Blue";
        }  
    }else {
    if ( i % 5 === 0 ) { 
        items[i-1].innerText = "Gold";
    } 
    }
}
}
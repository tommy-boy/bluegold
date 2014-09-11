function testFunc() {
var ol = document.getElementById("bluegold-list");
var items = ol.getElementsByTagName("li");
    for (var i = 1; i <= items.length; ++i) {
        ( i % 3 === 0 ) ? (( i % 5 === 0 ) ? items[i-1].innerText = "BlueGold" : items[i-1].innerText = "Blue") : ( i % 5 === 0 ) ? items[i-1].innerText = "Gold" : void 0;
    }
}
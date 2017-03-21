var text = ["BBOY", "HOUSE", "WACKING", "TAP", "POPPING"]

var count = 0

var element = document.getElementById("changeText")
setInterval(function(){
    element.innerHTML = text[count % text.length]
        count++

}, 2000)



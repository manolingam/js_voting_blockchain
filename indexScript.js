var SHA256 = require("crypto-js/sha256")

let keys = []

global.generateKeys = function(){
    for(let i=0; i<2; i++){
        keys[i] = SHA256(Math.random() + i + JSON.stringify("Blockchain")).toString()
        var element = document.createElement("p")
        var node = document.createTextNode(keys[i])
        element.appendChild(node)
        var mainElement = document.getElementById("title")
        mainElement.appendChild(element)

        element.style.fontSize = "medium"
        element.style.marginTop = "20px"
    }
    var button = document.getElementById("keys")
    button.parentNode.removeChild(button)
    //console.log(keys)
}

global.nextPage = function(){
    if(keys.length == 0){
        window.alert("Generate your keys first!")
    }else{
        window.location.replace("http://127.0.0.1:5500/secondIndex.html")
        window.localStorage.setItem("keysValue",JSON.stringify(keys))
        //console.log(keys)
        //console.log(JSON.parse(window.localStorage.getItem("keysValue")))
    }
}

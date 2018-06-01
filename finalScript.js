var blocks = JSON.parse(window.localStorage.getItem("Blocks"))
var ram = JSON.parse(window.localStorage.getItem("Ram"))
var stark = JSON.parse(window.localStorage.getItem("Stark"))

var block = blocks.block

if(ram>stark){
    var diff = ram-stark
    document.getElementById("decide").textContent = "Ram won by " + diff + " vote!"
}else if(stark>ram){
    var diff = stark-ram
    document.getElementById("decide").textContent = "Stark won by " + diff + " vote!"
}else{
    document.getElementById("decide").textContent = "It's a tie!"
}

document.getElementById("Ram").textContent = ram;
document.getElementById("Stark").textContent = stark;

for(i=0;i<block.length;i++){
    //console.log(block[i].index)
    var indexNode = document.createElement('tr')
    var indexText = document.createTextNode(block[i].index)
    indexNode.appendChild(indexText)
    var root = document.getElementById("index")
    root.appendChild(indexNode)

    var nameNode = document.createElement('tr')
    var nameText = document.createTextNode(block[i].name)
    nameNode.appendChild(nameText)
    var root2 = document.getElementById("name")
    root2.appendChild(nameNode)

    var hashNode = document.createElement('tr')
    var hashText = document.createTextNode(block[i].hash)
    hashNode.appendChild(hashText)
    var root3 = document.getElementById("hash")
    root3.appendChild(hashNode)

    var keyNode = document.createElement('tr')
    var keyText = document.createTextNode(block[i].key)
    keyNode.appendChild(keyText)
    var root4 = document.getElementById("key")
    root4.appendChild(keyNode)

    var prvNode = document.createElement('tr')
    var prvText = document.createTextNode(block[i].previousHash)
    prvNode.appendChild(prvText)
    var root5 = document.getElementById("previousHash")
    root5.appendChild(prvNode)

    // console.log(block[i].hash)
    // console.log(block[i].name)
    // console.log(block[i].key)
    // console.log(block[i].previousHash)
}




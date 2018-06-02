var SHA256 = require("crypto-js/sha256")

class Block{
    constructor(index, name, key, previousHash){
        this.index = index;
        this.name = name;
        this.key = key;
        this.previousHash = previousHash;
        this.hash = this.getHash();
    }

    getHash(){
        return SHA256(this.index + JSON.stringify(this.name) + this.key + this.previousHash).toString();
    }
}

class Blockchain{
    constructor(){
        this.block = [this.getGenisisBlock()];
    }

    getGenisisBlock(){
        var table = document.getElementById("table")
        table.parentNode.removeChild(table)
        return new Block(0,"Genisis_Block",0,0);
    }

    addBlock(index, vote, key){
        this.previousIndex = this.block[this.block.length - 1].index
        this.previousHash = this.block[this.block.length - 1].hash
        this.previousVote = this.block[this.block.length - 1].name
        this.newVote = new Block(index, vote, key, this.previousHash)
        if(this.previousHash == this.block[this.block.length - 1].hash){
            this.block.push(this.newVote)
            this.hash = this.block[this.block.length - 1].hash
            if(this.previousHash == this.block[this.block.length - 2].hash ){
                        document.getElementById("previousBlock").textContent = "Block number : " + this.previousIndex
                        document.getElementById("previousVote").textContent = "Previous Vote : " + this.previousVote
                        document.getElementById("hash").textContent = "Hash of that Vote : " + this.previousHash
                        document.getElementById("currentBlock").textContent = "Block number : " + index
                        document.getElementById("currentVote").textContent = "Current Vote : " + vote
                        document.getElementById("currentHash").textContent = "Current Hash : " + this.hash
                        document.getElementById("previousHash").textContent = "Hash of Previous Vote : " + this.previousHash
                        //console.log(this.block)
                        window.alert("Your vote is registered! Thankyou!")
            }else{
                //console.log("2nd")
                window.alert("Blockchain is invalid!")
            }
        }else{
            //console.log("1st")
            window.alert("Blockchain is invalid!")
        }
    }
}

let blocks = new Blockchain()
let Stark = 0;
let Ram = 0;
let keys = JSON.parse(window.localStorage.getItem("keysValue"));
let index = 1;

global.voteSubmit = function(){
   //console.log(keys)
   var radioButtons = document.getElementsByName("radio");
        for(i=0; i<keys.length; i++){
            if(inputKey == keys[i]){
                    for(var x=0; x<radioButtons.length; x++){
                        if(radioButtons[x].checked){
                            val = radioButtons[x].value
                            passBlock(index, val, keys[i])
                            index++
                            if(val == "Stark")
                            {
                            Stark++
                            //document.getElementById("Stark").textContent = Stark;
                            }else if(val == "Ram"){
                            Ram++
                            //document.getElementById("Ram").textContent = Ram;
                            }
                        }
                    }
                    keys.splice(i,1)
                    //console.log("removed key")
                    if(keys.length == 0){
                        //window.alert("Sorry! All keys have been used.")
                        window.localStorage.setItem("Ram",JSON.stringify(Ram))
                        window.localStorage.setItem("Stark", JSON.stringify(Stark))
                        window.localStorage.setItem("Blocks",JSON.stringify(blocks))
                        window.location.replace("finalIndex.html")
                    }
                    break
                }else if(i==keys.length-1){
                    window.alert("Invalid Key.. Try Again")
                }
        }
}

function passBlock(index, val, key){
    blocks.addBlock(index, val, key)
}

var inputKey = ""

document.getElementById("password").addEventListener("input",()=>{
    inputKey = document.getElementById("password").value
})



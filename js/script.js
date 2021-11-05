let count = -1
while (count <= 50){
    console.log(count);
    count += 1;
}

function increment(){
    count = count + 1
    document.getElementById("count-el").innerText = count

}
function decrement(){
    count = count - 1
    document.getElementById("count-el").innerText = count
}

function reset(){
    count = 0
    document.getElementById("count-el").innerText = count
}



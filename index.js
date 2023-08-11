const cats = ["Milo", "Otis", "Garfield"]; {
}
function destructivelyAppendCat(name){
    cats.push(name)
};
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const copycats = [...cats,name]
    return copycats
}

function prependCat(name){
    const copycats = [name,...cats]
    return copycats
}

function removeLastCat(name){
    return cats.slice(0,cats.length-1)
}

function removeFirstCat(name){
    return cats.slice(1)
}

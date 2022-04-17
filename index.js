//your solution here!

//1
const cats = ["Milo","Otis","Garfield" ]

function destructivelyAppendCat(name) {
    cats.push(name)
}
//2

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name) { 
  return  [...cats, name]
}

function prependCat(name){
    return [name,...cats]
}

function removeLastCat(){
const copyOfCats = [...cats]
   copyOfCats.pop()
   return copyOfCats;
}

function removeFirstCat(){
    const copyOfCats = [...cats]
    copyOfCats.shift()
    return copyOfCats;
}



const app = "I don't do much."


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  const newArray = [...kittens, name];
  return newArray;
}

function prependKitten(name){
  const newArray = [name, ...kittens];
  return newArray;
}

function removeLastKitten(){
  kittens.slice(0, array.length - 1);
  return kittens;
}

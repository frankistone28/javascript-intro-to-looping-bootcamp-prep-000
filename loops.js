function forLoop(array){
    for(let i = 0; i < 25; i++){
        array.push(`"I am ${i} strange loop${i === 1 ? '' : 's'}."`);
    }
    return array;
}

function whileLoop(number){
  while (number > 0) {
    console.log(--number);
  }
  return "done";
}

function maybeTrue(){
    return Math.random() >= 0.5;
}

function doWhileLoop(array){
  
}

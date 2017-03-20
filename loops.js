function forLoop(array){
  for (var i = 0; i < array.length; i++) {
    if(i === 1){
      array.push( "I am 1 strange loop." );
    }else{
      for (var i = 0; i < 25; i++){
        array.push(`I am ${i} strange loops.` );
      }
    }
  }
}

function whileLoop(n){
  while(n <= 0){
    console.log(n)
    n--
  }
  return "done"
}

function doWhileLoop(array){

}

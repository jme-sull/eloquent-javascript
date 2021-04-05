for(let count = 1; count <= 100; count++){
    let output = '';
    if(count % 3 == 0) output += 'Fizz';
    if(count % 5 == 0) output += 'Buzz';
    console.log(output || count);
  
}
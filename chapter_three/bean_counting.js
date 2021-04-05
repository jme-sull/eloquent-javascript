const countBs = (string) =>  {
    let count = 0
    for(let i = 0; i < string.length; i++){
        string[i] === 'B' && count++
    }
    return count
}

const countChars = (string, char) =>  {
    let count = 0
    for(let i = 0; i < string.length; i++){
        string[i] === char && count++
    }
    return count
}



console.log(countBs('BBBBB'))
console.log(countChars('Hello there my name is Jamie', 'e'))
// Code your solutions in this file

function writeCards(names, event) {
    let cardArray = [];
    for (let i = 0; i < names.length; i++)
    {
        cardArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cardArray;
}

function countDown(i) {
    while (i >= 0)
    {
        console.log(i--);
    }
}
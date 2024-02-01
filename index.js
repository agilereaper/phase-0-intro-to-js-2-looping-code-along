const thankyou = []

function writeCards(arrayOfNames, event) {
    for(let i = 0; i < arrayOfNames.length; i++) {
        thankyou.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return thankyou
    }
    function countDown(){
        let i = 10;
        while (i >= 0) {
            console.log(i--)
        }
    }

    





// writeCards(["a", "b", "c"], "graduation")
// function writeCards([name1, name2, name3], birthday) {
//     for (let i = 0; i < writeCards.length; i++)
//     const copywriteCards = [...writeCards]
// }
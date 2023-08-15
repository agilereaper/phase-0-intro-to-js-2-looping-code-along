function writeCards(arrayOfNames, event) {
    for (let i = 0; i < arrayOfNames.length; i++) {
        thankyou.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return thankyou
}
const thankyou = []

function countDown() {
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--)
}
}









// writeCards(["a", "b", "c"], "graduation")
// function writeCards([name1, name2, name3], birthday) {
//     for (let i = 0; i < writeCards.length; i++)
//     const copywriteCards = [...writeCards]
// }
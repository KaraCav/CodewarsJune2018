// NUMBER 1: Get the number n (n > 0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
    let myArr = [];
    for (var i = 1; i <= n; i++) {
        myArr.push(i);
    }
    return myArr.reverse();
};

// Leaderboard Position:#57,594

// NUMBER 2:  Implement Length() to count the number of nodes in a linked list.

//     length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

//     count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4

// NUMBER 3: Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs: If the pizza is less than €5, Michael pays the full price. Otherwise Kate will contribute 1/ 3 of the price up to €10. How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
function michaelPays(costs) {
    let newCost = 0;
    if (costs < 5) {
        return Math.round(costs * 100) / 100
    }
    else if (costs <= 30) {
        newCost = costs * 2 / 3;
        return Math.round(newCost * 100) / 100
    }
    else {
        return Math.round((costs - 10) * 100) / 100
    }
}

// NUMBER 4: My TV remote control has arrow buttons and an OK button. I can use these to move a "cursor" on a logical screen keyboard to type words. The keypad is a 2D array. How many button presses on my remote are required to type a given word?

var tvRemote = function (word) {

    let myRemote = [['a', 'b', 'c'], ['d', 'e']];

    var x1 = 1;
    var y1 = 0;
    console.log(myRemote[y1][x1]);

    // for(let i=0; i< word.length; i++){
    //   console.log(myRemote.indexOf(myWord[i]))
    //   if(myRemote.indexOf(myWord[i] >-1){
    //   }
    // }
    // return 1;
}
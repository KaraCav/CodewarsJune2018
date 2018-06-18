// NUMBER 1: Get the number n (n > 0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
    let myArr = [];
    for (var i = 1; i <= n; i++) {
        myArr.push(i);
    }
    return myArr.reverse();
};

// NUMBER 1:  Implement Length() to count the number of nodes in a linked list.

//     length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

//     count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4


//big-o notation

const nemo = ['nemo'];
const large = new Array(1000).fill('nemo')

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo');
        }
    }
}

findNemo(nemo) // O(n) --> Linear Time

// O(1) --> Linear Time
function findFirstBox(boxes) {
    console.log(boxes[0])
}

function findFirstTwoBox(boxes) {
    console.log(boxes[0]) // O(1)
    console.log(boxes[1]) // O(1)
} // Total Num of Op: O(2) --> still linear (Constant time on a function)

function challenge(input) {
    let a = 20 // O(1)
    a = 50 + 3 // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = True; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
} // Total: 3 + n + n + n + n = 3 + 4n => BIG O(3+4n)


 
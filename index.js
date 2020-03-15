const basicComparator = (first, second) => {
    if (first === second) {
        return 0;
    } else if (first < second) {
        return -1;
    } else {
        return 1;
    }
}

const compareNthElements = (n, comparatorFunction, reverse) => {
    return (first, second) =>{
        if (reverse === true) {
            return comparatorFunction(second[n], first[n]);
        } else {
            return comparatorFunction(first[n], second[n]);
        }
    }
}
let arr = [[1,3,10,2],[2,3,11,4],[2,4,7,3],[1,4,11,1],[3,99,18,0]]
console.log(arr)
let a = arr.sort(compareNthElements(3, basicComparator)); // เรียงตาม index 3
console.log(a)
let b =arr.sort(compareNthElements(2, basicComparator)); // เรียงตาม index 2
console.log(b)

let firstIndex = 0;
let lastIndex = 0;
const findExist = (arrNum, findNum) => {
    const mid = Math.floor((firstIndex - lastIndex) / 2);
    if (arrNum[mid] == findNum) {
        return mid;
    } else if (arrNum[mid] > findNum) {
        firstIndex = mid;

    } else {
        lastIndex = mid
    }
    findExist(arrNum, findNum)
}
const bisectAlgo = (arrNum, findNum) => {
    firstIndex = 0;
    lastIndex = arrNum.length - 1;
    findExist(arrNum, findNum);
}
console.log(bisectAlgo([2, 5, 9, 12, 35, 60, 90, 120, 135, 185, 200, 250], 120));
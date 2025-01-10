const { findSourceMap } = require('module')

const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(/\r?\n/)
const arr = input.map(str => str.split('').map(Number))

function isValid(num, row, col) {
    return !(
        arr[row].includes(num) ||
        arr.some(row => row[col] === num) ||
        isInbox(num, row, col)
    )
}

function isInbox(num, row, col) {
    const boxRow = Math.floor(row / 3) * 3
    const boxCol = Math.floor(col / 3) * 3
    for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
            if (arr[i][j] === num) return true
        }
    }
    return false
}

function findZero() {
    for (let i=0; i<9; i++) {
        for (let j=0; j<9; j++) {
            if (arr[i][j]===0) return true
        }
    }
    return false
}

function findSolution() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (arr[i][j] !== 0) continue
            for (let num = 1; num < 10; num++) {
                if (isValid(num, i, j)) {
                    arr[i][j] = num
                    if (findSolution()) {
                        return true
                    }
                    arr[i][j] = 0
                }
            }
            return false
        }
    }
    return true
}

findSolution()

console.log(arr.map(nums => nums.join('')).join('\n'))
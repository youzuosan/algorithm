// 快速排序

// 找出基准值，取出基准值，遍历放入

function quick(arr) {
    if (arr.length < 2) return arr;

    let flag = parseInt(arr.length / 2);
    let flagValue = arr.splice(flag, 1);

    let leftArr = [], rightArr = [];
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > flagValue[0]) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }

    return quick(leftArr).concat(flagValue).concat(rightArr);
}


var sortArr = [];
for (var i = 0;i < 1000; i ++) {
    sortArr.push(Math.floor(Math.random() * 10000));
}

console.time('native sort ');
console.log(sortArr.sort());
console.timeEnd('native sort ');

console.time('快速排序耗时 ');
console.log(quick(sortArr));
console.timeEnd('快速排序耗时 ');



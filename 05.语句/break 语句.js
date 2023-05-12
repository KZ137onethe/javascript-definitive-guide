// break 只能在 switch 语句中 或者 循环中使用

// break 如果后面跟一个标签时，它会跳转到具体指定的包含语句的末尾或终止该语句

let matrix = [[1, 343, 2],[4, 5, undefined],[1, 5, 3],[9]];
let sum = 0, success = false;

computeSum: if(matrix){
    for(let x = 0; x < matrix.length; x++){
        let row = matrix[x];
        if(!row) break computeSum;
        for(let y = 0; y < row.length; y++){
            let cell = row[y];
            if(isNaN(cell)) break computeSum;
            sum += cell
        }
    }
    success = false
}
console.log(success)
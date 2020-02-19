// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr){
    return arr.map(function(x){
        if( x % 2 === 0)
            return Math.pow(x,2);
        else
            return x;
    });
}

/** 
 * Dùng hàm average tính điểm trung bình 3 môn của một học sinh.
 * Làm tròn điểm trung bình
 * Ví dụ: [8, 8, 6.75]  => 8
 * Gợi ý: Dùng Math.round 
*/

function average(arr) {
    var result = arr.reduce(function(a,b){
        return a + b;
    });
    return Math.round(result/arr.length);
}

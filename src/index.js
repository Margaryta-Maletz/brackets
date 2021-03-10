module.exports = function check(str, bracketsConfig) {
    let arr = str.split(''),
        temp = [];
    const trans = bracketsConfig[0].map((col, j) => bracketsConfig.map(row => row[j]));

    for (let i = 0; i < arr.length; i++) {
        
        if (trans[0].includes(arr[i])) {
            temp.push(arr[i]);
        }

        if (trans[1].includes(arr[i])) {
            if ((temp.length !== 0) & (temp[temp.length-1] === trans[0][trans[1].indexOf(arr[i])])) {
                temp.pop();
            } else { 
                return false; 
            }
        } 

        if (trans[0].includes(arr[i]) & trans[1].includes(arr[i])) {
            if (temp.length === 0 | (temp[temp.length-1] !== arr[i])) {
                temp.push(arr[i]);
            } else {
                temp.pop();
            }
        }

    }
    if (temp.length > 0) return false;
    return true;
}

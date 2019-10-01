function rot13(str) { // LBH QVQ VG!
    let arr = str.split("");
    let cipherArr = [];
    let rotCipherStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toUpperCase() !== arr[i].toLowerCase()) {
            let code = arr[i].charCodeAt();
            if (code >= 78) {
                code -= 13;
            } else {
                code += 13;
            }
            cipherArr.push(String.fromCharCode(code));
        } else {
            cipherArr.push(arr[i]);
        }
    }
    rotCipherStr = cipherArr.join("");
    //to keep track of all the arrays and string and to check if they are getting the proper value.
    console.log(arr);
    console.log(cipherArr);
    console.log(rotCipherStr);
    return rotCipherStr;
}
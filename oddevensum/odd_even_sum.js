/**
 * Function that takes input number and returns array [odd, even]
 * @param {number} number - input number
 */
function oddEvenSum(number) {
    // throw new Error("Not implemented yet");
    let array=number.toString().split('');
    let output=[0,0]
    for (let i = 0; i < array.length; i++) {
        if(i%2!=0){
            output[1]=output[1]+(parseInt(array[i]))
        }else{
            output[0]=output[0]+(parseInt(array[i]))
        }        
    }    
    return output
}

module.exports = oddEvenSum;

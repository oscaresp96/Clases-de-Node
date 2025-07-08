export function findMax(req,res){
const Arr = [123, 890, 987, 789, 321, 456, 654];
 let [maxVal] = Math.max(...Arr);
 console.log("max element is:" + maxVal);
}

export function findMin(req,res){
    const Arr = [123, 890, 987, 789, 321, 456, 654];
    let[minVal] = Math.min(...Arr);
    console.log("min element is:"+ minVal);
}


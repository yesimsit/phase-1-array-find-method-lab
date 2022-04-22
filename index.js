// code your solution here

function superbowlWin(arr){
    const result=arr.find(arr =>arr.result === "W");
    if (result) {
        return result.year;
    }else{
        return undefined;
    };
};
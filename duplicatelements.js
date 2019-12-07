//remove duplicate elements form array

var arr=[9,6,5,5,1,7,9,1,6,3];
var newarr=[];
for(let i=0;i<arr.length;i++){

        if(newarr.indexOf(arr[i]) == -1){
            newarr.push(arr[i]);

        }
    }
console.log(newarr);
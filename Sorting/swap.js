//this is not in the course but for the sake of the knowledge i ahve created this file hope you liked it....Love you 

function swaper(var1,var2){
    let temp=var1;
    var1=var2;
    var2=temp;
    return [var1,var2];
}

let var1=1;
let var2=2;
[var1,var2]=swaper(var1,var2);//using destructing to swap two varibales..
console.log(var1,var2)



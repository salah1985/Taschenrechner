function insert(num){
    var myString = document.getElementById("textview").value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
        if (!isNaN(lastChar) || !isNaN(num)) {
            document.getElementById("textview").value = myString + num;
        }else if(num != lastChar){
            document.getElementById("textview").value = myString.replace(lastChar, num);
        }
    }
}
function equal() {
    var sum = document.getElementById("textview").value;
    if (sum) {
        document.getElementById("textview").value = eval(sum);
    }
}
function clean() {
    document.getElementById("textview").value = " ";
}
function back() {
    var exp = document.getElementById("textview").value;
    document.getElementById("textview").value = exp.substring(0,exp.length - 1);
}
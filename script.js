
function getnum(num) {
        switch (num) {

                case 1:
                        var x = '1';
                        document.getElementById("answer1").value += x;
                        break;
                case 2:
                        var x = '2';
                        document.getElementById("answer1").value += x;
                        break;
                case 3:
                        var x = '3';
                        document.getElementById("answer1").value += x;
                        break;
                case 4:
                        var x = '4';
                        document.getElementById("answer1").value += x;
                        break;
                case 5:
                        var x = '5';
                        document.getElementById("answer1").value += x;
                        break;
                case 6:
                        var x = '6';
                        document.getElementById("answer1").value += x;
                        break;
                case 7:
                        var x = '7';
                        document.getElementById("answer1").value += x;
                        break;
                case 8:
                        var x = '8';
                        document.getElementById("answer1").value += x;
                        break;
                case 9:
                        var x = '9';
                        document.getElementById("answer1").value += x;
                        break;
                case 0:
                        var x = '0';
                        document.getElementById("answer1").value += x;
                        break;
                case '+':
                        var x = '+';
                        document.getElementById("answer1").value += x;
                        break;
                case '-':
                        var x = '-';
                        document.getElementById("answer1").value += x;
                        break;
                case '*':
                        var x = '*';
                        document.getElementById("answer1").value += x;
                        break;
                case '/':
                        var x = '/';
                        document.getElementById("answer1").value += x;
                        break;

                case 'ans':
                        ans = eval(document.getElementById("answer1").value)
                        document.getElementById("answer2").value = ans;
                        break;

                case 'c':

                        document.getElementById("answer1").value = '';
                        document.getElementById("answer2").value = '';
                        break;
                case 'b':

                        var str = document.getElementById("answer1");
                        var x = str.value;
                        var y = x.slice(0, x.length - 1)
                        str.value = y;
                        break;
        }
}



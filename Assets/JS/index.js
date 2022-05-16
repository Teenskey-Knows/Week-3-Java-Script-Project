

document.getElementById("form1").onsubmit=function(e) {
    e.preventDefault();

    variable = parseInt(document.querySelector('input[name = "questionOne"]:checked').value);
    second = parseInt(document.querySelector('input[name = "questionTwo"]:checked').value);
    sub = parseInt(document.querySelector('input[name = "questionThree"]:checked').value);
    con = parseInt(document.querySelector('input[name = "con"]:checked').value);
    ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);


    result = variable + second + sub + con + ifstate;

    document.getElementById("grade").innerHTML = result;

    if (result == 0) {result2 = "I don't think you studied.<br /><img src='./JAVASCRIPT/Images/image 4.png' width='300' />"};
    if (result == 20) {result2 = "You need to spend more time. Try again.<br /><img src='./JAVASCRIPT/Images/image 5.png' width='300' />"};
    if (result == 40) {result2 = "I think you could do better. Try again.<br /><img src='./JAVASCRIPT/Images/image 6.png' width='300' />"};
    if (result == 60) {result2 = "Average.<br /><img src='./JAVASCRIPT/Images/image 6.png' width='300' />"};
    if (result == 80) {result2 = "So close. Try again.<br /><img src='./JAVASCRIPT/Images/image 7.png' width='300' />"};
    if (result == 100) {result2 = "You're a JavaScript pro!<br /><img src='./JAVASCRIPT/Images/image 8.png' width='300' />"};


    document.getElementById("grade2").innerHTML = result2;




    return false; // required to not refresh the page; just leave this here
} 



document.getElementById("form1").onsubmit=function(e) {
    e.preventDefault();

    variable = parseInt(document.querySelector('input[name = "questionOne"]:checked').value);
    second = parseInt(document.querySelector('input[name = "questionTwo"]:checked').value);
    sub = parseInt(document.querySelector('input[name = "questionThree"]:checked').value);
    con = parseInt(document.querySelector('input[name = "con"]:checked').value);
    ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);


    result = variable + second + sub + con + ifstate;

    document.getElementById("grade").innerHTML = result;

    if (result == 0) {result2 = "You really need to put more effort.<br /><img src='../Assets/Images/face1.jpeg' width='300' />"};
    if (result == 20) {result2 = "You can do better than this with consistent effort.<br /><img src='../Assets/Images/face2.jpeg' width='300' />"};
    if (result == 40) {result2 = "Nice try.You can better your score.<br /><img src='../Assets/Images/face3.jpg' width='300' />"};
    if (result == 60) {result2 = "Average.<br /><img src='./Assets/Images/face3.jpg' width='300' />"};
    if (result == 80) {result2 = "Nice try.Awesome.<br /><img src='../Assets/Images/face2.jpeg' width='300' />"};
    if (result == 100) {result2 = "You did really great.Amazing.<br /><img src='../Assets/Images/face3.jpg' width='300' />"};


    document.getElementById("grade2").innerHTML = result2;




    return false; // required to not refresh the page; just leave this here
} 

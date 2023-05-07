question_array=["2 liter = ______ milliliter", "1000 milliliter = ________ liter", 
"Liter is written as ______.(Write the answer in small letters)",
"Milliliter is written as _________.(Write the answer in small letters)","How many liters is 9000 milliliters?"];

answer_array=["2000", "1", "liter", "ml", "9"];

question_number="0";

function quizTime(){
    window.location="quiz.html";
}

var i = 0;
var k = 0;

function start(){
    question_number="0";
    
    document.getElementById("question").innerHTML=question_array[0];
    
    question_number=question_number+1;

    i++;
}

function check(){
    if (i == 5) 
    {
        window.location="result.html";
        document.getElementById("result").innerHTML="your score is "+correct_questions;
    } 
    
    else
    {
        document.getElementById("question").innerHTML=question_array[i];
    
        var answer=document.getElementById("answer").value;
        if (answer == answer_array[k])
        {
            points=points+1;
            var correct_questions=correct_questions+1;
            k++;
            i++;
            document.getElementById("questions").innerHTML=question_array[i];
            question_number=question_number+1;
        }
        else
        {
            k++;
            i++;
            document.getElementById("questions").innerHTML=question_array[i];
            points=points;
            question_number=question_number+1;
        }
    }
}

function back(){
    window.location="index.html";
}
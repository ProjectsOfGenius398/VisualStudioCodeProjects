array_first_paragraph=[];
function Para_one_get(){
var display_array_first_paragraph=[];
var para_line_one=document.getElementById("input_1").value;

var para_line_two=document.getElementById("input_2").value;

var para_line_three=document.getElementById("input_3").value;

var para_line_four=document.getElementById("input_4").value;

var para_line_five=document.getElementById("input_5").value;

var para_line_six=document.getElementById("input_6").value;

display_array_first_paragraph.push(para_line_one);
display_array_first_paragraph.join(". ");
display_array_first_paragraph.push(para_line_two);
display_array_first_paragraph.join(". ");
display_array_first_paragraph.push(para_line_three);
display_array_first_paragraph.join(". ");
display_array_first_paragraph.push(para_line_four);
display_array_first_paragraph.join(". ");
display_array_first_paragraph.push(para_line_five);
display_array_first_paragraph.join(". ");
display_array_first_paragraph.push(para_line_six);


console.log(display_array_first_paragraph);
document.getElementById("view_first_para").innerHTML=display_array_first_paragraph;

var para_header=document.getElementById("view_para_header").value;
document.getElementById("view_para_header").innerHTML=para_header;
}
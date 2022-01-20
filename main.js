name_of_student_array= [];

function submit(){
var name_1=document.getElementById("name1").value;
var name_2=document.getElementById("name2").value;
var name_3=document.getElementById("name3").value;
var name_4=document.getElementById("name4").value;

name_of_student_array.push(name_1);
name_of_student_array.push(name_2);
name_of_student_array.push(name_3);
name_of_student_array.push(name_4);

console.log(name_of_student_array);
document.getElementById("result").innerHTML=name_of_student_array;
}
$(document).ready(function(){
$(".submit-btn").click(function(){
let subj = parseInt($(".input-num").val());
console.log(subj);
if(isNaN(subj))
{
    alert("Please input number");
}
else{
    $(".grades-page").addClass("show");
$(".wrap").addClass("hide");
}
})



})
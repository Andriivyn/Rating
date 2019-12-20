$(document).ready(function(){
$(".submit-btn").click(function(){
let subj = parseInt($(".input-num").val());
console.log(subj);
if(isNaN(subj))
{
    alert("Please input number");
}
else{
    $(".wrap").addClass("hide");
    $(".grades-page").addClass("show");
    for (let i=0; i<=subj-1; i++){
        $(".grades-page").append($(".grades-input"));
    }

}
})



})
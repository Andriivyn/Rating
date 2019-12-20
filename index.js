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
    let inq = $(".grades-input");
    console.log(inq);
        for (let i = 0; i <= subj - 1; i++) {
            const gradesInput = $("<div>", { "class": "grades-input" });
            gradesInput.append($("<input>", { type: "text", "class": "grade-in" }));
            gradesInput.append($("<input>", { type: "text", "class": "credit-in" }));
            $(".grades-page").append(gradesInput);
        } 
    $(".grades-page").append($("<button>", { "class": "count-average", type: "button" }).text("CONFIRM"));

}
})
$(".count-avнerage").click(function(){
})
})
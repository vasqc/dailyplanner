//put todays date on page
//var todayDate = moment().format('dddd, MMM Do YYYY')
//using jquery
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
$(document).ready(function () {

    //use jquery to add event listener
    //addEventListener.click(saveBtn);
    $(".saveBtn").on("click", function () {
        //why is this function not working?
        // must put funcition in between parenthesis 
        var text = $(this)
            .siblings(".description")
            .val();
        var time = $(this)
            .parent()
            .attr("id");

        //show item was saved
        //window.prompt(saveBtn);
        //use jquery to show task is saved
        $(".notification").addClass("show");
        //save in local storage 
        localStorage.setItem(time, text);
    })
});


function timeKeeper() {
    var timeNow = moment().hours();
    // for (var i = 0; i<moment().hours(); i++)
    //add loop with jquery
    $(".time-block").each(function () {
        var timeBlock = parseInt(
            $(this).attr("id").split("-")[1]
        );

        if (timeBlock < timeNow) {
            $(this).addClass("past");
        } else if (timeBlock === timeNow) {
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })

}
//make sure the page works
timeKeeper();
//is the a for loop to do this?
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
// Get today's day and date to display at the top of the calendar
var todaysDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todaysDate);

$(document).ready(function() {
    // click listener for the save button
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text to local storage
        localStorage.setItem(time, text);
    })

    function timeKeeper() {
        // get current number of hours
        var timeNow = moment().hour();

        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // Adding the classes for the background indicators based on the current time
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // Pulls items from local storage if user has saved anything
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeKeeper();
})
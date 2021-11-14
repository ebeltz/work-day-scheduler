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
    $("#hour8am .description").val(localStorage.getItem("hour8am"));
    $("#hour9am .description").val(localStorage.getItem("hour9am"));
    $("#hour10am .description").val(localStorage.getItem("hour10am"));
    $("#hour11am .description").val(localStorage.getItem("hour11am"));
    $("#hour12pm .description").val(localStorage.getItem("hour12pm"));
    $("#hour1pm .description").val(localStorage.getItem("hour1pm"));
    $("#hour2pm .description").val(localStorage.getItem("hour2pm"));
    $("#hour3pm .description").val(localStorage.getItem("hour3pm"));
    $("#hour4pm .description").val(localStorage.getItem("hour4pm"));
    $("#hour5pm .description").val(localStorage.getItem("hour5pm"));
    $("#hour6pm .description").val(localStorage.getItem("hour6pm"));
    $("#hour7pm .description").val(localStorage.getItem("hour7pm"));

    timeKeeper();
})
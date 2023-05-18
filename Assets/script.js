// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Get elements by IDs
var saveButton = $('.btn');



//Display Current date and current hour
let currentDay = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDay);

  let currentHour = dayjs().hour();
  $('#currentHour').text('You are currently working in the ' + currentHour + ' hour time block');

  
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveButton.on('click', function(e){
    // create key (hour) value (task) pair for storgae
    let hour = $(this).parent().attr("id");
    let savedTask = $(this).siblings(".description").val();
    localStorage.setItem(hour,savedTask);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  $('.time-block').each(function(){
    var timeBlock = $('.time-block').attr('id');
    if (timeBlock == currentHour){
      $(this).addClass('present');
    }
    else if (timeBlock > currentHour){
      $(this).addClass('future');
    }
    else if (timeBlock < currentHour){
      $(this).addClass('past');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#8 .description').val(localStorage.getItem("8"));
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
  $('#18 .description').val(localStorage.getItem('18'));

  // $('.timeblock').each(function(){
  //   localStorage.getItem()
  // })
});
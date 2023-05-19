//Get elements by IDs
var saveButton = $('.btn');

  
$(function () {

  //Display Current date and current hour
  let currentDay = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(currentDay);

  let currentHour = dayjs().hour();
  $('#currentHour').text('You are currently working in the ' + currentHour + ' hour time block');

  // Add a listener for click events on the save button.
  var saveButton = $('.btn');

  saveButton.on('click', function(e){
    // create key (hour) value (task) pair for storgae
    let hour = $(this).parent().attr("id");
    let savedTask = $(this).siblings(".description").val();
    localStorage.setItem(hour,savedTask);
  });

  // Add code to apply the past, present, or future class to each time block
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

  // get and display tasks from storage with key value pairs
  //???Can use a each loop???
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

});
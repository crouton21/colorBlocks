console.log("JS");

$(document).ready(onReady);

var redCount = 0;
var yellowCount = 0;
var blueCount = 0;
var greenCount = 0;

function onReady(){
  $('.box').hide();
  $('.redCount').on('click', addRedBox);
  $('.yellowCount').on('click', addYellowBox);
  $('.blueCount').on('click', addBlueBox);
  $('.greenCount').on('click', addGreenBox);
  $('#allBoxes').on('click', '.box' ,clickBox);
  $('#redEnter').on('click', redInput);
  $('#blueEnter').on('click', blueInput);
  $('#yellowEnter').on('click', yellowInput);
  $('#greenEnter').on('click', greenInput);
}


function addRedBox (){
  console.log('in addRedBox');
  redCount += 1;
  $('.redNumber').empty();
  $('.redNumber').append('Red Count: '+redCount);
  $('#allBoxes').append('<div id="redBox" class="box"></div>');
}

function addYellowBox (){
  console.log('in addYellowBox');
  yellowCount += 1;
  $('.yellowNumber').empty();
  $('.yellowNumber').append('Yellow Count: '+yellowCount);
  $('#allBoxes').append('<div id="yellowBox" class="box"></div>');
}

function addBlueBox (){
  console.log('in addBlueBox');
  blueCount += 1;
  $('.blueNumber').empty();
  $('.blueNumber').append('Blue Count: '+blueCount);
  $('#allBoxes').append('<div id="blueBox" class="box"></div>');
}

function addGreenBox (){
  console.log('in addGreenBox');
  greenCount += 1;
  $('.greenNumber').empty();
  $('.greenNumber').append('Green Count: '+greenCount);
  $('#allBoxes').append('<div id="greenBox" class="box"></div>');
}

function clickBox (e) {
  $(this).hide();
  if (this.id == 'redBox'){
    redCount -= 1;
    $('.redNumber').empty();
    $('.redNumber').append('Red Count: '+redCount);
  }
  if (this.id == 'blueBox'){
    blueCount -= 1;
    $('.blueNumber').empty();
    $('.blueNumber').append('Blue Count: '+blueCount);
  }
  if (this.id == 'greenBox'){
    greenCount -= 1;
    $('.greenNumber').empty();
    $('.greenNumber').append('Green Count: '+greenCount);
  }
  if (this.id == 'yellowBox'){
    yellowCount -= 1;
    $('.yellowNumber').empty();
    $('.yellowNumber').append('Yellow Count: '+yellowCount);
  }
}

function redInput(){
  var redQuantity = $('#redInput').val();
  for (var i=0; i<redQuantity; i++){
    addRedBox();
  }
  $('#redInput').val('');
}

function yellowInput(){
  var yellowQuantity = $('#yellowInput').val();
  for (var i=0; i<yellowQuantity; i++){
    addYellowBox();
  }
  $('#yellowInput').val('');
}

function blueInput(){
  var blueQuantity = $('#blueInput').val();
  for (var i=0; i<blueQuantity; i++){
    addBlueBox();
  }
  $('#blueInput').val('');
}

function greenInput(){
  var greenQuantity = $('#greenInput').val();
  for (var i=0; i<greenQuantity; i++){
    addGreenBox();
  }
  $('#greenInput').val('');
}

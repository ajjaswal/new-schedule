window.onload = function(){
    colorCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
   }
   var currentDay = moment().format("dddd LL");
   $("#currentDay").append(currentDay);
   
   var currentTime = moment().format("LT");
   $("#currentTime").append(currentTime);
   
   
   
   var now = new Date().getHours();
   
   function colorCode() {
    if (now > 9) {
      $("#comment9am").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#comment9am").addClass("present");
    } else if (now < 9) {
      $("#comment9am").addClass("future");
    }
    if (now > 10) {
      $("#comment10am").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#comment10am").addClass("present");
    } else if (now < 10) {
      $("#comment10am").addClass("future");
    }
    if (now > 11) {
      $("#comment11am").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#comment11am").addClass("present");
    } else if (now < 11) {
      $("#comment11am").addClass("future");
    }
    if (now > 12) {
      $("#comment12pm").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#comment12pm").addClass("present");
    } else if (now < 12) {
      $("#comment12pm").addClass("future");
    }
    if (now > 13) {
      $("#comment1pm").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#comment1pm").addClass("present");
    } else if (now < 13) {
      $("#comment1pm").addClass("future");
    }
    if (now > 14) {
      $("#comment2pm").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#comment2pm").addClass("present");
    } else if (now < 14) {
      $("#comment2pm").addClass("future");
    }
    if (now > 15) {
      $("#comment3pm").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#comment3pm").addClass("present");
    } else if (now < 15) {
      $("#comment3pm").addClass("future");
    }
    if (now > 16) {
      $("#comment4pm").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#comment4pm").addClass("present");
    } else if (now < 16) {
      $("#comment4pm").addClass("future");
    }
    if (now > 17) {
      $("#comment5pm").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#comment5pm").addClass("present");
    } else if (now < 17) {
      $("#comment5pm").addClass("future");
    }
  }
  
  function nineAM() {
    var input_textarea = document.querySelector("#comment9am");
    var output_div = document.querySelector("#comment9am");
    var save_button = document.querySelector("#button9am");
  
    save_button.addEventListener("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
  }
  
  
  
  
 
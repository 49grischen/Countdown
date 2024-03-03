var targetDate = new Date("2024-12-31T23:59:59");

function updateTimer() {
  var currentDate = new Date();
  var timeDifference = targetDate.getTime() - currentDate.getTime();

  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  if (timeDifference < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerHTML = "Timer expired";
  }
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

var interval = setInterval(updateTimer, 1000);

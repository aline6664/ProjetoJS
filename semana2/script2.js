function startTime() {
    const date = new Date();
    document.getElementById("relogio").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {startTime()}, 1000);
  }
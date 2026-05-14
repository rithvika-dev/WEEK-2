let seconds = 10;

console.log("OTP Sent Successfully");

let timer = setInterval(() => {
  console.log("Resend available in: " + seconds + " seconds");
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("You can resend OTP now");
  }
}, 1000);

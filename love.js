const noBtn = document.getElementById("no");
const box = document.getElementById("box");
const message = document.getElementById("message");

let attempt = 0;  // count how many times she tries
let messageTimeout;

noBtn.addEventListener("mouseover", () => {

  attempt++;   // increase count

  const maxX = box.clientWidth - noBtn.offsetWidth;
  const maxY = box.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  clearTimeout(messageTimeout);

  // 🎭 Drama levels
  let text = "";

  if (attempt === 1) {
    text = "Oops... NO is a little shy 🙈";
  } 
  else if (attempt === 2) {
    text = "Are you still trying? 😂";
  } 
  else if (attempt === 3) {
    text = "But whyyyyy? 🥺";
  } 
  else if (attempt === 4) {
    text = "You can't escape 😌";
  } 
  else if (attempt === 5) {
    text = "Just press YES already 💕";
  } 
  else if (attempt === 6) {
    text = "Okay now you're testing my patience 😭";
  } 
  else if (attempt === 7) {
    text = "This is getting personal Drishti.";
  } 
  else if (attempt >= 8) {
    text = "Fine. I'm removing the NO option. 😈";
    
    // Optional evil mode 😏
    noBtn.style.display = "none";
  }

  message.innerText = text;
  message.style.opacity = 1;

  messageTimeout = setTimeout(() => {
    message.style.opacity = 0;
  }, 2500);
});

//===SUCCESSFULL-Scenarios
//012,345,678,036,147,258,048,246

let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector("#reset-btn");
let msgResponse = document.querySelector("#game_response_msg");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box is clicked");
    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }
    winValidation();
    box.disabled = true;
  });
});
const showWinner = (winner) => {
  msgResponse.style.display = 'block';
  msgResponse.innerText = `Winner is ${winner}.`;
  
};
const winValidation = () => {
  for (let pattern of winPatterns) {
    if (
      boxes[pattern[0]].innerText != "" &&
      boxes[pattern[1]].innerText != "" &&
      boxes[pattern[2]].innerText != "" &&
      boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
      boxes[pattern[0]].innerText === boxes[pattern[2]].innerText
    ) {
      showWinner(boxes[pattern[0]].innerText);
      alert(`Winner is ${boxes[pattern[0]].innerText}. Now, GAME OVER`);
    }
  }
};

const reset = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};

resetBtn.addEventListener("click", reset);

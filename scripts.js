function removeSpaces() {
  let input = document.getElementById("task1-input").value;
  let output = input.replace(/\s+/g, ' ').trim();
  document.getElementById("task1-output").innerHTML = output;
}

function countChars() {
  let input = document.getElementById("task2-input").value;
  let output = input.length;
  document.getElementById("task2-output").innerHTML = output;
}

function countWords() {
  let input = document.getElementById("task3-input")?.value;
  let output = input.split(/\s+/).length;
  document.getElementById("task3-output").innerHTML = output;
}

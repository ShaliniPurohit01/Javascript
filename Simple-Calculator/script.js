function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

// printHistory("9 * 9 + 8");

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}
// printOutput("66556");

function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

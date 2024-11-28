const val = Math.floor(Math.random() * 100 + 1);
let total = 0;
function datacheck() {
  let num = document.getElementById("digit").value;
  
  if (total < 10) {
    if (num == val) {
      total++;
      document.getElementById("display").innerHTML =
        "Congrats you guessed the right number";
        document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= " +
        total;
        
    } else if (num > val) {
      total++;
      document.getElementById("display").innerHTML =
        "The number entered is greater than the original number";
        document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= " +
        total;
        
    } else if (num < val) {
      total++;
      document.getElementById("display").innerHTML =
        "The number entered is smaller than the original number";
        document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= " +
        total
    }
  } 
  else
  {
    alert("Sorry you ran out of chances");
  }
}

function datareset() {
    num=null;
  document.getElementById("display").innerHTML = " ";
  document.getElementById("TotalAttempt").innerHTML=" TOTAL ATTEMPTS= 0";
  total=0;
}
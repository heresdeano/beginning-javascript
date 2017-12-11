/**
for (var i = 0; i <=12; i++){
  var sum = 12 * i;
  document.write("12 x " + i + " = " + sum + "<br />");
}
**/

function writeTimesTable(table, start, end){
  for (start; start <= end; start++){
    document.write(table + " x " + start + " = " + table * start + "<br />");
  }
}

var timesTable;

while ((timesTable = prompt("Enter the times Table", -1)) != -1){
  if (timesTable == -1){
    break;
  }
  document.write("<br />The " + timesTable + " times table<br />");
  writeTimesTable(timesTable, 1, 12);
}




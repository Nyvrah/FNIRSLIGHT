var ambient = document.getElementById("ambient");
var light1 = document.getElementById("730nm");
var light2 = document.getElementById("850nm");
var table = document.getElementById("table");

document.getElementById("button").addEventListener("click", ()=>{eel.start()})

eel.expose(update_values)
function update_values(values, change){
  ambient.value = values[1];
  light1.value = values[0];
  light2.value = values[2];
  new_row(values[1], values[0], values[2], change)
}

function new_row(a, b, c, change){
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = a;
  cell2.innerHTML = b;
  cell3.innerHTML = c;
  cell2.style.backgroundColor = change[0]
  cell1.style.backgroundColor = change[1]
  cell3.style.backgroundColor = change[2]
}
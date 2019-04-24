'use strict';

var content = document.getElementById("content");


var container = document.createElement("div");
container.className = "container-fluid";
content.appendChild(container);

var row = document.createElement("div");
row.className = "row";
container.appendChild(row);

var column = document.createElementById("div");
column.className = "offset-md-4 col-md-5";
row.appendChild(column);


var h2 = document.createElement("h2");
h1.innerText = "numbers and squares";
column.appendChild(h2);

var hr = document.createElement("hr");
column.appendChild(hr);

var table = document.createElement("table");
table.className = "table. table-striped";
column.append(table);

var thead = document.createElement("thead");

table.appendChild(thead);

var tr = document.createElement("tr");
thead.append(tr);

var th1 = document.createElement("th");
th1.innerText = "Number";
tr.appendChild(th1);

var th2 = document.createElement("th");
th2.innerText = "Square";
tr.appendChild(th2);
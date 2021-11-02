function createTable()
{
    var table =  document.getElementById("table");
    var line =  document.getElementById("line");
    var col = document.getElementById("col");
    var tr = new Array;
    var td = new Array;
    var input = new Array;
    for(var i = 0; i < col.value; i++)
    {
        tr[i] = document.createElement("tr");
        for(var j = 0; j < line.value; j++)
        {
            td[j] = document.createElement("td");
            input[j] = document.createElement("input");
            input[j].type = "text"; 
            td[j].appendChild(input[j]);
            tr[i].appendChild(td[j]);
            table.appendChild(tr[i]);
            td[j].style.border = "solid 2px black";
            td[j].style.width = 80 + "px";
            td[j].style.height = 25 + "px";
        }
    }
}
var table = document.getElementById('EmployeeTable');

var employeeArr=[];

document.getElementById("addRow").addEventListener("click", function(){  
  var obj = new Object;
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');


  var button = document.createElement('button');
  button.setAttribute('type', 'button');
	button.innerHTML = 'Remove';
  button.setAttribute('onclick', 'remRow(this)');

  var edit = document.createElement('button');
  edit.setAttribute('type', 'button');
	edit.innerHTML = 'Edit';
  edit.setAttribute('onclick', 'editRow(this)');


  obj["name"]=document.getElementById("name").value;
  obj["maxSalary"]=document.getElementById("maxSalary").value;
  obj["minSalary"]=document.getElementById("minSalary").value;
  obj["tax"]=document.getElementById("tax").value;
    

    let name = document.getElementById("name").value;
    let maxSalary = document.getElementById("maxSalary").value.toString();
    let minSalary = document.getElementById("minSalary").value.toString();
    minSalary = parseInt(minSalary);
    maxSalary = parseInt(maxSalary);
    
    if(minSalary > maxSalary)
    {
      alert("Minimum Salary cannot be greater then Max Salary!");
      document.getElementById("minSalary").value = '0';
    
    }
    else{
      
      let tax = document.getElementById("tax").value;

      let taxToPay = (tax/100)*maxSalary;
      
      td1.appendChild(document.createTextNode(name));
      td2.appendChild(document.createTextNode(minSalary));
      td3.appendChild(document.createTextNode(maxSalary));
      td4.appendChild(document.createTextNode(taxToPay));
      td5.appendChild(button);
      td6.appendChild(edit);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);

      table.appendChild(tr);
      
      
    //  row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    
    employeeArr.push(obj);
    }
    
});

function remRow(x) {
	employeeArr.splice((x.parentNode.parentNode.rowIndex-1),1);
  console.log(employeeArr);
  table.deleteRow(x.parentNode.parentNode.rowIndex); 

}

function editRow(x){
  console.log(x.parentNode.parentNode);

}
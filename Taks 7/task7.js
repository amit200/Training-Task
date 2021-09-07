
// function remove(){
//     if (a>1){
//     document.getElementById('table').deleteRow(a-1);
//     a-=1;
//     }
  function myFunction() {
    var person = prompt("Please enter your name", "xyz");
    if (person != null) {
      document.getElementById("name").value =person
       
    }
  }
  function myFunction1(){ 
    var email = prompt("Please enter your email",'abc@xyz.com');
    if (email != null) {
      document.getElementById("email").value =email
    }
  }
  function myFunction2(){
    var address = prompt("Please enter your address",'address');
    if (address != null) {
      document.getElementById("address").value =address
    }
  }
  function myFunction3(){
    var telephone = prompt("Please enter your telephone",'telephone');
    if (telephone!= null) {
      document.getElementById("telephone").value =telephone
    }
  }
  function myFunction4(){
    var zip= prompt("Please enter your ZIP",'zip');
    if (zip!= null) {
      document.getElementById("zip").value =zip
    }
  }
  // } function myFun() {
  // document.getElementById("myForm").submit();
  //   }
  function myFun(){
    var table=document.getElementById('table')
    var row=table.insertRow(-1)
    var cell0=row.insertCell(0)
    var cell1=row.insertCell(1)
    var cell2=row.insertCell(2)
    var cell3=row.insertCell(3)
    var cell4=row.insertCell(4)
    var cell5=row.insertCell(5)
    cell0.innerHTML=document.getElementById("name").value
    cell1.innerHTML=document.getElementById("email").value
    cell2.innerHTML=document.getElementById("address").value
    cell3.innerHTML=document.getElementById("telephone").value
    cell4.innerHTML=document.getElementById("zip").value
    cell5.innerHTML='<button id="btnEdit" style="color:red " onclick="deleteRow(this)"> Delete </button>'
    document.getElementById("name").value=null
    document.getElementById("email").value=null
    document.getElementById("address").value=null
    document.getElementById("telephone").value=null
    document.getElementById("zip").value=null

  }

  function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
  }
 

function hi(){
  var table = document.getElementById('table');
  for (var i=0;i < table.rows.length;i++){
   table.rows[i].onclick= function () {
    if(!this.hilite){
     this.origColor=this.style.backgroundColor;
     this.style.backgroundColor='#FFFF00';
     this.hilite = true;
    }
    else{
     this.style.backgroundColor=this.origColor;
     this.hilite = false;
    }
     }
  }

}
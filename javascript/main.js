
selectData() 
const isValid = st => {
      const re = /^[a-zA-Z-']*$/
      return re.test(String(st).toLowerCase());
  }
const setError = (element, message) => {
     
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success')

}
const setSuccess = element => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');
  
      errorDisplay.innerText = '';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
  };
const validataInputes=()=>{
     let arr=[];
     var fname=document.getElementById('name')
     var lname=document.getElementById('lastname')
     var address=document.getElementById('address')
     var date=document.getElementById('date')
     var male=document.getElementById('male');  
     var female=document.getElementById('female'); 
     //FierstName validata

     if(fname.value === '') {
      setError(fname, 'First Name is required');
      arr.push('1')
     
     }else if(!isValid(fname.value)){
       setError(fname,"Please enter a First Name");
       arr.push('1')
     }
     else {
      setSuccess(fname);
     }
     //FierstNamevalidata
     if(lname.value === '') {
      setError(lname, 'Last Name is required');
      arr.push('1')
     }else if(!isValid(lname.value)){
      setError(lname,"Please enter a Last Name");
      arr.push('1')
     }
     else {
      setSuccess(lname);
     }

   //addres validata

    if(address.value === '') {
         setError(address, 'Address is required');
         arr.push('1')
     }else if(address.value.length>'36'){
      setError(address,"Please enter a specific Address");
      arr.push('1')
     }
     else {
      setSuccess(address);
     }
    //date validata

    if(date.value === '') {
      setError(date, 'Date is required');
      arr.push('1')
     }
     else {
      setSuccess(date);
     }
    //gender validata
    
    if(male.checked==false && female.checked==false){
      setError(male, 'Gender is required');
      arr.push('1')
    } else {
      setSuccess(male);
     
     }
     return arr
}
   



const getdata=()=>{
      
      formdata=getArray()||[];
     if(validataInputes()==0){
      formdata.push({
       fname:document.getElementById('name').value,
       lname:document.getElementById('lastname').value,
       address:document.getElementById('address').value,
       date:document.getElementById('date').value,
       gender:gender(),
      })
      localStorage.setItem('formdata',JSON.stringify(formdata))
      selectData()
      location.reload()
}
}


 function selectData(){
      let arry=getArray()
      if(arry!==null){
            let html='';
            let N=1;
            for(let key in arry){
                  html=html+`
              
                  <tr>
                  <td scope="row" data-label="Id:" onclick="ViewData(${key})">${N}</td>
                  <td data-label="Name:" onclick="ViewData(${key})">${arry[key].fname}</td>
                  <td data-label="LastName:" onclick="ViewData(${key})">${arry[key].lname}</td>
                  <td data-label="Addres:" onclick="ViewData(${key})">${arry[key].address}</td>
                  <td data-label="Date:" onclick="ViewData(${key})">${arry[key].date}</td>
                  <td data-label="Gender:" onclick="ViewData(${key})">${arry[key].gender}</td>
                
                  <td> <div id="actbtn"><button class='btn' onclick="deleteData(${key})">Delete</button>
                  <button class='btnView'  onclick="ViewData(${key})">View</button></div></td>

                  </tr>`
                  N++;
                  document.getElementById('tbody').innerHTML=html;
                 
            }

      }
}

function ViewData(key){
      let html='';
      let arry=getArray()
     
     
      html=html+`
      <div>Name:${arry[key].fname}</div>
      <div>LastName:${arry[key].lname}</div>
      <div>Address: ${arry[key].address}</div>
      <div>Date: ${arry[key].date}</div>
      <div>Gender: ${arry[key].gender}</div>
      <div><button class='btn' id="Closebtn" onclick="Close(${key})">Close</button></div>
      `
      document.getElementById('view').innerHTML=html;
      
      let view=document.getElementById('view');
      view.classList.add('view')
      view.classList.remove('close')
}
function Close(){
let view=document.getElementById('view');
view.classList.add('close')
view.classList.remove('view')

}
 function deleteData(key){
       
      let arry=getArray()
  
      arry.splice(key,1);
      localStorage.setItem('formdata',JSON.stringify(arry))
      selectData()
      if(getArray()==0){
      location.reload()
      }
}

function getArray(){
      let arry=JSON.parse(localStorage.getItem('formdata'));
      return arry;
}
function gender(){

    var male=document.getElementById('male');  
    var female=document.getElementById('female'); 
    if(male.checked==true){
      return male.value;
    }else if(female.checked==true){
      return female.value;
    }

}














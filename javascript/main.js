
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
}
}


 function selectData(){
      let arry=getArray()
      if(arry!==null){
            let html='';
            let N=1;
            for(let key in arry){
                  html=html+`<tr>
                  <td>${N}</td>
                  <td>${arry[key].fname}</td>
                  <td>${arry[key].lname}</td>
                  <td>${arry[key].address}</td>
                  <td>${arry[key].date}</td>
                  <td>${arry[key].gender}</td>
                
                  <td> <button class='btn' onclick="deleteData(${key})">Delete</button></td>
                  </tr>`
                  N++;
                  document.getElementById('tbody').innerHTML=html;
                 
            }

      }
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














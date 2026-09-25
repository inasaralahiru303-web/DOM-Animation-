class customer{
    name;
    age;
    address;

constructor(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
    }
}
let customer01 = new customer("Lahiru",18,"Panadura");
console.log(customer01);

class order{
    item_name;
    price;
    count;

constructor(){
    this.item_name = item_name;
    this.price = price;
    this.count = count;
    }
}

let Student = [
    {
        name: "Maleesha",
        age: 90,
        address: "Panaura",
        marks: [
            {
                Subject : "Scince",
                score: 4
            },
            {
                Subject : "English",
                score: 10
            },
            {
                Subject : "Maths",
                score: 90
            }
        ],
        teacher:[
            {
            te_name: "Miss.Shamalee",
            age: 70,
            }
        ]
    },
     {
        name: "Maleesha",
        age: 90,
        address: "Panaura",
    },
     {
        name: "Maleesha",
        age: 90,
        address: "Panaura",
    },
     {
        name: "Maleesha",
        age: 90,
        address: "Panaura",
    }
]

console.log(Student);

console.log(document);
document.write("<p><b>Hii iCET...</p></b>");

let title = document.getElementById("title");
console.log(title);
title.innerText = "Lahiya..."

let number = 0;
function btnIncrementOnAction(){
    number++;
    counter.innerText="Click me ount - "+number;
}
//function btnDecrementOnAction(){
    number--;
    stop0(number);
    counter.innerText = "Click me Count - "+number;
    
    
//}  
stop0(number){
    if(number==0){
    counter.innerText = "Click me Count - 0"+number;
      }
} 
//function submitFormOnAction(){
  //  let txtName = document.getElementById("txtName").value;
    //console.log(txtName);
    //title.innerText ="My name is - " + txtName;
   
   

function addNumbers(){
    let txtNum01 = document.getElementById().value;
    let txtNum02 = document.getElementById().value;
    let total = number(txtNum01)+number(txtNum02); 

    let resultElement = document.getElementById("total").innerText="Result :";
    }

function subtractNumbers(){
    let txtNum01 = document.getElementById().value;
    let txtNum02 = document.getElementById().value;
    let value = number(txtNum01)-number(txtNum02);

    let resultElement = document.getElementById("value").innerText="Result :";
    }
let customerList = [];
function addCustomerOnAction(){
    let txtName = document.getgetElementById().value;
    let txtAddress = document.getgetElementById().value;
    let txtAge = document.getgetElementById().value;
    let txtEmail = document.getgetElementById().value;
    let txtSalary = document.getgetElementById().value;
}
let customer={
    name: txtName,
    address: txtAddress,
    age: txtAge,
    email:txtEmail,
    salary:txtSalary
}

customerList.push(customer);
console.push(customerList);

function lodeTableOnAction(){
    let tblCustomer = document.getgetElementById("tblCustomer");

    tblCustomer.innerHTML+=`<tr>
    <td>Lahiru</td>
    <td>Panadura</td>
    <td>18</td>
    <td>lahiru@.com</td>
    <td>1,000,000</td>
</tr>
    `

}


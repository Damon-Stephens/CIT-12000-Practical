var wrapper=document.body.querySelector(".wrapper");
var number=document.body.querySelector(".number");

var num=5

var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

for(var i=0; i<list.length; i++){
    var ele=document.createElement("div");
    var name_ele=document.createElement("h2");
    var age_ele=document.createElement("h4");
    name_ele.innerHTML=list[i].name;
    age_ele.innerHTML=list[i].age;
    if(list[i].age>25){
        name_ele.style.color= "green"
        age_ele.style.color= "green"
    }
    ele.appendChild(name_ele)
    ele.appendChild(age_ele)
    wrapper.appendChild(ele);
}
number.innerHTML=num;
document.body.querySelector(".launch").addEventListener("click",function(){
    number.innerHTML=""
    num=(num+1);
    number.innerHTML=num;
})
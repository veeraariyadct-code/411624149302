console.log("hi from test ")
const a =20;
const b =20;
console.log(a+b)
const st="veera"
console.log(st)

 
const arr=[1,2.3,'a,',"string",false]
console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("get hit ")
arr[1]=3.5
console.log(arr[1])
arr.push("veera")
console.log(arr)
arr.pop()
console.log(arr)
function writing(){
    console.log("i am writing")
}
const ptag= document.getElementById("pt")
ptag.innerHTML="PRINT"
writing()
const input=document.getElementById("it")
const output=document.getElementById("input")

input.addEventListener("input",()=>{
    output.textContent=input.value
})
const element=document.createElement("h1")
element.textContent="some text"
document.body.appendChild(element)
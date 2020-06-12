const timIT = ["Yusuf", "Maffed", "Yusron", "Nadya", "Jessica",
                "Adini", "Resha", "Petra", "David", "Nathanael"]

console.log(timIT.join());
                
const tim1 = timIT.splice(0,5)
const tim2 = timIT
// console.log(tim1);
// console.log(tim2);

// Tim 1
let tim1list = tim1.map((tim) => `<li>${tim}</li>`)

document.getElementById("ketua1").innerHTML = `Ketua Tim 1: ${tim1.shift()}`
document.getElementById("list-tim1").innerHTML = tim1list

// Tim 2
let tim2list = tim2.map((tim) => `<li>${tim}</li>`)

document.getElementById("ketua2").innerHTML = `Ketua Tim 2: ${tim1.shift()}`
document.getElementById("list-tim2").innerHTML = tim2list


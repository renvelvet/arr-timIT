const timIT = [
  "Yusuf",
  "Maffed",
  "Yusron",
  "Nadya",
  "Jessica",
  "Adini",
  "Resha",
  "Petra",
  "David",
  "Nathanael",
];

console.log(timIT.join());

const tim1 = timIT.splice(0, 5);
const tim2 = timIT;
// console.log(tim1);
// console.log(tim2);

addList = (noTim, idKetua, timName, idElement) => {
  document.getElementById(
    `${idKetua}`
  ).innerHTML = `Ketua Tim ${noTim}: ${timName.shift()}`;
  let timList = "";
  timName.forEach((arr) => {
    timList = timList.concat(`<li>${arr}</li>`);
  });
  document.getElementById(`${idElement}`).innerHTML = timList;
};

addList(1, "ketua1", tim1, "list-tim1");
addList(2, "ketua2", tim2, "list-tim2");

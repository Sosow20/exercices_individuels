
//& Etape 1

function isValidDate(dateStr) {

  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = dateStr.match(regex);
  if (!match) return false;


  const jour = parseInt(match[1], 10);
  const mois = parseInt(match[2], 10);
  const annee = parseInt(match[3], 10);

  const date = new Date(annee, mois - 1, jour);

  return (
    date.getFullYear() === annee &&
    date.getMonth() === mois - 1 &&
    date.getDate() === jour
  );
}

console.log(isValidDate("03/04/2001"))
console.log(isValidDate("03/14/2001"))

//~ MaxDaysInMonth

function maxDaysInMonth(jour, mois){
     if (mois < 1 || mois > 12) return false;
    const joursDansMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const nbJours = joursDansMois[mois - 1];
    return jour >= 1 && jour <= nbJours;
}

console.log(maxDaysInMonth(31, 11))

//&Etape 2

function isPalindrome(dateString) {
    let cleanDate = dateString.replaceAll("/", "")
    let reverseStr = cleanDate.split('/').reverse().join('')
    if (cleanDate === reverseStr) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isPalindrome("11/02/2011")
isPalindrome("03/04/2001")

//& Etape 3

let now = momment()

function getNextPalindromes(){
    

}




// function isValidDate(dateString){
//      const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-2])\/\d{4}$/;
//      return regex.test(stringDate);
// }

// console.log(isValidDate("03/04/2001"))
// console.log(isValidDate("03/14/2001"))

// console.log(isValidDate("03/04/2001"))
// console.log(isValidDate("03/14/2001"))

// let dateInput = "2019/05/15"; // YYYY/MM/DD format

// let dateObj = new Date(dateInput);

// if (!isNaN(dateObj)) {
//   let day = dateObj.getDate();
//   day = day < 10 ? "0" + day : day;
//   let month = dateObj.getMonth() + 1;
//   month = month < 10 ? "0" + month : month;
//   const year = dateObj.getFullYear();

//   const resultDate = `${day}/${month}/${year}`;
//   console.log(resultDate);  // 15/05/2019
// }




// function isValidDate(dateString) {

//     let dateParts = dateString.split("/");
//     let day = parseInt(dateParts[0]);
//     let month = parseInt(dateParts[1]);
//     let year = parseInt(dateParts[2]);

//     let date = new Date(year, month - 1, day);

//     return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
// }

// console.log(isValidDate("03/04/2001"))
// console.log(isValidDate("03/14/2001"))

// const now = new Date()
// console.log(now.toLocaleDateString('eng-GB'))
// console.log(now.toDateString())
// console.log(now.toString())
// console.log(now.toISOString())
// console.log(now.toLocaleString("ko-KR", { timeZone: "UTC" }))



//& Etape 3


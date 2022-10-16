
const $categorySection = $('#category-section');


const $activityRange = $('#effort-section .range')

const $submitBtn = $('#submit-btn');
const $outputArea = $('#outputArea')
const axios = require('axios').default;
// undef vars
var outPut;
// PARAMS
let type;
// range 0.0 - 1.0
let accessibility = $activityRange.val();
const categories = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]


categories.forEach(category => $categorySection.append(` <input id=" ${category}Btn" class="cap-btn" type="button" value="${category}">`))
const $categorySectionBtns = $('.cap-btn');
// handlers
$categorySectionBtns.on("click", (e) => {
  e.preventDefault();

  // switch for the category buttons
  //this will change the value on click

  switch (e.target.value) {
    case "education":
      // LOGIC HERE
      type = e.target.value;

      break;
    case "recreational":
      // LOGIC HERE
      type = e.target.value;
      break;
    case "cooking":
      // LOGIC HERE
      type = e.target.value;
      break;
    case "relaxation":
      // LOGIC HERE
      type = e.target.value;
      break;
    case "music":
      // LOGIC HERE
      type = e.target.value;
      break;
    case "busywork":
      // LOGIC HERE
      type = e.target.value;
      break;
    default:
      type = e.target.value;
      break;
  }
  console.log(type);


})
const setActivityRange = () => {
  accessibility = $activityRange.val()
  console.log($activityRange.val());
}


// submit button handles sending of request 
$submitBtn.on('click', (e) => {
  e.preventDefault();
  if (type === undefined) {
    console.log('EROROROROR')
  } else {
    setActivityRange();
    getData()
  }

})

const getData = async () => {

  clearOutputArea();

  const url = `https://www.boredapi.com/api/activity?type=${type}&accessibility=${accessibility}`;

  console.log(url);
  await axios.get(url)
    .then(res => {


      outPut = res.data;
      appendOutPut(outPut);
    })



}
const appendOutPut = (outPut) => {
  console.log(outPut);
  if (!outPut.error) {
    $outputArea.append(`<p>${outPut.activity}  "TYPE" ${outPut.type}</p>`)
  } else {
    $outputArea.append(`${outPut.error} `)
  }

}
const clearOutputArea = () => {
  $outputArea.children().remove()
}












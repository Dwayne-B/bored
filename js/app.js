

const $btns = $('#category-section input');
const $range = $('#activity-section .range')

const $submitBtn = $('#submit-btn');
const $outputArea = $('#outputArea')
const axios = require('axios').default;
// undef vars
var outPut;
// PARAMS
let type;
// range 0.0 - 1.0
let accessibility;
// .8 being most expensive
let minPrice;
let maxPrice;
// handlers
$btns.on("click", (e) => {
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
      break;
  }

})
const setRange = () => {
  console.log($range.val());
}


// submit button handles sending of request 
$submitBtn.on('click', (e) => {
  e.preventDefault();
  if (type === undefined) {
    console.log('EROROROROR')
  } else {
    getData()
    setRange()
  }

})


const getData = async () => {
  const url = `https://www.boredapi.com/api/activity?type=${type}&accessibility=${accessibility}&minprice=${minPrice}&maxprice=${maxPrice}`;
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
    $outputArea.append(`${outPut.activity}  ${outPut.type}`)
  } else {
    $outputArea.append(`${outPut.error} `)
  }



}












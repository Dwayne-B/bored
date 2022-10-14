const axios = require('axios').default;
const url = "https://www.boredapi.com/api/activity/";


const res = async () => await axios.get(url)
  .then(res => console.log(res.data))
res();
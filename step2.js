const fs = require('fs');
const process = require('process');
const axios = require('axios');

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}


async function webCat(url){
    try{
        let web = await axios.get(url)
        console.log(web.data)
    }
catch (err){
    console.log(`error in fetching ${url}:${err}`)
    process.exit(1)

}  

}

let path = process.argv[2];
if(path.slice(0,4)=== "http")
{
    webCat(path);
}
else{
    cat(path);
}
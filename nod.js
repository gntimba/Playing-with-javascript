var https = require('https');
function getCountries(s, p) {
https.get('https://jsonmock.hackerrank.com/api/countries/search?name='+s, function(res) {
//   console.log("statusCode: ", res.statusCode);
//   console.log("headers: ", res.headers);

  res.on('data', function(d) {
    let data =JSON.parse(d);
    let pop=0;
    data.data.forEach(element => {
       
       if(element.population>p)
       pop+=1
        
    });
    console.log(pop)
  });

}).on('error', function(e) {
  console.error(e);
});
}

getCountries('in',1000000)
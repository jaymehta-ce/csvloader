const csv = require('csv-parser');
const fs = require('fs');
const path = require('path')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

function generatecsv(filepath,number,filename, sizeText) {
var data = [];
var new_data = [];

return new Promise(function (resolve, reject) {
  fs.createReadStream(filepath)
  .pipe(csv())
  .on('data', (row) => {
    
      data.push({Text:row.Text, TextLength : row.Text.length});
    
  })
  .on('end', () => {
     // console.log(data);
      for(var i=0; i< data.length; i++)
      {
       for(var j = i+1; j<data.length; j++)
       {
       if((data[i].TextLength + data[j].TextLength) == number)
        {
          //console.log(data[i].Text + " ...... " + data[j].Text);
          //console.log(i + " ...... " + j);
          new_data.push(
          {
            A : data[i].Text,
            B : data[j].Text,
            AB : data[i].Text + data[j].Text
          });

                 data.splice(i, 1);
                 data.splice(j - 1, 1);                  
                //console.log(data);
              break;
        }
       } 
      }

      var new_filepath = "../newuploads/";
      const csvWriter = createCsvWriter({
        path: path.join(__dirname, new_filepath) + sizeText +filename,
        header: [
          {id: 'A', title: 'A'},
          {id: 'B', title: 'B'},
          {id: 'AB', title: 'AB'},
        ]
      });

      csvWriter
      .writeRecords(new_data)
      .then(()=> {
       console.log('The CSV file was written successfully');
       resolve("success");
     }).catch((err)=> {
       console.log(err);
       reject("fail");
     });
 
  });
})
    .then(function (data) {
      //reject("fail")
    });
}


module.exports.generatecsv  = generatecsv; 
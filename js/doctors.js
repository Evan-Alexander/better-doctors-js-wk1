var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.getDoctor = function(medicalIssue, searchedDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=36.1699%2C-115.1398%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     searchedDoctors(response);
      console.log(response);
    }).fail(function(error){
      alert("fail");
    });
};


exports.doctorModule = Doctor;

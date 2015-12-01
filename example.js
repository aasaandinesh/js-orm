/**
 * Created by dineshsingh on 02/12/15.
 */

/*
 Seeing its usage
 */

/*
 Define a POJO like object. Also mention URLs
 */
CandidateModel = function () {
    //Overriding the get url
    this.getUrl = "http://jsonplaceholder.typicode.com/posts";

    //Overriding the post url
    this.postUrl = "http://jsonplaceholder.typicode.com/posts";

    // Varioud fields of the model
    this.name = "";
    this.isVerified = "";
    this.anotherField = "";
};

//Inherit it from BaseModel
CandidateModel.inheritsFrom(BaseModel);


var candidate = new CandidateModel();

//If we need to get the candidates, it's as simple as that.
candidate.get(function (response) {
    console.log(response);
});

//If we need to create a new candidate.
candidate.name = "Dinesh Singh";
candidate.isVerified = true;
candidate.anotherField = "Another field";


//Just call the post method and request will be sent to the server.

candidate.post(function (response) {

});




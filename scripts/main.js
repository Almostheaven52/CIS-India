$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;



  //These 2 functions prevent spaces in the name box
  $("#fname").blur(function () {
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().next().text("no spaces allowed in First Name");
    }
  });

  $("#lname").blur(function () {
    let inputVal = $(this).val();
    //initialize an string variable that represents a space
    let strSpace = " ";
    let spaceCount = inputVal.split(" ").length - 1;

    console.log(spaceCount);
    if (spaceCount === 0) {
      $(this).next().next().text("all good");
    } else if (spaceCount > 0) {
      $(this).next().next().text("no spaces allowed in last Name");
    }
  });


  //prevents leters being typed into the credit card box
  $("#ccard").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().next().text("pls stop trying to use letters");
  });


  //provides a response based on whether or not the person has their own guitar
  $("#guitar").on("change", function (e) {
    $("#guitar").prop("disabled", false);

    let inputVal = this.value;

    console.log(inputVal);

    if (inputVal=== 'yes' ) {
      $(this).next().next().text("Thats awesome!");
    } else {
      $(this).next().next().text("I'll provide you with one!");
    }

  });


  //Creates submit button
    $( ":submit" ).css( "background", "yellow" );


 
// Function to submit form. Takes first and last name and says thank you

    $( ":submit" ).click( function(e) {

      e.preventDefualt; //double check syntax... overrides default html input submit. 
    
      console.log('did we click the bbutton? yes!') ; 

      let greetingOutput = 'Thank You ';
      greetingOutput += $("#fname").val();
      greetingOutput += $("#lname").val();
      $("#formOutput").text(greetingOutput); //I think .
    
    }); 



 

  console.log("user name: " + $("#noSpaces").val());

  // end of doc ready f/n
});

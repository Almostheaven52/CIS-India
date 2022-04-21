$(function () {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;


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

  $("#ccard").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().next().text("pls stop trying to use letters");
  });

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

  $(document).ready(function(){ 
    $( ":submit" ).css( "background", "yellow" );
  });

  $(document).ready(function(){
    $(":reset").css("background-color", "#F98700");
 });

 

  console.log("user name: " + $("#noSpaces").val());

  // end of doc ready f/n
});

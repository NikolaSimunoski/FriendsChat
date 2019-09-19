function BusinessLayer() {
  const clearSound = new Audio("sounds/Magic Wand Noise.mp3");
  this.dataObj = new DataLayer();

  this.resolveEmojiApiData = async () => {
    var data = await this.dataObj.persistanceData();

    return data;
  }



  this.passwordChangeTry = (neew, confirm, name) => {
    var newPass = neew;
    var confirmPass = confirm;
    var nameUserName = name;

    if (newPass == "" || confirmPass == "") {
      return ("Please fill all fields!!!")
    } if (confirmPass != newPass) {
      return ("new password not match confirm password")
    }
    else {
      var usersPass = JSON.parse(localStorage.getItem("allUsers"));
      for (let index = 0; index < usersPass.length; index++) {
        var userPom = usersPass[index].userName;
        if (nameUserName == userPom) {
          usersPass[index].userPassword = confirmPass;
        }
      }
      localStorage.setItem("allUsers", JSON.stringify(usersPass));
      return ("Password Changed!!!")
    }
  };



  this.checkCurentProfilePicture = (image, name) => {
    var newCheck = image;
    // console.log(newCheck);
    var cN = name;
    if (newCheck.length === 0) {
      return ("C:/Users/Kroki/Desktop/nov FriendsChat/images/31qWM5qyeDL._SX258_BO1,204,203,200_.jpg");
    } else {
      var userss = JSON.parse(localStorage.getItem("allUsers"));
      for (let index = 0; index < userss.length; index++) {
        var userPom = userss[index].userName;
        if (cN == userPom) {
          var picr = userss[index].userProfilePicture;
        }
      }
      localStorage.setItem("allUsers", JSON.stringify(userss));
      return (picr);
    }
  };



this.getImageForSend = () =>{
 
    $(".pictureForSend").click();

  var readURL = function (file) {
  var reader = new FileReader();

      
      reader.onload = function (e) {
        theUrl = e.target.result;
        $("<img>").addClass("picSend").attr("id", "myImgSend").attr("src", theUrl).appendTo(chatWindow);
        clearSound.currentTime=0;
        clearSound.play();
        $("#myImgSend").on("click", function (e) {
          var popUp = $("<div>").addClass("popUp").appendTo(".chatContaierC");
          $("<span>").text("X").addClass("span").appendTo(popUp);
          var pressedSrc = e.target.src;
         var popUPP = $("<img>").css("width", "100%").css("height", "100%").attr("src", pressedSrc ).appendTo(popUp);
          $("<span>").text("X").addClass("span").appendTo(popUPP);
          $("span").on("click", function(){
            popUp.remove();
            
          })
         })
       
      }

       reader.readAsDataURL(file);

    
  }
  $(".pictureForSend").on('change', function () {
    // console.log(this.files);
    readURL(this.files[0]);
  });
 
};

}
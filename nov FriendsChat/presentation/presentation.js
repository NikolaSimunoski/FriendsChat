function PresentationLayer() {
  this.business = new BusinessLayer();
  var curentUser = [];
  var curentUserFriends = [];



const rollSound = new Audio("sounds/Tiny Button Push.mp3");
 const clearSound = new Audio("sounds/Magic Wand Noise.mp3");
  function chatPageRenderer() {
    
   

    $("body").css("backgroundImage", "none");
    ($(".root")).empty();
    console.log(curentUser);
    console.log(curentUserFriends);


    var mainContainer = $("<div>").addClass("chatRoot").appendTo("body");
    var mainFooter = $("<div>").attr("id", "footer").appendTo(mainContainer);
    var footerlef = $("<div>").attr("id", "footerLeft").addClass("footerElements").appendTo(mainFooter);
    var footerCenter = $("<div>").attr("id", "footerCenter").addClass("footerElements").appendTo(mainFooter);
    footerlef.append("<audio id = 'mus' controls='controls' src='http://oggvorbis.tb-stream.net:80/technobase.ogg'>");
    $("<div>").attr("id", "footerRight").addClass("footerElements").appendTo(mainFooter);
    $("<div>").attr("id", "LogoFooterDiv").appendTo($("#footerCenter"));
    $("<img>").attr("id", "logoImageFooter").attr("src", "C:/Users/Kroki/Desktop/nov FriendsChat/images/69945105_875030656201296_1987395678413783040_n.png").appendTo($("#LogoFooterDiv"));
    var searchFriends = $("<input>").addClass("searchFriends").appendTo("#footerRight").attr("placeholder", "Search Friends");
    var friendsList = $("<div>").attr("id", "friendsList").addClass("card-carousel").appendTo(mainContainer);
    $("body").css("background", "linear-gradient(to right, #348AC7, #7474BF)");
    var chatContainer = $("<div>").attr("id", "chatWindowContainer").addClass("chatContaier").appendTo(mainContainer);
    var chatContainerLeft = $("<div>").attr("id", "chatWindowContainer").addClass("chatContaierL").appendTo(chatContainer);
    var chatContainerCenter = $("<div>").attr("id", "chatContainerCenter").addClass("chatContaierC").appendTo(chatContainer);
    var chatContainerRight = $("<div>").attr("id", "chatContainerRight ").addClass("chatContaierR").appendTo(chatContainer);
    var videoImageDiv = $("<div>").addClass("videoImageDiv").appendTo(chatContainerRight);
    var videoImage = $("<div>").addClass("videoImage").appendTo(videoImageDiv);
    var clock = $("<div>").addClass("clock").appendTo(chatContainerRight);
    showTime();



    var chatContLeft = $("<div>").attr("id", "chatContLeft").addClass("chatCont").appendTo(chatContainerCenter);
    var friendDivImgConversation = $("<div>").addClass("friendDivImgConversation").appendTo(chatContLeft);
    var friendImgConversation = $("<img>").attr("id", "friendsImgConver").addClass("friendImgConversation").attr("src", "C:/Users/Kroki/Desktop/nov FriendsChat/images/31qWM5qyeDL._SX258_BO1,204,203,200_.jpg").appendTo(friendDivImgConversation);
    var friendNameConversation = $("<p>").addClass("sliderFriendsNamee").text("User").appendTo(friendDivImgConversation);

    var curentPicture = new BusinessLayer();
    var sendImgValForCheck = curentUser[0].userProfilePicture;
    var sendImgName = curentUser[0].userName;
    var checkPicture = curentPicture.checkCurentProfilePicture(sendImgValForCheck, sendImgName);





    var chatContCenter = $("<div>").attr("id", "chatContCenter").addClass("chatCont").appendTo(chatContainerCenter);
    var chatContRight = $("<div>").attr("id", "chatContRight").addClass("chatCont").appendTo(chatContainerCenter);
    var myDivImgConversation = $("<div>").addClass("myDivImgConversation").appendTo(chatContRight);
    var myNameConversation = $("<p>").addClass("sliderFriendsNameee").attr("id", "myTextName").text(curentUser[0].userName).appendTo(chatContRight);
    var myImgConversation = $("<img>").addClass("friendImgConversation").attr("id", "myImgProf").attr("src", checkPicture).appendTo(myDivImgConversation);






    var menuContainer = $("<div>").attr("id", "menuContainer").addClass("menuContainer").appendTo(chatContainerLeft);
    var changePassword = $("<div>").attr("id", "changePassword").addClass("menuItems").appendTo(menuContainer);
    var changeProfilePic = $("<div>").attr("id", "changeProfilePic").addClass("menuItems").appendTo(menuContainer);
    var history = $("<div>").attr("id", "history").addClass("menuItems").appendTo(menuContainer);
    $("<i>").addClass("far fa-smile").appendTo(changeProfilePic);
    var ChangePicDiv = $("<p>").addClass("leftMenuP").attr("id", "changeProfile").text("ADD/CHANGE CHAT PICTURE").appendTo(changeProfilePic);

    $("<p>").addClass("leftMenuP").attr("id", "changePass").text("CHANGE PASSWORD").appendTo(changePassword);
    $("<p>").addClass("leftMenuP").attr("id", "history").text("HISTORY").appendTo(history);

    $("<div>").addClass("changePassW").appendTo(menuContainer);
    var closeChangePass = $("<P>").addClass("closeChangePass").text("CLOSE").appendTo(".changePassW");
    var newPass = $("<input>").addClass("inputChangePass").appendTo(".changePassW").attr("placeholder", "NEW PASSWORD").attr("type", "password");
    var confirmNewPass = $("<input>").addClass("inputChangePass").appendTo(".changePassW").attr("placeholder", "CONFIRM NEW PASSWORD").attr("type", "password");
    let passConfirmButton = $("<button>").addClass("passConf").appendTo(".changePassW").text("CONFIRM");



    for (let index = 0; index < curentUserFriends.length; index++) {
      var albumDiv = $("<div>").addClass("my-card");
      friendsList.append(albumDiv);
      var albumImage = $("<img>").addClass("imagesSlider").attr("src", curentUserFriends[index].myFriendImg).attr("Id", [index]);
      var sliderFriendName = $("<p>").addClass("sliderFriendsName").text(curentUserFriends[index].myFriendName);
      albumDiv.append(sliderFriendName);
      albumDiv.append(albumImage);
    }

    $(".my-card").on("dblclick", function (e) {
      var slikaClick = e.target.id;
      var picToShow = curentUserFriends[slikaClick];
      var fffffffff = picToShow.myFriendName;
      var picChange = picToShow.myFriendImg
      $(".sliderFriendsNamee").text(fffffffff);
      $("#friendsImgConver").attr("src", picChange);
    });



    passConfirmButton.on("click", function (e) {
      var newpass = newPass.val();
      var confirmNew = confirmNewPass.val();
      var nameUserPasswordChange = curentUser[0].userName;
      var newBusinessLayer = new BusinessLayer();
      var passwordMessage = newBusinessLayer.passwordChangeTry(newpass, confirmNew, nameUserPasswordChange);
      $("<P>").addClass("changePassMessage").text(passwordMessage).appendTo(".changePassW");
      console.log(passwordMessage);
    })

    $("<input>").addClass("file-upload").attr("name", "myFile").attr("type", "file").appendTo("body");
    var picSent = $("<input>").addClass("pictureForSend").attr("name", "mySendImage").attr("type", "file").appendTo("body");

    changeProfilePic.on('click', function () {
      $(".file-upload").click();
    });

    var readURL = function (input) {

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(input.files[0]);


        reader.onload = function (e) {

          var imgTitle = $('#myImgProf').attr('src', e.target.result);
          var picForStorage = input.files[0].name;
          var userOnLine = curentUser[0].userName;
          var usersPas = JSON.parse(localStorage.getItem("allUsers"));
          for (let index = 0; index < usersPas.length; index++) {
            var userPom = usersPas[index].userName;
            if (userOnLine == userPom) {
              const tempUser = {
                ...usersPas[index],
                userProfilePicture: e.target.result
              }
              usersPas[index] = tempUser;
              console.log(tempUser)
            }
          }
          localStorage.setItem("allUsers", JSON.stringify(usersPas));
        }


      }
    }
    $(".file-upload").on('change', function (e) {

      readURL(this);
    });


    changePassword.on("click", function (e) {
      $(".menuItems").fadeOut(300);
      $(".changePassW").css("display", "flex");

    })


    closeChangePass.on("click", function (e) {
      $(".changePassW").fadeOut(300);
      $(".menuItems").show(300);
    })
    var chatContainerWindow = $("<div>").attr("id", "chatContainerWindow").addClass("chatContainerWindow").appendTo(chatContCenter);
    var chatWindow = $("<div>").attr("id", "chatWindow").addClass("chatWindow").appendTo(chatContainerWindow);
    var chatFooter = $("<div>").attr("id", "chatFooter").addClass("chatFooter").appendTo(chatContainerWindow);
    var chatFooterTop = $("<div>").attr("id", "chatFooterTop").addClass("chatFooterTop").appendTo(chatFooter);
    var inputMSGsend = $("<input>").addClass("inputMSGsend").attr("placeholder", "Massage to send...").val("").attr("type", "text").appendTo(chatFooterTop);
    var chatSendDivFooter = $("<div>").attr("id", "chatSendDivFooter").addClass("chatSendDivFooter").appendTo(chatFooterTop);
    $("<span>").addClass("fa-paper-plane-o").appendTo(chatSendDivFooter);

    var chatFooterBottom = $("<div>").attr("id", "chatFooterBottom").addClass("chatFooterBottom").appendTo(chatFooter);
    var sendVideo = $("<div>").addClass("sendVideo sendVIE").appendTo(chatFooterBottom);
    $("<span>").addClass("fa-file-video-o").appendTo(sendVideo);
    $("<input>").addClass("upload-video-file sendVIE").attr("name", "file").attr("type", "file").appendTo("body");




    sendVideo.on('click', function () {
      $(".upload-video-file").click();
    });


    $('.upload-video-file').on('change', function () {
      var videoScreen = $("<div>").addClass("video-prev pull-right").appendTo(chatWindow);
      $("<video>").addClass("video-preview").attr("controls", true).appendTo(videoScreen);
      $('.video-prev').show();
      if (isVideo($(this).val())) {
        $('.video-preview').attr('src', URL.createObjectURL(this.files[0]));
        clearSound.currentTime=0;
        clearSound.play(); 
      }
      else {
        $('.upload-video-file').val('');
        $('.video-prev').hide();
        alert("Only video files are allowed to upload.")
      }
    });


    function isVideo(filename) {
      var ext = getExtension(filename);
      switch (ext.toLowerCase()) {
        case 'm4v':
        case 'avi':
        case 'mp4':
        case 'mov':
        case 'mpg':
        case 'mpeg':

          return true;
      }
      return false;
    }

    function getExtension(filename) {
      var parts = filename.split('.');
      return parts[parts.length - 1];
    }



    var sendEmoji = $("<div>").addClass("sendEmoji sendVIE").appendTo(chatFooterBottom);
    $("<span>").addClass("fa-smile-o").appendTo(sendEmoji);

    var sendImg = $("<div>").addClass("sendImg sendVIE").appendTo(chatFooterBottom);
    $("<span>").addClass("fa-image").appendTo(sendImg);

    sendImg.on("click", function (e) {
      var busin = new BusinessLayer();
      var imageForSend = busin.getImageForSend();
      
     
    })

   
        
    chatSendDivFooter.on("click", function (e) {
      
      if (inputMSGsend.val() == "") {
        console.log("prazno")
      } else {
        var con = $("<div>").addClass("MSGcontainer").appendTo(chatWindow);
        var mesTex = $("<div>").addClass("MSGtext").appendTo(con);
        $(mesTex).append(inputMSGsend.val());
        rollSound.currentTime=0;
        rollSound.play();
        inputMSGsend.val("");
      }
        
    })

    inputMSGsend.on("keyup", function (e) {
      if (e.which === 13) {
        if (inputMSGsend.val() == "") {
          console.log("prazno")
        } else {
          var con = $("<div>").addClass("MSGcontainer").appendTo(chatWindow);
          var mesTex = $("<div>").addClass("MSGtext").appendTo(con);
          $(mesTex).append(inputMSGsend.val());
          inputMSGsend.val("");
        }
      }
    })
    sendEmoji.on("click", async function () {
      var apiData = new BusinessLayer();
      var emojiData = await apiData.resolveEmojiApiData();
      console.log(emojiData);
      $(".videoImage").css("visibility", "visible");
      var dataEmojiContainer = $("<div>").addClass("dataEmoji").appendTo($(".videoImage"));
      for (let index = 0; index < emojiData.length; index++) {
        var divData = $('<span>').html(emojiData[index]).attr("id", index).appendTo(dataEmojiContainer);
        divData.on("click", function (event) {
          var zemena = divData;
          var zemena = event.target.innerText;
          console.log(zemena);
          var usemessa = inputMSGsend.val();
          inputMSGsend.val(usemessa + zemena);
          dataEmojiContainer.remove();
          $(".videoImage").css("visibility", "hidden");
        })
      }
    });

  };


  $("body").css("backgroundImage", "url('C:/Users/Kroki/Desktop/nov FriendsChat/images/mano-hombre-negocios-holograma-red-globo-mapa-estados-unidos-america_117023-931.jpg')");
  $("<div>").attr("id", "logoDiv").appendTo($(".root"));
  $("<img>").attr("id", "logoImage").attr("src", "C:/Users/Kroki/Desktop/nov FriendsChat/images/69945105_875030656201296_1987395678413783040_n.png").appendTo($("#logoDiv"));
  $("<div>").attr("id", "logContainer").appendTo($(".root"));
  $("<div>").attr("id", "logLeft").addClass("logReg").appendTo($("#logContainer"));
  $("<div>").attr("id", "logRight").addClass("logReg").appendTo($("#logContainer"));

  $("<div>").addClass("topLogDiv").attr("id", "leftTop").appendTo($("#logLeft"));
  $("<div>").addClass("logDiv").attr("id", "leftLogoDiv").appendTo($("#logLeft"));
  $("<div>").addClass("bottomLogDiv").attr("id", "leftBottom").appendTo($("#logLeft"));

  $("<div>").addClass("topLogDiv").attr("id", "rightTop").appendTo($("#logRight"));
  $("<div>").addClass("logDiv").attr("id", "rightLogoDiv").appendTo($("#logRight"));
  $("<div>").addClass("bottomLogDiv").attr("id", "rightBottom").appendTo($("#logRight"));


  $("<div>").attr("id", "topFirstL").addClass("topF").appendTo($("#leftTop"));
  $("<div>").attr("id", "topSecondL").addClass("topS").appendTo($("#leftTop"));

  $("<div>").attr("id", "topFirst").addClass("topF").appendTo($("#rightTop"));
  $("<div>").attr("id", "topSecond").addClass("topS").appendTo($("#rightTop"));

  $("<img>").attr("id", "logInImage").addClass("logoLogReg").attr("src", "C:/Users/Kroki/Desktop/nov FriendsChat/images/keyhole.png").appendTo("#topFirstL");
  $("<img>").attr("id", "logInImageR").addClass("logoLogReg").attr("src", "C:/Users/Kroki/Desktop/nov FriendsChat/images/logoSignUp.png").appendTo("#topFirst");

  $("<div>").addClass("krug").appendTo($("#logContainer"));
  $("<p>").attr("id", "krugText").text("or").appendTo($(".krug"));

  $("<p>").addClass("topTex").text("Already have an account?").appendTo($("#topSecondL"));
  $("<h1>").addClass("botTex").text("Log In Here").appendTo($("#topSecondL"));
  $("<p>").addClass("topTex").text("Don't have an account?").appendTo($("#topSecond"));
  $("<h1>").addClass("botTex").text("Register Now").appendTo($("#topSecond"));

  $("<div>").addClass("input-container one").appendTo("#leftLogoDiv");
  $("<i>").addClass("fa fa-user icon").appendTo(".input-container");
  var signInUserName = $("<input>").addClass("input-field").appendTo(".input-container").attr("placeholder", "Username");


  $("<div>").addClass("input-container two").appendTo("#leftLogoDiv");
  $("<i>").addClass("fa fa-key icon").appendTo(".two");
  var signInPassword = $("<input>").addClass("input-field").appendTo(".two").attr("placeholder", "Password").attr("type", "password");


  $("<div>").addClass("input-container three").appendTo("#rightLogoDiv");
  $("<i>").addClass("fa fa-envelope icon").appendTo(".three");
  var signUpEmail = $("<input>").addClass("input-field").appendTo(".three").attr("placeholder", "Email");


  $("<div>").addClass("input-container four").appendTo("#rightLogoDiv");
  $("<i>").addClass("fa fa-user icon").appendTo(".four");
  var signUpUserName = $("<input>").addClass("input-field").appendTo(".four").attr("placeholder", "Username");


  $("<div>").addClass("input-container five").appendTo("#rightLogoDiv");
  $("<i>").addClass("fa fa-key icon").appendTo(".five");
  var signUpPassword = $("<input>").addClass("input-field").appendTo(".five").attr("placeholder", "Password").attr("type", "password");


  $("<div>").addClass("input-container six").appendTo("#rightLogoDiv");
  $("<i>").addClass("fa fa-key icon").appendTo(".six");
  var signUpPasswordConfirm = $("<input>").addClass("input-field").appendTo(".six").attr("placeholder", "Password").attr("type", "password");

  let logInButton = $("<button>").addClass("regButton").attr("id", "logInBTN").appendTo("#leftBottom").text("Log In");
  let registerButton = $("<button>").addClass("regButton").attr("id", "regBTN").appendTo("#rightBottom").text("Register");

  var footer = $("<div>").addClass("footer").appendTo(".root");

  $("<p>").attr("id", "textFooter").text("Wellcome to " + "FRIENDSCHAT" + ", project that I'd made during my studies at CODEACADEMY!!!").appendTo(".footer");
  var codeacademy = $("<img>").attr("id", "codeacademyLogo").addClass("enter").attr("src", "C:/Users/Kroki/Desktop/nov FriendsChat/images/logo.png").appendTo(".footer");

  $(codeacademy).on("click", function (e) {
    e.preventDefault();
    window.open("https://codeacademy.mk/home/", '_blank');
  });

  var usersStorage = JSON.parse(localStorage.getItem("allUsers"));
  console.log(usersStorage);
  registerButton.on("click", function (e) {

    var checkEmail = signUpEmail.val();
    var checkName = signUpUserName.val();
    var checkPassword = signUpPassword.val();
    var checkMatchPasword = signUpPasswordConfirm.val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    $(".error").hide();
    $(".three").css("margin-bottom", "15px");
    if (checkEmail == "" || checkName == "" || checkPassword == "" || checkMatchPasword == "") {
      $('.three').before('<span class="error"> Please fill all fields!!!</span>');
    }
    else if (!emailReg.test(checkEmail)) {
      $('.three').after('<span class="error"> Please enter a valid email address</span>');
      $(".three").css("margin-bottom", "0");
    }
    else if ((checkPassword.length) < 6) {
      $('.five').after('<span class="error"> Password should atleast 6 character in length!!!</span>');
      $(".five").css("margin-bottom", "0");
    }
    else if (!(checkPassword).match(checkMatchPasword)) {
      $('.six').after('<span class="error"> Your passwords do not match. Try again!!!</span>');
      $(".six").css("margin-bottom", "0");
    } else {




      var usersStorage = JSON.parse(localStorage.getItem("allUsers"));
      console.log(usersStorage);


      if (usersStorage === null) {
        var niza = [];
        var povik = new UserRegister(checkEmail, checkName, checkMatchPasword);
        niza.push(povik);
        localStorage.setItem("allUsers", JSON.stringify(niza));

      }
      else {
        for (let index = 0; index < usersStorage.length; index++) {

          if (usersStorage[index].userMail === checkEmail) {
            alert("email already exist!!!")
            $(".input-field").val("");
            return;
          }
          else if (usersStorage[index].userName === checkName) {
            alert("this USER NAME is reserved!!!");
            $(".input-field").val("");
            return;
          }
        }
        var povikSec = new UserRegister(checkEmail, checkName, checkMatchPasword);
        usersStorage.push(povikSec);
        localStorage.setItem("allUsers", JSON.stringify(usersStorage));

      }

      $(".input-field").val("");
    };
  });


  logInButton.on("click", function (e) {

    var logInUserName = signInUserName.val();
    var logInPassword = signInPassword.val();
    $(".three").css("margin-bottom", "15px");
    $(".five").css("margin-bottom", "15px");
    $(".six").css("margin-bottom", "15px");


    var usersForLogIn = JSON.parse(localStorage.getItem("allUsers"));


    for (let index = 0; index < usersForLogIn.length; index++) {
      var userForPush = usersForLogIn[index];
      $(".error").hide();
      if (logInUserName == "" || logInPassword == "") {
        $('.one').before('<span class="error">Please fill all fields!!!</span>');
        $(".one").css("margin-bottom", "0");
      }

      else if (!(usersForLogIn[index].userName == logInUserName) && !(usersForLogIn[index].userPassword == logInPassword)) {
        $('.one').after('<span class="error">Wrong User Name or Password!!!</span>');
        $(".one").css("margin-bottom", "0");
      }
      else if (usersForLogIn[index].userName == logInUserName
        && usersForLogIn[index].userPassword == logInPassword) {
        // var logedUser = usersForLogIn[index];
        console.log(userForPush.userFriends.length);
        for (let index = 0; index < userForPush.userFriends.length; index++) {
          var myDataFrendsObj = {
            myFriendName: userForPush.userFriends[index].friendUsername,
            myFriendImg: userForPush.userFriends[index].friendPicture,
          }
          curentUserFriends.push(myDataFrendsObj);
        }
        curentUser.push(userForPush);
        $(".input-field").val("");
        $(".error").hide();
        chatPageRenderer()


      }
    }
  })

  //  chatPageRenderer(); 
}
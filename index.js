document.getElementById("button-addon").addEventListener("click", clickValidation);


function clickValidation()
    {
      var form = document.querySelector("form");
      var email = document.querySelector("input").value;

      var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if (email.match(pattern))
      {
        // alert("match")
        document.getElementById("successIcon").src = "images/icon-success.png";
                document.querySelector("#form > small:nth-child(4)").style.visibility = "hidden";
      } else {

        // alert("not match")
        document.getElementById("errorIcon").src = "images/icon-error.svg";
        document.getElementById("successIcon").src = "";
        document.querySelector("#form > small:nth-child(4)").style.visibility = "visible";


      }


    };



  

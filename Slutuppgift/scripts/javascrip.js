function sendMessage(event) {
  event.preventDefault();

  // console.log(event.srcElement.name.value);
  // console.log(event.srcElement.email.value);

  var data = event.srcElement;

  var name = data.name.value;
  var email = data.email.value;

  var thankyouheader = document.getElementById("thankyouMessage");

  thankyouheader.innerText =
    "Thanks " + name + " for joining the mailing list!";
}

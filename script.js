let incomingName = window.prompt("Lütfen adınızı giriniz.");
const myName = document.querySelector("#myName");

myName.innerHTML = `${myName.innerHTML, incomingName}`;

function showTime() {
  const myClock = document.querySelector("#myClock");
  const date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hour = date.getHours();
  let day = date.getDay();

  switch (day) {
    case 0:
      day = "Pazartesi";
      break;
    case 1:
      day = "Salı";
      break;
    case 2:
      day = "Çarşamba";
      break;
    case 3:
      day = "Perşembe";
      break;
    case 4:
      day = "Cuma";
      break;
    case 5:
      day = "Cumartesi";
      break;
    case 6:
      day = "Pazar";
      break;
  }

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;

  myClock.innerHTML = hour + ":" + min + ":" + sec +  " " + day;

  setTimeout(showTime, 1000);
}

showTime();

/*
// get the current houre or munite 
function updateTime() {
  let now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let period = hours >= 12 ? 'pm' : 'am';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12' in 12-hour format

  // Format the time as HH:mm:ss AM/PM
  let timeString = `${hours}:${minutes}${period}`;

  // Display the time in the specified div
  document.getElementById('current-time').textContent = timeString;
}
updateTime();
// Update time every second (1000 milliseconds)
setInterval(updateTime, 1000);


// get bettary  charge level ========== 
if ('getBattery' in navigator) {
  navigator.getBattery().then(function(battery) {
      updateBatteryLevel(battery);

      // Update battery level when it changes
      battery.addEventListener('levelchange', function() {
          updateBatteryLevel(battery);
      });
  });

  function updateBatteryLevel(battery) {
      let p = document.getElementById('battery-level');
      p.textContent = Math.round(battery.level * 100);
  }
  } else {
    let p = document.getElementById('battery-level');
    p.textContent = 'Battery status not available';
  }
*/

var accontFooter = document.querySelector(".nfc-account-footer");
var accountFooterItem = accontFooter.querySelectorAll("a p");
var largeShortBtn = document.querySelector(".large_short");
var largeShortBtnIcon = document.querySelector(".large_short i");
accountFooterItem.forEach(item => {
  item.style.height ="0px"
  item.style.overflow ="hidden"
})
function largeShort() {
  accountFooterItem.forEach(item => {
    if(  item.style.height ==="0px") {
       item.style.height ="20px"
       largeShortBtn.style.bottom ="77px";
       largeShortBtnIcon.style.transform ="rotate(180deg)";
    } else{
       item.style.height ="0px"
       largeShortBtn.style.bottom ="57px";
       largeShortBtnIcon.style.transform ="rotate(0deg)";
    }

  })
}
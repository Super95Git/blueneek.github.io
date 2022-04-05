function initFreshChat() {
    window.fcWidget.init({
        // Copy the below lines under window.fcWidget.init inside initFreshChat function in the above snippet

// To set unique user id in your system when it is available
window.fcWidget.setExternalId("john.doe1987");

// To set user name
window.fcWidget.user.setFirstName("John");

// To set user email
window.fcWidget.user.setEmail("john.doe@gmail.com");

// To set user properties
window.fcWidget.user.setProperties({
  plan: "Pro",                 // meta property 1
  status: "Active"                // meta property 2
});
      token: "34295310-8e5d-42c9-8eaf-fdab3d2c6f3f",
      host: "https://wchat.in.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.in.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);

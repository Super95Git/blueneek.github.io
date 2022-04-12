//   function initFreshChat() {
//     window.fcWidget.init({
//       token: "34295310-8e5d-42c9-8eaf-fdab3d2c6f3f",
//       host: "https://wchat.in.freshchat.com"
//     });
//   }
//   function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.in.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"Freshdesk Messaging-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);

(function(d, w, c) {
    if (!d.getElementById("spd-busns-spt")) {
        var n = d.getElementsByTagName('script')[0],
            s = d.createElement('script');
        var loaded = false;
        s.id = "spd-busns-spt";
        s.async = "async";
        s.setAttribute("data-self-init", "false");
        s.setAttribute("data-init-type", "opt");
        s.src = 'https://cdn.in-freshbots.ai/assets/share/js/freshbots.min.js';
        s.setAttribute("data-client", "ec234ada03f442b0baaa6ef69d4c14a6a92609f8");
        s.setAttribute("data-bot-hash", "f8f6201211aa0f3d32149e8937ce7f9b61f43188");
        s.setAttribute("data-env", "prod");
        s.setAttribute("data-region", "in");
        if (c) {
            s.onreadystatechange = s.onload = function() {
                if (!loaded) {
                    c();
                }
                loaded = true;
            };
        }
        n.parentNode.insertBefore(s, n);
    }
})(document, window, function() {
    Freshbots.initiateWidget({
        autoInitChat: false,
        getClientParams: function() {
            return;
        }
    }, function(successResponse) {}, function(errorResponse) {});
});

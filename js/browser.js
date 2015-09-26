<!--
// Browser detection scripts by Ola M. Embretsen - browser.js
userAgent = navigator.userAgent;
appName = navigator.appName;
appVersion = navigator.appVersion;
intVersion = parseInt(navigator.appVersion);
floatVersion = parseFloat(navigator.appVersion);
appCodeName = navigator.appCodeName;
platform = navigator.platform;
if (navigator.userAgent.indexOf("Opera") != -1) 
{
   buildNumber = opera.buildNumber('inconspicuous');
   buildEgg = opera.buildNumber('arrogant');
   if(buildEgg == buildNumber) // Easter egg no longer present in Opera 7+
      buildEgg = "";
} 
resolution = screen.width + "x" + screen.height + "x" + screen.colorDepth
// -->

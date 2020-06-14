const Greeter = require('./greeter.js')
const callback = function(){
	(new Greeter('Hello World!')).inConsole().inDOM()
}

if ( document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
	callback()
} else {
	document.addEventListener("DOMContentLoaded", callback)
}

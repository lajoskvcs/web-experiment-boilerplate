function Greeter (text) {
	this.text = text
}

Greeter.prototype.inAlert = function () {
	window.alert(this.text)
	return this
}
Greeter.prototype.inConsole = function () {
	console.log(this.text)
	return this
}
Greeter.prototype.inDOM = function () {
	document.body.innerHTML = `<div>${this.text}</div>`
	return this
}

module.exports = Greeter

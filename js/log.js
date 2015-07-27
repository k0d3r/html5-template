var log = function(msg) {
	if (typeof console !== "undefined" || typeof console.log !== "undefined") {
		console.log(msg);
	}
	return this;
}
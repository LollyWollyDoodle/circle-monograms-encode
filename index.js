var validRegex =  /^[A-Za-z]{0,3}$/;

var circleTrans = {
	A: "1",	a: "1",	B: "2",	b: "2",	c: "3",	C: "3",	d: "4",	D: "4",	e: "5",	E: "5",
	f: "6",	F: "6",	g: "7",	G: "7",	h: "8",	H: "8",	i: "9",	I: "9",	j: "0",	J: "0",
	k: "!",	K: "!",	l: "@",	L: "@",	m: "#",	M: "#",	n: "$",	N: "$",	o: "%",	O: "%",
	p: "^",	P: "^",	q: "&",	Q: "&",	r: "*",	R: "*",	s: "(",	S: "(",	t: ")",	T: ")",
	u: "_",	U: "_",	v: "+",	V: "+",	w: "{",	W: "{",	x: "}",	X: "}",	y: "|",	Y: "|",
	z: ":",	Z: ":"
};

module.exports = function (text, options) {
	options = options || {};
	
	if (validRegex.exec(text) === null) {
		var err = Error("Invalid text");
		err.textEncodingError = true;
		throw err;
	}
	
	switch (text.length) {
	case 0:
		return text;
	case 1:
		return circleTrans[text];
	case 2:
		if (options.supportsTwoInitials) {
			return text.substr(0, 1).toLowerCase() + text.substr(1, 1).toUpperCase();
		}
		else {
			return text.substr(0, 1).toUpperCase() + circleTrans[text.substr(1, 1)];
		}
	case 3:
		return text.substr(0, 1).toLowerCase() +
			text.substr(1, 1).toUpperCase() +
			circleTrans[text.substr(2, 1)];
	}
};

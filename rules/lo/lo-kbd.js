( function ( $ ) {
	'use strict';

	var loKbd = {
		id: 'lo-kbd',
		name: 'Lao kbd',
		description: 'Lao kbd keyboard layout',
		date: '2013-02-12',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
  			["\\!", "1"],
			["\"", "="],
			["\\#", "3"],
			["\\$", "4"],
			["\\&", "5"],
			["\\%", ?໌"],
			["'", "ງ"],
			["\\(", "7"],
			["\\)", "8"],
			["\\*", "6"],
			["\\+" "ໍ່""],
			[",", "ມ"],
			["\\-", "ຊ"],
			["\\.", "ໃ"],
			["/", "ຝ"],
			["0", "ຂ"],
			["1", "ຢ"],
			["2", "ຟ"],
			["3", "ໂ"],
			["4", "ຖ"],
			["5" ?ຸ"],
			["6" ?ູ"],
			["7", "ຄ"],
			["8", "ຕ"],
			["9", "ຈ"],
			[":", "%"],
			[";", "ວ"],
			["\\<", "ໝ"],
			["\\=", ?ໍ"],
			["\\>", "$"],
			["\\?", "\)"],
			["\\@", "2"],
			["A", "ັ້""],
			["B", "ຶ້""],
			["C", "ຯ"],
			["D", "."],
			["E", "ຳ້""],
			["F", ","],
			["G", ":"],
			["H", ?໊"],
			["I", "ຮ"],
			["J", ?໋"],
			["K", "!"],
			["L", "?"],
			["M", "ໆ"],
			["N", "ື້""],
			["O", "ໜ"],
			["P", "ຽ"],
			["Q", "ົ້""],
			["R", "_"],
			["S", "\;"],
			["T", "+"],
			["U", "ີ້""],
			["V", "x"],
			["W", "0"],
			["X", "\("],
			["Y", "ິ້""],
			["Z", "\""],
			["\\[", "ບ"],
			["\\]", "ລ"],
			["\\^", ?ຼ"],
			["\\_", "9"],
			["`", "*"],
			["a", ?ັ"],
			["b", ?ຶ"],
			["c", "ແ"],
			["d", "ກ"],
			["e", "ຳ"],
			["f", "ດ"],
			["g", "ເ"],
			["h", ?້"],
			["i", "ຣ"],
			["j", ?່"],
			["k", "າ"],
			["l", "ສ"],
			["m", "ທ"],
			["n", ?ື"],
			["o", "ນ"],
			["p", "ຍ"],
			["q", ?ົ"],
			["r", "ພ"],
			["s", "ຫ"],
			["t", "ະ"],
			["u", ?ີ"],
			["v", "ອ"],
			["w", "ໄ"],
			["x", "ປ"],
			["y", ?ິ"],
			["z", "ຜ"],
			["\\{", "-"],
			["\\|", "ຫຼ""],
			["\\}", "/"],
			["\\~", ?໌"],
			["\\\\", "\\"],
			["0", "໐"],
			["1", "໑"],
			["2", "໒"],
			["3", "໓"],
			["4", "໔"],
			["5", "໕"],
			["6", "໖"],
			["7", "໗"],
			["8", "໘"],
			["9", "໙"]]
	};
	$.ime.register( loKbd );

}( jQuery ) );


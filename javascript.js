function initArray() {
this.length = initArray.arguments.length
for (var i = 0; i < this.length; i++)
this[i+1] = initArray.arguments[i]
}

var hexChars = "0123456789ABCDEF";

function Dec2Hex (Dec) {
var a = Dec % 16;
var b = (Dec - a)/16;
hex = "" + hexChars.charAt(b) + hexChars.charAt(a);
return hex;
}

function bgChanger (begin, end, steps) {
steps = steps -1 ;

redA = begin.charAt(0) + begin.charAt(1);
red_valA = parseInt(redA,'16');
redB = end.charAt(0) + end.charAt(1);
red_valB = parseInt(redB,'16');
red_int = ((red_valB - red_valA) / steps) * -1;
grnA = begin.charAt(2) + begin.charAt(3);
grn_valA = parseInt(grnA,'16');
grnB = end.charAt(2) + end.charAt(3);
grn_valB = parseInt(grnB,'16');
grn_int = ((grn_valB - grn_valA) / steps) * -1;
bluA = begin.charAt(4) + begin.charAt(5);
blu_valA = parseInt(bluA,'16');
bluB = end.charAt(4) + end.charAt(5);
blu_valB = parseInt(bluB,'16');
blu_int = ((blu_valB - blu_valA) / steps) * -1;

step = 2;
red = red_valA;
grn = grn_valA;
blu = blu_valA;

document.bgColor = begin;

while ( steps >= step ) {
red -= red_int;
red_round = Math.round(red);
red_hex = Dec2Hex(red);

grn -= grn_int;
grn_round = Math.round(grn);
grn_hex = Dec2Hex(grn);

blu -= blu_int;
blu_round = Math.round(blu);
blu_hex = Dec2Hex(blu);

document.bgColor = red_hex + grn_hex + blu_hex;
// document.write("<br>bgcolor = " + red_hex + grn_hex + blu_hex);

step++;
}
document.bgColor = end;
}
<!--
// black to black (pause)
bgChanger("000000","000000",25);
// black to red
bgChanger("000000","FF0000",25);
// red to black
bgChanger("FF0000","000000",25);
// black to purple
bgChanger("000000","AA00EE",25);
 // purple to black
bgChanger("AA00EE","000000",25);
// black to blue
bgChanger("000000","0000FF",25);
// blue to black
bgChanger("0000FF","000000",25);
// black to white (pause)
bgChanger("000000","FFFFFF",25);
// -->

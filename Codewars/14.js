// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
  let red16 = r.toString(16);
  let green16 = g.toString(16);
  let blue16 = b.toString(16);

  let red = red16;
  let green = green16;
  let blue = blue16;

  if (red.length === 1) {
    red = `0${red}`;
  }

  if (green.length === 1) {
    green = `0${green}`;
  }

  if (blue.length === 1) {
    blue = `0${blue}`;
  }

  return ("#" + red + green + blue);
}
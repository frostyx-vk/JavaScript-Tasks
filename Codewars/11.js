// https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  let bag = [];

  for (let i = 0; i <= dolls.length; i++) {
    if (bag.length === 3) {
      break;
    }

    const value = dolls[i];

    switch (value) {
      case "Hello Kitty":
      case "Barbie doll":
        bag.push(value);
        continue;
    }
  }

  return bag;
}
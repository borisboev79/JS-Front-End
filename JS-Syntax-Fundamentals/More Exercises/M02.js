// function toUpperCase(text) {
//   console.log(
//     text
//       .toUpperCase()
//       .split(/[\s.]/)
//       .map(w => w.match(/[A-Z]+/))
//       .join(", ")
//   );
// }

function toUpperCase(text) {
      let arr = text
        .toUpperCase()
        .split(/[\W]+/).filter(w => w.length >= 1)
        .join(", ")
        console.log(arr)
  }

toUpperCase(`Functions in JS can be nested, i.e. hold other functions`);

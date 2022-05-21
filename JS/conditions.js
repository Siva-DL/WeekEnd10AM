// if-else, if-else-if, switch, ternaory

var product = "LG";
var budget = 100;

// if (product === "sony") {
//   console.log("this product is sony..!");
// } else {
//   console.log("this product is not sony..!");
// }

if (product === "sony") {
  console.log("this product is sony..!");
} else if (product === "samsung") {
  console.log("this product is samsung..!");
} else if (product === "LG" && budget === 1000) {
  console.log("this product is LG..!");
} else {
  console.log("Not in listed products...!");
}

//

switch (product) {
  case "sony":
    console.log("this is sony..!");
    break;
  case "samsung":
    console.log("this is samsung..!");
    break;
  case "LG":
    console.log("this is LG..!");
    break;
  default:
    console.log("Not in List..!");
    break;
}

var productInfo = product === "LG" ? console.log(true) : console.log(false);

// productInfo;

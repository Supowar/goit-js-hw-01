console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
const contentWidth = parseFloat(content);
const paddingWidth = parseFloat(padding);
const borderWidth = parseFloat(border);
console.log(getElementWidth("100px", "10px", "5px")); // 115
console.log(getElementWidth("200px", "20px", "10px")); // 230
console.log(getElementWidth("50px", "5px", "2px")); // 57

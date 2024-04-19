/* Write a JavaScript program to rotate the string 'w3resource' 
in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.
*/

function animate_string(target) {
  const element = document.getElementById(target);

  let textElement = element.childNodes[0]

  let text = textElement.data;

  console.log("element", text);

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1)

    textElement.data = text
  }, 100)

}

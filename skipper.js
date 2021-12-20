
const click = (clazz) => {
  const buttons = document.getElementsByClassName(clazz);
  for (const button of buttons) {
    button.click();
    console.log("Add skipped successfully.")
  }
}

setInterval(() => {
  click("ytp-ad-skip-button-text");
  click("ytp-ad-overlay-close-button");
  console.log("here ugh")
}, 200);
console.log("Ad Skipper is On");

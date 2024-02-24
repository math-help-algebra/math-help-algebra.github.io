function fullscreen(e){
  let iframe = document.querySelector("iframe")
  iframe.classList.add("fullscreen")
}

addEventListener("keydown",function(e){
  if (e.key === "Escape") {
    let iframe = document.querySelector("iframe")
    iframe.classlist.remove("fullscreen")
  }
})

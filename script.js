const input = document.querySelector("input")
const button = document.querySelector("button")
const output = document.querySelector("h3")

button.addEventListener("click", ()=>{
    let link = input.value.includes("youtu.be") ? input.value : ""
    let untrackedLink = link.substring(0, link.indexOf("?"))
    output.textContent = untrackedLink ? "New Link: " + untrackedLink : "link not valid"
})
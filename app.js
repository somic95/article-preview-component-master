const shareBtn = document.getElementById("share")
const socials = document.querySelector(".clicked")
const removeShareBtn = document.getElementById("remove-share")

shareBtn.addEventListener("click", () => {
  socials.classList.toggle("active")
})

removeShareBtn.addEventListener("click", () => {
  socials.classList.remove("active")
})

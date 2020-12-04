var scrollToTopBtn= document.querySelector(".back2top")
var rootElement = document.documentElement

function handleScroll() {
  // do something on scroll
var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
if ((rootElement.scrollTop / scrollTotal ) > 0.10) {
    //show button
    scrollToTopBtn.style.display = "block"
} else {
    //hide button
    scrollToTopBtn.style.display = "none"
}
}

function scrollToTop() {
  //scroll to top logic
rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
})
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
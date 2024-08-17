
function animated() {
    const touch = document.querySelector(".outer")
    const text1 = document.querySelector(".text1")
    const text2 = document.querySelector(".text2")

    touch.addEventListener("mouseover", () => {
        if (!text1.classList.contains("goup")) {
            text1.classList.add("goup")
            text2.classList.add("goup")
        }
    })

    touch.addEventListener("mouseout", () => {
        if (text1.classList.contains("goup")) {
            text1.classList.remove("goup")
            text2.classList.remove("goup")
        }
    })

}

animated()
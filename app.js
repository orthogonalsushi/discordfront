

function main() {
    clientStatus()

    pillToggle()

    pillToggleClick()

    positionTooltips()
}


function clientStatus() {
    const contains = document.querySelector(".side-bar-profile");
    const status = document.querySelector(".client-status-status");
    const username = document.querySelector(".client-status-username");

    contains.addEventListener("mouseover", () => {
        if (!status.classList.contains("move-up")) {
            status.classList.add("move-up");
            username.classList.add("move-up");
        }
    })

    contains.addEventListener("mouseout", () => {
        if (status.classList.contains("move-up")) {
            status.classList.remove("move-up");
            username.classList.remove("move-up");
        }
    })
}


function pillToggle() {
    const serverIcons = document.querySelectorAll(".server-wrapper-inner")

    serverIcons.forEach((icon) => {
        const pill = (icon.parentElement).previousElementSibling;
        const pillChild = pill.firstElementChild;
        icon.addEventListener("mouseover", () => {
            if (!pillChild.classList.contains("pill-hover")) {
                pillChild.classList.add("pill-hover");
            }
        })
        icon.addEventListener("mouseout", () => {
            if (pillChild.classList.contains("pill-hover")) {
                pillChild.classList.remove("pill-hover");
            }
        })
    })
}


function pillToggleClick() {
    const serverIcons = document.querySelectorAll(".server-wrapper-inner");

    let clicked = null;
    let clickedIcon = null;

    serverIcons.forEach((icon) => {
        const pill = (icon.parentElement).previousElementSibling;
        const pillChild = pill.firstElementChild;
        icon.addEventListener("click", () => {
            if (!pillChild.classList.contains("pill-clicked")) {
                pillChild.classList.add("pill-clicked");
                
                if (icon.classList.contains("friends-wrapper-inner")) {
                    icon.classList.add("clicked-pill-icon");
                }
                
                if (clicked) {
                    clicked.classList.remove("pill-clicked");

                    if (clickedIcon.classList.contains("friends-wrapper-inner")) {
                        clickedIcon.classList.remove("clicked-pill-icon");
                    }
                }

                clicked = pillChild;
                clickedIcon = icon;
            }
        })
    })
}


function positionTooltips() {
    const ttTop = document.querySelectorAll(".tt-top");
    ttTop.forEach((tooltip) => {
        let contains = tooltip.parentElement;

        contains.addEventListener("mouseenter", () => {
            let containsPos = contains.getBoundingClientRect();
            tooltip.style.top = `${containsPos.top}px`;
            tooltip.style.left = `${containsPos.left + (containsPos.width * 0.5)}px`;
        })
    })


    const ttRight = document.querySelectorAll(".tt-right");
    ttRight.forEach((tooltip) => {
        let contains = tooltip.parentElement;

        contains.addEventListener("mouseenter", () => {
            let containsPos = contains.getBoundingClientRect();
            tooltip.style.top = `${containsPos.top + (containsPos.height * 0.5)}px`;
            tooltip.style.left = `${containsPos.left + containsPos.width}px`;
        })
    })


    const ttBottom = document.querySelectorAll(".tt-bottom");
    ttBottom.forEach((tooltip) => {
        let contains = tooltip.parentElement;

        contains.addEventListener("mouseenter", () => {
            let containsPos = contains.getBoundingClientRect();
            tooltip.style.top = `${containsPos.top + containsPos.height}px`;
            tooltip.style.left = `${containsPos.left + (containsPos.width * 0.5)}px`;
        })
    })
}


main()

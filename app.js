

function main () {
    client_status()
}


function client_status() {
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


main()
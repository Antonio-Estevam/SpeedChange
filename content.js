const interval =  setInterval(() => {
    const header = document.querySelector("._1QUKR");
    if (header){
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerText = "2x";
        button.classList.add("twoTimeButton");

        button.addEventListener("click",() => {
            const audio = document.querySelectorAll("audio");
            audio.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 2;
                button.classList.add("bt_verde");
            })
        });

        header.appendChild(button)

    }
}, 1000);
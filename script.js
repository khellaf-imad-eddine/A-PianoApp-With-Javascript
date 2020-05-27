window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#03b955",
        "#d85d5d",
        "rgb(192, 32, 224)",
        "rgb(233, 213, 32)",
        "rgb(32, 35, 224)",
        "rgb(218, 47, 25)",
        "#03b955",
        "#d85d5d",
        "rgb(192, 32, 224)",
        "rgb(233, 213, 32)",
        "rgb(32, 35, 224)",
        "rgb(218, 47, 25)",
        "#03b955"
    ]



    // do the sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBubbles(index);
        });
    });

    // bouncing bubbles
    const creatBubbles = index => {

        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
});
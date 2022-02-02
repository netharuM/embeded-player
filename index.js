function getVideo() {
    document
        .getElementById("preiewVideo")
        .setAttribute(
            "src",
            `https://www.youtube.com/embed/${
                document.getElementById("videoId").value
            }`
        );
}
document.getElementById("find").addEventListener("click", function () {
    getVideo();
});

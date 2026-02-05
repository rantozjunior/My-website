window.onload = function() {

    const welcomeText = document.getElementById("welcomeText");
    const text = "Welcome to The Fallen World";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            welcomeText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
}
<script>
function playSound() {
    const sound = document.getElementById("introsound");
    sound.volume = 0.6;
    sound.play(introsound);
}
</script>
function playSound(event) {
    const sound = document.getElementById("introsound");
    if (!sound) return;
    sound.volume = 0.6;
    sound.currentTime = 0;
    sound.play();
}

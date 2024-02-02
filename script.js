const calculateLove= () => {
    // preventDefault();
    let loveScore= Math.random() * 100;
    loveScore= Math.floor(loveScore) + 1;
    console.log(loveScore);
}


document.getElementById("calculate-btn").addEventListener("click", calculateLove);
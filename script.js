const calculateLove= () => {
    // preventDefault();
    let loveScore= Math.random() * 100;
    loveScore= Math.floor(loveScore) + 1;
    console.log(loveScore);
    // alert("You and your match are " + loveScore + "% compatible.");
    alert(`You and your match are ${loveScore}% compatible.`);
}


document.getElementById("calculate-btn").addEventListener("click", calculateLove);
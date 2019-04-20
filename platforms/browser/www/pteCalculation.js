javascript:

var pteScore = PteScore;
var ieltsScore = 0;

function calculatePteScore() {
    if (pteScore.value < 0) {
        ieltsScore = alert('Please Enter a valid PTE score!');
    }
    else if (pteScore.value >= 0 && pteScore.value <= 34) {
        ieltsScore = alert('Your score is too low to decide a grade!');
    }
    else if (pteScore.value >= 30 && pteScore.value <= 35) {
        ieltsScore = 4.5;
    } else if (pteScore.value >= 36 && pteScore.value <= 41) {
        ieltsScore = 5.0;
    } else if (pteScore.value >= 42 && pteScore.value <= 49) {
        ieltsScore = 5.5;
    } else if (pteScore.value >= 50 && pteScore.value <= 57) {
        ieltsScore = 6.0;
    } else if (pteScore.value >= 58 && pteScore.value <= 64) {
        ieltsScore = 6.5;
    } else if (pteScore.value >= 65 && pteScore.value <= 72) {
        ieltsScore = 7.0;
    } else if (pteScore.value >= 73 && pteScore.value <= 78) {
        ieltsScore = 7.5;
    } else if (pteScore.value >= 79 && pteScore.value <= 82) {
        ieltsScore = 8.0;
    } else if (pteScore.value >= 83 && pteScore.value <= 85) {
        ieltsScore = 8.5;
    } else if (pteScore.value >= 86 && pteScore.value <= 90) {
        ieltsScore = 9.0;
    } else if (pteScore.value > 90) {
        ieltsScore = alert('Please Enter a valid PTE score!');
    }
    console.log(ieltsScore);
    document.getElementById("IeltsScore").value = ieltsScore;
}
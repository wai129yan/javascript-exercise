var popped = 0;

document.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.className === "balloon") {
        e.target.style.backgroundColor = "white";
        e.target.textContent = "POP!";
        popped++;
        checkAll();
    }
});

function checkAll() {
    if (popped === 10) {
        var balloondiv = document.querySelector('.balloon-div');
        balloondiv.innerHTML = "";
        var noballoondiv = document.querySelector('#no-balloons');
        noballoondiv.style.display = "block";
    }
}
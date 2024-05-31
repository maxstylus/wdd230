const w1 = document.querySelector("#w1");
const w2 = document.querySelector("#w2");
const fb = document.querySelector("#feedback");

w2.addEventListener('focusout', controlar);

function controlar() {
    console.log('inside the function')
    if (w1.value !== w2.value) {
        //console.log('no match')
        w1.value=""
        w2.value=""
        w1.focus()
        fb.textContent = "Values do not match. Try again"

    } else {
        //console.log('YEA the match')
        fb.textContent=""
    }
}


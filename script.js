
let input1 = document.querySelector("#answer1");
let input2 = document.querySelector("#answer2");
let input3 = document.querySelector("#answer3");
let input4 = document.querySelector("#answer4");
let button = document.querySelector("button");
let results = document.querySelector(".results");
let image = document.querySelector("img")
let title =document.querySelector("h1")
let startingTitle = title.innerHTML
button.addEventListener("click", function () {
    if (input1.value==="on" && input3.value==="on") {
        // blue and others
        console.log(input1.value)
        results.innerHTML = "you are sleepy bear"
        image.src = "https://static.wikia.nocookie.net/vsbattles/images/3/3f/Bedtimenolashes.png/revision/latest?cb=20190803134126"
        image.alt = "picture of sleepy bear"
        title.innerHTML=startingTitle+" sleepy!"
    } else if (input1.checked && input4.checked) {
        // blue and myself
        results.innerHTML = "you are grumpy bear"
        image.src = "https://static.wikia.nocookie.net/vsbattles/images/9/93/Grumpy_render.png/revision/latest?cb=20190729020554"
        image.alt = "image of grumoy bear"
    } else if (input2.checked && input3.checked) {
        // orange and others
        results.innerHTML = "you are friend bear"
        image.src = "https://i.pinimg.com/originals/7d/ac/19/7dac19b22ef5e9fea9bc141d9952fdcc.gif"
        image.alt = "image of friend bear"
    } else if (input2.checked && input4.checked) {
        // orange and myself
        results.innerHTML = "you are birthday bear"
        image.src = "https://static.wikia.nocookie.net/thecarebearsfanon/images/5/5b/Birthday_Bear.png/revision/latest/thumbnail/width/360/height/360?cb=20190924141811"
        image.alt = "image of birthday bear"
    }
})
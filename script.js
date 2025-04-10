function showMessage() { 
    alert("This website is for entertainment"); 
    }
function changeBgColor() { 
    document.body.style.backgroundColor = "Black"; 
    document.querySelectorAll("img").forEach(img => {
        img.classList.toggle("inverted-border");
    });
    }
function toggleTextColor() {
    document.body.classList.toggle("inverted-text");
}
function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        document.getElementById("nameInput").innerText = "Please enter your name!";
    } else {
        document.getElementById("nameInput").innerText = "Hello, " + name + "!";
    }
}   
function changeBgColorUser() {
    let userColor = document.getElementById("colorInput").value;
    let container = document.getElementById("container");
    container.style.backgroundColor = userColor;
    container.textContent = userColor;
}   
function favorite() {
    print("You favorited this!")
}
function unfavorite() {
    print("You unfavorited this!")
}
function checkAge() {
    let age = DocumentFragment.getElementById("ageInput").value;
    if (age >= 18) {
        alert("your're an adult!");
    } else {
        alert("You're still a kid!");
    }
}

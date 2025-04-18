function showMessage() { 
    alert("This website is for entertainment"); 
    }
function changeBackgroundColor() {
    const userColor = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = userColor;
}    
function toggleTextColor() {
    document.body.classList.toggle("inverted-text");
}
function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML = "Hello," + name + "Welcome to my website!";
    greeting.style.left = "200px";
    greeting.style.top = "150px";
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
    let age = document.getElementById("ageInput").value;
    if (age >= 18) {
        alert("your're an adult!");
    } else {
        alert("You're still a kid!");
    }
}

// Find the button on the page (在页面上找到按钮)
const button = document.getElementById("theme-button");

// When it's clicked, switch the dark theme on or off (点击时切换深色主题)
button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

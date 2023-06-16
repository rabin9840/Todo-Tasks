function darkMode() {
    var btn_element = document.getElementById("mode-selector");
    
    var element = document.body;
    element.classList.toggle("dark-mode");

    const table_element = document.querySelector("table");
    
    if(btn_element.innerText == "Dark Mode") {
        btn_element.innerText = "Light Mode";

    }
    else {
        btn_element.innerText = "Dark Mode";
    }
}
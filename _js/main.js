// always starts the page at the top
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

// carousel
document.querySelectorAll(".carousel").forEach(carousel => {
    let items = carousel.querySelectorAll(".carousel-item");
    let buttonsHtml = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
            ${ buttonsHtml.join("") }
        </div>
    `);

    let buttons = carousel.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () =>{
            // unselect all items
            items.forEach(item => item.classList.remove("carousel-item-selected"));
            buttons.forEach(button => button.classList.remove("carousel-button-selected"));

            items[i].classList.add("carousel-item-selected");
            button.classList.add("carousel-button-selected");
        });
    });
    // starts page at 1st carousel item on load
    items[0].classList.add("carousel-item-selected");
    buttons[0].classList.add("carousel-button-selected");
});

// made with help from w3schools
function toggleShow(content){
    document.getElementById(content).classList.toggle("hide");
    document.getElementById(content).classList.toggle("show");
    console.log(content);
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-btn')) {
        console.log("this becam true");
      var dropdowns = document.getElementById("menu-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          openDropdown.classList.add('hide');
        }
      }
    }
  }
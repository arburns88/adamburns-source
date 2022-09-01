// *****WORK ON DROPDOWNS/CARDS*****

// hides console logs by default to reduce terminal clutter for normal users
let showLogs = true;
// arguments for closing pop outs
let canHideMenu = false;
let canHideSocials = false;
let canHideLinkedInCard = true;
// for monitoring left card's status
let leftCardActive = true;
// one time use. prevents card from auto hiding if it was already hidden
let lcNotClosed = true;

// way of organizing console logs to make them easier to read. demo:
// Tag:    this is the message
function cLog(tag, message) {
    if (showLogs){
        console.log(tag + ':    ' + message);
    }
}

// runs on window load
window.onbeforeunload = function () {
    // sets page to top
    window.scrollTo(0, 0);
}

window.onload = function () {
    setTimeout(() =>{
        cLog('Onload', ('lcNotClosed: ' + lcNotClosed));
        if (lcNotClosed) {
            cLog('Onload', 'this ran');
            document.getElementById('lcb').classList.remove('left-card-active');
            document.getElementById('lcb-img').src="_images/chevron-compact-right.svg";
            document.getElementById('linkedin-card').classList.add("hide");
            document.getElementById('linkedin-card').classList.remove("show");
            leftCardActive = false;
            canHideLinkedInCard = false;
        }
    } , 8000);
}

// toggles visibility of (content)
function toggleShow(content){
    document.getElementById(content).classList.toggle("hide");
    document.getElementById(content).classList.toggle("show");

    // inefficient but cant get bool value to change with parameter     **needs revision**
    // if (content) is active, makes its canHide bool true so it can be removed by hide
    if (content == 'menu-content'){
        if (!canHideMenu){
            // timer needed because hide is run after
            setTimeout(() => canHideMenu = true, 10);
        }
    }
    if (content == 'socials'){
        if (!canHideSocials){
            setTimeout(() => canHideSocials = true, 10);
        }
    }
    if (content == 'linkedin-card'){
        if (!canHideLinkedInCard){
            setTimeout(() => canHideLinkedInCard = true, 10);
            // setTimeout(() => leftCardActive = true, 10);
            leftCardActive = true;
        }
    }
}

// if the (item)'s canHide is true, hides it and makes its canHide false
function hide(bool, item){
    if (bool){
        document.getElementById(item).classList.add("hide");
        document.getElementById(item).classList.remove("show");
        cLog('Hide', (item + " was hidden"));
        if (item = 'menu-content'){
            canHideMenu = false;
        }
        if (item = 'socials'){
            canHideSocials = false;
        }
        if (item = 'linkedin-card'){
            canHideLinkedInCard = false;
            leftCardActive = false;
            if (lcNotClosed){
                lcNotClosed = false;
            }
        }
    }
    else{
        cLog('Hide', (item + ' was false'));
    }
}

// changes chevron direction based on whether the card is active or not. left-card-active is used for animations and styling
function toggleCard(){
    if (leftCardActive){
        document.getElementById('lcb').classList.add('left-card-active');
        document.getElementById('lcb-img').src="_images/chevron-compact-left.svg";
    }
    if (!leftCardActive){
        document.getElementById('lcb').classList.remove('left-card-active');
        document.getElementById('lcb-img').src="_images/chevron-compact-right.svg";
    }
}


window.onclick = function(){
    // can be for looped with arrays but havent worked on yet       **needs revision**
    hide(canHideMenu, 'menu-content');
    hide(canHideSocials, 'socials');
    hide(canHideLinkedInCard, 'linkedin-card');
    toggleCard();
    cLog('OnClick', ('leftCardActive: ' + leftCardActive));
}

/*      INACTIVE CODE

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

*/
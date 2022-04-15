getMet();

var faceOn = false;


$('#avatar_img').hover( 
    revealFace,
    returnBlur,
);

$('#avatar_img').hover( 
    revealTip,
    hideTip
);

$('#avatar_img').on("tap", faceOnSwitch);

$('#avatar_img').on("click", faceOnSwitch);


function hideTip() {
    $('.pointer_items_custom').css("visibility","hidden");
    $('.pointer_items_custom_arrow').css("visibility","hidden");
    // $('.pointer_items_custom').val("( Tap on me to keep me around... )");
    // $('.pointer_items_custom_arrow').val("⤻")
}

function revealTip() {
    $('.pointer_items_custom').css("visibility","visible");
    $('.pointer_items_custom_arrow').css("visibility","visible");
    // $('.pointer_items_custom').val("");
    // $('.pointer_items_custom_arrow').val("")
}

function revealFace() {
    $('#avatar_img').attr({"style": "filter: none;opacity: 1","src":"./assets/css/images/figures/img_0694682396022516.png"})
}

function returnBlur() {
    if (faceOn === false) {
        $('#avatar_img').attr({"src":"./assets/css/images/figures/164998400323332140.jpg","style":"filter: blur(0.2rem);opacity: 85%;"});
    }
}

function faceOnSwitch() {
    if (faceOn === true) {
        faceOn = false;
    }
    else {
        faceOn = true;
    }
}

function getMet() {

    let metURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/469927"

    fetch(metURL)
    .then( function(response) {
        if (response.status !== 200) {
            userCoinInputEl.val("Display error");
        }
    return response.json();
    })
    .then(metData => {
        // console.log(metData);
        $('#avatar_img').attr("src", metData.primaryImageSmall);
    })
};
        
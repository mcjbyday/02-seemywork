getMet();

// $('#img_hover').attr("src", "./assets/css/images/figures/164998400323332140.jpg");

var faceOn = false;

$('#avatar_img').hover( 
    revealFace
    , returnBlur
);

function revealFace() {
    $(this).attr({"style": "filter: none;opacity: 1","src":"./assets/css/images/figures/img_0694682396022516.png"})
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

$('#avatar_img').on("click", faceOnSwitch);


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
            



// $('#avatar_img').hover(function() {
//     if (faceOn) {
//         $(this).attr({"src":"./assets/css/images/figures/img_0694682396022516.png","style":"filter: none;opacity: 1"})
//     }
//     else {$(this).attr({"src":"./assets/css/images/figures/164998400323332140.jpg","style":"filter: blur(0.2rem);opacity: 85%;"})
//     }
//     // , function() {
//     // if (faceOn) 
//     // $(this).attr({"src":"./assets/css/images/figures/164998400323332140.jpg","style":"filter: blur(0.2rem);opacity: 85%;"})
// });

// $('#avatar_img').taphold(function() {
//     $(this).attr({"src":"./assets/css/images/figures/img_0694682396022516.png","style":"filter: none;opacity: 1"})}
    
//     , function() {
//         $(this).attr({"src":"./assets/css/images/figures/164998400323332140.jpg","style":"filter: blur(0.2rem);opacity: 85%;"})
// });



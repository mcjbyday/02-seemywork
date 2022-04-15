$('#img_hover').attr("src", "./assets/css/images/figures/164998400323332140.jpg");

getMet();

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
            


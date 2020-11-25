let profile = new Profile();
let ui = new Ui();
let stroge = new Stroge();
let selectors = ui.selectors;

loadEventListenner();

// son aramaları ls den getirme
ui.showProfileLs(stroge.getProfileLs());

function loadEventListenner() {


    //arama butonuna basıldığında
    selectors.search.addEventListener("click", searchUser);

    // son aranları temizleme
    selectors.recentCallsClear.addEventListener("click", () => {
        stroge.allDeleteProfileLs();
        ui.showProfileLs(stroge.getProfileLs());
    })

};

//eventler callback

// arama eventi callback
function searchUser(e) {

    //input değer kontrolü
    if (selectors.userName.value != "") {
        let userName = selectors.userName.value;

        //arananın kişiyi local strogeye ekleme
        stroge.setProfileLs(selectors.userName.value);

        //aranan kişileri local strogeden getirme/gösterme
        ui.showProfileLs(stroge.getProfileLs());

        //username e göre profil bilgilerinin çekilmesi 
        profile.getProfile(userName)
            .then(res => {

                //hata kontrolü
                if (res.profileJson.message === "Not Found") {
                    ui.showError("geçerli bir kullanıcı adı girin", "danger");
                } else {
                    //profili getirme
                    ui.showProfile(res.profileJson);

                    //repos getirme
                    ui.showRepos(res.reposJson);

                    //follow getirme

                    ui.showFollow(res.followersJson, res.followingJson);

                }



            })
            .catch(err => ui.showError("böyle bir kullanıcı yok!", "danger"));

    } else {
        ui.showError("lütfen bir kullanıcı adı giriniz!", "danger");
    }
    e.preventDefault();
};
class Stroge {
    constructor() {

    };


    //localstrogedeki bilgilerin getirilmesi
    getProfileLs() {
        let profiles = null;

        if (localStorage.getItem("profiles") === null) {
            profiles = [];
        } else {
            profiles = JSON.parse(localStorage.getItem("profiles"));
        }

        return profiles;
    };

    //aran kişinin ls e eklenmesi
    setProfileLs(profile) {

        let profiles = this.getProfileLs();

        if (profiles.includes(profile)) {

        } else {
            profiles.unshift(profile);
            localStorage.setItem("profiles", JSON.stringify(profiles));
        }



    };

    //arananların ls den silinmesi

    allDeleteProfileLs() {
        let profiles = this.getProfileLs();
        profiles.splice(0, profiles.length);
        localStorage.setItem("profiles", JSON.stringify(profiles));

    };
};
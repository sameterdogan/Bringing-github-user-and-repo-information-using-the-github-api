class Profile {
    constructor() {
        this.url = "https://api.github.com/users/"
    };

    async getProfile(username) {
        //profili getirme
        let profile = await fetch(this.url + username);

        let profileJson = await profile.json();

        //repos getirme
        let repos = await fetch(profileJson.repos_url);

        let reposJson = await repos.json();

        //followers getirme
        let followers = await fetch(profileJson.followers_url);

        let followersJson = await followers.json();


        //url yi düzeltme ve following getirme
        let dizi = profileJson.following_url.split("{");

        let following = await fetch(dizi[0]);

        let followingJson = await following.json();



        return { profileJson, reposJson, followersJson, followingJson };
    };



}
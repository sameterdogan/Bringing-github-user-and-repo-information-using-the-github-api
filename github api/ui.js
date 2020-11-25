class Ui {
    constructor() {
        this.selectors = {
            search: document.querySelector("#userSearch"),
            userName: document.querySelector("#userName"),
            userData: document.querySelector("#userData"),
            recentCalls: document.querySelector("#recenCalls ul"),
            recentCallsClear: document.querySelector("#allClear"),
            container: document.querySelector(".container"),
            searchCard: document.querySelector("#searchCard")

        }

    };
    // profil bilgilerini  gösterilmesi
    showProfile(user) {
        let userData = {
            htmlurl: user.html_url,
            image: user.avatar_url,
            name: user.name,
            email: user.email,
            company: user.company,
            location: user.location,
        };

        for (let data in userData) {
            userData[data] === null ? userData[data] = "bilinmiyor" : console.log("değişmedi");
        };

        this.selectors.userData.innerHTML =
            `
       <div class="row ">
       <div class="col-lg-3">

           <div class="row my-3 text-center">
               <div class="col-md-12 ">
                   <a href="${userData.htmlurl}" target="_blank"> <img class=" card-img-top img-fluid img-responsive rounded-circle" src="${userData.image}" alt=""></a>

               </div>
               <div class="col-md-12 text-center">
                   <div class="card-body">
                       <p class="">
                           <i class="fas fa-user-friends"></i>

                           
                           <div class="dropdown">
                           <button class="btn btn-sm btn-light dropdown-toggle" type="button" id="following" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ${user.following} Following
                           </button>
                           <div id="followingDiv" class="dropdown-menu" aria-labelledby="following">
                               
                             
                           </div>
                       </div>

                       <div class="dropdown">
                       <button class="btn btn-sm btn-light dropdown-toggle" type="button" id="followers" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ${user.followers} Followers
                       </button>
                       <div id="followersDiv" class="dropdown-menu overflow-auto" aria-labelledby="followers">
                        
                       </div>
                   </div>
                       </p>

                   </div>
               </div>

           </div>

       </div>

       <div class="col-lg-9 ">
           <div class="card-body">
               <ul class="list-group">

                   <li class="list-group-item"><b>
                       <i class="fas fa-user text-primary mr-2"></i> 
                   </b> ${userData.name}</li>
                   <li class="list-group-item"><b>
                       <i class="fas fa-envelope-open  text-primary mr-2 "></i>
                   </b> ${userData.email}</li>

                   <li class="list-group-item"><b>
                       <i class="fas fa-building  text-primary mr-2"></i>
                   </b> ${userData.company}</li>
                   <li class="list-group-item"><b>
                       <i class="fas fa-map-marker-alt  text-primary mr-2"></i>
                   </b> ${userData.location}</li>
               </ul>
           </div>
       </div>
   </div>

       `
    };

    //repo bilgilerini gösterilmesi
    showRepos(repos) {

        repos.forEach(repo => {
            this.selectors.userData.innerHTML +=
                `
        <div class="row text-center my-2">
             <div class="col-md-6 my-2 text-center">

                <a href="${repo.svn_url}" target="_blank">${repo.name}</a>

             </div>

             <div class="col-md-6 ">

                <span> Dil: ${repo.language}</span> 

                <p class="my-2 ">
        
                    <button class="btn btn-sm btn-dark mx-3"> ${repo.stargazers_count} Starlar </button>
                    <button class="btn btn-sm btn-info"> ${repo.watchers_count} Forklar </button>

               </p>

            </div>
        </div>
        
        `
        });
    };

    //ls dan en son aranan kişilerin gösterilmesi (en son aranan 10 kişi)
    showProfileLs(profiles) {
        this.selectors.recentCalls.innerHTML = "";
        let i = 0;
        while (i < 10 && profiles[i] !== undefined) {
            this.selectors.recentCalls.innerHTML +=
                `
        
                <li class="list-group-item">
                        ${profiles[i]}
                </li>
      
            `

            i++;


        };




    };


    //followers/following gösterilmesi
    showFollow(followers, following) {
        if (followers.length > 0) {
            document.querySelector("#followersDiv").style.height = "25ch";
            document.querySelector("#followersDiv").style.width = "32ch"

        };

        followers.forEach(follow => {
            document.querySelector("#followersDiv").innerHTML +=
                `
            <a href="${follow.html_url}" target="_blank"  class=" dropdown-item p-1 -"><img src=" ${follow.avatar_url}" class="rounded-circle w-25" alt=""> <span class="ml-3">${follow.login} </span> </a>
            `
        });

        if (following.length > 0) {
            document.querySelector("#followingDiv").style.height = "25ch";
            document.querySelector("#followingDiv").style.width = "30ch"

        };

        following.forEach(follow => {
            document.querySelector("#followingDiv").innerHTML +=
                `
            <a href="${follow.html_url}"  target="_blank" class="dropdown-item p-1 -"><img src=" ${follow.avatar_url}" class="rounded-circle w-25" alt=""> <span class="ml-3">${follow.login} </span> </a>
            
            `
        });


    };

    //hata mesajları gösterimi
    showError(text, color) {

        let alert = document.createElement("div");
        alert.className = `alert alert-${color}`;
        alert.textContent = text;

        this.selectors.container.insertBefore(alert, this.selectors.searchCard);

        setTimeout(() => {
            alert.remove();
        }, 4000);

    };

}
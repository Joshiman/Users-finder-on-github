// Init Github

class Github {
    constructor() {
        this.client_id = '0f7314b943b7006bd7cc';
        this.client_secret = '8173aaaa7af4ceedc460996e050689a63dffca0e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        console.log(repoResponse)

        return {
            profile,
            repos
        }

    }
}
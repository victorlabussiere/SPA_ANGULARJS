module.exports = class Environments {

    constructor(page) {
        this.baseUrl = "http://localhost:3333/api/"
        this.apiUrl = this.baseUrl + page
    }
    apiUrl = this.apiUrl
}   
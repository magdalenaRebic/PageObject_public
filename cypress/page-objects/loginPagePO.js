export class LoginPagePO {
    constructor(){
        this.pmtoolUrl = "http://tredgate.com/pmtool/";
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = ".btn"
    }

    openPMTool(){
        cy.visit(this.pmtoolUrl);
    }

    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    }

    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton(){
        cy.get(this.loginButton).click();
    }
}

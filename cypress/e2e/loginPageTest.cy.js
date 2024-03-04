import moment from "moment";
import { faker } from "@faker-js/faker"

import { LoginPagePO } from "../page-objects/loginPagePO";

describe('První PO - LoginPage', () => {
    it('Login PM tool', () => {
       let loginPage = new LoginPagePO();
       loginPage.openPMTool();
       loginPage.typeUsername("pw_skoleni");
       loginPage.typePassword("TEG2023");
       loginPage.clickLoginButton();
    });
});
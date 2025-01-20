import { Page } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../../src/logging/LoggerUtil";

export default class LoginPage {
    public readonly inputUsername: any;
    public readonly inputPassword: any;
    public readonly btnLogin: any;

    constructor(private readonly page: Page) {
        this.inputUsername = this.page.getByRole('textbox', { name: 'Username' });
        this.inputPassword = this.page.getByRole('textbox', { name: 'Password' });
        this.btnLogin = this.page.getByRole('button', { name: 'Log In' });
    }

    async fillUsername(username: string) {
        await this.inputUsername.fill(username);
        logger.info("Entered username");
    }

    async fillPassword(password: string) {
        await this.inputPassword.fill(password);
        logger.info("Entered password");
    }

    async clickLoginButton() {
        try {
            await this.btnLogin.click();
            logger.info("Clicked login button");
        } catch (error) {
            logger.error(`Error clicking login button: ${error.message}`);
            throw error;
        }

        const homePage = new HomePage(this.page);
        return homePage;
    }

}


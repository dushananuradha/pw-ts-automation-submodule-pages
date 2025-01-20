import { Page } from "@playwright/test";
import ContactPage from "./ContactsPage";
import logger from "../../src/logging/LoggerUtil";

export default class ServicePage {
    private readonly inputUsername: any;

    constructor(private readonly page: Page) {
        this.inputUsername = this.page.getByRole('textbox', { name: 'Username' });
    }

    async fillUsername(username: string) {
        await this.inputUsername.fill(username);
        logger.info("Entered username");
    }

}


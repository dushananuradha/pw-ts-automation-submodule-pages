import { Page } from "@playwright/test";
import logger from "../../src/logging/LoggerUtil";

export default class ContactPage {
    private readonly inputUsername: any;

    constructor(private readonly page: Page) {
        this.inputUsername = this.page.getByRole('textbox', { name: 'Username' });
    }

    async fillUsername(username: string) {
        await this.inputUsername.fill(username);
        logger.info("Entered username");
    }


}


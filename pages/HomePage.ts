import { Page } from "@playwright/test";
import ServicePage from "./ServicePage";
import TextAssert from "../../src/common_assertions/TextAssert";
import logger from "../../src/logging/LoggerUtil";

export default class HomePage {
    private readonly titleHomePage: any;
    private readonly iconAppLauncher: any;
    private readonly appService: any;
    private readonly titleServicePage: any;
    private textAssert: TextAssert;

    constructor(private page: Page) {
        this.textAssert = new TextAssert();
        this.titleHomePage = this.page.locator("//h1/span[text()='Home']");
        this.titleServicePage = this.page.locator('//h1/span[text()="Service"]');
        // this.iconAppLauncher = this.page.locator('//span[@title="Setup"]/ancestor::div[2]/child::div');
        this.iconAppLauncher = this.page.getByText('App LauncherSetup');
        this.appService = this.page.locator('//p[text()="Service"]');
    }

    async verifyHomePageTitleVisibility() {
        await this.textAssert.expectTextToBeVisible(this.titleHomePage);
        logger.info("Verified home page");
    }

    async clickAppLaunchIcon(){
        await this.iconAppLauncher.click();
        logger.info("Clicked app launch icon");
    }

    async clickServiceApp(){
        await this.appService.click();
        logger.info("Clicked service app from app launcher dropdown");

        const servicePage = new ServicePage(this.page);
        return servicePage;
    }

    async verifyServicePageTitleVisibility() {
        await this.textAssert.expectTextToBeVisible(this.titleServicePage);
        logger.info("Verified service page title");
    }

}
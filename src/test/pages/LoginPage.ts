import {expect} from '@playwright/test';
import {divya} from '../utils/pageFixture';
import PageObjects from './PageObjects';



export default class LoginPage extends PageObjects {


  async goto(url: string) {
    await divya.page.goto(url);
    await divya.page.waitForLoadState('domcontentloaded');
}

  async enterUserEmail(email:string) {
    await expect.soft(divya.page.locator(this.Elements.userEmail)).toBeVisible();
    await this.emailField.fill(email);
  }

  async enterUserPassword(password:string) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.enterUserEmail(email);
    await this.enterUserPassword(password);
    await this.clickLoginButton();
    await expect.soft(this.successMessage).toBeVisible();
    await expect.soft(this.signOutButton).toBeVisible();
  }

  async signOut() {
    await this.signOutButton.click();
    await expect.soft(this.successMessage).toBeVisible();
    await expect.soft(this.emailField).toBeVisible();
  }

}
    
    import { type Page, type Locator} from '@playwright/test';
    import {divya} from '../utils/pageFixture';
    

   export default class PageObjects{
    
    Elements = {

        userEmail: 'input#userEmail',
        userPassword: 'input#userPassword',
        loginButton: 'button#login',
        signOutButton: 'button:has-text("Sign Out")'

    }
    
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly signOutButton: Locator;
    readonly successMessageBox: Locator;
    readonly successMessage: Locator;


    constructor(page: Page) {

        divya.page = page;
        this.emailField = divya.page.locator('#userEmail');
        this.passwordField = divya.page.getByRole('textbox', { name: 'Passsword' });
        this.successMessageBox = divya.page.getByRole('heading', { name: 'Account Created Successfully' });
        this.successMessage = divya.page.locator('app-register');
        this.loginButton = divya.page.locator('#login');
        this.signOutButton = divya.page.getByRole('button', { name: 'Sign Out', exact: true });
    }


}
/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductPage } from "../../support/pageObjects/productsPage";

describe('Validarea functionalitatii de login', ()=>{

    let loginPage = new LoginPage();
    let productsPage = new ProductPage();

    it('login cu credentiale corecte',()=>{
        cy.visit('https://www.saucedemo.com/');
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        productsPage.cartButtonExists();
    })

    it.skip('logare cu credentiale gresite', ()=>{
        // cy.visit('https://www.saucedemo.com/');
        // loginPage.enterUsername('standard_user');
        // loginPage.enterPassword('secret_sauce_gresita');
        // loginPage.clickLoginButton();

        cy.loginToSauceDemo('standard_user', 'secret_sauce_gresita')
        loginPage.errorMessageExists()

    })
})
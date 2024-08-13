/// <reference types="cypress" />

import { LoginPage } from "../../support/pageObjects/loginPage";
import { ProductPage } from "../../support/pageObjects/productsPage";

describe('Validare adaugare in cos', ()=>{

    let loginPage = new LoginPage()
    let productsPage = new ProductPage();

    // beforeEach(()=>{
    //     cy.visit('https://www.saucedemo.com/');
    //     loginPage.enterUsername('standard_user');
    //     loginPage.enterPassword('secret_sauce');
    //     loginPage.clickLoginButton();
    // })

    it('adaugare element in cos', ()=>{
        cy.loginToSauceDemo('standard_user', 'secret_sauce')
        productsPage.addBackPackToCart();
        productsPage.verifyBackPackRemoveButtonAppears();
        productsPage.elements.cartBadge().should('have.text', '1');
    })
})
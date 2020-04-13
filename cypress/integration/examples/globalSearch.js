/// <reference types="cypress" />
import {
    navToApp,
    userName
} from './utilsLogin';
const globalSearch = require('./utilGlobalSearch');


describe('Navigate to YourLogo app and login with your credentials', () => {
    it('Navigate to website', () => {
        navToApp();
    });

    it('Given customer: should login using valid login and password', () => {
        userName();
    })

    it('When customer: search random womens items in global search box', () => {
        globalSearch.womenSection();
    })
    it('Then:assert if existed items will return result >0', () => {
        globalSearch.assertResult()
    })

    it('When customer: search random dresses items in global search box', () => {
        globalSearch.dressesSection();
    })
    it('Then:assert if existed items will return result >0', () => {
        globalSearch.assertResult()
    })

    it('When customer: search random tshirt items in global search box', () => {
        globalSearch.tshirtSection();
    })
    it('Then: assert if existed items will return result >0', () => {
        globalSearch.assertResult()
    });
});
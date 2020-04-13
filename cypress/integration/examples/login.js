/// <reference types="cypress" />
import {navToApp,userName, createNewAcc, generatePerInfo} from './utilsLogin';

describe('Navigate to YourLogo app and login with your credentials',()=>{
    beforeEach(navToApp);

    it('should login using valid login and password',()=>{
          userName();
          createNewAcc();
          generatePerInfo();
    })
})
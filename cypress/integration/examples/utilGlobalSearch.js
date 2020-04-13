/// <reference types="cypress" />

const globalSearch = function newGlobalSearch() {
  //searches for existed women items
  this.womenSection = function newWomenSectionSearch() {
    var mainPageTitle = cy.get("#header_logo").should("be.visible");
    var womenItems = [
      "T-shirts",
      "Blouses",
      "Casual-Dresses",
      "Evening-Dresses",
      "Summer-Dresses",
    ];
    var womenSearch = womenItems[Math.floor(Math.random() * womenItems.length)];
    var searchBox = cy
      .get("#search_query_top")
      .should("be.visible")
      .clear()
      .type(womenSearch);
    var searchIcon = cy.get("#searchbox > .btn").should("be.visible").click();
  };

  //searches for existed dresses items
  this.dressesSection = function newWomenSectionSearch() {
    const mainPageTitle = cy.get("#header_logo").should("be.visible");
    var dressesItems = [
      "CASUAL-DRESSES",
      "EVENING-DRESSES",
      "SUMMER-DRESSES",
      "casual-dresses",
      "evening-Dresses",
      "Summer-Dresses",
    ];
    var dressesSearch =
      dressesItems[Math.floor(Math.random() * dressesItems.length)];
    var searchBox = cy
      .get("#search_query_top")
      .should("be.visible")
      .clear()
      .type(dressesSearch);
    var searchIcon = cy.get("#searchbox > .btn").should("be.visible").click();
  };

  //searches for existed T-SHIRTS items
  this.tshirtSection = function newtshirtSectionSearch() {
    const mainPageTitle = cy.get("#header_logo").should("be.visible");
    var tshirtItems = [
      "t-shirts",
      "T-SHIRTS",
      "T-shirts",
      "t-SHIRTS",
      "TSHIRTS",
      "tSHIRTS",
    ];
    var tshirtSearch =
      tshirtItems[Math.floor(Math.random() * tshirtItems.length)];
    var searchBox = cy
      .get("#search_query_top")
      .should("be.visible")
      .clear()
      .type(tshirtSearch);
    var searchIcon = cy.get("#searchbox > .btn").should("be.visible").click();
  };

  //1 result has been found. Result has to be more than 0
  this.assertResult = function positiveAssertResult() {
    cy.get(".page-heading span").then((numResult) => {
      let a = numResult.text();
      let b = a.replace(/^\D+/g, "");
      let c = b.substring(0, 1);
      let d = parseInt(c);
      expect(d).not.eq(0);

      //assert how many items showing after search
      cy.get(".top-pagination-content > .product-count").then(
        (numOfItemsShowing) => {
          let k = numOfItemsShowing.text();
          let l = k.replace(/^\D+/g, "");
          let m = l.substring(6, 4);
          let n = parseInt(m);
          expect(n).to.eq(d);
          // cy.log(n)
        }
      );
    });
    
    //assert search box returns exact items in title text
    cy.get(".page-heading span").then((titleResult) => {
      let a = titleResult.text();
      // cy.log(a)
      cy.get('input[placeholder="Search"]')
        .invoke("val")
        .then((sometext) => {
          expect(a).contain(sometext);
          // cy.log(sometext)
        });
    });
  };
};
module.exports = new globalSearch();

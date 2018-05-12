var assert = require('assert');

describe('Test Google Home Page', function() {
    it('Should have the right title - Google', function () {
        browser.url('https://www.google.com');
	browser.waitForVisible("#hplogo");
        var title = browser.getTitle();
        console.log(title);
        assert.equal(title, 'Google');
    });

    it('should have logo', function(){
	browser.url('https://www.google.com');
        assert.equal(browser.isVisible("#hplogo"), true);
    });

    it('should have search box', function(){
        browser.url('https://www.google.com');
        assert.equal(browser.isVisible("#lst-ib"), true);
    });

    it('should have Feeling Lucky button', function(){
        browser.url('https://www.google.com');
        assert.equal(browser.isVisible("#gbqfbb"), true);
    });

    it('should have Sign In button', function(){
        browser.url('https://www.google.com');
        assert.equal(browser.isVisible("#gb_70"), true);
    });
});

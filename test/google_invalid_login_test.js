var assert = require('assert');

describe('Test Invalid Login', function() {

    it('should have Sign In button', function(){
	var elem = "#gb_70";
        browser.url('https://www.google.com');
        assert.equal(browser.isVisible("#gb_70"), true);
    });

    it('Should open login page', function(){
	var signLink = "#gb_70";
        browser.waitForVisible(signLink);
	browser.click(signLink);

	var username = "#identifierId";
	browser.waitForVisible(username);
        assert.equal(browser.isVisible(username), true);
    });

    it('Should accept invalid username', function() {
	var username = "#identifierId";
	var nextbtn = "#identifierNext";
	var password = "[name='password']";
	browser.setValue(username, "johndoe665566@gmail.com");
	browser.click(nextbtn);
	browser.waitForVisible(password);
	assert.equal(browser.isVisible(password), true);
    });

    it('Should accept password', function() {
	var password = "[name='password']";
	var nextbtn = "#passwordNext";
	var errorfield = "[jsname='B34EJ']";
	browser.setValue(password, "abracadabra");
	browser.click(nextbtn);
	browser.waitForVisible(errorfield);
	var err = browser.getText(errorfield);
	assert.equal(err[0], "Wrong password. Try again or click Forgot password to reset it.");
    });
});

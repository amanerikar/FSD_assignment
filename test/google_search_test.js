var assert = require('assert');

describe('Fullscreen direct search results', function() {
    it('Should have the right title - Google', function () {
        browser.url('https://www.google.com');
	browser.waitForVisible("#hplogo");
        var title = browser.getTitle();
        assert.equal(title, 'Google');
    });

    it('Should trigger search using text', function(){
        var searchbox = "#lst-ib";
	var searchtext = 'fullscreen direct';
	var form = "#tsf";
	var resultStat = "#resultStats";
        browser.setValue(searchbox, searchtext);
	browser.submitForm(form);
	browser.waitForVisible(resultStat);
        assert.equal(browser.isVisible(resultStat), true);
    });

    it('Should have more than 5 results', function() {
	var rc = "div.g";
	var elements = browser.elements(rc);
	assert.ok(elements.value.length > 5);
    });

    it('Should have fullscreen direct as first link', function() {
	var rc = "div.g";
	var elements = browser.elements(rc);
	var first_link = elements.value[0].getAttribute('a', 'href')[0];
	assert.equal(first_link, "https://www.fullscreendirect.com/");
    });
});

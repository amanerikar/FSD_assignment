export default class GoogleHomePage {
	get logo() {return browser.element("#hplogo");}
	get searchBox() {return browser.element("#lst-ib");}
	get feelingLuckyBtn() {return browser.element("#gbqfbb");}
	get signInBtn() {return browser.element("#gb_70");}

}

module.exports = new GoogleHomePage();

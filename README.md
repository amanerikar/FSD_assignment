WebDriverIO install
-----------------------
1. Install node.js and npm from https://nodejs.org/en/
	a. create project dir
	b. npm init
2. Download latest selenium standalone server :
	curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.5.3.jar
3. Download latest geckodriver :
	curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-linux64.tar.gz | tar xz
4. Start standalone server :
	java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.5.3.jar
5. Install webdriverio : npm install webdriverio
6. Create wdio config : ./node_modules/.bin/wdio config
	a. created test specs in /test/*/*.js 
7. Create folder tests : mkdir tests
8. Add test.js files and run <npm test>


NOTE:
-----
I wanted to implement the Page Object Model pattern for the tests. Here is what I tried:
a. Created a class GoogleHomePage (google.home.page.js) to store the locators for Google Home page.
b. This would have been used with google_home_test.js to test google home page.
c. I tried to export the class and require it in test file but ran into issues and was not able to solve them.

I have included google.home.page.js file (which would have been used to return elements).

Currently, there are 3 test files:
1. google_home_test.js to test the elements on home page
2. google_invalid_login_test.js to test invalid login
3. google_search_test.js to test search results

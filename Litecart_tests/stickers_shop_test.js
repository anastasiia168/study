const BrowserFactory= require("../utils/browserFactory")
const {Key} = require("selenium-webdriver");
global.browserName= "chrome";
global.driver=BrowserFactory.create (browserName);

const {By, until} = require ("selenium-webdriver");
Keys = driver.Key,
driver.get("http://localhost/litecart/admin/");
const assert= require("assert");
driver.manage().setTimeouts( { implicit: 4000 } );
    it
    ("Login", async () => {
        await   driver.get("http://localhost/litecart/en/");
        await  driver.findElement(By.name('email')).sendKeys('naska121990@mail.ru');
        await  driver.findElement(By.name('password')).sendKeys('1111');
        await  driver.findElement(By.name('login')).click();
        driver.findElement( By.css('#box-account > div > ul > li:nth-child(4) ')).click();
    });
 it
("DucksStikers", async () => {
        var ducks = await driver.findElements(By.className("product column shadow hover-light"));
    console.log(ducks.length);
    for(var item of ducks)
    {
        var stickers = await item.findElements(By.css("a.link>div.image-wrapper>div.sticker"));
        console.log(stickers.length);
        assert.ok( stickers.length == 1, 'not 1');
    }

    });


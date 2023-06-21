

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: false,
        args: [
            '--proxy-server=http://proxy.crawlera.com:8010'
        ]
    });
    const page = await browser.newPage();

    await page.setExtraHTTPHeaders({
        'Proxy-Authorization': 'Basic ' + Buffer.from('b520af8565a045ce81b18ed5efa26674:').toString('base64'),
    });
    
    console.log('Opening page ...');
    try {
        const response = await page.goto('https://www.npmjs.com/package/got', {timeout: 180000});
            const headers = response.headers();
            console.log(headers);
    } catch(err) {
        console.log(err);
    }
  
    console.log('Taking a screenshot ...');
    await page.screenshot({path: 'screenshot1.png'});
    await browser.close();
})();


























//---------OLD CODE----------------------


// const puppeteer = require('puppeteer');
// (async () => {
    
//     const browser = await puppeteer.launch({
//         ignoreHTTPSErrors: true,
//         args: [
//             '--proxy-server=proxy.crawlera.com:8010'
//         ]
//     });


//     const page = await browser.newPage();

//     await page.setExtraHTTPHeaders({
//         'Proxy-Authorization': 'Basic ' + Buffer.from('b520af8565a045ce81b18ed5efa26674:').toString('base64'),
//     });
    
//     console.log('Opening page ...');
//     try {
//         // await page.goto("https://www.instagram.com/talha_rafiq123");
//         await page.goto("https://www.npmjs.com/package/got");
//     } catch(err) {
//         console.log(err);
//     }
  
//     console.log('Taking a screenshot ...');
//     await page.screenshot({path: 'screenshot.png'});
//     await browser.close();
// })();
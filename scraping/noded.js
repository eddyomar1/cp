const puppeteer = require('puppeteer');


(async ()=>{
    
    const browswer = await puppeteer.launch({headless: false});
    
    const page = await browswer.newPage();

    await page.goto('https://eddyomar1.github.io/morseTr/');

    // setTimeout(() =>{
   
//  await page.waitFor(5000);
   
    // waitElemenentVisble('#a')
    // await let dom = document.querySelector('#a');
    await page.waitFor(3000);
    await page.evaluate(() => {document.querySelector('#a').value = "h"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "o"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "l"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "a "});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "s"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "o"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "y "});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "u"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "n "});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "b"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "o"});
    await page.waitFor(300);
    await page.evaluate(() => {document.querySelector('#a').value += "t"});


     await page.waitFor(3000);
     await page.evaluate(() => {
      let dol = document.querySelector('#cod');
     dol.click();
    });



    //  await page.evaluate(() => {
    //     // let do = document.querySelector('#a');
    //     // dom.value = "soy un bot"
    //     page.click('#cod');
    //  });



    // await page.waitForSelector('#a');
    // await page.click('#a');

//    // await page.screenshot({path: 'estad.jpg'});
    // },10000);
    // await page.type('#w');


// await browswer.close();

})();


// (async () => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
// //   await page.waitFor(10000);
//   await page.goto('https://www.google.com/search?q=covid&rlz=1C1CHBD_esDO875DO875&oq=covid&aqs=chrome.0.69i59j0i433l4j69i60j69i61j69i60.6111j0j7&sourceid=chrome&ie=UTF-8#wptab=s:H4sIAAAAAAAAAONgVuLVT9c3NMwySk6OL8zJecTozS3w8sc9YSmnSWtOXmO04eIKzsgvd80rySypFNLjYoOyVLgEpVB1ajBI8XOhCvHsYuL2SE3MKckILkksKV7EKptaXJKYcnhtcUlmcmKxQkpqjkJyflF-XmJZZlFpMQCEgcJTjQAAAA');

//   // Get the "viewport" of the page, as reported by the page.
//   const dimensions = await page.evaluate(() => {
//     return {
//       width: document.documentElement.clientWidth,
//       height: document.documentElement.clientHeight,
//       deviceScaleFactor: window.devicePixelRatio
//     };
//   });

//   console.log('Dimensions:', dimensions);

//   await browser.close();
// })();
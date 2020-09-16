describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
})

// describe('Website', function () {
//     it('should be alive', function () {
//         browser.url(`/`)
//         const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')

        
//         if(!img.isExisting()) {
//             throw new Error('Website should be opened, and logo displayed');
//         }
//     })
// })
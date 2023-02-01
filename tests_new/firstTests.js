describe('Navigating to Job posting page', () => {
    it('Load the website', () => {
        browser.url('https://nuws.co/jobs')
        browser.pause(3000)
        expect(browser).toHaveUrl('https://jobs.numadic.com/jobs/Careers')
        expect(browser).toHaveTitle('Jobs at Careers')
    })

    it('Get Element text' , () => {
        //const text = $('h2').getText()
        const element = $('h2')
        //h2.waitForExist()
        expect(element).toHaveText("JOIN OUR CREW")
       })
    
       it('Open Filter By dropdown' , async () => {

        const dropdown = await $('div.lyteDummyEventContainer')
        await dropdown.selectByVisibleText('Engineering')
        const heading = $('h4')
        expect(heading).toHaveText("Engineering")
        const linkForQAJob = await $('#cw-group-Engineering > div > ul > career-website-job-listing-layout1:nth-child(5) > li > h3')
        expect(linkForQAJob).toHaveLink("https://jobs.numadic.com/jobs/Careers/53264000000375218/QA-Engineer?source=CareerSite")
        await linkForQAJob.click()
    })

    it('Job description page', () =>{
        expect(browser).toHaveUrl('https://jobs.numadic.com/jobs/Careers/53264000000375218/QA-Engineer?source=CareerSite')
        expect(browser).toHaveTitle('Numadic Iot Pvt. Ltd. - QA Engineer in ')
    })

    it('Interested button should be present. Click on it' ,  async () =>{
        const button = await $('#detail-page-applybtn > button')
        expect(button).toBeVisible()
        await button.click()
        browser.saveScreenshot("finalScreenshot.png")
    })

    })    
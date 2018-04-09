const google = require('./google');

describe('Google Auth error', () => {
    it('should sign in google', () => {
        browser.url('https://www.doodle.com');
        $('.d-signup').click();
        $('.third-party-btn.google').click();
        browser.pause(2000);
        browser.switchTab(browser.windowHandles().value[1]);
        $('#identifierId').waitForVisible(5000);
        $('#identifierId').setValue('test090418@gmail.com');
        $('#identifierNext').click();
        $('input[name="password"]').waitForVisible(5000);
        $('input[name="password"]').setValue('Autotest');
        $('#passwordNext').click();
        browser.pause(2000);
        browser.switchTab(browser.windowHandles().value[0]);        

        browser.url('http://doodle.com/account#calendars');
        $('.calendar-system.google').click();
        browser.pause(2000);
        browser.switchTab(browser.windowHandles().value[1]);
        $('#identifierLink').click();
        $('#identifierId').waitForVisible(5000);
        $('#identifierId').setValue('test090418@gmail.com');
        $('#identifierNext').click();
        $('input[name="password"]').waitForVisible(5000);
        $('input[name="password"]').setValue('Autotest');
        $('#passwordNext').click();

        //Expect the google auth window is not visible.
        browser.pause(60000);
    });
});
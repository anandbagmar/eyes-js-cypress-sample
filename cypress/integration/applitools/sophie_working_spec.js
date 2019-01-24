import '@applitools/eyes.cypress/commands'

describe('Hello world', () => {
    it('works', () => {

        cy.eyesOpen({
            appName: 'Hello World!',
            testName: 'My first JavaScript test!',
            browser: [{ width: 800, height: 600 }, {deviceName: "Nexus 4", screenOrientation: "landscape"}]
        });
        cy.visit('https://applitools.com/helloworld');
        cy.eyesCheckWindow('Main Page');
        cy.get('button').click();
        cy.eyesCheckWindow('Click!');
        cy.eyesClose();
    });
});
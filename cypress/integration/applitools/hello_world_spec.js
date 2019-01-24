describe('Hello World Test', function () {
    it('Launches the Hello World page', function () {
        cy.eyesOpen({
            appName: 'New World!',
            testName: 'Hello World Cypress!',
            browser: [{ width: 800, height: 600 }, {deviceName: "Nexus 4", screenOrientation: "landscape"}],
            showLogs: true,
            batchName: 'cypressTest',
            matchLevel: 'Layout',
            concurrency: 100
        });

        cy.visit('https://applitools.com/helloworld');
        cy.eyesCheckWindow('Hello');
        cy.title().should('include', "Applitools");
        cy.get('[style="margin-bottom: 0;"] > a').click();
        // cy.eyesCheckWindow("diff-1");
        cy.get('button').click();
        // cy.eyesCheckWindow("Click!");
        cy.eyesClose();
    })
});
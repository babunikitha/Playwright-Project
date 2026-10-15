export class HomePage {

    constructor(page) {
        this.page = page;

        this.addPropertyLink = page.getByRole('link', {name: 'Add Property'});

        this.propertyLabel = page.locator('#proplabel');
    }

    async clickAddProperty() {
        await this.addPropertyLink.click();
    }

    async enterPropertyLabel(label) {
        await this.propertyLabel.fill(label);
    }
}
export class LoginPage {

    constructor(page) {
        this.page = page;
        this.username = page.locator('#ulogin');
        this.password = page.locator('#upass');
        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });
    }

    async openLoginPage() {
        await this.page.goto(
            'https://keralaproperty.in/member/login/'
        );
    }

    async enterUsername(email) {
        await this.username.fill(email);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}
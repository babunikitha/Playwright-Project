export class LoginPa{
    constructor(page){
        this.page=page
        this.userNameField=page.locator('#ulogin')
        this.passwordField=page.locator('#upass')
        this.LoginBtn=page.locator('#sub_logbtn')
    }
    async setValues(userName,passWord){
        await this.userNameField.fill(userName)
        await this.passwordField.fill(passWord)
    }

    async btnClick(){
        await this.LoginBtn.click()
    }

    async titleVerification(){
        return await this.page.title()

    }
}
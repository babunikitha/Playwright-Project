import {test,expect}from '@playwright/test'
import{LoginPa} from '../../Pagefolder/Loginpage.js'

test('kpLogin',async({page})=>{
    await page.goto('https://keralaproperty.in/member/login/')
    const login=new LoginPa(page)
    await login.setValues('nikkibabu06041997@gmail.com','Gmail@may172016')
    await login.btnClick()
    const title=await login.titleVerification()
    expect(title).toContain('Post your Property - Login | Keralaproperty')
    await page.waitForTimeout(2000)
})
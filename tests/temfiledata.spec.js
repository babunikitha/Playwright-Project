import{test} from '@playwright/test'
import dataTempVar from '../Util/data.json'

//dataTempVar is a varaiable name and that was imported from a json file ie data.json file and the .fill(varname denoted in the import area.datafields in the jsonfile)
test('kerala logon',async({page})=>{
    await page.goto('https://keralaproperty.in/member/login/')
    const userN=page.locator('#ulogin')
    await userN.fill(dataTempVar.username)
    const pwrD=page.locator('#upass')
    await pwrD.fill(dataTempVar.password)
    await page.locator('#sub_logbtn').click()
})
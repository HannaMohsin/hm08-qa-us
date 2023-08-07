const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', async () => {
// 1. Setting the address
    it('should set the address', async () =>{
        await browser.url(`/`)
        const fromField = await $(page.fromField);
        const toField = await $(page.toField);
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect(fromField).toHaveValue('East 2nd Street, 601');
        await expect(toField).toHaveValue('1300 1st St');  
     })
// 2. Selecting Supportive plan
    it('should select supportive plan' , async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');   
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlan.waitForDisplayed();
        await supportivePlan.click();
        await expect(supportivePlan).toBeExisting();
     })
// 3. Filling in the phone number
    it ('should fill in the phone number', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })
// 4. Adding a credit card
    it ('should add credit card', async () =>{
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');   
        // waiting for payment button to appear and click on page
        const paymentMethod = await $(page.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();
        await expect(paymentMethod).toBeDisplayed();

       //Click on credit card. Click on Add Card
        const addCard = await $(page.addCard);
        await addCard.waitForDisplayed();
        await addCard.click();
        await expect(addCard).toBeExisting();

      //Card Number field is displayed.
	const cardNumberField = await $(page.cardNumberField);
	await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue('1234567812345678');
        await expect(cardNumberField).toHaveValue('1234567812345678');

       //CVC field is displayed. Enter 12 in CVC
	const cvc = await $(page.cvc);
        await cvc.waitForDisplayed();
        await cvc.setValue('12');
        await expect(cvc).toHaveValue('12');
	
	//Click on strip below Card number field to activate link button
	const cardStrip = await $(page.cardStrip);
	await cardStrip.waitForDisplayed();
	await cardStrip.click();      
        await expect(cardStrip).toBeDisplayed(); 

       //Click on link button to save 
	const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        await expect(linkButton).toBeExisting();
        //Click close
	const closeButton = await $(page.closeButton);
        await closeButton.waitForDisplayed();
        await closeButton.click();
        await expect(closeButton).toBeExisting();
})
    it ('Should write a message to the driver', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');   
        //Entering message
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('message');
        await expect(messageField).toHaveValue('message');
})

// 5. Ordering a Blanket and handkerchiefs
    it ('Should toggle Blankets and handkerchiefs', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        const supportivePlan = await $(page.supportivePlan);
	await supportivePlan.waitForDisplayed();
        await supportivePlan.click();
        await expect(supportivePlan).toBeExisting();
   //Blanket and handkerchief order 
   const orderReq = await $(page.orderReq);
   await orderReq.waitForDisplayed();
   await expect(orderReq).toBeDisplayed();
   const blanketAndHankey = await $(page.blanketAndHankey);
   await blanketAndHankey.waitForDisplayed();
   await blanketAndHankey.click();
   await expect(blanketAndHankey).toBeDisplayed();
    })

// 6. Ordering 2 Ice creams
    it ('Should order 2 ice creams', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        const supportivePlan = await $(page.supportivePlan);
	await supportivePlan.waitForDisplayed();
        await supportivePlan.click();
        await expect(supportivePlan).toBeExisting();
// add 2 icecreams
        const iceCreamCounter = await $(page.iceCreamCounter);
	await iceCreamCounter.click();
	await iceCreamCounter.click();
        const iceCreamCount = await $('.counter-value').getText();
        await expect(iceCreamCount).toBe('2');
    })
	
// 7. Car search modal appears
 it ('Should open car search modal', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlan.waitForDisplayed();
        await supportivePlan.click();  
        await expect(supportivePlan).toBeExisting();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('message');
        await expect(messageField).toHaveValue('message');
        const paymentMethod = await $(page.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();
        await expect(paymentMethod).toBeDisplayed();
        const addCard = await $(page.addCard);
        await addCard.click();
        await expect(addCard).toBeExisting();
	const cardNumberField = await $(page.cardNumberField);
	await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue('1234567812345678');
        await expect(cardNumberField).toHaveValue('1234567812345678');
	const cvc = await $(page.cvc);
        await cvc.waitForDisplayed();
        await cvc.setValue('12');
        await expect(cvc).toHaveValue('12');
	const cardStrip = await $(page.cardStrip);
	await cardStrip.waitForDisplayed();
	await cardStrip.click();      
        await expect(cardStrip).toBeDisplayed(); 
	const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        await expect(linkButton).toBeExisting();
	const closeButton = await $(page.closeButton);
        await closeButton.waitForDisplayed();
        await closeButton.click();
        await expect(closeButton).toBeExisting();
        const orderReq = await $(page.orderReq);
        await orderReq.waitForDisplayed();
        await expect(orderReq).toBeDisplayed();
        const blanketAndHankey = await $(page.blanketAndHankey);
        await blanketAndHankey.waitForDisplayed();
        await blanketAndHankey.click();
       //open car order modal
       const orderButton = await $(page.orderButton);
       await orderButton.click();
       await expect(orderButton).toBeDisplayed();
       const carSearchModal = await $(page.carSearchModal);
       await carSearchModal.waitForDisplayed();
       await expect(carSearchModal).toBeDisplayed();
    })
	
// 8. Driver info appears
 it ('Should should display driver info', async () => {
        await browser.url('/');
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlan = await $(page.supportivePlan);
        await supportivePlan.waitForDisplayed();
        await supportivePlan.click(); 
        await expect(supportivePlan).toBeExisting(); 
        const phoneNumber = helper.getPhoneNumber("+1");
        const phoneNumberModal = await $(page.phoneNumberModal);
        await page.submitPhoneNumber(phoneNumber);
        await expect(phoneNumberModal).toBeExisting();
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting(); 
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('message');
        await expect(messageField).toHaveValue('message');
        const paymentMethod = await $(page.paymentMethod);
        await paymentMethod.waitForDisplayed();
        await paymentMethod.click();
        await expect(paymentMethod).toBeDisplayed();
        const addCard = await $(page.addCard);
        await addCard.waitForDisplayed();
        await addCard.click();
        await expect(addCard).toBeExisting();
	const cardNumberField = await $(page.cardNumberField);
	await cardNumberField.waitForDisplayed();
        await cardNumberField.setValue('1234567812345678');
        await expect(cardNumberField).toHaveValue('1234567812345678');
	const cvc = await $(page.cvc);
        await cvc.waitForDisplayed();
        await cvc.setValue('12');
        await expect(cvc).toHaveValue('12');
	const cardStrip = await $(page.cardStrip);
	await cardStrip.waitForDisplayed();
	await cardStrip.click();
        await expect(cardStrip).toBeDisplayed();       
	const linkButton = await $(page.linkButton);
        await linkButton.waitForDisplayed();
        await linkButton.click();
        await expect(linkButton).toBeExisting();
	const closeButton = await $(page.closeButton);
        await closeButton.waitForDisplayed();
        await closeButton.click();
        await expect(closeButton).toBeExisting();
        const orderReq = await $(page.orderReq);
        await orderReq.waitForDisplayed();
        await expect(orderReq).toBeDisplayed();
        const blanketAndHankey = await $(page.blanketAndHankey);
        await blanketAndHankey.waitForDisplayed();
        await blanketAndHankey.click();
        await expect(blanketAndHankey).toBeDisplayed();
        //driver info
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        await expect($('.smart-button-main')).toBeExisting();
        await expect($('.order-body')).toBeExisting();
    })
})
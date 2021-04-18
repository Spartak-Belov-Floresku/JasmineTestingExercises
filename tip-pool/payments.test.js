describe("Checking synchronizing all payment functions", ()=>{
    beforeEach(function () {
        billAmtInput.value = 35;
        tipAmtInput.value = 3;
        paymentId = 1;
        curPayment = {};
    });
    it('create obj in createCurPayment()',()=>{
        curPayment = createCurPayment();
        expect(curPayment.tipAmt).toContain(3);
    });
    it('Create table row element and pass to appendTd with input value appendPaymentTable()',()=>{
        appendPaymentTable(curPayment);
        expect(paymentTbody.children.length).toBe(1)
    });
    it('Create table row element and pass to appendTd with calculated sum of all payment updateSummary()',()=>{
        updateSummary();
        expect(summaryTds.length).toBe(3)
    });

    it('Add a curPayment object to allPayments, update html and reset input values submitPaymentInfo',()=>{
        submitPaymentInfo;
        expect(typeof(allPayments)).toBe('object')
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = '';
        paymentTbody.innerHTML = '';
        summaryTds.forEach(el => {el.remove()});
    });
});
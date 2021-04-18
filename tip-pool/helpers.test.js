describe("Check logic of calculation and a newly created tr element value", ()=>{
    beforeEach(function () {
        allPayments['tipPercent'] = {"tipPercent":6};
        newTr = document.createElement('tr');
    });

    it("check correct value sumPaymentTotal()", () => {
        expect(sumPaymentTotal('tipPercent')).toBe(6);
    });

    it("check calculation of calculateTipPercent()", () => {
        expect(calculateTipPercent(30, 5)).toEqual(17);
    });

    it("insert value in tr tag and check it appendTd()", () => {
        appendTd(newTr, 56)
        expect(newTr.innerText).toContain("56");
    });

    it("check for value and if it exeists appendDeleteBtn()", () => {
        appendDeleteBtn(newTr)
        expect(newTr.firstElementChild.innerText).toContain("X");
    });

    afterEach(function() {
        Object.keys(allPayments).forEach( key => { delete allServers[key] });
        newTr.remove();
    });
});
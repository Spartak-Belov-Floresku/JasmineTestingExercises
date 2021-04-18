it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({"amount":'1000',"years":'1',"rate":'5'})).toEqual('85.61');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    expect(calculateMonthlyPayment({"amount":'1000',"years":'1',"rate":'5'})).toBeCloseTo(85.61);
  });
  
  afterEach(()=>{})

describe("courseCost function", function () {

    it("should be able to calculate the course cost with discount ", function () {
       
        assert.deepEqual({
            amountDue: 5394,
            code: "r1",
            cost: 8990,
            description: "Intro to PHP course",
            discount: 3596,
            status: "success"
        }, courseCost("p2", "2023-04-20"))

    });


    it("should be able to return different price for each course ", function () {
        
        assert.deepEqual({
            amountDue: 5394,
            code: "r1",
            cost: 8990,
            description: "Intro to PHP course",
            discount: 3596,
            status: "success"
        }, courseCost("p2", "2023-04-20"))

    });

    it("should be able to return invalid when dates are entered incorrectly ", function () {
        assert.deepEqual({
            amountDue: 5394,
            code: "r1",
            cost: 8990,
            description: "Intro to PHP course",
            discount: 3596,
            status: "success"
        }, courseCost("p2", "2023-04-20"))
       
    });



})
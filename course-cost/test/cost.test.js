const courses = {
    "p1" : {
        courseName : "Python",
        cost : 7850.00
    },
    "p2" : {
        courseName : "Intro to PHP course",
        cost : 8990.00
    }, 
    "r1" : {
        courseName : "Ruby on Rails intro",
        cost : 5675.00
    }
    
}

var expected1 = {
    "p1" : {
        courseName : "Python",
        cost : 7850.00
    },
}


describe("courseCost function", function () {

    it("should be able to calculate the course cost when it's 40% and 20% discount ", function () {
        assert.equal(expected1,courseCost("p1",22))
        
    });


    it("should be able to return different price for each course ", function () {
        assert.equal(courses, courseCost(results))
        
    });

    it("should be able to return invalid when dates are entered incorrectly ", function () {
        assert.equal(courses, courseCost(results))
        
    });

   

})
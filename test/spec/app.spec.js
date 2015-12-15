/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the SantaModel object */

describe("Santa", function() {

  it("Correct current request", function () {
      
      SantaModel.init(requests);
      
      SantaModel.getCurrentRequest();
      
      expect(SantaModel.getCurrentRequest();).toBe(requests[0]);
       
      SantaModel.next();
     expect(SantaModel.getCurrentRequest();).toBe(requests[1]);
      SantaModel.next();
      SantaModel.next();
      SantaModel.next();
     expect(SantaModel.getCurrentRequest();).toBe(null);

    });
    
        
     it("correct pack", function () {

         SantaModel.init(requests);
         
         expect(SantaModel.pack("no");).toBe(1);
    SantaModel.next();
                  expect(SantaModel.pack("yes");).toBe(1);
           expect(SantaModel.pack("no");).toBe(0);

        
    });
    
 
});

describe('pocket calculator test', function(){

  var clear = function(){
    $('#clear').click();
    $('#clear').click();
  };

  describe('basic arithmetic operation', function(){
    
    beforeEach(function(done){
      clear();
      done();
    })

    describe('plus', function(){
      it('1 + 1 should equal 2', function(){
        $('#one').click();
        $('#plus').click();
        $('#one').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('2');
      });
    })

    describe('minus', function(){
      it('7 - 2 should equal 5', function(){
        $('#seven').click();
        $('#minus').click();
        $('#two').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('5');
      });
    });

    describe('multiply', function(){
      it('2 x 3 should equal 6', function(){
        $('#two').click();
        $('#multiply').click();
        $('#three').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('6');
      });
    });

    describe('division', function(){
      it('6 / 2 should equal 3', function(){
        $('#six').click();
        $('#division').click();
        $('#two').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('3');
      });
    });

    describe('multiply twice', function(){
      it('9 x 9 x 6 should equal 486', function(){
        $('#nine').click();
        $('#multiply').click();
        $('#nine').click();
        $('#multiply').click();
        $('#six').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('486');
      });
    });

    describe('multiply twice without equals', function(){
      it('9 x 9 x should equal 81', function(){
        $('#nine').click();
        $('#multiply').click();
        $('#nine').click();
        $('#multiply').click();
        expect($('.row1').html()).to.equal('81');
      });
    });

  });


  describe('clear key test', function(){

    beforeEach(function(done){
      clear();
      done();
    })

    describe('clear', function(){
      it('1 + 1 C 3 should equal 4', function(){
        $('#one').click();
        $('#plus').click();
        $('#one').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('2');
      });
    })

  });


  describe('multiple key press test', function(){

    beforeEach(function(done){
      clear();
      done();
    })
    
    describe('clear', function(){
      it('7 + - / x 5  = should equal 35', function(){
        $('#seven').click();
        $('#plus').click();
        $('#minus').click();
        $('#division').click();
        $('#multiply').click();
        $('#five').click();
        $('#equals').click();
        expect($('.row1').html()).to.equal('35');
      });
    })

  });

});

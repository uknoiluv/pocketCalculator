

describe('pocketCalc basic arithmetic operation', function(){
  beforeEach(function(done){
    $('#clear').click();
    $('#clear').click();
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


});




// fetch the number clicked 
// fetch the operation clicked
// use eval to get the calculated num

(function(){
  $(document).ready(function(){
    
    var stringToBeEval = '';
    var numString = '0';

    $('.row1').html(numString);

    var detectNum = function(num){
      return $('#' + num).on('click', function(){
        if(stringToBeEval.length && isNaN(stringToBeEval[stringToBeEval.length - 1])){
          numString = '';
        }
        numString += $(this).html();
        $('.row1').html(numString * 1);
      });
    };

    var detectOperation = function(op){
      var operation;
      if(op === 'plus'){
        operation = '+';
      }else if(op === 'minus'){
        operation = '-';
      }else if(op === 'multiply'){
        operation = '*';
      }else if(op === 'division'){
        operation = '/';
      }
      console.log('op', op);
      return $('#' + op).on('click', function(){
        if(stringToBeEval.length && isNaN(stringToBeEval[stringToBeEval.length - 1])){
          stringToBeEval = stringToBeEval.slice(0, -1);
        }
        stringToBeEval += numString + operation;
        console.log('stringToBeEval', stringToBeEval);
      });
    };

    $('#equals').on('click', function(){
      stringToBeEval += numString;
      $('.row1').html(eval(stringToBeEval));
    });

    $('#percent').on('click', function(){
      if(+numString > 0){
        numString = numString / 100 + '';
      }
      $('.row1').html(numString);
    });

    $('#plusMinus').on('click', function(){
      if(+numString !== 0){
        numString = -numString;
      }
      $('.row1').html(numString);
    });

    $('#clear').on('click', function(){
      stringToBeEval = '';
      numString = '0';
      $('.row1').html(numString);
    });


    $('#dot').on('click', function(){
      if(stringToBeEval.length && isNaN(stringToBeEval[stringToBeEval.length - 1])){
        numString = '';
      }
      if(numString.indexOf('.') === -1){
        numString *= 1;
        numString += $(this).html();
        console.log('numString', numString);
        $('.row1').html(numString);
      }
    });


    detectNum('one');
    detectNum('two');
    detectNum('three');
    detectNum('four');
    detectNum('five');
    detectNum('six');
    detectNum('seven');
    detectNum('eight');
    detectNum('nine');
    detectNum('zero');

    detectOperation('plus');
    detectOperation('minus');
    detectOperation('multiply');
    detectOperation('division');

  });

}());


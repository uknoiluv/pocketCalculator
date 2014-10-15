
// fetch the number clicked 
// fetch the operation clicked

(function(){
  $(document).ready(function(){
    
    var stringToBeEval = '';
    var numString = '';

    var detectNum = function(num){
      return $('#' + num).on('click', function(){
        numString += $(this).html();
        $('.row1').html(numString);
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
      }else if(op === 'modulo'){
        operation = '%';
      }
      return function(){
        return $('#' + op).on('click', function(){
          return operation;
        });
      };
    };

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


  });

}());


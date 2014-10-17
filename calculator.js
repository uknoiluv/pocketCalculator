
// fetch the number clicked 
// fetch the operation clicked
// use eval to get the calculated num

(function(){
  $(document).ready(function(){
    
    var stringToBeEval = '';
    var numString = '0';
    var opCount = 0;
    var lastOp = '';

    var clearSelected = function(){
      if($('.selected')){
        $('.selected').css('height', '100px');
        $('.selected').css('width', '100px');
        $('.selected').css('border', 'solid 1px black');
        $('.selected').removeClass('selected');
      }
    };

    var commaSeperator = function(str){
      var strArr = (str + '').split('');
      var strArrLen = strArr.length;
      if(strArrLen > 9){
        if((str[0] + '.' + str.slice(1,7)) * 1 === 9.999999){
          return '1e+' + strArrLen;
        }else{
          var pow6 = Math.pow(10, 6);
          return Math.round((str[0] + '.' + str.slice(1,8)) * pow6)/pow6  + 'e+' + (strArrLen - 1);
        }
      }else{
        var k = strArrLen - 3;
        while(k > 0){
          strArr.splice(k, 0, ',');
          k -= 3;
        }
        return strArr.join('');
      }
    };

    var detectNum = function(num){
      return $('#' + num).on('click', function(){
        if(stringToBeEval.length && !isNaN(stringToBeEval[stringToBeEval.length - 1])){
          numString = '';
        }
        numString.length < 9 ? numString += $(this).html() : null ;
        numString = numString * 1 + '';
        $('.row1').html(commaSeperator(numString));
        if($('#clear').html() === 'AC'){
          $('#clear').html('C');
        }
        clearSelected();
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
      return $('#' + op).on('click', function(){
        stringToBeEval += numString + operation;
        lastOp = operation;         
        if(stringToBeEval.length && isNaN(stringToBeEval[stringToBeEval.length - 1]) && isNaN(stringToBeEval[stringToBeEval.length - 2])){
          stringToBeEval = stringToBeEval.slice(0, -2) + stringToBeEval.slice(-1);
          opCount--;
        }else{
          opCount++;
          numString = '';
        }
        if(opCount > 1){
          $('.row1').html(commaSeperator(eval(stringToBeEval.slice(0, -1))));
        }
        clearSelected();
        $(this).css('height', '96px');
        $(this).css('width', '96px');
        $(this).css('border', 'solid 3px black');
        $(this).addClass('selected');
      });
    };
    
    $('.row1').html(numString);

    $('#equals').on('click', function(){
      numString === '' ? stringToBeEval += $('.row1').html() : stringToBeEval += numString;
      console.log('stringToBeEval', stringToBeEval);
      $('.row1').html(commaSeperator(eval(stringToBeEval) + ''));
      console.log('lastOp', lastOp);
      stringToBeEval = eval(stringToBeEval) + lastOp;
      opCount = 0;
      clearSelected();
    });

    $('#percent').on('click', function(){
      if(+numString > 0){
        numString = numString / 100 + '';
      }
      $('.row1').html(commaSeperator(numString));
    });

    $('#plusMinus').on('click', function(){
      if(+numString !== 0){
        numString = -numString;
      }
      $('.row1').html(commaSeperator(numString));
    });

    $('#clear').on('click', function(){
      if($('#clear').html() === 'AC'){
        stringToBeEval = '';
        numString = '0';
        opCount = 0;
        $('.row1').html(commaSeperator(numString));
        clearSelected();
      }else{
        numString = '0';
        $('.row1').html(0);
        $('#clear').html('AC');
      }
    });


    $('#dot').on('click', function(){
      if(stringToBeEval.length && isNaN(stringToBeEval[stringToBeEval.length - 1])){
        numString = '';
      }
      if(numString.indexOf('.') === -1){
        numString *= 1;
        numString += $(this).html();
        $('.row1').html(commaSeperator(numString));
      }
    });

    var arrFunc = function(func, arr){
      for(var i = 0; i < arr.length; i++){
        func(arr[i]);
      }
    };
    arrFunc(detectNum, ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']);
    arrFunc(detectOperation, ['plus', 'minus', 'multiply', 'division'])

  });

}());


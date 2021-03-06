
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
      if(strArrLen > 9 && strArr.indexOf('.') === -1){
        if((str[0] + '.' + str.slice(1,7)) * 1 === 9.999999){
          return '1e+' + strArrLen;
        }else{
          var pow6 = Math.pow(10, 6);
          return Math.round((str[0] + '.' + str.slice(1,8)) * pow6)/pow6  + 'e+' + (strArrLen - 1);
        }
      }else if(strArr.indexOf('.') === -1){
        var k = strArrLen - 3;
        while(k > 0){
          strArr.splice(k, 0, ',');
          k -= 3;
        }
        return strArr.join('');
      }else if(str * Math.pow(10, 8) !== 0 && str * Math.pow(10, 8) < 1){
        var k = 2;
        while(str[k] !== 0){
          k++;
        }
        var num = str.slice(k);
        return num.slice(0, 1) + (num.slice(1, 7) * 1 === 0 ? '' : '.' + num.slice(1, 7)) + 'e-' + (k - 1);
      }else{
        return strArrLen > 9 ? str.slice(0, 10) : str;
      }
    };

    var detectNum = function(num){
      return $('#' + num).on('click', function(){
        if(stringToBeEval.length && !isNaN(stringToBeEval[stringToBeEval.length - 1])){
          numString = '';
        }
        numString.length < 9 ? numString += $(this).html() : null ;
        numString = (numString.indexOf('.') === -1 ? numString * 1 + '' : numString);
        $('.row1').html(commaSeperator(numString));
        if($('#clear').html() === 'AC'){
          $('#clear').html('C');
        }
        clearSelected();
      });
    };

    var detectOperation = function(op){
      var opObj = {plus: '+', minus: '-', multiply: '*', division: '/'};
      return $('#' + op).on('click', function(){
        stringToBeEval += numString + opObj[op];
        lastOp = opObj[op];         
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
      $('.row1').html(commaSeperator(eval(stringToBeEval) + ''));
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


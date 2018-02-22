var PureMask = (function() {
  var _numberToCurrency = function(num, thousandsSeparator, decimalSeparator, currencySymbol) {
    var num = num.toFixed(2).split('.'),
        tempNum = num[0].split(/(?=(?:...)*$)/).join(thousandsSeparator);

    if(tempNum === "NaN"){
      num[0] = currencySymbol + " 0";
    }else{
      num[0] = currencySymbol + " " + tempNum;
    } 
    return num.join(decimalSeparator);
  };

  var _validateFloatKeyPress = function(evt, el) {
    el.value = parseInt( el.value.replace(/[\,\.R\$\s]/g,'') );
  
    if(el.value.length > 2)
    {
      var mtrz = el.value.split('');
      mtrz.splice(el.value.length - 2, 0, '.');
      el.value =  mtrz.join("");
    }

    if(el.value.length == 2)
    {
      el.value = "0." +  el.value ;
    }
    if(el.value.length == 1)
    {
      el.value = "0.0" +  el.value ;
    }
    if(el.value.length == 0)
    {
      el.value = "0.00";
    }
    var type = 'real';
    if(el.dataset.type && el.dataset.type != "")
      type = el.dataset.type;

    if(type === 'real')
      el.value = _numberToCurrency(parseFloat(el.value), '.', ',', 'R$');
    else
      el.value = _numberToCurrency(parseFloat(el.value), ',', '.', '$');
  };

  var init = function() {
    var elements = document.getElementsByClassName('pureMoneyMask');

    for (var i = 0; i < elements.length; ++i) {
      var item = elements[i];  
      item.addEventListener('input', function(evt) {
        _validateFloatKeyPress(evt, this);
      });
    }
  };

  return {
    init: init
  };
})(); 
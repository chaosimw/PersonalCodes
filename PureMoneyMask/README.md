# Pure Money Mask

This is an inplementation of money formatting using only pure JS. It was developed because the most know plugins for this doesn't work in some Samsung tablets. 
This code has been tested in the following browsers (mobile and desktop).  

- Chrome  
- Internet Explorer  
- Firefox  
- Opera  
- Safari  

## Getting Started  

Download the project and follow the example on index.html  

### Using  

To make the code works on your input, you just need to follow these three steps below:  

1 - Add js reference  
```
<script  src="./PureMaskMoney.js"></script>  
```

2 - Configure your input using the class "pureMoneyMask" and choosing the money type [real or dolar]  
```
<input type="text" class="pureMoneyMask" data-type="real">  
```

3 - Start the lib  
```
<script>  
      (function() {  
        PureMask.init();  
      })();  
  </script>  
```

## Authors  

* **Sérgio Junior** - *Initial work*  

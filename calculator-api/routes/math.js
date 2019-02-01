const express = require('express');
const router = express.Router();

/**
 * takes number1, number2 from the url and adds them.
 */
router.get('/add', function (req, res) {
    var number1 = req.query.number1
    var number2 = req.query.number2    
    var number3 = req.query.number3
    var number4 = req.query.number4
    if (number3 == null) {
    number3 = "0";
    }                          // BONUS CODE
    if (number4 == null) {
    number4 = "0";
    } 
    var count = parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4);
    res.status(200).send(count.toString());
});

router.get('/devide', function (req, res) {
    var number1 = req.query.number1
    var number2 = req.query.number2
    if(number2 === 0 || number2 === '0') {
        res.status(400).send('Congrats, your math just destroyed a city');
    } else {
        var quotient = parseInt(number1) / parseInt(number2);
        res.status(200).send(quotient.toString());
    }
});
router.get('/most', function (req, res) {
    var numbers = req.query.numbers

    if (numbers.length != 4){
        res.status(503).send("Enter the correct amount of numbers")
    } else {
        var highest=numbers[0]
        var count=1
        for (var i=1; i < numbers.length; i++){
            if(numbers[i] == highest){
                count++
            } else if ((numbers[i] == numbers[i-1] || (numbers[i] == numbers[i-2] && i > 1)) && i-1 != 0) {
                highest = numbers[i]
                count=2
            }
        }
        res.status(200).send(highest.toString());
    }
})
/**
 * takes 4 numbers in parameter (number1, number2, number3, number4)
 * returns the highest of the numbers
 */
router.get('/highest', function (req, res) {
    var number1 = parseInt(req.query.number1)
    var number2 = parseInt(req.query.number2)
    var number3 = parseInt(req.query.number3)
    var number4 = parseInt(req.query.number4)

    if(isNaN(number1) || isNaN(number2) || isNaN(number3) || isNaN(number4)) {
        return res.status(503).send('error');
    }

    var highest = number1;

    if(number2 > parseInt(highest)) {
        highest = number2
    }
    if(number3 > parseInt(highest)) {
        highest = number3
    }
    if(number4 > parseInt(highest)) {
        highest = number4
    }

    res.status(200).send(highest.toString());
});

/**
 * returns fibonacchi for a specified number
 */
router.get('/fibonacchi', function (req, res) {
    var number = req.query.number

    if(isNaN(number) || number < 0) {
        res.status(503).send('please enter a valid number');
    }

    var i;
    var fib = []; // Initialize array!

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= number; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1];
    }

    res.status(200).send(fib[number].toString());
});

//export this router to use in our server.js
module.exports = router;

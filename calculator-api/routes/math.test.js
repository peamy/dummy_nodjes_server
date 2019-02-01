const request = require('supertest');
const app = require('../server')

describe('Test the Math functions', () => {

  afterEach(() => {
    app.server.close();
  });

  test('should return 5 because only 2 + 3 equals 5', (done) => {
    request(app).get('/math/add?number1=2&number2=3').then((response) => {
      expect(response.text).toBe("5");
      done();
    });
  });
  //positive test devide
  test('should return 4 because 8 / 2 equals 4', (done) => {
    request(app).get('/math/devide?number1=8&number2=2').then((response) => {
      expect(response.text).toBe("4");
      done();
    });
  });
  //negative test devide
  test('should return error because 8 / 0 is wrong', (done) => {
    request(app).get('/math/devide?number1=8&number2=0').then((response) => {
      expect(response.text).toBe('Congrats, your math just destroyed a city');
      done();
    });
  });

  test('should return error because we do not reduce people to numbers', (done) => {
    request(app).get('/math/add?number1=2&number2=3&number3=Henk&number4=0').then((response) => {
      expect(response.text).toBe("NaN");
      done();
    });
  });

  test('should return 10 because 1 + 2 + 3 + 4 is 10', (done) => {
    request(app).get('/math/add?number1=1&number2=2&number3=3&number4=4').then((response) => {
      expect(response.text).toBe("10");
      done();
    });
  });

  test('should return 9 because 3+3+3+0 = 9', (done) => {
    request(app).get('/math/add?number1=3&number2=3&number3=3').then((response) => {
      expect(response.text).toBe("9");
      done();
    });
  });

  test('should return 8 because -1 + 2 + 3 + 4 is 8', (done) => {
    request(app).get('/math/add?number1=-1&number2=2&number3=3&number4=4').then((response) => {
      expect(response.text).toBe("8");
      done();
    });
  });

    //region highest of 4
  test('should return 10 when highest of 4 is 10', (done) => {
    request(app).get('/math/highest?number1=1&number2=5&number3=6&number4=10').then((response) => {
      expect(response.text).toBe("10");
      done();
    });
  });
  //region highest of 4
  test('should return 10 when highest of 4 is 10', (done) => {
    request(app).get('/math/highest?number1=1&number2=5&number3=6&number4=10').then((response) => {
      expect(response.text).toBe("10");
      done();
    });
  });

  test('should return an error when filling in a string for the 4 highest', (done) => {
    request(app).get('/math/highest?number1=Kees&number2=Koos&number3=6&number4=Henk').then((response) => {
      expect(response.text).toBe("error");
      done();
    });
  });

  test('should return an error when filling in too few parameters for the 4 highest', (done) => {
    request(app).get('/math/highest?number1=2&number2=5&number3=6').then((response) => {
      expect(response.text).toBe("error");
      done();
    });
    });
    //endregion

    //region fibonacchi
    test('should return 0 when asking for fibonacchi 0', (done) => {
      request(app).get('/math/fibonacchi?number=0').then((response) => {
        expect(response.text).toBe("0");
        done();
      });
    });

    test('should return 2 when asking for fibonacchi 3', (done) => {
      request(app).get('/math/fibonacchi?number=3').then((response) => {
        expect(response.text).toBe("2");
        done();
      });
    });

    test('should return 233 when asking for fibonacchi 13', (done) => {
      request(app).get('/math/fibonacchi?number=13').then((response) => {
        expect(response.text).toBe("233");
        done();
      });
    });

    test('should return error when number is -1', (done) => {
      request(app).get('/math/fibonacchi?number=-1').then((response) => {
        expect(response.text).toBe("please enter a valid number");
        done();
      });
    });

    test('should return error when giving a string', (done) => {
      request(app).get('/math/fibonacchi?number=pindakaas').then((response) => {
        expect(response.text).toBe("please enter a valid number");
        done();
      });
    });

  test('should return error message', (done) => {
    request(app).get('/math/most?numbers[0]=1').then((response) => {
      expect(response.text).toBe("Enter the correct amount of numbers");
      done();
    })
  });

  test('should return 2 because it occurs most', (done) => {
    request(app).get('/math/most?numbers[0]=1&numbers[1]=2&numbers[2]=2&numbers[3]=2').then((response) => {
      expect(response.text).toBe("2");
      done();
    })
  });
});
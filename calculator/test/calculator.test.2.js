/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // SET UP: do something before each 'it' test aka unit test
  beforeEach(function() {
    var fixture = 
    '<div id="fixture">' +
      '<input id="x" type="text">' + 
      '<input id="y" type="text">' + 
      '<input id="add" type="button" value="Add Numbers">' +
      'Result: <span id="result" /> ' +
    '</div>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);

    window.calculator.init();
  });

  // TEAR DOWN: do something after each
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  it('should return 3 for 1 + 2', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('should calculate zero for invalid x value', function() {
    document.getElementById('x').value = "hello";
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should have no value set by default', function() {
    expect(document.getElementById('x').value).toBe('');
    expect(document.getElementById('y').value).toBe('');
  });

  it('should calculate zero for invalid y value', function() {
    
  });

});
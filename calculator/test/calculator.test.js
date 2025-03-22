/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // Inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = `
      <div id="fixture">
        <input id="x" type="text">
        <input id="y" type="text">
        <input id="add" type="button" value="Add Numbers">
        Result: <span id="result"></span>
      </div>
    `;

    document.body.insertAdjacentHTML('afterbegin', fixture);
    window.calculator.init(); // Initialize calculator functionality
  });

  // Remove the HTML fixture from the DOM after each test
  afterEach(function() {
    var fixture = document.getElementById('fixture');
    if (fixture) {
      fixture.remove();
    }
  });

  it('should return 3 for 1 + 2', function() {
    document.getElementById('x').value = '1';
    document.getElementById('y').value = '2';
    document.getElementById('add').click();
    
    expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('should calculate zero for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = '2';
    document.getElementById('add').click();
    
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should calculate zero for invalid y value', function() {
    document.getElementById('x').value = '1';
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

});

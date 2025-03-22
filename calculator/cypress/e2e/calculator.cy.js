describe('Calculator E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });

  it('should add two numbers correctly', () => {
    cy.contains('1').click();
    cy.contains('button', /^\+$/).click();
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('#display').should('have.value', '3');
  });

  it('should subtract two numbers correctly', () => {
    cy.contains('5').click();
    cy.contains('button', /^\-$/).click();
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('#display').should('have.value', '2');
  });

  it('should multiply two numbers correctly', () => {
    cy.contains('4').click();
    cy.contains('*').click();
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('#display').should('have.value', '12');
  });

  it('should divide two numbers correctly', () => {
    cy.contains('8').click();
    cy.contains('button', /^\/$/).click();
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('#display').should('have.value', '4');
  });

  it('should toggle sign correctly', () => {
    cy.contains('5').click();
    cy.contains('+/-').click();
    cy.get('#display').should('have.value', '-5');
    cy.contains('+/-').click();
    cy.get('#display').should('have.value', '5');
  });

  it('should compute square root correctly', () => {
    cy.contains('9').click();
    cy.contains('√').click();
    cy.get('#display').should('have.value', '3');
  });

  it('should calculate percentage correctly', () => {
    cy.contains('5').click();
    cy.contains('0').click(); 
    cy.contains('%').click();
    cy.get('#display').should('have.value', '0.5');
  });

  it('should handle memory functions correctly', () => {

    cy.contains('2').click();
    cy.contains('M+').click();
    cy.contains('ON/C').click();
    cy.contains('MRC').click();
    cy.get('#display').should('have.value', '2');

    cy.contains('1').click();
    cy.contains('M-').click();
    cy.contains('ON/C').click();
    cy.contains('MRC').click();
    cy.get('#display').should('have.value', '1');
  });
});

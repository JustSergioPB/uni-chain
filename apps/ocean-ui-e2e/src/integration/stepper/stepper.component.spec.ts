describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=steppercomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-stepper').should('exist');
  });
});
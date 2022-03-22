describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectcomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-select').should('exist');
  });
});
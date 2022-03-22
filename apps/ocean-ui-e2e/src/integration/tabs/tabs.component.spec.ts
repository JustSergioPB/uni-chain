describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tabscomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-tabs').should('exist');
  });
});
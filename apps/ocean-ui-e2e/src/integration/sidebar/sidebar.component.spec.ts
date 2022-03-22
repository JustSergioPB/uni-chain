describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidebarcomponent--primary&args=config;'));
  it('should render the component', () => {
    cy.get('ocean-sidebar').should('exist');
  });
});
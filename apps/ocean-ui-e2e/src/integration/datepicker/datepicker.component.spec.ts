describe('ocean-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=datepickercomponent--primary'));
  it('should render the component', () => {
    cy.get('ocean-datepicker').should('exist');
  });
});
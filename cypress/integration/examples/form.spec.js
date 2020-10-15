describe("Advanced Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  const nameInput = () => cy.get("input[name=name]")
  const emailInput = () => cy.get("input[name=email]")
  const passwordInput = () => cy.get('input[name=password]')
  const checkbox = () => cy.get('input[type=checkbox]')
  const submitBtn = () => cy.get('button[type=submit]')


  it("Sanity", () => {
      expect(5).to.equal(5)
    })

  it("testing name input", () => {
    nameInput().should("exist")
    nameInput().type('Nathan')
    nameInput().should('have.value', 'Nathan')
  })

  it('testing email input', () => {
    emailInput().should('exist')
    emailInput().type('nathan@nathan.com')
    emailInput().should('have.value', 'nathan@nathan.com') 
  })

  it('testing password input', () => {
    passwordInput().should('exist')
    passwordInput().type('123456')
    passwordInput().should('have.value', '123456') 
  })

  it('testing checkbox', () => {
    checkbox().should('exist')
    checkbox().click()
  })

  it('full test', () => {
      nameInput().type('Nathan')
      emailInput().type('nathan@nathan.com')
      passwordInput().type('123456')
      checkbox().click()
      submitBtn().click()
      checkbox().click()
  })

})

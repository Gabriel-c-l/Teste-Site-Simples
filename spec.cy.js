describe('Teste de Login', () => {
  beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/index.html'); 
  });

  it('Deve exibir a página de login corretamente', () => {
      cy.get('h2').contains('Login');
      cy.get('#username').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('button').contains('Entrar');
  });

  it('Deve preencher o formulário de login e enviar', () => {
      cy.get('#username').type('meuUsuario');
      cy.get('#password').type('minhaSenha');
      cy.get('button').click();

   
      cy.get('h1').should('contain', 'Login realizado com sucesso');
  });

  it('Deve exibir erro para campos vazios', () => {
      cy.get('button').click();
      
   
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Por favor, preencha todos os campos');
      });
  });
});

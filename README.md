# nlw2_omnistack
Trilha Omnistack da Next Level Week #2 onde desenvolvi o projeto fullstack "Proffy".

Organizando a estrutura:
(-) web/README.md: Armazena as informações do projeto. Já existe um readme para o rep.

(-) web/src/App.css e index.css: estilo customizados serão adicionados pelo dev no decorrer do projeto.

(-) web/src/App.test.tsx: não trabalharemos com testes unitários e integrados por enquanto.

(-) web/src/logo.svg: imagem utilizada com placeholder de projetos react.

(-) web/src/servideWorker.ts: utiliza para pwa's (progressive web apps).

(-) web/src/setupTest.ts: utilizado também para testes.

Em web/public manteremos apenas o index.html.

Entendendo a estrutura:
.gitignore: controle de versão git. Configura arquivos e pastas que não queremos fazer backup.

package.json: presente em todos projetos JS. Principais infos do projeto e a listagem das dependencias do projeto. Podemos observar o react-scripts como uma dependencia que possui o webpack e o babel que convertem e tranformam as sintaxe mais avançadas do react e que não são entendidas pelo browser em JS puro.

tsconfig.json: configurações do typescript. Padrão.
package-lock.json: guarde as versões das dependencias.

node-modules: o código das dependencias. Cada dependecia possuí suas dependencias e assim suscetivamente e recursivamente.

Pasta Public: contém o index.html que é o arquivo principal da aplicação. Contém a div root. 

O react é exclusivamente frontend. Criada em tempo de execução e construida a partir do JS.

Pasta Src:
    index.tsx: primeiro arquivo que o react carrega. O metodo Render da lib ReactDOM injeta o </App> dentro da root.

    App.tsx: Principal componente React (funções que retornam html).

Explicando conceitos.

As partes visuais são componentes e permitem a repetição dos códigos (componentização).

Componentes começam com letra maiuscula.
Componentes precisam do import do react.
JSX é JS + XML (HTML).

Propriedade
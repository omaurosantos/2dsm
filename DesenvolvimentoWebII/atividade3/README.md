## Atividade - React Routes

O aplicativo disponível em [React Context e Styled Components](https://github.com/arleysouza/react-context-styled) possibilita ao usuário compor cores usando RGB, HSLA e CMYK. Cada cor é exibida em um componente, sendo os três componentes exibidos na mesma página. 

O objetivo dessa atividade é fazer cada componente RGB, HSLA e CMYK ser roteado para uma URL `/rgb`,`/hsla` e `/cmyk`. Desta forma, será exibido um componente por página, no exemplo a seguir está sendo exibido o componente RGB.

Observação:
- Se o usuário navegar pelas rotas através do menu, os componentes deverão manter os valores dos campos de entrada ao retornar. 

![](https://github.com/arleysouza/react-routes/blob/main/images/front.png)

### Instruções de uso
Todos os pacotes necessários já estão no `package.json`.
```
git clone https://github.com/arleysouza/react-routes.git front
cd front
npm i
npm start
```

### Modificações realizadas no projeto

1. Foi necessário instalar os pacotes 'react-router' e 'react-router-dom' para podermos gerenciar rotas no aplicativo. Vale lembrar que criaremos rotas para componentes;
2. `/src/index.css`: foram adicionados os estilos para remover a formatação padrão de hiperlinks e hiperlinks visitados:
```
/* Remove a formatação padrão de hiperlinks */
a {
  text-decoration: none; /* Remove sublinhado */
  color: inherit; /* Mantém a cor padrão do texto */
}
/* Remove a formatação de hiperlinks visitados */
a:visited {
  color: inherit; /* Mantém a cor padrão do texto */
}
```
3. Criou-se o componente `Logo` na pasta `components`. Esse componente possui a imagem do logo bem como a formatação CSS que foi aplicada usando styled-components. O componente `Logo` será criado na barra de menu;
4. Criou-se o componente `ItemMenu` na pasta `components`. Cada componente será um hiperlink para uma rota. Os componentes `ItemMenu` serão criados na barra de menu;
5. Criou-se a pasta `routes` nela você vai definir as rotas;

### Modificações necessárias no projeto
1. Será necessário criar as rotas `/rgb`,`/hsla` e `/cmyk`, no pacote `routes`, usando a estrutura de marcações `<BrowserRouter>`,`<Routes>` e `<Route>`;
2. A localização do provider - por exemplo, `<RGBProvider>` - determina o seu alcance. Para manter os valores dos campos de entrada quando o usuário navegar de uma rota para outra será necessário colocar `<RGBProvider>` numa posição que envolva as rotas;
3. Será necessário chamar o componente `<Rotas>` no componente `App`. Visto que toda a interface da aplicação estará no componente `Rotas`.

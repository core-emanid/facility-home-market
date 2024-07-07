# Website - Facility Home Market 

- [Website - Facility Home Market](#website---facility-home-market)
  - [Sobre o projeto](#sobre-o-projeto)
  - [Arquitetura](#arquitetura)
    - [Estrutura do código-fonte](#estrutura-do-código-fonte)
  - [Ferramentas](#ferramentas)
    - [Serviços externos](#serviços-externos)
      - [Brevo](#brevo)
        - [Serviço de automatização de campanhas de marketing e disparo de emails. Usado para transmitir mensagens eletrônicas](#serviço-de-automatização-de-campanhas-de-marketing-e-disparo-de-emails-usado-para-transmitir-mensagens-eletrônicas)
    - [Limitações e possíveis problemas](#limitações-e-possíveis-problemas)
      - [Vercel](#vercel)
        - [Servidor de hospedagem](#servidor-de-hospedagem)
      - [Github](#github)
        - [Servidor de armazenamento de repositórios (códigos-fonte)](#servidor-de-armazenamento-de-repositórios-códigos-fonte)
  - [Suporte técnico](#suporte-técnico)
    - [FAQ](#faq)
  - [Referências Técnicas](#referências-técnicas)

## Sobre o projeto
Website oficial da Facility Home Market

## Arquitetura
O sistema foi desenvolvido utilizando ferramentas modernas de desenvolvimento web, detalhadas na seção [Ferramentas]("#Ferramentas"), aplicando conceitos e boas práticas em software, visando facilidade em futuras implementações, alterações, encapsulamento, componentização e maior eficiencia no uso de recursos computacionais dispostos, convertidos ao cliente final na forma de performance e custo mínimo.

O código-fonte do produto final está armazenado de maneira segura em um repositório privado de acesso restrito e hospedado no site [Github]('https://github.com').

O servidor responsável por executar o código-fonte e manter a aplicação disponível está à cargo da [Vercel](''). Toda configuração de domínio, limite de acessos e restrições, bem como tráfego e saúde da aplicação podem ser monitoradas através do Dashboard integrado à plataforma nativa da [Vercel]('') utilizando o acesso da conta-chave.

### Estrutura do código-fonte

O conteúdo dessa seção oferece esclarecimentos técnicos sobre a metodologia e organização aplicadas no projeto, bem como um panorama inicial para compreensão da disposição de ferramentas e suas respectivas configurações.

Por convenção, a lingua-franca na área de desenvolvimento de software em um âmbito global é o inglês, sendo assim, também seguido através das nomenclaturas e estruturas de códigos presentes no código-fonte supracitado, salvo exceções em contextos pontuais, estes relativps ao conteúdo exposto no material oficial de design prototipado da Facility Home Market.

Segue abaixo uma representação visual da estruturação de arquivos e diretórios da versão final desenvolvida, fundamental para compreensão do projeto por outros especialistas da área:

``` bash
Raiz do repositório
├── 1- public
│   ├── 1.1- images
│   │   └── 1.1.1- logo.svg
│   └── 1.2- logo.png
├── 2- src
│   ├── 2.1- @sections
│   │   └── 2.1.1- *.astro
│   ├── 2.2- components
│   │   └── 2.2.2- *.astro
│   ├── 2.3- config
│   │   ├── 2.3.1- email
│   │   │   └── 2.3.1.1- emailConfig.ts
│   │   └── 2.3.2- README.md
│   ├── 2.4- images
│   │   ├── 2.4.1- *.png
│   │   └── 2.4.2- *.svg
│   ├── 2.5- layouts
│   │   └── 2.5.1- BaseLayout.astro
│   ├── 2.6- pages
│   │   ├── 2.6.1- api
│   │   │   └── 2.6.1.1- sendmail.json.ts
│   │   ├── 2.6.2- 404.astro
│   │   └── 2.6.3- index.astro
│   ├── 2.7- utils
│   │   ├── 2.7.1- mail.ts
│   │   └── 2.7.2- products.json
│   └── 2.8- env.d.ts
├── 3- .env.default
├── 4- .gitignore
├── 5- astro.config.mjs
├── 6- package-lock.json
├── 7- package.json
├── 8- README.md
├── 9- tailwind.config.cjs
└── 10- tsconfig.json
```


1- **/public** é onde se concentram os arquivos públicos, não processados pelo framework Astro. Como ícones em svg e png.

2- **/src** é onde se encontra todo o código-fonte do sistema. Seguindo as convenções do Astro framework e demais boas práticas em desenvolvimento de software.

3- **env.default** arquivos '.default' são modelos que contém as chaves de serviços externos à aplicação, contratados e registrados a partir de credenciais de senhas e hashes (códigos de caracteres). Nesse arquivo consta todas as variáveis que precisam ser configuradas em instância remota para que a aplicação funcione da maneira desejada.

4- **gitignore** Git é um software de versionamento, onde é possivel registrar toda a linha do tempo de codificação de um software, bem como organizar implementações desenvolvidas, mesclar, retroceder, enviar e receber atualizações na base de código local e remota, através de serviços como Bitbucket ou Github.Os arquivos listados no gitignore são ignorados por esse sistema de versionamento, portanto só existem em ambiente de desenvolvimento.

5- **astro.config.mjs** arquivo de módulo para configurar partes críticas do framework Astro, como a porta e url vinculadas do projeto, bem como definições globais de caminhos de arquivos locais, adaptadores, extensões como ícones e temas.

6- **package-lock.json** arquivos package-lock são gerados automaticamento ao instalar as dependencias contidas no arquivo package.json. Nele, constam informações especificas sobre a origem das dependencias utilizadas, suas versões e responsáveis por sua manutenção e desenvolvimento.

7- **package.json** package.json é onde está o "sistema nervoso" da aplicação. Nele, todas as ferramentas externas estão detalhadas, bem como suas versões e com o auxilio de um gerenciador de pacotes (como NPM ou YARN) é possível instalar facilmente tudo o que o projeto precisa para funcionar como se deve em ambiente local.

8- **README.md** arquivos README.md são textos em markdown, designados para prover explicações sobre diferentes tópicos dentro do projeto e pasta em que estão inseridos.

9- **tailwind.config.cjs**

10- **tsconfig.json**

## Ferramentas
- Construido com:
  - [Astro](https://astro.build/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [DaisyUI](https://daisyui.com/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Git](https://git-scm.com/)
  - [Markdown](https://www.markdownguide.org/)
  
### Serviços externos
- Serviços externos utilizados:
  - [Brevo](https://www.brevo.com/pt/)
  - [Vercel](https://vercel.com/)
  - [Github](https://github.com/)
  - [Google Maps API](https://www.google.com/maps/)
  
#### Brevo
##### Serviço de automatização de campanhas de marketing e disparo de emails. Usado para transmitir mensagens eletrônicas

A Brevo é a responsável pelo processo do formulário contido no website. É um serviço que gerencia toda a parte de marketing e email dentro de contas associadas. A brevo trabalha com planos e assinaturas, disponibilizando diferentes faixas de limites e serviços a partir de preços variáveis para todo o tipo de uso, desde os mais leves aos mais pesados. No projeto facility, atualmente utilizamos o limite gratuito, que garante **200 envios de emails por dia**. Ao ultrapassar esse limite, novos emails não serão enviados, precisando assim aguardar até a 00h do dia seguinte para que o limite de 200 atualize novamente para o dia vigente.

Claro que, mediante a necessidade e análise de custos, a possibilidade de extensão do limite é uma realidade muito prática. Basta entrar no site da Brevo com o login e senha associados e contratar um novo plano utilizando o cartão de crédito. Nenhuma configuração adicional será necessária dentro do código-fonte do website, visto que é um serviço gerenciado pelo próprio servidor da Brevo.

Outros serviços podem ser encontrados dentro do portal da Brevo, tais como: 
- análise e importação e relatórios de disparos de email (remetente/destinatário)
- gráficos com médias de envios diários e horários
- custo médio (em caso de planos pagos)

### Limitações e possíveis problemas
- 200 envios por dia
- à depender do fluxo, o limite pode ser excedido, suspendendo o serviço pelo restante do dia vigente

Sabendo dos limites do plano vigente, foi desenvolvido um mecânismo no website para previnir que usuários maliciosos enviem múltiplos formulários e, também, que modelos de automações disparem inúmeros envios de forma prejudicial, baseando-se no **timestamp (momento exato)** do últímo envio e **client (método de envio)** do último formulário enviado __com êxito__.

#### Vercel
##### Servidor de hospedagem

A Vercel é a responsável pelo processo de hospedagem do website da Facility. É um serviço que gerencia toda a parte de servidor e disponibilidade da aplicação. A vercel trabalha com planos e assinaturas, disponibilizando diferentes faixas de limites e serviços a partir de preços variáveis para todo o tipo de uso, desde os mais leves aos mais pesados. No projeto facility, atualmente utilizamos o limite gratuito (plano hobby), que garante: 

- Protocolo HTTPS/SSL (certificação de segurança e autenticação de provedor de serviço)
- Firewall para ataques DDoS (afetam a disponibilidade de um site ou aplicação com multiplas requisições fantasmas)
- Otimização de imagens fornecidas através do serviço de hospedagem
- 100GB de download otimizados por mês
- Dashboard integrado com visualização de acessos e gráficos gerados automaticamente com base nas métricas de acessos

Mediante a necessidade e análise de custos, a possibilidade de extensão do limite é uma realidade muito prática. Basta entrar no site da Vercel com o login e senha associados e contratar um novo plano utilizando um cartão de crédito. Nenhuma configuração adicional será necessária dentro do código-fonte do website, visto que é um serviço gerenciado pelo próprio servidor da Vercel.

Outros serviços podem ser encontrados dentro do portal da Vercel, tais como: 
- análise e importação e relatórios de conteúdos mais acessados dentro do site
- gráficos com médias de acessos diários
- monitoramento de limite e histórico da conta

#### Github
##### Servidor de armazenamento de repositórios (códigos-fonte)

O Github é a responsável pelo processo de hospedagem do código-fonte da Facility. É um serviço que armazena, gerencia e disponibiliza todo o acesso ao aspecto técnico do desenvolvimento do projeto. O github é gratuito e o acesso aos outros serviços externos citados se dão, em sua maioria, por intermédio da conta responsável pelo repositório

Dentro do repositório, com a conta responsável ou outra com autorização se pode: 
- desenvolver novas funcionalidades ao site
- recriar instancias em outros serviços e domínios
- integrar o website com outros serviços e redefinir a versão live alterando o código na raiz (main)

## Suporte técnico

Para um diagnóstico de problema relacionado ao serviço prestado, envie um email para **rafaeldvid42+suporte@gmail.com**
- No assunto, especifique: 'Facility Home Market - Suporte'
- No corpo, descreva o problema com o máximo de informações que tiver
- Em até 3 dias úteis receberá uma réplica com a solução encontrada

Para tanto saliento que, segundo o contrato assinado, a cobertura de 6 meses se faz válida em pequenas alterações e afins. Alterações de médio e grande porte são sujeitos a custos adicionais e a prazos variáveis.

Afim de poder efetivar o acesso mais prático dentro das dependencias do projeto, forneci, através da conta-mãe, acesso ao meu perfil, assim consigo efetivar mudanças sob demanda sem ruídos de comunicação. Ao fim do prazo de cobertura de garantia de suporte (6 meses), a cliente fica livre para remover o meu acesso se assim desejar, para fins de segurança.

### FAQ

**Q: Tenho outro desenvolvedor que gostaria de continuar o projeto e/ou avaliar o código. Como funciona?**
**R: Me voluntario para sanar quaisquer duvidas sobre o processo de desenvolvimento, tentei ser o mais colaborativo possivel na criação deste documento, sendo assim a praticidade depende também da expertise do profissional que irá ter acesso ao projeto posteriormente**

**Q: Mandei email e não obtive nenhuma resposta, o que faço?**
**R: Se caso o prazo de 3 dias úteis não tenha sido concretizado, peço por gentileza que aguarde. De outro caso, pode retomar o contato via email novamente. Estou disponível também via Linkedin: https://linkedin.com/in/rdvid**

**Q: Tenho outro projeto em vista, como faço para negociarmos?**
**R: Novos negócios e indicações serão priorizadas via Linkedin: https://linkedin.com/in/rdvid**

## Referências Técnicas
* https://daisyui.com/
* https://www.frontendreference.com/get-started-with-tailwindcss.html
* https://tailwindcss.com/docs/installation
* https://github.com/git-guides
* https://vercel.com/docs/frameworks/astro
* https://docs.astro.build/en/guides/endpoints/
* https://docs.astro.build/en/getting-started/

<h3 align=center>Proudly crafted by:</h2>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://rdvid.tech">
        <img src="https://avatars.githubusercontent.com/u/60834135" alt="Rafael David Github profile pic" width=115><br>
        <sub>
          <b>Rafael David</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.behance.net/emanuelfazevedo">
        <img src="https://avatars.githubusercontent.com/u/174563844?v=4" alt="Emanuel Github profile pic" width=115><br>
        <sub>
          <b>Emanuel Azevedo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
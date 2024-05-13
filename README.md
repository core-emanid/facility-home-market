# Website - Facility Home Market 


- [Website - Facility Home Market](#website---facility-home-market)
  - [Sobre o projeto](#sobre-o-projeto)
  - [Arquitetura](#arquitetura)
    - [Estrutura do código-fonte](#estrutura-do-código-fonte)
  - [Ferramentas](#ferramentas)
    - [Serviços externos](#serviços-externos)
      - [Brevo](#brevo)
    - [Limitações](#limitações)
  - [Suporte técnico](#suporte-técnico)
    - [FAQ](#faq)
  - [Referências](#referências)

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


-[1- Public]()
-[]

## Ferramentas
- Construido com:
  - [Astro]()
  - [TailwindCSS]()
  - [DaisyUI]()

### Serviços externos
- Serviços externos utilizados:
  - [Brevo]()
  - [Vercel]()
  - [Github]()
  - [Google Maps]()
  
#### Brevo
Serviço de automatização de campanhas de marketing e disparo de emails. Usado para transmitir mensagens eletrônicas


### Limitações
(limites dos planos contratados, possiveis problemas)

## Suporte técnico


### FAQ
(Contato do desenvolvedor, FAQ)

## Referências
(Artigos, blogs, serviços)

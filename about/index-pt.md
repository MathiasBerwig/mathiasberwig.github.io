---
layout: default
permalink: /about/
title: Sobre mim
lang: pt
custom_css: portfolio
---
{% assign seconds_in_year = 31104000 %}
{% assign today = 'now' | date: "%s" %}
{% assign birthday = site.author.birthday | date: "%s" %}

# {{ page.title }}

Meu nome é Mathias Berwig, tenho {{ today | minus: birthday | divided_by: seconds_in_year }} anos e sou o tipo de desenvolvedor que se preocupa em usar as melhores práticas para desenvolver ótimos produtos e serviços. Estudo Ciência da Computação e trabalho no núcleo de desenvolvimento de sistemas da [UNIJUÍ](http://www.unijui.edu.br), uma universidade no noroeste do Rio Grande do Sul (Brasil). Nos próximos meses (Fevereiro-Julho de 2017) estarei em Lublin, Polônia, devido a um intercâmbio acadêmico na [UMCS](http://umcs.pl/en/). Também atuo como [freelancer](https://www.freelancer.com/u/mathiasberwig.html) desenvolvendo softwares ou prestando consultoria de informática. Quando não estou trabalhando, gosto de buscar inspiração no [CodePen](http://codepen.io/MathiasBerwig/) e [MaterialUp](https://www.uplabs.com/mathiasberwig), ou viajar por aí.

Eu posso te ajudar com projetos de desenvolvimento de aplicativos Android ou multiplataforma.  Meu objetivo como desenvolvedor é construir soluções práticas com interface funcional, bonita e responsiva, aliando excelente experiência de usuário ao melhor desempenho possível. 

Você pode ver alguns de meus trabalhos abaixo, em meu [portfolio](#portfolio) ou no meu perfil do [GitHub](https://github.com/MathiasBerwig). Estou sempre buscando boas oportunidades para trabalhar com pessoas inteligentes em projetos inovadores. Entre em [contato](mailto:{{ site.author.email }}). Aproveite para ver o meu currículo logo abaixo.

## Experiência

#### Freelancer.com

##### **Desenvolvedor Android · 07/2017  – Presente** (6 meses)

Meu trabalho é analisar, projetar e desenvolver soluções em forma de aplicações móveis para Android. Avaliação profissional 5/5. Mais informações em [Freelancer.com/u/mathiasberwig](https://www.freelancer.com/u/mathiasberwig.html).

#### Universidade Regional do Noroeste do Estado do Rio Grande do Sul

##### **Programador de TI · 03/2015 – Presente** (1+ ano)

Eu trabalho criando soluções mobile utilizando a linguagem de programação Java e tecnologias de código aberto. Minhas atividades incluem analisar e sugerir funcionalidades para aplicações novas e existentes; implementar serviços baseados em SQLite, MySQL, DB2, web services REST e Google Cloud Platform. Eu também projeto interfaces de aplicativos para dispositivos móveis.

##### **Programador de TI Estagiário · 05/2014 – 03/2015** (10 meses)

Eu estava encarregado de analisar e monitorar o funcionamento dos sistemas da universidade, efetuando manutenção e desenvolvimento de aplicações e relatórios em linguagem Object Pascal com Delphi 7 e QuickReports.

## Habilidades

- **Java** (proficiente), **C#** (intermediário), **Object Pascal** (experiência anterior porém desatualizado), **HTML** (intermediário), **CSS** (intermediário), **Javascript** (básico) e **PHP** (básico).
- **Android** (proficiente), **Jekyll** (suficiente pra criar este blog), **web services REST** (alguma experiência criando e gerenciando) e **Google Cloud Platform** (integração de APIs com mobile).
- MVC, desenvolvimento de apps e websites móveis.

## Idiomas

**Inglês** (B2, intermediário-avançado) e **Português** (nativo).

## Educação

#### Universidade Regional do Noroeste do Estado do Rio Grande do Sul

#### **Bacharel em Ciência da Computação**

- Conclusão prevista: Julho de 2018
- Média aritmética de 84/100
- 4 prêmios por projetos de extensão (veja [Locutor da Hora](/portfolio/locutor-da-hora/))
- Apresentador de semana acadêmica (veja [Android Course](/portfolio/course-introduction-to-android-dev/))

## Portfolio
{% include portfolio.html %}
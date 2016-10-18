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

Meu nome é Mathias Berwig, tenho {{ today | minus: birthday | divided_by: seconds_in_year }} anos e sou o tipo de desenvolvedor que se preocupa em usar as melhores práticas para desenvolver ótimos produtos e serviços. Estudo Ciência da Computação e trabalho no núcleo de desenvolvimento de sistemas da [UNIJUÍ](http://www.unijui.edu.br), uma universidade no noroeste do Rio Grande do Sul (Brasil). Também atuo como [freelancer](https://www.freelancer.com/u/mathiasberwig.html) desenvolvendo softwares ou prestando consultoria de informática. Quando não estou trabalhando, gosto de buscar inspiração no [CodePen](http://codepen.io/MathiasBerwig/) e [MaterialUp](https://www.uplabs.com/mathiasberwig), ou sair pra beber uma cerveja.

Eu posso te ajudar com projetos de desenvolvimento de aplicativos Android ou multiplataforma.  Meu objetivo como desenvolvedor é construir soluções práticas com interface funcional, bonita e responsiva, aliando excelente experiência de usuário ao melhor desempenho possível. 

Você pode ver alguns de meus trabalhos abaixo, em meu [portfolio](#portfolio) ou no meu perfil do [GitHub](https://github.com/MathiasBerwig). Estou sempre buscando boas oportunidades para trabalhar com pessoas inteligentes em projetos inovadores. Entre em [contato](mailto:{{ site.author.email }}). Aproveite para ver o meu currículo logo abaixo.

## Portfolio
{% include portfolio.html %}
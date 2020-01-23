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

Meu nome é Mathias Berwig e sou o tipo de desenvolvedor que se preocupa em usar as melhores práticas para criar ótimos produtos e serviços. Você pode ver uma descrição mais atualizada ou minhas experiências passadas no [LinkedIn](https://www.linkedin.com/in/mathiasberwig/).

Alguns dos meus trabalhos estão disponíveis abaixo, em meu [portfolio](#portfolio) ou no meu perfil do [GitHub](https://github.com/MathiasBerwig). Estou sempre buscando boas oportunidades para trabalhar com pessoas inteligentes em projetos inovadores. Entre em [contato](mailto:{{ site.author.email }}).

## Portfolio
{% include portfolio.html %}
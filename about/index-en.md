---
layout: default
permalink: /about/
title: About me
lang: en
custom_css: portfolio
---
{% assign seconds_in_year = 31104000 %}
{% assign today = 'now' | date: "%s" %}
{% assign birthday = site.author.birthday | date: "%s" %}

# {{ page.title }}

My name is Mathias Berwig, I’m the kind of developer who cares to use the best practices to develop great products and services. You can read a more updated description or see my past experiences on [LinkedIn](https://www.linkedin.com/in/mathiasberwig/).

Some of my work is available in my [portfolio](#portfolio) or in my [GitHub](https://github.com/MathiasBerwig) profile. I'm always looking for good opportunities to work with great people on amazing projects. [Get in touch](mailto:{{ site.author.email }}).

## Portfolio 
{% include portfolio.html %}
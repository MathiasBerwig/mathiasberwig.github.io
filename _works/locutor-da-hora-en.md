---
title: Locutor da Hora
lang: en
featured: true
permalink: /portfolio/locutor-da-hora/
custom_css: grid-gallery
preview_image: /images/portfolio/locutor-da-hora.png
images:
  - path: /images/portfolio/locutor-da-hora-screenshot.1.jpg
    id: 1
  - path: /images/portfolio/locutor-da-hora-screenshot.2.jpg
    id: 2
  - path: /images/portfolio/locutor-da-hora-screenshot.3.jpg
    id: 3
  - path: /images/portfolio/locutor-da-hora-screenshot.4.jpg
    id: 4
  - path: /images/portfolio/locutor-da-hora-screenshot.5.jpg
    id: 5
  - path: /images/portfolio/locutor-da-hora-screenshot.6.jpg
    id: 6
description: It's an award-winning educational app developed to help kids to practice their vocal abilities. It works as a radio studio simulator which allows users to create their own texts using macros (like date, time, city) to generate text according to their context.
---
The Locutor da Hora is part of the project [Rádio, Tecnologias e Empreendedorismo na Escola](http://www.unijui.edu.br/extensao/relacao-de-projetos) (Radio, Technology and Entrepreneurship at the School - [Facebook page](https://www.facebook.com/projetoradiotecnologiaeempreendedorismo/)), an extension program initiative of the Regional University of Northwestern Rio Grande do Sul ([UNIJUÍ](http://www.unijui.edu.br/)). The app ([download](http://wwww.locutordahora.unijui.edu.br/o-software/download/)) and [blog](http://wwww.locutordahora.unijui.edu.br/) were developed in the period when I had a university extension scholarship, between March of 2013 and March of 2015. Its source code is available on [GitHub](https://github.com/MathiasBerwig/Locutor-da-Hora).

### Awards
* Work featured in the Exact and Earth Sciences area of Salão do Conhecimento 2013 - Mostra de Iniciação Científica of UNIJUÍ.
* 1º in the category Software Prototype in the I Mostra Acadêmica de Protótipos e Tecnologias of the Department of Exact Sciences and Engineering of UNIJUÍ.
* Work featured in the Exact and Earth Sciences area of Salão do Conhecimento 2014 - Mostra de Iniciação Científica of UNIJUÍ.
* Work featured in the Mostra de Inovação e Tecnologia of 2014 Academic Week of the Department of Exact Sciences and Engineering of UNIJUÍ.

### On the media
* [Acadêmico da Unijuí participa do maior evento de tecnologia do país](http://www.unijui.edu.br/comunica/institucional/22755-academico-da-unijui-participa-do-maior-evento-de-tecnologia-do-pais)
* [Locutor da Hora será apresentado na Campus Party](http://locutordahora.unijui.edu.br/software-sera-apresentado-na-campus-party-2016/)
* [Locutor da Hora será apresentado no 14º CONIC-SEMESP](http://locutordahora.unijui.edu.br/locutor-da-hora-sera-apresentado-no-14o-conic-semesp)
* [Locutor da Hora é destaque em semana acadêmica](http://locutordahora.unijui.edu.br/locutor-da-hora-e-destaque-em-semana-academica/)
* [Prévia do software é apresentada em evento nacional](http://locutordahora.unijui.edu.br/previa-do-software-e-apresentada-em-evento-nacional/)

### Screenshots
{% for image in page.images %}
<input type="checkbox" id="pic-{{ image.id }}"/>
<label for="pic-{{ image.id }}" class="lightbox"><img src="{{ image.path }}"/></label>
{% endfor %}

<div class="grid">  
	{% for image in page.images %}
	<label for="pic-{{ image.id }}" class="grid-item"><img src="{{ image.path }}"/></label>
	{% endfor %}
</div>
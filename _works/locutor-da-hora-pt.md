---
title: Locutor da Hora
lang: pt
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
description: É um aplicativo educacional premiado desenvolvido para auxiliar crianças a aprimorarem suas habilidades vocais. Ele funciona como um simulador de estúdio de rádio que permite ao usuário criar suas próprias locuções usando macros (como data, hora, cidade, etc) para gerar textos de acordo com seu contexto.
---
O Locutor da Hora é parte do projeto [Rádio, Tecnologias e Empreendedorismo na Escola](http://www.unijui.edu.br/extensao/relacao-de-projetos) ([página no Facebook](https://www.facebook.com/projetoradiotecnologiaeempreendedorismo/)), uma iniciativa do programa de Extensão da Universidade Regional do Noroeste do Estado do Rio Grande do Sul ([UNIJUÍ](http://www.unijui.edu.br/)). O software ([download](http://wwww.locutordahora.unijui.edu.br/o-software/download/)) e o [blog](http://wwww.locutordahora.unijui.edu.br/) foram desenvolvidos no período que mantive vínculo de bolsista com a universidade, entre março de 2013 e março de 2015. Seu código fonte está disponível no [GitHub](https://github.com/MathiasBerwig/Locutor-da-Hora).

### Premiações
* Trabalho-Destaque na área de Ciências Exatas e da Terra do Salão do Conhecimento 2013 - Mostra de Iniciação Científica da UNIJUÍ.
* 1º lugar na categoria Protótipo de Software na I Mostra Acadêmica de Protótipos e Tecnologias do Departamento de Ciências Exatas e Engenharias da UNIJUÍ.
* Trabalho-Destaque na área de Ciências Exatas e da Terra do Salão do Conhecimento 2014 - Mostra de Iniciação Científica da UNIJUÍ.
* Trabalho-Destaque na Mostra de Inovação e Tecnologia da Semana Acadêmica de 2014 do Departamento de Ciências Exatas e Engenharias da UNIJUÍ.

### Na mídia
* [Acadêmico da Unijuí participa do maior evento de tecnologia do país](http://www.unijui.edu.br/comunica/institucional/22755-academico-da-unijui-participa-do-maior-evento-de-tecnologia-do-pais)
* [Locutor da Hora será apresentado na Campus Party](http://locutordahora.unijui.edu.br/software-sera-apresentado-na-campus-party-2016/)
* [Locutor da Hora será apresentado no 14º CONIC-SEMESP](http://locutordahora.unijui.edu.br/locutor-da-hora-sera-apresentado-no-14o-conic-semesp)
* [Locutor da Hora é destaque em semana acadêmica](http://locutordahora.unijui.edu.br/locutor-da-hora-e-destaque-em-semana-academica/)
* [Prévia do software é apresentada em evento nacional](http://locutordahora.unijui.edu.br/previa-do-software-e-apresentada-em-evento-nacional/)

### Capturas de Tela
{% for image in page.images %}
<input type="checkbox" id="pic-{{ image.id }}"/>
<label for="pic-{{ image.id }}" class="lightbox"><img src="{{ image.path }}"/></label>
{% endfor %}

<div class="grid">  
	{% for image in page.images %}
	<label for="pic-{{ image.id }}" class="grid-item"><img src="{{ image.path }}"/></label>
	{% endfor %}
</div>
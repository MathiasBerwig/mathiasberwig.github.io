---
title: Inventário Patrimonial
lang: pt
featured: true
custom_css: grid-gallery
permalink: /portfolio/inventario-patrimonial/
preview_image: /images/portfolio/unijui.png
images:
  - path: /images/portfolio/inventario-screenshot-1.png
    id: 1
  - path: /images/portfolio/inventario-screenshot-2.png
    id: 2
  - path: /images/portfolio/inventario-screenshot-3.png
    id: 3
  - path: /images/portfolio/inventario-screenshot-4.png
    id: 4
  - path: /images/portfolio/inventario-screenshot-5.png
    id: 5
  - path: /images/portfolio/inventario-screenshot-6.png
    id: 6
  - path: /images/portfolio/inventario-screenshot-7.png
    id: 7
description: Aplicação desenvolvida para auxiliar os técnicos administrativos da UNIJUÍ durante os processos de inventário patrimonial da instituição.
---
Realizar o controle de bens patrimoniais de uma instituição de grande porte é uma tarefa difícil que pode ser muito trabalhosa quando não executada com as ferramentas corretas. O aplicativo em questão é parte de um projeto de informatização da Coordenadoria Patrimonial da UNIJUÍ e que tem como objetivo agilizar o processo de levantamento de informações sobre a localização dos pertences da universidade. Neste projeto integrei a equipe de desenvolvimento móvel da instituição por meio do Núcleo de Desenvolvimento de Sistemas, onde todo o trabalho foi coordenado pelo analista do setor. 

#### O método antigo

Com uma relação impressa dos objetos presentes em cada espaço físico obtida a partir do sistema, o técnico visita as salas e realiza o cruzamento manual dos registros, verificando quais bens estão no lugar correto e quais foram movidos. Após a coleta de dados, é necessário realizar a inserção dos mesmos no sistema da universidade.

#### A solução apresentada

Para otimizar o processo de coleta de dados foi desenvolvida a aplicação em questão que tem as seguintes características:
- integração total ao sistema da universidade por meio de web services;
- controle de acesso de usuário a partir de formulário de login;
- carga de dados para utilização da aplicação offline;
- módulo de sincronização com suporte à notificações push para atualização de dados; 
- suporte à leitura de código de barras utilizando a câmera do dispositivo.

Dessa forma, após fazer login no aplicativo, é mostrada a lista de prédios da instituição. Nesse momento é possível filtrar os prédios pelo campus ao qual pertencem ou por nome. Após selecionar um prédio, uma lista semelhante é exibida mostrando os espaços (salas) pertencentes a tal prédio. Selecionada a sala, são mostrados os bens ou leituras vinculados à mesma, permitindo ao usuário realizar as leituras de bens, indicando quais estão presentes no espaço em questão. A aplicação também oferece uma busca híbrida (local ou online) de objetos, permitindo ao usuário saber a localização correta de um dado objeto ou encontrar seu cadastro a partir de um código de barras.

A proposta utilizando o sistema móvel atingiu seu objetivo, diminuindo consideravelmente o tempo necessário para realizar a coleta de dados.

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
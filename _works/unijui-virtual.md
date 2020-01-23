---
title: Unijuí Virtual
lang: en
featured: true
permalink: /portfolio/unijui-virtual/
preview_image: /images/portfolio/unijui.png
custom_css: grid-gallery
images_android:
  - path: /images/portfolio/unijui-menu-1.jpg
    id: 7
  - path: /images/portfolio/unijui-inicio-1.jpg
    id: 8
  - path: /images/portfolio/unijui-minha-conta-1.jpg
    id: 9
  - path: /images/portfolio/unijui-enderecos-1.jpg
    id: 10
  - path: /images/portfolio/unijui-biblio-1.jpg
images_rn:
  - path: /images/portfolio/unijui-menu.PNG
    id: 6
  - path: /images/portfolio/unijui-inicio.PNG
    id: 1
  - path: /images/portfolio/unijui-agenda.PNG
    id: 2
  - path: /images/portfolio/unijui-minhas-turmas.PNG
    id: 3
  - path: /images/portfolio/unijui-notas.PNG
    id: 4
  - path: /images/portfolio/unijui-notificacoes.PNG
    id: 5
description: UNIJUÍ's app for providing university's services for its students.

---

Android and iOS apps for providing UNIJUÍ's services for its students. It does calendar syncing to show classes and events; has notification support for things like exams results and library loans reminders; sets up (Android only) the Wi-Fi connections of the campus (WPA2 Enterprise); and allows viewing important academic data.

The Android version was developed natively and launched on February 2018; it received several updates until the end of 2019, when the iOS version, built using React Native during approximately 9 months, was lauched. The RN version will evolve on features until it matches the Android one, that will then be replaced.

The apps are available at [unijui.edu.br/app](https://www.unijui.edu.br/app).

## My Contributions

Having some knoweledge of Java, I started working with mobile development on 2015 at UNIJUÍ. While learning the Android framework, our team was formed by three developers and we delivered some internal tools. Months later I got expertise and led the team, starting the development of the public app for students. Since the beginning, I was in charge of proposing designs and analyzing the implementation of the apps. The RN version was entirely coded by me, using Expo and libraries like Redux and Paper (from Callstack). Store publishing (both Google and Apple) were also done by me.

## Android Native Screenshots

{% for image in page.images_android %}
<input type="checkbox" id="pic-{{ image.id }}"/>
<label for="pic-{{ image.id }}" class="lightbox"><img src="{{ image.path }}"/></label>
{% endfor %}

<div class="grid">  
	{% for image in page.images_android %}
	<label for="pic-{{ image.id }}" class="grid-item"><img src="{{ image.path }}"/></label>
	{% endfor %}
</div>

## React Native Screenshots

{% for image in page.images_rn %}
<input type="checkbox" id="pic-{{ image.id }}"/>
<label for="pic-{{ image.id }}" class="lightbox"><img src="{{ image.path }}"/></label>
{% endfor %}

<div class="grid">  
	{% for image in page.images_rn %}
	<label for="pic-{{ image.id }}" class="grid-item"><img src="{{ image.path }}"/></label>
	{% endfor %}
</div>
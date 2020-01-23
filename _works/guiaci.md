---
title: GuiACI
lang: en
featured: true
permalink: /portfolio/guiaci/
preview_image: /images/portfolio/guiaci.png
custom_css: grid-gallery
images:
  - path: /images/portfolio/guiaci-interesses-min.gif
    id: 1
  - path: /images/portfolio/guiaci-filtros-min.gif
    id: 2
  - path: /images/portfolio/guiaci-pesquisa-min.gif
    id: 3
  - path: /images/portfolio/guiaci-ligar.gif
    id: 4
description: A commercial guide that solves customer relationship issues for ACI (Associação Comercial e Industrial de Ijuí) and is built thinking in which insights business need to obtain from its potential customers as they search for companies or services.
---

GuiACI is a commercial guide that solves customer relationship issues for ACI (Associação Comercial e Industrial de Ijuí) and is built thinking in which insights business need to obtain from its potential customers as they search for companies or services. The app was idealised as part of a hackathon contest and turned into a startup, as the prize included a vacancy in the incubator that promoted the event.

The web app can be accessed at [guiaci.app](https://guiaci.app); more info on [sobre.guiaci.app](https://sobre.guiaci.app) (Portuguese).

## My Contributions

At the time of the product launch (October, 2019), our team was formed by me, [Matheus Pedro](https://www.linkedin.com/in/matheus-pedro-a3a630130/) and [Maiquel Bock](https://www.linkedin.com/in/maiquelbock/). We divided the tasks of design and development, management, and sales, respectively. On December, 2019, we took different paths and I decided to pivot the idea and drive the business by myself.

My current assignments are:

### Management

- Define platform features aiming to solve real user problems;
- Architect modules/services and plan it's development;
- Think up marketing strategies and promotions for the platform;
- Manage bureaucracy, deadlines and other company/startup related tasks;
- Study user behaviours and look for opportunities for monetization.

![Screenshot of app's planning mindmap.](/images/portfolio/guiaci-planning-min.png)

### Design

- Prototype screens and interactions from low fidelity to pixel-perfect designs, mostly using  Adobe XD;
- Create enjoyable navigation and experiences for different user backgrounds;
- Run usability tests to evaluate the designs;
- Find beautiful combinations of colors, shapes and typographies.

![Screenshot of app's prototype.](/images/portfolio/mockup-guiaci-min.png)

### Implementation

- Analyze and understand client needs to propose the implementation of IT solutions;
- Build the entire API using AWS Services (AppSync, Cognito, DynamoDB, ElasticSearch, S3 and others);
- Code the web app using React, Redux, Material Design Components (from Google) and integrate with the API.

![Screenshot of app's code.](/images/portfolio/guiaci-code-min.png)


## Launch Video

<iframe class="iframe-doc" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fapp.guiaci%2Fvideos%2F255374908684831%2F&width=500&show_text=false&height=280&appId" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>

## App Screenshots
{% for image in page.images %}
<input type="checkbox" id="pic-{{ image.id }}"/>
<label for="pic-{{ image.id }}" class="lightbox"><img src="{{ image.path }}"/></label>
{% endfor %}

<div class="grid">  
	{% for image in page.images %}
	<label for="pic-{{ image.id }}" class="grid-item"><img src="{{ image.path }}"/></label>
	{% endfor %}
</div>
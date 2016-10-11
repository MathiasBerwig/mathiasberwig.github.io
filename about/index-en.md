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

My name is Mathias Berwig, I'm {{ today | minus: birthday | divided_by: seconds_in_year }} years old and I'm the type of developer who cares to use the best practices to develop great products and services. I study Computer Science and work as programmer at [UNIJUÍ](http://www.unijui.edu.br), a university in the northwest of the state of Rio Grande do Sul (Brazil). I also work as a [freelance](https://www.freelancer.com/u/mathiasberwig.html) developing softwares or as IT consultant. When I'm not working, I like to get inspired on [CodePen](http://codepen.io/MathiasBerwig/) and [MaterialUp](https://www.uplabs.com/mathiasberwig), or getting out to get some beer.

I can help you developing projects of Android or multiplatform applications. My goal as a developer is to build practical solutions with functional, beautiful and responsive interfaces, combining excellent user experience at the best possible performance. 

You can see some of my work down in my [portfolio](#portfolio) or in my [GitHub](https://github.com/MathiasBerwig) profile. I'm always looking for good opportunities to work with great people on amazing projects. [Get in touch](mailto:{{ site.author.email }}).

## Experience

#### Regional University of Northwestern Rio Grande do Sul

##### **IT Programmer · 03/2015 – Present** (1+ year)

I work creating Android mobile solutions using Java language and open source technologies. My current activities include analyze and suggest features for new and existing applications, implement services based on SQLite, MySQL, DB2, REST web services and Google Cloud Platform. I also design mobile app interfaces.

##### **IT Programmer Intern · 05/2014 – 03/2015** (10 months)

I was in charge to analyze and monitor the functioning of the university systems, performing maintenance and development of applications and reports in Object Pascal language using Delphi 7 and QuickReports.

## Skills

- **Java** (proficient), **C#** (intermediate), **Object Pascal** (prior experience but rusty), **HTML** (intermediate), **CSS** (intermediate), **Javascript** (basic) and **PHP** (basic).
- **Android** (proficient), **Jekyll** (enought to code this blog), **REST webservices** (some experience building and managing) and **Google Cloud Platform** (APIs integration with mobile).
- MVC, responsive web and mobile apps development.

## Languages

**English** (B2, upper intermediate) and **Portuguese** (native).

## Education

#### Regional University of Northwestern Rio Grande do Sul

#### **Bachelor in Computer Science**

- Expected completion date: July 2018
- Arithmetic average of 84/100
- 4 awards for extension projects (see [Locutor da Hora](/portfolio/locutor-da-hora/))
- Academic week speaker (see [Android Course](/portfolio/course-introduction-to-android-dev/))

## Portfolio 
{% include portfolio.html %}
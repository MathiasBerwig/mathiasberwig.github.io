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

My name is Mathias Berwig, I'm {{ today | minus: birthday | divided_by: seconds_in_year }} years old and I’m the kind of developer who cares to use the best practices to develop great products and services. I study Computer Science and work as a programmer at [UNIJUÍ](http://www.unijui.edu.br), a university in the northwest of the state of Rio Grande do Sul (Brazil). In this semester (February-July, 2017) I'm be enrolled in an exchange program at [UMCS](http://umcs.pl/en/), in Lublin, Poland. I also work as a [freelance](https://www.freelancer.com/u/mathiasberwig.html) developing softwares or as IT consultant. When I'm not working, I like to get inspired on [CodePen](http://codepen.io/MathiasBerwig/) and [MaterialUp](https://www.uplabs.com/mathiasberwig), or traveling around.

I can help you developing Android applications or Java/C# softwares. My goal as a developer is to build practical solutions with functional, beautiful and responsive interfaces, combining excellent user experience at the best possible performance.

You can see some of my work down in my [portfolio](#portfolio) or in my [GitHub](https://github.com/MathiasBerwig) profile. I'm always looking for good opportunities to work with great people on amazing projects. [Get in touch](mailto:{{ site.author.email }}).

## Experience

#### Freelancer.com

##### **Android Developer · 07/2017  – Present** (6 months)

Analyze, project and develop Android mobile solutions. Rated 5/5. More info at [Freelancer.com/u/mathiasberwig](https://www.freelancer.com/u/mathiasberwig.html).

#### Regional University of Northwestern Rio Grande do Sul

##### **IT Programmer · 03/2015 – Present** (1+ year)

UNIJUÍ is a leading university in the northwest of Rio Grande do Sul in Brazil, and it stands as an excellent school according to MEC (Ministry of Education, the Brazilian's education ministry). And to provide good services for its students and employees, UNIJUÍ supplies some software which makes the life of its academic community easier. 

Currently, I'm in charge to develop mobile app solutions for Android. My work involves using Java language and open source technologies to implement applications which use or are integrated with the following services or technologies: Git, SQLite, MySQL, DB2, REST web services and Google Cloud Platform. I also design graphical user interfaces following good user experience practices.

##### **IT Programmer Intern · 05/2014 – 03/2015** (10 months)

As an intern, I was in charge to analyze and check the university's system behavior and fix eventual bugs or create new applications or reports using Delphi 7 and QuickReport.

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
{% assign seconds_in_year = 31104000 %}
{% assign today = 'now' | date: "%s" %}
{% assign birthday = site.author.birthday | date: "%s" %}

My name is Mathias Berwig, I'm {{ today | minus: birthday | divided_by: seconds_in_year }} years old and I'm the type of developer who cares to use the best practices to develop great products and services. I study Computer Science and work as programmer at [UNIJUÍ](http://www.unijui.edu.br), a university in the northwest of the state of Rio Grande do Sul (Brazil). I also work as a freelance developing softwares or as IT consultant.

I can help you developing projects of Android applications – mainly – or multiplatform. I have knowledge and some experience with: Java, C#, Object Pascal, HTML, CSS, Javascript and Jekyll. My goal as a developer is to build practical solutions with functional, beautiful and responsive interfaces, combining excellent user experience at the best possible performance. You can see some of my work in my [portfolio](/portfolio/) or in my [GitHub](https://github.com/MathiasBerwig) profile.

I'm always looking for good opportunities to work with great people on amazing projects. [Get in touch](mailto:{{ site.author.email }}).
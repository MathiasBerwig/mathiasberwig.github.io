{% assign seconds_in_year = 31104000 %}
{% assign today = 'now' | date: "%s" %}
{% assign birthday = site.author.birthday | date: "%s" %}

Meu nome é Mathias Berwig, tenho {{ today | minus: birthday | divided_by: seconds_in_year }} anos e sou o tipo de desenvolvedor que se preocupa em usar as melhores práticas para desenvolver ótimos produtos e serviços. Estudo Ciência da Computação e trabalho no núcleo de desenvolvimento de sistemas da [UNIJUÍ](http://www.unijui.edu.br), uma universidade no noroeste do Rio Grande do Sul (Brasil). Também atuo como [freelancer](https://www.freelancer.com/u/mathiasberwig.html) desenvolvendo softwares ou prestando consultoria de informática.

Eu posso te ajudar com projetos de desenvolvimento de aplicativos Android – principalmente – ou multiplataforma. Tenho conhecimento e alguma experiência com: Java, C#, Object Pascal, HTML, CSS, Javascript e Jekyll. Meu objetivo como desenvolvedor é construir soluções práticas com interface funcional, bonita e responsiva, aliando excelente experiência de usuário ao melhor desempenho possível. Você pode ver alguns de meus trabalhos em meu [portfolio](/pt/portfolio/) ou no meu perfil do [GitHub](https://github.com/MathiasBerwig).

Estou sempre buscando boas oportunidades para trabalhar com pessoas inteligentes em projetos inovadores. Entre em [contato](mailto:{{ site.author.email }}).
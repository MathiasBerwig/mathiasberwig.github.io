---
title: Call Info Sender
lang: pt
permalink: /portfolio/call-info-sender/
preview_image: /images/portfolio/call-info-sender.jpg
description: Aplicativo Android desenvolvido para uma empresa ucraniana que necessitava registrar a última chamada recebida e enviar para uma planilha no Google Docs.
---
O cliente, uma empresa Ucraniana, solicitou um aplicativo simples onde o usuário pudesse enviar as informações de chamadas recebidas para um arquivo online do Google Planilhas com um simples toque. Em uma tela de configuração, o usuáiro pode definir seu nome e número de telefone, que são armazenados nas `Shared Preferences` do sistema e posteriormente enviados com o restante dos dados. Após definir as informações pessoais, é possível adicionar 3 diferentes widgets à tela inicial do dispositivo. Um deles mostra o último número que ligou e um botão enviar; os outros dois são somente botões de enviar com tamanhos diferentes. Quando o dispositivo recebe uma ligação, um `BroadcastReceiver` é ativado e inicia um serviço em segundo plano, que armazena o número que ligou e a data e hora da ligação. A qualquer momento o usuário pode pressionar o botão Enviar de qualquer um dos widgets, e então o aplicativo vai enviar as informações para um formulário online do Google Docs, que insere os dados na planilha. O aplicativo está disponível nos idiomas Inglês, Ucraniano e Russo.

### Capturas de Tela
![Captura de tela do aplicativo](/images/portfolio/call-info-sender.png)
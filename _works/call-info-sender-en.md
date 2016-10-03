---
title: Call Info Sender
lang: en
permalink: /portfolio/call-info-sender/
preview_image: /images/portfolio/call-info-sender.jpg
description: Android application developed for a Ukrainian company which needed to register incoming call logs into a Google Docs Spreadsheet.
---
The client, an Ukranian company, requested a simple app where the user could send incoming call logs to an online Google Spreadsheet by just pressing a button. In a single screen activity, user can set his name and phone number, that are stored in `Android Shared Preferences`, and later sent among other data. After setting the personal info, three different widgets can be placed on home screen. One shows the last received call number and a send button; other two are just different sizes send buttons. When someone calls the device, a `BroadcastReceiver` is activated and starts a background service, which stores the number and date/time of the call. Anytime user can hit the Send button of any of the widgets and the app will submit the data to a Google Form, which will populate the Spreadsheet. The app is localized in English, Ukrainian and Russian languages.

### Screenshots
![Captura de tela do aplicativo](/images/portfolio/call-info-sender.png)
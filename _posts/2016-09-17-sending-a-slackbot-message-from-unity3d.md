---
published: true
layout: post
title: Sending a Slackbot message from Unity3d
image: http://diegogiacomelli.com.br/images/SlackBot.png
---

I was looking for a way to send a message to a Slack channel using the Slackbot API. 

This is a pretty easy task to perform in C#, because there are some great client libraries implementations to the Slack API, like: [SlackApi](https://github.com/Inumedia/SlackAPI), [MargieBot](https://github.com/jammerware/margiebot) and [SlackConnector](https://github.com/noobot/SlackConnector). However, in the Unity3d world the story is a little different, because Unity3d uses a older .NET version and those mentioned client libraries are implemented using newer .NET framework versions that are incompatible with Unity3d.

I could have tried to compile those client libraries projects using a older .NET version, what I really tried to do, but almost all are using things like Task and async, that are really not supported by Unity3d .NET version right now.

Then I decided to try a very raw solution using the Unity3d WWWForm and it worked well, very simple, but can be useful to someone. The result is the code bellow:


![](../images/SlackBotMessage.png)

BotController
======

{% gist 1c8e405116e1b48a7d25dec9b36edbea %}


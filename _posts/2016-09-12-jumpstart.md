---
published: true
layout: post
title: jumpstart
image: http://diegogiacomelli.com.br/images/jumpstart-logo.png
---

I present to you my newest tool...

![](../images/jumpstart-icon.png)jumpstart
===


![](../images/jumpstart-convention-sample.gif)

[jumpstart](https://github.com/giacomelli/jumpstart) is a command-line tool to create new C# projects from prebuilt/templates.

As an experienced developers it's very common we have some kind of template solution when we start a new project. Maybe it's the latest project we work on, maybe it's a very good template we used every time to bootstrap a specific kind of project. 

I created [jumpstart](https://github.com/giacomelli/jumpstart) to simplify the process of create the new project based on those templates or prebuilt solutions.

The idea of the tool was born a long time ago and became a little stronger every time that I had to create a new solution and all the projects by hand, but when I saw the message bellow in the [http://xamarin.com/prebuilt](http://xamarin.com/prebuilt ) page I decided to finally write the tool... and the name was very clear, almost.

![](../images/jumpstart-Xamarin-jumpstart-message.png)

> The first name that I thought to the tool was prebuilt, but later, my friend [Giusepe Casagrande](https://twitter.com/giusepe) convinced me that jumpstart was really better name... and he was right!


## How does it work?
jumpstart is very simple, it get a folder with a template solution and copy it to a new folder replacing the root namespace of the template to the new project namespace. 

A template folder like this:

```shell
jumpstart-template/MyClass.cs
jumpstart-template/Properties
jumpstart-template/Properties/AssemblyInfo.cs
jumpstart-template/JumpStartTemplate.csproj
JumpStartTemplate.sln
```

With this command:

```shell
jumpstart -n My.Amazing.NewProject
```

Will become:

```shell
My.Amazing.NewProject/MyClass.cs
My.Amazing.NewProject/Properties
My.Amazing.NewProject/Properties/AssemblyInfo.cs
My.Amazing.NewProject/My.Amazing.NewProject.csproj
My.Amazing.NewProject.sln
```

> The MyClass.cs, AssemblyInfo.cs, My.Amazing.NewProject.csproj and My.Amazing.NewProject.sln contents was updated by jumpstart to use the namespace My.Amazing.NewProject.


## Using it
Download it from the [releases page](https://github.com/giacomelli/jumpstart/releases).

### Available options:
To see all available options.

```shell
jumpstart -help
```

### Basic (using conventions)
If your template folder is called "jumpstart-template" and its namespace is JumpStartTemplate, the only argument you need to pass to jumpstart is -n(namespace).

```shell
jumpstart -n My.Amazing.NewProject
```

> The "jumpstart-template" folder should be in the same folder where you are calling jumpstart.

### Advanced (specifying template folder and namespace)
For example, your template folder is "my-template" and your template namespace is "My.Template", in this case you should call jumpstart in this way:

```shell
jumpstart -tf my-template -tn My.Template -n My.Amazing.NewProject
```

### Advanced (using a remote .zip template)
You can use a remote .zip file as your template folder. For example, if you want to start a new project with any of those prebuilt apps that Xamarin make available on [http://xamarin.com/prebuilt](http://xamarin.com/prebuilt), you can use the command bellow to jumpstart your new project using those templates:

##### jumpstart Xamarin Sport prebuilt app

```shell
jumpstart -tf https://github.com/xamarin/sport/archive/master.zip -tn Sport.Mobile -n My.Sport.Mobile 
```


## Conclusion
I hope you can use jumpstart in your next project bootstrap. [Download](https://github.com/giacomelli/jumpstart/releases) and use it.

If you want to colaborate, take a look on its [GitHub repository](https://github.com/giacomelli/jumpstart).
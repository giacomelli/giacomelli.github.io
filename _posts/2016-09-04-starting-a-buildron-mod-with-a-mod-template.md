---
published: true
layout: post
title: Starting a Buildron mod with a mod template
image: http://diegogiacomelli.com.br/images/BuildronLogo.png
---

In this post I will show how to start building a mod to Buildron using a mod template.

![](../images/BuildronModTemplateSimulation.gif)


## Download
Download the Buildron-Mod-Template.zip from [releases page](https://github.com/skahal/Buildron/releases).
Unzip it in any folder.

## Creating the solution
Open a prompt (win) or a terminal (linux/mac).

Go to the folder where you unzip Buildron-Mod-Template.zip.

Type:


```shell
prebuilt.exe -n <the name of your mod>
```

> If you are in Linux/Mac prefix bellow commands with "mono ".

For example, if your mod name is "MyAmazingMod", you should type:

```shell
prebuilt.exe -n MyAmazingMod
```

> prebuilt is a tool that I made to help create solutions from pre built templates. I will talk about of it in an future post.

![](../images/BuildronModTemplatePrebuilt.png)

After prebuilt is done you will see a new folder called MyAmazingMod, inside of it there are the following folders:

* build: full Buildron executable with the classic mods to all platforms (linux, mac and win).
* src
	* Code: the C# class library of your mod
	* Unity: the Unity3d project of your mod.

![](../images/BuildronModTemplateFolders.png)
	 	 
## The C# project
Open the MyAmazingMod/src/Code/MyAmazingMod.sln.

Select the configuration of your platform.

![](../images/BuildronModTemplatePlatformConfiguration.png)

Inside of it you can see the Mod.cs and ModController.cs.

Compile the whole solution.

## The Unity3d project
Open the MyAmazingMod/src/Unity/MyAmazingMod on Unity3d.

Open the scene Assets/SimulatorScene and click on play button.
![](../images/BuildronModTemplateSimulatorScene.png)

Click on the menu "Buildron/Show Simulator".

In the simulator click on button "BuildStatusChanged".
![](../images/BuildronModTemplateSimulator.png)

You will see a box falling down every time you hit the button. This behavior is made by Mod.cs and ModController.cs on C# project. If you are curious about it, take a look on the classes implementations.


## Testing on Buildron
In the Unity3d editor click on menu "Buildron / Build mod".

Select your platform: Mac, Linux or Windows.

Type your Buildron mods folder:

* Linux: ../../../build/linux/Mods
* Mac: ../../../build/mac/Buildron.app/Mods
* Win: ../../../build/win/Mods

Click on "Build" button.
![](../images/BuildronModTemplateBuildMod.png)

Go to folder MyAmazingMod/build open the Buildron of your platform.

Hit the play button on Buildron.

You should see the same falling down box that you see on simulator falling down inside Buildron every time a build changed status.

![](../images/BuildronModTemplateBuildronTEst.png)


## Conclusion
With this post you learn how you can starting to create your own mod from mod template.

If you want to build more sofisticated mods, please take a look on our tutorial ["Creating a mod"](http://github.com/skahal/buildron/wiki/tutorial-creating-a-mod).
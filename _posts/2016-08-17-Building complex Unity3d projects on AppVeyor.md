---
published: false
layout: post
title: Building complex Unity3d projects on AppVeyor
image: http://diegogiacomelli.com.br/images/MissingMonoScript.png
---

http://docs.unity3d.com/Manual/CommandLineArguments.html
http://thecodinglove.com/post/139371724917/when-build-is-at-99-and-it-crashes
http://thecodinglove.com/post/118288910656/build-succeeded
https://docs.unity3d.com/Manual/ManualActivationGuide.html
https://store.unity3d.com/account/licenses
https://unity3d.com/unity/activation


A problem that is recurrent to most game developers using Unity3d is the annoying “Missing (Mono Script)”. This problem often happens when we change a MonoBehaviour script name/filename outside of Unity3d editor or when we decide to move our MonoBehaviour scripts from Assets folder to an external C# class library project. Normally, when we do any of these things our prefabs become “Missing”.

![](../images/MissingMonoScript.png)

### Missing script resolver
To easy solve this problem I created a tool called "Missing script resolver" inside the project [Giacomelli.Unity.EditorToolbox](https://github.com/giacomelli/Giacomelli.Unity.EditorToolbox). This editor toolbox is (or will be) a collection of tools to make my life as Unity3d developer easier. I hope it can help others game developers too.

The tool "Missing scripts resolver" was created to try to solve this problem. It searchs for prefabs with "missing scripts" problem and fix them.

### Using the tool
Download the latest version of Giacomelli.Unity.EditorToolbox.dll from the [releases page](https://github.com/giacomelli/Giacomelli.Unity.EditorToolbox/releases) and put it anywhere inside Assets folder of your Unity3d project.

Access the menu "Giacomelli / Missing script resolver" and click in the "Search" button to find what are your prefabs with "Missing (Mono Script)" problem.

![](../images/MissingMonoScriptPrefabsToFix.png)

> Remember to make a backup of the project or use your version control system before start the fix

If you have problematic prefabs, you'll see a list of prefabs and a button to  fix them, click on the button.

![](../images/MissingMonoScriptPrefabsFixed.png)

Now click in search again, all your prefabs should be fixed.

![](../images/MissingMonoScriptNoMissing.png)


### Conclusion
That's it! All your prefabs with "Missing (Mono Script)" are fixed and ready to be used again.

This editor toolbox is a work in progress, so, let me know if you used it and what are your suggestions at [@ogiacomelli](http://twitter.com/ogiacomelli).
---
published: true
layout: post
title: Unity3D ScenePreview inspector
image: http://diegogiacomelli.com.br/images/math-function.png
---
I'm working in a new game prototype and in this process I was creating some experimental levels to test the mechanics, but by the name of scene I was having dificult to remember which mechanic the level was about and I had to open each level to discover that one was looking for, so I thought: it will be cool have an image preview of the scene when we select the file in hierarchy.

I google and didn't find any project or asset in Asset Store that already did something like this (please, let me know if you know a similar tool) and, well, I prefer code something, than google something, then I coded a little inspector, that I named as ScenePreview:

![](../images/ScenePreview.gif)

## Setup
Just download the gist bellow to your Unity3D project and add it inside a "Editor" folder.

{% gist f74a23107fe862ae7501002ac856f932 ScenePreview.cs %}

After this, open it and edit the line below:

```csharp
// Change this to a folder in your project. 
// Maybe the folder where your scenes are located. Remember to create a subfolder called "Resources" inside of it.
    const string PreviewFolders = "_scenes";
```

## Usage
If your select any scene in the hierarchy you will see a message like this: 

> "There is no image preview for scene '' at ''. Please play the scene on editor and image preview will be captured automatically."

So, play the scene on editor and the image preview will be taken, when you select the scene file again you see the preview.

That's it! I hope this inspector can be useful to you too.

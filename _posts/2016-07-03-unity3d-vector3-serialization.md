---
published: false
layout: post
title: Unity3D - Vector3 serialization
---

http://answers.unity3d.com/questions/956047/serialize-quaternion-or-vector3.html

Are you using a Vector3 property on your class and then suddlendy Unity3D says "exceção"? So Vector3 is not serializable, but you need to serialize this information. This case happen to me when I was saving my ServeState class to PlayerPrefs while coding Buildron. 

I know 3 options to solve this problem: implicit conversion operator, ISerializable and ISurrogateSelector:


## Implicit conversion operator
> Used to enable implicit conversions between a user-defined type and another type
> ([Implicit conversion operators](https://msdn.microsoft.com/pt-br/library/z5z9kes2.aspx))

The follow class is used to save some informations states for Buildron (some code was hiding to simplify the sample, you can see the full code here: github link)

```csharp
```

When implementin ISerializable you need to write two things: the SerializationInfo protected construtor and the GetObjectData method.

### SerializationInfo protected constructor
This constructor is where you get the data from serialization and load into your object instance.

### GetObjectData method
This GetObjectaData is where you get the data from your object instance and set it to be serialized.

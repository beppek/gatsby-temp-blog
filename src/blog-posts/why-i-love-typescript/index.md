---
title: 'Why I love TypeScript'
date: '2019-02-16'
tags: ['JavaScript', 'TypeScript']
---

_This post is a prelude to a post I'm planning about TypeScript, Koa and GraphQL using MongoDB._

I have made several efforts to embrace TypeScript in the past, and while I always hade the will to like it, for some reason I always found a stumbling block that made me break up with TypeScript.

A couple of weeks ago TypeScript curiosity bubbled up to the surface again and I decided to give it another go. I was just about to start developing a personal project I have dreamed up for the floorball down here &mdash; if you don't know what floorball is have a look at [this Youtube video](https://www.youtube.com/watch?v=FcYIIDqpIgQ) &mdash; and I wanted to try a few new things.

It didn't take long to setup, in fact it was incredibly easy. The obstacles only came once I installed a few Koa related packages that didn't have any types. To solve this I simply created a file called `index.d.ts` and placed it in `types` inside my `src` folder. Then I declared the modules like below:

```TypeScript
declare module 'koa-convert';
declare module 'koa-graphql';
```

Of course, you can actually define the interface if you want to, and if you know it, but since these were third party libraries that I didn't even know if I was going to keep I didn't bother.

Once that was done I realised how much freedom you actually have while using TypeScript. You can basically decide how typed you want your code to be. The bare minimum seems to be to define the types of your parameters. For example:

```TypeScript
const foo (bar: string) {
  console.log(bar);
}
```

This is the most useful part of TypeScript as it helps you remember what parameters the function you created several months ago expects. The above is a pretty simple example, so let's bring in something more complex to show the benefits more clearly.

```TypeScript
interface FooQuery {
  name: string;
  age?: number;
}

const findOne = async (query: FooQuery) => {
  // Query the database
  ...
}
```

The question mark after age means it is optional, while name is required. Now TypeScript will validate your code everytime you call the findOne function and let you know if you forget name or try to make a query on something that is not defined.

To further improve your developer experience you can add the return type to the function.

```TypeScript
const foo (bar: string): string => {
  return `Foo says: ${bar}`;
}
```

If we rewind a little bit to the [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html), that may be one of my favourite parts ot TypeScript, along with [enums](https://www.typescriptlang.org/docs/handbook/enums.html). The interface is great for defining expected objects. I often find myself using an improvised kind of enum when I write regular JavaScript. They are particual useful when there are a set number of choices that can be made and the value isn't necessarily presented to the user, but mainly for the developers' benefit.

```TypeScript
enum choices {
  chocolate,
  vanilla,
  raspberry,
}
```

If you were to print the value of chocolate you'd get `0`. But you can also define what you want it to say. The benefit is that it helps you as the developer keep your alternatives under control.

### Conclusion

This was just a quick and simple post about what's good about TypeScript. Consider it a minor primer to a slightly longer post I'm planning on how to get set up with a Koa+TypeScript+GraphQL API. Stay tuned for more.

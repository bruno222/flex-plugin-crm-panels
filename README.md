## Demo:

![demo](https://user-images.githubusercontent.com/1012787/201762824-3707cd50-401b-4991-82ec-03c48f5dacde.gif)

## What:

Is a simple plugin to dynamically add iframes into each and every task, based on `task.attributes`.

## Installing:

`npm install`

`twilio flex:plugins:start`

`twilio flex:plugins:deploy --changelog "first deploy"`

## How to use it:

Once installed, create a task with these attributes below:

```
{"tabs":[
  {"name":"Bing","url":"https:\/\/www.bing.com\/search?q=Test+123"},
  {"name":"Best Movies","url":"https:\/\/en.wikipedia.org\/wiki\/List_of_films_considered_the_best"},
  {"name":"Flex Release Notes","url":"https:\/\/www.twilio.com\/docs\/flex\/release-notes"}
]}
```

For quickly testing this Plugin, go to TaskRouter and create a Task manually, it will look something like the screenshot below:

<img width="50%" alt="image" src="https://user-images.githubusercontent.com/1012787/201761348-0f3ba2a9-3072-41cc-b4e6-531acf77c91f.png">

#Front Page
A simple, hackable frontpage for hackers.

http://djyde.github.io/front

##Customize (or contribute)
Front Page is easily to be hacked and make you own reader. But you need to handle some skills:

* [Jade](http://jade-lang.com) - Template engine.
* [Vue.js](http://vuejs.org) - A lightweight MVVM library.

The main files of Front Page is `index.jade` and `js/base.js`.

Using jade helps customize easier. For example, if you don't care about `Hacker News`, you only need to comment out the relevent code(e.g. `command + /` in Sublime) in `index.jade` and `js/base.js` to remove it.

**index.jade**
```jade
//- .pure-u-1-3.post
//-   .title Hacker News
//-   .block#hackernews
//-     ul
//-       a(v-repeat="lists", href="{{link}}", target="_blank")
//-         li {{title}}
```

**js/base.js**
```javascript
// Hacker News
// qwest.get('http://node-read.avosapps.com/hackernews').then(function(res){
//   hackernews.lists = JSON.parse(res);
// })
// var hackernews = new Vue({
//   el: '#hackernews',
//   data: {
//     lists: [{
//       title: 'loading...'
//     }]
//   }
// })
```

Save and refresh the page, you will find that **Hacker News** block was removed.

To add a new block for your own or for contribution, just refer to the source code and hack it.
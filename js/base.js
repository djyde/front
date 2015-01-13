var next = new Vue({
  el: '#next',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

var hackernews = new Vue({
  el: '#hackernews',
  data: {
    lists: [{
      title: 'loading...'
    }]
  }
})

//36Kr Next
qwest.get('http://node-read.avosapps.com/next').then(function(res){
  next.lists = JSON.parse(res);
})

//Hacker News
qwest.get('http://node-read.avosapps.com/hackernews').then(function(res){
  hackernews.lists = JSON.parse(res);
})
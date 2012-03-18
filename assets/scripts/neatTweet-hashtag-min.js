//neatTweet 1.2 by http://andygrn.co.uk
var neatTweet={setup:function(opts){this.container=document.getElementById(opts.id);var twtr_json=document.createElement('script');twtr_json.src='http://search.twitter.com/search.json?q=+%23'+opts.hashtag+'+&rpp='+(opts.count||1)+'&callback=neatTweet.printTweets';document.head=document.head||document.getElementsByTagName('head')[0];document.head.appendChild(twtr_json);},printTweets:function(feed){var t,tweet,tmp='';this.container.innerHTML='';for(var i=0;i<feed.results.length;++i){t=feed.results[i];t.id=t.id_str;t.from_user_id=t.from_user_id_str;t.text=this.parseLinks(t.text);tmp +=

// Template
'<p>'+t.text+' <a href="http://twitter.com/'+t.from_user+'/status/'+t.id+'">Link</a><span class="divider"></div></p>';

}this.container.innerHTML=tmp;},parseLinks:function(input){input=input.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>');input=input.replace(/(\s|^)@([\w]+)/gi,'$1<a href="http://twitter.com/$2">@$2</a>');input=input.replace(/(\s|^)#([\w]+)/gi,'$1<a href="http://twitter.com/search?q=%23$2">#$2</a>');return input;}};
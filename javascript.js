$('.submit-btn').click(function(){
  $('.output').text('loading...');
  
  var subreddit = $('.user-select').val();
  
  $.ajax({
    type:'GET',
    url: 'http://www.reddit.com/r/'+ subreddit +'/search.json?restrict_sr=true',
    success: function(results){
      $('.output').html('');
      
      for(i=0; i < results.data.children.length; i++){
        $('.output').append('<img src="'+ results.data.children[i].data.thumbnail + '"/>');
      }
    }
  });
});

function　pager(current, all, url){
  var baseurl = url + '/page/';
  var prev    = current - 1;
  var prev2   = current - 2;
  var next    = current + 1;
  var next2   = current + 2;

  if(all == 1){
    $('#js-pager').append('<li> |< </li>');
    $('#js-pager').append('<li> < </li>');
    $('#js-pager').append('<li class="active"> 1 </li>');
    $('#js-pager').append('<li>></a></li> ');
    $('#js-pager').append('<li> >| </a></li>');
  }else if(current == 1 && all == 2){
    $('#js-pager').append('<li> |< </li>');
    $('#js-pager').append('<li> < </li>');
    $('#js-pager').append('<li class="active"> 1 </li>');
    $('#js-pager').append('<li><a href="' + baseurl + '2"> 2 </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '"> > </a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + all  + '"> >| </a></li>');
  }else if(current == 1 && all > 2){
    $('#js-pager').append('<li> |< </li>');
    $('#js-pager').append('<li> < </li>');
    $('#js-pager').append('<li class="active"> 1 </li>');
    $('#js-pager').append('<li><a href="' + baseurl + '2"> 2 </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + '3"> 3 </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '"> > </a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + all  + '"> >| </a></li>');
  }else if(current == 2 && all-current == 1){
    $('#js-pager').append('<li><a href="' + baseurl + '1"> |< </li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev + '"> < </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '">' + prev + '</a></li>');
    $('#js-pager').append('<li class="active">' + current + '</li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '">' + next + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '"> > </a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + all  + '"> >| </a></li>');
  }else if(current == 2 && all-current == 0){
    $('#js-pager').append('<li><a href="' + baseurl + '1"> |< </li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev + '"> < </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '">' + prev + '</a></li>');
    $('#js-pager').append('<li class="active">' + current + '</li>');
    $('#js-pager').append('<li> > </li> ');
    $('#js-pager').append('<li> >| </li>');
  }else if (current == 2){
    $('#js-pager').append('<li><a href="' + baseurl + '1"> |< </li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '"> < </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '">' + prev + '</a></li>');
    $('#js-pager').append('<li class="active">' + current + '</li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '">' + next + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + next2 + '">' + next2 + '</a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + next + '"> > </a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + all + '"> >| </a></li>');
  }else if(all-current == 1){
    $('#js-pager').append('<li><a href="' + baseurl + '1"> |< </li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev + '"> < </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev2 + '">' + prev2 + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '">' + prev + '</a></li>');
    $('#js-pager').append('<li class="active">' + current + '</li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '">' + next + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '"> > </a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + all  + '"> >| </a></li>');
  }else if(all-current == 0){
    $('#js-pager').append('<li><a href="' + baseurl + '1"> |< </li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '"> < </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev2 + '">' + prev2 + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '">' + prev + '</a></li>');
    $('#js-pager').append('<li class="active">' + current + '</li>');
    $('#js-pager').append('<li> > </li> ');
    $('#js-pager').append('<li> >| </li>');
  }else{
    $('#js-pager').append('<li><a href="' + baseurl + '1"> |< </li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '"> < </a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev2 + '">' + prev2 + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + prev  + '">' + prev + '</a></li>');
    $('#js-pager').append('<li class="active">' + current + '</li>');
    $('#js-pager').append('<li><a href="' + baseurl + next + '">' + next + '</a></li>');
    $('#js-pager').append('<li><a href="' + baseurl + next2 + '">' + next2 + '</a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + next + '"> > </a></li> ');
    $('#js-pager').append('<li><a href="' + baseurl + all + '"> >| </a></li>');
  }
}

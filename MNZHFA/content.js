// content.js
var targetList = [
  ['premium', ''],
  ['premium-content', 'content'],
  ['article-offer', 'hidden'],
  ['premium-sub', '']
];

var els = [];

for (var i=0; i<targetList.length; i++)
{
  find = targetList[i][0];
  replace = targetList[i][1];
  $('.' + find).addClass(replace).removeClass(find);
}

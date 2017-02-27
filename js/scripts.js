var list = document.getElementById('list');
var add = document.getElementById('addElem');
var listLength = document.getElementsByTagName('li').length;
add.addEventListener('click', function(){
	listLength++;
	list.innerHTML+='<li>item ' + listLength + '</li>';

});
//这个脚本的作用是让所有的链接在新页面打开。
//由于markdown不能给a元素加target属性，且把所有的链接用html重写太麻烦，所以就用这个办法。
//
//
//2015.12.10  by tanki.  交互上希望不要跳转翻页  所以注释了。
// $(function(){
// 	var myAnchors=$("#body a")
// 	for (var i = myAnchors.length - 1; i >= 0; i--) {
// 		$(myAnchors[i]).attr('target','_blank')
// 	};
// })

//导航栏折叠功能
// $(function(){
// 	var links = $('#sidebar ul.topics>li>a');
// 	links.on('mouseover',function(e){
// 		$('#sidebar ul.topics>li>ul').removeClass('active');
// 		$(e.target).parents('li').find('ul').addClass('active');
// 	})
// })
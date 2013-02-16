
var isFirstLaunch = Alloy.CFG.firstRun;

/*
if(!Ti.App.Properties.hasProperty(isFirstLaunch))
{
	Ti.App.Properties.setBool(isFirstLaunch,true);
}else
{
	$.index.open();
}
*/

var isView = 0;
$.menuBtn.on('click', function() {
	
	if(isView == 0){
		$.container.getView().animate({
				duration:200,
				left:230
				//height:Ti.UI.SIZE,
				//width:Ti.UI.SIZE
				
			},function(){
				$.menuBtn.left = 230;
			});
	  isView = 1;
	}else
	{
		$.container.getView().animate({
				duration:200,
				left:0
			},function(){
				$.menuBtn.left = 0;
			});
	  isView = 0;
	}
	
});

$.index.open();
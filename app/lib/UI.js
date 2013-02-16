/**
 * @author Lakshmanan v
 */

exports.menuListView = function(menuType, totalList) {

    var topPoint;
	var settingsObjArray = [];
	var aspectHeight = 80;

	var settingsView = Ti.UI.createView({
		width:Alloy.appWidth() - Alloy.aspectRatio(130,'w'),
		height:Alloy.appHeight() - aspectHeight,
		top:0,
		left:0,
		backgroundColor:'#24770c'
	});

	for(var i = 0; i < totalList; i++)
	{
		if(i != 6)
		{
			topPoint = i * ((Alloy.appWidth()- aspectHeight)/10);
		}else
		{
			topPoint = Alloy.appHeight() - (((Alloy.appHeight()- aspectHeight)/10) +  aspectHeight);
		}
		//alert(topPoint);
		var tempSettingsBtn = Ti.UI.createView({
					width:Alloy.appWidth() - Alloy.aspectRatio(130,'w'),
					height:((Alloy.appHeight() - aspectHeight)/10),
					top:topPoint,
					left:0,
					backgroundImage:'images/settings_button_bg@2x.png',
					backgroundColor:'#24770c',
					id:i,
					//alias:settingsAliasArray[i]
				});	
		settingsView.add(tempSettingsBtn)
	}
	
	return settingsView;

}


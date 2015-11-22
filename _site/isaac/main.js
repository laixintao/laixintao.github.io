var active_tools;
var Accessories;
var cards;
var shipin;

$().ready(function(){
	active_tools = get_active_tools_atlas();
	Accessories = get_Accessories();
	cards = get_Cards();
	shipin = get_shipin();
	add_Listener();
});

function add_Listener(){
	$("#active-tools-div > img").click(function(){
	on_Click_Listener(this);
	});

	$("#Accessories > img").click(function(){
	on_Click_Listener(this);
	});
	$("#cards > img").click(function(){
	on_Click_Listener(this);
	});
	$("#shipin > img").click(function(){
	on_Click_Listener(this);
	});
	$("#close > img").click(function(){
		$("#board").css("display","none");
	});
}

function on_Click_Listener(myclick){
	var click_id=myclick.id;
	click_id = click_id.replace("img","");
	var str;
	var this_class = $(myclick).attr("class");

	var num = parseInt(click_id)+1;

	if(this_class==="active_tools"){
		str = "<div class='temp' style='float:left;'><img style='max-height: 50px;max-width: 50px;width: 50px;margin: 5px;' src='graphics/active_tools/"+
		num+".png'></div><div class='temp' style='color=#191501;font-size:18px;float:left;'><p ><strong>"+

		active_tools[click_id].ch_name+"("+active_tools[click_id].atype+")</strong><br />"+
		"<i>"+active_tools[click_id].en_name+"</i><br /></p></div>"+

		"<div class='temp' style='color:#8DB2C9;clear:both;'><p><span style='background-color: #FFD700;'><strong>充能时间：</strong></span>"+active_tools[click_id].charge_time+"<br />"+
		"<span style='background-color: #FFD700;'><strong>效果：</strong></span>"+active_tools[click_id].effect;
		if(active_tools[click_id].unlock.length>0)
			str+="<br /><span style='background-color: #FFD700;'><strong>解锁方式：</strong></span>"+active_tools[click_id].unlock;
		str+="</p><div>";
	}else if(this_class==="Accessories"){
		str = "<div class='temp' style='float:left;'><img style='max-height: 50px;max-width: 50px;width: 50px;margin: 5px;' src='graphics/Accessories/"+
		num+".png'></div><div class='temp' style='font-size:18px;float:left;'><p ><strong>"+

		Accessories[click_id].ch_name+"("+Accessories[click_id].atype+")</strong><br />"+
		"<i>"+Accessories[click_id].en_name+"</i><br /></p></div>"+

		"<div class='temp' style='color:#8DB2C9;clear:both;'><span style='background-color: #FFD700;'><strong>效果：</strong></span>"+Accessories[click_id].effect;
		if(Accessories[click_id].unlock.length>0)
			str+="<br /><span style='background-color: #FFD700;'><strong>解锁方式：</strong></span>"+Accessories[click_id].unlock;
		str+="</p><div>";
	}else if(this_class==="cards"){
		str = "<div class='temp' style='float:left;'><img style='height: 60px;width: 47px;margin: 5px;' src='graphics/cards/"+
		num+".jpg'></div><div class='temp' style='font-size:18px;float:left;'><p ><strong>"+

		cards[click_id].ch_name+"("+cards[click_id].atype+")</strong><br />"+
		"<i>"+cards[click_id].en_name+"</i><br /></p></div>"+

		"<div class='temp' style='color:#8DB2C9;clear:both;'><span style='background-color: #FFD700;'><strong>效果：</strong></span>"+cards[click_id].effect;
		if(cards[click_id].unlock.length>0)
			str+="<br /><span style='background-color: #FFD700;'><strong>解锁方式：</strong></span>"+cards[click_id].unlock;
		str+="</p><div>";
	}else if(this_class==="shipin"){
    str = "<div class='temp' style='float:left;'><img style='max-height: 50px;max-width: 50px;width: 50px;margin: 5px;' src='graphics/shipin/"+
		num+".png'></div><div class='temp' style='font-size:18px;float:left;'><p ><strong>"+

    shipin[click_id].ch_name+"("+shipin[click_id].atype+")</strong><br />"+
    "<i>"+shipin[click_id].en_name+"</i><br /></p></div>"+

    "<div class='temp' style='color:#8DB2C9;clear:both;'><span style='background-color: #FFD700;'><strong>效果：</strong></span>"+shipin[click_id].effect;
    if(shipin[click_id].unlock.length>0)
      str+="<br /><span style='background-color: #FFD700;'><strong>解锁方式：</strong></span>"+shipin[click_id].unlock;
    str+="</p><div>";
  }
	
  	str = str.replace(/brbrbr/g,"<br />- 与");
	$("#display > .temp").detach();  //先移除之前的元素，在添加新的
	$("#display").append(str); //替换回车换行
	$("#board").css("display","inline");
}




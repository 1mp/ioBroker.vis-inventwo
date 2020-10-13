<!--
	ioBroker.vis vis-inventwo Widget-Set
	version: "2.0.0"
	Copyright 2020 jkvarel jkvarel@inventwo.com
-->

<link rel="stylesheet" href="widgets/vis-inventwo/css/style.css" />
	<script type="text/javascript" src="widgets/vis-inventwo/js/vis-inventwo.js"></script>

	<script id="i-vis-universal"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Universal.gif">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
iUniversalWidgetTypeInfo/custom,vis-inventwo.infoText,universalTypeInfo;
iUniversalWidgetType[Switch]/nselect,Switch,State,Navigation,Background/updateUniversalDataFields();
nav_view;
oid/id;
iValueType[boolean]/nselect,boolean,value;
iValueTypeInfo/custom,vis-inventwo.infoText,valueType;
iValueFalse/text;
iValueTrue/text;
value/text;
iTextFalse/html;
iTextTrue/html;
iImageFalse/image;
iImageTrue/image;
iStateResponseTime[0]/slider,0,2000,100;
iStateResetValueTime[0]/slider,0,2000,100;
iNavWait[100]/number;"
data-vis-attrs0="group.i-css;
iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iButtonCol[#333333]/color;
iButtonActive[#455618]/color;
iOpacityBack[1]/slider,0,1,0.1;

iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[12]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[12]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iContentFlexDirection[vertical]/select,horizontal,vertical;
iContentVertAlign[iSpace-between]/select,iStart,iCenter,iEnd,iSpace-between;
iContentOrder[orderImgText]/select,orderTextImg,orderImgText;
iOpacityCtn[1]/slider,0,1,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;
iTextAlign[iStart]/select,iStart,iCenter,iEnd;
iTextSpaceTop[0]/slider,0,50,1;
iTextSpaceBottom[0]/slider,0,50,1;
iTextSpaceLeft[0]/slider,0,50,1;
iTextSpaceRight[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iIconSize[35]/slider,0,200,1;
iImgAlign[iCenter]/select,iStart,iCenter,iEnd;
iImgSpaceTop[5]/slider,0,50,1;
iImgSpaceBottom[0]/slider,0,50,1;
iImgSpaceLeft[0]/slider,0,50,1;
iImgSpaceRight[0]/slider,0,50,1;
iImgRotation[0]/slider,0,180,1;
iFlipImage/checkbox;
iImgBlinkFalse[0]/slider,0,2000,100;
iImgBlinkTrue[0]/slider,0,2000,100;
iImgColorFalse[]/color/changeWidgetIconColor();
iImgColorTrue[]/color/changeWidgetIconColor();
iImgColorFalseFilter[]/text;
iImgColorTrueFilter[]/text;
iImgColorFalseOld[]/text;
iImgColorTrueOld[]/text;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowXOffset[2]/slider,0,20,1;
iShadowYOffset[2]/slider,0,20,1;
iShadowBlur[2]/slider,0,20,1;
iShadowSpread[1]/slider,0,20,1;
iShadowColor[#111111]/color;
iShadowColorActive[#111111]/color;

iText-ShadowInnerSettings/custom,vis-inventwo.infoText,emptyText;
iShadowInnerXOffset[0]/slider,0,20,1;
iShadowInnerYOffset[0]/slider,0,20,1;
iShadowInnerBlur[0]/slider,0,20,1;
iShadowInnerSpread[0]/slider,0,20,1;
iShadowInnerColor[#111111]/color;
iShadowInnerColorActive[#111111]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyle[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderColor[#ffffff]/color;
iBorderColorActive[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Universal<br>
	<span style='color:#888888;'>Switch - State/Button - Navigation - Background</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
<%= (el) -> vis.binds['vis-inventwo'].universalButton(el, this.data,'universal') %>
<%= (el) -> vis.binds['vis-inventwo'].hideImgFilterFields(el) %>
	</div>


	</script>

	<script id="i-vis-multi"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Multi.gif">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
iUniversalWidgetTypeInfo/custom,vis-inventwo.infoText,universalTypeInfo;
iUniversalWidgetType[Switch]/nselect,Switch,State,Navigation,Background/updateUniversalDataFields();
nav_view;
oid/id;
iValueType[boolean]/select,boolean,value;
iValueTypeInfo/custom,vis-inventwo.infoText,valueType;
iValueFalse/text;
iValueTrue/text;
value/text;
iTextFalse/html;
iImageFalse/image;
iStateResponseTime[0]/slider,0,2000,100;
iStateResetValueTime[0]/slider,0,2000,100;
iNavWait[100]/number;"
data-vis-attrs0="iUniversalValueCount[1]/number,1,20,1/updateUniversalDataFields();group.iUniversalValues/byindex;
iView(1-iUniversalValueCount)/views;
oid(1-iUniversalValueCount)/id;
iValue(1-iUniversalValueCount)/text;
iTextTrue(1-iUniversalValueCount)/html;

iText-BackgroundSettings(1-iUniversalValueCount)/custom,vis-inventwo.infoText,emptyText;
iButtonActiveM(1-iUniversalValueCount)[#455618]/color;

iText-ShadowSettings(1-iUniversalValueCount)/custom,vis-inventwo.infoText,emptyText;
iShadowColorActiveM(1-iUniversalValueCount)[#111111]/color;

iText-ShadowInnerSettings(1-iUniversalValueCount)/custom,vis-inventwo.infoText,emptyText;
iShadowInnerColorActiveM(1-iUniversalValueCount)[#111111]/color;

iText-BorderSettings(1-iUniversalValueCount)/custom,vis-inventwo.infoText,emptyText;
iBorderColorActiveM(1-iUniversalValueCount)[#ffffff]/color;

iText-ImageSettings(1-iUniversalValueCount)/custom,vis-inventwo.infoText,emptyText;
iImageTrue(1-iUniversalValueCount)/image;
iImgBlinkTrue(1-iUniversalValueCount)[0]/slider,0,2000,100;
iImgColorTrue(1-iUniversalValueCount)[]/color/changeWidgetIconColor();
iImgColorTrueFilter(1-iUniversalValueCount)[]/text;
iImgColorTrueOld(1-iUniversalValueCount)[]/text;"
data-vis-attrs1="group.i-css;
iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iButtonCol[#333333]/color;
iOpacityBack[1]/slider,0,1,0.1;

iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[12]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[12]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iContentFlexDirection[vertical]/select,horizontal,vertical;
iContentVertAlign[iSpace-between]/select,iStart,iCenter,iEnd,iSpace-between;
iContentOrder[orderImgText]/select,orderTextImg,orderImgText;
iOpacityCtn[1]/slider,0,1,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;
iTextAlign[iStart]/select,iStart,iCenter,iEnd;
iTextSpaceTop[0]/slider,0,50,1;
iTextSpaceBottom[0]/slider,0,50,1;
iTextSpaceLeft[0]/slider,0,50,1;
iTextSpaceRight[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iIconSize[35]/slider,0,200,1;
iImgAlign[iCenter]/select,iStart,iCenter,iEnd;
iImgRotation[0]/slider,0,180,1;
iImgSpaceTop[5]/slider,0,50,1;
iImgSpaceBottom[0]/slider,0,50,1;
iImgSpaceLeft[0]/slider,0,50,1;
iImgSpaceRight[0]/slider,0,50,1;
iFlipImage/checkbox;
iImgBlinkFalse[0]/slider,0,2000,100;
iImgColorFalse[]/color/changeWidgetIconColor();
iImgColorFalseFilter[]/color;
iImgColorFalseOld[]/text;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowXOffset[2]/slider,0,20,1;
iShadowYOffset[2]/slider,0,20,1;
iShadowBlur[2]/slider,0,20,1;
iShadowSpread[1]/slider,0,20,1;
iShadowColor[#111111]/color;

iText-ShadowInnerSettings/custom,vis-inventwo.infoText,emptyText;
iShadowInnerXOffset[0]/slider,0,20,1;
iShadowInnerYOffset[0]/slider,0,20,1;
iShadowInnerBlur[0]/slider,0,20,1;
iShadowInnerSpread[0]/slider,0,20,1;
iShadowInnerColor[#111111]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyle[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Multi<br>
	<span style='color:#888888;'>Switch - State/Button - Navigation - Background</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
<%= (el) -> vis.binds['vis-inventwo'].universalButton(el, this.data,'multi') %>
<%= (el) -> vis.binds['vis-inventwo'].hideImgFilterFields(el) %>
	</div>

	</script>

	<script id="i-vis-slider-simple"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Slider1.gif">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
oid/id;
iMinVal[1]/number;
iMaxVal[100]/number;
iStepVal[1]/slider,0,100,0.1;
iSliderRotation[0]/slider,-45,45,1;
iSliderLabel/text;
iShowMinMax/checkbox;
iShowValue/checkbox;
iValuePreText/text;"
data-vis-attrs0="group.i-css;
iSliderHeight[10]/slider,1,200,1;
iSliderKnobSize[20]/slider,1,200,1;
iSliderColor[#ffffff]/color;
iSliderKnobColor[#455618]/color;
iSliderTextColor[#ffffff]/color;
iValueTextColor[#455618]/color;
iTextSize[12]/slider,0,50,1;
iSliderCorners[100]/slider,0,100,1;
iSliderKnobCorners[100]/slider,0,100,1;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Simple Slider horizontal">

	<%

	let dataNew = Object.assign({},this.data);
if(vis.editMode){
	dataNew = vis.binds['vis-inventwo'].getDatapointsValues(dataNew);
}

let elHeight;
let topSpace = 0;
if((dataNew.iSliderKnobSize < dataNew.iTextSize) && dataNew.iShowMinMax){
	elHeight = elHeight = parseInt(dataNew.iTextSize) * 2 + 15;
	topSpace = parseInt(dataNew.iTextSize) / 2;
}
else{
	elHeight = parseInt(dataNew.iSliderKnobSize) + parseInt(dataNew.iTextSize) + 15;
	topSpace = parseInt(dataNew.iSliderKnobSize) / 2;
}

%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" id="<%= this.data.attr('wid') %>"
style="width:200px; height:<%= elHeight%>px; overflow:visible; cursor:pointer;font-size:<%= dataNew.iTextSize %>px;color:<%= dataNew.iSliderTextColor %>;z-index:1" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> " style="position:relative; height: auto; display:flex;align-items:center;flex-wrap:wrap; top:<%= topSpace%>px;">

	<% if(dataNew.iShowMinMax){ %>
<div style="margin-right: <%= (parseInt(dataNew.iSliderKnobSize) / 2) + 5 %>px"><%= dataNew.iMinVal %></div>

		<div style="top:50%;flex-grow:1; border: 0px; border-radius: <%= dataNew.iSliderCorners %>px;background: <%= dataNew.iSliderColor %>; height: <%= dataNew.iSliderHeight %>px;"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, dataNew,{orientation:"horizontal"}) %> ></div>

		<div style="margin-left: <%= (parseInt(dataNew.iSliderKnobSize) / 2) + 5 %>px"><%= dataNew.iMaxVal %></div>

		<% } else { %>
<div style="top:50%;flex-grow:1; border: 0px; border-radius: <%= dataNew.iSliderCorners %>px;background: <%= dataNew.iSliderColor %>; height: <%= dataNew.iSliderHeight %>px; margin: 0 <%= dataNew.iShowMinMax %>px;"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, dataNew,{orientation:"horizontal"}) %> ></div>

		<% } %>

</div>

<div style="position:absolute; left:0px; bottom:0px;"><%= dataNew.iSliderLabel %></div>
	<% if(dataNew.iShowValue){ %>
<div style="position:absolute; right:0px; bottom:0px;color:<%= dataNew.iValueTextColor%>"><%== dataNew.iValuePreText%><%= vis.states.attr(this.data.oid + '.val') %></div>
		<% } %>

</div>
</script>
<script id="i-vis-slider-simple-2"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Slider2.gif">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iMinVal[1]/number;iMaxVal[100]/number;iStepVal[1]/slider,0,100,0.1;iSliderRotation[0]/slider,-45,45,1;iSliderLabel/text;iShowMinMax/checkbox;iShowValue/checkbox;iValuePreText/text;"
data-vis-attrs0="group.i-css;iSliderHeight[10]/slider,1,200,1;iSliderKnobSize[20]/slider,1,200,1;iSliderColor[#ffffff]/color;iSliderKnobColor[#455618]/color;iSliderTextColor[#ffffff]/color;iValueTextColor[#455618]/color;iTextSize[12]/slider,0,50,1;iSliderCorners[100]/slider,0,100,1;iSliderKnobCorners[100]/slider,0,100,1;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Simple Slider vertical">

	<%

	let dataNew = Object.assign({},this.data);
if(vis.editMode){
	dataNew = vis.binds['vis-inventwo'].getDatapointsValues(dataNew);
}

%>
<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" id="<%= this.data.attr('wid') %>"
style="height:200px; width:<%= dataNew.iSliderHeight%>px; overflow:visible; cursor:pointer;font-size:<%= dataNew.iTextSize %>px;color:<%= dataNew.iSliderTextColor %>;z-index:1" >

	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> " style="position:relative; height: 100%;display: flex;flex-direction: column;align-items: center;">

	<% if(dataNew.iShowMinMax){ %>
<% if(dataNew.iShowValue){ %>
	<div><span style="color:<%= dataNew.iValueTextColor%>"><%== dataNew.iValuePreText%></span></div>
		<div style="margin-bottom: <%= (parseInt(dataNew.iSliderKnobSize) / 2) + 5 %>px">
			<span style="color:<%= dataNew.iValueTextColor%>"><%= vis.states.attr(this.data.oid + '.val') %> / </span><%= dataNew.iMaxVal %>
			</div>
			<% } else { %>
	<div style="margin-bottom: <%= (parseInt(dataNew.iSliderKnobSize) / 2) + 5 %>px"><%= dataNew.iMaxVal %></div>
			<% } %>

<div style="border: 0px; border-radius: <%= dataNew.iSliderCorners %>px;background: <%= dataNew.iSliderColor %>; width: <%= dataNew.iSliderHeight %>px;flex-grow:1"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, dataNew,{orientation:"vertical"}) %> ></div>

		<div style="margin-top: <%= (parseInt(dataNew.iSliderKnobSize) / 2) + 5 %>px"><%= dataNew.iMinVal %></div>
	<div><%= dataNew.iSliderLabel %></div>

		<% } else { %>
<div style="border: 0px; border-radius: <%= dataNew.iSliderCorners %>px;background: <%= dataNew.iSliderColor %>; width: <%= dataNew.iSliderHeight %>px;flex-grow:1"
	<%= (el) -> vis.binds['vis-inventwo'].handleSlider(el, dataNew,{orientation:"vertical"}) %> ></div>

		<div style="margin-top: <%= (parseInt(dataNew.iSliderKnobSize) / 2) + 5 %>px"><%= dataNew.iSliderLabel %></div>

		<% } %>



</div>


</div>
</script>

<script id="i-vis-image-new"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Image.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
oid/id;
iValue/text;
iImageFalse/image;
iImageTrue/image;
iPointerEvents/checkbox;"
data-vis-attrs0="group.i-css;
iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[0]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[0]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iImgRotation[0]/slider,0,180,1;
iFlipImage/checkbox;
iOpacityCtn[1]/slider,0,1,0.1;
iImgBlinkFalse[0]/slider,0,2000,100;
iImgBlinkTrue[0]/slider,0,2000,100;
iImgColorFalse[]/color/changeWidgetIconColor();
iImgColorFalseFilter[]/color;
iImgColorTrue[]/color/changeWidgetIconColor();
iImgColorTrueFilter[]/color;
iImgColorFalseOld[]/text;
iImgColorTrueOld[]/text;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowSpread[0]/slider,0,50,1;
iShadowSpreadInner[0]/slider,0,50,1;
iShadowBlur[0]/slider,0,50,1;
iShadowColor[#111111]/color;
iShadowColorActive[#111111]/color;"
data-vis-set="vis-inventwo"
data-vis-type="static,val"
data-vis-name="Image">

	<%
	let pointer_event = "auto";
if(this.data.iPointerEvents == true && !vis.editMode){
	pointer_event = "none";
}

%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light"
style="width:110px; height:110px; overflow:visible; cursor:default; z-index:1; pointer-events:<%== pointer_event %>;"
id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<%
	let d = this.data;

function create(){


	let dataNew = Object.assign({},d);
	if(vis.editMode){
		dataNew = vis.binds['vis-inventwo'].getDatapointsValues(dataNew);
	}

	let cssData = {};

	cssData.flip = 1;
	if(dataNew.iFlipImage){
		cssData.flip = -1;
	}

	let imgBlink;
	let imgColorFilter = "";
	let img = "";
	let shadow = "";

	let val = vis.binds["vis-inventwo"].convertValue(dataNew.iValue);



	if(dataNew.oid != undefined && vis.states.attr(dataNew.oid + '.val') == val) {
		imgBlink = dataNew.iImgBlinkTrue / 1000;
		imgColorFilter = dataNew.iImgColorTrueFilter;
		if(dataNew.iImgColorTrue != dataNew.iImgColorTrueOld)
			imgColorFilter = vis.binds["vis-inventwo"].createNewColorFilter(dataNew.wid,"iImgColorTrue");
		img = dataNew.iImageTrue;
		shadow = "box-shadow: 0px 0px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px " + dataNew.iShadowColorActive;
	}
	else{
		imgBlink = dataNew.iImgBlinkFalse / 1000;
		imgColorFilter = dataNew.iImgColorFalseFilter;
		if(dataNew.iImgColorFalse != dataNew.iImgColorFalseOld)
			imgColorFilter = vis.binds["vis-inventwo"].createNewColorFilter(dataNew.wid,"iImgColorFalse");
		img = dataNew.iImageFalse;
		shadow = "box-shadow: 0px 0px " + dataNew.iShadowBlur + "px " + dataNew.iShadowSpread + "px " + dataNew.iShadowColor;
	}

	return `
            		<div class="vis-inventwo-button-imageContainer"
            			 style="align-self: center;
            			 		display: flex;
    							justify-content: center;
    							align-items: center;
    							width:100%; height:100%;
    							opacity: ` + dataNew.iOpacityCtn + `;">

            			<div style="width: ` + dataNew.iShadowSpreadInner + `px; height: ` + dataNew.iShadowSpreadInner+
		`px; position: absolute; background:` + dataNew.iShadowColor+ `; border-radius: 100%; ` + shadow + `;"></div>
            		    <img src='` + img + `'
            		    	 width="100%;height:100%;"
            		    	 style="
            		    	 		transform: scaleX(` + cssData.flip + `) rotateZ(` + dataNew.iImgRotation + `deg);
            		    	 		border-radius: ` + dataNew.iCornerRadiusUL + `px ` + data.iCornerRadiusUR+ `px ` + data.iCornerRadiusLR+ `px ` + data.iCornerRadiusLL+ `px;
            		    	 		animation:blink ` + imgBlink + `s infinite; ` + imgColorFilter + `">
					</div>
            		`;

}
%>

<div class="vis-inventwo-button-new" style="width:100%; height:100%;">
	<div style="width:100%; height:100%;">
<%== create() %>
</div>
</div>
</div>
<%= (el) -> vis.binds['vis-inventwo'].hideImgFilterFields(el) %>
	</div>
	</script>

	<script id="i-vis-jsontable"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Table.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
oid/id;
iTblShowHead/checkbox;
iTblRowLimit[1]/number;
iVertScroll/checkbox;
iHorScroll/checkbox;"
data-vis-attrs0="iColCount[1]/number,0,100,1;group.iTableCol/byindex;
iColShow(1-iColCount)[true]/checkbox;
iColName(1-iColCount)/text;
iColAttr(1-iColCount)/text;
iColWidth(1-iColCount)/text;
iTblCellFormat(1-iColCount)[normal]/nselect,normal,datetime,image/updateJsonTableFields();
iTblCellDatetimeFormat(1-iColCount)/text;
iTblCellDatetimeFormatInfo(1-iColCount)/custom,vis-inventwo.infoText,tblDateInfo;
iTblCellImageSize(1-iColCount)[200]/slider,0,1000,1;
iTblTextAlign(1-iColCount)[left]/nselect,left,center,right;"
data-vis-attrs1="group.i-css;

iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iOpacityAll[1]/slider,0,1,0.1;
iTblRowEvenColor[#333333]/color;
iTblRowUnevenColor[#455618]/color;
iTblHeaderColor[#333333]/color;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iRowSpacing[10]/slider,0,50,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTblRowEvenTextColor[#ffffff]/color;
iTblRowUnevenTextColor[#ffffff]/color;
iTblHeaderTextColor[#ffffff]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyleLeft[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderStyleRight[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderStyleUp[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderStyleDown[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderRemoveDouble/checkbox;
iBorderColor[#ffffff]/color;"

data-vis-set="vis-inventwo"
data-vis-type="table"
data-vis-name="JSON Table">

	<%

	let dataNew = Object.assign({},this.data);
if(vis.editMode){
	dataNew = vis.binds['vis-inventwo'].getDatapointsValues(dataNew);
}

%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:auto; height:auto; overflow:hidden;z-index:1" id="<%= this.data.attr('wid') %>" >
<%= (el) -> vis.binds['vis-inventwo'].jsontable(el, dataNew) %>
	</div>

	</script>

	<script id="i-vis-radiobutton-list"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Radio.gif">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
oid/id;
iRadiobtnWidth[100]/slider,50,200,1;
iRadiobtnHeight[50]/slider,10,200,1;
iRadiobtnSpace[10]/slider,0,100,1;
iRadiobtnAlign[horizontal]/select,vertical,horizontal;"
data-vis-attrs0="iRadiobtnsCount[1]/number,0,100,1;group.iRadioBtns/byindex;
iTextFalse(1-iRadiobtnsCount)/html;
iTextTrue(1-iRadiobtnsCount)/html;
iValue(1-iRadiobtnsCount)/text;
iText-BackgroundSettings(1-iRadiobtnsCount)/custom,vis-inventwo.infoText,emptyText;
iText-BackColorRadioInfo/custom,vis-inventwo.infoText,radioBtnBackColInfoText;
iButtonBackM(1-iRadiobtnsCount)/color;
iButtonBackActiveM(1-iRadiobtnsCount)/color;
iText-ImgSettings(1-iRadiobtnsCount)/custom,vis-inventwo.infoText,emptyText;
iImageFalse(1-iRadiobtnsCount)/image;
iImageTrue(1-iRadiobtnsCount)/image;
iImgColorFalse(1-iRadiobtnsCount)[]/color/changeWidgetIconColor();
iImgColorFalseFilter(1-iRadiobtnsCount)[]/color;
iImgColorTrue(1-iRadiobtnsCount)[]/color/changeWidgetIconColor();
iImgColorTrueFilter(1-iRadiobtnsCount)[]/color;
iImgColorFalseOld(1-iRadiobtnsCount)[]/text;
iImgColorTrueOld(1-iRadiobtnsCount)[]/text;"
data-vis-attrs1="group.i-css;
iText-BackgroundSettings/custom,vis-inventwo.infoText,emptyText;
iButtonCol[#333333]/color;
iButtonActive[#455618]/color;
iOpacityBack[1]/slider,0,1,0.1;

iText-CornerSettings/custom,vis-inventwo.infoText,emptyText;
iCornerRadiusUL[12]/slider,0,50,1;
iCornerRadiusUR[0]/slider,0,50,1;
iCornerRadiusLR[12]/slider,0,50,1;
iCornerRadiusLL[0]/slider,0,50,1;

iText-ContentSettings/custom,vis-inventwo.infoText,emptyText;
iContentFlexDirection[vertical]/select,horizontal,vertical;
iContentVertAlign[iSpace-between]/select,iStart,iCenter,iEnd,iSpace-between;
iContentOrder[orderImgText]/select,orderTextImg,orderImgText;
iOpacityCtn[1]/slider,0,1,0.1;

iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;
iTextAlign[iStart]/select,iStart,iCenter,iEnd;
iTextSpaceTop[0]/slider,0,50,1;
iTextSpaceBottom[0]/slider,0,50,1;
iTextSpaceLeft[0]/slider,0,50,1;
iTextSpaceRight[0]/slider,0,50,1;

iText-ImageSettings/custom,vis-inventwo.infoText,emptyText;
iIconSize[35]/slider,0,200,1;
iImgAlign[iCenter]/select,iStart,iCenter,iEnd;
iImgRotation[0]/slider,0,180,1;
iImgSpaceTop[0]/slider,0,50,1;
iImgSpaceBottom[0]/slider,0,50,1;
iImgSpaceLeft[0]/slider,0,50,1;
iImgSpaceRight[0]/slider,0,50,1;
iFlipImage/checkbox;

iText-ShadowSettings/custom,vis-inventwo.infoText,emptyText;
iShadowXOffset[2]/slider,0,20,1;
iShadowYOffset[2]/slider,0,20,1;
iShadowBlur[2]/slider,0,20,1;
iShadowSpread[1]/slider,0,20,1;
iShadowColor[#111111]/color;
iShadowColor[#111111]/color;
iShadowColorActive[#111111]/color;

iText-ShadowInnerSettings/custom,vis-inventwo.infoText,emptyText;
iShadowInnerXOffset[0]/slider,0,20,1;
iShadowInnerYOffset[0]/slider,0,20,1;
iShadowInnerBlur[0]/slider,0,20,1;
iShadowInnerSpread[0]/slider,0,20,1;
iShadowInnerColor[#111111]/color;
iShadowInnerColorActive[#111111]/color;

iText-BorderSettings/custom,vis-inventwo.infoText,emptyText;
iBorderSize[0]/slider,0,20,1;
iBorderStyle[none]/nselect,dotted,dashed,solid,double,groove,ridge,inset,outset,none;
iBorderColor[#ffffff]/color;
iBorderColorActive[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Radiobutton List">

	<%
	let dataNew = Object.assign({},this.data);
if(vis.editMode){
	dataNew = vis.binds['vis-inventwo'].getDatapointsValues(dataNew);
}
%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:auto; height:auto; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">

	<%
	let cssData = {};

if(dataNew.iRadiobtnAlign == 'vertical'){
	cssData.align = "column";
	cssData.marginDir = "bottom";
}
else if(dataNew.iRadiobtnAlign == 'horizontal'){
	cssData.align = "row";
	cssData.marginDir = "right";
}
%>

<div class="vis-inventwo-class vis-widget-body vis-inventwo-radiobtnlist-body <%== this.data.attr('class') %>" style="flex-direction: <%= cssData.align %>">

	<%

	let flip = 1;
if(dataNew.iFlipImage){
	cssData.flip = -1;
}

//Vertikale Inhaltsausrichtung
let vertTextAlign = "";
if(dataNew.iContentVertAlign == 'iStart')
	cssData.vertTextAlign = "flex-start";
else if(dataNew.iContentVertAlign == 'iCenter')
	cssData.vertTextAlign = "center";
else if(dataNew.iContentVertAlign == 'iEnd')
	cssData.vertTextAlign = "flex-end";
else if(dataNew.iContentVertAlign == 'iSpace-between')
	cssData.vertTextAlign = "space-between";

//Inhaltsausrichtung (Reihe oder Spalte)
let contFlexDir = "";
if(dataNew.iContentFlexDirection == "vertical")
	cssData.contFlexDir = "column";
else if(dataNew.iContentFlexDirection == "horizontal")
	cssData.contFlexDir = "row";

//Inhaltsreihenfolge (Erst Bild dann Text oder erst Text dann Bild)
let orderContent = "";
if(dataNew.iContentOrder == 'orderTextImg')
	cssData.orderContent = 2;
else
	cssData.orderContent = 0;

//
let imgAlign = "";
if(dataNew.iImgAlign == 'iStart')
	cssData.imgAlign = "flex-start";
else if(dataNew.iImgAlign == 'iCenter')
	cssData.imgAlign = "center";
else if(dataNew.iImgAlign == 'iEnd')
	cssData.imgAlign = "flex-end";

//
let textAlign = "";
if(dataNew.iTextAlign == 'iStart')
	cssData.textAlign = "flex-start";
else if(dataNew.iTextAlign == 'iCenter')
	cssData.textAlign = "center";
else if(dataNew.iTextAlign == 'iEnd')
	cssData.textAlign = "flex-end";
%>

<% for(let val = 1; val <= dataNew.iRadiobtnsCount; val++){ %>

<div style="width: <%= dataNew.iRadiobtnWidth %>px;
	height: <%= dataNew.iRadiobtnHeight %>px;
	position: relative;
	margin-<%= cssData.marginDir %>: <%= dataNew.iRadiobtnSpace %>px;">

	<div>

	<%

	let backCol = "";
	let imgColorFilter = "";
	let value = vis.binds["vis-inventwo"].convertValue(dataNew['iValue' + val]);

	if(vis.states.attr(this.data.oid + '.val') == value){

		if(dataNew['iButtonBackActiveM' + val] != undefined){
			backCol = dataNew['iButtonBackActiveM' + val];
		}
		else{
			backCol = dataNew.iButtonActive;
		}
		imgColorFilter = dataNew["iImgColorTrueFilter" + val];

		if(dataNew["iImgColorTrue" + val] != dataNew["iImgColorTrueOld" + val])
			imgColorFilter = vis.binds["vis-inventwo"].createNewColorFilter(dataNew.wid,"iImgColorTrue" + val);
	}
	else{
		if(dataNew['iButtonBackM' + val] != undefined){
			backCol = dataNew['iButtonBackM' + val];
		}
		else{
			backCol = dataNew.iButtonCol;
		}
		imgColorFilter = dataNew["iImgColorFalseFilter" + val];

		if(dataNew["iImgColorFalse" + val] != dataNew["iImgColorFalseOld" + val])
			imgColorFilter = vis.binds["vis-inventwo"].createNewColorFilter(dataNew.wid,"iImgColorFalse" + val);
	}

%>


<div class="vis-inventwo-button-new"
		<% if(vis.states.attr(this.data.oid + '.val') == dataNew['iValue' + val]) { %>
		style="background: <%= backCol%>;
		opacity: <%= dataNew.iOpacityBack %>;
		border-radius: <%= dataNew.iCornerRadiusUL %>px <%= dataNew.iCornerRadiusUR %>px <%= dataNew.iCornerRadiusLR %>px <%= dataNew.iCornerRadiusLL %>px;
		box-shadow: <%= dataNew.iShadowXOffset + 'px ' + dataNew.iShadowYOffset + 'px ' + dataNew.iShadowBlur + 'px ' + dataNew.iShadowSpread + 'px ' + dataNew.iShadowColorActive%>,
			inset <%= dataNew.iShadowInnerXOffset + 'px ' + dataNew.iShadowInnerYOffset + 'px ' + dataNew.iShadowInnerBlur + 'px ' + dataNew.iShadowInnerSpread + 'px ' + dataNew.iShadowInnerColorActive %>;
		border: <%= dataNew.iBorderSize + 'px ' + dataNew.iBorderStyle + ' ' + dataNew.iBorderColorActive%>;"
		<% } else { %>
		style="background: <%= backCol%>;
		opacity: <%= dataNew.iOpacityBack %>;
		border-radius: <%= dataNew.iCornerRadiusUL %>px <%= dataNew.iCornerRadiusUR %>px <%= dataNew.iCornerRadiusLR %>px <%= dataNew.iCornerRadiusLL %>px;
		box-shadow: <%= dataNew.iShadowXOffset + 'px ' + dataNew.iShadowYOffset + 'px ' + dataNew.iShadowBlur + 'px ' + dataNew.iShadowSpread + 'px ' + dataNew.iShadowColor%>,
			inset <%= dataNew.iShadowInnerXOffset + 'px ' + dataNew.iShadowInnerYOffset + 'px ' + dataNew.iShadowInnerBlur + 'px ' + dataNew.iShadowInnerSpread + 'px ' + dataNew.iShadowInnerColor%>;
		border: <%= dataNew.iBorderSize + 'px ' + dataNew.iBorderStyle + ' ' + dataNew.iBorderColor %>;"
		<% } %> ></div>

	<div class="vis-inventwo-button-content"
	style="opacity: <%=dataNew.iOpacityCtn %>;
	justify-content: <%= cssData.vertTextAlign %>;
	flex-direction: <%= cssData.contFlexDir %>;
	">

	<div style="order: <%= cssData.orderContent %>;
	align-self: <%= cssData.imgAlign %>;
	margin: <%= dataNew.iImgSpaceTop + 'px ' + dataNew.iImgSpaceRight + 'px ' + dataNew.iImgSpaceBottom + 'px ' + dataNew.iImgSpaceLeft + 'px' %>;">
	<% if(vis.states.attr(this.data.oid + '.val') == dataNew['iValue' + val]) { %>
	<img src='<%= dataNew['iImageTrue' + val] %>' width="<%= dataNew.iIconSize %>"
		style="<%= imgColorFilter %>
		transform: scaleX(<%= flip %>) rotateZ(<%= dataNew.iImgRotation %>deg);" >
		<% } else if(dataNew['iImageFalse' + val] != ""){ %>
	<img src='<%= dataNew['iImageFalse' + val] %>' width="<%= dataNew.iIconSize %>"
		style="<%= imgColorFilter %>
		transform: scaleX(<%= flip %>) rotateZ(<%= dataNew.iImgRotation %>deg);" >
		<% } %>
</div>
	<div style="font-size: <%= dataNew.iTextSize %>px;
	color:<%= dataNew.iTextColor %>;
	margin: <%= dataNew.iTextSpaceTop + 'px ' + dataNew.iTextSpaceRight + 'px ' + dataNew.iTextSpaceBottom + 'px ' + dataNew.iTextSpaceLeft + 'px' %>;
	align-self: <%= cssData.textAlign %>;">

	<% if(vis.states.attr(this.data.oid + '.val') == dataNew['iValue' + val]) { %>
	<%== dataNew['iTextTrue' + val] %>
			<% } else { %>
	<%== dataNew['iTextFalse' + val] %>
			<% } %>
</div>

	</div>

	</div>

	<%= (el) -> vis.binds['vis-inventwo'].radiobutton(el, this.data.attr('oid'),dataNew['iValue' + val]) %>

		</div>

		<% } %>

</div>

<%= (el) -> vis.binds['vis-inventwo'].hideImgFilterFields(el) %>

	</div>

	</script>

	<script id="i-vis-valuelist"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/List.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
iValueListInfo/custom,vis-inventwo.infoText,valueListInfoText;
oid/id;
iValueListText/html;
iValueListDelimiter/text;
iValueListStyle[disc]/nselect,none,lower-alpha,upper-alpha,square,circle,decimal, decimal-leading-zero,disc;
iValueListEntryDistance[0]/slider,0,50,1;"
data-vis-attrs0="group.i-css;
iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;"
data-vis-set="vis-inventwo"
data-vis-type="table"
data-vis-name="Value List">

	<%
	let pointer_event = "auto";
if(this.data.iPointerEvents == true && !vis.editMode){
	pointer_event = "none";
}
%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light"
style="width:110px; height:110px; overflow:visible; cursor:default; z-index:1; pointer-events:<%== pointer_event %>;"
id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

<%= (el) -> vis.binds['vis-inventwo'].valueList(el, this.data) %>

	</div>
	</div>
	</script>

	<script id="i-vis-marquee"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/Marquee.gif">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;
iValueListInfo/custom,vis-inventwo.infoText,valueListInfoText;
oid/id;
iMarqueeText[Lauftext]/html;
iMarqueeDirection[left]/nselect,left,right,up,down;
iMarqueeSpeed[20]/slider,1,50,1;"
data-vis-attrs0="group.i-css;
iText-TextSettings/custom,vis-inventwo.infoText,emptyText;
iTextColor[#ffffff]/color;
iTextSize[12]/slider,0,50,1;"
data-vis-set="vis-inventwo"
data-vis-type="static,val"
data-vis-name="Marquee<br><span style='color:red;'>Funktioniert nicht in allen Browsern! Neues Widget ist in arbeit</span>">

	<%
	let pointer_event = "auto";
if(this.data.iPointerEvents == true && !vis.editMode){
	pointer_event = "none";
}
%>

<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light"
style="width:110px; height:20px; overflow:visible; cursor:default; z-index:1; pointer-events:<%== pointer_event %>;"
id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<marquee
style="color: <%= this.data.iTextColor %>;
font-size: <%= this.data.iTextSize %>px;
height: 100%; widht: 100%;"
direction="<%= this.data.iMarqueeDirection %>"
scrollamount="<%= this.data.iMarqueeSpeed %>">

<%== this.data.iMarqueeText %>
	</marquee>

	</div>
	</div>

	</script>



	<!-- WERDEN ENTFERNT -->
	<script id="i-vis-switch"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Switch.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/html;iTextTrue/html;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Switch<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>


<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
<%= (el) -> vis.binds['vis-inventwo'].handleToggle(el, this.data) %>
	</div>

	</div>
	</script>
	<script id="i-vis-switch-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Switch1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/text;iTextTrue/text;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Switch Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>

<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
<%= (el) -> vis.binds['vis-inventwo'].handleToggle(el, this.data) %>
	</div>

	</div>
	</script>

	<script id="i-vis-button"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Button.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;value;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Button<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<div class="vis-inventwo-button"
style="background: <%= this.data.attr('iButtonCol') %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">
	<div class="vis-inventwo-button-imageContainer">
	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>
</div>
</div>
<%= (el) -> vis.binds['vis-inventwo'].state(el, this.data) %>
	</div>
	</script>
	<script id="i-vis-button-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Button1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;value;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Button Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<div class="vis-inventwo-button"
style="background: <%= this.data.attr('iButtonCol') %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<div style="order:2; position:relative;">
	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>

</div>
<%= (el) -> vis.binds['vis-inventwo'].state(el, this.data) %>
	</div>

	</div>
	</script>

	<script id="i-vis-navigation"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Nav.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;nav_view;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iNavWait[100]/number;oid/id;iNavValue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Navigation<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<%
	let backgroundcol = this.data.iButtonCol;
if(this.data.nav_view === vis.activeView){
	backgroundcol = this.data.iButtonActive;
}
%>

<div class="vis-inventwo-button vis-inventwo-nav" data-inventwo-nav="<%= this.data.nav_view%>" data-activeCol="<%= this.data.iButtonActive%>" data-col="<%= this.data.iButtonCol%>"
style="background: <%= backgroundcol %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">
	<div class="vis-inventwo-button-imageContainer">

	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">

	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>
</div>
<%= (el) -> vis.binds['vis-inventwo'].handleNavigation(el, this.data) %>
	</div>

	</div>
	</script>
	<script id="i-vis-navigation-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Nav1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;nav_view;iText/text;iTextSize[12]/slider,0,50,1;iImage/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iNavWait[100]/number;oid/id;iNavValue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="ctrl"
data-vis-name="Navigation Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>">
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<%
	let backgroundcol = this.data.iButtonCol;
if(this.data.nav_view === vis.activeView){
	backgroundcol = this.data.iButtonActive;
}
%>

<div class="vis-inventwo-button vis-inventwo-nav" data-inventwo-nav="<%= this.data.nav_view%>" data-activeCol="<%= this.data.iButtonActive%>" data-col="<%= this.data.iButtonCol%>"
style="background:  <%= backgroundcol %>;
border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
opacity:<%= this.data.attr('iOpacity')%>;"
>
</div>
<%

let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<div style="order:2; position:relative;">
	<img src='<%= this.data.iImage %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
<%== this.data.iText %>
</div>

</div>
<%= (el) -> vis.binds['vis-inventwo'].handleNavigation(el, this.data) %>
	</div>

	</div>
	</script>

	<script id="i-vis-background"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Background.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/html;iTextTrue/html;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[60]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="val"
data-vis-name="Background<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityCtn') %>;">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>


<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div class="vis-inventwo-button-imageContainer">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);" >
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;color:<%= this.data.iTextColor %>;">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
</div>

</div>
</script>
<script id="i-vis-background-small"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Background1.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;oid/id;iTextFalse/text;iTextTrue/text;iTextSize[12]/slider,0,50,1;iImageFalse/image;iImageTrue/image;iIconSize[35]/slider,0,200,1;iInvertImageCol/checkbox;iFlipImage/checkbox;iValueType[boolean]/select,boolean,value;iValueTypeInfo/custom,vis-inventwo.infoText,valueType;iValueFalse/text;iValueTrue/text;"
data-vis-attrs0="group.i-css;iButtonCol[#333333]/color;iButtonActive[#455618]/color;
iCornerRadiusUL[12]/slider,0,50,1;iCornerRadiusUR[0]/slider,0,50,1;iCornerRadiusLR[12]/slider,0,50,1;iCornerRadiusLL[0]/slider,0,50,1;
iOpacity[1]/slider,0,1,0.1;iOpacityCtn[1]/slider,0,1,0.1;iTextColor[#ffffff]/color;"
data-vis-set="vis-inventwo"
data-vis-type="val"
data-vis-name="Background Small<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:50px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %>">

	<div class="vis-inventwo-button"
	<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
	style="background: <%= this.data.attr('iButtonActive') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } else { %>
	style="background: <%= this.data.attr('iButtonCol') %>;
	border-radius: <%= this.data.attr('iCornerRadiusUL') %>px <%= this.data.attr('iCornerRadiusUR') %>px <%= this.data.attr('iCornerRadiusLR') %>px <%= this.data.attr('iCornerRadiusLL') %>px;
	opacity:<%= this.data.attr('iOpacity')%>;"
	<% } %>
>
</div>

<div class="vis-inventwo-button-content-small" style="opacity: <%= this.data.attr('iOpacityCtn') %>">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>

<% if((vis.states.attr(this.data.oid + '.val') && this.data.iValueType == 'boolean') || (vis.states.attr(this.data.oid + '.val') == this.data.iValueTrue && this.data.iValueType == 'value')) { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageTrue %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextTrue %>
		</div>
		<% } else { %>
<div style="order:2; position:relative;">
		<img src='<%= this.data.iImageFalse %>' width="<%= this.data.iIconSize %>" style="filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
		</div>
		<div class="vis-inventwo-button-text" style="font-size: <%= this.data.iTextSize %>px;display:table-cell;color:<%= this.data.iTextColor %>">
	<%== this.data.iTextFalse %>
		</div>
		<% } %>

</div>
</div>

</div>
</script>

<script id="i-vis-image"
type="text/ejs"
class="vis-tpl"
data-vis-prev='<img src="widgets/vis-inventwo/img/0_Image.png">'
data-vis-attrs="iWiki/custom,vis-inventwo.externalLinks,wiki;iImage/image;iInvertImageCol/checkbox;iFlipImage/checkbox;"
data-vis-attrs0="group.i-css;iOpacityImg[1]/slider,0,1,0.1;"
data-vis-set="vis-inventwo"
data-vis-type="static"
data-vis-name="Image<br><span style='color:red;'>WARNING! No longer supported. Will be removed in future update!</span>">

	<div class="vis-widget <%== this.data.attr('class') %> waves-effect waves-light" style="width:110px; height:110px; overflow:visible; cursor:pointer;z-index:1" id="<%= this.data.attr('wid') %>" >
	<div class="vis-inventwo-class vis-widget-body <%== this.data.attr('class') %> ">

	<%

	let flip = 1;
if(this.data.attr('iFlipImage')){
	flip = -1;
}

%>
<div class="vis-inventwo-button-content" style="opacity: <%= this.data.attr('iOpacityImg') %>;">
	<div class="vis-inventwo-button-imageContainer">
	<img src='<%= this.data.iImage %>' style="width:100%; filter: invert(<%= Number(this.data.attr('iInvertImageCol')) %>);transform: scaleX(<%= flip %>);">
	</div>
	</div>
	</div>
	</div>
	</script>
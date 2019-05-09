(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{562:function(e,t,s){"use strict";var a=s(1),i=s.n(a),r=s(0),n=s.n(r),o=s(6),l=s(523),m=s.n(l),c=s(69),u=s(166),d=s(524),p=s.n(d),h=s(23),g=s.n(h),M=s(2),b=s.n(M),f=s(4);const v={title:n.a.string.isRequired,fittingInformation:n.a.arrayOf(n.a.string)};class w extends a.Component{render(){return this.renderFittingInformation()}renderFittingInformation(){if(!this.props.fittingInformation)return null;const e=this.props.fittingInformation.map((e,t)=>i.a.createElement("li",{className:p.a["Fitting-Information-listItem"],key:t},i.a.createElement("span",{className:b()(p.a.text,f.a.M)},e)));return i.a.createElement("div",{className:p.a["Fitting-Information"],"data-tstid":"fittingInformation"},i.a.createElement("p",{className:b()(g.a["Details-title"],g.a["Details-block"],f.a.Mbold)},this.props.title),i.a.createElement("ul",{className:p.a["Fitting-Information-list"]},e))}}w.propTypes=v;var z=Object(o.b)(e=>({title:e.labels.fittingTitle,fittingInformation:e.productViewModel.measurements.fittingInformation}))(w),N=s(525),S=s.n(N),A=s(128),C=s(3);const E={isOneSize:n.a.bool,labels:n.a.objectOf(n.a.string).isRequired,sizeGuideUri:n.a.string,isNewCollapserActive:n.a.bool.isRequired,isSizeGuideSliceEnabled:n.a.bool};class O extends a.Component{render(){return i.a.createElement("div",null,this.renderMeasurementsDisclaimer(),!this.props.isNewCollapserActive&&this.renderSizeHelp())}renderMeasurementsDisclaimer(){return i.a.createElement("p",{className:b()(S.a["Disclaimer-info-disclaimer"],{[S.a.secondary]:this.props.isNewCollapserActive})},this.props.labels.disclaimer)}renderSizeHelp(){return this.props.isOneSize?null:i.a.createElement("div",{"data-tstid":"measurementsSizeGuide"},i.a.createElement("p",{className:b()(S.a["Disclaimer-info-help"],f.a.M)},this.props.labels.help),i.a.createElement("span",{className:b()(S.a["Disclaimer-info-sizeGuide"],f.a.M)},"\xa0",this.renderSizeGuideButton()))}renderSizeGuideButton(){return i.a.createElement(A.a,{text:this.props.labels.sizeGuide,isOneSize:this.props.isOneSize,uri:this.props.sizeGuideUri,trackerContext:"sizefit"})}}O.propTypes=E,O.defaultProps={isOneSize:!1};var I=Object(o.b)(e=>{const t=Object(C.z)(e);return{sizeGuideUri:t.sizeGuideUri,isSizeGuideSliceEnabled:t.isSizeGuideSliceEnabled,isOneSize:e.productViewModel.measurements.isOneSize,labels:e.labels}})(O),y=s(38),T=s(24),k=s(558);const D={availableUnits:n.a.arrayOf(n.a.string),category:n.a.string,defaultUnit:n.a.number,friendlyScaleName:n.a.string,isOneSize:n.a.bool,labels:n.a.shape({seeMoreMeasurements:n.a.string.isRequired,productMeasurementInfo:n.a.string.isRequired,productMeasurementInfoOneSize:n.a.string.isRequired,modelIsWearing:n.a.string.isRequired,productMeasurements:n.a.string.isRequired,modelMeasurements:n.a.string.isRequired,size:n.a.string.isRequired,measurements:n.a.string.isRequired}).isRequired,modelMeasurements:n.a.objectOf(n.a.arrayOf(n.a.string)),modelIsWearing:n.a.string,productMeasurements:n.a.shape({standard:n.a.objectOf(n.a.arrayOf(n.a.string)),extra:n.a.objectOf(n.a.arrayOf(n.a.string))}),showSeeMoreMeasurements:n.a.bool,sizeDescription:n.a.string,toggleUnits:n.a.func.isRequired,wearingDescription:n.a.string,isFittingInfoActive:n.a.bool.isRequired,isNewCollapserActive:n.a.bool.isRequired,hasABTestContext:n.a.bool.isRequired};class j extends a.Component{constructor(e){super(e),this._handleAboveLinkClick=this._handleAboveLinkClick.bind(this),this.state={active:e.defaultUnit}}render(){const e=this.props.isNewCollapserActive,t=e?k.a:"div",s=e?{}:{className:m.a.Measurements};return i.a.createElement(t,Object.assign({},s,this.renderTitle()),i.a.createElement("div",{className:b()({[m.a["Measurements-block"]]:!e}),"data-tstid":"measurementsModule"},!e&&i.a.createElement(z,null),this.renderMeasurements()))}renderTitle(){if(!this.props.isNewCollapserActive)return{};const e=this.props.isOneSize?this.props.friendlyScaleName:"".concat(this.props.sizeDescription," ").concat(this.props.friendlyScaleName);return{title:i.a.createElement("span",null,this.props.labels.measurements,": ",i.a.createElement("span",{className:m.a.sizeLabel},this.props.labels.size)," ",e," ")}}renderMeasurements(){const e=this.props,t=e.hasABTestContext,s=e.productMeasurements,a=e.modelMeasurements;return Object(T.c)(s)&&Object(T.c)(a)||t&&Object(T.c)(a)?null:i.a.createElement("div",null,!this.props.isNewCollapserActive&&this.renderMeasurementsInformation(),this.renderTabs(),this.renderPropertiesBlockContainer(),i.a.createElement(I,{isNewCollapserActive:this.props.isNewCollapserActive}))}renderMeasurementsInformation(){return this.props.productMeasurements&&!this.props.hasABTestContext?i.a.createElement("div",{className:m.a["Measurements-More-Info"]},this.renderMeasurementsDetailLine(),this.renderSeeMoreMeasurementsLine()):null}renderSeeMoreMeasurementsLine(){if(!this.props.showSeeMoreMeasurements)return null;const e=this.props.labels.seeMoreMeasurements.split("{0}");return i.a.createElement("p",null,e[0],this.renderAboveLink(e[1]),e[2])}renderMeasurementsDetailLine(){const e="".concat(this.props.sizeDescription," ").concat(this.props.friendlyScaleName),t=this.props.isOneSize?this.props.labels.productMeasurementInfoOneSize:this.props.labels.productMeasurementInfo.replace("{0}",this.props.category).replace("{1}",e);return i.a.createElement("p",null,t)}renderAboveLink(e){return i.a.createElement(y.a,{"data-tstid":"aboveLink",theme:"primary",href:"#bannerComponents-Container",onClick:this._handleAboveLinkClick,underline:!0},e)}renderTabs(){const e=this.props,t=e.productMeasurements,s=e.modelMeasurements;if(Object(T.c)(t)&&Object(T.c)(s))return null;let a=this.props.availableUnits.map((e,t)=>{const s=b()(m.a["Measurements-units-tabs"],{[m.a.isActive]:t===this.state.active,[f.a.Mcondensed]:this.props.isNewCollapserActive,[f.a.M]:!this.props.isNewCollapserActive}),a=["measurement-tab-",t].join("");return i.a.createElement("button",{key:t,onClick:()=>this.chooseMeasure(t),className:s,"data-tstid":a},e)});return this.props.isNewCollapserActive||2!==a.length||(a=this.addToggle(a)),i.a.createElement("div",{className:b()(m.a["Measurements-units"],{[m.a.underlined]:this.props.isNewCollapserActive})},a)}renderPropertiesBlockContainer(){const e=this.props.isOneSize?this.props.friendlyScaleName:"".concat(this.props.modelIsWearing," ").concat(this.props.friendlyScaleName),t=this.props.modelIsWearing?[this.props.labels.modelIsWearing,e].join(" "):null,s=this.props.isFittingInfoActive?this.props.wearingDescription:t,a=this.props.labels;return i.a.createElement("div",{className:m.a["Measurements-container"]},this.props.productMeasurements&&!this.props.hasABTestContext?this.renderPropertyBlock("productMeasurements",a.productMeasurements,this.props.productMeasurements.standard,this.props.productMeasurements.extra,null):null,!this.props.isNewCollapserActive&&this.props.modelMeasurements&&Object.keys(this.props.modelMeasurements).length?this.renderPropertyBlock("modelMeasurements",a.modelMeasurements,this.props.modelMeasurements,null,s||null):null)}renderPropertyBlock(e,t,s,a,r){return i.a.createElement("div",{className:b()(m.a["Measurements-info"],{[m.a.underlined]:this.props.isNewCollapserActive}),"data-tstid":e},!this.props.isNewCollapserActive&&i.a.createElement("p",{className:b()(m.a["Measurements-title"],f.a.Mbold)},t),this.renderTable(s,a),!!r&&i.a.createElement("p",{"data-tstid":"modelFittingInformationSizeFit"},r))}renderTable(e,t){return i.a.createElement("table",null,i.a.createElement("tbody",null,this.renderProperties(e,"standard","standardMeasurement"),this.renderProperties(t,"extra","extraMeasurement")))}renderProperties(e,t,s){if(!e||!Object.keys(e).length)return null;const a=[],r=Object.keys(e);return r.map((n,o)=>{const l=r.length-1===o&&"standard"===t,c=l?m.a["Measurements-info-last-property"]:m.a["Measurements-info-property"],u=l?m.a["Measurements-info-last-value"]:m.a["Measurements-info-value"];return a.push(i.a.createElement("tr",{className:m.a["Measurements-info-listItem"],key:n},i.a.createElement("th",{className:c},n,":"),i.a.createElement("td",{className:u,"data-tstid":s},e[n][this.state.active]))),!0}),a}addToggle(e){const t=1===this.state.active?m.a["Measurements-units-toggle-second-tab"]:"",s=[m.a["Measurements-units-toggle-slider"],t].join(" "),a=0===this.state.active?1:0,r=i.a.createElement("div",{key:"measureToggle",className:m.a["Measurements-units-toggle"]},i.a.createElement("div",{onMouseDown:()=>this.chooseMeasure(a),className:s,"data-tstid":"measurementsToggle"}));return e.splice(1,0,r),e}chooseMeasure(e){if(e===this.state.active)return!1;this.props.toggleUnits({unitText:this.props.availableUnits[e].toLowerCase(),unitValue:e}),this.setState({active:e})}_handleAboveLinkClick(e){e.preventDefault(),Object(c.a)(e.target)}}j.propTypes=D,j.defaultProps={isOneSize:!1};const q=Object(o.b)(e=>{const t=((e,t)=>{const s=e.sizes&&e.sizes[t]?t:e.defaultSize;return s&&e.sizes[s]?s:Object.keys(e.sizes)[0]})(e.productViewModel.measurements,e.currentSize);return{friendlyScaleName:e.productViewModel.measurements.friendlyScaleName,availableUnits:e.productViewModel.measurements.available,isOneSize:e.productViewModel.measurements.isOneSize,defaultUnit:e.productViewModel.measurements.defaultMeasurement,productMeasurements:e.productViewModel.measurements.normalizedMeasurements?e.productViewModel.measurements.normalizedMeasurements[t]:null,sizeDescription:e.productViewModel.measurements.sizeDescription[t],modelMeasurements:e.productViewModel.measurements.modelMeasurements,modelIsWearing:e.productViewModel.measurements.modelIsWearing,labels:e.labels,category:e.productViewModel.measurements.category,showSeeMoreMeasurements:e.productViewModel.measurements.shouldSeeMoreMeasurements,isFittingInfoActive:e.abTesting.pdp_model_fitting,hasABTestContext:Object(C.w)(e).hasABTestContext,isNewCollapserActive:!!e.abTesting.pdp_content_tabs_v3,isNewMeasurementsBySize:e.productViewModel.isNewMeasurementsBySize}},e=>({toggleUnits:t=>{e(Object(u.b)(t))}}))(j);t.a=q},574:function(e,t,s){"use strict";s.r(t),s.d(t,"SizeFit",function(){return h}),s.d(t,"mapStateToProps",function(){return M});var a=s(1),i=s.n(a),r=s(0),n=s.n(r),o=s(6),l=s(259),m=s(562),c=s(23),u=s.n(c),d=s(3);const p={image:n.a.string.isRequired,imageThumbnail:n.a.string.isRequired,imageAlt:n.a.string.isRequired,wearingDescription:n.a.string.isRequired,hasABTestContext:n.a.bool.isRequired,isAlternative:n.a.bool.isRequired};class h extends a.Component{constructor(e){super(e),this.state={currentImage:this.props.imageThumbnail,isLoaded:!1,isMounted:!1}}componentDidMount(){this.setState({isMounted:!0})}render(){return i.a.createElement("div",{"data-tstid":"sizeAndFitCollapserArea",className:u.a.Details},i.a.createElement("div",{className:u.a["Details-colDouble"]},this.renderMeasurements()),this.props.image?this.renderImage():"")}renderMeasurements(){return this.props.hasABTestContext&&this.props.isAlternative?i.a.createElement(l.a,null):i.a.createElement(m.a,{wearingDescription:this.props.wearingDescription})}renderImage(){return!this.state.isLoaded&&this.state.isMounted&&this.loadImage(),i.a.createElement("div",{className:u.a["Details-colSingle"],"data-tstid":"sizeFitImageColumn"},i.a.createElement("div",{className:u.a["Details-imgDetailsWrapper"]},i.a.createElement("img",{className:u.a["Details-imgDetails"],alt:this.props.imageAlt,"data-tstid":"sizeFitImage",src:this.state.currentImage})))}loadImage(){const e=new Image;e.src=this.props.image,e.onload=(()=>(this.setState({currentImage:this.props.image,isLoaded:!0}),e))}}h.propTypes=p;const g=(e,t)=>e.length>=2?e[1][t]:e[0][t],M=e=>{const t=Object(d.w)(e);return{image:e.productViewModel.images.main?g(e.productViewModel.images.main,"large"):null,imageThumbnail:e.productViewModel.images.main?g(e.productViewModel.images.main,"thumbnail"):null,imageAlt:e.productViewModel.images.main?g(e.productViewModel.images.main,"alt"):null,hasABTestContext:t.hasABTestContext&&Object(d.c)(e).lessThan.lg,isAlternative:t.isAlternative}},b=Object(o.b)(M)(h);t.default=b}}]);
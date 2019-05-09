(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{575:function(e,t,r){"use strict";r.r(t);var i=r(1),s=r.n(i),a=r(0),o=r.n(a),n=r(6),d=r(263),c=r(33),l=r(547),p=r.n(l),u=r(69);const g={loaded:o.a.bool,set:o.a.bool,getFitPredictorFile:o.a.func.isRequired,setFitPredictor:o.a.func.isRequired,fitPredictorEvents:o.a.func.isRequired,alternative:o.a.string.isRequired,userContext:o.a.shape({idHash:o.a.string,emailHash:o.a.string,isLoggedIn:o.a.bool}),siteContext:o.a.shape({channel:o.a.string,currency:o.a.string,language:o.a.string,market:o.a.string}).isRequired,pageContext:o.a.shape({breadcrumbs:o.a.arrayOf(o.a.shape({text:o.a.string,href:o.a.string,"data-ffref":o.a.string})),type:o.a.string}).isRequired,productContext:o.a.shape({id:o.a.number,designerStyleId:o.a.string,brand:o.a.string,name:o.a.string,categories:o.a.shape({category:o.a.shape({id:o.a.number.isRequired,name:o.a.string.isRequired}),subCategory:o.a.shape({id:o.a.number.isRequired,name:o.a.string.isRequired}),all:o.a.objectOf(o.a.string)}),gender:o.a.number,ageGroup:o.a.string,sizes:o.a.shape({available:o.a.objectOf(o.a.shape({lastInStock:o.a.bool,sizeId:o.a.number,storeId:o.a.number,description:o.a.string,quantity:o.a.number})),sizeSystem:o.a.string}),price:o.a.number}).isRequired,isMobile:o.a.bool};class h extends i.Component{componentDidMount(){this.props.loaded||this.props.getFitPredictorFile()}componentWillReceiveProps(e){if((e.userContext.isLoggedIn||!1===e.userContext.isLoggedIn)&&!e.set&&e.loaded){e.setFitPredictor({alternative:e.alternative,siteContext:e.siteContext,pageContext:e.pageContext,productContext:e.productContext,userContext:e.userContext}),ssp("show","fitpredictor");const t={load:"fitPredictorLoaded",click:"fitPredictorClicked",prediction:"fitPredictorPrediction",selectedBrand:"fitPredictorBrand",selectedCategory:"fitPredictorCategory",selectedSize:"fitPredictorSize"};Object.keys(t).map(e=>this.sspSubscribe(e,t[e]))}}render(){return s.a.createElement("div",{className:p.a.FitPredictor},s.a.createElement("div",{className:"fp-root","data-product-id":this.props.productContext.id}))}addFitPredictorEvents(e,t){"fitPredictorClicked"===e&&this.props.isMobile&&this.scrollToFitPredictor(),this.props.fitPredictorEvents({event:e,value:t})}scrollToFitPredictor(){const e=document.getElementById("FitPredictor-".concat(this.props.productContext.id));Object(u.a)(e,50)}sspSubscribe(e,t){ssp("subscribe",e,r=>{let i;switch(e){case"load":if(r.supported)return this.addFitPredictorEvents(t,this.props.productContext.id);break;case"prediction":if("personalized"===r.type)return this.addFitPredictorEvents("fitPredictorPersonalizedPrediction",r.size);setTimeout(()=>{if(document.getElementsByClassName("fp-sud-rec")[0])return i=document.getElementsByClassName("fp-sud-rec")[0].textContent,this.addFitPredictorEvents("fitPredictorUniversalPrediction",i)},1e3);break;case"selectedBrand":return this.addFitPredictorEvents(t,r.brand);case"selectedCategory":return this.addFitPredictorEvents(t,r.category);case"selectedSize":return this.addFitPredictorEvents(t,r.size);default:return this.addFitPredictorEvents(t,this.props.productContext.id)}})}}h.propTypes=g;const m=e=>({channel:e.browser.mediaType,currency:e.productViewModel.priceInfo.default.currencyCode,language:e.culture.language,market:e.culture.countryCode}),b=e=>({breadcrumbs:e.productViewModel.breadcrumb,type:"pdp"}),C=e=>({id:e.details.productId,designerStyleId:e.designerDetails.designerStyleId,brand:e.designerDetails.name,name:e.details.shortDescription,categories:e.categories.all,gender:e.details.gender,ageGroup:e.details.ageGroup,sizes:{available:e.sizes.available,sizeSystem:e.sizes.friendlyScaleName},price:e.priceInfo.default.finalPrice}),f=e=>({idHash:e.userHash,emailHash:e.hashedSHA256Email,isLoggedIn:e.isLoggedIn});var S=Object(n.b)(e=>({loaded:e.productViewModel.fitPredictor.loaded,set:e.productViewModel.fitPredictor.set,alternative:e.productViewModel.fitPredictor.alternative,isMobile:e.browser.lessThan.md,siteContext:m(e),pageContext:b(e),productContext:C(e.productViewModel),userContext:f(e.user)}),e=>({getFitPredictorFile:()=>{e(c.d.getFitPredictorFile())},setFitPredictor:t=>{e(c.d.setFitPredictor(t))},fitPredictorEvents:t=>{e(c.d.events(t))}}))(h);const P={SHOE_SIZE_ME_START:1047,SHOE_SIZE_ME_CLOSE:1048};var v=r(7),E=r(3);class y extends i.PureComponent{componentDidMount(){const e=document.createElement("script");this.onCloseShoeSizeMe(),e.type="text/javascript",e.async=!0,e.src="https://shoesize.me/assets/plugin/loader.js";const t=this.props,r=t.shopId,i=t.productId,s=t.locale,a=t.scale;e.text="{\n            shopID: ".concat(r,",\n            shoeID: ").concat(i,",\n            locale: '").concat(s,"',\n            scale: '").concat(a,"',\n            newRecommendation: (recommendation) => {\n                window.events.emit('ShoeSizeMeClosed', { recommendation });\n            },\n        }"),document.head.appendChild(e)}render(){return s.a.createElement("div",{onClick:this._handleClick,role:"button","arial-label":"Shoe Size Me",className:"ShoeSizeMe"})}onCloseShoeSizeMe(){window.events.on("ShoeSizeMeClosed",e=>{Object(v.a)({tid:P.SHOE_SIZE_ME_CLOSE,val:{name:"close",recommendation:e.recommendation}})})}_handleClick(){Object(v.a)({tid:P.SHOE_SIZE_ME_START,val:"start"})}}y.propTypes={shopId:o.a.number.isRequired,productId:o.a.number.isRequired,locale:o.a.string.isRequired,scale:o.a.string.isRequired};var x=Object(n.b)(e=>({shopId:Object(E.G)(e).shopId,productId:Object(E.r)(e).productId,scale:"uk",locale:"en"}))(y);class I extends i.Component{render(){return this.props.hasShoeSizeMe?s.a.createElement(x,null):s.a.createElement(S,null)}}I.propTypes={hasShoeSizeMe:o.a.bool};var z=Object(n.b)(e=>({hasShoeSizeMe:Object(d.n)(e)}))(I);r.d(t,"default",function(){return z})}}]);
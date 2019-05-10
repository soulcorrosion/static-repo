(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{576:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),o=i(6),r=i(77),l=i(0),n=i.n(l),c=i(3),h=i(47),d=i(243),p=i(548),m=i.n(p),u=i(2),g=i.n(u),f=i(312),v=i(185),b=i(190);function w(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class S extends s.Component{constructor(e){super(e),this.state={slideActive:0,isMaxZoom:!1,translateY:0,vw:0,vh:0,zoomOn:{}},this.imageWidth=1e3,this.imageHeight=1334,this.isSafariRTL=null,this.refZoomSlider=a.a.createRef(),this.refSlide=[],this.calculateViewportDebounced=Object(v.a)(this.calculateViewport.bind(this),100),Object(f.a)(this,["_handleCloseModal","_handleAfterChange","_handleImgClick","_handleMouseMove","createRefSlide","_handleArrowClick","_handleThumbnailSelect"])}componentDidMount(){const e=navigator.userAgent.toLowerCase();this.isSafariRTL=this.props.isRTL&&-1!==e.indexOf("safari")&&-1===e.indexOf("chrome"),this.calculateViewport()}static getDerivedStateFromProps(e){return e.isActive?{}:{isMaxZoom:!1}}componentDidUpdate(e,t){!e.isActive&&this.props.isActive&&(this.refZoomSlider.current.methods.goTo(this.props.slideActive,{disableTransition:!0}),window.addEventListener("resize",this.calculateViewportDebounced)),e.isActive&&!this.props.isActive&&window.removeEventListener("resize",this.calculateViewportDebounced),!t.isMaxZoom&&this.state.isMaxZoom&&(this.refSlide[this.state.slideActive].scrollLeft=this.state.zoomOn.scrollX,this.refSlide[this.state.slideActive].scrollTop=this.state.zoomOn.scrollY)}componentWillUnmount(){window.removeEventListener("resize",this.calculateViewportDebounced)}render(){const e=this.props.images.length>1&&this.props.isDesktop&&this.props.isActive,t=this.props.images.length>1&&!this.props.isDesktop&&!this.state.isMaxZoom,i=this.props.images.length>1&&this.props.isDesktop&&this.props.isActive&&!this.state.isMaxZoom,s=this.state.isMaxZoom?{onMouseMove:this._handleMouseMove}:{};return a.a.createElement(r.a,{"aria-label":"[Slideshow Modal]",isActive:this.props.isActive,onClickToClose:this._handleCloseModal,size:"full",theme:{content:m.a.modalContent},"data-tstid":"slideshowModal"},a.a.createElement(h.d,{"data-tstid":"slideshowZoom"},e&&a.a.createElement(h.e,{activeSlide:this.state.slideActive,items:this.props.images,onSelect:this._handleThumbnailSelect,refSlider:this.refZoomSlider,"data-tstid":"thumbnails",dataTestAttr:"tstid"}),i&&a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{className:m.a.prevArrow,refSlider:this.refZoomSlider,flow:"prev",onClick:this._handleArrowClick,isRTL:this.props.isRTL,"data-tstid":"sliderArrowPrevZoom"}),a.a.createElement(h.a,{className:m.a.nextArrow,refSlider:this.refZoomSlider,flow:"next",onClick:this._handleArrowClick,isRTL:this.props.isRTL,"data-tstid":"sliderArrowNextZoom"})),a.a.createElement(h.c,{className:m.a.slider,hasKeysNavigation:e,disableSwipe:this.state.isMaxZoom,isInfinite:!0,onAfterChange:this._handleAfterChange,slidesToShow:1,isRTL:this.props.isRTL,ref:this.refZoomSlider},this.props.images.map((e,t)=>a.a.createElement("div",{key:"".concat(t,"-image"),"data-index":t,"data-tstid":"slide",ref:e=>{this.createRefSlide(e,t)},style:this.slideStyle(t),className:g()(m.a.slide,{[m.a.isMaxZoom]:this.state.isMaxZoom&&t===this.state.slideActive}),"data-active":t===this.state.slideActive?"true":null},a.a.createElement(d.a,Object.assign({Tag:"img",src:e.src||e.thumbnail,alt:e.alt,className:m.a.slideImg,style:this.imageStyle(t),onClick:this._handleImgClick,onDoubleClick:this._handleImgClick},s))))),t&&a.a.createElement(h.b,{activeSlide:this.state.slideActive,itemsLength:this.props.images.length,theme:{container:m.a.bulletsContainer},isRTL:this.props.isRTL})))}createRefSlide(e,t){this.refSlide[t]=e}slideStyle(e){return this.shouldApplyMouseStyles(e)?{transform:"scale(".concat(this.imageHeight/this.state.vh,")")}:{}}imageStyle(e){return this.shouldApplyMouseStyles(e)?{transform:"translate3d(0, ".concat(this.state.translateY,"%, 0)")}:{}}shouldApplyMouseStyles(e){return!this.props.isTouchDevice&&this.state.isMaxZoom&&this.state.slideActive===e}calculateViewport(){this.setState({vw:window.innerWidth,vh:window.innerHeight})}calculateMouseTranslateY(e){const t=25*(this.imageHeight/this.state.vh)/2,i=t+1,s=-t-1;let a=100*(.5-e/this.state.vh);return a>i?a=i:a<s&&(a=s),a}_handleThumbnailSelect(e){Object(b.a)({isClick:!0,index:e,productId:this.props.productId,size:"thumbnail"})}_handleArrowClick(e,t){Object(b.a)({dir:t,productId:this.props.productId,size:"modal"})}_handleImgClick(e){if(this.state.isMaxZoom)this.setState({isMaxZoom:!1});else{const t=this.state,i=t.vw,s=t.vh,a=e.clientX*this.imageWidth/i-i/2,o={};this.props.isTouchDevice?o.zoomOn={scrollX:this.isSafariRTL?-(this.imageWidth-a-i):a,scrollY:e.clientY*this.imageHeight/s-s/2}:o.translateY=this.calculateMouseTranslateY(e.clientY),this.setState(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.forEach(function(t){w(e,t,i[t])})}return e}({isMaxZoom:!0},o)),Object(b.a)({isClick:!0,index:this.state.slideActive,productId:this.props.productId,size:"zoom"})}}_handleMouseMove(e){this.setState({translateY:this.calculateMouseTranslateY(e.clientY)})}_handleAfterChange(e){let t=e.dir,i=e.index,s=e.isKeyPressed;s&&Object(b.a)({index:i,productId:this.props.productId,size:"modal",isKeyPressed:s,dir:t}),this.props.onAfterChange(i,{size:"zoom"}),this.setState({slideActive:i,isMaxZoom:!1})}_handleCloseModal(){this.props.refOriginalSlider.current&&this.props.refOriginalSlider.current.methods.goTo(this.state.slideActive,{disableTransition:!0}),this.props.closeModal&&this.props.closeModal()}}S.defaultProps={images:[]},S.propTypes={isActive:n.a.bool,isTouchDevice:n.a.bool,productId:n.a.string,slideActive:n.a.number,closeModal:n.a.func,images:n.a.arrayOf(n.a.shape({thumbnail:n.a.string,alt:n.a.string})).isRequired,isRTL:n.a.bool,isDesktop:n.a.bool,onAfterChange:n.a.func,refOriginalSlider:n.a.shape({current:n.a.shape({methods:n.a.shape({goTo:n.a.func.isRequired})})})};var A=Object(o.b)(e=>({images:Object(c.t)(e).main,isDesktop:Object(c.eb)(e),isRTL:Object(c.ib)(e),productId:Object(c.r)(e).productId,isTouchDevice:e.isTouchDevice}))(S);i.d(t,"default",function(){return A})}}]);
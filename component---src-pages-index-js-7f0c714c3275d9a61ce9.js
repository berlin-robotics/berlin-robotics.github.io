(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},148:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(1),r=a.n(n),o=a(0),i=a.n(o),l=(a(144),a(147),r.a.createContext({})),s=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){"use strict";var n=a(41),r=a.n(n),o=a(1),i=a.n(o),l=a(145),s=a.n(l),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,n=this.props.fluid?"container-fluid":"container",r=s()(n,this.props.className);return i.a.createElement("div",{className:r,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(i.a.Component);t.a=c},151:function(e){e.exports={data:{site:{siteMetadata:{logo_url:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/images/custom/logo_32x.jpg",description:"This is the official site for the Berlin Robtics Meetup.",title:"Berlin Robotics"}}}}},153:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(0),i=a.n(o),l=a(73),s=a(3),c=function(e){var t=e.location,a=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(l.a,{location:t,pageResources:a})};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(151),r=a(1),o=a.n(r),i=a(0),l=a.n(i),s=a(160),c=a.n(s),u=a(148),d=a(41),p=a.n(d),m=a(145),f=a.n(m),h=(a(154),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.children,t=f()("clearfix",this.props.className,{active:!1});return o.a.createElement("header",{className:t,style:this.props.style},e)},t}(o.a.Component)),v=a(150),b=(a(156),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.children,t=f()("navbar",this.props.className,{"navbar-dark bg-dark":this.props.dark,"navbar-expand-lg":this.props.lg});return o.a.createElement("nav",{className:t},e)},t}(o.a.Component));b.propTypes={dark:l.a.bool,lg:l.a.bool},b.defaultProps={dark:!0,lg:!0};var g=b,E=(a(78),a(146)),y=a.n(E),N=(a(165),a(166),a(133),a(82),a(167),o.a.createContext(new Map)),x=N.Provider,w=N.Consumer;((function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.entries(t.props.prefixes).forEach(function(e){var a=e[0],n=e[1];t.prefixes.set(a,n)}),t}return p()(t,e),t.prototype.render=function(){return o.a.createElement(x,{value:this.prefixes},this.props.children)},t})(o.a.Component)).propTypes={prefixes:l.a.object.isRequired};var C=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.fluid,r=e.rounded,i=e.roundedCircle,l=e.thumbnail,s=y()(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),c=f()(n&&t+"-fluid",r&&"rounded",i&&"rounded-circle",l&&t+"-thumbnail");return o.a.createElement("img",Object.assign({},s,{className:f()(a,c)}))},t}(o.a.Component);C.propTypes={bsPrefix:l.a.string,fluid:l.a.bool,rounded:l.a.bool,roundedCircle:l.a.bool,thumbnail:l.a.bool},C.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var R=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,r=n.prefix,i=n.forwardRefAs,l=void 0===i?a?"ref":"innerRef":i,s=e.displayName||e.name;function c(t,a){var n=t.bsPrefix,i=y()(t,["bsPrefix"]);return i[l]=a,o.a.createElement(w,null,function(t){return o.a.createElement(e,Object.assign({},i,{bsPrefix:n||t.get(r)||r}))})}return c.displayName="Bootstrap("+s+")",o.a.forwardRef(c)}(C,"img"),k=function(e){var t=e.data;return o.a.createElement(c.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}))},M=function(e){var t=e.children;return e.data,o.a.createElement(u.a,{query:"2945402859",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{data:e}),o.a.createElement("div",{id:"container",className:"active"},o.a.createElement(h,null,o.a.createElement(g,null,o.a.createElement(v.a,{fluid:!0},o.a.createElement("a",{className:"navbar-brand",href:"index.html"},o.a.createElement(R,{src:e.site.siteMetadata.logo_url,roundedCircle:!0}),o.a.createElement("h3",null,e.site.siteMetadata.title)),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav ml-auto navigate-sections"},o.a.createElement("li",{className:"nav-item drop-link"},o.a.createElement("a",{className:"nav-link active",href:"#home-section"},"Home"))))))),t))},data:n})};M.propTypes={children:l.a.node.isRequired},t.a=M},280:function(e,t,a){"use strict";a.r(t);var n=a(310),r=a(1),o=a.n(r),i=a(148),l=a(158),s=a(150),c=a(41),u=a.n(c),d=a(145),p=a.n(d),m=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,n=p()("row",this.props.className);return o.a.createElement("div",{className:n,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(o.a.Component),f=(a(311),function(e){return e.children,e.data,o.a.createElement(i.a,{query:"3791040872",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"copyright-line"},e.site.siteMetadata.rssMetadata.copyright))},data:n})});t.default=function(e){return o.a.createElement(l.a,null,o.a.createElement("section",{className:"event-promo-section",style:{height:"776px"}},o.a.createElement("div",{className:"event-center"},o.a.createElement(s.a,null,o.a.createElement(m,null,o.a.createElement("div",{className:"col-lg-9 col-md-8 meetup-title-indexpage"},o.a.createElement("h1",null,"Next up: Berlin Robotics ",o.a.createElement("br",null)," Meetup")),o.a.createElement("div",{className:"col-lg-3 col-md-4"},o.a.createElement("div",{className:"event-date"},o.a.createElement("p",null,"Berlin",o.a.createElement("span",null,"26"),"September 2018"))))))),o.a.createElement("section",{className:"about-section"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"about-box"},o.a.createElement("div",{className:"title-section"},o.a.createElement("h1",null,"About Berlin Robotics")),o.a.createElement("p",null,"Whether you work on robots full time, part time, or are interested in getting involved with robots, this group is for you! Our speaker events and show'n'tell sessions will showcase the latest in new robot platforms, software, hardware and sensor technologies. We are trying to develop a strong community dedicated to moving the robotics industry forward by bringing the best robotics minds in the area together to network, brainstorm, collaborate, and take real action to execute our ideas and visions."),o.a.createElement("div",{className:"video-box"})))),o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"up-footer"},o.a.createElement("div",{className:"row"})),o.a.createElement(f,null))))}},310:function(e){e.exports={data:{site:{siteMetadata:{title:"Berlin Robotics",rssMetadata:{copyright:"Bits and Bytes will create this site but hardware lasts forever! © Berlin Robotics 2018"}}}}}},311:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-7f0c714c3275d9a61ce9.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},145:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),r=a.n(n),l=a(0),o=a.n(l),i=a(141),s=a.n(i);a.d(t,"a",function(){return s.a}),a(144);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){"use strict";var n=a(41),r=a.n(n),l=a(1),o=a.n(l),i=a(142),s=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,n=this.props.fluid?"container-fluid":"container",r=s()(n,this.props.className);return o.a.createElement("div",{className:r,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(o.a.Component);t.a=c},147:function(e){e.exports={data:{site:{siteMetadata:{logo_url:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/images/custom/logo_32x.jpg",description:"This is the official site for the Berlin Robtics Meetup.",title:"Berlin Robotics"}}}}},148:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(0),o=a.n(l),i=a(55),s=a(3),c=function(e){var t=e.location,a=s.a.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(143),r=a.n(n),l=a(147),o=a(1),i=a.n(o),s=a(0),c=a.n(s),u=a(158),m=a.n(u),p=a(145),d=a(41),f=a.n(d),h=a(142),b=a.n(h),E=(a(149),function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.children,t=b()("clearfix",this.props.className,{active:!0});return i.a.createElement("header",{className:t,style:this.props.style},e)},t}(i.a.Component)),v=a(146),g=(a(151),function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props.children,t=b()("navbar",this.props.className,{"navbar-dark bg-dark":this.props.dark,"navbar-expand-lg":this.props.lg});return i.a.createElement("nav",{className:t},e)},t}(i.a.Component));g.propTypes={dark:c.a.bool,lg:c.a.bool},g.defaultProps={dark:!1,lg:!0};var y=g,N=(a(77),a(159),a(160),a(124),a(79),a(161),i.a.createContext(new Map)),x=N.Provider,w=N.Consumer;((function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.entries(t.props.prefixes).forEach(function(e){var a=e[0],n=e[1];t.prefixes.set(a,n)}),t}return f()(t,e),t.prototype.render=function(){return i.a.createElement(x,{value:this.prefixes},this.props.children)},t})(i.a.Component)).propTypes={prefixes:c.a.object.isRequired};var C=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.fluid,l=e.rounded,o=e.roundedCircle,s=e.thumbnail,c=r()(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),u=b()(n&&t+"-fluid",l&&"rounded",o&&"rounded-circle",s&&t+"-thumbnail");return i.a.createElement("img",Object.assign({},c,{className:b()(a,u)}))},t}(i.a.Component);C.propTypes={bsPrefix:c.a.string,fluid:c.a.bool,rounded:c.a.bool,roundedCircle:c.a.bool,thumbnail:c.a.bool},C.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var R=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,l=n.prefix,o=n.forwardRefAs,s=void 0===o?a?"ref":"innerRef":o,c=e.displayName||e.name;function u(t,a){var n=t.bsPrefix,o=r()(t,["bsPrefix"]);return o[s]=a,i.a.createElement(w,null,function(t){return i.a.createElement(e,Object.assign({},o,{bsPrefix:n||t.get(l)||l}))})}return u.displayName="Bootstrap("+c+")",i.a.forwardRef(u)}(C,"img"),k=function(e){var t=e.data;return i.a.createElement(m.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:t.site.siteMetadata.description},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}))},M=function(e){var t=e.children;return e.data,r()(e,["children","data"]),i.a.createElement(p.b,{query:"2945402859",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,{data:e}),i.a.createElement("div",{id:"container",className:"active"},i.a.createElement(E,null,i.a.createElement(y,null,i.a.createElement(v.a,{fluid:!0},i.a.createElement(p.a,{className:"navbar-brand",to:"/"},i.a.createElement(R,{src:e.site.siteMetadata.logo_url,roundedCircle:!0}),i.a.createElement("h3",null,e.site.siteMetadata.title)),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav ml-auto navigate-sections"},i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(p.a,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(p.a,{to:"/jobs/"},"Jobs")),i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(p.a,{to:"/news/"},"News"))))))),t))},data:l})};M.propTypes={children:c.a.node.isRequired},t.a=M},154:function(e,t,a){"use strict";var n=a(41),r=a.n(n),l=a(1),o=a.n(l),i=a(142),s=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,n=s()("row",this.props.className);return o.a.createElement("div",{className:n,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(o.a.Component);t.a=c},155:function(e,t,a){"use strict";var n=a(156),r=a(1),l=a.n(r),o=a(145),i=function(e){return e.children,e.data,l.a.createElement(o.b,{query:"3791040872",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"copyright-line"},e.site.siteMetadata.rssMetadata.copyright))},data:n})};t.a=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"up-footer"},l.a.createElement("div",{className:"row"})),l.a.createElement(i,null)))}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Berlin Robotics",rssMetadata:{copyright:"Bits and Bytes will create this site but hardware lasts forever! © Berlin Robotics 2018"}}}}}},284:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(155),o=a(153),i=a(146),s=a(154);t.default=function(e){return r.a.createElement(o.a,null,r.a.createElement("section",{className:"blog-section"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"title-section"},r.a.createElement(s.a,null,r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("span",null,"Robo news"),r.a.createElement("h1",null,"Latest")),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/blog/add.jpg",alt:""}))))),r.a.createElement(s.a,null,r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"blog-box"},r.a.createElement("div",{className:"blog-post"},r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/blog/large1.jpg",alt:""}),r.a.createElement("span",{className:"date-comments"},"September 10, 2018 - ",r.a.createElement("i",null,"spectrum.ieee")),r.a.createElement("h2",null,r.a.createElement("a",{href:"https://spectrum.ieee.org/automaton/robotics/industrial-robots/the-hunt-for-robot-unicorns",target:"_blank",rel:"noopener noreferrer"},"The Hunt for Robot Unicorns")),r.a.createElement("p",null,"The robotics industry is rapidly evolving and expanding—who will be the next robot unicorns?"),r.a.createElement(s.a,null,r.a.createElement("div",{className:"col-md-6"},r.a.createElement("a",{href:"https://spectrum.ieee.org/automaton/robotics/industrial-robots/the-hunt-for-robot-unicorns",className:"continue-read",target:"_blank",rel:"noopener noreferrer"},"Continue Reading ",r.a.createElement("i",{className:"fa fa-angle-right"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"post-tags"},r.a.createElement("li",null,"in ",r.a.createElement("a",{href:"#"},"Robotics,")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Startups,"))))))))))),r.a.createElement(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-news-js-4223333c9d628a0ce67e.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(1),r=a.n(n),l=a(0),s=a.n(l),i=a(143),o=a.n(i);a.d(t,"a",function(){return o.a}),a(146);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},148:function(e,t,a){"use strict";var n=a(41),r=a.n(n),l=a(1),s=a.n(l),i=a(144),o=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,n=this.props.fluid?"container-fluid":"container",r=o()(n,this.props.className);return s.a.createElement("div",{className:r,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(s.a.Component);t.a=c},149:function(e){e.exports={data:{site:{siteMetadata:{logo_url:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/images/custom/logo_32x.jpg",description:"This is the official site for the Berlin Robtics Meetup.",title:"Berlin Robotics"}}}}},150:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(0),s=a.n(l),i=a(55),o=a(3),c=function(e){var t=e.location,a=o.a.getResourcesForPathname(t.pathname);return r.a.createElement(i.a,{location:t,pageResources:a})};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){},153:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(145),r=a.n(n),l=a(149),s=a(1),i=a.n(s),o=a(0),c=a.n(o),u=a(147),m=a(41),p=a.n(m),d=a(144),f=a.n(d),h=(a(151),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.children,t=f()("clearfix",this.props.className,{active:!0});return i.a.createElement("header",{className:t,style:this.props.style},e)},t}(i.a.Component)),b=a(148),E=(a(153),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.children,t=f()("navbar",this.props.className,{"navbar-dark bg-dark":this.props.dark,"navbar-expand-lg":this.props.lg});return i.a.createElement("nav",{className:t},e)},t}(i.a.Component));E.propTypes={dark:c.a.bool,lg:c.a.bool},E.defaultProps={dark:!1,lg:!0};var g=E,v=(a(79),a(156),a(163),a(126),a(81),a(164),i.a.createContext(new Map)),y=v.Provider,w=v.Consumer;((function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.entries(t.props.prefixes).forEach(function(e){var a=e[0],n=e[1];t.prefixes.set(a,n)}),t}return p()(t,e),t.prototype.render=function(){return i.a.createElement(y,{value:this.prefixes},this.props.children)},t})(i.a.Component)).propTypes={prefixes:c.a.object.isRequired};var N=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.fluid,l=e.rounded,s=e.roundedCircle,o=e.thumbnail,c=r()(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),u=f()(n&&t+"-fluid",l&&"rounded",s&&"rounded-circle",o&&t+"-thumbnail");return i.a.createElement("img",Object.assign({},c,{className:f()(a,u)}))},t}(i.a.Component);N.propTypes={bsPrefix:c.a.string,fluid:c.a.bool,rounded:c.a.bool,roundedCircle:c.a.bool,thumbnail:c.a.bool},N.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var x=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,l=n.prefix,s=n.forwardRefAs,o=void 0===s?a?"ref":"innerRef":s,c=e.displayName||e.name;function u(t,a){var n=t.bsPrefix,s=r()(t,["bsPrefix"]);return s[o]=a,i.a.createElement(w,null,function(t){return i.a.createElement(e,Object.assign({},s,{bsPrefix:n||t.get(l)||l}))})}return u.displayName="Bootstrap("+c+")",i.a.forwardRef(u)}(N,"img"),C=function(e){var t=e.children;return e.data,r()(e,["children","data"]),i.a.createElement(u.b,{query:"2945402859",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"container",className:"active"},i.a.createElement(h,null,i.a.createElement(g,null,i.a.createElement(b.a,{fluid:!0},i.a.createElement(u.a,{className:"navbar-brand",to:"/"},i.a.createElement(x,{src:e.site.siteMetadata.logo_url,roundedCircle:!0}),i.a.createElement("h3",null,e.site.siteMetadata.title)),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav ml-auto navigate-sections"},i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(u.a,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(u.a,{to:"/jobs/"},"Jobs")),i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(u.a,{to:"/news/"},"News"))))))),t))},data:l})};C.propTypes={children:c.a.node.isRequired},t.a=C},157:function(e,t,a){"use strict";var n=a(41),r=a.n(n),l=a(1),s=a.n(l),i=a(144),o=a.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,n=o()("row",this.props.className);return s.a.createElement("div",{className:n,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(s.a.Component);t.a=c},158:function(e,t,a){"use strict";var n=a(159),r=a(1),l=a.n(r),s=a(147),i=function(e){return e.children,e.data,l.a.createElement(s.b,{query:"3791040872",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"copyright-line"},e.site.siteMetadata.rssMetadata.copyright))},data:n})};t.a=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"up-footer"},l.a.createElement("div",{className:"row"})),l.a.createElement(i,null)))}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Berlin Robotics",rssMetadata:{copyright:"Bits and Bytes will create this site but hardware lasts forever! © Berlin Robotics 2018"}}}}}},160:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(166),s=a.n(l),i=a(161),o=a.n(i);t.a=function(e){var t=e.data,a=t.title,n=t.meta,l=[{"@context":"http://schema.org","@type":"WebSite",url:o.a.siteUrl+o.a.pathPrefix,name:a,alternateName:o.a.siteTitleAlt?o.a.siteTitleAlt:""}];return r.a.createElement(s.a,{title:a,meta:n},r.a.createElement("html",{lang:"en"}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(l)))}},161:function(e,t){e.exports={siteTitle:"Berlin Robotics",siteTitleAlt:"Berlin Robotics Meetup",siteLogo:"https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png",siteUrl:"https://berlin-robotics.github.io",pathPrefix:"/",siteDescription:"This is the official site for the Berlin Robtics Meetup.",siteNavigation:!0,googleAnalyticsID:"UA-xxxxxx167-1",postDefaultCategoryID:"Tech",copyright:{label:"Bits and Bytes will create this site but hardware lasts forever!"},themeColor:"#c62828",backgroundColor:"#e0e0e0",promoteGatsby:!0}},285:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(160),s=a(158),i=a(155),o=a(148),c=a(157);t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement(l.a,{data:{title:"Berlin Robotics Jobs",meta:[{name:"description",content:"Job section with the latest jobs available to the community!"},{name:"keywords",content:"robotics, berlin robotics, meetup, software, hardware, community"}]}}),r.a.createElement("section",{className:"schedule-section3"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"schedule-box"},r.a.createElement("div",{className:"title-section"},r.a.createElement("span",null,"Jobs"),r.a.createElement("h1",null,"Latest"),r.a.createElement("p",null,"Job section with the latest jobs available to the community!")),r.a.createElement("div",{className:"schedule-block"},r.a.createElement("h1",null,"Gestalt Robotics GmbH"),r.a.createElement(c.a,null,r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(c.a,null,r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"schedule-image"},r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/logo/gestalt-robotics-logo.png",alt:"Gestalt Robotics GmbH",title:"Gestalt Robotics GmbH"}),r.a.createElement("div",{className:"hover-box"},r.a.createElement("div",{className:"white-box"},r.a.createElement("p",null,"Software Engineer"))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"schedule-content"},r.a.createElement("h2",null,"Software Engineer"),r.a.createElement("p",null,"GESTALT Robotics is looking for a skilled and talented software engineer in order to strengthen the team in the field of agile software development and software deployment for intelligent autonomous systems. This comprises the following tasks in particular"),r.a.createElement("ul",{className:"schedule-list"},r.a.createElement("li",null,"Software architecture and Interface Design and Implementation"),r.a.createElement("li",null,"DevOps"),r.a.createElement("li",null,"Testing and Documentation")))))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"schedule-speakers"},r.a.createElement("h2",null,"Skills"),r.a.createElement(c.a,null,r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"speaker-list"},r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m1.jpg",alt:""}),r.a.createElement("span",null,"C++, Java and/or Python")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m2.jpg",alt:""}),r.a.createElement("span",null,"Experience in interface design and software architecture design as well as software deployment")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m2.jpg",alt:""}),r.a.createElement("span",null,"Experience with software architecture design as well as software deployment")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m3.jpg",alt:""}),r.a.createElement("span",null,"Master's degree or PhD in Computer Science, Engineering, Mathematics or a related discipline")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m4.jpg",alt:""}),r.a.createElement("span",null,"Self-directed, flexible, goal-oriented and strong sense of autonomy")))))))))))),r.a.createElement(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-jobs-js-b438455ca3b76dac4e9a.js.map
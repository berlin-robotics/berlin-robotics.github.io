(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,a,t){var n;e.exports=(n=t(148))&&n.default||n},145:function(e,a,t){"use strict";t.d(a,"b",function(){return u});var n=t(1),r=t.n(n),l=t(0),s=t.n(l),o=t(141),i=t.n(o);t.d(a,"a",function(){return i.a}),t(144);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},146:function(e,a,t){"use strict";var n=t(41),r=t.n(n),l=t(1),s=t.n(l),o=t(142),i=t.n(o),c=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=e.children,t=e.cover,n=this.props.fluid?"container-fluid":"container",r=i()(n,this.props.className);return s.a.createElement("div",{className:r,style:t?{backgroundImage:'url("'+t+'")'}:null},a)},a}(s.a.Component);a.a=c},147:function(e){e.exports={data:{site:{siteMetadata:{logo_url:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/images/custom/logo_32x.jpg",description:"This is the official site for the Berlin Robtics Meetup.",title:"Berlin Robotics"}}}}},148:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(0),s=t.n(l),o=t(55),i=t(3),c=function(e){var a=e.location,t=i.a.getResourcesForPathname(a.pathname);return r.a.createElement(o.a,{location:a,pageResources:t})};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c},149:function(e,a,t){},151:function(e,a,t){},153:function(e,a,t){"use strict";var n=t(143),r=t.n(n),l=t(147),s=t(1),o=t.n(s),i=t(0),c=t.n(i),u=t(158),m=t.n(u),d=t(145),p=t(41),f=t.n(p),h=t(142),E=t.n(h),b=(t(149),function(e){function a(){return e.apply(this,arguments)||this}return f()(a,e),a.prototype.render=function(){var e=this.props.children,a=E()("clearfix",this.props.className,{active:!0});return o.a.createElement("header",{className:a,style:this.props.style},e)},a}(o.a.Component)),g=t(146),v=(t(151),function(e){function a(){return e.apply(this,arguments)||this}return f()(a,e),a.prototype.render=function(){var e=this.props.children,a=E()("navbar",this.props.className,{"navbar-dark bg-dark":this.props.dark,"navbar-expand-lg":this.props.lg});return o.a.createElement("nav",{className:a},e)},a}(o.a.Component));v.propTypes={dark:c.a.bool,lg:c.a.bool},v.defaultProps={dark:!1,lg:!0};var y=v,N=(t(77),t(159),t(160),t(124),t(79),t(161),o.a.createContext(new Map)),w=N.Provider,x=N.Consumer;((function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.entries(a.props.prefixes).forEach(function(e){var t=e[0],n=e[1];a.prefixes.set(t,n)}),a}return f()(a,e),a.prototype.render=function(){return o.a.createElement(w,{value:this.prefixes},this.props.children)},a})(o.a.Component)).propTypes={prefixes:c.a.object.isRequired};var C=function(e){function a(){return e.apply(this,arguments)||this}return f()(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,n=e.fluid,l=e.rounded,s=e.roundedCircle,i=e.thumbnail,c=r()(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),u=E()(n&&a+"-fluid",l&&"rounded",s&&"rounded-circle",i&&a+"-thumbnail");return o.a.createElement("img",Object.assign({},c,{className:E()(t,u)}))},a}(o.a.Component);C.propTypes={bsPrefix:c.a.string,fluid:c.a.bool,rounded:c.a.bool,roundedCircle:c.a.bool,thumbnail:c.a.bool},C.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var k=function(e,a){"string"==typeof a&&(a={prefix:a});var t=e.prototype&&e.prototype.isReactComponent,n=a,l=n.prefix,s=n.forwardRefAs,i=void 0===s?t?"ref":"innerRef":s,c=e.displayName||e.name;function u(a,t){var n=a.bsPrefix,s=r()(a,["bsPrefix"]);return s[i]=t,o.a.createElement(x,null,function(a){return o.a.createElement(e,Object.assign({},s,{bsPrefix:n||a.get(l)||l}))})}return u.displayName="Bootstrap("+c+")",o.a.forwardRef(u)}(C,"img"),R=function(e){var a=e.data;return o.a.createElement(m.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:a.site.siteMetadata.description},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}))},j=function(e){var a=e.children;return e.data,r()(e,["children","data"]),o.a.createElement(d.b,{query:"2945402859",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(R,{data:e}),o.a.createElement("div",{id:"container",className:"active"},o.a.createElement(b,null,o.a.createElement(y,null,o.a.createElement(g.a,{fluid:!0},o.a.createElement(d.a,{className:"navbar-brand",to:"/"},o.a.createElement(k,{src:e.site.siteMetadata.logo_url,roundedCircle:!0}),o.a.createElement("h3",null,e.site.siteMetadata.title)),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav ml-auto navigate-sections"},o.a.createElement("li",{className:"nav-item drop-link"},o.a.createElement(d.a,{to:"/"},"Home")),o.a.createElement("li",{className:"nav-item drop-link"},o.a.createElement(d.a,{to:"/jobs/"},"Jobs")),o.a.createElement("li",{className:"nav-item drop-link"},o.a.createElement(d.a,{to:"/news/"},"News"))))))),a))},data:l})};j.propTypes={children:c.a.node.isRequired},a.a=j},154:function(e,a,t){"use strict";var n=t(41),r=t.n(n),l=t(1),s=t.n(l),o=t(142),i=t.n(o),c=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props,a=e.children,t=e.cover,n=i()("row",this.props.className);return s.a.createElement("div",{className:n,style:t?{backgroundImage:'url("'+t+'")'}:null},a)},a}(s.a.Component);a.a=c},155:function(e,a,t){"use strict";var n=t(156),r=t(1),l=t.n(r),s=t(145),o=function(e){return e.children,e.data,l.a.createElement(s.b,{query:"3791040872",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"copyright-line"},e.site.siteMetadata.rssMetadata.copyright))},data:n})};a.a=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"up-footer"},l.a.createElement("div",{className:"row"})),l.a.createElement(o,null)))}},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Berlin Robotics",rssMetadata:{copyright:"Bits and Bytes will create this site but hardware lasts forever! © Berlin Robotics 2018"}}}}}},283:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(155),s=t(153),o=t(146),i=t(154);a.default=function(e){return r.a.createElement(s.a,null,r.a.createElement("section",{className:"schedule-section3"},r.a.createElement(o.a,null,r.a.createElement("div",{className:"schedule-box"},r.a.createElement("div",{className:"title-section"},r.a.createElement("span",null,"Jobs"),r.a.createElement("h1",null,"Latest"),r.a.createElement("p",null,"Job section is supposed to show the latest jobs available to ...")),r.a.createElement("div",{className:"schedule-block"},r.a.createElement("h1",null,"Gestalt Robotics GmbH"),r.a.createElement(i.a,null,r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(i.a,null,r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"schedule-image"},r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/lg1.jpg",alt:""}),r.a.createElement("div",{className:"hover-box"},r.a.createElement("div",{className:"white-box"},r.a.createElement("p",null,"Software Developer"))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"schedule-content"},r.a.createElement("h2",null,"Software Engineer"),r.a.createElement("p",null,"GESTALT Robotics is looking for a skilled and talented software engineer in order to strengthen the team in the field of agile software development and software deployment for intelligent autonomous systems. This comprises the following tasks in particular"),r.a.createElement("ul",{className:"schedule-list"},r.a.createElement("li",null,"Software architecture and Interface Design and Implementation"),r.a.createElement("li",null,"DevOps"),r.a.createElement("li",null,"Testing and Documentation")))))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("div",{className:"schedule-speakers"},r.a.createElement("h2",null,"Skills"),r.a.createElement(i.a,null,r.a.createElement("div",{className:"col"},r.a.createElement("ul",{className:"speaker-list"},r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m1.jpg",alt:""}),r.a.createElement("span",null,"C++, Java and/or Python")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m2.jpg",alt:""}),r.a.createElement("span",null,"Experience in interface design and software architecture design as well as software deployment")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m2.jpg",alt:""}),r.a.createElement("span",null,"Experience with software architecture design as well as software deployment")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m3.jpg",alt:""}),r.a.createElement("span",null,"Master's degree or PhD in Computer Science, Engineering, Mathematics or a related discipline")),r.a.createElement("li",null,r.a.createElement("img",{src:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/upload/others/m4.jpg",alt:""}),r.a.createElement("span",null,"Self-directed, flexible, goal-oriented and strong sense of autonomy")))))))))))),r.a.createElement(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-jobs-js-bc084c261100e96d4c1c.js.map
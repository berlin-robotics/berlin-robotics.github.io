(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(1),n=a.n(r),l=a(0),o=a.n(l),i=a(143),c=a.n(i);a.d(t,"a",function(){return c.a}),a(146);var s=n.a.createContext({}),u=function(e){return n.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){"use strict";var r=a(41),n=a.n(r),l=a(1),o=a.n(l),i=a(144),c=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,r=this.props.fluid?"container-fluid":"container",n=c()(r,this.props.className);return o.a.createElement("div",{className:n,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(o.a.Component);t.a=s},150:function(e){e.exports={data:{site:{siteMetadata:{logo_url:"https://s3.eu-central-1.amazonaws.com/berlin-robotics/images/custom/logo_32x.jpg",description:"This is the official site for the Berlin Robtics Meetup.",title:"Berlin Robotics"}}}}},151:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(0),o=a.n(l),i=a(55),c=a(3),s=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return n.a.createElement(i.a,{location:t,pageResources:a})};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},152:function(e,t,a){},154:function(e,t,a){},156:function(e,t,a){"use strict";var r=a(145),n=a.n(r),l=a(150),o=a(1),i=a.n(o),c=a(0),s=a.n(c),u=a(147),m=a(41),p=a.n(m),d=a(144),A=a.n(d),b=(a(152),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.children,t=A()("clearfix",this.props.className,{active:!0});return i.a.createElement("header",{className:t,style:this.props.style},e)},t}(i.a.Component)),h=a(148),f=(a(154),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props.children,t=A()("navbar",this.props.className,{"navbar-dark bg-dark":this.props.dark,"navbar-expand-lg":this.props.lg});return i.a.createElement("nav",{className:t},e)},t}(i.a.Component));f.propTypes={dark:s.a.bool,lg:s.a.bool},f.defaultProps={dark:!1,lg:!0};var g=f,E=(a(79),a(149),a(163),a(126),a(81),a(164),i.a.createContext(new Map)),S=E.Provider,k=E.Consumer;((function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).prefixes=new Map,Object.entries(t.props.prefixes).forEach(function(e){var a=e[0],r=e[1];t.prefixes.set(a,r)}),t}return p()(t,e),t.prototype.render=function(){return i.a.createElement(S,{value:this.prefixes},this.props.children)},t})(i.a.Component)).propTypes={prefixes:s.a.object.isRequired};var B=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,r=e.fluid,l=e.rounded,o=e.roundedCircle,c=e.thumbnail,s=n()(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),u=A()(r&&t+"-fluid",l&&"rounded",o&&"rounded-circle",c&&t+"-thumbnail");return i.a.createElement("img",Object.assign({},s,{className:A()(a,u)}))},t}(i.a.Component);B.propTypes={bsPrefix:s.a.string,fluid:s.a.bool,rounded:s.a.bool,roundedCircle:s.a.bool,thumbnail:s.a.bool},B.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var K=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,r=t,l=r.prefix,o=r.forwardRefAs,c=void 0===o?a?"ref":"innerRef":o,s=e.displayName||e.name;function u(t,a){var r=t.bsPrefix,o=n()(t,["bsPrefix"]);return o[c]=a,i.a.createElement(k,null,function(t){return i.a.createElement(e,Object.assign({},o,{bsPrefix:r||t.get(l)||l}))})}return u.displayName="Bootstrap("+s+")",i.a.forwardRef(u)}(B,"img"),v=function(e){var t=e.children;return e.data,n()(e,["children","data"]),i.a.createElement(u.b,{query:"2945402859",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"container",className:"active"},i.a.createElement(b,null,i.a.createElement(g,null,i.a.createElement(h.a,{fluid:!0},i.a.createElement(u.a,{className:"navbar-brand",to:"/"},i.a.createElement(K,{src:e.site.siteMetadata.logo_url,roundedCircle:!0}),i.a.createElement("h3",null,e.site.siteMetadata.title)),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav ml-auto navigate-sections"},i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(u.a,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(u.a,{to:"/jobs/"},"Jobs")),i.a.createElement("li",{className:"nav-item drop-link"},i.a.createElement(u.a,{to:"/news/"},"News"))))))),t))},data:l})};v.propTypes={children:s.a.node.isRequired},t.a=v},157:function(e,t,a){"use strict";var r=a(41),n=a.n(r),l=a(1),o=a.n(l),i=a(144),c=a.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cover,r=c()("row",this.props.className);return o.a.createElement("div",{className:r,style:a?{backgroundImage:'url("'+a+'")'}:null},t)},t}(o.a.Component);t.a=s},158:function(e,t,a){"use strict";var r=a(159),n=a(1),l=a.n(n),o=a(147),i=function(e){return e.children,e.data,l.a.createElement(o.b,{query:"3791040872",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"copyright-line"},e.site.siteMetadata.rssMetadata.copyright))},data:r})};t.a=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"up-footer"},l.a.createElement("div",{className:"row"})),l.a.createElement(i,null)))}},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Berlin Robotics",rssMetadata:{copyright:"Bits and Bytes will create this site but hardware lasts forever! © Berlin Robotics 2018"}}}}}},160:function(e,t,a){"use strict";a(149);var r=a(1),n=a.n(r),l=a(166),o=a.n(l),i=a(161),c=a.n(i);t.a=function(e){var t=e.data,a=t.title,r=t.meta,l=[{"@context":"http://schema.org","@type":"WebSite",url:c.a.siteUrl+c.a.pathPrefix,name:a,alternateName:c.a.siteTitleAlt?c.a.siteTitleAlt:""}];return n.a.createElement(o.a,{defaultTitle:"Berlin Robotics",titleTemplate:"%s | Berlin Robotics",title:a},n.a.createElement("html",{lang:"en"}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(l)),r&&r.map(function(e){return n.a.createElement("meta",{name:e.name,content:e.content})}),n.a.createElement("base",{target:"_blank",href:"https://berlin-robotics.github.io/"}),n.a.createElement("meta",{name:"twitter:site",content:"@BerlinRobotics"}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:site_name",content:"Berlin Robotics"}),n.a.createElement("link",{rel:"canonical",href:"https://berlin-robotics.github.io/"}))}},161:function(e,t){e.exports={siteTitle:"Berlin Robotics",siteTitleAlt:"Berlin Robotics Meetup",siteLogo:"https://haysclark.github.io/gatsby-starter-casper/logos/logo-1024.png",siteUrl:"https://berlin-robotics.github.io",pathPrefix:"/",siteDescription:"This is the official site for the Berlin Robtics Meetup.",siteNavigation:!0,googleAnalyticsID:"UA-xxxxxx167-1",postDefaultCategoryID:"Tech",copyright:{label:"Bits and Bytes will create this site but hardware lasts forever!"},themeColor:"#c62828",backgroundColor:"#e0e0e0",promoteGatsby:!0}},284:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(156),o=a(148),i=a(157),c=a(158),s=a(160),u=(a(317),function(e){var t=e.fullName,a=e.imageSrc,r=e.linkTo,l=e.speakerTitle,o=e.speakerPosition,i=e.contentTitle;return n.a.createElement("div",{className:"speaker-post"},n.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:a,alt:l+" "+t})),n.a.createElement("div",{className:"speaker-content"},n.a.createElement("h2",null,n.a.createElement("a",{href:"/#",title:l+" "+t,target:"_blank",rel:"noopener noreferrer"},l+" "+t)),n.a.createElement("span",null,l+" "+t+", "+o),n.a.createElement("p",null,i),n.a.createElement("ul",{className:"social-links"},n.a.createElement("li",null,n.a.createElement("a",{className:"facebook",href:"/#"},n.a.createElement("i",{className:"fa fa-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"twitter",href:"/#"},n.a.createElement("i",{className:"fa fa-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{className:"linkedin",target:"_blank",rel:"noopener noreferrer",href:r},"LinkedIn")),n.a.createElement("li",null,n.a.createElement("a",{className:"personal-web",href:"/#"},n.a.createElement("i",{className:"fa fa-link"}))))))});t.default=function(e){return n.a.createElement(l.a,null,n.a.createElement(s.a,{data:{title:"What`s next?",meta:[{name:"description",content:"This is the official site for the Berlin Robtics Meetup."},{name:"keywords",content:"robotics, berlin robotics, meetup, community"}]}}),n.a.createElement("section",{className:"event-promo-section",style:{height:"476px"}},n.a.createElement("div",{className:"event-center"},n.a.createElement(o.a,null,n.a.createElement(i.a,null,n.a.createElement("div",{className:"col-lg-9 col-md-8 meetup-title-indexpage"},n.a.createElement("h1",null,"Next up: Berlin Robotics ",n.a.createElement("br",null)," Meetup")),n.a.createElement("div",{className:"col-lg-3 col-md-4"},n.a.createElement("div",{className:"event-date"},n.a.createElement("p",null,"Berlin",n.a.createElement("span",null,"26"),"November 2018"))))))),n.a.createElement("section",{className:"clients-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title-section"},n.a.createElement("h1",null,"A big thank you to all our sponsors!"),n.a.createElement("p",null,"Berlin Robotics is a great experience for our participants. So much so, that some companies from our greater region are helping to make the event financially worthwhile.")),n.a.createElement("div",{className:"client-box"},n.a.createElement("ul",{className:"client-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.gestalt-robotics.com/?ref=berlin-robotics",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"data:image/jpeg;base64,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",alt:"Gestalt Robotics"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://space-shack.com/?ref=berlin-robotics",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"https://directory.startupberlin.co/wp-content/uploads/2017/05/Space-Shack.jpg",alt:"Space Shack"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:michel.herszak@gmail.com"},"Become a",n.a.createElement("br",null)," sponsor")))))),n.a.createElement("section",{className:"speaking-section2 no-back-image",id:"speakers-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"title-section white-style"},n.a.createElement("h1",null,"Who's speaking")),n.a.createElement("div",{className:"speakers-box"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6"},n.a.createElement(u,{fullName:"Jens Lambrecht",imageSrc:"https://www.gestalt-robotics.com/files/images/team/Team.jpg",linkTo:"https://www.linkedin.com/in/jens-lambrecht-92830499/",speakerTitle:"Dr.-Ing.",speakerPosition:"Founder Gestalt Robotics GmbH",contentTitle:"Assigned to assist: Robots are not here to take your job"})),n.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6"},n.a.createElement(u,{fullName:"Michel Herszak",imageSrc:"https://avatars2.githubusercontent.com/u/4604432?s=400&v=4",linkTo:"https://www.linkedin.com/in/michel-herszak-31b8a127/",speakerTitle:"Dipl.-Ing.",speakerPosition:"Software Developer",contentTitle:"Platforms and Cloud Robotics"})))))),n.a.createElement("section",{className:"about-section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"about-box"},n.a.createElement("div",{className:"title-section"},n.a.createElement("h1",null,"About Berlin Robotics")),n.a.createElement("p",null,"Whether you work on robots full time, part time, or are interested in getting involved with robots, this group is for you! Our speaker events and show'n'tell sessions will showcase the latest in new robot platforms, software, hardware and sensor technologies. We are trying to develop a strong community dedicated to moving the robotics industry forward by bringing the best robotics minds in the area together to network, brainstorm, collaborate, and take real action to execute our ideas and visions."),n.a.createElement("div",{className:"video-box"})))),n.a.createElement(c.a,null))}},317:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-55bf60637e2a043a7254.js.map
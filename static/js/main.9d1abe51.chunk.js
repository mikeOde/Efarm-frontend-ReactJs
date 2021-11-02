(this["webpackJsonpefarn-admin-frontend"]=this["webpackJsonpefarn-admin-frontend"]||[]).push([[0],{165:function(e,t,a){e.exports={profileCard:"FarmProfile_profileCard__3kt8G"}},186:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(41),o=a.n(r),c=(a(186),a(20)),s=a(290),l=a(296),d=a(282),j=a(274),p=a(288),m=a(281),b=a(25),u=a(92),h=a.n(u),x=a.p+"static/media/navLogo.1bf254b4.png",g=a(1);var O=function(){return Object(g.jsx)(d.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"nav-bg",children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(d.a.Brand,{href:"",className:h.a.NavBrand,children:Object(g.jsx)("img",{src:x,alt:"logo",style:{maxHeight:"55px"}})}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(p.a,{className:"me-auto",children:[Object(g.jsx)(b.b,{to:"/dashboard",className:h.a.navList,children:"Dashboard"}),Object(g.jsx)(b.b,{to:"/vegetables",className:h.a.navList,children:"Vegetables"}),Object(g.jsx)(b.b,{to:"/trees",className:h.a.navList,children:"Trees"})]}),Object(g.jsxs)(m.a,{title:"Mike Ayoub",id:"basic-nav-dropdown",children:[Object(g.jsx)(m.a.Item,{as:b.b,to:"/profile",style:{textAlign:"center"},children:"Edit profile"}),Object(g.jsx)(m.a.Divider,{}),Object(g.jsx)(m.a.Item,{href:"#action/3.1",children:Object(g.jsx)(l.a,{color:"error",fullWidth:!0,size:"small",children:"Logout"})})]})]})]})})};var f=function(e){return Object(g.jsxs)("section",{className:"layout-section",children:[Object(g.jsx)(O,{}),Object(g.jsx)(s.a,{container:!0,children:Object(g.jsx)(j.a,{children:e.children})})]})};var v=function(){return Object(g.jsx)(f,{children:Object(g.jsx)("p",{children:"This is the dashboard page"})})},w=a(7),y=a(298),_=a(301),k=a(300),N=a(303),A=a(304),q=a(302),C=a(293),T=a(284),F=a(297),L=a(55),S=a.n(L),I=a(116),R=a.n(I),z=a(58),D=a.n(z),E="https://efarm.ml/api",P={headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer "+localStorage.getItem("access_token")}},B={checkLogin:function(e){return D.a.post("".concat(E,"/login"),e)},checkSignup:function(e){return D.a.post("".concat(E,"/register"),e)},getFarmerVegetables:function(){return D.a.get("".concat(E,"/get_vegetables"),P)},getFarmerTrees:function(){return D.a.get("".concat(E,"/get_trees"),P)},getFarmerProfile:function(){return D.a.get("".concat(E,"/profile"),P)},editFarmerProfile:function(e){return D.a.post("".concat(E,"/edit_profile"),e,P)},addVegetable:function(e){return D.a.post("".concat(E,"/add_vegetables"),e,P)},addTree:function(e){return D.a.post("".concat(E,"/add_trees"),e,P)}};var W=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)();return Object(g.jsx)("div",{className:S.a.formContainer,children:Object(g.jsxs)("form",{className:S.a.form,onSubmit:function(e){e.preventDefault();var n={name:t.current.value,location:a.current.value,image:i.current.value,description:r.current.value};console.log(n),B.editFarmerProfile(n,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&window.location.reload()})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data"),window.location.reload()}))},children:[Object(g.jsx)("div",{className:S.a.formTitle,children:Object(g.jsx)("h4",{children:"EDIT PROFILE"})}),Object(g.jsx)("div",{className:S.a.closeAction,children:Object(g.jsx)(F.a,{onClick:e.action,"aria-label":"close",sx:{position:"absolute",top:"1rem",right:"1rem",padding:"0px"},color:"error",size:"small",children:Object(g.jsx)(R.a,{fontSize:"small",sx:{width:"30px",height:"30px"}})})}),Object(g.jsxs)("div",{className:S.a.control,children:[Object(g.jsx)("label",{htmlFor:"name",children:"Farm Name"}),Object(g.jsx)("input",{type:"text",required:!0,id:"name",placeholder:"Enter farm name",ref:t})]}),Object(g.jsxs)("div",{className:S.a.control,children:[Object(g.jsx)("label",{htmlFor:"location",children:"Farm Location"}),Object(g.jsx)("input",{type:"text",required:!0,id:"location",placeholder:"Enter farm location",ref:a})]}),Object(g.jsxs)("div",{className:S.a.control,children:[Object(g.jsx)("label",{htmlFor:"picture",children:"Farm Picture"}),Object(g.jsx)("input",{type:"text",required:!0,id:"picture",ref:i})]}),Object(g.jsxs)("div",{className:S.a.control,children:[Object(g.jsx)("label",{htmlFor:"description",children:"Description"}),Object(g.jsx)("textarea",{id:"description",required:!0,rows:"5",placeholder:"Enter farm description",ref:r})]}),Object(g.jsx)("div",{className:S.a.actions,children:Object(g.jsx)("button",{type:"submit",children:"EDIT PROFILE"})})]})})},H={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",maxWidth:"800px",bgcolor:"background.paper",borderRadius:"5px",boxShadow:24,p:4};var M=function(){var e=n.useState(!1),t=Object(w.a)(e,2),a=t[0],i=t[1],r=function(){return i(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(l.a,{"aria-label":"Add",color:"success",size:"large",onClick:function(){return i(!0)},children:"Edit"}),Object(g.jsx)(T.a,{open:a,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(g.jsx)(C.a,{sx:H,children:Object(g.jsx)(W,{action:r})})})]})};var $=function(e){return Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsxs)(y.a,{elevation:7,children:[Object(g.jsx)(k.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.owner,action:Object(g.jsx)(q.a,{style:{paddingTop:"34px",paddingRight:"15px"},children:e.location})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(q.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(A.a,{children:Object(g.jsx)(M,{})})]})})};var V=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),o=Object(w.a)(r,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){B.getFarmerProfile().then((function(e){console.log(e),i(e.data[0]),s(e.data.owner_name)})).catch((function(e){console.log(e)}))}),[]),console.log(a),Object(g.jsx)(f,{children:Object(g.jsx)($,{description:a?a.description:"Description",name:a?a.name:"Farm name",image:a?a.image:"Image",location:a?a.location:"Location",owner:c})})},U=a(291);var J=function(e){return Object(g.jsx)(s.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsxs)(y.a,{elevation:7,children:[Object(g.jsx)(k.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:"$"+e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(g.jsx)(q.a,{children:e.quantity})})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(q.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(A.a,{children:Object(g.jsx)(l.a,{size:"medium",color:"error",fullWidth:!0,variant:"contained",children:"Delete"})})]})})};var G=function(e){return Object(g.jsx)(s.a,{container:!0,spacing:3,children:e.items.map((function(e){return Object(g.jsx)(J,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})},Q=a(164),X=a.n(Q),Y=a(49),K=a.n(Y);var Z=function(e){var t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)(),o=Object(n.useRef)(),c=e.itemData.isVegetable;return Object(g.jsx)("div",{className:K.a.formContainer,children:Object(g.jsxs)("form",{className:K.a.form,onSubmit:function(e){e.preventDefault();var n=t.current.value,s=a.current.value,l=i.current.value,d=r.current.value,j=o.current.value;console.log(c);var p={name:n,quantity:s,price:l,description:d,image:j};console.log(p),"1"===c?B.addVegetable(p,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&window.location.reload()})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data"),window.location.reload()})):B.addTree(p,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&window.location.reload()})).catch((function(e){console.log(e.response.data.errors),alert("Invalid data"),window.location.reload()}))},children:[Object(g.jsx)("div",{className:K.a.formTitle,children:Object(g.jsx)("h4",{children:e.itemData.title})}),Object(g.jsx)("div",{className:K.a.closeAction,children:Object(g.jsx)(F.a,{onClick:e.closeAction,"aria-label":"close",sx:{position:"absolute",top:"1rem",right:"1rem",padding:"0px"},color:"error",size:"small",children:Object(g.jsx)(R.a,{fontSize:"small",sx:{width:"30px",height:"30px"}})})}),Object(g.jsxs)("div",{className:K.a.control,children:[Object(g.jsx)("label",{htmlFor:"name",children:e.itemData.nameLabel}),Object(g.jsx)("input",{placeholder:e.itemData.namePlaceHolder,type:"text",required:!0,id:"name",ref:t})]}),Object(g.jsxs)("div",{className:K.a.control,children:[Object(g.jsx)("label",{htmlFor:"quantity",children:e.itemData.quantityLabel}),Object(g.jsx)("input",{placeholder:e.itemData.quantityPlaceHolder,type:"quantity",required:!0,id:"quantity",ref:a})]}),Object(g.jsxs)("div",{className:K.a.control,children:[Object(g.jsx)("label",{htmlFor:"price",children:e.itemData.priceLabel}),Object(g.jsx)("input",{placeholder:e.itemData.pricePlaceHolder,type:"number",required:!0,id:"price",ref:i})]}),Object(g.jsxs)("div",{className:K.a.control,children:[Object(g.jsx)("label",{htmlFor:"picture",children:e.itemData.pictureLabel}),Object(g.jsx)("input",{type:"text",required:!0,id:"picture",ref:o})]}),Object(g.jsxs)("div",{className:K.a.control,children:[Object(g.jsx)("label",{htmlFor:"description",children:e.itemData.descriptionLabel}),Object(g.jsx)("textarea",{placeholder:e.itemData.descriptionPlaceHolder,id:"description",required:!0,rows:"5",ref:r})]}),Object(g.jsx)("div",{className:K.a.actions,children:Object(g.jsx)("button",{type:"submit",children:e.itemData.buttonLabel})})]})})},ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",maxWidth:"800px",bgcolor:"background.paper",borderRadius:"5px",boxShadow:24,p:4};var te=function(e){var t=n.useState(!1),a=Object(w.a)(t,2),i=a[0],r=a[1],o=function(){return r(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsx)(F.a,{sx:{color:"#72B750",position:"fixed",bottom:"10%",right:"10%"},"aria-label":"Add",color:"success",size:"large",onClick:function(){return r(!0)},children:Object(g.jsx)(X.a,{sx:{width:"2.2em",height:"2.2em"},fontSize:"large"})}),Object(g.jsx)(T.a,{open:i,onClose:o,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(g.jsx)(C.a,{sx:ee,children:Object(g.jsx)(Z,{itemData:e.data,closeAction:o})})})]})};var ae=function(){var e=Object(c.h)(),t=Object(n.useState)([]),a=Object(w.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){B.getFarmerTrees().then((function(e){console.log(e),r(e.data)})).catch((function(t){console.log(t),e.push("/"),window.location.reload()}))}),[e]),Object(g.jsxs)(f,{children:[Object(g.jsx)(G,{items:i}),Object(g.jsx)(te,{data:{title:"ADD TREES",nameLabel:"Tree Name",namePlaceHolder:"Insert tree name",quantityLabel:"Available Quantity",quantityPlaceHolder:"Insert number of trees",priceLabel:"Price per tree",pricePlaceHolder:"Insert price per tree",pictureLabel:"Tree Picture",descriptionLabel:"Description",descriptionPlaceHolder:"Insert a brief description",buttonLabel:"ADD TREE"}})]})};var ne=function(){var e=Object(c.h)(),t=Object(n.useState)([]),a=Object(w.a)(t,2),i=a[0],r=a[1];return Object(n.useEffect)((function(){B.getFarmerVegetables().then((function(e){console.log(e),r(e.data)})).catch((function(t){console.log(t),e.push("/"),window.location.reload()}))}),[e]),console.log(i),Object(g.jsxs)(f,{children:[Object(g.jsx)(G,{items:i}),Object(g.jsx)(te,{data:{title:"ADD VEGETABLES",nameLabel:"Vegetable Name",namePlaceHolder:"Insert vegetable name",quantityLabel:"Box Weight",quantityPlaceHolder:"Insert vegetable weight per box",priceLabel:"Price per Kg",pricePlaceHolder:"Insert price per box",pictureLabel:"Vegetable Picture",descriptionLabel:"Description",descriptionPlaceHolder:"Insert a brief description",buttonLabel:"ADD VEGETABLE",isVegetable:"1"}})]})},ie=(a(217),a(93)),re=a.n(ie);var oe=function(){return Object(g.jsx)(d.a,{collapseOnSelect:!0,variant:"dark",expand:"lg",className:"nav-bg",children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(d.a.Brand,{href:"",className:re.a.NavBrand,children:Object(g.jsx)("img",{src:x,alt:"logo",style:{maxHeight:"60px"}})}),Object(g.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsxs)(p.a,{className:"me-auto",children:[Object(g.jsx)(b.b,{to:"/home",className:re.a.navList,children:"Home"}),Object(g.jsx)(b.b,{to:"/adoptions",className:re.a.navList,children:"Adoptions"}),Object(g.jsx)(b.b,{to:"/orders",className:re.a.navList,children:"Orders"})]}),Object(g.jsx)(m.a,{title:"Mike Ayoub",id:"basic-nav-dropdown",children:Object(g.jsx)(m.a.Item,{href:"#action/3.1",children:Object(g.jsx)(l.a,{color:"error",fullWidth:!0,size:"small",children:"Logout"})})})]})]})})};var ce=function(e){return Object(g.jsxs)("section",{children:[Object(g.jsx)(oe,{}),Object(g.jsx)(s.a,{container:!0,style:{padding:"0px"},children:Object(g.jsx)(j.a,{children:e.children})})]})},se=a(305);var le=function(e){var t=Object(c.h)();return Object(g.jsx)(s.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsx)(y.a,{elevation:7,children:Object(g.jsxs)(se.a,{onClick:function(){var a=e.id;t.push(Object(c.f)("/farm/:farmId",{farmId:a}))},children:[Object(g.jsx)(k.a,{component:"img",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.owner,action:Object(g.jsx)(q.a,{style:{paddingTop:"34px"},children:"Tannourine"})})]},e.id)})})};var de=function(e){return Object(g.jsx)(s.a,{container:!0,spacing:3,children:e.farms.map((function(e){return Object(g.jsx)(le,{id:e.id,image:e.image,description:e.description,name:e.name,owner:e.owner},e.id)}))})};var je=function(){return Object(g.jsx)(ce,{children:Object(g.jsx)(de,{farms:[{id:"1",name:"Mike's Farm",image:"https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20200530_MAP004_0.jpg",description:"Mike's Farm is a Vegetables and trees farm that is located at the highlands of North Lebanon. At an altitude of 1800m, with no pollution sources of any kind, Mike's Farm drinks the most clean waters and we emphasise on that by growing our goods organically",owner:"Mike Ayoub"},{id:"2",name:"Ray's",image:"https://www.borgenmagazine.com/wp-content/uploads/2014/07/benin.jpg",description:"Raymond's farm is a mix between organic products and others that are fed industrial fertilizers according to the minimum standards",owner:"Raymond Ayoub"},{id:"3",name:"Dani Farms",image:"https://www.annahar.com/ContentFilesArchive/469869Image1-1180x677_d.jpg?version=3857312",description:"In the valley of Tannourine, or fields drink the waters of the Whalenuts river and grow organically outdoor",owner:"Dani Ayoub"},{id:"4",name:"Jnaynet Tansa",image:"https://agrytech.org/wp-content/uploads/2019/08/Hackathon-Challenges-2019-1080x628.jpg",description:"A traditional farm ran by 70 years old Tansa who carries on the culture and habbits of our elders, guarenteeing the mosst authentic products",owner:"Tansa Nakwar"}]})})},pe=a(5),me=a(15),be=a(118),ue=a.n(be),he=a(37),xe=a(294),ge=a(285),Oe=a(295);var fe=function(e){return Object(g.jsx)(s.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsxs)(y.a,{elevation:7,children:[Object(g.jsx)(k.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(g.jsx)(q.a,{children:e.quantity})})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(q.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(A.a,{children:Object(g.jsx)(l.a,{color:"success",variant:"contained",disableRipple:!1,size:"medium",fullWidth:!0,sx:{bgcolor:"#72B750"},children:"Adopt Tree"})})]})})};var ve=function(e){return Object(g.jsx)(s.a,{item:!0,xs:12,sm:6,lg:4,children:Object(g.jsxs)(y.a,{elevation:7,children:[Object(g.jsx)(k.a,{component:"img",height:"194",image:e.image,alt:e.name}),Object(g.jsx)(_.a,{title:e.name,subheader:e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50"},"aria-label":"recipe",children:Object(g.jsx)(q.a,{children:e.quantity})})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(q.a,{variant:"body2",color:"text.secondary",children:e.description})}),Object(g.jsx)(A.a,{children:Object(g.jsx)(l.a,{color:"success",variant:"contained",size:"medium",fullWidth:!0,sx:{bgcolor:"#72B750"},children:"Order Box"})})]})})},we=["children","value","index"];function ye(e){var t=e.children,a=e.value,n=e.index,i=Object(me.a)(e,we);return Object(g.jsx)("div",Object(pe.a)(Object(pe.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),{},{children:a===n&&Object(g.jsx)(C.a,{sx:{p:3},children:Object(g.jsx)(q.a,{component:"div",children:t})})}))}function _e(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var ke=function(e){var t=Object(he.a)(),a=n.useState(0),i=Object(w.a)(a,2),r=i[0],o=i[1];return Object(g.jsxs)(C.a,{sx:{bgcolor:"background.black",width:"100%"},children:[Object(g.jsx)(xe.a,{position:"sticky",children:Object(g.jsxs)(ge.a,{value:r,onChange:function(e,t){o(t)},textColor:"inherit",variant:"fullWidth","aria-label":"full width tab",children:[Object(g.jsx)(Oe.a,Object(pe.a)({label:"Adopt Trees"},_e(0))),Object(g.jsx)(Oe.a,Object(pe.a)({label:"Shop Vegetables"},_e(1)))]})}),Object(g.jsxs)(ue.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:r,onChangeIndex:function(e){o(e)},children:[Object(g.jsx)(ye,{value:r,index:0,dir:t.direction,children:Object(g.jsx)(s.a,{container:!0,spacing:3,children:[{id:"1",name:"Apple trees",image:"https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",price:"$25",description:"These Apple trees are raised outdoors and fed organic fertilizers only",quantity:"24"},{id:"2",name:"Cherry trees",image:"https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",price:"$27",description:"National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",quantity:"13"},{id:"3",name:"Peach trees",image:"https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",price:"$25",description:"Medium sized potatoes, with no additional fertilizers",quantity:"37"},{id:"4",name:"Olive trees",image:"https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"70"}].map((function(e){return Object(g.jsx)(fe,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})}),Object(g.jsx)(ye,{value:r,index:1,dir:t.direction,children:Object(g.jsx)(s.a,{container:!0,spacing:3,children:[{id:"1",name:"Cucumbers",image:"https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",price:"$12",description:"These Cucumbers are raised outdoors and fed organic fertilizers only",quantity:"5kg"},{id:"2",name:"Tomatoes",image:"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",price:"$15",description:"National tomatoes outdoor drown on 1500m elevation with minimum pesticides",quantity:"4kg"},{id:"3",name:"Potatoes",image:"https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",price:"$10",description:"Medium sized potatoes, with no additional fertilizers",quantity:"10kg"},{id:"4",name:"Onions",image:"https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"7kg"}].map((function(e){return Object(g.jsx)(ve,{id:e.id,image:e.image,description:e.description,price:e.price,quantity:e.quantity,name:e.name},e.id)}))})})]})]})},Ne=a(165),Ae=a.n(Ne);var qe=function(e){return console.log(e.data),Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsxs)(y.a,{className:Ae.a.profileCard,children:[Object(g.jsx)(k.a,{component:"img",height:"194",image:e.data.image,alt:e.data.name}),Object(g.jsx)(_.a,{title:Object(g.jsx)(q.a,{variant:"h3",children:e.data.name}),subheader:e.data.owner,action:Object(g.jsx)(q.a,{style:{paddingTop:"25px"},children:"Tannourine"})}),Object(g.jsx)(N.a,{children:Object(g.jsx)(q.a,{variant:"body2",color:"text.secondary",children:e.data.description})})]})})};var Ce=function(){for(var e=Object(c.i)().farmId,t=[],a=0,n=[{id:"1",name:"Mike's Farm",image:"https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20200530_MAP004_0.jpg",description:"Mike's Farm is a Vegetables and trees farm that is located at the highlands of North Lebanon. At an altitude of 1800m, with no pollution sources of any kind, Mike's Farm drinks the most clean waters and we emphasise on that by growing our goods organically",owner:"Mike Ayoub"},{id:"2",name:"Ray's",image:"https://www.borgenmagazine.com/wp-content/uploads/2014/07/benin.jpg",description:"Raymond's farm is a mix between organic products and others that are fed industrial fertilizers according to the minimum standards",owner:"Raymond Ayoub"},{id:"3",name:"Dani Farms",image:"https://www.annahar.com/ContentFilesArchive/469869Image1-1180x677_d.jpg?version=3857312",description:"In the valley of Tannourine, or fields drink the waters of the Whalenuts river and grow organically outdoor",owner:"Dani Ayoub"},{id:"4",name:"Jnaynet Tansa",image:"https://agrytech.org/wp-content/uploads/2019/08/Hackathon-Challenges-2019-1080x628.jpg",description:"A traditional farm ran by 70 years old Tansa who carries on the culture and habbits of our elders, guarenteeing the mosst authentic products",owner:"Tansa Nakwar"}];a<n.length;a++){var i=n[a];i.id===e&&(t=i)}return Object(g.jsxs)(ce,{children:[Object(g.jsx)(qe,{data:t}),Object(g.jsx)(ke,{})]})},Te=a(299),Fe=a(283),Le=a.p+"static/media/loginLogo.bba5023c.png";var Se=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(c.h)(),i=Object(n.useState)([]),r=Object(w.a)(i,2),o=r[0],d=r[1];return Object(g.jsxs)(Te.a,{elevation:10,style:{padding:20,height:"70vh",maxWidth:380},children:[Object(g.jsxs)(s.a,{align:"center",children:[Object(g.jsx)("img",{src:Le,alt:"logo",style:{maxHeight:"100px",marginTop:"-25px"}}),Object(g.jsx)("h3",{style:{color:"#516C66"},children:"Efarm"}),Object(g.jsx)("h2",{style:{marginTop:10,color:"#72B750"},children:"Sign in"})]}),Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var i=e.current.value,r=t.current.value,c={email:i,password:r};console.log(c),B.checkLogin(c,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){1===e.data.user.user_type_id?(localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user_type",e.data.user.user_type_id),a.push("/dashboard"),window.location.reload()):(localStorage.setItem("access_token",e.data.access_token),localStorage.setItem("user_type",e.data.user.user_type_id),a.push("/home"),window.location.reload())})).catch((function(e){console.log(e.response.data.errors),""===i||""===r?(d(e.response.data.errors),console.log(o)):alert("incorrect email or password")}))},children:[Object(g.jsx)(Fe.a,{sx:{paddingBottom:"10px"},label:"Email",type:"email",placeholder:"Enter email address",inputRef:e,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(Fe.a,{sx:{paddingBottom:"15px"},label:"Password",type:"password",placeholder:"Enter password",inputRef:t,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(l.a,{color:"success",sx:{backgroundColor:"#72b750",margin:"10px 0px"},variant:"contained",type:"submit",fullWidth:!0,children:"Sign in"})]})]})},Ie=a(287),Re=a(292),ze=a(307),De=a(306),Ee=a(280);var Pe=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useState)([]),o=Object(w.a)(r,2),c=o[0],d=o[1],j=n.useState("0"),p=Object(w.a)(j,2),m=p[0],b=p[1];return Object(g.jsxs)(Te.a,{elevation:20,style:{padding:20,maxWidth:380},children:[Object(g.jsxs)(s.a,{align:"center",children:[Object(g.jsx)("img",{src:Le,alt:"logo",style:{maxHeight:"100px",marginTop:"-25px"}}),Object(g.jsx)("h3",{style:{color:"#516C66"},children:"Efarm"}),Object(g.jsx)("h2",{style:{marginTop:10,color:"#72B750"},children:"Sign Up"})]}),Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=e.current.value,o=t.current.value,s=a.current.value,l=i.current.value,j={first_name:r,last_name:o,user_type_id:m,email:s,password:l};console.log(j),B.checkSignup(j,{headers:{Accept:"application/json","content-type":"application/json"}}).then((function(e){e.data.status&&alert("Account is successfully created")})).catch((function(e){console.log(e.response.data.errors),""===s||""===l?(d(e.response.data.errors),console.log(c)):alert("Email exists already")}))},children:[Object(g.jsx)(Fe.a,{sx:{paddingBottom:"10px"},label:"First Name",type:"text",placeholder:"Enter your first name",inputRef:e,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(Fe.a,{sx:{paddingBottom:"10px"},label:"Last Name",type:"text",placeholder:"Enter your last name",inputRef:t,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsxs)(De.a,{component:"fieldset",children:[Object(g.jsx)(Ee.a,{color:"success",component:"legend",style:{margin:"0px"},children:"Register as:"}),Object(g.jsxs)(Re.a,{style:{display:"initial"},"aria-label":"user type",defaultValue:"Customer",name:"user-type",value:m,onChange:function(e){b(e.target.value)},children:[Object(g.jsx)(ze.a,{value:"0",control:Object(g.jsx)(Ie.a,{color:"success",size:"small"}),label:"Customer"}),Object(g.jsx)(ze.a,{value:"1",control:Object(g.jsx)(Ie.a,{color:"success",size:"small"}),label:"Farmer"})]})]}),Object(g.jsx)(Fe.a,{sx:{paddingBottom:"10px"},label:"Email",type:"email",placeholder:"Enter your email",inputRef:a,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(Fe.a,{sx:{paddingBottom:"10px"},label:"Password",type:"password",placeholder:"Create a password",inputRef:i,variant:"standard",color:"success",size:"small",fullWidth:!0,required:!0}),Object(g.jsx)(l.a,{color:"success",sx:{backgroundColor:"#72b750",margin:"10px 0px"},variant:"contained",type:"submit",fullWidth:!0,children:"Sign Up"})]})]})},Be=["children","value","index"];function We(e){var t=e.children,a=e.value,n=e.index,i=Object(me.a)(e,Be);return Object(g.jsx)("div",Object(pe.a)(Object(pe.a)({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},i),{},{children:a===n&&Object(g.jsx)(C.a,{children:t})}))}function He(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Me=function(){var e=Object(he.a)(),t=i.a.useState(0),a=Object(w.a)(t,2),n=a[0],r=a[1];return Object(g.jsx)(Te.a,{style:{maxWidth:380,margin:"6vh auto"},elevation:7,children:Object(g.jsxs)(C.a,{sx:{bgcolor:"background.paper",maxWidth:380},children:[Object(g.jsx)(xe.a,{position:"static",children:Object(g.jsxs)(ge.a,{value:n,onChange:function(e,t){r(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(g.jsx)(Oe.a,Object(pe.a)({label:"Sign In"},He(0))),Object(g.jsx)(Oe.a,Object(pe.a)({label:"Sign Up"},He(1)))]})}),Object(g.jsxs)(ue.a,{axis:"rtl"===e.direction?"x-reverse":"x",index:n,onChangeIndex:function(e){r(e)},children:[Object(g.jsx)(We,{value:n,index:0,dir:e.direction,children:Object(g.jsx)(Se,{})}),Object(g.jsx)(We,{value:n,index:1,dir:e.direction,children:Object(g.jsx)(Pe,{})})]})]})})};var $e=function(e){return Object(g.jsxs)(s.a,{container:!0,sx:{marginTop:"-25px"},children:[e.items.map((function(e){return Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsxs)(y.a,{sx:{display:"flex"},elevation:7,children:[Object(g.jsx)(k.a,{component:"img",sx:{width:"35%"},image:e.image,alt:"Live from space album cover"}),Object(g.jsxs)(C.a,{sx:{width:"65%",display:"flex",flexDirection:"column"},children:[Object(g.jsx)(_.a,{sx:{backgroundColor:"#ffffff"},title:e.name,subheader:e.price,action:Object(g.jsx)(U.a,{sx:{bgcolor:"#F2AB50",marginTop:"70%"},"aria-label":"recipe",children:Object(g.jsx)(q.a,{children:e.quantity})})}),Object(g.jsxs)(N.a,{sx:{flex:"1 0 auto",backgroundColor:"#ffffff"},children:[Object(g.jsx)(q.a,{component:"div",style:{color:"#516c66"},variant:"h6",children:e.farm}),Object(g.jsx)(q.a,{variant:"body1",color:"text.secondary",component:"div",children:e.description})]})]})]})},e.id)})),";"]})};var Ve=function(){return Object(g.jsx)(ce,{children:Object(g.jsx)($e,{items:[{id:"1",name:"Cucumbers",image:"https://cdn.plantssparkjoy.com/wp-content/uploads/2021/09/02071046/growing-cucumbers-with-plants-spark-joy.jpeg",price:"$12",description:"These Cucumbers are raised outdoors and fed organic fertilizers only",quantity:"5",farm:"Mike's farm"},{id:"2",name:"Tomatoes",image:"https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg",price:"$15",description:"National tomatoes outdoor drown on 1500m elevation with minimum pesticides",quantity:"1",farm:"Jnaynet Tansa"},{id:"3",name:"Potatoes",image:"https://www.vanmeuwen.com/static-images/master/static-images/how-to-grow-potatoes/how-to-plant-grow-potatoes.jpg",price:"$10",description:"Medium sized potatoes, with no additional fertilizers",quantity:"3",farm:"Ray's"},{id:"4",name:"Onions",image:"https://jainsusa.com/wp-content/uploads/2015/02/5tips_to_grow_great_onions.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"2",farm:"Dany's farm"}]})})};var Ue=function(){return Object(g.jsx)(ce,{children:Object(g.jsx)($e,{items:[{id:"1",name:"Apple trees",image:"https://www.nature-and-garden.com/wp-content/uploads/sites/4/2018/10/apple-tree.jpg",price:"$25",description:"These Apple trees are raised outdoors and fed organic fertilizers only",quantity:"2",farm:"Dani's farm"},{id:"2",name:"Cherry trees",image:"https://gardenerspath.com/wp-content/uploads/2019/07/How-to-Grow-and-Care-for-Fruiting-Cherry-Trees-Cover.jpg",price:"$27",description:"National Cherry trees outdoor drown on 1500m elevation with minimum pesticides",quantity:"1",farm:"Ray's"},{id:"3",name:"Peach trees",image:"https://www.garden.eco/wp-content/uploads/2018/06/how-to-grow-a-peach-tree.jpg",price:"$25",description:"Medium sized potatoes, with no additional fertilizers",quantity:"3",farm:"Mike's farm"},{id:"4",name:"Olive trees",image:"https://www.trees.com/wp-content/uploads/2019/11/olive-tree.jpg",price:"$12",description:"Round reddish onions that are fertilizer fed",quantity:"7",farm:"Jnaynet Tansa"}]})})},Je=["component"];var Ge=function(e){var t=e.component,a=Object(me.a)(e,Je),n=localStorage.getItem("user_type");return Object(g.jsx)(c.b,Object(pe.a)(Object(pe.a)({},a),{},{render:function(e){return"1"===n?Object(g.jsx)(t,Object(pe.a)({},e)):Object(g.jsx)(c.a,{to:"/"})}}))},Qe=["component"];var Xe=function(e){var t=e.component,a=Object(me.a)(e,Qe),n=localStorage.getItem("user_type");return Object(g.jsx)(c.b,Object(pe.a)(Object(pe.a)({},a),{},{render:function(e){return"0"===n?Object(g.jsx)(t,Object(pe.a)({},e)):Object(g.jsx)(c.a,{to:"/"})}}))};var Ye=function(){return Object(g.jsxs)(c.d,{children:[Object(g.jsx)(c.b,{path:"/",exact:!0,component:Me}),Object(g.jsx)(Ge,{path:"/profile",component:V}),Object(g.jsx)(Ge,{path:"/dashboard",component:v}),Object(g.jsx)(Ge,{path:"/vegetables",component:ne}),Object(g.jsx)(Ge,{path:"/trees",component:ae}),Object(g.jsx)(Xe,{path:"/home",component:je}),Object(g.jsx)(Xe,{path:"/farm/:farmId",component:Ce}),Object(g.jsx)(Xe,{path:"/orders",component:Ve}),Object(g.jsx)(Xe,{path:"/adoptions",component:Ue})]})};o.a.render(Object(g.jsx)(b.a,{children:Object(g.jsx)(Ye,{})}),document.getElementById("root"))},49:function(e,t,a){e.exports={actions:"AddItemForm_actions__9jQa8",control:"AddItemForm_control__2QHBr",form:"AddItemForm_form__1iOlZ",formTitle:"AddItemForm_formTitle__3qS_0",formContainer:"AddItemForm_formContainer__sv65S"}},55:function(e,t,a){e.exports={actions:"EditProfileForm_actions__3LPEi",control:"EditProfileForm_control__2JhOt",form:"EditProfileForm_form__1jQcL",formTitle:"EditProfileForm_formTitle__1MYmh",formContainer:"EditProfileForm_formContainer__NkUgR"}},92:function(e,t,a){e.exports={logoutLink:"AdminNavigation_logoutLink__33s-l",navList:"AdminNavigation_navList__15QYV",active:"AdminNavigation_active__26k-U",NavBrand:"AdminNavigation_NavBrand__1qXmo",profileLink:"AdminNavigation_profileLink__BstXS"}},93:function(e,t,a){e.exports={navList:"UserNavigation_navList__16Oqn",active:"UserNavigation_active__3TqA_",NavBrand:"UserNavigation_NavBrand__2e_S2"}}},[[237,1,2]]]);
//# sourceMappingURL=main.9d1abe51.chunk.js.map
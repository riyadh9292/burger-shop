(this["webpackJsonpbuild-burger"]=this["webpackJsonpbuild-burger"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngre_BreadBottom__1ux1Q",BreadTop:"BurgerIngre_BreadTop__p4QOw",Seeds1:"BurgerIngre_Seeds1__1EtvT",Seeds2:"BurgerIngre_Seeds2__2kG_T",Meat:"BurgerIngre_Meat__13npz",Cheese:"BurgerIngre_Cheese__2A-p5",Salad:"BurgerIngre_Salad__291C1",Bacon:"BurgerIngre_Bacon__3naKY"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3wGgA",Label:"BuildControl_Label__1xfdV",Less:"BuildControl_Less__1NyXu",More:"BuildControl_More__FejeP"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",inputElement:"Input_inputElement__3nNe8",Invalid:"Input_Invalid__16Mis"}},,,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",Desktop:"Toolbar_Desktop__QqjmX"}},,,function(e,t,n){e.exports={BuildControl:"BuildControls_BuildControl__1h4En",OrderButton:"BuildControls_OrderButton__1F-jd",enable:"BuildControls_enable__1mnxG"}},function(e,t,n){e.exports={Button:"Button_Button__1UZXS",Success:"Button_Success__3BQo6",Danger:"Button_Danger__1YHSx"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,,,,,,,,,function(e,t,n){e.exports={Burger:"Burger_Burger__1PwfL"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={loader:"Spinner_loader__fTuX5",load1:"Spinner_load1__1BXDX"}},function(e,t,n){e.exports={Content:"layout_Content__3hmJz"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"sideToggle_DrawerToggle__2SkPy"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_",input:"ContactData_input__Q270U"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_",input:"Auth_input__3biOv",ContactData:"Auth_ContactData__24hjm"}},,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(24),i=n.n(a),c=(n(61),n(62),n(2)),o=n(5),s=n(6),l=n(8),d=n(7),u=function(e){return e.children},p=n(56),j=n(43),h=n.n(j),b=n(15),O=n.n(b),g=n(0),f=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(g.jsx)("div",{className:O.a.BreadBottom});break;case"bread-top":t=Object(g.jsxs)("div",{className:O.a.BreadTop,children:[Object(g.jsx)("div",{className:O.a.Seeds1}),Object(g.jsx)("div",{className:O.a.Seeds2})]});break;case"meat":t=Object(g.jsx)("div",{className:O.a.Meat});break;case"cheese":t=Object(g.jsx)("div",{className:O.a.Cheese});break;case"salad":t=Object(g.jsx)("div",{className:O.a.Salad});break;case"bacon":t=Object(g.jsx)("div",{className:O.a.Bacon});break;default:t=null}return t},m=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(p.a)(Array(e.ingredients[t])).map((function(e,n){return Object(g.jsx)(f,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(g.jsx)("p",{children:"add some ingredients"})),Object(g.jsxs)("div",{className:h.a.Burger,children:[Object(g.jsx)(f,{type:"bread-top"}),t,Object(g.jsx)(f,{type:"bread-bottom"})]})},v=n(30),_=n.n(v),x=n(21),y=n.n(x),C=function(e){return Object(g.jsxs)("div",{className:y.a.BuildControl,children:[Object(g.jsx)("div",{className:y.a.Label,children:e.label}),Object(g.jsx)("button",{onClick:e.remove,className:y.a.Less,disabled:e.disabledInfo,children:"Less"}),Object(g.jsx)("button",{onClick:e.add,className:y.a.More,children:"More"})]})},S=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],k=function(e){return Object(g.jsxs)("div",{className:_.a.BuildControl,children:[Object(g.jsxs)("p",{children:["Price: ",e.price.toFixed(2)]}),S.map((function(t){return Object(g.jsx)(C,{disabledInfo:e.disabledInfo[t.type],type:t.type,add:function(){return e.add(t.type)},remove:function(){return e.remove(t.type)},label:t.label},t.label)})),Object(g.jsx)("button",{disabled:!e.purchaseAble,className:_.a.OrderButton,onClick:e.ordered,children:"ORDER NOW"})]})},N=n(44),I=n.n(N),B=n(45),w=n.n(B),T=function(e){return e.show?Object(g.jsx)("div",{className:w.a.Backdrop,onClick:e.clicked}):null},D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(g.jsxs)(u,{children:[Object(g.jsx)(T,{show:this.props.show,clicked:this.props.backdropHanlder}),Object(g.jsx)("div",{className:I.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component),A=n(31),H=n.n(A),E=function(e){return Object(g.jsx)("button",{disabled:e.disabled,onClick:e.clicked,className:[H.a.Button,H.a[e.btnType]].join(" "),children:e.children})},L=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(g.jsxs)("li",{children:[t," : ",e.ingredients[t]," "]},t)}));return Object(g.jsxs)(u,{children:[Object(g.jsx)("h3",{children:"Your Order"}),Object(g.jsx)("p",{children:"A delicious burger with the following ingredients"}),Object(g.jsx)("ol",{type:"I",children:t}),Object(g.jsxs)("p",{children:["Total price is : $",Object(g.jsxs)("strong",{children:[" ",e.price.toFixed(2)]})]}),Object(g.jsx)("i",{children:"Press continue to checkout"}),Object(g.jsx)("br",{}),Object(g.jsx)(E,{btnType:"Success",clicked:e.confirm,children:"Continue"}),Object(g.jsx)(E,{btnType:"Danger",clicked:e.cancel,children:"Cancel"})]})},F=n(26),R=n.n(F),U=R.a.create({baseURL:"https://burgerbuilder-f9ec6-default-rtdb.firebaseio.com/"}),P=n(46),M=n.n(P),q=function(){return Object(g.jsx)("div",{className:M.a.loader,children:"Loading..."})},V=function(e,t){return function(n){Object(l.a)(a,n);var r=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){console.log("will unmount",this.reqInterceptor,this.resInterceptor),t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(g.jsxs)(u,{children:[Object(g.jsx)(D,{show:this.state.error,backdropHanlder:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(g.jsx)(e,Object(c.a)({},this.props))]})}}]),a}(r.Component)},z=n(13),G="ADD_INGREDIENTS",X="REMOVE_INGREDIENTS",J="SET_INGREDIENTS",Y="FETCH_INGREDIENTS_FAILED",Q="PURCHASE_BURGER_SUCCESS",Z="PURCHASE_BURGER_FAIL",K="PURCHASE_BURGER_START",$="PURCHASE_INIT",W="FETCH_ORDERS_SUCCESS",ee="FETCH_ORDERS_FAIL",te=function(){return function(e){U.get("https://burgerbuilder-f9ec6-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:J,ingredients:n}))})).catch((function(t){return e({type:Y})}))}},ne=function(e){return function(t){t({type:K}),U.post("/orders.json",e).then((function(n){t(function(e,t){return{type:Q,orderId:e,orderData:t}}(n.data.name,e))})).catch((function(e){t({type:Z,error:e})}))}},re=function(){return function(e){e({type:"FETCH_ORDERS_START"}),U.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(Object(c.a)(Object(c.a)({},t.data[r]),{},{id:r}));e({type:W,orders:n})})).catch((function(t){return e({type:ee,error:t})}))}},ae=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={Ordered:!1,loading:!1},e.OrderHandler=function(){e.setState({Ordered:!0})},e.backdropHanlder=function(){e.setState({Ordered:!1})},e.continueOrder=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updateOrderNow",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){console.log(this.props.ings);var e=null,t=Object(c.a)({},this.props.ings);for(var n in t)t[n]=t[n]<=0;console.log(t);var r=this.props.error?Object(g.jsx)("p",{children:"Ingredients can't be loaded"}):Object(g.jsx)(q,{});return this.props.ings&&(r=Object(g.jsxs)(u,{children:[Object(g.jsx)(m,{ingredients:this.props.ings}),Object(g.jsx)(k,{ordered:this.OrderHandler,purchaseAble:this.updateOrderNow(this.props.ings),price:this.props.price,disabledInfo:t,add:this.props.onIngredientAdded,remove:this.props.onIngredientRemove})]}),e=Object(g.jsx)(L,{price:this.props.price,confirm:this.continueOrder,cancel:this.backdropHanlder,ingredients:this.props.ings})),this.state.loading&&(e=Object(g.jsx)(q,{})),Object(g.jsxs)(u,{children:[Object(g.jsx)(D,{show:this.state.Ordered,backdropHanlder:this.backdropHanlder,children:e}),r]})}}]),n}(r.Component),ie=Object(z.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error}}),(function(e){return{onIngredientAdded:function(t){return e({type:G,ingredientName:t})},onIngredientRemove:function(t){return e({type:X,ingredientName:t})},onInitIngredients:function(){return e(te())},onInitPurchase:function(){return e({type:$})}}}))(V(ae,U)),ce=n(47),oe=n.n(ce),se=n(27),le=n.n(se),de=n.p+"static/media/logo.ec69c7f6.png",ue=n(48),pe=n.n(ue),je=function(){return Object(g.jsx)("div",{className:pe.a.Logo,children:Object(g.jsx)("img",{src:de,alt:"myBurger"})})},he=n(49),be=n.n(he),Oe=n(32),ge=n.n(Oe),fe=n(18),me=function(e){return Object(g.jsx)("li",{className:ge.a.NavigationItem,children:Object(g.jsx)(fe.b,{activeClassName:ge.a.active,to:e.link,exact:!0,children:e.children})})},ve=function(){return Object(g.jsxs)("ul",{className:be.a.NavigationItems,children:[Object(g.jsx)(me,{link:"/",children:" Burger builder "}),Object(g.jsx)(me,{link:"/orders",children:" Orders "}),Object(g.jsx)(me,{link:"/auth",children:" Authentication "})]})},_e=n(50),xe=n.n(_e),ye=function(e){return Object(g.jsxs)("div",{className:xe.a.DrawerToggle,onClick:e.clicked,children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})},Ce=function(e){return Object(g.jsxs)("header",{className:le.a.Toolbar,children:[Object(g.jsx)(ye,{clicked:e.shoSideM}),Object(g.jsx)("div",{className:le.a.Logo,children:Object(g.jsx)(je,{})}),Object(g.jsx)("nav",{className:le.a.Desktop,children:Object(g.jsx)(ve,{})})]})},Se=n(19),ke=n.n(Se),Ne=function(e){var t=[ke.a.SideDrawer,ke.a.Close];return e.open&&(t=[ke.a.SideDrawer,ke.a.Open]),Object(g.jsxs)(u,{children:[Object(g.jsx)(T,{show:e.open,clicked:e.closed}),Object(g.jsxs)("div",{className:t.join(" "),children:[Object(g.jsx)("div",{className:ke.a.Logo,children:Object(g.jsx)(je,{})}),Object(g.jsx)("nav",{children:Object(g.jsx)(ve,{})})]})]})},Ie=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showSidebar:!1},e.SideDrawerClosedHandler=function(){e.setState((function(e){return{showSidebar:!e.showSidebar}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(u,{children:[Object(g.jsx)(Ce,{shoSideM:this.SideDrawerClosedHandler}),Object(g.jsx)(Ne,{open:this.state.showSidebar,closed:this.SideDrawerClosedHandler}),Object(g.jsx)("div",{children:"Backdrop"}),Object(g.jsx)("main",{className:oe.a.Content,children:this.props.children})]})}}]),n}(r.Component),Be=n(51),we=n.n(Be),Te=function(e){return Object(g.jsxs)("div",{className:we.a.CheckoutSummary,children:[Object(g.jsx)("h1",{children:" we hope it tastes well"}),Object(g.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(g.jsx)(m,{ingredients:e.ingredients})}),Object(g.jsx)(E,{btnType:"Danger",clicked:e.onCheckoutCancel,children:"Cancel"}),Object(g.jsx)(E,{btnType:"Success",clicked:e.onCheckoutContinue,children:"Continue"})]})},De=n(4),Ae=n(52),He=n.n(Ae),Ee=n(22),Le=n.n(Ee),Fe=function(e){var t=null,n=[Le.a.inputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Le.a.Invalid),e.elementType){case"input":t=Object(g.jsx)("input",Object(c.a)(Object(c.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(g.jsx)("textarea",Object(c.a)(Object(c.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(g.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(g.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(g.jsx)("input",Object(c.a)(Object(c.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(g.jsxs)("div",{className:Le.a.Input,children:[Object(g.jsx)("label",{className:Le.a.Label,children:e.label}),t]})},Re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP CODE"},value:"",validation:{required:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Mail Address"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault(),console.log(e.props.ings);var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a=+e.props.price,i={ingredients:e.props.ings,price:a.toFixed(2),orderData:n};e.props.onOrderBurger(i)},e.changedHandler=function(t,n){var r=Object(c.a)({},e.state.orderForm),a=Object(c.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0,r[n]=a;var i=!0;for(var o in r)i=r[o].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!1;return!t||(t.required&&(n=""!==e.trim()),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=Object(g.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(g.jsx)(Fe,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.changedHandler(n,t.id)}},t.id)})),Object(g.jsx)(E,{btnType:"Success",disabled:!this.state.formIsValid,children:" Order "})]});return this.props.loading&&(r=Object(g.jsx)(q,{})),Object(g.jsxs)("div",{className:He.a.ContactData,children:[Object(g.jsx)("h4",{children:"Enter your contact data"}),r]})}}]),n}(r.Component),Ue=Object(z.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading}}),(function(e){return{onOrderBurger:function(t){return e(ne(t))}}}))(V(Re,U)),Pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).checkoutCancelHandler=function(){e.props.history.goBack()},e.checkoutContinueHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=Object(g.jsx)(De.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(g.jsx)(De.a,{to:"/"}):null;e=Object(g.jsxs)("div",{children:[t,Object(g.jsx)(Te,{ingredients:this.props.ings,onCheckoutCancel:this.checkoutCancelHandler,onCheckoutContinue:this.checkoutContinueHandler}),Object(g.jsx)(De.b,{path:this.props.match.path+"/contact-data",component:Ue})]})}return e}}]),n}(r.Component),Me=Object(z.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(Pe),qe=n(53),Ve=n.n(qe),ze=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return Object(g.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(g.jsxs)("div",{className:Ve.a.Order,children:[Object(g.jsxs)("p",{children:["Ingredients : ",r]}),Object(g.jsxs)("p",{children:["Price :",Object(g.jsxs)("strong",{children:[" $",e.price.toFixed(2)," "]})]})]})},Ge=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"render",value:function(){return Object(g.jsx)("div",{children:this.props.loading?Object(g.jsx)(q,{}):this.props.orders.map((function(e){return Object(g.jsx)(ze,{ingredients:e.ingredients,price:+e.price},e.id)}))})}}]),n}(r.Component),Xe=Object(z.b)((function(e){return{orders:e.order.orders,loading:e.order.loading}}),(function(e){return{onFetchOrders:function(){return e(re())}}}))(V(Ge,U)),Je=n(16),Ye=n(54),Qe=n.n(Ye),Ze=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"enter your password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignUp:!0},e.inputChangedHandler=function(t,n){var r=Object(c.a)(Object(c.a)({},e.state.controls),{},Object(Je.a)({},n,Object(c.a)(Object(c.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.onSubmitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignUp)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignUp:!e.isSignUp}}))},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});console.log(t);var r=t.map((function(t){return Object(g.jsx)(Fe,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)}));return Object(g.jsxs)("div",{className:Qe.a.Auth,children:[Object(g.jsxs)("form",{onSubmit:this.onSubmitHandler,children:[r,Object(g.jsx)(E,{btnType:"Success",children:" Submit "})]}),Object(g.jsxs)(E,{clicked:this.switchAuthModeHandler,btnType:"Danger",children:[" Switch To ",this.state.isSignUp?"Signin":"Signup"," "]})]})}}]),n}(r.Component),Ke=Object(z.b)(null,(function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={email:e,password:t,returnSecureToken:!0},i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC0dGJiHAsQ-hHTjJJdpoUxuHsZhBuhF0c        ";n||(i="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC0dGJiHAsQ-hHTjJJdpoUxuHsZhBuhF0c           "),R.a.post(i,a).then((function(e){console.log(e),r(function(e){return{type:"AUTH_SUCCESS",authData:e}}(e.data))})).catch((function(e){console.log(e.request),r({type:"AUTH_FAIL",error:e})}))}}(t,n,r))}}}))(Ze);var $e=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(Ie,{children:Object(g.jsxs)(De.d,{children:[Object(g.jsx)(De.b,{path:"/checkout",component:Me}),Object(g.jsx)(De.b,{path:"/orders",component:Xe}),Object(g.jsx)(De.b,{path:"/auth",component:Ke}),Object(g.jsx)(De.b,{path:"/",component:ie})]})})})},We=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,88)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},et=n(23),tt=n(55),nt={ingredients:null,totalPrice:4,error:!1},rt={salad:.5,cheese:.4,meat:1.3,bacon:.7},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(c.a)(Object(c.a)({},e),{},{ingredients:Object(c.a)(Object(c.a)({},e.ingredients),{},Object(Je.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+rt[t.ingredientName]});case X:return Object(c.a)(Object(c.a)({},e),{},{ingredients:Object(c.a)(Object(c.a)({},e.ingredients),{},Object(Je.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-rt[t.ingredientName]});case J:return Object(c.a)(Object(c.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},error:!1,totalPrice:4});case Y:return Object(c.a)(Object(c.a)({},e),{},{error:!0});default:return e}},it={orders:[],loading:!1,purchased:!1},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(c.a)(Object(c.a)({},e),{},{purchased:!1});case K:return Object(c.a)(Object(c.a)({},e),{},{loading:!0});case Q:var n=Object(c.a)(Object(c.a)({},t.orderData),{},{id:t.orderId});return Object(c.a)(Object(c.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case Z:return Object(c.a)(Object(c.a)({},e),{},{loading:!1});case K:return Object(c.a)(Object(c.a)({},e),{},{loading:!0});case W:return Object(c.a)(Object(c.a)({},e),{},{orders:t.orders,loading:!1});case ee:return Object(c.a)(Object(c.a)({},e),{},{loading:!1});default:return e}},ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||et.c,st=Object(et.b)({burgerBuilder:at,order:ct}),lt=Object(et.d)(st,ot(Object(et.a)(tt.a))),dt=Object(g.jsx)(z.a,{store:lt,children:Object(g.jsx)(fe.a,{children:Object(g.jsx)($e,{})})});i.a.render(dt,document.getElementById("root")),We()}],[[87,1,2]]]);
//# sourceMappingURL=main.9ba70345.chunk.js.map
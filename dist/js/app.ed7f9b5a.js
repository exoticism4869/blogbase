(function(){var e={9424:function(e,t,o){"use strict";var s=o(9242),n=o(3396);const l={class:"app-wrapper"},i={class:"app"};function r(e,t,o,r,a,c){const u=(0,n.up)("Navigator"),p=(0,n.up)("router-view"),d=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",i,[(0,n.wy)((0,n.Wm)(u,null,null,512),[[s.F8,a.navigation]]),(0,n.Wm)(p),(0,n.wy)((0,n.Wm)(d,null,null,512),[[s.F8,a.navigation]])])])}var a=o(7139);const c=e=>((0,n.dD)("data-v-04e2a4b0"),e=e(),(0,n.Cn)(),e),u={class:"container"},p={class:"branding"},d=(0,n.Uk)("Blogbase"),g={class:"nav-links"},m=(0,n.Uk)("Home"),h=(0,n.Uk)("Blogs"),f=(0,n.Uk)("Create Post"),v=(0,n.Uk)("Login/Register"),w={class:"profile-menu"},_={class:"info"},b={class:"initials"},k={class:"right"},y={class:"options"},P=c((()=>(0,n._)("p",null,"Sign Out",-1))),C={class:"mobile-nav"},U=(0,n.Uk)("Home"),j=(0,n.Uk)("Blogs"),N=(0,n.Uk)("Create Post"),W=(0,n.Uk)("Login/Register");function T(e,t,l,i,r,c){const T=(0,n.up)("router-link"),B=(0,n.up)("inline-svg");return(0,n.wg)(),(0,n.iD)("header",null,[(0,n._)("nav",u,[(0,n._)("div",p,[(0,n.Wm)(T,{class:"header",to:{name:"Home"}},{default:(0,n.w5)((()=>[d])),_:1})]),(0,n._)("div",g,[(0,n.wy)((0,n._)("ul",null,[(0,n.Wm)(T,{class:"link",to:{name:"Home"}},{default:(0,n.w5)((()=>[m])),_:1}),(0,n.Wm)(T,{class:"link",to:c.user?{name:"Blogs"}:{name:"Login"}},{default:(0,n.w5)((()=>[h])),_:1},8,["to"]),(0,n.Wm)(T,{class:"link",to:c.user?{name:"CreatePost"}:{name:"Login"}},{default:(0,n.w5)((()=>[f])),_:1},8,["to"]),c.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(T,{key:0,class:"link",to:{name:"Login"}},{default:(0,n.w5)((()=>[v])),_:1}))],512),[[s.F8,!r.mobile]]),c.user?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,a.C_)([{"mobile-user-menu":r.mobile},"profile"]),onClick:t[1]||(t[1]=(...e)=>c.toggleProfileMenu&&c.toggleProfileMenu(...e)),ref:"profile"},[(0,n._)("span",null,(0,a.zw)(this.$store.state.profileInitials),1),(0,n.wy)((0,n._)("div",w,[(0,n._)("div",_,[(0,n._)("p",b,(0,a.zw)(this.$store.state.profileInitials),1),(0,n._)("div",k,[(0,n._)("p",null,(0,a.zw)(this.$store.state.profileFirstName)+" "+(0,a.zw)(this.$store.state.profileLastName),1),(0,n._)("p",null,(0,a.zw)(this.$store.state.profileUsername),1),(0,n._)("p",null,(0,a.zw)(this.$store.state.profileEmail),1)])]),(0,n._)("div",y,[(0,n._)("div",{onClick:t[0]||(t[0]=(...e)=>c.signOut&&c.signOut(...e)),class:"option"},[(0,n.Wm)(B,{src:o(7600),class:"icon"},null,8,["src"]),P])])],512),[[s.F8,r.profileMenu]])],2)):(0,n.kq)("",!0)])]),(0,n.wy)((0,n.Wm)(B,{src:o(5718),onClick:c.toggleMobileNav,class:"menu-icon"},null,8,["src","onClick"]),[[s.F8,r.mobile]]),(0,n.Wm)(s.uT,{name:"mobile-nav"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("ul",C,[(0,n.Wm)(T,{class:"link",to:{name:"Home"}},{default:(0,n.w5)((()=>[U])),_:1}),(0,n.Wm)(T,{class:"link",to:{name:"Blogs"}},{default:(0,n.w5)((()=>[j])),_:1}),(0,n.Wm)(T,{class:"link",to:{name:"CreatePost"}},{default:(0,n.w5)((()=>[N])),_:1}),c.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(T,{key:0,class:"link",to:{name:"Login"}},{default:(0,n.w5)((()=>[W])),_:1}))],512),[[s.F8,r.mobileNav]])])),_:1})])}var B={name:"blogbase-navigator",data(){return{profileMenu:!1,mobile:null,mobileNav:null,windowWidth:null}},created(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{toggleProfileMenu(){this.profileMenu=!this.profileMenu},signOut(){this.$store.commit("signOut")},checkScreen(){this.windowWidth=window.innerWidth,this.windowWidth<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)},toggleMobileNav(){this.mobileNav=!this.mobileNav}},computed:{user(){return this.$store.state.user}}},O=o(89);const L=(0,O.Z)(B,[["render",T],["__scopeId","data-v-04e2a4b0"]]);var M=L;const $=e=>((0,n.dD)("data-v-79d82ce3"),e=e(),(0,n.Cn)(),e),D={class:"container"},S={class:"left"},x={class:"col-1"},I=(0,n.Uk)("FireBlogs"),F={href:"#"},H={href:"#"},E={href:"#"},R={href:"#"},z={class:"col-2"},V=(0,n.Uk)("Home"),q=(0,n.Uk)("Blogs"),Z=(0,n.Uk)("Create Post"),A=(0,n.Uk)("Login In / Register"),J=$((()=>(0,n._)("div",{class:"right"},[(0,n._)("p",null,"Copyright 2021 All Rights Reserved")],-1)));function Y(e,t,o,s,l,i){const r=(0,n.up)("router-link"),a=(0,n.up)("youTube"),c=(0,n.up)("twitter"),u=(0,n.up)("instagram"),p=(0,n.up)("linkedin");return(0,n.wg)(),(0,n.iD)("footer",null,[(0,n._)("div",D,[(0,n._)("div",S,[(0,n._)("div",x,[(0,n.Wm)(r,{class:"header",to:{name:"Home"}},{default:(0,n.w5)((()=>[I])),_:1}),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("a",F,[(0,n.Wm)(a,{class:"svg-icon"})])]),(0,n._)("li",null,[(0,n._)("a",H,[(0,n.Wm)(c,{class:"svg-icon"})])]),(0,n._)("li",null,[(0,n._)("a",E,[(0,n.Wm)(u,{class:"svg-icon"})])]),(0,n._)("li",null,[(0,n._)("a",R,[(0,n.Wm)(p,{class:"svg-icon"})])])])]),(0,n._)("div",z,[(0,n._)("ul",null,[(0,n.Wm)(r,{class:"link",to:{name:"Home"}},{default:(0,n.w5)((()=>[V])),_:1}),(0,n.Wm)(r,{class:"link",to:{name:"Blogs"}},{default:(0,n.w5)((()=>[q])),_:1}),e.admin?((0,n.wg)(),(0,n.j4)(r,{key:0,class:"link",to:{name:"CreatePost"}},{default:(0,n.w5)((()=>[Z])),_:1})):(0,n.kq)("",!0),e.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(r,{key:1,class:"link",to:{name:"Login"}},{default:(0,n.w5)((()=>[A])),_:1}))])])]),J])])}var K={};const Q=(0,O.Z)(K,[["render",Y],["__scopeId","data-v-79d82ce3"]]);var G=Q,X={name:"App",components:{Navigator:M,Footer:G},data(){return{navigation:null}},methods:{checkRoute(){"Login"===this.$route.name||"Register"===this.$route.name||"ForgotPassword"===this.$route.name?this.navigation=!1:this.navigation=!0}},watch:{$route(){this.checkRoute()}}};const ee=(0,O.Z)(X,[["render",r]]);var te=ee,oe=o(678);const se=e=>((0,n.dD)("data-v-25033070"),e=e(),(0,n.Cn)(),e),ne={class:"home"},le={key:1,class:"updates"},ie={class:"container"},re=se((()=>(0,n._)("h2",null,"never miss a post. Register for your free account today!",-1))),ae=(0,n.Uk)("Register for blogbase");function ce(e,t,o,s,l,i){const r=(0,n.up)("BlogPost"),a=(0,n.up)("Arrow"),c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",ne,[i.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(r,{key:0,post:l.welcomeScreen},null,8,["post"])),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.allPost,((e,t)=>((0,n.wg)(),(0,n.j4)(r,{post:e,key:t},null,8,["post"])))),128)),i.user?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",le,[(0,n._)("div",ie,[re,(0,n.Wm)(c,{class:"router-button",to:{name:"Register"}},{default:(0,n.w5)((()=>[ae,(0,n.Wm)(a,{class:"arrow arrow-light"})])),_:1})])]))])}const ue={class:"blog-content"},pe={key:0},de={key:1},ge={key:2},me={key:3},he=(0,n.Uk)(" Register/Login "),fe=(0,n.Uk)(" View The Post "),ve={class:"blog-photo"},we=["src"],_e=["src"];function be(e,t,s,l,i,r){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)(["blog-wrapper",{"no-user":!r.user}])},[(0,n._)("div",ue,[(0,n._)("div",null,[s.post.title?((0,n.wg)(),(0,n.iD)("h1",pe,(0,a.zw)(s.post.title),1)):((0,n.wg)(),(0,n.iD)("h1",de,(0,a.zw)(s.post.blogTitle),1)),s.post.title?((0,n.wg)(),(0,n.iD)("p",ge,(0,a.zw)(s.post.blogPost),1)):((0,n.wg)(),(0,n.iD)("p",me,(0,a.zw)(s.post.blogContent),1)),s.post.title?((0,n.wg)(),(0,n.j4)(c,{key:4,class:"link link-light",to:{name:"Login"}},{default:(0,n.w5)((()=>[he])),_:1})):((0,n.wg)(),(0,n.j4)(c,{key:5,class:"link",to:{name:"ViewBlog",params:{id:s.post._id}}},{default:(0,n.w5)((()=>[fe])),_:1},8,["to"]))])]),(0,n._)("div",ve,[s.post.title?((0,n.wg)(),(0,n.iD)("img",{key:0,src:o(5952)(`./${s.post.photo}.jpg`),alt:""},null,8,we)):((0,n.wg)(),(0,n.iD)("img",{key:1,src:o(9722),alt:""},null,8,_e))])],2)}var ke={name:"blogbase-blogpost",props:{post:Object},computed:{user(){return this.$store.state.user}}};const ye=(0,O.Z)(ke,[["render",be],["__scopeId","data-v-4bbca750"]]);var Pe=ye,Ce={name:"blogbase-home",components:{BlogPost:Pe},data(){return{welcomeScreen:{title:"welcome!",blogPost:"Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",welcomeScreen:!0,photo:"coding"}}},created(){this.$store.commit("getAllPost")},methods:{},computed:{user(){return this.$store.state.user},allPost(){return console.log(this.$store.state.allPost),this.$store.state.allPost}}};const Ue=(0,O.Z)(Ce,[["render",ce],["__scopeId","data-v-25033070"]]);var je=Ue;const Ne={class:"form-wrap"},We={class:"login"},Te={class:"login-register"},Be=(0,n.Uk)(" Don't have an account? "),Oe=(0,n.Uk)("Register"),Le=(0,n._)("h2",null,"Login to Blogbase",-1),Me={class:"inputs"},$e={class:"input"},De={class:"input"},Se=(0,n._)("div",{class:"angle"},null,-1),xe=(0,n._)("div",{class:"background"},null,-1);function Ie(e,t,l,i,r,c){const u=(0,n.up)("router-link"),p=(0,n.up)("inline-svg");return(0,n.wg)(),(0,n.iD)("div",Ne,[(0,n._)("form",We,[(0,n._)("p",Te,[Be,(0,n.Wm)(u,{class:"router-link",to:{name:"Register"}},{default:(0,n.w5)((()=>[Oe])),_:1})]),Le,(0,n._)("div",Me,[(0,n._)("div",$e,[(0,n.wy)((0,n._)("input",{type:"email",placeholder:"email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[s.nr,r.email]]),(0,n.Wm)(p,{src:o(5234),class:"icon"},null,8,["src"])]),(0,n._)("div",De,[(0,n.wy)((0,n._)("input",{type:"password",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[s.nr,r.password]]),(0,n.Wm)(p,{src:o(7304),class:"icon"},null,8,["src"])]),(0,n.wy)((0,n._)("div",{class:"error"},(0,a.zw)(this.errorMsg),513),[[s.F8,r.error]])]),(0,n._)("button",{onClick:t[2]||(t[2]=(0,s.iM)(((...e)=>c.signIn&&c.signIn(...e)),["prevent"]))},"Sign In"),Se]),xe])}var Fe={name:"blogbase-login",data(){return{email:"",password:"",error:null,errorMsg:"邮箱或密码不正确"}},methods:{async signIn(){if(""!==this.email&&""!==this.password){const e=await fetch("https://qcvfxm.api.cloudendpoint.cn/login",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password})}).then((e=>e.json()));e.result?(this.error=!1,this.$store.commit("setProfileInfo",e.result),this.$store.commit("setProfileInitials"),this.$store.commit("getOwnPost"),this.$router.push({name:"Home"})):this.error=!0}}}};const He=(0,O.Z)(Fe,[["render",Ie]]);var Ee=He;const Re=e=>((0,n.dD)("data-v-da803bbc"),e=e(),(0,n.Cn)(),e),ze={class:"form-wrap"},Ve={class:"register"},qe={class:"login-register"},Ze=(0,n.Uk)(" Already have an account? "),Ae=(0,n.Uk)("Login"),Je=Re((()=>(0,n._)("h2",null,"Create Your FireBlog Account",-1))),Ye={class:"inputs"},Ke={class:"input"},Qe={class:"input"},Ge={class:"input"},Xe={class:"input"},et={class:"input"},tt={class:"correct"},ot=Re((()=>(0,n._)("div",{class:"angle"},null,-1))),st=Re((()=>(0,n._)("div",{class:"background"},null,-1)));function nt(e,t,l,i,r,c){const u=(0,n.up)("router-link"),p=(0,n.up)("inline-svg");return(0,n.wg)(),(0,n.iD)("div",ze,[(0,n._)("form",Ve,[(0,n._)("p",qe,[Ze,(0,n.Wm)(u,{class:"router-link",to:{name:"Login"}},{default:(0,n.w5)((()=>[Ae])),_:1})]),Je,(0,n._)("div",Ye,[(0,n._)("div",Ke,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"First Name","onUpdate:modelValue":t[0]||(t[0]=e=>r.firstName=e)},null,512),[[s.nr,r.firstName]]),(0,n.Wm)(p,{src:o(3805),class:"icon"},null,8,["src"])]),(0,n._)("div",Qe,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Last Name","onUpdate:modelValue":t[1]||(t[1]=e=>r.lastName=e)},null,512),[[s.nr,r.lastName]]),(0,n.Wm)(p,{src:o(3805),class:"icon"},null,8,["src"])]),(0,n._)("div",Ge,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Username","onUpdate:modelValue":t[2]||(t[2]=e=>r.username=e)},null,512),[[s.nr,r.username]]),(0,n.Wm)(p,{src:o(3805),class:"icon"},null,8,["src"])]),(0,n._)("div",Xe,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[3]||(t[3]=e=>r.email=e)},null,512),[[s.nr,r.email]]),(0,n.Wm)(p,{src:o(5234),class:"icon"},null,8,["src"])]),(0,n._)("div",et,[(0,n.wy)((0,n._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[4]||(t[4]=e=>r.password=e)},null,512),[[s.nr,r.password]]),(0,n.Wm)(p,{src:o(7304),class:"icon"},null,8,["src"])]),(0,n.wy)((0,n._)("div",{class:"error"},(0,a.zw)(this.errorMsg),513),[[s.F8,r.error]]),(0,n.wy)((0,n._)("div",tt,"注册成功",512),[[s.F8,!r.error]])]),(0,n._)("button",{onClick:t[5]||(t[5]=(0,s.iM)(((...e)=>c.register&&c.register(...e)),["prevent"]))},"Sign Up"),ot]),st])}var lt={name:"blogbase-register",data(){return{firstName:"",lastName:"",username:"",email:"",password:"",error:!0,errorMsg:""}},methods:{async register(){if(""!==this.email&&""!==this.password&&""!==this.firstName&&""!==this.lastName&&""!==this.username){const e=await fetch("https://qcvfxm.api.cloudendpoint.cn/register",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,username:this.username,firstname:this.firstName,lastname:this.lastName})}).then((e=>e.json()));e.result?(this.error=!1,this.$store.commit("setProfileInfo",{email:this.email,username:this.username,firstname:this.firstName,lastname:this.lastName}),this.$store.commit("setProfileInitials"),this.$router.push({name:"Home"})):(this.error=!0,this.errorMsg="注册失败")}}}};const it=(0,O.Z)(lt,[["render",nt],["__scopeId","data-v-da803bbc"]]);var rt=it;const at=e=>((0,n.dD)("data-v-a6841f6a"),e=e(),(0,n.Cn)(),e),ct={class:"blog-card-wrap"},ut={class:"blog-cards container"},pt={key:0,class:"toggle-edit"},dt=at((()=>(0,n._)("span",null,"Toggle Editing Post",-1)));function gt(e,t,o,l,i,r){const a=(0,n.up)("BlogCard");return(0,n.wg)(),(0,n.iD)("div",ct,[(0,n._)("div",ut,[e.user?((0,n.wg)(),(0,n.iD)("div",pt,[dt,(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=t=>e.editPost=t)},null,512),[[s.e8,e.editPost]])])):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.ownPost,((e,t)=>((0,n.wg)(),(0,n.j4)(a,{post:e,key:t},null,8,["post"])))),128))])])}const mt={class:"blog-card"},ht={class:"icons"},ft=["src"],vt={class:"info"},wt=(0,n.Uk)(" View The Post ");function _t(e,t,s,l,i,r){const c=(0,n.up)("inline-svg"),u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",mt,[(0,n._)("div",ht,[(0,n._)("div",{onClick:t[0]||(t[0]=(...t)=>e.editBlog&&e.editBlog(...t)),class:"icon"},[(0,n.Wm)(c,{src:"../assets/Icons/edit-regular.svg",class:"edit"})]),(0,n._)("div",{onClick:t[1]||(t[1]=(...t)=>e.deletePost&&e.deletePost(...t)),class:"icon"},[(0,n.Wm)(c,{src:"../assets/Icons/trash-regular.svg",class:"delete"})])]),(0,n._)("img",{src:o(9722),alt:""},null,8,ft),(0,n._)("div",vt,[(0,n._)("h4",null,(0,a.zw)(s.post.blogTitle),1),(0,n.Wm)(u,{class:"link",to:{name:"ViewBlog",params:{id:s.post._id}}},{default:(0,n.w5)((()=>[wt])),_:1},8,["to"])])])}var bt={name:"blogbase-card",props:["post"],methods:{},computed:{}};const kt=(0,O.Z)(bt,[["render",_t],["__scopeId","data-v-a98db020"]]);var yt=kt,Pt={name:"blogbase-blogs",components:{BlogCard:yt},computed:{ownPost(){return this.$store.state.ownPost.value}}};const Ct=(0,O.Z)(Pt,[["render",gt],["__scopeId","data-v-a6841f6a"]]);var Ut=Ct;const jt={class:"create-post"},Nt={class:"container"},Wt=(0,n._)("span",null,"Error:",-1),Tt={class:"blog-info"},Bt={class:"upload-file"},Ot=(0,n._)("label",{for:"blog-photo"},"Upload Cover Photo",-1),Lt={class:"blog-photo-preview"},Mt=["src"],$t={class:"editor"},Dt={class:"blog-actions"};function St(e,t,o,l,i,r){const c=(0,n.up)("QuillEditor");return(0,n.wg)(),(0,n.iD)("div",jt,[(0,n._)("div",Nt,[(0,n._)("div",{class:(0,a.C_)([{invisible:!i.error},"err-message"])},[(0,n._)("p",null,[Wt,(0,n.Uk)((0,a.zw)(this.errorMsg),1)])],2),(0,n._)("div",Tt,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:"Enter Blog Title","onUpdate:modelValue":t[0]||(t[0]=e=>i.blogTitle=e)},null,512),[[s.nr,i.blogTitle]]),(0,n._)("div",Bt,[Ot,(0,n._)("input",{type:"file",ref:"blogPhoto",id:"blog-photo",onChange:t[1]||(t[1]=(...e)=>r.fileChange&&r.fileChange(...e)),accept:".png, .jpg, .jpeg"},null,544)])]),(0,n._)("div",Lt,[(0,n._)("img",{src:i.blogCoverPhoto},null,8,Mt)]),(0,n._)("div",$t,[(0,n.Wm)(c,{theme:"snow","content-type":"html",content:i.blogHTML,"onUpdate:content":t[2]||(t[2]=e=>i.blogHTML=e)},null,8,["content"])]),(0,n._)("div",Dt,[(0,n._)("button",{onClick:t[3]||(t[3]=(...e)=>r.uploadBlog&&r.uploadBlog(...e))},"Publish Blog")])])])}var xt=o(6149),It={name:"CreatePost",data(){return{file:null,error:null,errorMsg:null,loading:null,blogCoverPhoto:"",blogTitle:"",blogHTML:""}},components:{QuillEditor:xt.Bn},methods:{fileChange(){this.file=this.$refs.blogPhoto.files[0];const e=new FileReader;e.addEventListener("load",(e=>{this.blogCoverPhoto=e.target.result})),e.readAsDataURL(this.file)},uploadBlog(){if(this.user)return this.file.size>=1048576?(this.error=!0,this.errorMsg="Please ensure your uploaded cover photo size < 1M!",void setTimeout((()=>{this.error=!1}),5e3)):this.file?0===this.blogTitle.length||0===this.blogHTML.length?(this.error=!0,this.errorMsg="Please ensure Blog Title & Blog Post has been filled!",void setTimeout((()=>{this.error=!1}),5e3)):void fetch("https://qcvfxm.api.cloudendpoint.cn/uploadBlog",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({email:this.email,blogTitle:this.blogTitle,blogCover:this.blogCoverPhoto,blogContent:this.blogHTML})}):(this.error=!0,this.errorMsg="Please ensure you uploaded a cover photo!",void setTimeout((()=>{this.error=!1}),5e3))}},computed:{user(){return this.$store.state.user},email(){return this.$store.state.profileEmail}}};const Ft=(0,O.Z)(It,[["render",St]]);var Ht=Ft,Et=o(9722);const Rt={class:"post-view"},zt={class:"container quillWrapper"},Vt=(0,n._)("img",{src:Et,alt:""},null,-1),qt=["innerHTML"];function Zt(e,t,o,s,l,i){return(0,n.wg)(),(0,n.iD)("div",Rt,[(0,n._)("div",zt,[(0,n._)("h2",null,(0,a.zw)(i.post.blogTitle),1),Vt,(0,n._)("div",{class:"post-content ql-editor",innerHTML:i.post.blogContent},null,8,qt)])])}var At={name:"ViewBlog",computed:{post(){return this.$store.getters.getPostById(this.$route.params.id)}}};const Jt=(0,O.Z)(At,[["render",Zt]]);var Yt=Jt;const Kt=[{path:"/",name:"Home",component:je,meta:{title:"Home"}},{path:"/login",name:"Login",component:Ee,meta:{title:"Login"}},{path:"/register",name:"Register",component:rt,meta:{title:"Register"}},{path:"/blogs",name:"Blogs",component:Ut,meta:{title:"Blogs"}},{path:"/create-post",name:"CreatePost",component:Ht,meta:{title:"Create Post"}},{path:"/view-blog",name:"ViewBlog",component:Yt,meta:{title:"View Blog"}}],Qt=(0,oe.p7)({history:(0,oe.r5)(),routes:Kt});Qt.beforeEach(((e,t,o)=>{document.title=`${e.meta.title} | FireBlog`,o()}));var Gt=Qt,Xt=o(65),eo=new Xt.ZP.Store({state:{editPost:null,user:null,profileEmail:null,profileFirstName:null,profileLastName:null,profileUsername:null,profileInitials:null,allPost:null,ownPost:null},getters:{getPostById:e=>t=>e.allPost.find((e=>e._id===t))},mutations:{toggleEditPost(e,t){e.editPost=t},setProfileInfo(e,t){e.profileEmail=t.email,e.profileFirstName=t.firstname,e.profileLastName=t.lastname,e.profileUsername=t.username,e.user=!0},setProfileInitials(e){console.log(e.profileFirstName),e.profileInitials=e.profileFirstName.match(/(\b\S)?/g).join("")+e.profileLastName.match(/(\b\S)?/g).join("")},signOut(e){e.profileEmail=null,e.profileFirstName=null,e.profileLastName=null,e.profileUsername=null,e.user=null},async getAllPost(e){const t=await fetch("https://qcvfxm.api.cloudendpoint.cn/getPost",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({email:e.profileEmail,all:!0})}).then((e=>e.json()));console.log(t),e.allPost=t},async getOwnPost(e){const t=await fetch("https://qcvfxm.api.cloudendpoint.cn/getPost",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify({email:e.profileEmail,all:!1})}).then((e=>e.json()));e.ownPost=t}},actions:{},modules:{}}),to=o(6239),oo=o.n(to);const so=(0,s.ri)(te);so.component("inline-svg",oo()),so.use(Gt),so.use(eo),so.mount("#app")},5952:function(e,t,o){var s={"./beautiful-stories.jpg":9722,"./coding.jpg":3919,"./designed-for-everyone.jpg":8265};function n(e){var t=l(e);return o(t)}function l(e){if(!o.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=l,e.exports=n,n.id=5952},5718:function(e,t,o){"use strict";e.exports=o.p+"img/bars-regular.c5e7c718.svg"},5234:function(e,t,o){"use strict";e.exports=o.p+"img/envelope-regular.32d7be33.svg"},7304:function(e,t,o){"use strict";e.exports=o.p+"img/lock-alt-solid.34a49fc3.svg"},7600:function(e,t,o){"use strict";e.exports=o.p+"img/sign-out-alt-regular.acfe993e.svg"},3805:function(e,t,o){"use strict";e.exports=o.p+"img/user-alt-light.8688aa95.svg"},9722:function(e,t,o){"use strict";e.exports=o.p+"img/beautiful-stories.acd6ee51.jpg"},3919:function(e,t,o){"use strict";e.exports=o.p+"img/coding.97929a2d.jpg"},8265:function(e,t,o){"use strict";e.exports=o.p+"img/designed-for-everyone.1d45c065.jpg"}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var l=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,function(){var e=[];o.O=function(t,s,n,l){if(!s){var i=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],l=e[u][2];for(var r=!0,a=0;a<s.length;a++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](s[a])}))?s.splice(a--,1):(r=!1,l<i&&(i=l));if(r){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[s,n,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,l,i=s[0],r=s[1],a=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(a)var u=a(o)}for(t&&t(s);c<i.length;c++)l=i[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},s=self["webpackChunkblogbase"]=self["webpackChunkblogbase"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(9424)}));s=o.O(s)})();
//# sourceMappingURL=app.ed7f9b5a.js.map
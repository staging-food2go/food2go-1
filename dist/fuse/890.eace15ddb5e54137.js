"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[890],{8890:(E,p,r)=>{r.r(p),r.d(p,{AuthSignUpModule:()=>B});var g=r(4521),d=r(7423),U=r(7446),m=r(7322),c=r(5245),f=r(8833),h=r(773),v=r(6236),A=r(7775),x=r(4466),s=r(3075),y=r(8288),e=r(5e3),T=r(3604),w=r(8613),Z=r(7261),C=r(9808),q=r(2494);const S=["signUpNgForm"];function I(t,o){if(1&t&&(e.TgZ(0,"fuse-alert",40),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.Q6J("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),e.xp6(1),e.hij(" ",n.alert.message," ")}}function J(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," First name is required "),e.qZA())}function b(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Last name is required "),e.qZA())}function F(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Email address is required "),e.qZA())}function N(t,o){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Please enter a valid email address "),e.qZA())}function _(t,o){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye")}function Q(t,o){1&t&&e._UZ(0,"mat-icon",41),2&t&&e.Q6J("svgIcon","heroicons_solid:eye-off")}function j(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1," Create your free account "),e.qZA())}function Y(t,o){1&t&&e._UZ(0,"mat-progress-spinner",42),2&t&&e.Q6J("diameter",24)("mode","indeterminate")}const M=function(){return["/sign-in"]},k=[{path:"",component:(()=>{class t{constructor(n,i,a,u,l){this._authService=n,this._userService=i,this._formBuilder=a,this._snackBar=u,this._router=l,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({first_name:["",s.kI.required],last_name:["",s.kI.required],email:["",[s.kI.required,s.kI.email]],password:["",s.kI.required]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._userService.register(this.signUpForm.value).subscribe(n=>{this._snackBar.open("User registration success!"),this._router.navigateByUrl("/sign-in")},n=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(T.e),e.Y36(w.K),e.Y36(s.qu),e.Y36(Z.ux),e.Y36(g.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["auth-sign-up"]],viewQuery:function(n,i){if(1&n&&e.Gf(S,5),2&n){let a;e.iGM(a=e.CRH())&&(i.signUpNgForm=a.first)}},decls:69,vars:18,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","firstname","matInput","",3,"formControlName"],[4,"ngIf"],["id","lastname","matInput","",3,"formControlName"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(n,i){if(1&n){const a=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e._uU(6,"Sign up"),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div"),e._uU(9,"Already have an account?"),e.qZA(),e.TgZ(10,"a",7),e._uU(11,"Sign in "),e.qZA(),e.qZA(),e.YNc(12,I,2,5,"fuse-alert",8),e.TgZ(13,"form",9),e.TgZ(14,"mat-form-field",10),e.TgZ(15,"mat-label"),e._uU(16,"First name"),e.qZA(),e._UZ(17,"input",11),e.YNc(18,J,2,0,"mat-error",12),e.qZA(),e.TgZ(19,"mat-form-field",10),e.TgZ(20,"mat-label"),e._uU(21,"Last name"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,b,2,0,"mat-error",12),e.qZA(),e.TgZ(24,"mat-form-field",10),e.TgZ(25,"mat-label"),e._uU(26,"Email address"),e.qZA(),e._UZ(27,"input",14),e.YNc(28,F,2,0,"mat-error",12),e.YNc(29,N,2,0,"mat-error",12),e.qZA(),e.TgZ(30,"mat-form-field",10),e.TgZ(31,"mat-label"),e._uU(32,"Password"),e.qZA(),e._UZ(33,"input",15,16),e.TgZ(35,"button",17),e.NdJ("click",function(){e.CHM(a);const l=e.MAs(34);return l.type="password"===l.type?"text":"password"}),e.YNc(36,_,1,1,"mat-icon",18),e.YNc(37,Q,1,1,"mat-icon",18),e.qZA(),e.TgZ(38,"mat-error"),e._uU(39," Password is required "),e.qZA(),e.qZA(),e.TgZ(40,"button",19),e.NdJ("click",function(){return i.signUp()}),e.YNc(41,j,2,0,"span",12),e.YNc(42,Y,1,2,"mat-progress-spinner",20),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"div",21),e.O4$(),e.TgZ(44,"svg",22),e.TgZ(45,"g",23),e._UZ(46,"circle",24),e._UZ(47,"circle",25),e.qZA(),e.qZA(),e.TgZ(48,"svg",26),e.TgZ(49,"defs"),e.TgZ(50,"pattern",27),e._UZ(51,"rect",28),e.qZA(),e.qZA(),e._UZ(52,"rect",29),e.qZA(),e.kcU(),e.TgZ(53,"div",30),e.TgZ(54,"div",31),e.TgZ(55,"div"),e._uU(56,"Welcome to"),e.qZA(),e.TgZ(57,"div"),e._uU(58,"our community"),e.qZA(),e.qZA(),e.TgZ(59,"div",32),e._uU(60," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.qZA(),e.TgZ(61,"div",33),e.TgZ(62,"div",34),e._UZ(63,"img",35),e._UZ(64,"img",36),e._UZ(65,"img",37),e._UZ(66,"img",38),e.qZA(),e.TgZ(67,"div",39),e._uU(68,"More than 17k people joined us, it's your turn"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const a=e.MAs(34);e.xp6(10),e.Q6J("routerLink",e.DdM(17,M)),e.xp6(2),e.Q6J("ngIf",i.showAlert),e.xp6(1),e.Q6J("formGroup",i.signUpForm),e.xp6(4),e.Q6J("formControlName","first_name"),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("first_name").hasError("required")),e.xp6(4),e.Q6J("formControlName","last_name"),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("last_name").hasError("required")),e.xp6(4),e.Q6J("formControlName","email"),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",i.signUpForm.get("email").hasError("email")),e.xp6(4),e.Q6J("formControlName","password"),e.xp6(3),e.Q6J("ngIf","password"===a.type),e.xp6(1),e.Q6J("ngIf","text"===a.type),e.xp6(3),e.Q6J("color","primary")("disabled",i.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",!i.signUpForm.disabled),e.xp6(1),e.Q6J("ngIf",i.signUpForm.disabled)}},directives:[g.yS,C.O5,s._Y,s.JL,s.sg,m.KE,m.hX,f.Nt,s.Fj,s.JJ,s.u,d.lW,m.R9,m.TO,q.W,c.Hw,h.Ou],encapsulation:2,data:{animation:y.L}}),t})()}];let B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.Bz.forChild(k),d.ot,U.p9,m.lN,c.Ps,f.c,h.Cq,v.J,A.fC,x.m,Z.ZX]]}),t})()}}]);
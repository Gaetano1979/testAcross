(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{augY:function(e,t,i){"use strict";i.r(t),i.d(t,"SearchUsersModule",function(){return I});var r=i("ofXK"),n=i("tyNb"),o=i("vkgz"),s=i("eIep"),c=i("lJxs"),l=i("JIr8"),b=i("XNiG"),a=i("LRne"),u=i("fXoL"),f=i("jhN1"),m=i("HT8n"),d=i("NyM5"),h=i("JqCM"),p=i("3Pt+");let v=(()=>{class e{constructor(e){this._fb=e,this.search_button="Ricerca",this.formSearch=this._fb.group({full_name:"",telefono:"",email:""}),this.formRicerca=new u.n}ngOnInit(){}ricerca(){const e=this.formSearch.getRawValue();this.formRicerca.next(e)}isNull(e,t){return e[t]}}return e.\u0275fac=function(t){return new(t||e)(u.Jb(p.b))},e.\u0275cmp=u.Db({type:e,selectors:[["filtro-ricerca"]],outputs:{formRicerca:"formRicerca"},decls:22,vars:2,consts:[[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],[1,"form-floating","mb-3"],["formControlName","full_name","type","text","id","name","placeholder","Inserire nome e cognome",1,"form-control","form-control-sm"],["for","name"],["formControlName","email","type","email","id","email","placeholder","Inserire Email",1,"form-control"],["for","email"],[1,"form-floating","mb-5"],["formControlName","telefono","type","text","id","telefono","placeholder","Inserire Telefono",1,"form-control"],["for","telefono"],[1,"mb-3","d-flex"],["type","submit",1,"btn","btn-sm","btn-primary"],["routerLink","/view-edit-user","type","button",1,"btn","btn-sm","btn-secondary","mx-3"]],template:function(e,t){1&e&&(u.Mb(0,"form",0),u.Tb("ngSubmit",function(){return t.ricerca()}),u.Mb(1,"div",1),u.Mb(2,"div",2),u.Mb(3,"div",3),u.Kb(4,"input",4),u.Mb(5,"label",5),u.jc(6,"Nome e Cognome"),u.Lb(),u.Lb(),u.Lb(),u.Mb(7,"div",2),u.Mb(8,"div",3),u.Kb(9,"input",6),u.Mb(10,"label",7),u.jc(11,"Email"),u.Lb(),u.Lb(),u.Lb(),u.Mb(12,"div",2),u.Mb(13,"div",8),u.Kb(14,"input",9),u.Mb(15,"label",10),u.jc(16,"Telefono"),u.Lb(),u.Lb(),u.Lb(),u.Lb(),u.Mb(17,"div",11),u.Mb(18,"button",12),u.jc(19),u.Lb(),u.Mb(20,"a",13),u.jc(21,"Crea nuovo utente"),u.Lb(),u.Lb(),u.Lb()),2&e&&(u.ac("formGroup",t.formSearch),u.yb(19),u.kc(t.search_button))},directives:[p.h,p.f,p.d,p.a,p.e,p.c,n.c],encapsulation:2}),e})();function g(e,t){if(1&e){const e=u.Nb();u.Mb(0,"div",2),u.Mb(1,"div",3),u.Mb(2,"div",4),u.Mb(3,"h5",5),u.jc(4),u.Lb(),u.Mb(5,"p",6),u.jc(6),u.Lb(),u.Mb(7,"p",6),u.Mb(8,"small",7),u.jc(9),u.Lb(),u.Lb(),u.Lb(),u.Mb(10,"div",8),u.Mb(11,"button",9),u.Tb("click",function(){u.dc(e);const i=t.$implicit;return u.Vb().modifica(i)}),u.jc(12,"Modifica"),u.Lb(),u.Mb(13,"button",10),u.Tb("click",function(){u.dc(e);const i=t.$implicit;return u.Vb().elimina(i)}),u.jc(14,"Elimina"),u.Lb(),u.Lb(),u.Lb(),u.Lb()}if(2&e){const e=t.$implicit;u.yb(4),u.kc(null==e?null:e.full_name),u.yb(2),u.lc("telefono: ",null==e?null:e.telefono,""),u.yb(3),u.kc(null==e?null:e.email)}}let M=(()=>{class e{constructor(e){this.router=e,this.users=[],this.userID=new u.n}ngOnInit(){}elimina(e){this.userID.next(e.id)}modifica(e){this.router.navigate(["view-edit-user","user",e.id],{state:{user:e}})}}return e.\u0275fac=function(t){return new(t||e)(u.Jb(n.b))},e.\u0275cmp=u.Db({type:e,selectors:[["lista-users"]],inputs:{users:"users"},outputs:{userID:"userID"},decls:2,vars:1,consts:[[1,"row","row-cols-3","g-4"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"text-muted"],[1,"card-footer","d-flex","justify-content-between"],["type","button",1,"btn","btn-sm","btn-outline-warning",3,"click"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(e,t){1&e&&(u.Mb(0,"div",0),u.ic(1,g,15,3,"div",1),u.Lb()),2&e&&(u.yb(1),u.ac("ngForOf",t.users))},directives:[r.i],encapsulation:2}),e})();function L(e,t){if(1&e){const e=u.Nb();u.Mb(0,"div",5),u.Mb(1,"div",2),u.Mb(2,"lista-users",6),u.Tb("userID",function(t){return u.dc(e),u.Vb().elimina(t)}),u.Lb(),u.Lb(),u.Lb()}if(2&e){const e=t.ngIf;u.yb(2),u.ac("users",e)}}const y=[{path:"",component:(()=>{class e{constructor(e,t,i,r){this.title=e,this.searchService=t,this.modal=i,this.spinner=r,this.filtro_title="Filtro Ricerca User",this.formRicerca=[],this.users$=new b.a,this.title.setTitle("Ricerca User")}ngOnInit(){}ricerca({full_name:e}){this.users$=e?this.searchService.getAllUser(e).pipe(Object(o.a)(e=>{console.log(e),e&&0===e.length?this.modal.getAlert("Nessun risultato trovato","info"):e&&e.length>0&&this.modal.getAlert("Risultati ricevuti","success")})):this.searchService.getAllUser().pipe(Object(o.a)(e=>{console.log(e),e&&e.length>0?this.modal.getAlert("Risultati ricevuti","success"):e&&0===e.length&&this.modal.getAlert("Nessun risultato trovato","info")}))}elimina(e){this.modal.getModalWithPromise().then(t=>{t.isConfirmed?e&&(this.users$=this.searchService.deleteUser(e).pipe(Object(s.a)(e=>this.searchService.getAllUser().pipe(Object(c.a)(t=>({response:t,user:e})),Object(l.a)(e=>Object(a.a)({response:null,user:{id:null,telefono:null,email:null,full_name:null,createdAt:null}})))),Object(o.a)(e=>this.modal.getAlert("Utente Eliminato","success")),Object(c.a)(e=>e.response))):t.isDenied&&this.modal.getAlert("Nessuna Eliminazione","info")})}}return e.\u0275fac=function(t){return new(t||e)(u.Jb(f.c),u.Jb(m.a),u.Jb(d.a),u.Jb(h.c))},e.\u0275cmp=u.Db({type:e,selectors:[["app-search-users"]],decls:8,vars:4,consts:[[1,"row",2,"height","30vh"],[1,"h1"],[1,"col"],[3,"formRicerca"],["class","row","style","height: 65vh",4,"ngIf"],[1,"row",2,"height","65vh"],[3,"users","userID"]],template:function(e,t){1&e&&(u.Mb(0,"div",0),u.Mb(1,"h1",1),u.jc(2),u.Lb(),u.Mb(3,"div",2),u.Mb(4,"filtro-ricerca",3),u.Tb("formRicerca",function(e){return t.ricerca(e)}),u.Lb(),u.Lb(),u.Lb(),u.Kb(5,"hr"),u.ic(6,L,3,1,"div",4),u.Wb(7,"async")),2&e&&(u.yb(2),u.kc(t.filtro_title),u.yb(4),u.ac("ngIf",u.Xb(7,2,t.users$)))},directives:[v,r.j,M],pipes:[r.b],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(t){return new(t||e)},imports:[[n.d.forChild(y)],n.d]}),e})();var j=i("tk/3");let I=(()=>{class e{}return e.\u0275mod=u.Hb({type:e}),e.\u0275inj=u.Gb({factory:function(t){return new(t||e)},imports:[[r.c,w,p.g,j.c]]}),e})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{CXQP:function(t,e,i){"use strict";i.r(e);var n=i("fXoL"),s=i("ozzT"),o=i("7F1V"),r=i("9rNa"),c=i("3Pt+"),b=i("ofXK");const d=["f"];function u(t,e){if(1&t){const t=n.Nb();n.Mb(0,"button",13),n.Ub("click",(function(){return n.dc(t),n.Wb().onDelete()})),n.hc(1,"Remove"),n.Lb()}}let l=(()=>{class t{constructor(t){this.slService=t,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(t=>{this.editedItemIndex=t,this.editMode=!0,this.editedItem=this.slService.getIngredient(t),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(t){const e=t.value,i=new r.a(e.name,e.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,i):this.slService.addIngredient(i),this.editMode=!1,t.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(s.a))},t.\u0275cmp=n.Db({type:t,selectors:[["app-shopping-edit"]],viewQuery:function(t,e){var i;1&t&&n.lc(d,!0),2&t&&n.ac(i=n.Vb())&&(e.slForm=i.first)},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",2,"margin-right",".5em",3,"disabled"],["class","btn btn-danger","type","button","style","margin-right: .5em",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",2,"margin-right",".5em",3,"click"]],template:function(t,e){if(1&t){const t=n.Nb();n.Mb(0,"div",0),n.Mb(1,"div",1),n.Mb(2,"form",2,3),n.Ub("ngSubmit",(function(){n.dc(t);const i=n.bc(3);return e.onSubmit(i)})),n.Mb(4,"div",0),n.Mb(5,"div",4),n.Mb(6,"label",5),n.hc(7,"Name"),n.Lb(),n.Kb(8,"input",6),n.Lb(),n.Mb(9,"div",7),n.Mb(10,"label",8),n.hc(11,"Amount"),n.Lb(),n.Kb(12,"input",9),n.Lb(),n.Lb(),n.Mb(13,"div",0),n.Mb(14,"div",1),n.Mb(15,"button",10),n.hc(16),n.Lb(),n.gc(17,u,2,0,"button",11),n.Mb(18,"button",12),n.Ub("click",(function(){return e.onClear()})),n.hc(19,"Clear"),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb(),n.Lb()}if(2&t){const t=n.bc(3);n.zb(15),n.Xb("disabled",!t.valid),n.zb(1),n.ic(e.editMode?"Update":"Add"),n.zb(1),n.Xb("ngIf",e.editMode)}},directives:[c.u,c.m,c.n,c.a,c.l,c.o,c.s,c.p,c.q,b.i],styles:[""]}),t})();function a(t,e){if(1&t){const t=n.Nb();n.Mb(0,"a",4),n.Ub("click",(function(){n.dc(t);const i=e.index;return n.Wb().onEditItem(i)})),n.hc(1),n.Lb()}if(2&t){const t=e.$implicit;n.zb(1),n.kc(" ",t.name," (",t.amount,") ")}}let m=(()=>{class t{constructor(t,e){this.slService=t,this.loggingService=e}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe(t=>{this.ingredients=t}),this.loggingService.printLog("Shopping list component initialized...")}onEditItem(t){this.slService.startedEditing.next(t)}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(s.a),n.Jb(o.a))},t.\u0275cmp=n.Db({type:t,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(n.Mb(0,"div",0),n.Mb(1,"div",1),n.Kb(2,"app-shopping-edit"),n.Kb(3,"hr"),n.Mb(4,"ul",2),n.gc(5,a,2,2,"a",3),n.Lb(),n.Lb(),n.Lb()),2&t&&(n.zb(5),n.Xb("ngForOf",e.ingredients))},directives:[l,b.h],styles:[""]}),t})();var p=i("tyNb"),g=i("P+IX"),h=i("PCNd");i.d(e,"ShoppingListModule",(function(){return f}));let f=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},imports:[[c.j,p.f.forChild([{path:"",canActivate:[g.a],component:m}]),h.a]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7Lvj":function(e,i,t){"use strict";t.r(i);var n=t("tyNb"),r=t("3Pt+"),c=t("P+IX"),o=t("fXoL"),s=t("GXvH"),b=t("ceC1"),p=t("qXBG");let u=(()=>{class e{constructor(e,i,t){this.dataStorageService=e,this.recipeService=i,this.authService=t}resolve(e,i){return t=this,void 0,r=function*(){const e=this.recipeService.getRecipes();return!!localStorage.getItem("token")&&(0===e.length?yield this.dataStorageService.fetchRecipes():e)},new((n=void 0)||(n=Promise))((function(e,i){function c(e){try{s(r.next(e))}catch(t){i(t)}}function o(e){try{s(r.throw(e))}catch(t){i(t)}}function s(i){var t;i.done?e(i.value):(t=i.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,o)}s((r=r.apply(t,[])).next())}));var t,n,r}}return e.\u0275fac=function(i){return new(i||e)(o.Qb(s.a),o.Qb(b.a),o.Qb(p.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var a=t("ofXK");const l=function(e){return[e]};let d=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,i){1&e&&(o.Mb(0,"a",0),o.Mb(1,"div",1),o.Mb(2,"h4",2),o.hc(3),o.Lb(),o.Mb(4,"p",3),o.hc(5),o.Lb(),o.Lb(),o.Mb(6,"span",4),o.Kb(7,"img",5),o.Lb(),o.Lb()),2&e&&(o.Xb("routerLink",o.Zb(5,l,i.index)),o.zb(3),o.ic(null==i.recipe?null:i.recipe.name),o.zb(2),o.ic(null==i.recipe?null:i.recipe.description),o.zb(2),o.Yb("alt",null==i.recipe?null:i.recipe.name),o.Xb("src",null==i.recipe?null:i.recipe.imagePath,o.ec))},directives:[n.e,n.d],styles:[""]}),e})();function h(e,i){if(1&e&&o.Kb(0,"app-recipe-item",4),2&e){const e=i.index;o.Xb("recipe",i.$implicit)("index",e)}}let m=(()=>{class e{constructor(e,i,t){this.recipeService=e,this.router=i,this.route=t}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(e=>{this.recipes=e}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(o.Jb(b.a),o.Jb(n.c),o.Jb(n.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(e,i){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"button",2),o.Ub("click",(function(){return i.onNewRecipe()})),o.hc(3,"New Recipe"),o.Lb(),o.Lb(),o.Lb(),o.Kb(4,"hr"),o.Mb(5,"div",0),o.Mb(6,"div",1),o.gc(7,h,1,2,"app-recipe-item",3),o.Lb(),o.Lb()),2&e&&(o.zb(7),o.Xb("ngForOf",i.recipes))},directives:[a.h,d],styles:[""]}),e})(),v=(()=>{class e{constructor(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,i){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Kb(2,"app-recipe-list"),o.Lb(),o.Mb(3,"div",2),o.Kb(4,"router-outlet"),o.Lb(),o.Lb())},directives:[m,n.g],styles:[""]}),e})(),g=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(e,i){1&e&&(o.Mb(0,"h3"),o.hc(1,"Please select a Recipe!"),o.Lb())},styles:[""]}),e})();function f(e,i){if(1&e){const e=o.Nb();o.Mb(0,"div",17),o.Mb(1,"div",18),o.Kb(2,"input",19),o.Lb(),o.Mb(3,"div",20),o.Kb(4,"input",21),o.Lb(),o.Mb(5,"div",20),o.Mb(6,"button",4),o.Ub("click",(function(){o.dc(e);const t=i.index;return o.Wb().onDeleteIngredient(t)})),o.hc(7,"X"),o.Lb(),o.Lb(),o.Lb()}2&e&&o.Xb("formGroupName",i.index)}let L=(()=>{class e{constructor(e,i,t){this.route=e,this.recipeService=i,this.router=t,this.editMode=!1}ngOnInit(){this.initForm(),this.route.params.subscribe(e=>{this.id=+e.id,this.editMode=null!=this.id}),this.subscription=this.recipeService.recipesChanged.subscribe(()=>{this.editMode=null!=this.id,this.initForm()})}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new r.g({name:new r.e(null,r.t.required),amount:new r.e(null,[r.t.required,r.t.pattern(/^[1-9]+[0-9]*$/)])}))}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let e="",i="",t="";const n=new r.c([]);if(this.editMode){const c=this.recipeService.getRecipe(this.id);if(e=c.name,i=c.imagePath,t=c.description,c.ingredients)for(const e of c.ingredients)n.push(new r.g({name:new r.e(e.name,r.t.required),amount:new r.e(e.amount,[r.t.required,r.t.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new r.g({name:new r.e(e,r.t.required),imagePath:new r.e(i,r.t.required),description:new r.e(t,r.t.required),ingredients:n})}get controls(){return this.recipeForm.get("ingredients").controls}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(o.Jb(n.a),o.Jb(b.a),o.Jb(n.c))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",2,"margin-right","1em",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["id","description","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: .7em",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top",".7em",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(e,i){if(1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"form",2),o.Ub("ngSubmit",(function(){return i.onSubmit()})),o.Mb(3,"div",0),o.Mb(4,"div",1),o.Mb(5,"button",3),o.hc(6,"Save"),o.Lb(),o.Mb(7,"button",4),o.Ub("click",(function(){return i.onCancel()})),o.hc(8,"Cancel"),o.Lb(),o.Lb(),o.Lb(),o.Mb(9,"div",0),o.Mb(10,"div",1),o.Mb(11,"div",5),o.Mb(12,"label",6),o.hc(13,"Name"),o.Lb(),o.Kb(14,"input",7),o.Lb(),o.Lb(),o.Lb(),o.Mb(15,"div",0),o.Mb(16,"div",1),o.Mb(17,"div",5),o.Mb(18,"label",8),o.hc(19,"Image Url"),o.Lb(),o.Kb(20,"input",9,10),o.Lb(),o.Lb(),o.Lb(),o.Mb(22,"div",0),o.Mb(23,"div",1),o.Kb(24,"img",11),o.Lb(),o.Lb(),o.Mb(25,"div",0),o.Mb(26,"div",1),o.Mb(27,"div",5),o.Mb(28,"label",12),o.hc(29,"Description"),o.Lb(),o.Kb(30,"textarea",13),o.Lb(),o.Lb(),o.Lb(),o.Mb(31,"div",0),o.Mb(32,"div",14),o.gc(33,f,8,1,"div",15),o.Kb(34,"hr"),o.Mb(35,"div",0),o.Mb(36,"div",1),o.Mb(37,"button",16),o.Ub("click",(function(){return i.onAddIngredient()})),o.hc(38,"Add Ingredient"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb()),2&e){const e=o.bc(21);o.zb(2),o.Xb("formGroup",i.recipeForm),o.zb(3),o.Xb("disabled",!i.recipeForm.valid),o.zb(19),o.Xb("src",e.value,o.ec),o.zb(9),o.Xb("ngForOf",i.controls)}},directives:[r.u,r.m,r.h,r.a,r.l,r.f,r.d,a.h,r.i,r.p],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),e})();var M=t("3V6w");function w(e,i){if(1&e&&(o.Mb(0,"li",10),o.hc(1),o.Lb()),2&e){const e=i.$implicit;o.zb(1),o.kc(" ",null==e?null:e.name," - ",null==e?null:e.amount," ")}}const y=[{path:"",component:v,canActivate:[c.a],children:[{path:"",component:g,resolve:[u]},{path:"new",component:L},{path:":id",component:(()=>{class e{constructor(e,i,t){this.recipeService=e,this.route=i,this.router=t}ngOnInit(){this.route.params.subscribe(e=>{this.id=+e.id,this.recipe=this.recipeService.getRecipe(this.id)}),this.subscription=this.recipeService.recipesChanged.subscribe(()=>{this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(i){return new(i||e)(o.Jb(b.a),o.Jb(n.a),o.Jb(n.c))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,i){1&e&&(o.Mb(0,"div",0),o.Mb(1,"div",1),o.Kb(2,"img",2),o.Lb(),o.Lb(),o.Mb(3,"div",0),o.Mb(4,"div",1),o.Mb(5,"h1"),o.hc(6),o.Lb(),o.Lb(),o.Lb(),o.Mb(7,"div",0),o.Mb(8,"div",1),o.Mb(9,"div",3),o.Mb(10,"button",4),o.hc(11," Manage "),o.Kb(12,"span",5),o.Lb(),o.Mb(13,"div",6),o.Mb(14,"li"),o.Mb(15,"a",7),o.Ub("click",(function(){return i.onAddToShoppingList()})),o.hc(16,"To Shopping List"),o.Lb(),o.Lb(),o.Mb(17,"li"),o.Mb(18,"a",7),o.Ub("click",(function(){return i.onEditRecipe()})),o.hc(19,"Edit Recipe"),o.Lb(),o.Lb(),o.Mb(20,"li"),o.Mb(21,"a",7),o.Ub("click",(function(){return i.onDeleteRecipe()})),o.hc(22,"Delete Recipe"),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Lb(),o.Mb(23,"div",0),o.Mb(24,"div",1),o.hc(25),o.Lb(),o.Lb(),o.Mb(26,"div",0),o.Mb(27,"div",1),o.Mb(28,"ul",8),o.gc(29,w,2,2,"li",9),o.Lb(),o.Lb(),o.Lb()),2&e&&(o.zb(2),o.Yb("alt",null==i.recipe?null:i.recipe.name),o.Xb("src",null==i.recipe?null:i.recipe.imagePath,o.ec),o.zb(4),o.ic(null==i.recipe?null:i.recipe.name),o.zb(19),o.jc(" ",null==i.recipe?null:i.recipe.description," "),o.zb(4),o.Xb("ngForOf",null==i.recipe?null:i.recipe.ingredients))},directives:[M.a,a.h],styles:[""]}),e})(),resolve:[u]},{path:":id/edit",component:L,resolve:[u]}]}];let S=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(i){return new(i||e)},imports:[[n.f.forChild(y)],n.f]}),e})();var x=t("PCNd");t.d(i,"RecipesModule",(function(){return F}));let F=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(i){return new(i||e)},imports:[[n.f,r.r,S,x.a]]}),e})()}}]);
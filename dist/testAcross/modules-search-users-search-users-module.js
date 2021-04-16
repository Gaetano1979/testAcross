(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-search-users-search-users-module"],{

/***/ "1j5m":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/search-users/components/lista-users/lista-users.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListaUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsersComponent", function() { return ListaUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ListaUsersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaUsersComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.modifica(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Modifica");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListaUsersComponent_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const user_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.elimina(user_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Elimina");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("telefono: ", user_r1 == null ? null : user_r1.telefono, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1 == null ? null : user_r1.email);
} }
class ListaUsersComponent {
    constructor(router) {
        this.router = router;
        this.users = [];
        this.userID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    elimina(user) {
        this.userID.next(user.id);
    }
    modifica(user) {
        this.router.navigate(['view-edit-user', 'user', user.id], { state: { user } });
    }
}
ListaUsersComponent.ɵfac = function ListaUsersComponent_Factory(t) { return new (t || ListaUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ListaUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListaUsersComponent, selectors: [["lista-users"]], inputs: { users: "users" }, outputs: { userID: "userID" }, decls: 2, vars: 1, consts: [[1, "row", "row-cols-3", "g-4"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [1, "card-footer", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", 3, "click"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-danger", 3, "click"]], template: function ListaUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListaUsersComponent_div_1_Template, 15, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });


/***/ }),

/***/ "Hxsn":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/search-users/components/filtro-ricerca/filtro-ricerca.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FiltroRicercaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroRicercaComponent", function() { return FiltroRicercaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FiltroRicercaComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.search_button = 'Ricerca';
        this.formSearch = this._fb.group({
            full_name: '',
            telefono: '',
            email: ''
        });
        this.formRicerca = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ricerca() {
        const ricerca = this.formSearch.getRawValue();
        this.formRicerca.next(ricerca);
    }
    isNull(form, key) {
        return form[key];
    }
}
FiltroRicercaComponent.ɵfac = function FiltroRicercaComponent_Factory(t) { return new (t || FiltroRicercaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FiltroRicercaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltroRicercaComponent, selectors: [["filtro-ricerca"]], outputs: { formRicerca: "formRicerca" }, decls: 22, vars: 2, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col"], [1, "form-floating", "mb-3"], ["formControlName", "full_name", "type", "text", "id", "name", "placeholder", "Inserire nome e cognome", 1, "form-control", "form-control-sm"], ["for", "name"], ["formControlName", "email", "type", "email", "id", "email", "placeholder", "Inserire Email", 1, "form-control"], ["for", "email"], [1, "form-floating", "mb-5"], ["formControlName", "telefono", "type", "text", "id", "telefono", "placeholder", "Inserire Telefono", 1, "form-control"], ["for", "telefono"], [1, "mb-3", "d-flex"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary"], ["routerLink", "/view-edit-user", "type", "button", 1, "btn", "btn-sm", "btn-secondary", "mx-3"]], template: function FiltroRicercaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FiltroRicercaComponent_Template_form_ngSubmit_0_listener() { return ctx.ricerca(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nome e Cognome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Crea nuovo utente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.search_button);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "augY":
/*!*************************************************************!*\
  !*** ./src/app/modules/search-users/search-users.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersModule", function() { return SearchUsersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_users_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-users-routing.module */ "emwD");
/* harmony import */ var _search_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-users.component */ "toc+");
/* harmony import */ var _components_filtro_ricerca_filtro_ricerca_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filtro-ricerca/filtro-ricerca.component */ "Hxsn");
/* harmony import */ var _components_lista_users_lista_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lista-users/lista-users.component */ "1j5m");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class SearchUsersModule {
}
SearchUsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SearchUsersModule });
SearchUsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function SearchUsersModule_Factory(t) { return new (t || SearchUsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _search_users_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchUsersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SearchUsersModule, { declarations: [_search_users_component__WEBPACK_IMPORTED_MODULE_2__["SearchUsersComponent"], _components_filtro_ricerca_filtro_ricerca_component__WEBPACK_IMPORTED_MODULE_3__["FiltroRicercaComponent"], _components_lista_users_lista_users_component__WEBPACK_IMPORTED_MODULE_4__["ListaUsersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _search_users_routing_module__WEBPACK_IMPORTED_MODULE_1__["SearchUsersRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();


/***/ }),

/***/ "emwD":
/*!*********************************************************************!*\
  !*** ./src/app/modules/search-users/search-users-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SearchUsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersRoutingModule", function() { return SearchUsersRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-users.component */ "toc+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _search_users_component__WEBPACK_IMPORTED_MODULE_1__["SearchUsersComponent"] }];
class SearchUsersRoutingModule {
}
SearchUsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchUsersRoutingModule });
SearchUsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function SearchUsersRoutingModule_Factory(t) { return new (t || SearchUsersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchUsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "toc+":
/*!****************************************************************!*\
  !*** ./src/app/modules/search-users/search-users.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUsersComponent", function() { return SearchUsersComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_search_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/search-user.service */ "HT8n");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/modal.service */ "NyM5");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _components_filtro_ricerca_filtro_ricerca_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filtro-ricerca/filtro-ricerca.component */ "Hxsn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_lista_users_lista_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/lista-users/lista-users.component */ "1j5m");










function SearchUsersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "lista-users", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("userID", function SearchUsersComponent_div_6_Template_lista_users_userID_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.elimina($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("users", users_r1);
} }
class SearchUsersComponent {
    constructor(title, searchService, modal, spinner) {
        this.title = title;
        this.searchService = searchService;
        this.modal = modal;
        this.spinner = spinner;
        this.filtro_title = 'Filtro Ricerca User';
        this.formRicerca = [];
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.title.setTitle('Ricerca User');
    }
    ngOnInit() {
    }
    ricerca({ full_name, email, telefono }) {
        if (!!full_name) {
            this.users$ = this.searchService.getAllUser(full_name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(response => {
                console.log(response);
                if (!!response && response.length === 0) {
                    this.modal.getAlert('Nessun risultato trovato', 'info');
                }
                else if (!!response && response.length > 0) {
                    this.modal.getAlert('Risultati ricevuti', 'success');
                }
            }));
        }
        else {
            this.users$ = this.searchService.getAllUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(response => {
                console.log(response);
                if (!!response && response.length > 0) {
                    this.modal.getAlert('Risultati ricevuti', 'success');
                }
                else if (!!response && response.length === 0) {
                    this.modal.getAlert('Nessun risultato trovato', 'info');
                }
            }));
        }
    }
    elimina(id) {
        this.modal.getModalWithPromise().then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                if (!!id) {
                    this.users$ = this.searchService.deleteUser(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(user => this.searchService.getAllUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => ({ response, user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({
                        response: null,
                        user: { id: null, telefono: null, email: null, full_name: null, createdAt: null }
                    })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(response => this.modal.getAlert('Utente Eliminato', 'success')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => response.response));
                }
            }
            else if (result.isDenied) {
                this.modal.getAlert('Nessuna Eliminazione', 'info');
            }
        });
    }
}
SearchUsersComponent.ɵfac = function SearchUsersComponent_Factory(t) { return new (t || SearchUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_search_user_service__WEBPACK_IMPORTED_MODULE_4__["SearchUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
SearchUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchUsersComponent, selectors: [["app-search-users"]], decls: 8, vars: 4, consts: [[1, "row", 2, "height", "30vh"], [1, "h1"], [1, "col"], [3, "formRicerca"], ["class", "row", "style", "height: 65vh", 4, "ngIf"], [1, "row", 2, "height", "65vh"], [3, "users", "userID"]], template: function SearchUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "filtro-ricerca", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("formRicerca", function SearchUsersComponent_Template_filtro_ricerca_formRicerca_4_listener($event) { return ctx.ricerca($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchUsersComponent_div_6_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.filtro_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx.users$));
    } }, directives: [_components_filtro_ricerca_filtro_ricerca_component__WEBPACK_IMPORTED_MODULE_7__["FiltroRicercaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_lista_users_lista_users_component__WEBPACK_IMPORTED_MODULE_9__["ListaUsersComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtdXNlcnMuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=modules-search-users-search-users-module.js.map
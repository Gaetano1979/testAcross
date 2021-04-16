(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-view-edit-user-view-edit-user-module"],{

/***/ "FtSg":
/*!********************************************************************!*\
  !*** ./src/app/modules/view-edit-user/view-edit-user.component.ts ***!
  \********************************************************************/
/*! exports provided: ViewEditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEditUserComponent", function() { return ViewEditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_users_services_search_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-users/services/search-user.service */ "HT8n");
/* harmony import */ var _search_users_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-users/services/modal.service */ "NyM5");






class ViewEditUserComponent {
    constructor(activate, router, location, _fb, service, modal) {
        this.activate = activate;
        this.router = router;
        this.location = location;
        this._fb = _fb;
        this.service = service;
        this.modal = modal;
        this._data = null;
        this._params = null;
        this.submit_button = null;
        this.formUser = this._fb.group({
            id: null,
            full_name: null,
            telefono: null,
            email: null
        });
        this.titleCard = null;
        this.activate.params.subscribe((data) => {
            console.log(data);
            this.params = data;
        });
        this._isState(location.getState());
        this.activate.data.subscribe(data => {
            // console.log(data);
            this.data = data;
            if ('title' in data) {
                switch (data.title) {
                    case 'New User':
                        this.submit_button = 'Crea Nuovo';
                        this.titleCard = 'Creazione nuovo Utente';
                        break;
                    case 'Edit User':
                        this.submit_button = 'Modifica User';
                        this.titleCard = 'Modifica Utente esistente';
                        break;
                    default:
                        this.submit_button = 'Crea Nuovo';
                }
            }
        });
    }
    ngOnInit() {
    }
    submit() {
        const user = this.formUser.getRawValue();
        if (!!this.data && !!this.data.edit) {
            this.service.setUser(user).subscribe(userPut => this._modal(`User Modificato correttamente`));
        }
        else {
            this.service.postNewUser(user).subscribe(userPost => this._modal(`User creato correttamente`));
        }
    }
    _isState(state) {
        // console.log(state);
        if (!!state && !!state.user) {
            this.formUser.patchValue(Object.assign({}, state.user));
        }
        else if (!!this.params && !!this.params.id) {
            // console.log(state);
            this.service.getUserId(this.params.id).subscribe(user => this.formUser.patchValue(Object.assign({}, user)));
        }
    }
    _modal(title) {
        this.modal.getAlert(title, 'success');
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
    get params() {
        return this._params;
    }
    set params(value) {
        this._params = value;
    }
}
ViewEditUserComponent.ɵfac = function ViewEditUserComponent_Factory(t) { return new (t || ViewEditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_users_services_search_user_service__WEBPACK_IMPORTED_MODULE_4__["SearchUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_users_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"])); };
ViewEditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewEditUserComponent, selectors: [["app-view-edit-user"]], decls: 28, vars: 3, consts: [[1, "row", "align-items-center", 2, "height", "90vh"], [1, "col"], [1, "card", "p-3"], [1, "card-title"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-floating", "mb-3"], ["formControlName", "full_name", "type", "text", "id", "name", "placeholder", "Inserire nome e cognome", 1, "form-control", "form-control-sm"], ["for", "name"], ["formControlName", "email", "type", "email", "id", "email", "placeholder", "Inserire Email", 1, "form-control"], ["for", "email"], [1, "form-floating", "mb-5"], ["formControlName", "telefono", "type", "text", "id", "telefono", "placeholder", "Inserire Telefono", 1, "form-control"], ["for", "telefono"], [1, "card-footer"], [1, "mb-3", "d-flex", "jus"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", "mx-3"], ["routerLink", "welcome", "type", "button", 1, "btn", "btn-sm", "btn-secondary"]], template: function ViewEditUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ViewEditUserComponent_Template_form_ngSubmit_5_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nome e Cognome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titleCard, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.submit_button);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWVkaXQtdXNlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ "TNp3":
/*!*****************************************************************!*\
  !*** ./src/app/modules/view-edit-user/view-edit-user.module.ts ***!
  \*****************************************************************/
/*! exports provided: ViewEditUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEditUserModule", function() { return ViewEditUserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_edit_user_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-edit-user-routing.module */ "b1B1");
/* harmony import */ var _view_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-edit-user.component */ "FtSg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ViewEditUserModule {
}
ViewEditUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ViewEditUserModule });
ViewEditUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function ViewEditUserModule_Factory(t) { return new (t || ViewEditUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _view_edit_user_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewEditUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ViewEditUserModule, { declarations: [_view_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["ViewEditUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _view_edit_user_routing_module__WEBPACK_IMPORTED_MODULE_1__["ViewEditUserRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "b1B1":
/*!*************************************************************************!*\
  !*** ./src/app/modules/view-edit-user/view-edit-user-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewEditUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEditUserRoutingModule", function() { return ViewEditUserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-edit-user.component */ "FtSg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _view_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewEditUserComponent"], data: { title: 'New User', edit: false } },
    { path: 'user/:id', component: _view_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewEditUserComponent"], data: { title: 'Edit User', edit: true } }
];
class ViewEditUserRoutingModule {
}
ViewEditUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ViewEditUserRoutingModule });
ViewEditUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ViewEditUserRoutingModule_Factory(t) { return new (t || ViewEditUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ViewEditUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-view-edit-user-view-edit-user-module.js.map
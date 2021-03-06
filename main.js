(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/FRm":
/*!***************************************!*\
  !*** ./src/app/models/login.model.ts ***!
  \***************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
class LoginModel {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\feedback\nimbleguru-ui\src\main.ts */"zUnb");


/***/ }),

/***/ "4Em8":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: MessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
class MessageModel {
}


/***/ }),

/***/ "5Y+F":
/*!***************************************!*\
  !*** ./src/app/jwt-client.service.ts ***!
  \***************************************/
/*! exports provided: JwtClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtClientService", function() { return JwtClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class JwtClientService {
    constructor(http) {
        this.http = http;
    }
    generateToken(request) {
        // console.log(this.http.post("http://localhost:8080/authenticate",request,
        // {responseType: 'text' as 'json'}))
        return this.http.post("http://localhost:8080/authentication-service/authenticate", request);
    }
}
JwtClientService.ɵfac = function JwtClientService_Factory(t) { return new (t || JwtClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JwtClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtClientService, factory: JwtClientService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtClientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "5nbR":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");





class AuthGuardService {
    constructor(auth, router, snackbar) {
        this.auth = auth;
        this.router = router;
        this.snackbar = snackbar;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.snackbar
                .open(("Oops! You can't access that page. You need to login first"), '', {
                verticalPosition: 'top',
                duration: 4000
            });
            // .onAction().subscribe(()=>this.router.navigate(['login']))
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "8Dg9":
/*!************************************************************!*\
  !*** ./src/app/update-profile/update-profile.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_mentor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/mentor.model */ "Y3P4");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


















function UpdateProfileComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject1_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject1_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject1_r3, " ");
} }
function UpdateProfileComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const times_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", times_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", times_r4, " ");
} }
function UpdateProfileComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const times1_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", times1_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", times1_r5, " ");
} }
class UpdateProfileComponent {
    constructor(formBuilder, service1, service, router, dialogRef, snackbar) {
        this.formBuilder = formBuilder;
        this.service1 = service1;
        this.service = service;
        this.router = router;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        this.mentor = new _models_mentor_model__WEBPACK_IMPORTED_MODULE_2__["Mentor"]();
        this.hide = true;
        this.subjects = ['Physics', 'Maths', 'English', 'Java', 'Chemistry', 'Civics', 'Economics', 'Python', 'Biology', 'History', 'Accounts', 'Business Administration', 'Geography', 'Political Science'];
        this.time11 = ['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.email1 = this.service1.abc();
    }
    ngOnInit() {
        this.service.getByEmail(this.email1).subscribe(data => this.mentor = data);
        this.updateForm = this.formBuilder.group({
            name: [this.mentor.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            email: [this.email1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            phoneNumber: [this.mentor.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/)
                ]],
            subject: [this.mentor.subject, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]],
            qualification: [this.mentor.qualification,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]],
            startTime: [this.mentor.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            endTime: [this.mentor.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]]
        });
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    }
    OnUpdate() {
        const mentor1 = {
            id: this.updateForm.value.id,
            name: this.updateForm.value.name,
            phoneNumber: this.updateForm.value.phoneNumber,
            email: this.updateForm.value.email,
            qualification: this.updateForm.value.qualification,
            subject: this.updateForm.value.subject,
            status: this.updateForm.value.status,
            joining_date: this.updateForm.value.joining_date,
            comment: this.updateForm.value.comment,
            sessions: this.updateForm.value.sessions,
            time: [
                {
                    "startTime": this.updateForm.value.startTime.split(':')[0],
                    "endTime": this.updateForm.value.endTime.split(':')[0]
                }
            ],
            rating: this.updateForm.value.rating,
            creditStore: this.updateForm.value.creditStore
        };
        console.log(this.updateForm.value);
        this.service.updateMentor(mentor1).subscribe(data => {
            this.mentor = data;
        });
        this.snackbar
            // tslint:disable-next-line: max-line-length
            .open(("Your Profile is Updated"), '', {
            verticalPosition: 'top',
            duration: 2000
        });
        this.dialogRef.close();
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
    Onclose() {
        this.dialogRef.close();
    }
}
UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) { return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_3__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_4__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateProfileComponent, selectors: [["app-update-profile"]], decls: 38, vars: 9, consts: [["id", "close", 3, "click"], [2, "margin-left", "20px"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["rowHeight", "300px", 3, "cols"], [1, "form-container"], ["id", "email", "matInput", "", "disabled", "", "formControlName", "email", "readonly", "true", "placeholder", "Enter your Email"], ["id", "name", "matInput", "", "formControlName", "name", "placeholder", "Enter your name", 3, "ngModel", "ngModelChange"], ["id", "phoneNumber", "matInput", "", "formControlName", "phoneNumber", "placeholder", "Enter your phoneNumber", 3, "ngModel", "ngModelChange"], ["formControlName", "subject", "multiple", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "startTime"], ["formControlName", "endTime"], ["id", "class", "matInput", "", "formControlName", "qualification", "placeholder", "Enter your Qualification"], [1, "bottomrow", 2, "margin-left", "650px"], ["mat-button", "", "type", "submit", 1, "mat-raised-button", "mat-primary", 3, "disabled", "click"], [3, "value"]], template: function UpdateProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_div_click_0_listener() { return ctx.Onclose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_6_listener() { return ctx.updateForm.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_13_listener($event) { return ctx.mentor.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_15_listener($event) { return ctx.mentor.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateProfileComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.mentor.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UpdateProfileComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I will be available from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UpdateProfileComponent_mat_option_27_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "I will be available upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UpdateProfileComponent_mat_option_32_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_36_listener() { return ctx.OnUpdate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mentor.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mentor.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mentor.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.time11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.time11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateForm.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], styles: ["header[_ngcontent-%COMP%]{\r\n    height: 10%;\r\n    background-color: teal;\r\n}\r\nmat-slider[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n.navbar[_ngcontent-%COMP%]{\r\n    background-color:teal;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    bottom: 0;\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\nmat-card[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    width: 800px;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    padding:5%;\r\n}\r\n.botton-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\r\n{\r\n    margin: 5px;\r\n}\r\n.h1[_ngcontent-%COMP%]\r\n{\r\n    text-align:center;\r\n}\r\n#close[_ngcontent-%COMP%]:hover{\r\n    color: red;\r\n    \r\n    cursor: pointer;\r\n}\r\n#close[_ngcontent-%COMP%]{\r\nbackground: white; \r\nwidth: 50px;\r\nheight: 30px;\r\nalign-items: center;\r\nmargin-left:830px ;\r\ntext-align:center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7RUFDZDtBQUNGO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLE9BQU87SUFDUCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBOzs7OztHQUtHO0FBQ0g7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0lBRUksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1gsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlcntcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcclxufVxyXG5tYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcbi5uYXZiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRlYWw7XHJcbn1cclxuc3BhbntcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5mb290ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbm1hdC1jYXJke1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbn1cclxuLyogLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSAqL1xyXG4uZm9ybS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzo1JTtcclxufVxyXG4uYm90dG9uLXJvdyBidXR0b25cclxue1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmgxXHJcbntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiNjbG9zZTpob3ZlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7ICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2Nsb3Nle1xyXG5iYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbndpZHRoOiA1MHB4O1xyXG5oZWlnaHQ6IDMwcHg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbm1hcmdpbi1sZWZ0OjgzMHB4IDtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-profile',
                templateUrl: './update-profile.component.html',
                styleUrls: ['./update-profile.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_3__["StudentProfileService"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_4__["MentorProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "AAiN":
/*!********************************************************************!*\
  !*** ./src/app/studentliveconnect/studentliveconnect.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentliveconnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentliveconnectComponent", function() { return StudentliveconnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ "cqME");
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ "VKRg");
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ "v2j/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function StudentliveconnectComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const problem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", problem_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", problem_r2.viewValue, " ");
} }
class StudentliveconnectComponent {
    constructor() {
        this.problems = [
            { value: '0', viewValue: 'Video issue' },
            { value: '1', viewValue: 'Connection issue' },
            { value: '2', viewValue: 'Mentor issue' }
        ];
        this.teachername = "MentorName";
        this.noofdoubts = "NoofDoubtsSolved";
    }
    ngOnInit() {
    }
}
StudentliveconnectComponent.ɵfac = function StudentliveconnectComponent_Factory(t) { return new (t || StudentliveconnectComponent)(); };
StudentliveconnectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentliveconnectComponent, selectors: [["app-studentliveconnect"]], decls: 81, vars: 4, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["color", "primary", 1, "navbar"], ["routerLink", "/"], [2, "background", "url(/assets/img/BG.png)"], ["cols", "12", "rowHeight", "90%"], ["colspan", "2"], [1, "example-button-row"], ["id", "accimg"], ["id", "info", "mat-stroked-button", "", "color", "primary"], ["colspan", "8"], [1, "video-player-wrapper"], ["vgProperty", "current", "vgFormat", "mm:ss"], [2, "pointer-events", "none"], ["vgProperty", "left", "vgFormat", "mm:ss"], ["vgProperty", "total", "vgFormat", "mm:ss"], ["width", "800px", "id", "singleVideo", "preload", "auto", "crossorigin", "", 3, "vgMedia"], ["media", ""], ["src", "http://static.videogular.com/assets/videos/videogular.mp4", "type", "video/mp4"], ["src", "http://static.videogular.com/assets/videos/videogular.ogg", "type", "video/ogg"], ["src", "http://static.videogular.com/assets/videos/videogular.webm", "type", "video/webm"], ["kind", "subtitles", "label", "English", "src", "http://static.videogular.com/assets/subs/pale-blue-dot.vtt", "srclang", "en", "default", ""], ["kind", "subtitles", "label", "Espa\u00F1ol", "src", "http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt", "srclang", "es"], ["mat-raised-button", "", "color", "blue"], ["mat-raised-button", "", "color", "accent"], ["id", "myButton", "mat-raised-button", "", "color", "warn", "routerLink", "/feedback"], ["id", "rep", "mat-raised-button", "", "color", "primary", "routerLink", "/feedback"], ["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["cols", "12", "rowHeight", "1:1"], ["colspan", "4"], [1, "fa", "fa-facebook", "fa-2x", 2, "margin", "5px"], [1, "fa", "fa-instagram", "fa-2x", 2, "margin", "5px"], [1, "fa", "fa-twitter", "fa-2x", 2, "margin", "5px"], [1, "fa", "fa-google-plus", "fa-2x", 2, "margin", "5px"], [1, "fa", "fa-linkedin", "fa-2x", 2, "margin", "5px"], [3, "value"]], template: function StudentliveconnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "vg-player");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "vg-overlay-play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "vg-buffering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "vg-scrub-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "vg-scrub-bar-current-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "vg-scrub-bar-buffering-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "vg-controls");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "vg-play-pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "vg-playback-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "vg-time-display", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "vg-scrub-bar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "vg-time-display", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "vg-time-display", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "vg-track-selector");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "vg-mute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "vg-volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "vg-fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "video", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "source", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "source", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "source", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "track", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "track", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Record Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "End Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-tile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Report The Mentor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, StudentliveconnectComponent_mat_option_60_Template, 2, 2, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-grid-list", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-grid-tile", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " About us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Careers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Terms of use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-grid-tile", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed nihil perspiciatis accusamus harum quis vero laudantium eaque voluptatum sit, explicabo tenetur voluptates iste ex qui id ducimus eligendi optio! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-grid-tile", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teachername);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.noofdoubts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vgMedia", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.problems);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_6__["VgPlayerComponent"], _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_7__["VgOverlayPlayComponent"], _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_8__["VgBufferingComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgScrubBarComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgScrubBarCurrentTimeComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgScrubBarBufferingTimeComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgControlsComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgPlayPauseComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgPlaybackButtonComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgTimeDisplayComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgTrackSelectorComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgMuteComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgVolumeComponent"], _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_9__["VgFullscreenComponent"], _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_6__["VgMediaDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: ["footer[_ngcontent-%COMP%]{\r\n  height: 150px;\r\n  background-color: teal;\r\n}\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n}\r\n#abc[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n}\r\nmat-card[_ngcontent-%COMP%]{\r\n  width: 800px;\r\n}\r\n#user[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n}\r\nmat-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n  background: #A79344;\r\n}\r\n.video-player-wrapper[_ngcontent-%COMP%] {\r\n  max-width: 800px;\r\n  max-height: 500px;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n\r\n}\r\n.player-list[_ngcontent-%COMP%] {\r\n margin: 0;\r\n padding: 0;\r\n}\r\n.player-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n list-style: none;\r\n padding: 15px 35px;\r\n display: block;\r\n background: #cccc;\r\n cursor: pointer;\r\n text-align: left;\r\n margin-bottom: 1px;\r\n}\r\nli.selected[_ngcontent-%COMP%] {\r\n  background: #03A9F4 !important;\r\n}\r\n.vg-player[_ngcontent-%COMP%]{\r\n  padding-top: 0%;\r\n  margin-top: 0%;\r\n}\r\n#myButton[_ngcontent-%COMP%]{\r\n  margin-left: 520px;\r\n}\r\n#accimg[_ngcontent-%COMP%]{\r\n  font-size: 150px;\r\n}\r\n#info[_ngcontent-%COMP%]{\r\nwidth: 150px;\r\n}\r\n#rep[_ngcontent-%COMP%]{\r\n  width:200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudGxpdmVjb25uZWN0L3N0dWRlbnRsaXZlY29ubmVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCO0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtBQUNYO0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRsaXZlY29ubmVjdC9zdHVkZW50bGl2ZWNvbm5lY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbn1cclxuZm9vdGVyIHVse1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4jYWJje1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5tYXQtY2FyZHtcclxuICB3aWR0aDogODAwcHg7XHJcbn1cclxuI3VzZXJ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5tYXQtY2FyZCA6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0E3OTM0NDtcclxufVxyXG4udmlkZW8tcGxheWVyLXdyYXBwZXIge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxufVxyXG5cclxuLnBsYXllci1saXN0IHtcclxuIG1hcmdpbjogMDtcclxuIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wbGF5ZXItbGlzdCBsaSB7XHJcbiBsaXN0LXN0eWxlOiBub25lO1xyXG4gcGFkZGluZzogMTVweCAzNXB4O1xyXG4gZGlzcGxheTogYmxvY2s7XHJcbiBiYWNrZ3JvdW5kOiAjY2NjYztcclxuIGN1cnNvcjogcG9pbnRlcjtcclxuIHRleHQtYWxpZ246IGxlZnQ7XHJcbiBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbmxpLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMDNBOUY0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZnLXBsYXllcntcclxuICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbn1cclxuI215QnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiA1MjBweDtcclxufVxyXG5cclxuI2FjY2ltZ3tcclxuICBmb250LXNpemU6IDE1MHB4O1xyXG59XHJcbiNpbmZve1xyXG53aWR0aDogMTUwcHg7XHJcbn1cclxuI3JlcHtcclxuICB3aWR0aDoyMDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentliveconnectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-studentliveconnect',
                templateUrl: './studentliveconnect.component.html',
                styleUrls: ['./studentliveconnect.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EDYx":
/*!*********************************!*\
  !*** ./src/app/PagerService.ts ***!
  \*********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
class PagerService {
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}


/***/ }),

/***/ "Edfc":
/*!******************************************************!*\
  !*** ./src/app/log-in-page/log-in-page.component.ts ***!
  \******************************************************/
/*! exports provided: LogInPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInPageComponent", function() { return LogInPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_login_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/login.model */ "/FRm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jwt_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jwt-client.service */ "5Y+F");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




















class LogInPageComponent {
    constructor(snackbar, dialog, formBuilder, router, authentication, service, authenticate, Mservice) {
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authentication = authentication;
        this.service = service;
        this.authenticate = authenticate;
        this.Mservice = Mservice;
        this.user = new _models_login_model__WEBPACK_IMPORTED_MODULE_1__["LoginModel"]();
        this.hide = true;
        this.email = this.service.abc();
        this.invalidLogin = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'email': [this.user.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            'password': [this.user.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
                ]]
        });
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    }
    Login() {
        this.authRequest = {
            'email': this.user.email,
            'password': this.user.password
        };
        // this.getAccessToken(this.authRequest);
        this.authenticate.authenticate(this.user.email, this.user.password).subscribe(data => {
            this.token = data.token;
            let roleService = this.token[1];
            this.service.setRole(roleService);
            let userEmail = this.token[0];
            console.log(this.token);
            this.service.emailService(userEmail);
            console.log(this.token.size + "sfad" + this.token.length);
            if (this.token.length == 3) {
                if (roleService == 'M') {
                    this.Mservice.getByEmail(userEmail).subscribe(data => {
                        this.mentor = data;
                        console.log(this.mentor);
                        if (this.mentor == null) {
                            this.router.navigate(['mentor-registration']);
                        }
                        else {
                            this.router.navigate(['/mentor-profile']);
                        }
                    });
                }
                else {
                    this.router.navigate(['/home']);
                }
            }
            else {
                this.snackbar.open(('Username or password Incorrect'), 'Login again', {
                    duration: 3000,
                    verticalPosition: 'top',
                });
            }
        });
    }
    gotoregisteration() {
        this.router.navigate(["/student-registration"]);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
}
LogInPageComponent.ɵfac = function LogInPageComponent_Factory(t) { return new (t || LogInPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jwt_client_service__WEBPACK_IMPORTED_MODULE_6__["JwtClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_7__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_9__["MentorProfileService"])); };
LogInPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInPageComponent, selectors: [["app-log-in-page"]], decls: 45, vars: 7, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "width", "50px", "height", "50px"], ["routerLink", "/student-registration", "mat-raised-button", ""], ["rowHeight", "1:1", 3, "cols", "resize"], ["alt", "Logo", "src", "/assets/img/LogoSerbo-Recovered copy.png ", 2, "width", "55%"], [2, "width", "330px"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-container"], [2, "font-weight", "500"], ["role", "listitem"], [2, "width", "300px"], ["id", "email", "matInput", "", "formControlName", "email", "placeholder", "Enter your Email", 3, "ngModel", "ngModelChange"], ["id", "password", "matInput", "", "formControlName", "password", "placeholder", "Enter your password", 3, "ngModel", "type", "ngModelChange"], ["matSuffix", "", 3, "click"], ["mat-button", "", "type", "submit", 1, "mat-raised-button", "mat-primary", 3, "disabled"], [3, "click"], ["routerLink", "/student-registration"], [2, "color", "white"], ["href", "", 2, "color", "white"]], template: function LogInPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LogInPageComponent_Template_mat_grid_list_resize_10_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LogInPageComponent_Template_form_ngSubmit_15_listener() { return ctx.loginForm.valid && ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogInPageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LogInPageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInPageComponent_Template_mat_icon_click_27_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogInPageComponent_Template_h3_click_33_listener() { return ctx.gotoregisteration(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "New to Nimbleguru? Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility" : "visibility_off", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    \r\n    \r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n#bar1[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nLWluLXBhZ2UvbG9nLWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4Qjs7O0FBR2xDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJQUNaO0FBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9nLWluLXBhZ2UvbG9nLWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgIFxyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jYmFyMXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jYmFyMTpmb2N1c3tcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgICNiYXIxOmhvdmVye1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-in-page',
                templateUrl: './log-in-page.component.html',
                styleUrls: ['./log-in-page.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _jwt_client_service__WEBPACK_IMPORTED_MODULE_6__["JwtClientService"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_7__["StudentProfileService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_9__["MentorProfileService"] }]; }, null); })();


/***/ }),

/***/ "ILAa":
/*!************************************!*\
  !*** ./src/app/session.service.ts ***!
  \************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class SessionService {
    constructor(http) {
        this.http = http;
    }
    findSession(session) {
        return this.http.post(`http://localhost:8080/mentor-platform-service/session/start`, session);
    }
    endSession(sessionId) {
        return this.http.post(`http://localhost:8080/mentor-platform-service/session/${sessionId}/end`, sessionId);
    }
    getMessageDetails(sessionId) {
        return this.http.get(`http://localhost:8080/mentor-platform-service/session/message/${sessionId}`);
    }
    getMentorEmail(teacherEmail, sessionStatus) {
        return this.http.get(`http://localhost:8080/mentor-platform-service/session/mentor/${teacherEmail}/${sessionStatus}`);
    }
    getSessionByEmail(email) {
        return this.http.get(`http://localhost:8080/mentor-platform-service/sessions/${email}`);
    }
    getSessionbyID(sessionId) {
        return this.http.get(`http://localhost:8080/mentor-platform-service/session/${sessionId}/feedback`);
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SessionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JWvG":
/*!********************************************!*\
  !*** ./src/app/student-profile.service.ts ***!
  \********************************************/
/*! exports provided: StudentProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProfileService", function() { return StudentProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const url = 'http://localhost:8080/student-profile-service/students';
class StudentProfileService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    registerFromRemote(user) {
        //return this.http.post<any>('http://localhost:8086/registration', user);
        return this.http.post('http://localhost:8080/student-profile-service/registration', user);
    }
    logInFromRemote(user) {
        return this.http.post('http://localhost:8080/student-profile-service/register', user);
    }
    getAll() {
        return this.http.get(url);
    }
    getByEmail(email) {
        return this.http.get(`http://localhost:8080/student-profile-service/students/${email}`);
    }
    getuser() {
        return this.http.get('http://localhost:8080/student-profile-service/registration');
    }
    getBySubject(subject) {
        return this.http.get(`http://localhost:8080/mentor-profile-service/mentors/${subject}`);
    }
    getFaqBySubject(subject) {
        return this.http.get(`http://localhost:8080/mentor-platform-service/faq/${subject}`);
    }
    getSessionByEmail(email) {
        return this.http.get(`http://localhost:8080/student-profile-service/sessions/${email}`);
    }
    emailService(email) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('email', email);
        return this.email = email;
    }
    abc() {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('email');
    }
    setRole(role) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set('role', role);
        return this.role = role;
    }
    getRole() {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('role');
    }
    // Logout(){
    //   Cookie.deleteAll()
    //   sessionStorage.clear();
    //   this.router.navigate['/']
    // }
    setSubject(subject) {
        this.subject = subject;
    }
    getSubject() {
        return this.subject;
    }
}
StudentProfileService.ɵfac = function StudentProfileService_Factory(t) { return new (t || StudentProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
StudentProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentProfileService, factory: StudentProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Oh3b":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../session.service */ "ILAa");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















const _c0 = ["menuTrigger"];
function HomepageComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const problem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", problem_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", problem_r4, " ");
} }
class HomepageComponent {
    // name= "vishal.kapoor@svn".split('@')[0]
    constructor(studentProfileService, snackbar, router, authenticate, mentorProfileService, ss, dialog) {
        this.studentProfileService = studentProfileService;
        this.snackbar = snackbar;
        this.router = router;
        this.authenticate = authenticate;
        this.mentorProfileService = mentorProfileService;
        this.ss = ss;
        this.dialog = dialog;
        this.value = '';
        this.name = this.studentProfileService.abc().split('@')[0].toUpperCase();
        this.avatar = this.name.charAt(0).toUpperCase();
        this.problems = ['Physics', 'Maths', 'English', 'Java', 'Chemistry', 'Civics', 'Economics', 'Python', 'Biology', 'History', 'Accounts', 'Business Administration', 'Geography', 'Political Science'];
    }
    update(value) { this.value = value; }
    //   {value: '0', viewValue: 'Physics'},
    //   {value: '1', viewValue: 'Chemistry'},
    //   {value: '2', viewValue: 'Maths'},
    //   {value: '3', viewValue: 'English'},
    //   {value: '4', viewValue: 'Hindi'},
    //   {value: '5', viewValue: 'Computer Science'},
    //   {value: '6', viewValue: 'Social Studies'},
    // ];
    ngOnInit() {
        // this.studentProfileService.setSubject(this.subject);
    }
    // tslint:disable-next-line: typedef
    getBySubject() {
        this.studentProfileService.getBySubject(this.subject).subscribe(data => {
            this.mentor_subject = data,
                console.log('hello' + data.email);
            // this.mentorProfileService.setMentorEmail(data.email);
            //  this.session.mentorName=data.email;
            //   this.session.studentName=this.studentProfileService.abc();
            const genertaeSession = {
                studentEmail: this.studentProfileService.abc(),
                teacherEmail: data.email,
            };
            console.log(genertaeSession);
            this.ss.findSession(genertaeSession).subscribe(res => {
                this.session = res;
                this.session.subject = this.subject;
                // this.session.query = document.getElementById("queryDoubt").nodeValue;
                this.session.query = this.str;
                console.log('asdsad' + this.str);
                // this.http.post<any>('http://localhost:8089/query',this.session);
                this.mentorProfileService.setQuerySubject(this.session).subscribe(data => console.log(data));
                console.log(this.session.query + 'daasad' + this.session.subject);
                console.log(this.subject + 'this is the data' + this.session.sessionId);
                const sess = this.session.sessionId;
                this.sessionId1 = this.session.sessionId;
                this.mentorProfileService.setSessionId(sess);
                console.log('dhbvcjv' + this.mentorProfileService.getSessionId());
            });
            this.snackbar
                // tslint:disable-next-line: max-line-length
                .open(('Rajesh Kapoor with degree in B.Tech has been assigned to you. Now you can proceed with your doubt'), 'Connect', {
                verticalPosition: 'top'
            })
                .onAction()
                .subscribe(() => this.router.navigate([`/chat`]));
            //  console.log(data.name.toString())
        }, err => {
            this.snackbar
                // tslint:disable-next-line: max-line-length
                .open(('This functionality will work with websockets!'), 'Connect', {
                verticalPosition: 'top'
            })
                .onAction()
                .subscribe(() => this.router.navigate([`/chat`]));
        }
        // this.mentor_subject = data
        );
        // this.selectedsessionId=this.session.sessionId;
        // console.log(this.session.sessionId);
        // console.log(this.subject);
    }
    selectedSubject(event) {
        console.log(event.value);
        this.subject = event.value;
        this.studentProfileService.setSubject(event.value);
    }
    // getNotification(){
    //  this.mentorProfileService
    // }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_2__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_6__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], viewQuery: function HomepageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuTrigger = _t.first);
    } }, decls: 50, vars: 6, consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"], ["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "width", "50px", "height", "50px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "id", "Profile", "routerLink", "/student-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], ["cols", "1", "rowHeight", "90%"], [2, "background-color", "white", "padding", "5rem"], [1, "video-player-wrapper"], [2, "font-weight", "600", "font-size", "300%", "margin-bottom", "30px"], [2, "font-size", "100%"], [1, "example-button-row"], ["appearance", "outline"], [2, "width", "600px"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width", 2, "width", "500px"], ["id", "str", "matInput", "", "rows", "5", "cols", "1000000", "placeholder", "Enter your Doubts", 3, "ngModel", "ngModelChange"], ["doubts", ""], ["mat-raised-button", "", "color", "primary", 1, "bottomrow", 2, "margin-left", "16px", 3, "disabled", "click"], [2, "color", "white"], ["href", "", 2, "color", "white"], [3, "value"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_17_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Live Doubts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Get Your Doubts Solved Instantly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function HomepageComponent_Template_mat_select_selectionChange_34_listener($event) { return ctx.selectedSubject($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomepageComponent_mat_option_35_Template, 2, 2, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomepageComponent_Template_textarea_ngModelChange_38_listener($event) { return ctx.str = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_button_click_40_listener() { return ctx.getBySubject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "footer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.problems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r3.value.length === 0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n\r\n  justify-content: space-between;\r\n}\r\n.navbar[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n  cursor: pointer;\r\n  \r\n}\r\n.navbar[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n}\r\n\r\nmat-grid-list[_ngcontent-%COMP%]{\r\n  margin-left: 100px;\r\n  margin-right: 100px;\r\n}\r\nmat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-size:3rem;\r\n  font-weight: 900;\r\n  color: rgb(12, 5, 51)\r\n\r\n}\r\nmat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-size: 1.25rem;\r\n  color: #323648;\r\n}\r\nmat-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background-color:#A79344 ;\r\n}\r\n.tile-image[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n  background: teal;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n#abc[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n}\r\n#abc[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\nbutton.mat-menu-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\n#Profile[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n  outline:none;\r\n  }\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n      outline:none;\r\n      cursor: pointer;\r\n      }\r\n\r\n@media (max-width: 700px) {\r\n  body[_ngcontent-%COMP%]{\r\n    font-size: 90%;\r\n  }\r\n  mat-grid-list[_ngcontent-%COMP%]{\r\n      margin-left: 0px;\r\n      margin-right: 0px;\r\n  }\r\n  .tile-image[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n      height: auto;\r\n  }\r\n  mat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n      font-size:1.5rem;\r\n  }\r\n  mat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      font-size: 0.25 rem;\r\n  }\r\n\r\n  \r\nmat-card[_ngcontent-%COMP%]{\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n}\r\n.botton-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\r\n{\r\n    align-items: baseline;\r\n}\r\n#circle[_ngcontent-%COMP%]:hover{\r\ncursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlOztBQUVqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBOztHQUVHO0FBQ0g7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCOztBQUVGO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1o7QUFDQTtNQUNJLFlBQVk7TUFDWixlQUFlO01BQ2Y7QUFLTixvQ0FBb0M7QUFDcEM7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtNQUNJLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7RUFDQTtNQUNJLFdBQVc7TUFDWCxZQUFZO0VBQ2hCO0VBQ0E7TUFDSSxnQkFBZ0I7RUFDcEI7RUFDQTtNQUNJLG1CQUFtQjtFQUN2Qjs7RUFFQTs7R0FFQztBQUNIO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7QUFDQTtBQUNBOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBO0FBQ0EsZUFBZTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubmF2YmFyOmZvY3Vze1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG59XHJcbi5uYXZiYXI6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBzcGFue1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufSAqL1xyXG5tYXQtZ3JpZC1saXN0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5tYXQtbGlzdCBoMXtcclxuICBmb250LXNpemU6M3JlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiByZ2IoMTIsIDUsIDUxKVxyXG5cclxufVxyXG5tYXQtbGlzdCBwe1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBjb2xvcjogIzMyMzY0ODtcclxufVxyXG5tYXQtbGlzdCBidXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojQTc5MzQ0IDtcclxufVxyXG4udGlsZS1pbWFnZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG59XHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogdGVhbDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuI2FiYzpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2FiYzpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmJ1dHRvbi5tYXQtbWVudS1pdGVtIDpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNQcm9maWxle1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2JhcjE6Zm9jdXN7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIH1cclxuICAjYmFyMTpob3ZlcntcclxuICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbi8qIG1lZGlhIHF1ZXJ5IGZvciByZXNwb25zaXZlIHBhZ2UgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgYm9keXtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gIH1cclxuICBtYXQtZ3JpZC1saXN0e1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnRpbGUtaW1hZ2V7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIG1hdC1saXN0IGgxe1xyXG4gICAgICBmb250LXNpemU6MS41cmVtO1xyXG4gIH1cclxuICBtYXQtbGlzdCBwe1xyXG4gICAgICBmb250LXNpemU6IDAuMjUgcmVtO1xyXG4gIH1cclxuXHJcbiAgLyogYnV0dG9ue1xyXG4gIGNvbG9yOiAjQTc5MzQ0O1xyXG59ICovXHJcbm1hdC1jYXJke1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG59XHJcbi5ib3R0b24tcm93IGJ1dHRvblxyXG57XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuI2NpcmNsZTpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.css']
            }]
    }], function () { return [{ type: _student_profile_service__WEBPACK_IMPORTED_MODULE_2__["StudentProfileService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_6__["MentorProfileService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { menuTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['menuTrigger']
        }] }); })();


/***/ }),

/***/ "SVIp":
/*!*******************************************!*\
  !*** ./src/app/mentor-profile.service.ts ***!
  \*******************************************/
/*! exports provided: MentorProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorProfileService", function() { return MentorProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_mentor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/mentor.model */ "Y3P4");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");






const url = 'http://localhost:8080/mentor-profile-service/mentor';
class MentorProfileService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    registerFromRemote(user) {
        return this.http.post("http://localhost:8080/mentor-profile-service/register", _models_mentor_model__WEBPACK_IMPORTED_MODULE_1__["Mentor"]);
    }
    getAll() {
        return this.http.get(url);
    }
    getByEmail(email) {
        return this.http.get(`http://localhost:8080/mentor-profile-service/mentor/${email}`);
    }
    getSessionByEmail(email) {
        return this.http.get(`http://localhost:8080/mentor-profile-service/sessions/${email}`);
    }
    updateMentor(mentor) {
        return this.http.put("http://localhost:8080/mentor-profile-service/updateProfile", mentor);
    }
    saveFaq(faq) {
        return this.http.post("http://localhost:8080/mentor-platform-service/register", faq);
    }
    saveMentor(mentor1) {
        return this.http.post("http://localhost:8080/mentor-profile-service/register", mentor1);
    }
    setQuerySubject(session) {
        return this.http.post("http://localhost:8080/mentor-platform-service/query", session);
    }
    sucess(msg) {
        this.snackBar.open(msg, '');
    }
    setMentorEmail(mentorEmail) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('mentorEmail', mentorEmail);
        return this.mentorEmail = mentorEmail;
    }
    getMentorEmail() {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('mentorEmail');
    }
    setSessionId(sessionId) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].set('sessionId', sessionId);
        return this.sessionId = sessionId;
    }
    getSessionId() {
        return ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('sessionId');
    }
}
MentorProfileService.ɵfac = function MentorProfileService_Factory(t) { return new (t || MentorProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
MentorProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MentorProfileService, factory: MentorProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentorProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'nimbleguru-ui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W/kM":
/*!********************************************************!*\
  !*** ./src/app/chat-history/chat-history.component.ts ***!
  \********************************************************/
/*! exports provided: ChatHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHistoryComponent", function() { return ChatHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/message.model */ "4Em8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../session.service */ "ILAa");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function ChatHistoryComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.timeStamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r3.messageContent);
} }
class ChatHistoryComponent {
    constructor(_route, service, sessionService, router) {
        this._route = _route;
        this.service = service;
        this.sessionService = sessionService;
        this.router = router;
        this.message1 = new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"]();
        this.email1 = this.service.abc();
        this.name = this.service.abc().split('@')[0].toUpperCase();
        this.avatar = this.name.charAt(0).toUpperCase();
        this._route.params.subscribe(params => {
            console.log("params", params["sessionId"]);
            this.sessionId = params["sessionId"];
        });
    }
    ngOnInit() {
        // this.service.getByEmail(this.email1).subscribe(data => this.user = data);
        // console.log(this.user.sessions[5]);
        this.sessionService.getMessageDetails(this.sessionId).subscribe(data => this.messageHistory = data["sessionChatMessages"]);
        console.log(jquery__WEBPACK_IMPORTED_MODULE_1__["data"]);
    }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
    onProfile() {
        if (this.service.getRole() == 'M') {
            this.router.navigate(['/mentor-profile']);
        }
        else {
            this.router.navigate(['/student-profile']);
        }
    }
}
ChatHistoryComponent.ɵfac = function ChatHistoryComponent_Factory(t) { return new (t || ChatHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_5__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ChatHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatHistoryComponent, selectors: [["app-chat-history"]], decls: 33, vars: 4, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "margin-left", "5px"], ["src", "/assets/img/header.png", "width", "60px", "height", "60px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], [2, "text-align", "center"], [1, "chat-container"], [1, "chat", 2, "background-color", "white"], ["class", "message", 4, "ngFor", "ngForOf"], [2, "color", "white"], ["href", "", 2, "color", "white"], [1, "message"], [2, "background-color", "white", "color", "black", "padding", "5px", "font-size", "14px", "font-weight", "600"], [2, "background-color", "white", "color", "grey", "padding", "5px", "font-size", "14px"], [2, "background-color", "white", "color", "black", "padding", "5px", "font-size", "18px", "padding-left", "5px"]], template: function ChatHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatHistoryComponent_Template_button_click_14_listener() { return ctx.onProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatHistoryComponent_Template_button_click_16_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Conversations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ChatHistoryComponent_div_24_Template, 7, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messageHistory);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: [".chat-container[_ngcontent-%COMP%]{\r\n    float: middle;\r\n  \r\n    height: 29vw;\r\n    width: 70vw;\r\n    overflow: scroll;\r\n    overflow-x: hidden;\r\n    background: white;\r\n  \r\n    margin-left: 250px;\r\n  }\r\n  button.mat-menu-item[_ngcontent-%COMP%]{\r\n    outline: none;\r\n  }\r\n  .navbar[_ngcontent-%COMP%]{\r\n  \r\n    justify-content: space-between;\r\n  }\r\n  .chat[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    margin: 0 ;\r\n    width: 80%;\r\n    height: 100%;\r\n    background: white;\r\n  \r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%]{\r\n    padding-top: 40px;\r\n  }\r\n  .send-button[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    height: 70%;\r\n    width: 50%;\r\n  }\r\n  input[_ngcontent-%COMP%]{\r\n    float: middle;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    font-size: 1.5em;\r\n    width: 500px;\r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n  }\r\n  #abc[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n  #abc[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1oaXN0b3J5L2NoYXQtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7SUFFYixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCOztJQUVqQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBOztJQUVFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjs7RUFFbkI7RUFFQTs7Ozs7OztLQU9HO0VBQ0g7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkO0VBQ0E7Ozs7Ozs7Ozs7S0FVRztFQUNIO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWhpc3RvcnkvY2hhdC1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1jb250YWluZXJ7XHJcbiAgICBmbG9hdDogbWlkZGxlO1xyXG4gIFxyXG4gICAgaGVpZ2h0OiAyOXZ3O1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbi5tYXQtbWVudS1pdGVte1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLm5hdmJhcntcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmNoYXR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAwIDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLyogLmZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgXHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfSAqL1xyXG4gIGgxe1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIC5zZW5kLWJ1dHRvbntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgIGZsb2F0OiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcbiAgLyogLnNlbmR7XHJcbiAgICBmbG9hdDogbWlkZGxlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9zZW5kLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgfSAqL1xyXG4gIGZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgI2FiYzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2FiYzpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-history',
                templateUrl: './chat-history.component.html',
                styleUrls: ['./chat-history.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_5__["StudentProfileService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "X0bx":
/*!**************************************************************!*\
  !*** ./src/app/student-profile/student-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProfileComponent", function() { return StudentProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../session.service */ "ILAa");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



















function StudentProfileComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
const _c0 = function (a1) { return ["/history", a1]; };
function StudentProfileComponent_ng_template_56_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", session_r8.query.charAt(0).toUpperCase() + session_r8.query.substr(1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Subject:\u00A0", session_r8.subject, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 MentorEmail:\u00A0", session_r8.teacherEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, session_r8.sessionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Duration:\u00A0", session_r8.duration, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 Taken on:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 6, session_r8.startTime, "dd MMM, yyyy"), "");
} }
const _c1 = function () { return [3, 10, 25, 100]; };
function StudentProfileComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StudentProfileComponent_ng_template_56_mat_card_1_Template, 15, 11, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.obs));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
function StudentProfileComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't attended any session yet!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please connect with mentors instantly and get your doubts cleared.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const DATA = [
    {
        title: 'Shiba Inu 1',
        subtitle: 'Dog Breed',
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    },
    {
        title: 'Shiba Inu 2',
        subtitle: 'Dog Breed',
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'
    }
];
class StudentProfileComponent {
    constructor(http, changeDetectorRef, studentProfileService, authenticate, SessionService) {
        this.http = http;
        this.changeDetectorRef = changeDetectorRef;
        this.studentProfileService = studentProfileService;
        this.authenticate = authenticate;
        this.SessionService = SessionService;
        this.name = this.studentProfileService.abc().split('@')[0].toUpperCase();
        this.avatar = this.name.charAt(0).toUpperCase();
        this.email = this.studentProfileService.abc();
        this.session = "Geometry";
        this.date = "31/12/2020 12:00 AM";
        this.studentProfileService.getSessionByEmail(this.email).subscribe(x => {
            this.sessionArray = x;
            // dataSource: MatTableDataSource<Session> = new MatTableDataSource<Session>(this.sessionArray);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.sessionArray);
            console.log(this.sessionArray);
            console.log(this.dataSource);
            this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
        });
        // dataSource2: MatTableDataSource<Session> = new MatTableDataSource<Session>(this.sessionArray);
        // this.SessionService.getSessionByEmail(this.email).subscribe((res: Response) => {
        //   this.sessionArray = res.json();
        // console.log(this.sessionArray);
        // this.dataSource = new MatTableDataSource<Session>(this.sessionArray);
        // console.log(this.sessionArray); });
        // this.dataSource = new MatTableDataSource<Session>(this.sessionArray);
    }
    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
        // this.sessionStr = {sessionId:1,sessionDate:"31/12/2020",studentName:"Ayush",mentorName:"simanta",query:"Algebra funxtions",querySolutin:"link for materials",message:"refer the link",rating:4,startTime:3,endTime:5};
        this.studentProfileService.getByEmail(this.email).subscribe(data => this.user = data);
        console.log(this.sessionArray);
        // this.changeDetectorRef.detectChanges();
        // this.dataSource.paginator = this.paginator;
        // this.obs = this.dataSource.connect();
        // this.studentProfileService.getBySubject(this.subject).subscribe(data=> this.mentor123 = data);
        // console.log(this.subject);
    }
    ngOnDestroy() {
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
    // getHistory(){
    //   this.
    // }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
StudentProfileComponent.ɵfac = function StudentProfileComponent_Factory(t) { return new (t || StudentProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_5__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"])); };
StudentProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentProfileComponent, selectors: [["app-student-profile"]], viewQuery: function StudentProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 68, vars: 7, consts: [["color", "primary", 1, "navbar"], ["routerLink", "/", "id", "bar1", 2, "margin-left", "5px"], ["src", "/assets/img/header.png", "width", "60px", "height", "60px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/student-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], ["cols", "4", "rowHeight", "100%"], ["colspan", "1"], [2, "background-color", "black"], ["role", "list"], ["role", "listitem"], [2, "width", "100px", "height", "100px", "background-color", "#95DBEF", "border-radius", "50px", "margin-bottom", "30px", "margin-left", "50px"], [2, "font-size", "60px", "padding", "30px", "padding-top", "3px", "color", "black"], ["mode", "determinate", "value", "40"], ["role", "listitem", 2, "height", "auto", "margin-left", "12.5%"], ["routerLink", "/home", "mat-raised-button", "", "color", "primary"], ["colspan", "3"], ["role", "list", "id", "list1"], ["role", "listitem", 2, "height", "auto", "margin-left", "37.5%"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [2, "color", "white"], ["href", "", 2, "color", "white"], [1, "scrollable"], ["class", "example-session", 4, "ngFor", "ngForOf"], [3, "pageSizeOptions"], [1, "example-session"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-button", "", 2, "float", "right", "margin-bottom", "100px"], [1, "fa", "fa-play-circle", "fa-3x", 3, "routerLink"], [2, "font-size", "26px", "font-weight", "600"], [2, "font-size", "26px"]], template: function StudentProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentProfileComponent_Template_button_click_16_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-tile", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile-header", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-progress-bar", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 40 Minutes left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Vishal Kapoor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " vishalkapoorbkn@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Class :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Higher Secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Connect with a mentor now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-grid-tile", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-tile-header", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "My Previous Connects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-list", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, StudentProfileComponent_div_55_Template, 1, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, StudentProfileComponent_ng_template_56_Template, 4, 5, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, StudentProfileComponent_ng_template_58_Template, 4, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "footer", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionArray != null)("ngIfThen", _r3)("ngIfElse", _r5);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTileHeaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    margin-right: 1rem;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    height: 70%;\r\n    margin: 5px;\r\n    width: 800px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    color: black;\r\n}\r\n\r\n#abc[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n\r\n#abc[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n  }\r\n\r\n\r\n\r\n@media (max-width: 767.98px) {\r\n    mat-grid-list[_ngcontent-%COMP%] {\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n    .tile-image[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    mat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 1.5rem;\r\n    }\r\n    mat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 1.1rem;\r\n    }\r\n    footer[_ngcontent-%COMP%] {\r\n        margin-top: 100px;\r\n    }\r\n\r\n    \r\n}\r\n\r\nbutton.mat-menu-item[_ngcontent-%COMP%]{\r\n    outline: none;\r\n  }\r\n\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC1wcm9maWxlL3N0dWRlbnQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUdGOzs7Ozs7Ozs7R0FTRzs7QUFFSDtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7OztBQUdKOztBQUNBO0lBQ0ksYUFBYTtFQUNmOztBQUNBO0lBQ0UsWUFBWTtJQUNaOztBQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtcHJvZmlsZS9zdHVkZW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5mb290ZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZCA6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuI2FiYzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2FiYzpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbi8qIFxyXG4uc2Nyb2xsYWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbn0gKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gICAgbWF0LWdyaWQtbGlzdCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC50aWxlLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBtYXQtbGlzdCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICBtYXQtbGlzdCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuYnV0dG9uLm1hdC1tZW51LWl0ZW17XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAjYmFyMTpmb2N1c3tcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgICNiYXIxOmhvdmVye1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-student-profile',
                templateUrl: './student-profile.component.html',
                styleUrls: ['./student-profile.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_5__["StudentProfileService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "Y3P4":
/*!****************************************!*\
  !*** ./src/app/models/mentor.model.ts ***!
  \****************************************/
/*! exports provided: Mentor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mentor", function() { return Mentor; });
class Mentor {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _registeration_page_registeration_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registeration-page/registeration-page.component */ "ZEpQ");
/* harmony import */ var _log_in_page_log_in_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./log-in-page/log-in-page.component */ "Edfc");
/* harmony import */ var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student-profile/student-profile.component */ "X0bx");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _mentor_profile_mentor_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mentor-profile/mentor-profile.component */ "u2EL");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _studentliveconnect_studentliveconnect_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./studentliveconnect/studentliveconnect.component */ "AAiN");
/* harmony import */ var _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @videogular/ngx-videogular/core */ "4w57");
/* harmony import */ var _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @videogular/ngx-videogular/controls */ "v2j/");
/* harmony import */ var _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @videogular/ngx-videogular/overlay-play */ "cqME");
/* harmony import */ var _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @videogular/ngx-videogular/buffering */ "VKRg");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./student-profile.service */ "JWvG");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/authentication.service */ "ej43");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./feedback/feedback.component */ "isCG");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./feedback.service */ "dSdR");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "8Dg9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _chat_application_chat_application_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./chat-application/chat-application.component */ "oL3h");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./faq/faq.component */ "gN+M");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mentor-profile.service */ "SVIp");
/* harmony import */ var _jwt_client_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./jwt-client.service */ "5Y+F");
/* harmony import */ var _mentor_registration_mentor_registration_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mentor-registration/mentor-registration.component */ "iIhx");
/* harmony import */ var _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./chat-history/chat-history.component */ "W/kM");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _PagerService__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./PagerService */ "EDYx");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _faq_by_subject_faq_by_subject_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./faq-by-subject/faq-by-subject.component */ "hLln");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./auth-guard.service */ "5nbR");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");


































// import {BasicAuthHtppInterceptorService} from './services/BasicAuthHtppInterceptorService';










//import { InputsModule } from '@progress/kendo-angular-inputs';









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JWT_OPTIONS"] },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtHelperService"], _auth_service__WEBPACK_IMPORTED_MODULE_49__["AuthService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_50__["AuthGuardService"], _PagerService__WEBPACK_IMPORTED_MODULE_46__["PagerService"], _jwt_client_service__WEBPACK_IMPORTED_MODULE_41__["JwtClientService"], _student_profile_service__WEBPACK_IMPORTED_MODULE_29__["StudentProfileService"], _mentor_profile_service__WEBPACK_IMPORTED_MODULE_40__["MentorProfileService"], _feedback_service__WEBPACK_IMPORTED_MODULE_35__["FeedbackService"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_33__["AuthenticationService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_25__["VgCoreModule"],
            _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_26__["VgControlsModule"],
            _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_27__["VgOverlayPlayModule"],
            _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_28__["VgBufferingModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__["MatMenuModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
        _registeration_page_registeration_page_component__WEBPACK_IMPORTED_MODULE_6__["RegisterationPageComponent"],
        _log_in_page_log_in_page_component__WEBPACK_IMPORTED_MODULE_7__["LogInPageComponent"],
        _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_8__["StudentProfileComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
        _mentor_profile_mentor_profile_component__WEBPACK_IMPORTED_MODULE_21__["MentorProfileComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__["HomepageComponent"],
        _studentliveconnect_studentliveconnect_component__WEBPACK_IMPORTED_MODULE_24__["StudentliveconnectComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_34__["FeedbackComponent"],
        _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_36__["UpdateProfileComponent"],
        _chat_application_chat_application_component__WEBPACK_IMPORTED_MODULE_38__["ChatApplicationComponent"],
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_39__["FaqComponent"],
        _mentor_registration_mentor_registration_component__WEBPACK_IMPORTED_MODULE_42__["MentorRegistrationComponent"],
        _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_43__["ChatHistoryComponent"],
        _faq_by_subject_faq_by_subject_component__WEBPACK_IMPORTED_MODULE_48__["FaqBySubjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_25__["VgCoreModule"],
        _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_26__["VgControlsModule"],
        _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_27__["VgOverlayPlayModule"],
        _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_28__["VgBufferingModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__["MatMenuModule"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"],
                    _registeration_page_registeration_page_component__WEBPACK_IMPORTED_MODULE_6__["RegisterationPageComponent"],
                    _log_in_page_log_in_page_component__WEBPACK_IMPORTED_MODULE_7__["LogInPageComponent"],
                    _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_8__["StudentProfileComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
                    _mentor_profile_mentor_profile_component__WEBPACK_IMPORTED_MODULE_21__["MentorProfileComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_23__["HomepageComponent"],
                    _studentliveconnect_studentliveconnect_component__WEBPACK_IMPORTED_MODULE_24__["StudentliveconnectComponent"],
                    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_34__["FeedbackComponent"],
                    _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_36__["UpdateProfileComponent"],
                    _chat_application_chat_application_component__WEBPACK_IMPORTED_MODULE_38__["ChatApplicationComponent"],
                    _faq_faq_component__WEBPACK_IMPORTED_MODULE_39__["FaqComponent"],
                    _mentor_registration_mentor_registration_component__WEBPACK_IMPORTED_MODULE_42__["MentorRegistrationComponent"],
                    _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_43__["ChatHistoryComponent"],
                    _faq_by_subject_faq_by_subject_component__WEBPACK_IMPORTED_MODULE_48__["FaqBySubjectComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    _videogular_ngx_videogular_core__WEBPACK_IMPORTED_MODULE_25__["VgCoreModule"],
                    _videogular_ngx_videogular_controls__WEBPACK_IMPORTED_MODULE_26__["VgControlsModule"],
                    _videogular_ngx_videogular_overlay_play__WEBPACK_IMPORTED_MODULE_27__["VgOverlayPlayModule"],
                    _videogular_ngx_videogular_buffering__WEBPACK_IMPORTED_MODULE_28__["VgBufferingModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_45__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_44__["MatPaginatorModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_47__["MatMenuModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtModule"]
                ],
                // providers: [ PagerService,JwtClientService ,StudentProfileService, MentorProfileService ,FeedbackService,DatePipe,AuthenticationService,BasicAuthHtppInterceptorService,{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
                providers: [{ provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JWT_OPTIONS"], useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JWT_OPTIONS"] },
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtHelperService"], _auth_service__WEBPACK_IMPORTED_MODULE_49__["AuthService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_50__["AuthGuardService"], _PagerService__WEBPACK_IMPORTED_MODULE_46__["PagerService"], _jwt_client_service__WEBPACK_IMPORTED_MODULE_41__["JwtClientService"], _student_profile_service__WEBPACK_IMPORTED_MODULE_29__["StudentProfileService"], _mentor_profile_service__WEBPACK_IMPORTED_MODULE_40__["MentorProfileService"], _feedback_service__WEBPACK_IMPORTED_MODULE_35__["FeedbackService"], _angular_common__WEBPACK_IMPORTED_MODULE_32__["DatePipe"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_33__["AuthenticationService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZEpQ":
/*!********************************************************************!*\
  !*** ./src/app/registeration-page/registeration-page.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationPageComponent", function() { return RegisterationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_register_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/register.model */ "jTSy");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















class RegisterationPageComponent {
    constructor(formBuilder, router, service, snackbar) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
        this.snackbar = snackbar;
        this.user = new _models_register_model__WEBPACK_IMPORTED_MODULE_1__["RegisterModel"]();
        this.hide = true;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: [this.user.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)
                ]],
            phoneNumber: [this.user.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')
                ]],
            email: [this.user.email, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            standard: [this.user.standard, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)
                ]],
            password: [this.user.password, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                ]],
            confirmPassword: [this.user.confirmPassword, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                ]]
        });
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
        // this.breakpoint = (window.innerWidth <= 100) ? 2 : 3;
    }
    // tslint:disable-next-line: typedef
    onRegisterSubmit() {
        if (this.check() == true) {
            this.service.registerFromRemote(this.user).subscribe(data => {
                // console.log('response recived');
                this.router.navigate(['/login']);
            }, err => {
                this.snackbar.open(('User with this emailID already exists. Kindly register with different emailID.'), '', {
                    duration: 5000,
                    verticalPosition: 'top'
                });
                //  console.clear();
                // console.log("bad credentials");
            });
        }
        else {
            this.snackbar.open(('Your passwords aren\'t matching! Please check your password fields'), '', {
                duration: 10000,
                verticalPosition: 'top'
            });
        }
        // console.clear();
    }
    gotologin() {
        this.router.navigate(['/login']);
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
    check() {
        if (this.user.confirmPassword == this.user.password) {
            return true;
        }
    }
}
RegisterationPageComponent.ɵfac = function RegisterationPageComponent_Factory(t) { return new (t || RegisterationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_4__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
RegisterationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterationPageComponent, selectors: [["app-registeration-page"]], decls: 57, vars: 12, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "width", "50px", "height", "50px"], ["routerLink", "/login", "mat-raised-button", ""], ["rowHeight", "1:1", 3, "cols", "resize"], ["alt", "Logo", "src", "/assets/img/LogoSerbo-Recovered copy.png", 2, "width", "55%"], [2, "width", "350px", "padding", "0px"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-container"], [2, "font-weight", "500"], ["role", "listitem"], [2, "width", "300px"], ["id", "name", "matInput", "", "formControlName", "name", "placeholder", "Enter your name", 3, "ngModel", "ngModelChange"], ["id", "phoneNumber", "matInput", "", "formControlName", "phoneNumber", "placeholder", "Enter your phoneNumber", 3, "ngModel", "ngModelChange"], ["id", "email", "matInput", "", "formControlName", "email", "placeholder", "Enter your email", 3, "ngModel", "ngModelChange"], ["id", "class", "matInput", "", "formControlName", "standard", "placeholder", "Enter your standard", 3, "ngModel", "ngModelChange"], ["id", "password", "matInput", "", "formControlName", "password", "placeholder", "Enter your password", 3, "ngModel", "type", "ngModelChange"], ["matSuffix", "", 3, "click"], ["id", "confirmPassword", "matInput", "", "formControlName", "confirmPassword", "placeholder", "Enter your password again", 3, "ngModel", "type", "ngModelChange"], ["mat-button", "", "type", "submit", 1, "mat-raised-button", "mat-primary", 3, "disabled"], [3, "click"], ["routerLink", "/login"], [2, "color", "white"], ["href", "", 2, "color", "white"]], template: function RegisterationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function RegisterationPageComponent_Template_mat_grid_list_resize_10_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterationPageComponent_Template_form_ngSubmit_15_listener() { return ctx.registerForm.valid && ctx.onRegisterSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterationPageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterationPageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.user.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterationPageComponent_Template_input_ngModelChange_29_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterationPageComponent_Template_input_ngModelChange_32_listener($event) { return ctx.user.standard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterationPageComponent_Template_input_ngModelChange_35_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterationPageComponent_Template_mat_icon_click_36_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterationPageComponent_Template_input_ngModelChange_40_listener($event) { return ctx.user.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterationPageComponent_Template_h3_click_45_listener() { return ctx.gotologin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Already a user ? Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.standard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password)("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility" : "visibility_off", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.confirmPassword)("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    \r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXJhdGlvbi1wYWdlL3JlZ2lzdGVyYXRpb24tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCOztBQUVsQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2Y7QUFDUjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyYXRpb24tcGFnZS9yZWdpc3RlcmF0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxufVxyXG5zcGFue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbiNiYXIxOmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG4gICAgI2JhcjE6aG92ZXJ7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-registeration-page',
                templateUrl: './registeration-page.component.html',
                styleUrls: ['./registeration-page.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_4__["StudentProfileService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "c7tv":
/*!***********************************************!*\
  !*** ./src/app/services/messaging.service.ts ***!
  \***********************************************/
/*! exports provided: MessagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingService", function() { return MessagingService; });
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "MWWs");

class MessagingService {
    constructor(socketUrl, streamUrl) {
        // Create Stomp Configuration
        let stompConfig = {
            url: socketUrl,
            headers: {
                login: "",
                passcode: ""
            },
            heartbeat_in: 0,
            heartbeat_out: 20000,
            reconnect_delay: 5000,
            debug: true
        };
        // Create Stomp Service
        this.stompService = new _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_0__["StompService"](stompConfig);
        // Connect to a Stream
        this.messages = this.stompService.subscribe(streamUrl);
    }
    stream() {
        return this.messages;
    }
    send(url, message) {
        return this.stompService.publish(url, JSON.stringify(message));
    }
    state() {
        return this.stompService.state;
    }
    message(doubt) {
        return this.doubt = doubt;
    }
    xyz() {
        return this.doubt;
    }
}


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");



class AuthService {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }
    isAuthenticated() {
        const token = sessionStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"] }]; }, null); })();


/***/ }),

/***/ "dSdR":
/*!*************************************!*\
  !*** ./src/app/feedback.service.ts ***!
  \*************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FeedbackService {
    constructor(http) {
        this.http = http;
    }
    saveFeedback(feedback) {
        return this.http.patch(`http://localhost:8080/mentor-profile-service/mentors/${feedback.email}/feedback?rating=${feedback.rating}`, feedback);
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: User, JwtResponse, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtResponse", function() { return JwtResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class User {
    constructor(status) {
        this.status = status;
    }
}
class JwtResponse {
    constructor(jwttoken) {
        this.jwttoken = jwttoken;
    }
}
class AuthenticationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    authenticate(email, password) {
        return this.httpClient.post('http://localhost:8080/authentication-service/authenticate', { email, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(userData => {
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('role', userData.token[1]);
            let tokenStr = 'Bearer ' + userData.token[2];
            sessionStorage.setItem('token', tokenStr);
            return userData;
        }));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('email');
        //console.log(!(user === null))
        return !(user === null);
    }
    logOut() {
        sessionStorage.removeItem('email');
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('email');
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gN+M":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_faq_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/faq.model */ "sBAM");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");

















class FaqComponent {
    constructor(formBuilder, service1, service, router) {
        this.formBuilder = formBuilder;
        this.service1 = service1;
        this.service = service;
        this.router = router;
        this.name = this.service1.abc().split('@')[0].toUpperCase();
        this.faq = new _models_faq_model__WEBPACK_IMPORTED_MODULE_3__["FAQ"]();
        this.hide = true;
        this.avatar = this.name.charAt(0).toUpperCase();
    }
    ngOnInit() {
        this.updateForm1 = this.formBuilder.group({
            subject: [this.faq.subject, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            solution: [this.faq.solution, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]],
            query: [this.faq.query, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]],
        });
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    }
    OnSave() {
        console.log(this.updateForm1.value);
        const faq1 = {
            subject: this.updateForm1.value.subject,
            query: this.updateForm1.value.query,
            solution: this.updateForm1.value.solution
        };
        this.service.saveFaq(faq1).subscribe(data => {
            this.faq = data;
            console.log(this.faq);
        });
        this.router.navigate(['/mentor-profile']);
    }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_4__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_5__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 51, vars: 8, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "width", "50px", "height", "50px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/student-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], [1, "main-div"], [2, "width", "650px", "height", "550px", "margin-top", "90px"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [3, "cols"], [1, "form-container", 2, "width", "500px"], [2, "font-weight", "600", "margin-left", "30px"], [1, "id"], ["role", "listitem", "appearance", "outline"], ["id", "class", "matInput", "", "formControlName", "subject", "placeholder", "Enter your Subject", 3, "ngModel", "ngModelChange"], [1, "id1"], ["role", "listitem"], ["id", "query", "matInput", "", "formControlName", "query", "placeholder", "Enter few keywords like: gravity, pythagoras etc.", 3, "ngModel", "ngModelChange"], [1, "id2"], ["appearance", "outline"], ["id", "solution", "matInput", "", "rows", "5", "cols", "3", "formControlName", "solution", "placeholder", "Enter your Solution", 3, "ngModel", "ngModelChange"], [1, "bottomrow"], ["mat-button", "", "type", "submit", 1, "mat-raised-button", "mat-primary", 3, "click"], [2, "color", "white"], ["href", "", 2, "color", "white"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_button_click_16_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FaqComponent_Template_form_ngSubmit_21_listener() { return ctx.updateForm1.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Frequently asked questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FaqComponent_Template_input_ngModelChange_31_listener($event) { return ctx.faq.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FaqComponent_Template_textarea_ngModelChange_35_listener($event) { return ctx.faq.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FaqComponent_Template_textarea_ngModelChange_39_listener($event) { return ctx.faq.solution = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_button_click_41_listener() { return ctx.OnSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "footer", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.faq.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.faq.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.faq.solution);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridTile"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["header[_ngcontent-%COMP%]{\r\n    height: 10%;\r\n    background-color: teal;\r\n}\r\nmat-slider[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n.navbar[_ngcontent-%COMP%]{\r\n    background-color:teal;\r\n}\r\n#bar1[_ngcontent-%COMP%]:focus{\r\noutline:none;\r\n}\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n    outline:none;\r\n    cursor: pointer;\r\n    }\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    bottom: 0;\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n.main-div[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.form-container[_ngcontent-%COMP%]{\r\n    width:100%;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n.botton-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\r\n{\r\n    align-items: baseline;\r\n}\r\n.h1[_ngcontent-%COMP%]\r\n{\r\n    text-align:center;\r\n}\r\n.bottomrow[_ngcontent-%COMP%]\r\n{\r\n    align-items: bottom;\r\n    \r\n}\r\nbutton.mat-menu-item[_ngcontent-%COMP%]{\r\n    outline: none;\r\n  }\r\n\r\n.id[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n.id1[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n.id2[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    margin: 0px;\r\n    margin-top:40px;\r\n    margin-bottom: 90px;\r\n}\r\n#abc[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n#abc[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtFQUNkO0FBQ0Y7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZjtBQUNKO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsU0FBUztJQUNULGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7RUFDYjtBQUNGOztJQUVJLHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQjtvQkFDZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7RUFDZjtBQUVGOzs7Ozs7S0FNSztBQUNMO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbn1cclxubWF0LXNsaWRlciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4ubmF2YmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0ZWFsO1xyXG59XHJcbiNiYXIxOmZvY3Vze1xyXG5vdXRsaW5lOm5vbmU7XHJcbn1cclxuI2JhcjE6aG92ZXJ7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuLmZvcm0tY29udGFpbmVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbi5ib3R0b24tcm93IGJ1dHRvblxyXG57XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuLmgxXHJcbntcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5ib3R0b21yb3dcclxue1xyXG4gICAgYWxpZ24taXRlbXM6IGJvdHRvbTtcclxuICAgIC8qIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBtYXJnaW46IDM1MHB4OyAqL1xyXG59XHJcbmJ1dHRvbi5tYXQtbWVudS1pdGVte1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4vKiAuZm9ybS1jb250YWluZXIge1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDIwMDBweDtcclxuICAgIGJvcmRlcjogMTVweCBzb2xpZCB0ZWFsO1xyXG4gICAgcGFkZGluZzogNTBweDsgXHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfSAqL1xyXG4uaWR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uaWQxe1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmlkMntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDkwcHg7XHJcbn1cclxuI2FiYzpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgI2FiYzpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_4__["StudentProfileService"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_5__["MentorProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "hLln":
/*!************************************************************!*\
  !*** ./src/app/faq-by-subject/faq-by-subject.component.ts ***!
  \************************************************************/
/*! exports provided: FaqBySubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqBySubjectComponent", function() { return FaqBySubjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function FaqBySubjectComponent_mat_card_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Query: ", f_r3 == null ? null : f_r3.query, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Solution: ", f_r3 == null ? null : f_r3.solution, "");
} }
class FaqBySubjectComponent {
    constructor(studentProfileService) {
        this.studentProfileService = studentProfileService;
        this.name = this.studentProfileService.abc().split('@')[0].toUpperCase();
        this.avatar = this.name.charAt(0).toUpperCase();
    }
    ngOnInit() {
        // this.studentProfileService.getFaqBySubject(this.subject).subscribe(data=> this.subject=data);
        // console.log(this.subject)
        this.subject = this.studentProfileService.getSubject();
        console.log(this.studentProfileService.getSubject());
        this.studentProfileService.getFaqBySubject(this.subject).subscribe(data => {
            this.faq = data;
            console.log(this.faq);
        });
    }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
FaqBySubjectComponent.ɵfac = function FaqBySubjectComponent_Factory(t) { return new (t || FaqBySubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_2__["StudentProfileService"])); };
FaqBySubjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqBySubjectComponent, selectors: [["app-faq-by-subject"]], decls: 31, vars: 4, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "margin-left", "5px"], ["src", "/assets/img/header.png", "width", "60px", "height", "60px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/student-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], ["role", "listitem", 2, "height", "auto"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [2, "color", "white"], ["href", "", 2, "color", "white"], ["mat-line", ""]], template: function FaqBySubjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqBySubjectComponent_Template_button_click_16_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FaqBySubjectComponent_mat_card_22_Template, 4, 2, "mat-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faq);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  \r\n  \r\n  button.mat-menu-item[_ngcontent-%COMP%]{\r\n    outline: none;\r\n  }\r\n  \r\n  #bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n  \r\n  #bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\r\n  \r\n  mat-grid-list[_ngcontent-%COMP%]{\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n  }\r\n  \r\n  mat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:3rem;\r\n    font-weight: 900;\r\n    color: rgb(12, 5, 51)\r\n  \r\n  }\r\n  \r\n  mat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n    color: #323648;\r\n  }\r\n  \r\n  mat-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color:#A79344 ;\r\n  }\r\n  \r\n  .tile-image[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n  \r\n  }\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n  }\r\n  \r\n  \r\n  \r\n  @media (max-width: 767.98px) {\r\n    mat-grid-list[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n    .tile-image[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    mat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size:1.5rem;\r\n    }\r\n    mat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.1rem;\r\n    }\r\n  \r\n  mat-card[_ngcontent-%COMP%]{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n  }\r\n  \r\n  .botton-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\r\n  {\r\n      align-items: baseline;\r\n  }\r\n  \r\n  #circle[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  }\r\n  \r\n  #abc[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n  \r\n  #abc[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxLWJ5LXN1YmplY3QvZmFxLWJ5LXN1YmplY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSw4QkFBOEI7RUFDaEM7O0VBRUE7O0tBRUc7O0VBRUg7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxZQUFZO0lBQ1o7O0VBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmOztFQUNOO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7O0VBRUY7O0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZOztFQUVkOztFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUlBLG9DQUFvQzs7RUFDcEM7SUFDRTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtFQUNGOztLQUVHO0VBQ0g7SUFDRSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtFQUNwQjtFQUNBOztFQUNBOztNQUVJLHFCQUFxQjtFQUN6Qjs7RUFDQTtFQUNBLGVBQWU7RUFDZjs7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9mYXEtYnktc3ViamVjdC9mYXEtYnktc3ViamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfSAqL1xyXG5cclxuICBidXR0b24ubWF0LW1lbnUtaXRlbXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICNiYXIxOmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG4gICAgI2JhcjE6aG92ZXJ7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgbWF0LWdyaWQtbGlzdHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1saXN0IGgxe1xyXG4gICAgZm9udC1zaXplOjNyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHJnYigxMiwgNSwgNTEpXHJcbiAgXHJcbiAgfVxyXG4gIG1hdC1saXN0IHB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogIzMyMzY0ODtcclxuICB9XHJcbiAgbWF0LWxpc3QgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojQTc5MzQ0IDtcclxuICB9XHJcbiAgLnRpbGUtaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICBcclxuICB9XHJcbiAgZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBtZWRpYSBxdWVyeSBmb3IgcmVzcG9uc2l2ZSBwYWdlICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICBtYXQtZ3JpZC1saXN0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAudGlsZS1pbWFnZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBtYXQtbGlzdCBoMXtcclxuICAgICAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgfVxyXG4gICAgbWF0LWxpc3QgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAvKiBidXR0b257XHJcbiAgICBjb2xvcjogI0E3OTM0NDtcclxuICB9ICovXHJcbiAgbWF0LWNhcmR7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIH1cclxuICAuYm90dG9uLXJvdyBidXR0b25cclxuICB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICB9XHJcbiAgI2NpcmNsZTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICNhYmM6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICNhYmM6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqBySubjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-by-subject',
                templateUrl: './faq-by-subject.component.html',
                styleUrls: ['./faq-by-subject.component.css']
            }]
    }], function () { return [{ type: _student_profile_service__WEBPACK_IMPORTED_MODULE_2__["StudentProfileService"] }]; }, null); })();


/***/ }),

/***/ "iIhx":
/*!**********************************************************************!*\
  !*** ./src/app/mentor-registration/mentor-registration.component.ts ***!
  \**********************************************************************/
/*! exports provided: MentorRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorRegistrationComponent", function() { return MentorRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _models_mentor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/mentor.model */ "Y3P4");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function MentorRegistrationComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject1_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", subject1_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject1_r3, " ");
} }
function MentorRegistrationComponent_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const times_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", times_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", times_r4, " ");
} }
function MentorRegistrationComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const times1_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", times1_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", times1_r5, " ");
} }
class MentorRegistrationComponent {
    constructor(snackbar, formBuilder, service1, service, router, datePipe) {
        this.snackbar = snackbar;
        this.formBuilder = formBuilder;
        this.service1 = service1;
        this.service = service;
        this.router = router;
        this.datePipe = datePipe;
        this.mentor = new _models_mentor_model__WEBPACK_IMPORTED_MODULE_2__["Mentor"]();
        this.mentor1 = new _models_mentor_model__WEBPACK_IMPORTED_MODULE_2__["Mentor"]();
        this.hide = true;
        this.subjects = ['Physics', 'Maths', 'English', 'Java', 'Chemistry', 'Civics', 'Economics', 'Python', 'Biology', 'History', 'Accounts', 'Business Administration', 'Geography', 'Political Science'];
        this.time11 = ['00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
        this.myDate = new Date();
        this.email1 = this.service1.abc();
    }
    ngOnInit() {
        this.service.getByEmail(this.email1).subscribe;
        {
            (data => this.mentor1 = data);
            console.log(this.mentor1);
            if (this.mentor.name == null) {
                console.log("sgdhf");
            }
        }
        console.log(this.mentor1);
        this.updateForm = this.formBuilder.group({
            name: [this.mentor.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[a-zA-Z]+ [a-zA-Z]+$/)
                ]],
            email: [this.email1, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            phoneNumber: [this.mentor.phoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]\d*$/)
                ]],
            subject: [this.mentor.subject, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]],
            qualification: [this.mentor.qualification,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]],
            startTime: [this.mentor.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            endTime: [this.mentor.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]]
        });
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    }
    OnSave() {
        const mentor2 = {
            // id: 4645,
            name: this.updateForm.value.name,
            phoneNumber: this.updateForm.value.phoneNumber,
            email: this.updateForm.value.email,
            qualification: this.updateForm.value.qualification,
            subject: this.updateForm.value.subject,
            status: this.updateForm.value.status,
            joining_date: this.datePipe.transform(this.myDate, 'dd MMM, yyyy'),
            comment: null,
            sessions: this.updateForm.value.sessions,
            time: [
                {
                    "startTime": this.updateForm.value.startTime.split(':')[0],
                    "endTime": this.updateForm.value.endTime.split(':')[0]
                }
            ],
            rating: 4
            // creditStore: 0
        };
        console.log("dbscjdbskvjbkfj" + mentor2);
        // this.service.sucess();
        this.service.saveMentor(mentor2).subscribe(data => {
            this.snackbar
                // tslint:disable-next-line: max-line-length
                .open(("Your Profile is Updated"), '', {
                verticalPosition: 'top',
                duration: 1000
            });
            this.mentor = data;
            console.log(mentor2);
        });
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
MentorRegistrationComponent.ɵfac = function MentorRegistrationComponent_Factory(t) { return new (t || MentorRegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_5__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_6__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"])); };
MentorRegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentorRegistrationComponent, selectors: [["app-mentor-registration"]], decls: 56, vars: 9, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "margin-left", "5px"], ["src", "/assets/img/header.png", "width", "60px", "height", "60px"], [1, "main-div"], [2, "margin-left", "150px", "margin-bottom", "50px", "margin-top", "20px"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["rowHeight", "300px", 3, "cols"], [1, "form-container"], [1, "id"], ["id", "email", "matInput", "", "disabled", "", "formControlName", "email", "placeholder", "Enter your Email"], ["id", "name", "matInput", "", "formControlName", "name", "placeholder", "Enter your name", 3, "ngModel", "ngModelChange"], ["id", "phoneNumber", "matInput", "", "formControlName", "phoneNumber", "placeholder", "Enter your phoneNumber", 3, "ngModel", "ngModelChange"], ["formControlName", "subject", "multiple", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "startTime"], ["formControlName", "endTime"], ["id", "class", "matInput", "", "formControlName", "qualification", "placeholder", "Enter your Qualification"], [1, "bottomrow", 2, "margin-left", "140px"], ["mat-button", "", "routerLink", "/mentor-profile", "type", "submit", 1, "mat-raised-button", "mat-primary", 3, "disabled", "click"], [2, "color", "white"], ["href", "", 2, "color", "white"], [3, "value"]], template: function MentorRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Let's first create your profile!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MentorRegistrationComponent_Template_form_ngSubmit_9_listener() { return ctx.updateForm.valid; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-grid-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MentorRegistrationComponent_Template_input_ngModelChange_18_listener($event) { return ctx.mentor.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MentorRegistrationComponent_Template_input_ngModelChange_21_listener($event) { return ctx.mentor.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MentorRegistrationComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.mentor.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MentorRegistrationComponent_mat_option_27_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "I will be available from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MentorRegistrationComponent_mat_option_35_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "I will be available upto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MentorRegistrationComponent_mat_option_41_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MentorRegistrationComponent_Template_button_click_46_listener() { return ctx.OnSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mentor.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mentor.phoneNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mentor.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.time11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.time11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.updateForm.valid);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: ["mat-slider[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    bottom: 0;\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nmat-slider[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    left: 0;\r\n    bottom: 0;\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    width: 700px;\r\n    height: 500px;\r\n    \r\n}\r\n\r\n.main-div[_ngcontent-%COMP%]{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%]{ \r\n    width:100%;\r\n    padding:0%;\r\n}\r\n\r\n.id1[_ngcontent-%COMP%]{\r\n    padding: 100px;\r\n    margin:100px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.id[_ngcontent-%COMP%]{\r\nmargin-left: 60px;\r\n}\r\n\r\n#abc[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n\r\n#abc[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yLXJlZ2lzdHJhdGlvbi9tZW50b3ItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtJQUNaOztBQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZjs7QUFDUjtJQUNJLE9BQU87SUFDUCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksT0FBTztJQUNQLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBQ0E7SUFDSSxlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvbWVudG9yLXJlZ2lzdHJhdGlvbi9tZW50b3ItcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LXNsaWRlciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuc3BhbntcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4jYmFyMTpmb2N1c3tcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgICNiYXIxOmhvdmVye1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5mb290ZXIge1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5tYXQtc2xpZGVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG5zcGFue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxubWF0LWNhcmR7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAvKiBib3JkZXI6IDE1cHggc29saWQgdGVhbDsgKi9cclxufVxyXG4ubWFpbi1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXJ7IFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHBhZGRpbmc6MCU7XHJcbn0gXHJcbi5pZDF7XHJcbiAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgIG1hcmdpbjoxMDBweDtcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWR7XHJcbm1hcmdpbi1sZWZ0OiA2MHB4O1xyXG59XHJcbiNhYmM6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICNhYmM6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentorRegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mentor-registration',
                templateUrl: './mentor-registration.component.html',
                styleUrls: ['./mentor-registration.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_5__["StudentProfileService"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_6__["MentorProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "isCG":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_feedback_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/feedback.model */ "lNcl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../session.service */ "ILAa");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feedback.service */ "dSdR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");


















const _c0 = function (a0) { return { "selected": a0 }; };
function FeedbackComponent_ul_26_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_ul_26_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const star_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.countStar(star_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const star_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, star_r3 <= ctx_r2.selectedValue));
} }
class FeedbackComponent {
    constructor(_route, mps, ss, Fservice, formBuilder, studentProfileService, router) {
        this._route = _route;
        this.mps = mps;
        this.ss = ss;
        this.Fservice = Fservice;
        this.formBuilder = formBuilder;
        this.studentProfileService = studentProfileService;
        this.router = router;
        this.name = this.studentProfileService.abc().split('@')[0].toUpperCase();
        this.stars = [1, 2, 3, 4, 5];
        this.feedback = new _models_feedback_model__WEBPACK_IMPORTED_MODULE_2__["Feedback"]();
        this.avatar = this.name.charAt(0).toUpperCase();
        this._route.params.subscribe(params => {
            console.log("params", params["sid"]);
            this.sessionId = params["sid"];
        });
    }
    ngOnInit() {
        this.feedbackForm = this.formBuilder.group({
            'comment': [this.feedback.comment]
        });
        // this.feedback.email = "vishalkapoor1@gmail.com";
        let abc = this.ss.getSessionbyID(this.sessionId).subscribe(data => {
            this.session = data;
            this.feedback.email = this.session.teacherEmail;
            console.log(this.feedback.email);
        });
    }
    countStar(star) {
        this.selectedValue = star;
        console.log('Value of star', star);
        console.log(star);
        this.feedback.rating = star;
    }
    onSubmit() {
        this.Fservice.saveFeedback(this.feedback).subscribe(data => this.feedback = data);
        this.router.navigate(['/student-profile']);
    }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_4__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_6__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_8__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 42, vars: 6, consts: [["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "width", "50px", "height", "50px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/student-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], ["cols", "1", "rowHeight", "100%"], [2, "font-size", "170%"], [2, "margin-top", "20px", "padding", "0px"], ["class", "list-inline rating-list", "style", "display: inline-block; padding-left: 0px; padding-right: 35px;", 4, "ngFor", "ngForOf"], [2, "margin-top", "40px"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 2, "width", "400px"], ["id", "comment", "matInput", "", "formControlName", "comment", "placeholder", "Comments", 3, "ngModel", "ngModelChange"], ["type", "submit", "mat-raised-button", "", "color", "primary", 2, "margin-left", "300px"], [2, "color", "white"], ["href", "", 2, "color", "white"], [1, "list-inline", "rating-list", 2, "display", "inline-block", "padding-left", "0px", "padding-right", "35px"], [3, "ngClass", "click"], [1, "fa", "fa-star", "fa-2x", 2, "padding", "0px", "margin", "0px"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_17_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-grid-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Your feedback is valuable to us!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FeedbackComponent_ul_26_Template, 3, 3, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FeedbackComponent_Template_form_ngSubmit_28_listener() { return ctx.feedbackForm.valid && ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackComponent_Template_input_ngModelChange_30_listener($event) { return ctx.feedback.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "footer", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.feedbackForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.feedback.comment);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n    \r\n}\r\nspan[_ngcontent-%COMP%]{\r\n    margin-right: 1rem;\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n.rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #ddd;\r\n    padding: 10px 5px;\r\n  \r\n  }\r\n.rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    ~ li[_ngcontent-%COMP%], .rating-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n    color: #ffd700;\r\n  }\r\n.rating-list[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    list-style: none;\r\n  }\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n  }\r\nbutton.mat-menu-item[_ngcontent-%COMP%]{\r\n    outline: none;\r\n  }\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\r\n#abc[_ngcontent-%COMP%]:hover{\r\n          cursor: pointer;\r\n        }\r\n#abc[_ngcontent-%COMP%]:focus{\r\n          outline: none;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4Qjs7QUFFbEM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjs7RUFFbkI7QUFFQTs7SUFFRSxjQUFjO0VBQ2hCO0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7QUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNBO0lBQ0UsWUFBWTtJQUNaO0FBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmO0FBRUE7VUFDRSxlQUFlO1FBQ2pCO0FBQ0E7VUFDRSxhQUFhO1FBQ2YiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59XHJcbnNwYW57XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5yYXRpbmctbGlzdCBsaSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2RkZDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAucmF0aW5nLWxpc3QgbGk6aG92ZXIsXHJcbiAgLnJhdGluZy1saXN0IGxpOmhvdmVyIH4gbGksIC5yYXRpbmctbGlzdCBsaS5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogI2ZmZDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLnJhdGluZy1saXN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIGZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgYnV0dG9uLm1hdC1tZW51LWl0ZW17XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAjYmFyMTpmb2N1c3tcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuICAgICNiYXIxOmhvdmVye1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjYWJjOmhvdmVye1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjYWJjOmZvY3Vze1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_4__["MentorProfileService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }, { type: _feedback_service__WEBPACK_IMPORTED_MODULE_6__["FeedbackService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_8__["StudentProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "jTSy":
/*!******************************************!*\
  !*** ./src/app/models/register.model.ts ***!
  \******************************************/
/*! exports provided: RegisterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModel", function() { return RegisterModel; });
class RegisterModel {
}


/***/ }),

/***/ "lNcl":
/*!******************************************!*\
  !*** ./src/app/models/feedback.model.ts ***!
  \******************************************/
/*! exports provided: Feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
class Feedback {
}


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");








class LandingPageComponent {
    constructor() { }
    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set("email", "vishalkapoorbkn@gmail.com");
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set("role", "S");
    }
    // tslint:disable-next-line: typedef
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 50, vars: 1, consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"], ["color", "primary", 1, "navbar"], ["routerLink", "", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "alt", "Nimbleguru", "width", "60px", "height", "60px"], ["routerLink", "/login", "mat-button", ""], ["routerLink", "/student-registration", "mat-raised-button", ""], [2, "background-image", "url(/assets/img/BG.png)"], [1, "discription"], ["rowHeight", "1:1", 3, "cols", "resize"], ["alt", "Logo", "src", "/assets/img/LogoSerbo-Recovered copy.png "], ["routerLink", "/home", "mat-raised-button", "", "color", "primary"], ["routerLink", "/feedback/123", "mat-raised-button", "", "color", "primary"], ["routerLink", "/student-profile", "mat-raised-button", "", "color", "primary"], ["routerLink", "/login", "mat-raised-button", "", "color", "primary"], ["routerLink", "/student-registration", "mat-raised-button", "", "color", "primary"], ["routerLink", "**", "mat-raised-button", "", "color", "primary"], [2, "color", "white"], ["href", "", 2, "color", "white"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "body", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function LandingPageComponent_Template_mat_grid_list_resize_15_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Where Doubt Get Resolved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Welcome to Nimbleguru! This is a static website, so you can access some of the features via buttons below. Actual product contains spring backend and Rest APIs too. Chat functionality will work using websockets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Registeration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00A0 \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Error page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.breakpoint);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n}\r\n\r\nmat-grid-list[_ngcontent-%COMP%]{\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n}\r\n\r\nmat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:3rem;\r\n    font-weight: 900;\r\n    color: rgb(12, 5, 51)\r\n\r\n}\r\n\r\nmat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.25rem;\r\n    color: #323648;\r\n}\r\n\r\n.tile-image[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    \r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 767.98px) { \r\n    mat-grid-list[_ngcontent-%COMP%]{\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    } \r\n    .tile-image[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    mat-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size:1.5rem;\r\n    }\r\n    mat-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.1rem;\r\n    }\r\n    footer[_ngcontent-%COMP%]{\r\n        margin-top: 100px;\r\n    }\r\n    img[_ngcontent-%COMP%]{\r\n        background-repeat: initial;\r\n    }\r\n }\r\n\r\n#bar1[_ngcontent-%COMP%]{\r\n     cursor: pointer;\r\n }\r\n\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7O0FBRUo7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0NBQ0g7O0FBQ0E7S0FDSSxlQUFlO0NBQ25COztBQUNBO0lBQ0csWUFBWTtJQUNaOztBQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59IFxyXG5cclxubWF0LWxpc3QgaDF7XHJcbiAgICBmb250LXNpemU6M3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogcmdiKDEyLCA1LCA1MSlcclxuXHJcbn1cclxubWF0LWxpc3QgcHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiAjMzIzNjQ4O1xyXG59XHJcblxyXG4udGlsZS1pbWFnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgXHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vKiBtZWRpYSBxdWVyeSBmb3IgcmVzcG9uc2l2ZSBwYWdlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkgeyBcclxuICAgIG1hdC1ncmlkLWxpc3R7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH0gXHJcbiAgICAudGlsZS1pbWFnZXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBtYXQtbGlzdCBoMXtcclxuICAgICAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgfVxyXG4gICAgbWF0LWxpc3QgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIGZvb3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogaW5pdGlhbDtcclxuICAgIH1cclxuIH1cclxuICNiYXIxe1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuICNiYXIxOmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG4gICAgI2JhcjE6aG92ZXJ7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oL3h":
/*!****************************************************************!*\
  !*** ./src/app/chat-application/chat-application.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatApplicationComponent", function() { return ChatApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/message.model */ "4Em8");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stompjs */ "dNE1");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sockjs-client */ "zH15");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../session.service */ "ILAa");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");














class ChatApplicationComponent {
    constructor(service, router, ms, ss, _route) {
        this.service = service;
        this.router = router;
        this.ms = ms;
        this.ss = ss;
        this._route = _route;
        this.CurrentsessionId = this.ms.getSessionId();
        this.receivedMessage = new _models_message_model__WEBPACK_IMPORTED_MODULE_1__["MessageModel"]();
        this.senderEmail = this.service.abc().split('@')[0];
        //  email2:String=this.ms.getMentorEmail();
        this.serverUrl = 'http://localhost:8089/socket';
        // private serverUrl = 'http://localhost:8080/mentor-platfrom-service/socket'
        this.title = 'WebSockets chat';
        this.name = this.service.abc().split('@')[0].toUpperCase();
        this.avatar = this.name.charAt(0).toUpperCase();
        this.onClick = (e) => {
            console.log(e);
            console.log(this.sid);
            // this.ss.endSession(this.sid).subscribe(data=>{
            //   this.session=data;
            //   console.log(data);
            // })
            if (this.service.getRole() == 'M') {
                this.ss.endSession(this.sid).subscribe(data => {
                    this.session = data;
                    console.log(data);
                });
                this.router.navigate(['/frequently-asked-questions']);
            }
            else {
                this.router.navigate([`feedback/${this.sid}`]);
            }
        };
        this.initializeWebSocketConnection();
        // this.email1=this.service.abc();
    }
    initializeWebSocketConnection() {
        this._route.params.subscribe(params => {
            console.log("params", params["id"]);
            this.sid = params["id"];
        });
        // this.ss.getMentorEmail(this.service.abc(),"Active").subscribe(data=>{
        //   this.session=data;
        //   this.sid=this.session.sessionId;
        //   console.log(this.session.sessionId);
        // });
        console.log("dcnkjcnkvnfdk" + this.CurrentsessionId);
        const ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__(this.serverUrl);
        this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
        const that = this;
        this.stompClient.connect({}, function (frame) {
            that.stompClient.subscribe(`/chat/${that.sid}`, (message) => {
                that.receivedMessage = JSON.parse(message.body);
                if (message) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".chat").append("<div style='background-color:wite;color:black;padding:5px;font-size:14px; font-weight:600; text-transform:capitalize' class='message'>" + that.receivedMessage.userName + " " + "<span style='background-color:white;color:grey;padding:5px;font-size:14px' >" + that.receivedMessage.timeStamp + "</span>" + "</div>")
                        .append("<div style='background-color:white;color:black;padding:5px;font-size:18px; padding-left:5px' class='message'> " + that.receivedMessage.messageContent + "</div>");
                }
            });
        });
    }
    sendMessage(msg) {
        this.receivedMessage.userName = this.senderEmail;
        //  this.message1.receiver=this.email2;
        this.receivedMessage.messageContent = msg;
        const send = {
            sender: this.senderEmail,
            // receiver:this.email2,
            content: msg
        };
        console.log('hello ' + JSON.stringify(this.receivedMessage));
        //console.log("ddd"+this.session.sessionId);
        this.stompClient.send(`/app/send/message/${this.sid}`, {}, JSON.stringify(this.receivedMessage));
        jquery__WEBPACK_IMPORTED_MODULE_4__('#input').val('');
    }
    endChat() {
    }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
}
ChatApplicationComponent.ɵfac = function ChatApplicationComponent_Factory(t) { return new (t || ChatApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_6__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_8__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
ChatApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatApplicationComponent, selectors: [["app-chat-application"]], decls: 41, vars: 3, consts: [["color", "primary", 1, "navbar"], ["routerLink", "/", "id", "bar1", 2, "width", "30%"], ["src", "/assets/img/header.png", "width", "50px", "height", "50px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/student-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], [2, "background-image", "url('/assets/img/BG.png')"], [2, "text-align", "center"], [2, "font-weight", "600"], [1, "chat-container"], [1, "chat", 2, "background-color", "white"], [1, "message"], [2, "padding", "15px 0px 0px 0px"], [1, "send-button"], ["id", "input", "placeHolder", "This will work using websockets.", "type", "text"], ["input", ""], ["mat-raised-button", "", "color", "primary", "id", "asdf", 3, "click"], ["id", "myButton", "mat-raised-button", "", "color", "warn", 3, "click"], [2, "color", "white"], ["href", "", 2, "color", "white"]], template: function ChatApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatApplicationComponent_Template_button_click_16_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "body", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Conversation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatApplicationComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.sendMessage(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatApplicationComponent_Template_button_click_31_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "End Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"]], styles: [".chat-container[_ngcontent-%COMP%]{\r\n  float: middle;\r\n\r\n  height: 29vw;\r\n  width: 70vw;\r\n  overflow: scroll;\r\n  overflow-x: hidden;\r\n  background: white;\r\n\r\n  margin-left: 250px;\r\n}\r\nbutton.mat-menu-item[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\n.navbar[_ngcontent-%COMP%]{\r\n\r\n  justify-content: space-between;\r\n}\r\n.chat[_ngcontent-%COMP%]{\r\n  text-align: left;\r\n  margin: 0 ;\r\n  width: 80%;\r\n  height: 100%;\r\n  background: white;\r\n\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  padding-top: 40px;\r\n}\r\n.send-button[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  height: 70%;\r\n  width: 50%;\r\n  \r\n}\r\n#input[_ngcontent-%COMP%]{\r\n  float: middle;\r\n  height: 80px;\r\n  border-radius: 15px;\r\n  font-size: 1.5em;\r\n  width: 600px;\r\n  margin-bottom: 10px;\r\n}\r\n#input[_ngcontent-%COMP%]:focus{\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  background: teal;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n}\r\n#abc[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n}\r\n#abc[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\nbutton.mat-menu-item[_ngcontent-%COMP%]{\r\n  outline: none;\r\n}\r\n#asdf[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  margin-left: 10px;\r\n  width: 70px;\r\n}\r\n.class-button[_ngcontent-%COMP%]{\r\n  justify-content: space-between;\r\n}\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n  outline:none;\r\n  }\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n      outline:none;\r\n      cursor: pointer;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1hcHBsaWNhdGlvbi9jaGF0LWFwcGxpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhOztFQUViLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCOztBQUVuQjtBQUVBOzs7Ozs7O0dBT0c7QUFDSDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVOztBQUVaO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBOzs7Ozs7Ozs7O0dBVUc7QUFDSDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFlBQVk7RUFDWjtBQUNBO01BQ0ksWUFBWTtNQUNaLGVBQWU7TUFDZiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtYXBwbGljYXRpb24vY2hhdC1hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29udGFpbmVye1xyXG4gIGZsb2F0OiBtaWRkbGU7XHJcblxyXG4gIGhlaWdodDogMjl2dztcclxuICB3aWR0aDogNzB2dztcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xyXG59XHJcbmJ1dHRvbi5tYXQtbWVudS1pdGVte1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5hdmJhcntcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5jaGF0e1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIDtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi8qIC5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59ICovXHJcbmgxe1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi5zZW5kLWJ1dHRvbntcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDcwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIFxyXG59XHJcbiNpbnB1dHtcclxuICBmbG9hdDogbWlkZGxlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2lucHV0OmZvY3Vze1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiAuc2VuZHtcclxuICBmbG9hdDogbWlkZGxlO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvc2VuZC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMzBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxufSAqL1xyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbiNhYmM6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNhYmM6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5idXR0b24ubWF0LW1lbnUtaXRlbXtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNhc2Rme1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG4uY2xhc3MtYnV0dG9ue1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4jYmFyMTpmb2N1c3tcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gICNiYXIxOmhvdmVye1xyXG4gICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-application',
                templateUrl: './chat-application.component.html',
                styleUrls: ['./chat-application.component.css']
            }]
    }], function () { return [{ type: _student_profile_service__WEBPACK_IMPORTED_MODULE_6__["StudentProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_8__["MentorProfileService"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 10, vars: 0, consts: [["routerLink", "", "mat-raised-button", "", "color", "primary"], [1, "wrapper"], ["preload", "auto", "crossorigin", "", "loop", "", "autoplay", "", "onmouseout", "this.pause();", 1, "videoInsert"], ["src", "/assets/img/Logo video.mp4 ", "type", "video/mp4"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go to Homepage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "video", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.videoInsert[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\nmargin-left: 45%;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\r\n@media (max-width: 700px) { \r\n\r\n    button[_ngcontent-%COMP%]{\r\n        size: 10%;\r\n    }\r\n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{\r\n        font-size: 100%;\r\n        align-items: center;\r\n    }\r\n    .videoInsert[_ngcontent-%COMP%]{\r\n        width: 50%;\r\n    }\r\n    button[_ngcontent-%COMP%]{\r\n        margin-left: 35%;\r\n        }\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaO0FBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmO0FBRVI7O0lBRUk7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCOztDQUVQIiwiZmlsZSI6InNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLGgyLC53cmFwcGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi52aWRlb0luc2VydHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuaDF7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuYnV0dG9ue1xyXG5tYXJnaW4tbGVmdDogNDUlO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuI2JhcjE6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICB9XHJcbiAgICAjYmFyMTpob3ZlcntcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkgeyBcclxuXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgc2l6ZTogMTAlO1xyXG4gICAgfVxyXG4gICAgaDEsIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvSW5zZXJ0e1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgICAgICB9XHJcblxyXG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sBAM":
/*!*************************************!*\
  !*** ./src/app/models/faq.model.ts ***!
  \*************************************/
/*! exports provided: FAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
class FAQ {
}


/***/ }),

/***/ "u2EL":
/*!************************************************************!*\
  !*** ./src/app/mentor-profile/mentor-profile.component.ts ***!
  \************************************************************/
/*! exports provided: MentorProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorProfileComponent", function() { return MentorProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../update-profile/update-profile.component */ "8Dg9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _services_messaging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/messaging.service */ "c7tv");
/* harmony import */ var _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stomp/ng2-stompjs */ "MWWs");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "Ampu");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _PagerService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../PagerService */ "EDYx");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _mentor_profile_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mentor-profile.service */ "SVIp");
/* harmony import */ var _student_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../student-profile.service */ "JWvG");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../session.service */ "ILAa");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




// import { AuthenticationService } from '../services/authentication.service';






















function MentorProfileComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
const _c0 = function (a1) { return ["/history", a1]; };
function MentorProfileComponent_ng_template_70_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", session_r9.query.charAt(0).toUpperCase() + session_r9.query.substr(1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Subject:\u00A0", session_r9.subject, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 MentorEmail:\u00A0", session_r9.teacherEmail, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, session_r9.sessionId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Duration:\u00A0", session_r9.duration, " \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 Taken on:\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 6, session_r9.startTime, "dd MMM, yyyy"), "");
} }
const _c1 = function () { return [3, 10, 25, 100]; };
function MentorProfileComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MentorProfileComponent_ng_template_70_mat_card_1_Template, 15, 11, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-paginator", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r5.obs));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
} }
function MentorProfileComponent_ng_template_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You haven't taken any session yet!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Please wait, we will be redirecting a student to you soon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const WEBSOCKET_URL = 'ws://localhost:8082/socket';
// const WEBSOCKET_URL = 'ws:/localhost:8080/mentor-profile-service/socket';
const EXAMPLE_URL = '/topic/server-broadcaster';
class MentorProfileComponent {
    // CurrentSessionId = this.MentorProfileService.getSessionId();
    constructor(changeDetectorRef, http, pagerService, snackbar, MentorProfileService, service, dialog, authenticate, router, ss) {
        this.changeDetectorRef = changeDetectorRef;
        this.http = http;
        this.pagerService = pagerService;
        this.snackbar = snackbar;
        this.MentorProfileService = MentorProfileService;
        this.service = service;
        this.dialog = dialog;
        this.authenticate = authenticate;
        this.router = router;
        this.ss = ss;
        this.name = this.service.abc().split('@')[0].toUpperCase();
        this.state = 'NOT CONNECTED';
        this.subject = 'Maths';
        this.isShow = true;
        this.avatar = this.name.charAt(0).toUpperCase();
        this.email = this.service.abc();
        this.pager = {};
        this.messagingService = new _services_messaging_service__WEBPACK_IMPORTED_MODULE_3__["MessagingService"](WEBSOCKET_URL, EXAMPLE_URL);
        this.MentorProfileService.getSessionByEmail(this.email).subscribe(x => {
            this.sessionArray = x;
            // dataSource: MatTableDataSource<Session> = new MatTableDataSource<Session>(this.sessionArray);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.sessionArray);
            console.log(this.sessionArray);
            console.log(this.dataSource);
            this.changeDetectorRef.detectChanges();
            this.dataSource.paginator = this.paginator;
            this.obs = this.dataSource.connect();
        });
        // Subscribe to its stream (to listen on messages)
        this.messagingService.stream().subscribe((message) => {
            this.messageHistory = message.body;
            this.isShow = true;
            this.ss.getMentorEmail(this.service.abc(), "Active").subscribe(data => {
                this.session = data;
                console.log("hello" + this.session.sessionId);
                this.snackbar
                    // tslint:disable-next-line: max-line-length
                    .open((message.body + ''), 'Connect', {
                    verticalPosition: 'top',
                })
                    .onAction()
                    .subscribe(() => this.router.navigate([`/chat/${this.session.sessionId}`]));
                console.log("vkvkvkvk" + this.MentorProfileService.getSessionId());
                console.log(message);
            });
        });
        // Subscribe to its state (to know its connected or not)
        this.messagingService.state().subscribe((state) => {
            this.state = _stomp_ng2_stompjs__WEBPACK_IMPORTED_MODULE_4__["StompState"][state];
        });
    }
    ngOnInit() {
        // this.http.get(`http://localhost:8086/session/${this.email}`).subscribe(data => {
        //     // set items to json response
        //     this.allItems = data;
        //     console.log(this.allItems);
        //     // initialize to page 1
        //     this.setPage(1);
        // });
        //   this.http.get(`http://localhost:8089/sessions/${this.email}`).subscribe(x => {this.sessionArray = x;
        //   // dataSource: MatTableDataSource<Session> = new MatTableDataSource<Session>(this.sessionArray);
        //   this.dataSource = new MatTableDataSource<Session>(this.sessionArray);
        //   console.log(this.sessionArray);
        //   console.log(this.dataSource);
        // });
        console.log(this.email);
        this.MentorProfileService.getByEmail(this.email).subscribe(data => this.mentor = data);
        ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('sessionId', this.MentorProfileService.getSessionId());
        //  console.log(this.mentor1);
        // this.messagingService.getSubject(this.subject).subscribe(data => this.)
    }
    ngOnChanges() {
        this.isShow = false;
    }
    OnCreate() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        //  this.MentorProfileService.populatedForm(row);
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_1__["UpdateProfileComponent"], dialogConfig);
    }
    // sendAction() {
    //   console.log('Sending message');
    //   this.messagingService.send('/server-receiver', {
    //     text: 'This is cool',
    //     text2: 'I\'m so happy!'
    //   });
    // }
    Logout() {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].deleteAll();
        sessionStorage.clear();
    }
    //   setPage(page: number) {
    //     if (page < 1 || page > this.pager.totalPages) {
    //         return;
    //     }
    //     // get pager object from service
    //     this.pager = this.pagerService.getPager(this.allItems.length, page);
    //     // get current page of items
    //     this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // }
    ngOnDestroy() {
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
    }
}
MentorProfileComponent.ɵfac = function MentorProfileComponent_Factory(t) { return new (t || MentorProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_PagerService__WEBPACK_IMPORTED_MODULE_9__["PagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mentor_profile_service__WEBPACK_IMPORTED_MODULE_11__["MentorProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_student_profile_service__WEBPACK_IMPORTED_MODULE_12__["StudentProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"])); };
MentorProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentorProfileComponent, selectors: [["app-mentor-profile"]], viewQuery: function MentorProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 82, vars: 13, consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"], ["color", "primary", 1, "navbar"], ["routerLink", "/", "id", "bar1", 2, "margin-left", "5px"], ["src", "/assets/img/header.png", "width", "60px", "height", "60px"], [2, "font-size", "70%"], ["mat-button", "", "id", "abc", 3, "matMenuTriggerFor"], ["menuTrigger", ""], [2, "width", "40px", "height", "40px", "background-color", "#95DBEF", "border-radius", "20px", "margin-right", "12px"], [2, "font-size", "17px", "padding", "7px", "padding-top", "3px", "color", "black"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/mentor-profile"], ["mat-menu-item", "", "routerLink", "/", 3, "click"], ["cols", "12", "rowHeight", "100%"], ["colspan", "3"], [2, "background-color", "black"], ["role", "list"], ["role", "listitem"], [2, "width", "100px", "height", "100px", "background-color", "#95DBEF", "border-radius", "50px", "margin-bottom", "30px", "margin-left", "50px"], [2, "font-size", "60px", "padding", "30px", "padding-top", "3px", "color", "black"], ["name1", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["colspan", "9"], ["role", "list", "id", "list1"], ["role", "listitem", 2, "height", "auto", "margin-left", "37.5%"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [2, "color", "white"], ["href", "", 2, "color", "white"], [1, "scrollable"], ["class", "example-session", 4, "ngFor", "ngForOf"], [3, "pageSizeOptions"], [1, "example-session"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-button", "", 2, "float", "right", "margin-bottom", "100px"], [1, "fa", "fa-play-circle", "fa-3x", 3, "routerLink"], [2, "font-size", "26px", "font-weight", "600"], [2, "font-size", "26px"]], template: function MentorProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nimbleguru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MentorProfileComponent_Template_button_click_17_listener() { return ctx.Logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-grid-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-grid-tile-header", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-list-item", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Phone Number : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Subject :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Qualification :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Rating :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MentorProfileComponent_Template_button_click_62_listener() { return ctx.OnCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-grid-tile", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-grid-tile-header", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "My Previous Connects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-list", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "mat-list-item", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, MentorProfileComponent_div_69_Template, 1, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, MentorProfileComponent_ng_template_70_Template, 4, 5, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MentorProfileComponent_ng_template_72_Template, 4, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "footer", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Copyright \u00A9 Sergbo All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Privacy Statement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mentor == null ? null : ctx.mentor.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.mentor == null ? null : ctx.mentor.phoneNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mentor == null ? null : ctx.mentor.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mentor == null ? null : ctx.mentor.subject, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mentor == null ? null : ctx.mentor.qualification, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mentor == null ? null : ctx.mentor.rating, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sessionArray.length != 0)("ngIfThen", _r4)("ngIfElse", _r6);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTileText"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTileHeaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["DatePipe"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    justify-content: space-between;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    margin-right: 1rem;\r\n  }\r\n\r\nbutton.mat-menu-item[_ngcontent-%COMP%]{\r\n    outline: none;\r\n  }\r\n\r\n#bar1[_ngcontent-%COMP%]:focus{\r\n    outline:none;\r\n    }\r\n\r\n#bar1[_ngcontent-%COMP%]:hover{\r\n        outline:none;\r\n        cursor: pointer;\r\n        }\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n    background: teal;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n    height: 70%;\r\n    margin: 5px;\r\n    width: 800px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n}\r\n\r\n#abc[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n  }\r\n\r\n#abc[_ngcontent-%COMP%]:focus{\r\n    outline: none;\r\n  }\r\n\r\n#xyz[_ngcontent-%COMP%]:hover{\r\n    outline: none;\r\n    cursor: pointer;\r\n    background-color:white ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudG9yLXByb2ZpbGUvbWVudG9yLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLFlBQVk7SUFDWjs7QUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2Y7O0FBRVI7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxlQUFlO0VBQ2pCOztBQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9tZW50b3ItcHJvZmlsZS9tZW50b3ItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBidXR0b24ubWF0LW1lbnUtaXRlbXtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICNiYXIxOmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG4gICAgI2JhcjE6aG92ZXJ7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4jYWJjOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAjYWJjOmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gICN4eXo6aG92ZXJ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSA7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentorProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mentor-profile',
                templateUrl: './mentor-profile.component.html',
                styleUrls: ['./mentor-profile.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }, { type: _PagerService__WEBPACK_IMPORTED_MODULE_9__["PagerService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }, { type: _mentor_profile_service__WEBPACK_IMPORTED_MODULE_11__["MentorProfileService"] }, { type: _student_profile_service__WEBPACK_IMPORTED_MODULE_12__["StudentProfileService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_13__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: _session_service__WEBPACK_IMPORTED_MODULE_15__["SessionService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_application_chat_application_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-application/chat-application.component */ "oL3h");
/* harmony import */ var _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-history/chat-history.component */ "W/kM");
/* harmony import */ var _faq_by_subject_faq_by_subject_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq-by-subject/faq-by-subject.component */ "hLln");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq/faq.component */ "gN+M");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback/feedback.component */ "isCG");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "Oh3b");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _log_in_page_log_in_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./log-in-page/log-in-page.component */ "Edfc");
/* harmony import */ var _mentor_profile_mentor_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mentor-profile/mentor-profile.component */ "u2EL");
/* harmony import */ var _mentor_registration_mentor_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mentor-registration/mentor-registration.component */ "iIhx");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _registeration_page_registeration_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registeration-page/registeration-page.component */ "ZEpQ");
/* harmony import */ var _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student-profile/student-profile.component */ "X0bx");
/* harmony import */ var _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-profile/update-profile.component */ "8Dg9");





//import { ChatHistoryComponent } from './chat-history/chat-history.component';













const routes = [
    { path: "student-profile", component: _student_profile_student_profile_component__WEBPACK_IMPORTED_MODULE_14__["StudentProfileComponent"], },
    { path: "login", component: _log_in_page_log_in_page_component__WEBPACK_IMPORTED_MODULE_9__["LogInPageComponent"] },
    { path: "student-registration", component: _registeration_page_registeration_page_component__WEBPACK_IMPORTED_MODULE_13__["RegisterationPageComponent"] },
    { path: "home", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"], },
    { path: "mentor-profile", component: _mentor_profile_mentor_profile_component__WEBPACK_IMPORTED_MODULE_10__["MentorProfileComponent"], },
    { path: 'feedback/:sid', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_6__["FeedbackComponent"], },
    { path: "update-profile", component: _update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_15__["UpdateProfileComponent"], },
    { path: "frequently-asked-questions", component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_5__["FaqComponent"], },
    { path: "chat/:id", component: _chat_application_chat_application_component__WEBPACK_IMPORTED_MODULE_2__["ChatApplicationComponent"], },
    { path: "mentor-registration", component: _mentor_registration_mentor_registration_component__WEBPACK_IMPORTED_MODULE_11__["MentorRegistrationComponent"], },
    { path: "faq/:subject", component: _faq_by_subject_faq_by_subject_component__WEBPACK_IMPORTED_MODULE_4__["FaqBySubjectComponent"], },
    { path: "history/:sessionId", component: _chat_history_chat_history_component__WEBPACK_IMPORTED_MODULE_3__["ChatHistoryComponent"], },
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
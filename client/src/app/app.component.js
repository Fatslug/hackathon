"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angular_test_1 = require('./angular-test');
var angularfire2_1 = require('angularfire2');
var AppComponent = (function () {
    function AppComponent(af) {
        this.af = af;
        this.title = 'app works!';
        this.af.auth.subscribe(function (auth) { return console.log(auth); });
        this.items = af.database.list('/items');
    }
    AppComponent.prototype.login = function () {
        this.af.auth.login();
    };
    AppComponent.prototype.pushData = function (userId) {
        this.items.push({
            "value": userId
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [angular_test_1.AngularTestComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

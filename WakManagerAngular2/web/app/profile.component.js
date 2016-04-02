System.register(['angular2/core', 'angular2/router', 'wakanda-client/browser/no-promise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, no_promise_1;
    var ProfileComponent, userID;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (no_promise_1_1) {
                no_promise_1 = no_promise_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent() {
                    var _this = this;
                    this.info = { photo: {} };
                    this.notEditable = true;
                    var client = new no_promise_1.default();
                    client.getCatalog().then(function (ds) {
                        console.log(userID);
                        ds.Users.find(userID).then(function (result) {
                            console.log(result.firstname);
                            _this.info = result;
                        });
                    });
                }
                ProfileComponent.prototype.save = function () {
                    var _this = this;
                    this.notEditable = true;
                    var client = new no_promise_1.default();
                    client.getCatalog().then(function (ds) {
                        ds.Users.edit(userID, _this.info.firstname, _this.info.lastname, _this.info.country).then(function (result) {
                        });
                    });
                };
                ProfileComponent.prototype.logout = function () {
                    var client = new no_promise_1.default();
                    client.directory.logout().then(function (result) {
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/profile.component.html"
                    }),
                    router_1.CanActivate(function (next) {
                        var prom = new Promise(function (resolve, reject) {
                            var client = new no_promise_1.default();
                            client.directory.currentUser().then(function (result) {
                                userID = result.ID;
                                resolve(true);
                            }).catch(function (error) {
                                resolve(false);
                            });
                        });
                        return prom;
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map
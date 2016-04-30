System.register(["angular2/core", "angular2/router", "../index/index.component", "../flex/flex.component", "../docs/docs.component", "../../shared/services/options.service"], function(exports_1, context_1) {
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
    var core_1, router_1, index_component_1, flex_component_1, docs_component_1, options_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_component_1_1) {
                index_component_1 = index_component_1_1;
            },
            function (flex_component_1_1) {
                flex_component_1 = flex_component_1_1;
            },
            function (docs_component_1_1) {
                docs_component_1 = docs_component_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            AppComponent = (function () {
                function AppComponent(OptionsService) {
                    this.OptionsService = OptionsService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.OptionsService
                        .getOptions()
                        .subscribe(function (data) {
                        _this.OptionsService.blocks = data;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: "app/components/app/app.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        styleUrls: [
                            "app/components/app/app.component.css",
                            "app/shared/styles/body.css",
                            "app/shared/styles/btn.css"
                        ],
                        providers: [options_service_1.OptionsService, router_1.ROUTER_PROVIDERS],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    router_1.RouteConfig([
                        { path: "/", name: "Index", component: index_component_1.IndexComponent, useAsDefault: true },
                        { path: "/flex", name: "Flex", component: flex_component_1.FlexComponent },
                        { path: "/docs", name: "Docs", component: docs_component_1.DocsComponent }
                    ]), 
                    __metadata('design:paramtypes', [options_service_1.OptionsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

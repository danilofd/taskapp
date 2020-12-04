"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var datepicker_1 = require("@angular/material/datepicker");
var input_1 = require("@angular/material/input");
var core_2 = require("@angular/material/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var index_component_1 = require("./page/index/index.component");
var new_task_component_1 = require("./page/new-task/new-task.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                index_component_1.IndexComponent,
                new_task_component_1.NewTaskComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.NoopAnimationsModule,
                http_1.HttpClientModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                datepicker_1.MatDatepickerModule,
                input_1.MatInputModule,
                core_2.MatNativeDateModule,
                core_2.MatRippleModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

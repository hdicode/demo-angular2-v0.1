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
var timeline_service_1 = require('./timeline.service');
var Timelines2Component = (function () {
    function Timelines2Component(timelineService) {
        this.timelines = timelineService.getTimeline();
    }
    Timelines2Component = __decorate([
        core_1.Component({
            template: "\n        <div>\n            <div class=\"media\" *ngFor=\"let timeline of timelines\">\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">\n                        <span>{{ timeline.id }}</span><span class=\"dem-author\">{{ timeline.user.username }}</span>\n                    </h4>\n                    {{ timeline.title }}\n                </div>\n            </div>   \n        </div>\n    ",
            providers: [timeline_service_1.TimelineService]
        }), 
        __metadata('design:paramtypes', [timeline_service_1.TimelineService])
    ], Timelines2Component);
    return Timelines2Component;
}());
exports.Timelines2Component = Timelines2Component;
//# sourceMappingURL=timelines2.component.js.map
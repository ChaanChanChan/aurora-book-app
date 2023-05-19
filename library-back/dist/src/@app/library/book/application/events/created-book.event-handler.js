"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedBookEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const created_book_event_1 = require("./created-book.event");
let CreatedBookEventHandler = class CreatedBookEventHandler {
    handle(event) {
    }
};
CreatedBookEventHandler = __decorate([
    (0, cqrs_1.EventsHandler)(created_book_event_1.CreatedBookEvent)
], CreatedBookEventHandler);
exports.CreatedBookEventHandler = CreatedBookEventHandler;
//# sourceMappingURL=created-book.event-handler.js.map
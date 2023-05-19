"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedBooksEventHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const updated_books_event_1 = require("./updated-books.event");
let UpdatedBooksEventHandler = class UpdatedBooksEventHandler {
    handle(event) {
    }
};
UpdatedBooksEventHandler = __decorate([
    (0, cqrs_1.EventsHandler)(updated_books_event_1.UpdatedBooksEvent)
], UpdatedBooksEventHandler);
exports.UpdatedBooksEventHandler = UpdatedBooksEventHandler;
//# sourceMappingURL=updated-books.event-handler.js.map
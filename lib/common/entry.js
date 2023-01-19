"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineJSPlugins = void 0;
const inlinejs_animation_1 = require("@benbraide/inlinejs-animation");
const inlinejs_collections_1 = require("@benbraide/inlinejs-collections");
const inlinejs_moment_1 = require("@benbraide/inlinejs-moment");
const inlinejs_router_1 = require("@benbraide/inlinejs-router");
const inlinejs_screen_1 = require("@benbraide/inlinejs-screen");
const inlinejs_alert_1 = require("@benbraide/inlinejs-alert");
function InlineJSPlugins() {
    (0, inlinejs_animation_1.InlineJSAnimation)();
    (0, inlinejs_collections_1.InlineJSCollections)();
    (0, inlinejs_moment_1.InlineJSMoment)();
    (0, inlinejs_router_1.InlineJSRouter)();
    (0, inlinejs_screen_1.InlineJSScreen)();
    (0, inlinejs_alert_1.InlineJSAlert)();
}
exports.InlineJSPlugins = InlineJSPlugins;

import { InlineJSAnimation } from '@benbraide/inlinejs-animation';
import { InlineJSCollections } from '@benbraide/inlinejs-collections';
import { InlineJSMoment } from '@benbraide/inlinejs-moment';
import { InlineJSRouter } from '@benbraide/inlinejs-router';
import { InlineJSScreen } from '@benbraide/inlinejs-screen';
import { InlineJSAlert } from '@benbraide/inlinejs-alert';
export function InlineJSPlugins() {
    InlineJSAnimation();
    InlineJSCollections();
    InlineJSMoment();
    InlineJSRouter();
    InlineJSScreen();
    InlineJSAlert();
}

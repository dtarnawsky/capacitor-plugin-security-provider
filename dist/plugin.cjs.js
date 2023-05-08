'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorSecurityProvider = core.registerPlugin('CapacitorSecurityProvider', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorSecurityProviderWeb()),
});

class CapacitorSecurityProviderWeb extends core.WebPlugin {
    async installIfNeeded() {
        return { status: 'NotImplemented' };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorSecurityProviderWeb: CapacitorSecurityProviderWeb
});

exports.CapacitorSecurityProvider = CapacitorSecurityProvider;
//# sourceMappingURL=plugin.cjs.js.map

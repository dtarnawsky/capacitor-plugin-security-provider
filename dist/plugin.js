var capacitorCapacitorSecurityProvider = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode_1.commands.registerCommand('vscode-wechat.start', () => {
        const panel = vscode_1.window.createWebviewPanel('wechat', 'WeChat', vscode_1.ViewColumn.Active, {
            retainContextWhenHidden: true,
            enableScripts: true
        });
        panel.webview.html = '<script>location.href="https://wx.qq.com/"</script>';
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
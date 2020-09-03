import {
  ExtensionContext,
  ViewColumn,
  commands,
  window
} from 'vscode';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('vscode-wechat.start', () => {
      const panel = window.createWebviewPanel('wechat', 'WeChat', ViewColumn.Active, {
        retainContextWhenHidden: true,
        enableScripts: true
      });
      panel.webview.html = '<script>location.href="https://wx.qq.com/"</script>';
    })
  );
}

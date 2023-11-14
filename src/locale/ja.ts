import { Catalog, msg } from "@hi18n/core";
import type { Vocabulary } from ".";

export default new Catalog<Vocabulary>("ja", {
    // 凡例: "翻訳ID": msg(翻訳文字列),
    "success": msg("成功"),
    "info": msg("情報"),
    "warn": msg("警告"),
    "error": msg("エラー"),
    "valid": msg("有効"),
    "invalid": msg("無効"),
    "peaple": msg("人"),
    "unlimited": msg("無制限"),
    "executing": msg("実行中"),
    "stoping": msg("停止中"),
    "keyvs/set": msg("keyvを設定しました。namespace：{namespace}"),
    "keyvs/reset": msg("keyvをリセットしました。namespace：{namespace}"),
    "keyvs/delete": msg("keyvを削除しました。namespace：{namespace}"),
    "bot/ready": msg("{name}が起動しました。"),
    "bot/login/faild": msg("ログインに失敗しました。\n詳細：\n{error}"),
    "bot/config/reset": msg("Botの設定をリセットしました。"),
    "bot/createChannel/faild": msg("チャンネルの作成に失敗しました。"),
    "bot/vcAutoCreation/start": msg("VCの自動作成機能を開始しました。サーバー：{guild}"),
    "bot/vcAutoCreation/stop": msg("VCの自動作成機能を停止しました。サーバー：{guild}"),
    "bot/event/set": msg("Botのイベントを設定しました。イベント名：{name}"),
    "bot/vcAutoCreation/channelCreate": msg("VCの自動作成機能でチャンネルを作成しました。\nサーバー：{guild}\nチャンネル：{channel}"),
    "bot/vcAutoCreation/channelDelete": msg("VCの自動作成機能でチャンネルを削除しました。\nサーバー：{guild}\nチャンネル：{channel}"),
    "bot/vcAutoCreation/error/userMessage": msg("VCの自動管理機能でエラーが発生しました。\n詳細：\n{error}"),
    "bot/vcAutoCreation/error/logMessage": msg("VCの自動管理機能でエラーが発生しました。\nサーバー：{guild}\n詳細：\n{error}"),
    "bot/command/register/pre": msg("スラッシュコマンドを登録します。"),
    "bot/command/register/complated": msg("スラッシュコマンドの登録が完了しました。"),
    "bot/command/register/faild": msg("スラッシュコマンドの登録に失敗しました。\n詳細：\n{error}"),
    "bot/command/notFound": msg("一致するコマンドが見つかりませんでした。コマンド：{command}"),
    "bot/command/cooldown": msg("このコマンドは{cooldown}秒後に使用可能です。"),
    "bot/command/execute/success": msg("スラッシュコマンドの実行に成功しました。\nコマンド：{command}\nサーバー：{guild}"),
    "bot/command/execute/faild": msg("スラッシュコマンドの実行に失敗しました。\nコマンド：{command}\nサーバー：{guild}\n詳細：\n{error}"),
    "bot/command/autocomplete/undefined": msg("autocomplateが未定義です。\nコマンド：{command}"),
    "bot/command/autocomplete/success": msg("autocomplateの実行に成功しました。コマンド：{command}\nサーバー：{guild}"),
    "bot/command/autocomplete/faild": msg("autocomplateの実行に失敗しました。コマンド：{command}\nサーバー：{guild}\n詳細：\n{error}"),
    "bot/command/modal/undefined": msg("modalが未定義です。コマンド：{command}"),
    "bot/command/modal/success": msg("modalの実行に成功しました。コマンド：{command}\nサーバー：{guild}"),
    "bot/command/modal/faild": msg("modalの実行に失敗しました。コマンド：{command}\nサーバー：{guild}\n詳細：\n{error}"),
    "bot/command/notSetDestAfk": msg("移動先の休止チャンネルが設定されていません。"),
    "bot/command/notFoundDestAfk": msg("移動先に設定されいてる休止チャンネルが見つかりませんでした。\n移動先を設定し直してください。"),
    "bot/command/echo/description": msg("入力したテキストをそのまま返します。"),
    "bot/command/echo/textOption/description": msg("テキストを入力してください。"),
    "bot/command/afk/description": msg("ユーザーを休止チャンネルに移動させます。"),
    "bot/command/afk/userOption/description": msg("移動させるユーザーを入力してください。"),
    "bot/command/afk/success": msg("{user}を{channel}に移動させました。"),
    "bot/command/afk/notFoundUser": msg("{user}が見つかりませんでした。"),
    "bot/command/afk/alreadyAfk": msg("{user}は既に{channel}に居ます。"),
    "bot/command/afk/faild": msg("{user}の移動に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-afk/description": msg("移動先の休止チャンネルを設定します。"),
    "bot/command/cnf-afk/set-dest/channelOption/description": msg("移動先に設定する休止チャンネルを入力してください。"),
    "bot/command/cnf-afk/get-dest/description": msg("移動先の休止チャンネルを取得します。"),
    "bot/command/cnf-afk/set-dest/success": msg("移動先の休止チャンネルを{channel}に設定しました。"),
    "bot/command/cnf-afk/set-dest/faild": msg("移動先の休止チャンネルの設定に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-afk/get-dest/success": msg("移動先の休止チャンネルは{channel}です。"),
    "bot/command/cnf-afk/get-dest/faild": msg("移動先の休止チャンネルの取得に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/description": msg("VCの自動作成機能を設定します。"),
    "bot/command/vac/start/description": msg("VCの自動作成機能を開始します。"),
    "bot/command/vac/stop/description": msg("VCの自動作成機能を停止します。"),
    "bot/command/vac/status/description": msg("VCの自動作成機能の状態を表示します。"),
    "bot/command/vac/start/success": msg("VCの自動作成機能を開始しました。"),
    "bot/command/vac/start/faild": msg("VCの自動作成機能の開始に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/start/createTriggerVCFaild": msg("VCの自動作成用のトリガーチャンネルの作成に失敗しました。"),
    "bot/command/vac/start/setTriggerVCFaild": msg("VCの自動作成用のトリガーチャンネルの登録に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/start/alreadyStarting": msg("VCの自動作成機能は既に開始しています。"),
    "bot/command/vac/stop/success": msg("VCの自動作成機能を停止しました。"),
    "bot/command/vac/stop/faild": msg("VCの自動作成機能の停止に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/stop/getTriggerVCFaild": msg("自動作成用のトリガーチャンネルの取得に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/stop/triggerVCNotFound": msg("自動作成用のトリガーチャンネルが見つかりませんでした。"),
    "bot/command/vac/stop/alreadyStoping": msg("VCの自動作成機能は既に停止しています。"),
    "bot/command/vac/status/success": msg("VCの自動作成機能は{status}です。"),
    "bot/command/vac/status/faild": msg("VCの自動作成機能の状態の取得に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-vc/description": msg("ボイスチャンネルの設定をします。"),
    "bot/command/cnf-vc/notInVC": msg("設定するボイスチャンネルに入室中に実行してください。"),
    "bot/command/cnf-vc/rename/description": msg("ボイスチャンネルの名前を変更します。"),
    "bot/command/cnf-vc/rename/nameOption/description": msg("変更する名前を入力してください。"),
    "bot/command/cnf-vc/rename/success": msg("{channel}の名前を{name}に変更しました。"),
    "bot/command/cnf-vc/rename/faild": msg("ボイスチャンネルの名前の変更に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-vc/user-limit/description": msg("ボイスチャンネルの人数制限を設定します。"),
    "bot/command/cnf-vc/user-limit/userLimitOption/description": msg("人数制限を入力してください。(0~99 0：無制限)"),
    "bot/command/cnf-vc/user-limit/success": msg("{channel}の人数制限を{userLimit}に変更しました。"),
    "bot/command/cnf-vc/user-limit/faild": msg("{channel}の人数制限の変更に失敗しました。\n詳細：\n{error}"),
});
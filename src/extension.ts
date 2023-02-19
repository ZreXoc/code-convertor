import * as vscode from "vscode";
import { window } from "vscode";
import { convertors } from "./convertors";
import { Convertor } from "./types/Convertor";
import { ConvertorArgument } from "./types/ConvertorArguments";

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand(
		"code-convertor.quickConvert",
		() => quickConvert(context)
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}

function quickConvert(context: vscode.ExtensionContext) {
	const quickPick = window.createQuickPick<
		{ key: string } & vscode.QuickPickItem
	>();
	let selected: string;
  let isSelectEnd :boolean = false;
  let convertor:Convertor;
	quickPick.items = Object.entries(convertors).map(
		([key, { label, description }]) => ({
			label,
			description,
			key,
		})
	);
	quickPick.onDidChangeSelection((selection) => {
		if (selection[0]) {
			selected = selection[0].key;
			console.log(selected);
		}
	});
	quickPick.onDidAccept(() => {
		if (!vscode.window.activeTextEditor) return;
		const convertor = convertors[selected];

		const { document, selection, edit } = vscode.window.activeTextEditor;
		const text = document.getText(selection);
		console.log(text, selection);
		edit((editBuilder) =>
			editBuilder.replace(selection, convertor.convert(text))
		);

		// quickPick.dispose();
	});
	quickPick.onDidHide(() => quickPick.dispose());
	quickPick.show();
}

/* function getConvertorArgs(
	quickPick: vscode.QuickPick<vscode.QuickPickItem>,
	arg: ConvertorArgument
) {
	switch (arg.type) {
		case "input":
			//TODO
			break;
		case "list":
    quickPick.items:
    break
		default:
			break;
	}
} */

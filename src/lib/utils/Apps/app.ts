import 'winbox';

declare const WinBox: WinBox.WinBoxConstructor;

export class App {
	window: WinBox;
	title: string;
	params: WinBox.Params;

	constructor(title: string, params?: WinBox.Params) {
		this.title = title;
		this.params = {
			class: ['no-full'],
			x: 'center',
			y: 'center',
			width: '50%',
			height: '70%',
			top: 40,
			bottom: 100,
			...params
		};
	}

	open(title?: string) {
		this.window = new WinBox(title ? title : this.title, this.params);
		this.window.index = 5;
	}

	close() {
		this.window.close();
	}
}

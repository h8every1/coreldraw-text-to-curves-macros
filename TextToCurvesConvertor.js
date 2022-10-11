/* 

CorelDraw JS macros that converts all text shapes into curves on
all pages of active document 

Version: 1.0.0
 Author: Anton Syuvaev (h8every1)
   Repo: https://github.com/h8every1/coreldraw-text-to-curves-macros

*/

class TextToCurvesConvertor {
	constructor() {
		for (let i = 1; i <= host.ActiveDocument.Pages.Count; i++) {
			let page = host.ActiveDocument.Pages.Item(i);

			for (let l = 1; l <= page.Layers.Count; l++) {
				this.convertText(page.Layers.Item(l).Shapes);
			}
			
		}
	}

	convertText(shapes) {
		for (let s = 1; s <= shapes.Count; s++) {
			const pc = shapes.Item(s).PowerClip
			let subShapes = null

			if (shapes.Item(s).Shapes.Count > 0) {
				subShapes = shapes.Item(s).Shapes;
			} else if (pc) {
				subShapes = pc.Shapes;
			}

			if (subShapes) {
				this.convertText(subShapes);
			}
		}

		const texts = shapes.FindShapes(undefined, 6, true);

		for (var t = 1; t <= texts.Count; t++) {
			texts.Item(t).ConvertToCurves();
		}
	}
}

new TextToCurvesConvertor();

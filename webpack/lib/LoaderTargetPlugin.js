/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

class LoaderTargetPlugin {
	constructor(target) {
		this.target = target;
	}

	apply(compiler) {
		compiler.plugin("compilation", (compilation) => {
			compilation.plugin("normal-module-loader", (loaderContext) => loaderContext.target = this.target);
		});
	}
}

module.exports = LoaderTargetPlugin;

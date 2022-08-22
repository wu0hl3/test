export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-4011987d.js","imports":["_app/immutable/start-4011987d.js","_app/immutable/chunks/index-568470be.js","_app/immutable/chunks/singletons-807e8536.js","_app/immutable/chunks/index-dd898b21.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			},
			{
				type: 'page',
				id: "chart",
				pattern: /^\/chart\/?$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 4
			},
			{
				type: 'page',
				id: "[county]",
				pattern: /^\/([^/]+?)\/?$/,
				names: ["county"],
				types: [null],
				errors: [1],
				layouts: [0],
				leaf: 3
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

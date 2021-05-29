import * as submodule from '../src/';


const text = `[submodule "hexo-meta-data"]
	path = hexo-meta-data
	url = https://github.com/git-story/hexo-meta-data
[submodule "themes/landscape"]
	path = themes/landscape
	url = https://github.com/hexojs/hexo-theme-landscape`;


const de = submodule.deserialize(text);
console.log(de);
console.log(submodule.serialize(de));

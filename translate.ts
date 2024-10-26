import { CROWDIN } from "./lang_keys.ts";

const output: { [index: string]: string[]; } = {
	'armor_stand_editor.json': ['assets/armor_stand_editor', 'data/armor_stand_editor'],
	'brewery.json': ['assets/brewery', 'data/brewery'],
	'entity_view_distance.json': ['assets/entityviewdistance'],
	'goml.json': ['assets/goml', 'data/goml'],
	'illager_expansion_recrafted.json': ['assets/illagerexp', 'data/illagerexp'],
	'glide_away.json': ['assets/glideaway'],
	'polydecorations.json': ['assets/polydecorations'],
	'polydex.json': ['assets/polydex', 'data/polydex'],
	'polyfactory.json': ['assets/polyfactory'],
	'simple_update_checker.json': ['assets/simpleupdatechecker', 'data/simpleupdatechecker'],
	'universal_graves.json': ['assets/universal_graves', 'data/universal_graves'],
	'universal_shops.json': ['assets/universal_shops', 'data/universal_shops'],
	'sleep_warp.json': ['assets/sleepwarp', 'data/sleepwarp'],
}

try {
	Deno.removeSync('output', {recursive: true})
} catch (_) { /* Ignore */ }
try {
	Deno.removeSync('output_split', {recursive: true})
} catch (_) { /* Ignore */ }

Deno.mkdirSync("output", {recursive: true})
Deno.mkdirSync("output_split", {recursive: true})

for (const path of Deno.readDirSync('base')) {
	Deno.copyFileSync("base/" + path.name, "output/" + path.name)
}


for (const path of Deno.readDirSync('input')) {
	let mc = CROWDIN.get(path.name);
	if (!mc) {
		mc = path.name.toLocaleLowerCase();
	}
	for (const proj of Deno.readDirSync('input/' + path.name)) {
		const mcpathl = output[proj.name];

		if(!mcpathl) {
			continue;
		}

		for (const mcpath of mcpathl) {
			try {
				Deno.mkdirSync("output/" + mcpath + "/lang/", {recursive: true})
				Deno.mkdirSync("output_split/" + proj.name + "/" + mcpath + "/lang/", {recursive: true})
			} catch (_) { /*... */ }
			const langFile = Deno.readTextFileSync("input/" + path.name + "/" + proj.name);
			Deno.writeTextFileSync("output/" + mcpath + "/lang/" + mc + ".json", langFile)
			Deno.writeTextFileSync("output_split/" + proj.name + "/" + mcpath + "/lang/" + mc + ".json", langFile)
		}
	}
}
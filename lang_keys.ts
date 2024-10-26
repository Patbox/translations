const mc2crowdin = new Map<string, string[]>();
const crowdin2mc = new Map<string, string>();
function createEntry(minecraft: string, ...crowdin: string[]) {
	mc2crowdin.set(minecraft, crowdin);

	for (const x of crowdin) {
		crowdin2mc.set(x, minecraft);
	}
}


createEntry("af_za", "af");
createEntry("ar_sa", "ar");
createEntry("ast_es", "ast");
createEntry("az_az", "az");
createEntry("ba_ru", "ba");
// Bavaria
// createEntry("bar", "bar");
createEntry("be_by", "be");
createEntry("bg_bg", "bg");
createEntry("br_fr", "br-FR");
// Brabantian
// createEntry("brb", "brb");
createEntry("bs_ba", "bs");
createEntry("ca_es", "ca");
createEntry("cs_cz", "cs");
createEntry("cy_gb", "cy");
createEntry("da_dk", "da");
createEntry("de_at", "de-AT", "de");
createEntry("de_ch", "de-CH", "de");
createEntry("de_de", "de");
createEntry("el_gr", "el");
createEntry("en_au", "en-AU", "en-GB", "en-US");
createEntry("en_ca", "en-CA", "en-GB", "en-US");
createEntry("en_gb", "en-GB", "en-US");
createEntry("en_nz", "en-NZ", "en-GB", "en-US");
createEntry("en_pt", "en-PT", "en-GB", "en-US");
createEntry("en_ud", "en-UD", "en-GB", "en-US");
createEntry("en_us", "en-US");
// Anglish
// createEntry("enp", "enp");
createEntry("en_ws", "en-WS");
createEntry("en_7s", "en-PT");
createEntry("eo_uy", "eo");
createEntry("es_ar", "es-AR", "es-ES");
createEntry("es_cl", "es-CL", "es-ES");
createEntry("es_ec", "es-EC", "es-ES");
createEntry("es_es", "es-ES");
createEntry("es_mx", "es-MX", "es-ES");
createEntry("es_uy", "es-UY", "es-ES");
createEntry("es_ve", "es-VE", "es-ES");
// Andalusian
createEntry("esan", "esan");
createEntry("et_ee", "et");
createEntry("eu_es", "eu");
createEntry("fa_ir", "fa");
createEntry("fi_fi", "fi");
createEntry("fil_ph", "fil");
createEntry("fo_fo", "fo");
createEntry("fr_ca", "fr-CA", "fr");
createEntry("fr_fr", "fr");
createEntry("fra_de", "fra-DE");
createEntry("fy_nl", "fy-NL");
createEntry("ga_ie", "ga-IE");
createEntry("gd_gb", "gd");
createEntry("gl_es", "gl");
createEntry("haw_us", "haw");
createEntry("he_il", "he");
createEntry("hi_in", "hi");
createEntry("hr_hr", "hr");
createEntry("hu_hu", "hu");
createEntry("hy_am", "hy-AM");
createEntry("id_id", "id");
createEntry("ig_ng", "ig");
createEntry("io_en", "ido");
createEntry("is_is", "is");
// Interslavic
// createEntry("isv", "isv");
createEntry("it_it", "it");
createEntry("ja_jp", "ja");
createEntry("jbo_en", "jbo");
createEntry("ka_ge", "ka");
createEntry("kk_kz", "kk");
createEntry("kn_in", "kn");
createEntry("ko_kr", "ko");
// Ripuarian
// createEntry("ksh", "ksh");
createEntry("kw_gb", "kw");
createEntry("la_la", "la-LA");
createEntry("lb_lu", "lb");
createEntry("li_li", "li");
createEntry("lol_us", "lol");
createEntry("lt_lt", "lt");
createEntry("lv_lv", "lv");
// Classical Chinese
// createEntry("lzh", "lzh");
createEntry("mi_NZ", "mi");
createEntry("mk_mk", "mk");
createEntry("mn_mn", "mn");
createEntry("ms_my", "ms");
createEntry("mt_mt", "mt");
createEntry("nds_de", "nds");
createEntry("nl_be", "nl-BE", "nl");
createEntry("nl_nl", "nl");
createEntry("nn_no", "nn-NO", "no");
createEntry("no_no", "no", "nb");
createEntry("oc_fr", "oc");
// Elfdalian
// createEntry("ovd", "ovd");
createEntry("pl_pl", "pl");
createEntry("pt_br", "pt-BR", "pt-PT");
createEntry("pt_pt", "pt-PT", "pt-BR");
createEntry("qya_aa", "qya-AA");
createEntry("ro_ro", "ro");
// Russian (pre-revolutionary)
// createEntry("rpr", "rpr");
createEntry("ru_ru", "ru");
createEntry("se_no", "se");
createEntry("sk_sk", "sk");
createEntry("sl_si", "sl");
createEntry("so_so", "so");
createEntry("sq_al", "sq");
createEntry("sr_sp", "sr");
createEntry("sv_se", "sv-SE");
// Upper Saxon German
// createEntry("sxu", "sxu");
// Silesian
// createEntry("szl", "szl");
createEntry("ta_in", "ta");
createEntry("th_th", "th");
createEntry("tl_ph", "tl");
createEntry("tlh_aa", "tlh-AA");
createEntry("tr_tr", "tr");
createEntry("tt_ru", "tt-RU");
createEntry("uk_ua", "uk");
createEntry("val_es", "val-ES");
createEntry("vec_it", "vec");
createEntry("vi_vn", "vi");
createEntry("yi_de", "yi");
createEntry("yo_ng", "yo");
createEntry("zh_cn", "zh-CN", "zh-HK");
createEntry("zh_hk", "zh-HK", "zh-CN");
createEntry("zh_tw", "zh-TW")


export const CROWDIN = crowdin2mc;
export const MINECRAFT = mc2crowdin;

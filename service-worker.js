/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "34604d37d16d21fb6515f7dca3326583"
  },
  {
    "url": "alternatives.html",
    "revision": "05aea21fb393be0e87a9945cc780b802"
  },
  {
    "url": "arrondir-des-valeurs.html",
    "revision": "22e2fc8a85267492afbd227bb70983c0"
  },
  {
    "url": "assets/css/0.styles.2037bf10.css",
    "revision": "ce2b06cc6bd581e96d2aeddc3e53bcf7"
  },
  {
    "url": "assets/img/notepadpp_export.3dc596d7.png",
    "revision": "3dc596d76fc8e9922e1dd07ba93697e8"
  },
  {
    "url": "assets/img/notepadpp_findreplace.ebd15bab.png",
    "revision": "ebd15bab966167ca35f609ab1ad4551e"
  },
  {
    "url": "assets/img/npp_color_tag.c2dcf24d.png",
    "revision": "c2dcf24d6e4b677e2e138e93cfeeb916"
  },
  {
    "url": "assets/img/npp_color_word.b36a4bd2.png",
    "revision": "b36a4bd29ffc9ac60fb0ff62abdf7553"
  },
  {
    "url": "assets/img/npp_document-switcher.049fee1e.png",
    "revision": "049fee1e13702117119a4e5c1ea473c1"
  },
  {
    "url": "assets/img/npp_find-marquer.09959c90.png",
    "revision": "09959c905f7b3c30601b1713d68630a6"
  },
  {
    "url": "assets/img/npp_find-result.60ae3197.png",
    "revision": "60ae3197a8e319ec7ec1da4abb84a259"
  },
  {
    "url": "assets/img/npp_functionlist.27b5620e.png",
    "revision": "27b5620e43837045324f88f6adcf4e2b"
  },
  {
    "url": "assets/img/npp_install_components.1d008f32.png",
    "revision": "1d008f32c9bd0eaf95ac1bb0e96117dd"
  },
  {
    "url": "assets/img/npp_install_dir.c7900227.png",
    "revision": "c7900227d4748e2dfbd3aa2cd1c58009"
  },
  {
    "url": "assets/img/npp_install_end.e9c5d732.png",
    "revision": "e9c5d732e35f6ad0d7cb15b8baf6de0e"
  },
  {
    "url": "assets/img/npp_install_license.53913d20.png",
    "revision": "53913d209953de0c4a1821726d8e99b0"
  },
  {
    "url": "assets/img/npp_install_options.e6e64dff.png",
    "revision": "e6e64dff1c6ca21e26e3e77dfd6eaae0"
  },
  {
    "url": "assets/img/npp_interface_complex.df00fbfd.png",
    "revision": "df00fbfd0bfeae3c1cfae325dbfc0747"
  },
  {
    "url": "assets/img/npp_interface_statusbar.5a297495.png",
    "revision": "5a297495cdff056e5c382dc0f5881598"
  },
  {
    "url": "assets/img/npp_interface_views.477c7ce4.png",
    "revision": "477c7ce46311f1c8f3563f6937a433cb"
  },
  {
    "url": "assets/img/npp_interface.0ea9f7ff.gif",
    "revision": "0ea9f7ffa879d61806fd56135e0e9c63"
  },
  {
    "url": "assets/img/npp_panels.b0547721.png",
    "revision": "b054772196793eab78475dea3d358057"
  },
  {
    "url": "assets/img/npp_plugin_compare.ad4094b6.png",
    "revision": "ad4094b68ae551f8cbe46dbd6240c04d"
  },
  {
    "url": "assets/img/npp_plugin_functionlist_rulesl.f42db158.png",
    "revision": "f42db1587d18bdad4b593ce6047932f4"
  },
  {
    "url": "assets/img/npp_plugin_markdownviewer++.47d0528a.png",
    "revision": "47d0528a6c7526cd1f6a6d0a7a8fccf8"
  },
  {
    "url": "assets/img/npp_plugin_pluginmanager.84bd5d79.png",
    "revision": "84bd5d7999b7c90ad5dc99bab45b5dc4"
  },
  {
    "url": "assets/img/npp_settings_autocomplete.d0475dc6.png",
    "revision": "d0475dc6a45f2ba5e68513897312f01f"
  },
  {
    "url": "assets/img/npp_settings_color.7d30e36a.png",
    "revision": "7d30e36a2dd6be9e25930f5d7c0a13e2"
  },
  {
    "url": "assets/img/npp_settings_delimiter.9305062a.png",
    "revision": "9305062a641c6ac8b094e0efeb434fd8"
  },
  {
    "url": "assets/img/npp_settings_edit.ccdfad51.png",
    "revision": "ccdfad519d22e507ed95e2379a34644a"
  },
  {
    "url": "assets/img/npp_settings_general.6cc289bf.png",
    "revision": "6cc289bffa2fcea8b36f44bfba256938"
  },
  {
    "url": "assets/img/npp_settings_lang.c83721d8.png",
    "revision": "c83721d88c06ffc6c4af525018b4c601"
  },
  {
    "url": "assets/img/npp_settings_misc.bf5437ae.png",
    "revision": "bf5437ae6baac1ff46f487f5b0a9305a"
  },
  {
    "url": "assets/img/npp_settings_new.230d830f.png",
    "revision": "230d830f82d1b7cad61e5703bef10d41"
  },
  {
    "url": "assets/img/npp_settings_print.61170dea.png",
    "revision": "61170dea1b8b89ecdb56eb9c00108787"
  },
  {
    "url": "assets/img/npp_settings_save.2b755a68.png",
    "revision": "2b755a68bc7485d003fe586d099ebd98"
  },
  {
    "url": "assets/img/npp_shortcutmapper.3ec229cf.png",
    "revision": "3ec229cff77f15190e661b0715c79b44"
  },
  {
    "url": "assets/img/regex-helper.56a936bc.png",
    "revision": "56a936bc020d42e6d66c59e9ec834506"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f20f064a.js",
    "revision": "0759f6c1cb013302bd907a16f5f90ac6"
  },
  {
    "url": "assets/js/11.4ac50cd8.js",
    "revision": "7a9e4082535fd4fd27f62b7fe7409d0a"
  },
  {
    "url": "assets/js/12.e0522eea.js",
    "revision": "4c9610aca257f31180ca3af7926e0b85"
  },
  {
    "url": "assets/js/13.e737afb2.js",
    "revision": "d66ccb492971ee2076190553cdf20c63"
  },
  {
    "url": "assets/js/14.1bc71554.js",
    "revision": "d70b95e1ee1bc7c67d5607d81346efad"
  },
  {
    "url": "assets/js/15.002b19a9.js",
    "revision": "65540a112b3cf1b766b1f4d7723c483c"
  },
  {
    "url": "assets/js/16.092aef2c.js",
    "revision": "a751450e751987aef2022845a920ca45"
  },
  {
    "url": "assets/js/17.1ace1811.js",
    "revision": "861a6155acee2f101fe930d4deb4c00e"
  },
  {
    "url": "assets/js/18.234c9f92.js",
    "revision": "21656fc0b89022d1d4feb35a2713ef99"
  },
  {
    "url": "assets/js/19.ea58367f.js",
    "revision": "4bc5a3c43b099b7155ab241e4899f277"
  },
  {
    "url": "assets/js/2.ff1549dc.js",
    "revision": "057b90d25ce03bba2303889d0e7b7041"
  },
  {
    "url": "assets/js/20.3520f2ad.js",
    "revision": "dbe4dda3224e267d3719b2d6f4c5ce82"
  },
  {
    "url": "assets/js/21.46b77387.js",
    "revision": "338b35339b03e53d413867f3969cbc4f"
  },
  {
    "url": "assets/js/22.46f0f993.js",
    "revision": "3d9c177e1179d784a5fe268602b13acc"
  },
  {
    "url": "assets/js/23.949484ad.js",
    "revision": "b7e0173f846153f4ed6ff5d719826e6b"
  },
  {
    "url": "assets/js/24.e188a7f5.js",
    "revision": "85aef8659f4140a7c8cc2e84a9b94149"
  },
  {
    "url": "assets/js/25.7e6b9c09.js",
    "revision": "87c23e17dfe6224288e90eee5eb33852"
  },
  {
    "url": "assets/js/26.080bcb2b.js",
    "revision": "0cc354b23ebc34d1eadc282bf995403c"
  },
  {
    "url": "assets/js/27.e8c38ee4.js",
    "revision": "96bc7dbdb62eaf1b1a7b6afd56df4fa8"
  },
  {
    "url": "assets/js/28.6f26f1ae.js",
    "revision": "87f46f8ba4b85dcb0c7ab7831c869236"
  },
  {
    "url": "assets/js/29.52164729.js",
    "revision": "6080fcaa676e3468da11b2f0b2052711"
  },
  {
    "url": "assets/js/3.4401b7e3.js",
    "revision": "99489313c846ac880733d97aadd01010"
  },
  {
    "url": "assets/js/30.dcbf7d59.js",
    "revision": "11e2825e7e0ede25c80865458d03ec2a"
  },
  {
    "url": "assets/js/31.354bf7b9.js",
    "revision": "fec6f60f5e72f4bec7cc2191cafee400"
  },
  {
    "url": "assets/js/32.d686313f.js",
    "revision": "0203189bbad28b75aea0e963e4dfe86a"
  },
  {
    "url": "assets/js/33.0e3a05d7.js",
    "revision": "7a8f62c8b8932baf6f37a7ea7b0341f8"
  },
  {
    "url": "assets/js/34.0eba6f68.js",
    "revision": "f26dcd192a5fb8745ddf825b533c10e5"
  },
  {
    "url": "assets/js/35.778871a5.js",
    "revision": "bbf45a7ba692abfa7d67a829b4f7541c"
  },
  {
    "url": "assets/js/36.0ab74eb5.js",
    "revision": "8ea4d0b614ffa71e91aec1f29d8131ba"
  },
  {
    "url": "assets/js/37.d2d9a991.js",
    "revision": "ee4fa6e86f64ea6dad6ee7eeb7f3b5be"
  },
  {
    "url": "assets/js/38.8c45e481.js",
    "revision": "4dae4bbd6dfc55372b304c4abc8ddcfb"
  },
  {
    "url": "assets/js/39.aea084a1.js",
    "revision": "497fa9a4f3703ee4934551f90ee3ee43"
  },
  {
    "url": "assets/js/4.4dd74ffa.js",
    "revision": "15b6debf182b15b966c01fcd9c8ae5fd"
  },
  {
    "url": "assets/js/40.5570eb56.js",
    "revision": "f245e5b0caf171e2a64d087fed10c967"
  },
  {
    "url": "assets/js/41.5a5c9914.js",
    "revision": "ba9975d954a94b3fa5799120ec512a9c"
  },
  {
    "url": "assets/js/42.c20e1be8.js",
    "revision": "7e05b666175d1fad8a39f8f4705158fb"
  },
  {
    "url": "assets/js/43.64be4e8a.js",
    "revision": "fe9c2b0ac9606f3c2a35c2a86a0c6cfb"
  },
  {
    "url": "assets/js/44.5adc7f9e.js",
    "revision": "e15dc1f61dc9451805cfa59b28ea5278"
  },
  {
    "url": "assets/js/45.503835ef.js",
    "revision": "bfaa97cf6003e684436ed5425dcbfa42"
  },
  {
    "url": "assets/js/46.84ea77ff.js",
    "revision": "6461a82110ea56056be978d89c8f8b0a"
  },
  {
    "url": "assets/js/47.586dd6e6.js",
    "revision": "9085848dee2bacf888317fa3b9868334"
  },
  {
    "url": "assets/js/48.693e38f1.js",
    "revision": "8488998651354bcd86317bbb590b2fac"
  },
  {
    "url": "assets/js/49.ec4df295.js",
    "revision": "2afe6454be2a6e7c1ee3f4ce63a0603e"
  },
  {
    "url": "assets/js/5.d1ab47c0.js",
    "revision": "1a47a98c2d8de5447645facaff563f48"
  },
  {
    "url": "assets/js/50.2cbcd421.js",
    "revision": "8606bfa8e47e5afa9592c658e0ed712a"
  },
  {
    "url": "assets/js/51.366b880b.js",
    "revision": "cb2302b84dd303708c35f1bf694975bd"
  },
  {
    "url": "assets/js/52.f9ef8717.js",
    "revision": "df4a020ab13ca71fb320d3912e7aa097"
  },
  {
    "url": "assets/js/53.5b5e25cb.js",
    "revision": "eceabe2f014e43d78b9b0a82d14caf61"
  },
  {
    "url": "assets/js/54.f6abf7d5.js",
    "revision": "51f50ed8bd2a93151f988ec1b6d8c2e5"
  },
  {
    "url": "assets/js/55.7613f6cc.js",
    "revision": "6dabaee9d73ea9399b5806b19ce50910"
  },
  {
    "url": "assets/js/56.b0ded210.js",
    "revision": "3481960781a492df4e5b5cefea6ba676"
  },
  {
    "url": "assets/js/57.40c3888d.js",
    "revision": "f5a611c90b99df05df26f60c6a354b17"
  },
  {
    "url": "assets/js/58.358e2ae5.js",
    "revision": "bfd5d39da45308180c0736d37653fff4"
  },
  {
    "url": "assets/js/59.73d83538.js",
    "revision": "8646e1c5092861dd49ab7cceefa21a6c"
  },
  {
    "url": "assets/js/6.ad71dcf5.js",
    "revision": "20cc48eb8a8da5b5f6dd72e198570fea"
  },
  {
    "url": "assets/js/60.caed1b71.js",
    "revision": "4c48b0c730aec7b1959d341661ed3d37"
  },
  {
    "url": "assets/js/61.b56a12fa.js",
    "revision": "45736860133b18d31b8aae9e7789b7b4"
  },
  {
    "url": "assets/js/62.af3d7435.js",
    "revision": "56c870e78aed6dec6d01df168be39c63"
  },
  {
    "url": "assets/js/63.83437403.js",
    "revision": "c98ac24053a6f799ac2a307fccf61a36"
  },
  {
    "url": "assets/js/64.2c0ca49e.js",
    "revision": "fe8aff20840bc9cf8ed20240c4260dde"
  },
  {
    "url": "assets/js/65.04ef6ee2.js",
    "revision": "d690cbd5c8b72fb829cfa786c28bc31f"
  },
  {
    "url": "assets/js/7.6f4e990e.js",
    "revision": "bc04a126cb9d42d3fa38b79ecbb6bb8b"
  },
  {
    "url": "assets/js/8.5f9262cb.js",
    "revision": "8e6a851ab72d82b8ff08e79e8c639848"
  },
  {
    "url": "assets/js/9.eb63d74d.js",
    "revision": "a15978e0b48a7c9daf9dfcd3b1b8effd"
  },
  {
    "url": "assets/js/app.238cb4dc.js",
    "revision": "a33bd93b994faa00d2e3c18548259d41"
  },
  {
    "url": "commutateur-de-document.html",
    "revision": "607b50db83a2b211822be6a57229e7ba"
  },
  {
    "url": "compter.html",
    "revision": "51ab8168b0a8c153fc8cc8061c3c74a6"
  },
  {
    "url": "edition-en-colonne.html",
    "revision": "331b89049d87690bb786e16a40a064e5"
  },
  {
    "url": "en/index.html",
    "revision": "8a08512fc29c14a12ab075a698e2bcbb"
  },
  {
    "url": "executer.html",
    "revision": "346a08eb4491e522ed4b30a29e0e62ff"
  },
  {
    "url": "expressions-regulieres/index.html",
    "revision": "813a5cf15e50129d42c4b5473de454ff"
  },
  {
    "url": "expressions-regulieres/notions.html",
    "revision": "b6641fc41f2ffca8f767d1b410e8aece"
  },
  {
    "url": "expressions-regulieres/syntaxe-recherche.html",
    "revision": "1ee2b85d7e253a0e84663a02db956357"
  },
  {
    "url": "expressions-regulieres/syntaxe-remplacement.html",
    "revision": "df25be7ef933630878bd0027a5a1d9f4"
  },
  {
    "url": "fichiers-de-configuration.html",
    "revision": "040ece77a1c49a5545c04fa618c7c027"
  },
  {
    "url": "historique-des-versions.html",
    "revision": "8f98d4a1eef491925e6d15efe07b6da5"
  },
  {
    "url": "icons/npp_error.png",
    "revision": "5273bf5cef47c6554551cb1ebc21328c"
  },
  {
    "url": "index.html",
    "revision": "805bec9774f2a92242f94dcf6a97fd55"
  },
  {
    "url": "inserer-du-texte.html",
    "revision": "25619da2ad22b296936aa88ba7a4f7d8"
  },
  {
    "url": "installation-sous-linux.html",
    "revision": "5326f3def40f43cd6215811c6a0d745d"
  },
  {
    "url": "installation.html",
    "revision": "e14c36586d1be1669cefaf8fe13c165f"
  },
  {
    "url": "interface.html",
    "revision": "04de772a56b0b8b9a041919900831d57"
  },
  {
    "url": "liste-des-fonctions.html",
    "revision": "cead13b679fbe4130beedfba13c5c253"
  },
  {
    "url": "macros.html",
    "revision": "ecb4e04e54952b1c26ade7524a2b80b7"
  },
  {
    "url": "notepad-plus-plus.html",
    "revision": "833b96ecf015dbf40db4a09886a26e6e"
  },
  {
    "url": "plugins/autosave.html",
    "revision": "2a53c9c4a1d169ace1aa96d155ce2534"
  },
  {
    "url": "plugins/compare.html",
    "revision": "eca74d932f36b473461f56012ad36e54"
  },
  {
    "url": "plugins/dspellcheck.html",
    "revision": "b511b84dafd311068f66fb7ad6900e52"
  },
  {
    "url": "plugins/elastic-tabstops.html",
    "revision": "d32904e4e2839248611fd9ed4674a8c1"
  },
  {
    "url": "plugins/emmet.html",
    "revision": "c68d19bc5797aa76a0ae32387183b815"
  },
  {
    "url": "plugins/explorer.html",
    "revision": "f3cf43d658cc74d8cd024573666cdf9a"
  },
  {
    "url": "plugins/function-list.html",
    "revision": "a950cd1b431f8b51f89a8d6cac59dbd8"
  },
  {
    "url": "plugins/index.html",
    "revision": "26db435eaf78f56baf1b7b78420cae79"
  },
  {
    "url": "plugins/markdownviewer.html",
    "revision": "9ba5b76f54dc0f81e33f4cdc4b0e5ce8"
  },
  {
    "url": "plugins/nppexport.html",
    "revision": "ee3058b71d36dc0065ed4a3f5f19007f"
  },
  {
    "url": "plugins/nppftp.html",
    "revision": "46473a18e39d83cec933121bc515ab87"
  },
  {
    "url": "plugins/plugin-manager.html",
    "revision": "aa23b7bc9b94968edc899471f8fb3f86"
  },
  {
    "url": "plugins/regex-helper.html",
    "revision": "2e9971cf26672bd4341f8e53dcf36a02"
  },
  {
    "url": "plugins/spell-checker.html",
    "revision": "f7de290cc2252a1c60784dcf9cf991aa"
  },
  {
    "url": "plugins/textfx.html",
    "revision": "6d7f23d888f9df0b5d2d6a3dd40f9fb6"
  },
  {
    "url": "preferences/autocompletion.html",
    "revision": "6512594ac262802153016cc12e15db58"
  },
  {
    "url": "preferences/cloud.html",
    "revision": "97ac4c50bb288644cb9006e2810a0acb"
  },
  {
    "url": "preferences/coloration.html",
    "revision": "05597cca7ad0d1128575d60dfd4ef7e4"
  },
  {
    "url": "preferences/delimiteur.html",
    "revision": "660ce4a7a46b09446ec1708bef6fdeae"
  },
  {
    "url": "preferences/divers.html",
    "revision": "84d44b3595313331264c40fbf51611de"
  },
  {
    "url": "preferences/dossier-par-defaut.html",
    "revision": "8849ea8b17cc9f333225b0325bdba4a5"
  },
  {
    "url": "preferences/edition.html",
    "revision": "77f3ad409508819c614e44215bf1fee9"
  },
  {
    "url": "preferences/extensions.html",
    "revision": "c0990d21e494fa6f39fc985ef6b4d8cf"
  },
  {
    "url": "preferences/general.html",
    "revision": "021d7bc9f32129bdf8fb032a42587b4c"
  },
  {
    "url": "preferences/historique.html",
    "revision": "66024bec658fe7ad2c02b68c27295ee1"
  },
  {
    "url": "preferences/impression.html",
    "revision": "66fa48d03857ea0224c905803cd492df"
  },
  {
    "url": "preferences/index.html",
    "revision": "2d287b2b997e1697eadd8b91ce004ee3"
  },
  {
    "url": "preferences/instance.html",
    "revision": "cc7a7b09c86f6abadd3fe032b777b9b5"
  },
  {
    "url": "preferences/langage.html",
    "revision": "e9be501ed7f1da54338dcd8a6f31d0d3"
  },
  {
    "url": "preferences/moteur-de-recherche.html",
    "revision": "d0afd3b7d698952c15a36a0b24e2b177"
  },
  {
    "url": "preferences/nouveau-document.html",
    "revision": "82162371b6721a3b9dec1c583007197a"
  },
  {
    "url": "preferences/sauvegarde.html",
    "revision": "a8d823a36dd821e811a68817d3ec3f5c"
  },
  {
    "url": "raccourcis-clavier.html",
    "revision": "ddb2c18ed092b8e729c3fa85069f0be4"
  },
  {
    "url": "recherches-et-remplacements.html",
    "revision": "245810972ea2cc4c62b946a03e4a8452"
  },
  {
    "url": "shortcut-mapper.html",
    "revision": "facf19a4640497fe773479ece19c287b"
  },
  {
    "url": "sommaire-complet.html",
    "revision": "14052646da996cfaf5a4860e00080a96"
  },
  {
    "url": "supprimer-des-decimales.html",
    "revision": "f96e70d51bf3759de84c3f7cae9c3396"
  },
  {
    "url": "supprimer-des-retours-a-la-ligne.html",
    "revision": "16f6d91fcf554a6e9dff053663feaefa"
  },
  {
    "url": "telechargement.html",
    "revision": "a4e102db9c600f9f5aac88171e5e23e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

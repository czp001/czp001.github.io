/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/11/30/hello-world/index.html","48d9caf0415995029d98a2ad6989cc96"],["/2022/04/16/新文章测试/index.html","7abe39b532d1b11d1f88b70c687be56e"],["/2022/08/18/石墨烯分子结构/index.html","a7fbd3f1c2fbf9251adcd2150fbf7301"],["/2022/08/23/爱心方程/index.html","b1f3ba018a04346da824208b50112bb3"],["/2022/09/18/Python爬虫下载B站UP主视频封面/index.html","19034c16837936b55b01a03727aa2528"],["/2022/09/28/大黄鸭方程/index.html","c8bd4e33eb58e01b40193c2b67e2a07d"],["/2022/11/30/苹果方程/index.html","12ab508391876368a95faeb9315fe685"],["/404.html","45909c5f00bada237f3d39ff31e0b003"],["/about/index.html","1fc6e1b8ead1471b93ec9ca23f371c43"],["/archives/2021/11/index.html","5a584aacfc0086bc685e2023db992c04"],["/archives/2021/index.html","71424742883ca508f00fea125390c296"],["/archives/2022/04/index.html","3be6cb719b2903b6804f83f6b442d540"],["/archives/2022/08/index.html","68f86048ff5ff405ce88e871cc1018f7"],["/archives/2022/09/index.html","ea5d251a036cd586948bc3fdc841f51b"],["/archives/2022/11/index.html","32561a97157cbde578162e78b078e13e"],["/archives/2022/index.html","fa5e93b7bacb2fd16c80e698d498fe61"],["/archives/index.html","86709d5d0fa3892f45e329d000036765"],["/categories/Mathematica/index.html","8a5380fe2643509efed38b7073974104"],["/categories/Python/index.html","403b840b759c7c44b378a0bda3fb2e4f"],["/categories/index.html","d0cf0fd17052e88888cbc5d92f812231"],["/categories/测试/index.html","5ceb7c649a13c3934b9b6ddc3ee57398"],["/css/font.css","4b4c37a597fc504f4a414c4fc126d9e6"],["/css/index.css","8e8d124fbdb8e5b7eae19a1681053ab1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/game/100-error-offline.png","603727db1b706260019aa950dcf5fcd9"],["/game/100-offline-sprite.png","126bb0177752d9bcdaf27e9bd487a8ab"],["/game/200-offline-sprite.png","04b297005713a535400790596beeed31"],["/game/index.css","a05fb2c40ddc1eefe73973f4b3aaf3e3"],["/game/index.html","da4a823234f8120a9334cb712ef5d668"],["/game/index.js","6965929e8ddc2487b11f9238e2460e6d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.gif","e8dd5a767ec026ea727b48a7abc9a12a"],["/img/doge.jpg","ac9f5ee492a2c92724390c34d4081a73"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5ac5d6fb231f8f8e9ec0b30193b1534d"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/link/index.html","3ea7f3a1a4ca9d0a4d71f14e47097afb"],["/live2dw/assets/moc/shizuku.1024/texture_00.png","ca0698ca5a3bf2400e5cf8a1f456a61c"],["/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["/live2dw/assets/moc/shizuku.1024/texture_02.png","efb0515bcaee933f8c38e750d2c4bd3b"],["/live2dw/assets/moc/shizuku.1024/texture_03.png","f735487e72e73a0ea528975041548a14"],["/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/movies/index.html","efb13f10ad14f504c1eef0d8b11fa4f0"],["/music/index.html","864aa6d75fe09e2501368737b409e29f"],["/photo/animals/index.html","b1531d3000a421bf71879a2fcb51eef4"],["/photo/flower/index.html","796a4509b4ae307af4aa0fc6a217a63f"],["/photo/ginkgo/index.html","9fb0f11027300abfb1166a154902088e"],["/photo/index.html","a47e335175a5baa0d45c4a819106e354"],["/photo/sky/index.html","4603922754613a2edee4fe0017a18d4c"],["/pic/1661776806178.jpg","1a6f6dcfae0c190e6379576b87af3261"],["/pic/1661776806193.jpg","df362caf66caa9384c87b73e4bcc8317"],["/pic/1661776806285.jpg","68165aee248e69e65b768c77ccfbedf3"],["/pic/1661776806300.jpg","2e4a8a5b10aa2725d4e8a4d6742ea696"],["/pic/1661776806334.jpg","70427cc5748a445b984548ea38155b8a"],["/pic/20220710161017_1.jpg","a12f37b64e6d9923502b3f9a1e3a7b04"],["/pic/20220721185524_1.jpg","e286235ad9c07001c3ba59fb60694cb0"],["/pic/20220721214038_1.jpg","3a53c6ffad1b129417602edd8830b62a"],["/pic/20220723161720_1.jpg","d23b51c35b4812ca4cffdbc363e87e5e"],["/pic/20220723161737_1.jpg","930f3ead0cbd9853a968e8864d9de5cd"],["/pic/20220723161848_1.jpg","d9c9d1973f57f29196908db0743cb4c6"],["/pic/20220723161957_1.jpg","d67630e31ecec451fd71b8406a84854b"],["/pic/20220723162009_1.jpg","4effaddd485b05adfc035f24b63480a2"],["/pic/20220723175224_1.jpg","161de4c258d1f66066cc242624207541"],["/pic/20220723175241_1.jpg","cd97e14e27452a808c2ee9f16c098942"],["/pic/20220724205445_1.jpg","52ea702c0702fee9da3e296216d03894"],["/pic/20220724231336_1.jpg","8ed71b93a34c5dcc78af0732e9961d00"],["/pic/20220724234349_1.jpg","3deaabc18026ed5a33d02162045a8177"],["/pic/20220724234352_1.jpg","0bbb705a94a72d1a7915a0bf3a8c5772"],["/pic/20220724234404_1.jpg","88353de83d885806bd99a1d49f6fca92"],["/pic/20220724234753_1.jpg","0fecd84358aa07814818fb62eed167cb"],["/pic/20220724234835_1.jpg","96e780f64b38896fab3132bc9b7be45a"],["/pic/20220725233644_1.jpg","56eda1130454a0022b5cacc45f2544ca"],["/pic/20220725233752_1.jpg","d4c62339c23fc2edcdd1deab63c2b447"],["/pic/20220726003324_1.jpg","13ae91d135ef1b4e625d312ab2246956"],["/pic/20220727222756_1.jpg","8e1012f1a7d91111e58574b10f5c84ff"],["/pic/20220727235947_1.jpg","0b0e28840c6a64ba550eb9d2bf5cf227"],["/pic/20220727235951_1.jpg","80c53c04ea594ebd54e32b6cdc2a14f6"],["/pic/20220728000004_1.jpg","eaaf34bebefe9847f281de703544de51"],["/pic/20220728000220_1.jpg","6c2d991eaeb8b3438399e33b3b583fed"],["/pic/20220728000226_1.jpg","783e60588cf6f2d8b543c5d708c0aa0c"],["/pic/20220728003037_1.jpg","096c962226788cb08f54a4f8cd47abf3"],["/pic/20220729003923_1.jpg","ff7c5565b86a9d3b2c517e7c3c185f54"],["/pic/20220729004558_1.jpg","adbf2f9f9f5e01cf229b0316a078dd55"],["/pic/20220729004608_1.jpg","ceb4b36c68af93a8b4b5157fe3304133"],["/pic/20220729004620_1.jpg","cd913fd53cb5b050e8c4b8e53f48c6bf"],["/pic/20220729004627_1.jpg","deb85ab0a70a2def6b71d295fe383f03"],["/pic/20220729004630_1.jpg","e9239c2abf27f166cfbf6d193a1e38d8"],["/pic/20220729004633_1.jpg","14c6c78fdb99312c99293e207bb6c745"],["/pic/20220729004705_1.jpg","8e253db7f3ba4a5ca16b6c8cb1748e53"],["/pic/20220729004712_1.jpg","db79bcb2a664cfaf1e7f80b73b086adb"],["/pic/20220729004716_1.jpg","8139689339aea18b14eb3660be092ad9"],["/pic/20220729004723_1.jpg","c27a58521d5643b50bf00d2f2b7b2ce8"],["/pic/20220729004727_1.jpg","b0a45418baae86bbeb4352028f95c2d5"],["/pic/20220729005726_1.jpg","456dab2a238b83d324f3ae3ce33ef83e"],["/pic/20220729005730_1.jpg","654e3189bbc3c8323695de6d09c4e585"],["/pic/20220729012036_1.jpg","99ef736b13d605421134edb7589b7b7b"],["/pic/20220729012040_1.jpg","f8cef3f766585c9e6276324f3ebc9556"],["/pic/20220729012053_1.jpg","47ea5b0e24c3ec1fda31894caed460e6"],["/pic/20220729012109_1.jpg","0e400dcb904ec3c8bd271cbd6ded4b2c"],["/pic/20220729012117_1.jpg","1ccd2f136c534d7b3dd533db12d8ee70"],["/pic/20220729012133_1.jpg","b42ae583bd1fc60305266b07a0a352cd"],["/pic/20220729012136_1.jpg","2a396a32a802bbe17e97946ad59f8612"],["/pic/20220729012139_1.jpg","826dbda91f54b1bc0f7ef3b913de2b03"],["/pic/20220729220801_1.jpg","42999d870e9748df1a3b79e290a84c5d"],["/pic/20220730012906_1.jpg","865a2a1e1b540c3b854833a6c4057ac7"],["/pic/20220730143512_1.jpg","b830823599cb99f26f1e8bdaa68cad2b"],["/pic/20220730215923_1.jpg","975ae1070ca7837b5df8e7e5df3fadee"],["/pic/20220730215933_1.jpg","1ddb47a2b78eb3a6e148d93b2e9da20c"],["/pic/20220731004557_1.jpg","ba8cd0ff31a5f7318ad30d9320eb0f90"],["/pic/20220731021332_1.jpg","0dc179e173369de6204034e10a34bfe7"],["/pic/20220731153443_1.jpg","b2e24db1b16d7c91f466cb98a1d38e6f"],["/pic/20220731191715_1.jpg","e4c16e498f0ad6a81ab76bcc12e56782"],["/pic/20220731194624_1.jpg","a483cd0e911aacea2123c1707e69b5a2"],["/pic/20220731194630_1.jpg","f2f669788bad3fd14cf22e98f433d097"],["/pic/20220731194834_1.jpg","74607f96319ea1d24c28e27983a99a43"],["/pic/20220731233050_1.jpg","a1c0656816c912d575c25c3d3d9332a9"],["/pic/20220731234429_1.jpg","dd740e5009a3fb8df3a980adda9a7c14"],["/pic/20220801224230_1.jpg","62666ca002d9b66e5078904479ee47eb"],["/pic/20220801234003_1.jpg","31aad0d017728e04aba295138ac1fd5c"],["/pic/20220801234012_1.jpg","b3ad43a49312ec97ae4ed3e9506ca062"],["/pic/20220802212723_1.jpg","6553da3a9076aff2584537b1b875a94c"],["/pic/20220804005544_1.jpg","68a3514dd71690e3766112b6b6095514"],["/pic/20220804011503_1.jpg","bc048cce1e6d99749e7ec9cedc7aaeb3"],["/pic/20220804212706_1.jpg","6560e919dfbefb41d378478eafbd31ba"],["/pic/20220804234302_1.jpg","40c2378020d6d7e62819a5735c3254df"],["/pic/20220804234405_1.jpg","9f102db4cdeb025de39dfb096474df93"],["/pic/20220806015559_1.jpg","605d76f036a1c5095e68ffedc1548a46"],["/pic/20220806180634_1.jpg","ab1f494c18109572b6b621259c3255f0"],["/pic/20220806212506_1.jpg","eb14dea2edc8c22f195a4f160e448d97"],["/pic/20220806214245_1.jpg","511229bfe000b59312be6570479035ed"],["/pic/20220806214502_1.jpg","aec10b3af1ff25b5919b227bf51bc66b"],["/pic/20220806214841_1.jpg","a630f3c7be3ade18b99aa41b89de5bf2"],["/pic/20220806215136_1.jpg","f09e75a3374e8f5924fabba0cee60710"],["/pic/20220806215153_1.jpg","636afcf2f90ce8faaf6caeb884df9e18"],["/pic/20220806234617_1.jpg","892010c17e2c5097031284ca8c646e9f"],["/pic/20220807010349_1.jpg","141c9c2b02565b9e35cd4a4d84b0550c"],["/pic/20220807143710_1.jpg","738826c167d04711cf74fcb97cef8edb"],["/pic/20220807175421_1.jpg","31d079f7894a2cdb3d039b700a3f7a1b"],["/pic/20220807175620_1.jpg","36636dcfc5936558832896ed44c8f659"],["/pic/20220811221655_1.jpg","dc0b621c895953914c34d5c3bb0e545a"],["/pic/20220811221703_1.jpg","c405ea9732fd556aae9073c9d6dd32e0"],["/pic/20220811221731_1.jpg","1bcbe9361e863ed29337ade2652b06e6"],["/pic/20220813012824_1.jpg","699e921dc10724d17b7c27a1ec2e25a7"],["/pic/20220813012855_1.jpg","362df0b2a8937dbecbb8312d65195ef2"],["/pic/20220813012947_1.jpg","3d87c3f6356ff116ac5da34a88c6a5d2"],["/pic/20220813013005_1.jpg","e9dffcca9c2516052ea9ae05e3fd4f76"],["/pic/20220814204228_1.jpg","2ae46ab1c76400695b22bef5a5beb8ab"],["/pic/20220814204234_1.jpg","3ddd50dbf9c656a573934e13922fb554"],["/pic/20220814204243_1.jpg","bc3492a3ae21697974cd6115b8d850e4"],["/pic/20220817003254_1.jpg","799c680dd02807717e7ea04f2e2ac61e"],["/pic/20220817003431_1.jpg","dda693c77266ad94bb5f5b8e16a761fe"],["/pic/20220817003453_1.jpg","c1304a3c698f236097a1f09837275b57"],["/pic/20220817003853_1.jpg","e91eca44a8bc47689752aa31349e7e2f"],["/pic/20220817003908_1.jpg","40ae04dc9eba9ecafc17daa51316caed"],["/pic/20220817003912_1.jpg","f86052427be8f5668c7647600a1674e6"],["/pic/20220817003934_1.jpg","8b294609b2f037598f3cadfe3c4c42e4"],["/pic/20220817003945_1.jpg","c213ff4d00e9ef8dad57cc5c2740e8b0"],["/pic/20220817004008_1.jpg","d640565664f7b5776bb8dc2dc431aa3c"],["/pic/20220817004015_1.jpg","74b920b9f56d62ea96cdef33dd0e336d"],["/pic/20220817004027_1.jpg","71a6f58e336a38721e9d2001108a2476"],["/pic/20220817004037_1.jpg","b7c19bf63f7449624a207ea2c5b82583"],["/pic/20220817004042_1.jpg","7e74b5678bf451ef546b65a4eb99ac8d"],["/pic/20220817004046_1.jpg","e5ab0d75f64ad5bdd1d99d6884c75b3e"],["/pic/20220817004102_1.jpg","1cad82790f2ca30f7357157e999bf313"],["/pic/20220817004106_1.jpg","ec4cd69ba6f655de9db0dc9c0471d9ff"],["/pic/20220817004110_1.jpg","edbbfefdc863c8576cebdba6d36238ca"],["/pic/20220817004118_1.jpg","02711bc94f02cc176d0eea6349ebe34d"],["/pic/20220817004151_1.jpg","f422ef21e39d357242d20e0f64cfb796"],["/pic/20220817010258_1.jpg","671f5ba87398e583c718ce8c26161b93"],["/pic/20220817011032_1.jpg","75289960551fe815073fb4c75f8f465d"],["/pic/20220818003635_1.jpg","4275d0f0788b9bbec5eafa030ea14a38"],["/pic/20220820011903_1.jpg","abf604d4a3098be977795541592d0245"],["/pic/20220823002920_1.jpg","5ffc414965624f5f79e519cabb40dcff"],["/pic/20220823003114_1.jpg","92066403a2f675af43e7597798bf7701"],["/pic/20220824190456_1.jpg","9c159fa3e7e3753035dacdf2269e1feb"],["/pic/20220824190707_1.jpg","2fc94888cb948c0e71def9be1041be0a"],["/pic/20220824190727_1.jpg","329ee874711f4d13232c699e7075a9ab"],["/pic/20220824190841_1.jpg","01b81a18b9fdd4bf21eca2d30d261d68"],["/pic/20220824191132_1.jpg","79be4d596f275bc51989fbadd98929dc"],["/pic/20220824191643_1.jpg","816fed8c9c6318e589694ac47f8db9ef"],["/pic/20220824203029_1.jpg","8898a2f88cb3e7097b96ecf3e86868ec"],["/pic/20220825203219_1.jpg","bece202076b6309e884fe8f508431ae3"],["/pic/20220825203224_1.jpg","80732d9735bc75675689551fe170bd56"],["/pic/20220825203423_1.jpg","a6cbfedb43722df60234cbababd4e605"],["/pic/20220825203436_1.jpg","8f0e0f0064fedcff9d3a8f403ad4d3ea"],["/pic/20220825221925_1.jpg","79487d5cf79a570fc57448c94f6972f8"],["/pic/20220825222501_1.jpg","ae06e8124d645adc2fdebe1ba43a1aae"],["/pic/20220827144559_1.jpg","3e9e027b58195601ea7b880525ae80d0"],["/pic/20220827144654_1.jpg","044c18a9746dd1a204067c56933e353c"],["/pic/20220827144700_1.jpg","d63203c430a6b668a15e6e5e23df75d4"],["/pic/20220827144705_1.jpg","f37230081e1204e50e8328ca94f3fb37"],["/pic/20220827144712_1.jpg","e747222ea399a9afd0b91ecdbbdf9644"],["/pic/20220827144721_1.jpg","5067e56acc0f7768a8cab0421a010736"],["/pic/20220827144728_1.jpg","003296b16988247ef0b68af762ad2fae"],["/pic/20220827144754_1.jpg","24e897a7aeaea90cbf4557a4a44d56fb"],["/pic/20220827144806_1.jpg","ee702c921deb94063cb6cb2ff914ab5c"],["/pic/20220827145339_1.jpg","dd3e1cebe8c58b03a6fb3eedea1b2347"],["/pic/20220827145345_1.jpg","daa8a1cc509339cb956355ae5f9ab1d1"],["/pic/20220827145406_1.jpg","54192faf0d7466b9da034b1995beb2ce"],["/pic/20220827145824_1.jpg","722265bf20f7c1ed47d125270027ebc9"],["/pic/20220827145936_1.jpg","9dc3a6652241365185e1faed5f69673d"],["/pic/20220827150610_1.jpg","589e036d0d8eba2ef7c571b9abaafb5f"],["/pic/20220827150642_1.jpg","7d2d19b6fe0991c53958b375a3082ecc"],["/pic/20220827150705_1.jpg","2a3641768b3fe4de2e15130eb2bc5a8c"],["/pic/20220827153225_1.jpg","fa9ea70858bbfac107f436f3fe48aefa"],["/pic/20220827173516_1.jpg","6d8c5c7a7269af3a35e4b8d4dbbbb23a"],["/pic/20220827174531_1.jpg","361c07c1a0e1c0f066260acccc70a48e"],["/pic/20220827175224_1.jpg","c29a2fd8d44e71651aa9b2e6f2aafeb2"],["/pic/20220827175250_1.jpg","986b16b064dc8c2192caadca867de045"],["/pic/20220827175624_1.jpg","1e54ab38dbe680339ac3f64c59da0837"],["/pic/20220917165051_1.jpg","daeaf01c6c0dd86572781cc353580308"],["/pic/404.gif","8f666236247ba58c7e6ac02839feb15f"],["/pic/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/pic/BrokenHeart.gif","76ce1f2ba7b67c98794e3cdc2cb4e7f7"],["/pic/Hexagon.png","d12c841fc47dacba0cb6847038c3cdca"],["/pic/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/pic/animals/1662109055739.jpg","eca344d87521b12beaf49bad72d7ba1f"],["/pic/animals/1662109055758.jpg","077a2808d452f3adc5a475e19dbb52b0"],["/pic/animals/1662109055777.jpg","94fdec405e6a6eb73f03888b5d3558f9"],["/pic/animals/1662109055796.jpg","3ce9dda844be5cb6d8bcff3397fe00b5"],["/pic/animals/1662109055816.jpg","69bd8f09d7ce2a8f6d6679ae7bda4e0a"],["/pic/animals/1662109055833.jpg","06cddd4c180002470e7701238d025dda"],["/pic/animals/1662109055850.jpg","17891740932b80698bcb70cc180bdb16"],["/pic/animals/1662109055869.jpg","c5ec5e1448c6ed11359a764cad737a66"],["/pic/animals/1662109055888.jpg","85475e4c585b68862bc28cb0c7db8118"],["/pic/animals/1662109055908.jpg","a4226ee2b81ed3fccdedc89fa16453b0"],["/pic/animals/1662109055928.jpg","d1fba12328115c897f7e1cb88ad581d6"],["/pic/animals/1662109055946.jpg","7cadca9b2384f0e283be78227c446feb"],["/pic/animals/1662109055963.jpg","4dd83d70f086fc42c984de442fa821e7"],["/pic/animals/1662109055982.jpg","7e91cda46041e9827f5e16b6495071dc"],["/pic/animals/1662109056001.jpg","78b100fd654d7e56e239fa1f79b6bc0b"],["/pic/animals/1662109056021.jpg","ff1c58be2c1ef3b0f947f86ed190f0eb"],["/pic/animals/1662109056041.jpg","61eafd903383f8dd50238ce4898ab29f"],["/pic/animals/1662109056059.jpg","dafa17b16bc9a5b07f1273e967e6b128"],["/pic/animals/1662109056076.jpg","42bbad723a6f100855ec07ff24efa276"],["/pic/animals/1662109056094.jpg","43a788a6c3fb94046ef929e5d296599a"],["/pic/animals/1662109056112.jpg","8eb577d28e2f70562fb16e1711cff832"],["/pic/animals/1662109056131.jpg","9c93c4d5fa58ea51bb62fd39c051f417"],["/pic/animals/1662109056169.jpg","c3ebdc29973149ebc67383dbcdda31ca"],["/pic/animals/1662109056185.jpg","e35ee8018f6ca1c7cfb25f25fda7e838"],["/pic/animals/1662109056202.jpg","df088797e3c3348d44db12a4edda9fea"],["/pic/animals/1662109056219.jpg","ae6fa5c4a6188f0792e2d6fcd4a83fe9"],["/pic/animals/1662109056239.jpg","8cfe9410fcd8e9aded824c143423cce6"],["/pic/animals/1662109056258.jpg","b8b1eaf366f38184d15d2102ef269c7b"],["/pic/animals/1662109056273.jpg","96b39a65df9af866f9d33fe5b3e3a726"],["/pic/animals/1662109056289.jpg","34a2a2bccf209490f88f18e698d74cfe"],["/pic/animals/1662109056307.jpg","c255ff878bfe1c384d03ff69fd8f3f5e"],["/pic/animals/1662109056324.jpg","68425ebb10527b8ea6acf326c6ac1fe1"],["/pic/animals/1662109056341.jpg","0cd11cd215d0e5cbb43f28d0bac209de"],["/pic/animals/1662109056358.jpg","d767f8cde5a0d404af02b6d599f25ab4"],["/pic/animals/1662109056392.jpg","155ddb81d41a87c5ca44c0a3be8c5ab4"],["/pic/animals/2022-09-02-17-53-07-011.jpg","75828c2157d71a0e52d0eaf6072780c2"],["/pic/avatar.gif","e8dd5a767ec026ea727b48a7abc9a12a"],["/pic/cover1.jpg","81db5164c09c53ac17152c071578111d"],["/pic/doge.jpg","ac9f5ee492a2c92724390c34d4081a73"],["/pic/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/pic/flower/1663510432103.jpg","edcc85b4da0378882d75bfd0c88a4892"],["/pic/flower/IMG_20180416_173337_1.jpg","73c37dea8b755079711e3f311e54cf1e"],["/pic/flower/IMG_20180416_173624_1.jpg","d9c1fe50aec71a8ae1e5d03f00798f51"],["/pic/flower/IMG_20180425_173503_HDR.jpg","da98301c961693fd98fb550a82941326"],["/pic/flower/IMG_20180425_173514_HDR.jpg","b694ed872324ef705427a9ff750de9a5"],["/pic/flower/IMG_20180428_131924.jpg","d3865d8222851af0c7d78abbc5121d32"],["/pic/flower/IMG_20180508_162541_1.jpg","4bc59739c7fdf1877fc01430cb84bbda"],["/pic/flower/IMG_20180508_162629_1.jpg","f04008437e1463e644de3254e6aad331"],["/pic/flower/IMG_20181110_140825.jpg","7741affec2260026f0406eaa89b97c36"],["/pic/flower/IMG_20190410_072247.jpg","b8d865f44a8dd54637e700f4e2d95ff3"],["/pic/flower/IMG_20190410_072255.jpg","9501e3290270b00708762672818afbb5"],["/pic/flower/IMG_20190417_173826.jpg","30797928174fb632e5aefb97c5d1d0d1"],["/pic/flower/IMG_20190424_142312.jpg","7db2d4e314ab09b68b4c75d5f63884d0"],["/pic/flower/IMG_20190424_142453.jpg","2a5e6376a746c642f0f7b56ac9134570"],["/pic/flower/IMG_20190424_142811.jpg","60bae9afd175eea4fab7b92753f2da4e"],["/pic/flower/IMG_20190517_091327.jpg","3ad56ccd2d74cd1c9405b4ded39095bd"],["/pic/flower/IMG_20190517_091638.jpg","001f5685d6c7d060c5c23ef14b3210f9"],["/pic/flower/IMG_20190523_085735.jpg","91b2fc698f2ac5dd636b49dc02590176"],["/pic/flower/IMG_20190523_091554.jpg","1b1e7c24b329c14e9fa8a63ff5c8b8fd"],["/pic/flower/IMG_20191018_152310.jpg","3e5c82f805cc4765485f7b9ba55c9c57"],["/pic/flower/IMG_20200403_121747.jpg","5a6d0ce3b09b85ffb6efaec214829aba"],["/pic/flower/IMG_20200415_172318.jpg","8752b4990dd92e4e5a645c2752c333c8"],["/pic/flower/IMG_20200506_144002.jpg","21c0e0069c70db3a4cc1a8b336b1669d"],["/pic/flower/IMG_20200601_075211.jpg","551528db4b7118fe1cdbaeff99c15e66"],["/pic/flower/IMG_20200601_075220.jpg","288ab9fa7bc65c28620053da6e9d2494"],["/pic/flower/IMG_20200601_075307.jpg","a77f272a1f2d3aaa7a9050947f814cdb"],["/pic/flower/IMG_20200601_075600.jpg","170e24e4f965b0321202400204faa6cc"],["/pic/flower/IMG_20200608_101505.jpg","1dfca17edd983a40af8daa537611e234"],["/pic/flower/IMG_20200608_103826.jpg","37a54ee3c9926c112525d298f56eee0e"],["/pic/flower/IMG_20200608_120251.jpg","47ea1d44490489731b149cbbec5047eb"],["/pic/flower/IMG_20200609_143851.jpg","0c73ea99b8ac0da47e6bce18f2e61f1a"],["/pic/flower/IMG_20200615_103413.jpg","eee914c48a538eb9bcfa162d0ad16d6a"],["/pic/flower/IMG_20200615_103554.jpg","b217b70c0002111048d32495c831b94d"],["/pic/flower/IMG_20200708_103928.jpg","4672cad91a6e27391862442d2b63b9ef"],["/pic/flower/IMG_20201222_091021.jpg","d45e4411da691382c47196ffb85af2b1"],["/pic/flower/IMG_20210401_172815.jpg","c9a9ecb06f59860f26eb5a575d5b8dc9"],["/pic/flower/IMG_20210401_172845.jpg","2f88d26ee9f57baf436a35c3660fecc1"],["/pic/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/pic/ginkgo/1668359126758.jpg","ba9e991769582f9397999707facd697e"],["/pic/ginkgo/1668359126862.jpg","866eb8919b1e3ee3a7566cc5d810ee40"],["/pic/ginkgo/1668359126906.jpg","817d4ff9395aaede9bdb49d903bcdf8d"],["/pic/ginkgo/1668359126928.jpg","b1e016efadc02e9cb8ae57b22ab7cb44"],["/pic/heart1.jpg","d8a5dbce65e550ea1ef11f2cb12f2c85"],["/pic/heart2.jpg","85ba32accd47c40e0a2f04016276bd8d"],["/pic/heart3.jpg","212ea4d89eeebc19366e8a2a535afa67"],["/pic/heart4.gif","106298a176449f282e4d9fb7900c59bc"],["/pic/heart4.jpg","23afc87a4157b9f269334144a6c19d6e"],["/pic/heart5.gif","2af9e5539b960faac6f77a853e38f481"],["/pic/heart7.gif","5c0302d2f64f83bc59dca726b432fff5"],["/pic/loading.gif","96e8872cb5340a7e1b239d23469bda02"],["/pic/math_cover10.jpg","69bc847ee32b90ecc0b43d803da53246"],["/pic/math_cover6.jpg","a9791dc3663b344286dcc8872d3a06b2"],["/pic/math_cover7.jpg","ec513f78303b6cf73a356fa0f19b1275"],["/pic/math_cover8.jpg","e7e3aaf148f4accb6d4ce182ac8c6305"],["/pic/math_cover9.jpg","ae36543f8e30bcad1f242cb1403c64b4"],["/pic/preview.jpg","6c2768d9d80286dbd80bde6b047f9a65"],["/pic/tuziki.jpg","d4a2145b82ac4984f97815bd139f8d00"],["/pic/xintiao.gif","067fced7166c0995be9f8e468f7cd835"],["/sw-register.js","a97a3408475e677d96cc50e992ff085e"],["/tags/Mathematica/index.html","b84c4df604ba58ede61b4a9b830fff71"],["/tags/Python/index.html","de21450bc7b4ffc85935060d87450f1a"],["/tags/index.html","fcc8ddc9d26cebbba52fa2eec644d8c3"],["/tags/测试/index.html","999399e7d5daf9de4412907221096c0b"],["/tags/爬虫/index.html","d3aef12e6c5b54fa628163fc525cb370"],["/tags/绘图/index.html","3c10ad1be74724c7416be99a5b6a3c56"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"static.addtoany.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */

// 110кВ тал //
var ash103,
  ash104,
  ash105,
  ash106,
  ashsurugaA,
  ashsurugaB = false;
var shus103,
  shus104,
  shus105,
  shus106,
  shussurugaA,
  shussurugaB = false;
var tasluur103,
  tasluur104,
  tasluur105,
  tasluur106,
  tasluurSurugaA,
  tasluurSurugaB = false;
var shins103,
  shins104,
  shins105,
  shins106,
  shinssurugaA,
  shinssurugaB = false;
var tois103,
  tois104,
  tois105,
  tois106,
  toissurugaA,
  toisSurugaA = false;
var gt103,
  gt104,
  gt105,
  gt106,
  gtsurugaA,
  gtsurugaB = false;
var shin1r103r,
  toissh103r,
  toissh105r,
  toisshsurugaAr,
  shin1r105r,
  shin1rSurugaAr = false;
var shina110kv1,
  shina110kv2r,
  shinatoiruu110kv = false;

//--------------------110 kv iin shugamuud--------------------

// ash 103
function ash103zalgah() {
  document.getElementById("ash103").classList.remove("tasarhai");
  document.getElementById("ash103").classList.add("zalgaatai");
  document.getElementById("ash103nemelt").classList.remove("tasarhai");
  document.getElementById("ash103nemelt").classList.add("zalgaatai");
}
function ash103taslah() {
  document.getElementById("ash103").classList.remove("zalgaatai");
  document.getElementById("ash103").classList.add("tasarhai");
  document.getElementById("ash103nemelt").classList.remove("zalgaatai");
  document.getElementById("ash103nemelt").classList.add("tasarhai");
}

function ash103nemeltzalgah() {
  document.getElementById("ash103nemelt").classList.remove("tasarhai");
  document.getElementById("ash103nemelt").classList.add("zalgaatai");
}
function ash103nemeltaslah() {
  document.getElementById("ash103nemelt").classList.remove("zalgaatai");
  document.getElementById("ash103nemelt").classList.add("tasarhai");
}

// ash 104

function ash104zalgah() {
  document.getElementById("ash104").classList.remove("tasarhai");
  document.getElementById("ash104").classList.add("zalgaatai");
}
function ash104taslah() {
  document.getElementById("ash104").classList.remove("zalgaatai");
  document.getElementById("ash104").classList.add("tasarhai");
}

// АШ 105 //
function ash105zalgah() {
  document.getElementById("ash105").classList.remove("tasarhai");
  document.getElementById("ash105").classList.add("zalgaatai");
}

function ash105taslah() {
  document.getElementById("ash105").classList.remove("zalgaatai");
  document.getElementById("ash105").classList.add("tasarhai");
}

// АШ 106 //
function ash106zalgah() {
  document.getElementById("ash106").classList.remove("tasarhai");
  document.getElementById("ash106").classList.add("zalgaatai");
}

function ash106taslah() {
  document.getElementById("ash106").classList.remove("zalgaatai");
  document.getElementById("ash106").classList.add("tasarhai");
}

// АШ суруга А //
function ashsurugaAzalgah() {
  document.getElementById("ashsurugaA").classList.remove("tasarhai");
  document.getElementById("ashsurugaA").classList.add("zalgaatai");
}

function ashsurugaAtaslah() {
  document.getElementById("ashsurugaA").classList.remove("zalgaatai");
  document.getElementById("ashsurugaA").classList.add("tasarhai");
}

// АШ суруга B //
function ashsurugaBzalgah() {
  document.getElementById("ashsurugaB").classList.remove("tasarhai");
  document.getElementById("ashsurugaB").classList.add("zalgaatai");
}

function ashsurugaBtaslah() {
  document.getElementById("ashsurugaB").classList.remove("zalgaatai");
  document.getElementById("ashsurugaB").classList.add("tasarhai");
}

// --------------------110kv shina-------------------- //
function shinatoitzalgah() {
  document.getElementById("toissh110kv").classList.remove("shin");
  document.getElementById("toissh110kv").classList.add("shinzalgaatai");
  document.getElementById("shinatoitjijig").classList.remove("tasarhai");
  document.getElementById("shinatoitjijig").classList.add("zalgaatai");
}

function shinatoittaslah() {
  document.getElementById("toissh110kv").classList.remove("shinzalgaatai");
  document.getElementById("toissh110kv").classList.add("shin");
  document.getElementById("shinatoitjijig").classList.remove("zalgaatai");
  document.getElementById("shinatoitjijig").classList.add("tasarhai");
}

function shina110kv1rzalgah() {
  document.getElementById("110kv1rssh").classList.remove("shin");
  document.getElementById("110kv1rssh").classList.add("shinzalgaatai");
  document.getElementById("110kv1rsshjijig").classList.remove("tasarhai");
  document.getElementById("110kv1rsshjijig").classList.add("zalgaatai");
}

function shina110kv1rtaslah() {
  document.getElementById("110kv1rssh").classList.remove("shinzalgaatai");
  document.getElementById("110kv1rssh").classList.add("shin");
  document.getElementById("110kv1rsshjijig").classList.remove("zalgaatai");
  document.getElementById("110kv1rsshjijig").classList.add("tasarhai");
}
// 110 2r system shin

function shina110kv2rzalgah() {
  document.getElementById("110kv2rssh").classList.remove("shin");
  document.getElementById("110kv2rssh").classList.add("shinzalgaatai");
  document.getElementById("110kv2rsshjijig").classList.remove("tasarhai");
  document.getElementById("110kv2rsshjijig").classList.add("zalgaatai");
}

function shina110kv2rtaslah() {
  document.getElementById("110kv2rssh").classList.remove("shinzalgaatai");
  document.getElementById("110kv2rssh").classList.add("shin");
  document.getElementById("110kv2rsshjijig").classList.remove("zalgaatai");
  document.getElementById("110kv2rsshjijig").classList.add("tasarhai");
}

// --------------------110kv shina duusav--------------------

//--------------------110 kv salguuruud--------------------
// tois //
// 103 tois //
function tois103zalgah() {
  document.getElementById("tois103").classList.remove("salguur");
  document.getElementById("tois103").classList.add("salgzalgaatai");
}

function tois103taslah() {
  document.getElementById("tois103").classList.remove("salgzalgaatai");
  document.getElementById("tois103").classList.add("salguur");
}
// 104 tois //
function tois104zalgah() {
  document.getElementById("tois104").classList.remove("salguur");
  document.getElementById("tois104").classList.add("salgzalgaatai");
}

function tois104taslah() {
  document.getElementById("tois104").classList.remove("salgzalgaatai");
  document.getElementById("tois104").classList.add("salguur");
}
// tois Toit //
function toisToitzalgah() {
  document.getElementById("toitTois").classList.remove("salguur");
  document.getElementById("toitTois").classList.add("salgzalgaatai");
}

function toisToittaslah() {
  document.getElementById("toitTois").classList.remove("salgzalgaatai");
  document.getElementById("toitTois").classList.add("salguur");
}

// T2 tois //
function toisT2zalgah() {
  document.getElementById("toisT2").classList.remove("salguur");
  document.getElementById("toisT2").classList.add("salgzalgaatai");
}

function toisT2taslah() {
  document.getElementById("toisT2").classList.remove("salgzalgaatai");
  document.getElementById("toisT2").classList.add("salguur");
}
// T1 tois //
function toisT2zalgah() {
  document.getElementById("toisT1").classList.remove("salguur");
  document.getElementById("toisT1").classList.add("salgzalgaatai");
}

function toisT2taslah() {
  document.getElementById("toisT1").classList.remove("salgzalgaatai");
  document.getElementById("toisT1").classList.add("salguur");
}

// tois 105 //
function tois105zalgah() {
  document.getElementById("tois105").classList.remove("salguur");
  document.getElementById("tois105").classList.add("salgzalgaatai");
}

function tois105taslah() {
  document.getElementById("tois105").classList.remove("salgzalgaatai");
  document.getElementById("tois105").classList.add("salguur");
}

// tois 106 //
function tois106zalgah() {
  document.getElementById("tois106").classList.remove("salguur");
  document.getElementById("tois106").classList.add("salgzalgaatai");
}

function tois106taslah() {
  document.getElementById("tois106").classList.remove("salgzalgaatai");
  document.getElementById("tois106").classList.add("salguur");
}

// tois SurugaA //
function toissurugaAzalgah() {
  document.getElementById("toisSurugaA").classList.remove("salguur");
  document.getElementById("toisSurugaA").classList.add("salgzalgaatai");
}

function toisSurugaAtaslah() {
  document.getElementById("toisSurugaA").classList.remove("salgzalgaatai");
  document.getElementById("toisSurugaA").classList.add("salguur");
}

// tois SurugaB //
function toissurugaBzalgah() {
  document.getElementById("toisSurugaB").classList.remove("salguur");
  document.getElementById("toisSurugaB").classList.add("salgzalgaatai");
}

function toisSurugaBtaslah() {
  document.getElementById("toisSurugaB").classList.remove("salgzalgaatai");
  document.getElementById("toisSurugaB").classList.add("salguur");
}

// 110 kv ХТ-1 ШинС ///
function shins110ht1zalgah() {
  document.getElementById("shins110ht1").classList.remove("salguur");
  document.getElementById("shins110ht1").classList.add("salgzalgaatai");
}

function shins110ht1taslah() {
  document.getElementById("shins110ht1").classList.remove("salgzalgaatai");
  document.getElementById("shins110ht1").classList.add("salguur");
}

// 110 kv ХТ-2 ШинС ///
function shins110ht2zalgah() {
  document.getElementById("shins110ht2").classList.remove("salguur");
  document.getElementById("shins110ht2").classList.add("salgzalgaatai");
}

function shins110ht2taslah() {
  document.getElementById("shins110ht2").classList.remove("salgzalgaatai");
  document.getElementById("shins110ht2").classList.add("salguur");
}

// Shus ba TrS//

// shus 103
function shus103zalgah() {
  document.getElementById("103shus").classList.remove("salguur");
  document.getElementById("103shus").classList.add("salgzalgaatai");
}

function shus103taslah() {
  document.getElementById("103shus").classList.remove("salgzalgaatai");
  document.getElementById("103shus").classList.add("salguur");
}

//shus 104

function shus104zalgah() {
  document.getElementById("shus104").classList.remove("salguur");
  document.getElementById("shus104").classList.add("salgzalgaatai");
}

function shus104taslah() {
  document.getElementById("shus104").classList.remove("salgzalgaatai");
  document.getElementById("shus104").classList.add("salguur");
}

// t1 Trs //

function Trs110T1zalgah() {
  document.getElementById("Trs110T1").classList.remove("salguur");
  document.getElementById("Trs110T1").classList.add("salgzalgaatai");
}

function Trs110T2taslah() {
  document.getElementById("Trs110T1").classList.remove("salgzalgaatai");
  document.getElementById("Trs110T1").classList.add("salguur");
}

// t2 Trs //

function Trs110T2zalgah() {
  document.getElementById("Trs110T2").classList.remove("salguur");
  document.getElementById("Trs110T2").classList.add("salgzalgaatai");
}

function Trs110T2taslah() {
  document.getElementById("Trs110T2").classList.remove("salgzalgaatai");
  document.getElementById("Trs110T2").classList.add("salguur");
}

//shus 105

function shus105zalgah() {
  document.getElementById("shus105").classList.remove("salguur");
  document.getElementById("shus105").classList.add("salgzalgaatai");
}

function shus105taslah() {
  document.getElementById("shus105").classList.remove("salgzalgaatai");
  document.getElementById("shus105").classList.add("salguur");
}

// shus 106
function shus106zalgah() {
  document.getElementById("shus106").classList.remove("salguur");
  document.getElementById("shus106").classList.add("salgzalgaatai");
}

function shus106taslah() {
  document.getElementById("shus106").classList.remove("salgzalgaatai");
  document.getElementById("shus106").classList.add("salguur");
}

//shus SurugaA

function shussurugaAzalgah() {
  document.getElementById("shussurugaA").classList.remove("salguur");
  document.getElementById("shussurugaA").classList.add("salgzalgaatai");
}

function shussurugaAtaslah() {
  document.getElementById("shussurugaA").classList.remove("salgzalgaatai");
  document.getElementById("shussurugaA").classList.add("salguur");
}

//shus SurugaB

function shussurugaBzalgah() {
  document.getElementById("shussurugaB").classList.remove("salguur");
  document.getElementById("shussurugaB").classList.add("salgzalgaatai");
}

function shussurugaBtaslah() {
  document.getElementById("shussurugaB").classList.remove("salgzalgaatai");
  document.getElementById("shussurugaB").classList.add("salguur");
}

//shins//

//shins 103//

function shins103zalgah() {
  document.getElementById("shins103").classList.remove("salguur");
  document.getElementById("shins103").classList.add("salgzalgaatai");
}

function shins103taslah() {
  document.getElementById("shins103").classList.remove("salgzalgaatai");
  document.getElementById("shins103").classList.add("salguur");
}

//shins 104//

function shins104zalgah() {
  document.getElementById("shins104").classList.remove("salguur");
  document.getElementById("shins104").classList.add("salgzalgaatai");
}

function shins104taslah() {
  document.getElementById("shins104").classList.remove("salgzalgaatai");
  document.getElementById("shins104").classList.add("salguur");
}

// shins 105//
function shins105zalgah() {
  document.getElementById("shins105").classList.remove("salguur");
  document.getElementById("shins105").classList.add("salgzalgaatai");
}

function shins105taslah() {
  document.getElementById("shins105").classList.remove("salgzalgaatai");
  document.getElementById("shins105").classList.add("salguur");
}

// shins 106//
function shins106zalgah() {
  document.getElementById("shins106").classList.remove("salguur");
  document.getElementById("shins106").classList.add("salgzalgaatai");
}

function shins106taslah() {
  document.getElementById("shins106").classList.remove("salgzalgaatai");
  document.getElementById("shins106").classList.add("salguur");
}

// shins SurugaA//
function shinssurugaAzalgah() {
  document.getElementById("shinssurugaA").classList.remove("salguur");
  document.getElementById("shinssurugaA").classList.add("salgzalgaatai");
}

function shinssurugaAtaslah() {
  document.getElementById("shinssurugaA").classList.remove("salgzalgaatai");
  document.getElementById("shinssurugaA").classList.add("salguur");
}

// shins SurugaB//
function shinssurugaBzalgah() {
  document.getElementById("shinssurugaB").classList.remove("salguur");
  document.getElementById("shinssurugaB").classList.add("salgzalgaatai");
}

function shinssurugaBtaslah() {
  document.getElementById("shinssurugaB").classList.remove("salgzalgaatai");
  document.getElementById("shinssurugaB").classList.add("salguur");
}

// shins Toit shins-1//
function toitshins1zalgah() {
  document.getElementById("toitshins1").classList.remove("salguur");
  document.getElementById("toitshins1").classList.add("salgzalgaatai");
}

function toitshins1taslah() {
  document.getElementById("toitshins1").classList.remove("salgzalgaatai");
  document.getElementById("toitshins1").classList.add("salguur");
}

// shins Toit shins-2//
function toitshins2zalgah() {
  document.getElementById("toitshins2").classList.remove("salguur");
  document.getElementById("toitshins2").classList.add("salgzalgaatai");
}

function toitshins2taslah() {
  document.getElementById("toitshins2").classList.remove("salgzalgaatai");
  document.getElementById("toitshins2").classList.add("salguur");
}

// shins 110 T1//
function shins110T1zalgah() {
  document.getElementById("shins110T1").classList.remove("salguur");
  document.getElementById("shins110T1").classList.add("salgzalgaatai");
}

function shins110T1taslah() {
  document.getElementById("shins110T1").classList.remove("salgzalgaatai");
  document.getElementById("shins110T1").classList.add("salguur");
}

// shins 110 T2//
function shins110T2zalgah() {
  document.getElementById("shins110T2").classList.remove("salguur");
  document.getElementById("shins110T2").classList.add("salgzalgaatai");
}

function shins110T2taslah() {
  document.getElementById("shins110T2").classList.remove("salgzalgaatai");
  document.getElementById("shins110T2").classList.add("salguur");
}

// shins-1 110 SHT//
function shins1SHT110zalgah() {
  document.getElementById("shins1SHT110").classList.remove("salguur");
  document.getElementById("shins1SHT110").classList.add("salgzalgaatai");
}

function shins1SHT110taslah() {
  document.getElementById("shins1SHT110").classList.remove("salgzalgaatai");
  document.getElementById("shins1SHT110").classList.add("salguur");
}

// shins-2 110 SHT//
function shins2SHT110zalgah() {
  document.getElementById("shins2SHT110").classList.remove("salguur");
  document.getElementById("shins2SHT110").classList.add("salgzalgaatai");
}

function shins2SHT110taslah() {
  document.getElementById("shins2SHT110").classList.remove("salgzalgaatai");
  document.getElementById("shins2SHT110").classList.add("salguur");
}

// --------------------110 kv salguuruud duusav--------------------

//--------------------110 kv tasluuruud--------------------

// tasluur 103//
function tasluur103zalgah() {
  document.getElementById("tasluur103").classList.remove("ettasarhai");
  document.getElementById("tasluur103").classList.add("etzalgaatai");
}

function tasluur103taslah() {
  document.getElementById("tasluur103").classList.remove("etzalgaatai");
  document.getElementById("tasluur103").classList.add("ettasarhai");
}

// tasluur 104//
function tasluur104zalgah() {
  document.getElementById("tasluur104").classList.remove("ettasarhai");
  document.getElementById("tasluur104").classList.add("etzalgaatai");
}

function tasluur104taslah() {
  document.getElementById("tasluur104").classList.remove("etzalgaatai");
  document.getElementById("tasluur104").classList.add("ettasarhai");
}

// tasluur 105//
function tasluur105zalgah() {
  document.getElementById("tasluur105").classList.remove("ettasarhai");
  document.getElementById("tasluur105").classList.add("etzalgaatai");
}

function tasluur105taslah() {
  document.getElementById("tasluur105").classList.remove("etzalgaatai");
  document.getElementById("tasluur105").classList.add("ettasarhai");
}

// tasluur 106//
function tasluur106zalgah() {
  document.getElementById("tasluur106").classList.remove("ettasarhai");
  document.getElementById("tasluur106").classList.add("etzalgaatai");
}

function tasluur106taslah() {
  document.getElementById("tasluur106").classList.remove("etzalgaatai");
  document.getElementById("tasluur106").classList.add("ettasarhai");
}

// tasluur Toit//
function tasluurToitzalgah() {
  document.getElementById("tasluurToit").classList.remove("ettasarhai");
  document.getElementById("tasluurToit").classList.add("etzalgaatai");
}

function tasluurToittaslah() {
  document.getElementById("tasluurToit").classList.remove("etzalgaatai");
  document.getElementById("tasluurToit").classList.add("ettasarhai");
}

// tasluur T1 110//
function tasluur110T1zalgah() {
  document.getElementById("tasluur110T1").classList.remove("ettasarhai");
  document.getElementById("tasluur110T1").classList.add("etzalgaatai");
}

function tasluur110T1taslah() {
  document.getElementById("tasluur110T1").classList.remove("etzalgaatai");
  document.getElementById("tasluur110T1").classList.add("ettasarhai");
}

// tasluur T2 110//
function tasluur110T2zalgah() {
  document.getElementById("tasluur110T2").classList.remove("ettasarhai");
  document.getElementById("tasluur110T2").classList.add("etzalgaatai");
}

function tasluur110T2taslah() {
  document.getElementById("tasluur110T2").classList.remove("etzalgaatai");
  document.getElementById("tasluur110T2").classList.add("ettasarhai");
}

// tasluur SHT 110//
function tasluur110SHTzalgah() {
  document.getElementById("tasluur110SHT").classList.remove("ettasarhai");
  document.getElementById("tasluur110SHT").classList.add("etzalgaatai");
}

function tasluur110SHTtaslah() {
  document.getElementById("tasluur110SHT").classList.remove("etzalgaatai");
  document.getElementById("tasluur110SHT").classList.add("ettasarhai");
}

// tasluur SurugaA 110//
function tasluurSurugaAzalgah() {
  document.getElementById("tasluurSurugaA").classList.remove("ettasarhai");
  document.getElementById("tasluurSurugaA").classList.add("etzalgaatai");
}

function tasluurSurugaAtaslah() {
  document.getElementById("tasluurSurugaA").classList.remove("etzalgaatai");
  document.getElementById("tasluurSurugaA").classList.add("ettasarhai");
}

// tasluur SurugaB 110//
function tasluurSurugaBzalgah() {
  document.getElementById("tasluurSurugaB").classList.remove("ettasarhai");
  document.getElementById("tasluurSurugaB").classList.add("etzalgaatai");
}

function tasluurSurugaBtaslah() {
  document.getElementById("tasluurSurugaB").classList.remove("etzalgaatai");
  document.getElementById("tasluurSurugaB").classList.add("ettasarhai");
}

//--------------------110 kv iin gtuud--------------------
// gt 103//
function gt103zalgah() {
  document.getElementById("gt103").classList.remove("tasarhai");
  document.getElementById("gt103").classList.add("zalgaatai");
}

function gt103taslah() {
  document.getElementById("gt103").classList.remove("zalgaatai");
  document.getElementById("gt103").classList.add("tasarhai");
}

//gt 104//
function gt104zalgah() {
  document.getElementById("gt104").classList.remove("tasarhai");
  document.getElementById("gt104").classList.add("zalgaatai");
}

function gt104taslah() {
  document.getElementById("gt104").classList.remove("zalgaatai");
  document.getElementById("gt104").classList.add("tasarhai");
}

// gt Toit

function gttoitzalgah() {
  document.getElementById("gttoit").classList.remove("tasarhai");
  document.getElementById("gttoit").classList.add("zalgaatai");
}

function gttoittaslah() {
  document.getElementById("gttoit").classList.remove("zalgaatai");
  document.getElementById("gttoit").classList.add("tasarhai");
}
//gt 105//
function gt105zalgah() {
  document.getElementById("gt105").classList.remove("tasarhai");
  document.getElementById("gt105").classList.add("zalgaatai");
}

function gt105taslah() {
  document.getElementById("gt105").classList.remove("zalgaatai");
  document.getElementById("gt105").classList.add("tasarhai");
}

//gt 106//
function gt106zalgah() {
  document.getElementById("gt106").classList.remove("tasarhai");
  document.getElementById("gt106").classList.add("zalgaatai");
}

function gt106taslah() {
  document.getElementById("gt106").classList.remove("zalgaatai");
  document.getElementById("gt106").classList.add("tasarhai");
}

//gt SurugaA//
function gtsurugaAzalgah() {
  document.getElementById("gtsurugaA").classList.remove("tasarhai");
  document.getElementById("gtsurugaA").classList.add("zalgaatai");
}

function gtsurugaAtaslah() {
  document.getElementById("gtsurugaA").classList.remove("zalgaatai");
  document.getElementById("gtsurugaA").classList.add("tasarhai");
}

//gt SurugaB//
function gtsurugaBzalgah() {
  document.getElementById("gtsurugaB").classList.remove("tasarhai");
  document.getElementById("gtsurugaB").classList.add("zalgaatai");
}

function gtsurugaBtaslah() {
  document.getElementById("gtsurugaB").classList.remove("zalgaatai");
  document.getElementById("gtsurugaB").classList.add("tasarhai");
}

//gt-1 SHT//
function gtSHT1zalgah() {
  document.getElementById("gtSHT1").classList.remove("tasarhai");
  document.getElementById("gtSHT1").classList.add("zalgaatai");
}

function gtSHT1taslah() {
  document.getElementById("gtSHT1").classList.remove("zalgaatai");
  document.getElementById("gtSHT1").classList.add("tasarhai");
}

//gt-2 SHT//
function gtSHT2zalgah() {
  document.getElementById("gtSHT2").classList.remove("tasarhai");
  document.getElementById("gtSHT2").classList.add("zalgaatai");
}

function gtSHT2taslah() {
  document.getElementById("gtSHT2").classList.remove("zalgaatai");
  document.getElementById("gtSHT2").classList.add("tasarhai");
}

//--------------------110 kv iin gtuud duusav--------------------

//--------------------110 kv iin htuud --------------------------
// 110 ht-1 //
function ht1110zalgah() {
  document.getElementById("ht1110").classList.remove("tasarhai");
  document.getElementById("ht1110").classList.add("zalgaatai");
}

function ht1110taslah() {
  document.getElementById("ht1110").classList.remove("zalgaatai");
  document.getElementById("ht1110").classList.add("tasarhai");
}

// 110 ht-2 //
function ht2110zalgah() {
  document.getElementById("ht2110").classList.remove("tasarhai");
  document.getElementById("ht2110").classList.add("zalgaatai");
}

function ht2110taslah() {
  document.getElementById("ht2110").classList.remove("zalgaatai");
  document.getElementById("ht2110").classList.add("tasarhai");
}

//--------------------110 kv iin htuud duusav--------------------

//--------------------Трансформатор--------------------

// Т-1 трансформатор //
function transformator1zalgah() {
  document.getElementById("transformator1").classList.remove("tasarhai");
  document.getElementById("transformator1").classList.add("zalgaatai");
}

function transformator1taslah() {
  document.getElementById("transformator1").classList.remove("zalgaatai");
  document.getElementById("transformator1").classList.add("tasarhai");
}

// Т-2 трансформатор //
function transformato2zalgah() {
  document.getElementById("transformator2").classList.remove("tasarhai");
  document.getElementById("transformator2").classList.add("zalgaatai");
}

function transformator2taslah() {
  document.getElementById("transformator2").classList.remove("zalgaatai");
  document.getElementById("transformator2").classList.add("tasarhai");
}

//--------------------Трансформатор дуусав--------------------

//--------------------110 kv iin shins ghtei--------------------
// shinsghtai 103
function shinsghtai103zalgah() {
  document.getElementById("shinsghtai103").classList.remove("tasarhai");
  document.getElementById("shinsghtai103").classList.add("zalgaatai");
}

function shinsghtai103taslah() {
  document.getElementById("shinsghtai103").classList.remove("zalgaatai");
  document.getElementById("shinsghtai103").classList.add("tasarhai");
}

// shinsghtai 104
function shinsghtai104zalgah() {
  document.getElementById("shinsghtai104").classList.remove("tasarhai");
  document.getElementById("shinsghtai104").classList.add("zalgaatai");
}

function shinsghtai104taslah() {
  document.getElementById("shinsghtai104").classList.remove("zalgaatai");
  document.getElementById("shinsghtai104").classList.add("tasarhai");
}

// shinsghtai 105//
function shinsghtai105zalgah() {
  document.getElementById("shinsghtai105").classList.remove("tasarhai");
  document.getElementById("shinsghtai105").classList.add("zalgaatai");
}

function shinsghtai105taslah() {
  document.getElementById("shinsghtai105").classList.remove("zalgaatai");
  document.getElementById("shinsghtai105").classList.add("tasarhai");
}

// shinsghtai 106//
function shinsghtai106zalgah() {
  document.getElementById("shinsghtai106").classList.remove("tasarhai");
  document.getElementById("shinsghtai106").classList.add("zalgaatai");
}

function shinsghtai106taslah() {
  document.getElementById("shinsghtai106").classList.remove("zalgaatai");
  document.getElementById("shinsghtai106").classList.add("tasarhai");
}

// shinsghtai Suruga-A //
function shinsghtaisurugaAzalgah() {
  document.getElementById("shinsghtaisurugaA").classList.remove("tasarhai");
  document.getElementById("shinsghtaisurugaA").classList.add("zalgaatai");
}

function shinsghtaisurugaAtaslah() {
  document.getElementById("shinsghtaisurugaA").classList.remove("zalgaatai");
  document.getElementById("shinsghtaisurugaA").classList.add("tasarhai");
}

// shinsghtai Suruga-B //
function shinsghtaisurugaBzalgah() {
  document.getElementById("shinsghtaisurugaB").classList.remove("tasarhai");
  document.getElementById("shinsghtaisurugaB").classList.add("zalgaatai");
}

function shinsghtaisurugaBtaslah() {
  document.getElementById("shinsghtaisurugaB").classList.remove("zalgaatai");
  document.getElementById("shinsghtaisurugaB").classList.add("tasarhai");
}

// 110 kv iin shins ghtei duusav

//----------------------------------------------buttons----------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------//

// 103 zalgah taslah
function ash103ZalgahButton() {
  ash103 = true;
  ash103zalgah();
  if (shus103) {
    gt103zalgah();
    if (tasluur103) {
      shinsghtai103zalgah();
      if (shins103) {
        shina110kv1rzalgah();
        shin1r103r = true;
      }
    }
  }
  if (tois103) {
    shinatoitzalgah();
    toissh103r = true;
  }
}

function ash103TaslahButton() {
  ash103 = false;
  ash103taslah();
  if (shus103) {
    gt103taslah();
    if (tasluur103) {
      shinsghtai103taslah();
      if (shins103) {
        shina110kv1rtaslah();
        shin1r103r = false;
      }
    }
  }
  if (tois103) {
    shinatoittaslah();
    toissh103r = false;
    if (toissh105r) {
      ash103zalgah();
      shinatoitzalgah();
      if (shus103) {
        gt103zalgah();
        if (tasluur103) {
          shinsghtai103zalgah();
          if (shins103) {
            shina110kv1rzalgah();
          }
        }
      }
    }
  }
}

function Tois103zalgahbutton() {
  tois103 = true;
  tois103zalgah();
  if (ash103) {
    shinatoitzalgah();
    toissh103r = true;
  }
  if (toissh105r) {
    ash103zalgah();
    if (shus103) {
      gt103zalgah();
      if (tasluur103) {
        shinsghtai103zalgah();
        if (shins103) {
          shina110kv1rzalgah();
          shin1r103r = true;
        }
      }
    }
  }
}

function Tois103taslahbutton() {
  tois103 = false;
  tois103taslah();
  if (ash103) {
    shinatoittaslah();
    if (toissh105r) {
      shinatoitzalgah();
    }
  }
  if (ash103 === false) {
    ash103taslah();
    if (shus103) {
      gt103taslah();
      if (tasluur103) {
        shinsghtai103taslah();
        if (shins103) {
          shina110kv1rtaslah();
          shin1r105r = false;
        }
      }
    }
  }
}

function shus103ZalgahButton() {
  shus103 = true;
  shus103zalgah();
}

function shus103TaslahButton() {
  shus103 = false;
  shus103taslah();
}

function tasluur103ZalgahButton() {
  tasluur103 = true;
  tasluur103zalgah();
}

function tasluur103TaslahButton() {
  tasluur103 = false;
  tasluur103taslah();
}

function shins103ZalgahButton() {
  shins103 = true;
  shins103zalgah();
}

function shins103TaslahButton() {
  shins103 = false;
  shins103taslah();
}

/////////////////////////////////////////////105 АШ //////////////////////////////////////////

function ash105ZalgahButton() {
  ash105 = true;
  ash105zalgah();
  if (shus105) {
    gt105zalgah();
    if (tasluur105) {
      shinsghtai105zalgah();
      if (shins105) {
        shina110kv1rzalgah();
        shin1r105r = true;
      }
    }
  }
  if (tois105) {
    shinatoitzalgah();
    toissh105r = true;
  }
}

function ash105TaslahButton() {
  ash105 = false;
  ash105taslah();
}

function Tois105zalgahbutton() {
  tois105 = true;
  tois105zalgah();
}

function Tois105taslahbutton() {
  tois105 = false;
  tois105taslah();
}

function shus105ZalgahButton() {
  shus105 = true;
  shus105zalgah();
}

function shus105TaslahButton() {
  shus105 = false;
  shus105taslah();
}

function tasluur105ZalgahButton() {
  tasluur105 = true;
  tasluur105zalgah();
}

function tasluur105TaslahButton() {
  tasluur105 = false;
  tasluur105taslah();
}

function shins105ZalgahButton() {
  shins105 = true;
  shins105zalgah();
}

function shins105TaslahButton() {
  shins105 = false;
  shins105taslah();
}

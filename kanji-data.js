// kanji-data.js
// بيانات الكانجي - نيهونجو بالعربي
// الدفعة الأولى: أساسيات N5 (٦٥ حرف الأكثر شيوعاً)
// البنية جاهزة للتوسع بإضافة باقي N5 ثم N4 في دفعات لاحقة

const kanjiData = [
  // ===== الأرقام =====
  { char:"一", strokes:1, level:"N5", onyomi:["イチ (ichi)"], kunyomi:["ひと (hito)"], meaning_ar:"واحد", examples:[{word:"一つ",reading:"ひとつ",meaning_ar:"شيء واحد"},{word:"一月",reading:"いちがつ",meaning_ar:"يناير"}] },
  { char:"二", strokes:2, level:"N5", onyomi:["ニ (ni)"], kunyomi:["ふた (futa)"], meaning_ar:"اثنان", examples:[{word:"二つ",reading:"ふたつ",meaning_ar:"شيئان"},{word:"二月",reading:"にがつ",meaning_ar:"فبراير"}] },
  { char:"三", strokes:3, level:"N5", onyomi:["サン (san)"], kunyomi:["みっ (mit)"], meaning_ar:"ثلاثة", examples:[{word:"三つ",reading:"みっつ",meaning_ar:"ثلاثة أشياء"},{word:"三月",reading:"さんがつ",meaning_ar:"مارس"}] },
  { char:"四", strokes:5, level:"N5", onyomi:["シ (shi)"], kunyomi:["よん (yon)","よ (yo)"], meaning_ar:"أربعة", examples:[{word:"四つ",reading:"よっつ",meaning_ar:"أربعة أشياء"},{word:"四月",reading:"しがつ",meaning_ar:"أبريل"}] },
  { char:"五", strokes:4, level:"N5", onyomi:["ゴ (go)"], kunyomi:["いつ (itsu)"], meaning_ar:"خمسة", examples:[{word:"五つ",reading:"いつつ",meaning_ar:"خمسة أشياء"},{word:"五月",reading:"ごがつ",meaning_ar:"مايو"}] },
  { char:"六", strokes:4, level:"N5", onyomi:["ロク (roku)"], kunyomi:["むっ (mut)"], meaning_ar:"ستة", examples:[{word:"六つ",reading:"むっつ",meaning_ar:"ستة أشياء"},{word:"六月",reading:"ろくがつ",meaning_ar:"يونيو"}] },
  { char:"七", strokes:2, level:"N5", onyomi:["シチ (shichi)"], kunyomi:["なな (nana)"], meaning_ar:"سبعة", examples:[{word:"七つ",reading:"ななつ",meaning_ar:"سبعة أشياء"},{word:"七月",reading:"しちがつ",meaning_ar:"يوليو"}] },
  { char:"八", strokes:2, level:"N5", onyomi:["ハチ (hachi)"], kunyomi:["やっ (yat)"], meaning_ar:"ثمانية", examples:[{word:"八つ",reading:"やっつ",meaning_ar:"ثمانية أشياء"},{word:"八月",reading:"はちがつ",meaning_ar:"أغسطس"}] },
  { char:"九", strokes:2, level:"N5", onyomi:["キュウ (kyuu)","ク (ku)"], kunyomi:["ここの (kokono)"], meaning_ar:"تسعة", examples:[{word:"九つ",reading:"ここのつ",meaning_ar:"تسعة أشياء"},{word:"九月",reading:"くがつ",meaning_ar:"سبتمبر"}] },
  { char:"十", strokes:2, level:"N5", onyomi:["ジュウ (juu)"], kunyomi:["とお (too)"], meaning_ar:"عشرة", examples:[{word:"十日",reading:"とおか",meaning_ar:"اليوم العاشر / عشرة أيام"},{word:"十月",reading:"じゅうがつ",meaning_ar:"أكتوبر"}] },
  { char:"百", strokes:6, level:"N5", onyomi:["ヒャク (hyaku)"], kunyomi:[], meaning_ar:"مئة", examples:[{word:"百円",reading:"ひゃくえん",meaning_ar:"مئة ين"}] },
  { char:"千", strokes:3, level:"N5", onyomi:["セン (sen)"], kunyomi:["ち (chi)"], meaning_ar:"ألف", examples:[{word:"三千",reading:"さんぜん",meaning_ar:"ثلاثة آلاف"}] },
  { char:"万", strokes:3, level:"N5", onyomi:["マン (man)"], kunyomi:[], meaning_ar:"عشرة آلاف", examples:[{word:"一万",reading:"いちまん",meaning_ar:"عشرة آلاف"}] },
  { char:"円", strokes:4, level:"N5", onyomi:["エン (en)"], kunyomi:["まる (maru)"], meaning_ar:"دائرة / ين (عملة)", examples:[{word:"百円",reading:"ひゃくえん",meaning_ar:"مئة ين"}] },

  // ===== الزمن =====
  { char:"日", strokes:4, level:"N5", onyomi:["ニチ (nichi)","ジツ (jitsu)"], kunyomi:["ひ (hi)","か (ka)"], meaning_ar:"شمس / يوم", examples:[{word:"日本",reading:"にほん",meaning_ar:"اليابان"},{word:"今日",reading:"きょう",meaning_ar:"اليوم"}] },
  { char:"月", strokes:4, level:"N5", onyomi:["ゲツ (getsu)","ガツ (gatsu)"], kunyomi:["つき (tsuki)"], meaning_ar:"قمر / شهر", examples:[{word:"月曜日",reading:"げつようび",meaning_ar:"الإثنين"},{word:"一月",reading:"いちがつ",meaning_ar:"يناير"}] },
  { char:"火", strokes:4, level:"N5", onyomi:["カ (ka)"], kunyomi:["ひ (hi)"], meaning_ar:"نار", examples:[{word:"火曜日",reading:"かようび",meaning_ar:"الثلاثاء"}] },
  { char:"水", strokes:4, level:"N5", onyomi:["スイ (sui)"], kunyomi:["みず (mizu)"], meaning_ar:"ماء", examples:[{word:"水曜日",reading:"すいようび",meaning_ar:"الأربعاء"},{word:"水",reading:"みず",meaning_ar:"ماء"}] },
  { char:"木", strokes:4, level:"N5", onyomi:["モク (moku)"], kunyomi:["き (ki)"], meaning_ar:"شجرة / خشب", examples:[{word:"木曜日",reading:"もくようび",meaning_ar:"الخميس"}] },
  { char:"金", strokes:8, level:"N5", onyomi:["キン (kin)"], kunyomi:["かね (kane)"], meaning_ar:"ذهب / مال", examples:[{word:"金曜日",reading:"きんようび",meaning_ar:"الجمعة"},{word:"お金",reading:"おかね",meaning_ar:"فلوس"}] },
  { char:"土", strokes:3, level:"N5", onyomi:["ド (do)"], kunyomi:["つち (tsuchi)"], meaning_ar:"تراب", examples:[{word:"土曜日",reading:"どようび",meaning_ar:"السبت"}] },
  { char:"曜", strokes:18, level:"N5", onyomi:["ヨウ (you)"], kunyomi:[], meaning_ar:"يوم من أيام الأسبوع", examples:[{word:"何曜日",reading:"なんようび",meaning_ar:"أي يوم"}] },
  { char:"年", strokes:6, level:"N5", onyomi:["ネン (nen)"], kunyomi:["とし (toshi)"], meaning_ar:"سنة", examples:[{word:"今年",reading:"ことし",meaning_ar:"هذه السنة"},{word:"来年",reading:"らいねん",meaning_ar:"السنة الجاية"}] },
  { char:"時", strokes:10, level:"N5", onyomi:["ジ (ji)"], kunyomi:["とき (toki)"], meaning_ar:"وقت / ساعة", examples:[{word:"時間",reading:"じかん",meaning_ar:"وقت / مدة"},{word:"三時",reading:"さんじ",meaning_ar:"الساعة ثلاثة"}] },
  { char:"分", strokes:4, level:"N5", onyomi:["フン (fun)","ブン (bun)"], kunyomi:["わ (wa)"], meaning_ar:"دقيقة / ينقسم", examples:[{word:"五分",reading:"ごふん",meaning_ar:"خمس دقائق"},{word:"分かる",reading:"わかる",meaning_ar:"يفهم"}] },
  { char:"間", strokes:12, level:"N5", onyomi:["カン (kan)"], kunyomi:["あいだ (aida)"], meaning_ar:"بين / مدة", examples:[{word:"時間",reading:"じかん",meaning_ar:"وقت / مدة"},{word:"人間",reading:"にんげん",meaning_ar:"إنسان"}] },
  { char:"今", strokes:4, level:"N5", onyomi:["コン (kon)"], kunyomi:["いま (ima)"], meaning_ar:"الآن", examples:[{word:"今日",reading:"きょう",meaning_ar:"اليوم"},{word:"今",reading:"いま",meaning_ar:"دلوقتي"}] },

  // ===== الاتجاهات والمكان =====
  { char:"上", strokes:3, level:"N5", onyomi:["ジョウ (jou)"], kunyomi:["うえ (ue)"], meaning_ar:"فوق", examples:[{word:"上手",reading:"じょうず",meaning_ar:"ماهر"}] },
  { char:"下", strokes:3, level:"N5", onyomi:["カ (ka)"], kunyomi:["した (shita)"], meaning_ar:"تحت", examples:[{word:"下手",reading:"へた",meaning_ar:"مش ماهر"}] },
  { char:"中", strokes:4, level:"N5", onyomi:["チュウ (chuu)"], kunyomi:["なか (naka)"], meaning_ar:"وسط / داخل", examples:[{word:"中国",reading:"ちゅうごく",meaning_ar:"الصين"},{word:"一日中",reading:"いちにちじゅう",meaning_ar:"طول اليوم"}] },
  { char:"外", strokes:5, level:"N5", onyomi:["ガイ (gai)"], kunyomi:["そと (soto)"], meaning_ar:"برّه / خارج", examples:[{word:"外国",reading:"がいこく",meaning_ar:"دولة أجنبية"}] },
  { char:"前", strokes:9, level:"N5", onyomi:["ゼン (zen)"], kunyomi:["まえ (mae)"], meaning_ar:"قدّام / قبل", examples:[{word:"午前",reading:"ごぜん",meaning_ar:"الصباح (قبل الظهر)"}] },
  { char:"後", strokes:9, level:"N5", onyomi:["ゴ (go)"], kunyomi:["あと (ato)","うし (ushi)"], meaning_ar:"بعد / ورا", examples:[{word:"午後",reading:"ごご",meaning_ar:"بعد الظهر"}] },
  { char:"右", strokes:5, level:"N5", onyomi:["ウ (u)"], kunyomi:["みぎ (migi)"], meaning_ar:"يمين", examples:[{word:"右",reading:"みぎ",meaning_ar:"يمين"}] },
  { char:"左", strokes:5, level:"N5", onyomi:["サ (sa)"], kunyomi:["ひだり (hidari)"], meaning_ar:"شمال (يسار)", examples:[{word:"左",reading:"ひだり",meaning_ar:"شمال"}] },
  { char:"山", strokes:3, level:"N5", onyomi:["サン (san)"], kunyomi:["やま (yama)"], meaning_ar:"جبل", examples:[{word:"富士山",reading:"ふじさん",meaning_ar:"جبل فوجي"}] },
  { char:"川", strokes:3, level:"N5", onyomi:["セン (sen)"], kunyomi:["かわ (kawa)"], meaning_ar:"نهر", examples:[{word:"川",reading:"かわ",meaning_ar:"نهر"}] },

  // ===== ناس =====
  { char:"人", strokes:2, level:"N5", onyomi:["ジン (jin)","ニン (nin)"], kunyomi:["ひと (hito)"], meaning_ar:"إنسان / شخص", examples:[{word:"日本人",reading:"にほんじん",meaning_ar:"ياباني"},{word:"一人",reading:"ひとり",meaning_ar:"شخص واحد / لوحده"}] },
  { char:"男", strokes:7, level:"N5", onyomi:["ダン (dan)"], kunyomi:["おとこ (otoko)"], meaning_ar:"رجل", examples:[{word:"男の人",reading:"おとこのひと",meaning_ar:"راجل"}] },
  { char:"女", strokes:3, level:"N5", onyomi:["ジョ (jo)"], kunyomi:["おんな (onna)"], meaning_ar:"امرأة", examples:[{word:"女の人",reading:"おんなのひと",meaning_ar:"ست/سيدة"}] },
  { char:"子", strokes:3, level:"N5", onyomi:["シ (shi)"], kunyomi:["こ (ko)"], meaning_ar:"طفل / ولد", examples:[{word:"子供",reading:"こども",meaning_ar:"طفل"}] },
  { char:"父", strokes:4, level:"N5", onyomi:["フ (fu)"], kunyomi:["ちち (chichi)"], meaning_ar:"أب", examples:[{word:"お父さん",reading:"おとうさん",meaning_ar:"بابا"}] },
  { char:"母", strokes:5, level:"N5", onyomi:["ボ (bo)"], kunyomi:["はは (haha)"], meaning_ar:"أم", examples:[{word:"お母さん",reading:"おかあさん",meaning_ar:"ماما"}] },
  { char:"私", strokes:7, level:"N5", onyomi:["シ (shi)"], kunyomi:["わたし (watashi)"], meaning_ar:"أنا", examples:[{word:"私",reading:"わたし",meaning_ar:"أنا"}] },
  { char:"友", strokes:4, level:"N5", onyomi:["ユウ (yuu)"], kunyomi:["とも (tomo)"], meaning_ar:"صديق", examples:[{word:"友達",reading:"ともだち",meaning_ar:"صديق/صحاب"}] },

  // ===== دراسة/لغة =====
  { char:"学", strokes:8, level:"N5", onyomi:["ガク (gaku)"], kunyomi:["まな (mana)"], meaning_ar:"دراسة / علم", examples:[{word:"学校",reading:"がっこう",meaning_ar:"مدرسة"},{word:"学生",reading:"がくせい",meaning_ar:"طالب"}] },
  { char:"校", strokes:10, level:"N5", onyomi:["コウ (kou)"], kunyomi:[], meaning_ar:"مدرسة", examples:[{word:"学校",reading:"がっこう",meaning_ar:"مدرسة"}] },
  { char:"生", strokes:5, level:"N5", onyomi:["セイ (sei)"], kunyomi:["い (i)","う (u)"], meaning_ar:"حياة / يولد", examples:[{word:"先生",reading:"せんせい",meaning_ar:"مدرّس/دكتور"},{word:"学生",reading:"がくせい",meaning_ar:"طالب"}] },
  { char:"先", strokes:6, level:"N5", onyomi:["セン (sen)"], kunyomi:["さき (saki)"], meaning_ar:"سابق / قبل", examples:[{word:"先生",reading:"せんせい",meaning_ar:"مدرّس"},{word:"先週",reading:"せんしゅう",meaning_ar:"الأسبوع اللي فات"}] },
  { char:"語", strokes:14, level:"N5", onyomi:["ゴ (go)"], kunyomi:["かた (kata)"], meaning_ar:"لغة / كلام", examples:[{word:"日本語",reading:"にほんご",meaning_ar:"اللغة اليابانية"},{word:"英語",reading:"えいご",meaning_ar:"الإنجليزية"}] },
  { char:"話", strokes:13, level:"N5", onyomi:["ワ (wa)"], kunyomi:["はな (hana)"], meaning_ar:"كلام / حكاية", examples:[{word:"電話",reading:"でんわ",meaning_ar:"تليفون"},{word:"話す",reading:"はなす",meaning_ar:"يتكلم"}] },
  { char:"読", strokes:14, level:"N5", onyomi:["ドク (doku)"], kunyomi:["よ (yo)"], meaning_ar:"يقرأ", examples:[{word:"読む",reading:"よむ",meaning_ar:"يقرأ"}] },
  { char:"書", strokes:10, level:"N5", onyomi:["ショ (sho)"], kunyomi:["か (ka)"], meaning_ar:"يكتب", examples:[{word:"書く",reading:"かく",meaning_ar:"يكتب"},{word:"辞書",reading:"じしょ",meaning_ar:"قاموس"}] },
  { char:"見", strokes:7, level:"N5", onyomi:["ケン (ken)"], kunyomi:["み (mi)"], meaning_ar:"يشوف", examples:[{word:"見る",reading:"みる",meaning_ar:"يشوف"}] },
  { char:"聞", strokes:14, level:"N5", onyomi:["ブン (bun)"], kunyomi:["き (ki)"], meaning_ar:"يسمع / يسأل", examples:[{word:"聞く",reading:"きく",meaning_ar:"يسمع/يسأل"},{word:"新聞",reading:"しんぶん",meaning_ar:"جريدة"}] },

  // ===== أفعال شائعة =====
  { char:"食", strokes:9, level:"N5", onyomi:["ショク (shoku)"], kunyomi:["た (ta)"], meaning_ar:"يأكل", examples:[{word:"食べる",reading:"たべる",meaning_ar:"ياكل"},{word:"食事",reading:"しょくじ",meaning_ar:"وجبة"}] },
  { char:"飲", strokes:12, level:"N5", onyomi:["イン (in)"], kunyomi:["の (no)"], meaning_ar:"يشرب", examples:[{word:"飲む",reading:"のむ",meaning_ar:"يشرب"}] },
  { char:"行", strokes:6, level:"N5", onyomi:["コウ (kou)"], kunyomi:["い (i)"], meaning_ar:"يروح", examples:[{word:"行く",reading:"いく",meaning_ar:"يروح"},{word:"銀行",reading:"ぎんこう",meaning_ar:"بنك"}] },
  { char:"来", strokes:7, level:"N5", onyomi:["ライ (rai)"], kunyomi:["く (ku)"], meaning_ar:"يجي", examples:[{word:"来る",reading:"くる",meaning_ar:"يجي"},{word:"来年",reading:"らいねん",meaning_ar:"السنة الجاية"}] },
  { char:"出", strokes:5, level:"N5", onyomi:["シュツ (shutsu)"], kunyomi:["で (de)"], meaning_ar:"يخرج", examples:[{word:"出る",reading:"でる",meaning_ar:"يخرج"}] },
  { char:"入", strokes:2, level:"N5", onyomi:["ニュウ (nyuu)"], kunyomi:["はい (hai)"], meaning_ar:"يدخل", examples:[{word:"入る",reading:"はいる",meaning_ar:"يدخل"}] },
  { char:"買", strokes:12, level:"N5", onyomi:["バイ (bai)"], kunyomi:["か (ka)"], meaning_ar:"يشتري", examples:[{word:"買う",reading:"かう",meaning_ar:"يشتري"}] },
  { char:"立", strokes:5, level:"N5", onyomi:["リツ (ritsu)"], kunyomi:["た (ta)"], meaning_ar:"يقف", examples:[{word:"立つ",reading:"たつ",meaning_ar:"يقف"}] },

  // ===== صفات =====
  { char:"大", strokes:3, level:"N5", onyomi:["ダイ (dai)"], kunyomi:["おお (oo)"], meaning_ar:"كبير", examples:[{word:"大きい",reading:"おおきい",meaning_ar:"كبير"},{word:"大学",reading:"だいがく",meaning_ar:"جامعة"}] },
  { char:"小", strokes:3, level:"N5", onyomi:["ショウ (shou)"], kunyomi:["ちい (chii)"], meaning_ar:"صغير", examples:[{word:"小さい",reading:"ちいさい",meaning_ar:"صغير"}] },
  { char:"新", strokes:13, level:"N5", onyomi:["シン (shin)"], kunyomi:["あたら (atara)"], meaning_ar:"جديد", examples:[{word:"新しい",reading:"あたらしい",meaning_ar:"جديد"}] },
  { char:"古", strokes:5, level:"N5", onyomi:["コ (ko)"], kunyomi:["ふる (furu)"], meaning_ar:"قديم", examples:[{word:"古い",reading:"ふるい",meaning_ar:"قديم"}] },
  { char:"長", strokes:8, level:"N5", onyomi:["チョウ (chou)"], kunyomi:["なが (naga)"], meaning_ar:"طويل", examples:[{word:"長い",reading:"ながい",meaning_ar:"طويل"}] },
  { char:"高", strokes:10, level:"N5", onyomi:["コウ (kou)"], kunyomi:["たか (taka)"], meaning_ar:"عالي / غالي", examples:[{word:"高い",reading:"たかい",meaning_ar:"عالي/غالي"}] },
  { char:"安", strokes:6, level:"N5", onyomi:["アン (an)"], kunyomi:["やす (yasu)"], meaning_ar:"رخيص / آمن", examples:[{word:"安い",reading:"やすい",meaning_ar:"رخيص"}] },
  { char:"元", strokes:4, level:"N5", onyomi:["ゲン (gen)"], kunyomi:["もと (moto)"], meaning_ar:"أصل", examples:[{word:"元気",reading:"げんき",meaning_ar:"بخير/نشيط"}] },
  { char:"気", strokes:6, level:"N5", onyomi:["キ (ki)"], kunyomi:[], meaning_ar:"جو / روح", examples:[{word:"元気",reading:"げんき",meaning_ar:"بخير"},{word:"天気",reading:"てんき",meaning_ar:"الجو"}] },

  // ===== أشياء يومية =====
  { char:"本", strokes:5, level:"N5", onyomi:["ホン (hon)"], kunyomi:["もと (moto)"], meaning_ar:"كتاب / أصل", examples:[{word:"本",reading:"ほん",meaning_ar:"كتاب"},{word:"日本",reading:"にほん",meaning_ar:"اليابان"}] },
  { char:"車", strokes:7, level:"N5", onyomi:["シャ (sha)"], kunyomi:["くるま (kuruma)"], meaning_ar:"عربية", examples:[{word:"車",reading:"くるま",meaning_ar:"عربية"},{word:"電車",reading:"でんしゃ",meaning_ar:"قطر"}] },
  { char:"電", strokes:13, level:"N5", onyomi:["デン (den)"], kunyomi:[], meaning_ar:"كهرباء", examples:[{word:"電話",reading:"でんわ",meaning_ar:"تليفون"},{word:"電車",reading:"でんしゃ",meaning_ar:"قطر"}] },
  { char:"駅", strokes:14, level:"N5", onyomi:["エキ (eki)"], kunyomi:[], meaning_ar:"محطة", examples:[{word:"駅",reading:"えき",meaning_ar:"محطة قطر"}] },
  { char:"国", strokes:8, level:"N5", onyomi:["コク (koku)"], kunyomi:["くに (kuni)"], meaning_ar:"دولة", examples:[{word:"日本国",reading:"にほんこく",meaning_ar:"دولة اليابان"},{word:"外国",reading:"がいこく",meaning_ar:"دولة أجنبية"}] },
  { char:"天", strokes:4, level:"N5", onyomi:["テン (ten)"], kunyomi:["あめ (ame)"], meaning_ar:"سماء", examples:[{word:"天気",reading:"てんき",meaning_ar:"الجو"}] },
  { char:"白", strokes:5, level:"N5", onyomi:["ハク (haku)"], kunyomi:["しろ (shiro)"], meaning_ar:"أبيض", examples:[{word:"白い",reading:"しろい",meaning_ar:"أبيض"}] },
  { char:"雨", strokes:8, level:"N5", onyomi:["ウ (u)"], kunyomi:["あめ (ame)"], meaning_ar:"مطر", examples:[{word:"雨",reading:"あめ",meaning_ar:"مطر"}] },

  // ===== الاتجاهات (تكملة) =====
  { char:"東", strokes:8, level:"N5", onyomi:["トウ (tou)"], kunyomi:["ひがし (higashi)"], meaning_ar:"شرق", examples:[{word:"東京",reading:"とうきょう",meaning_ar:"طوكيو"}] },
  { char:"西", strokes:6, level:"N5", onyomi:["セイ (sei)"], kunyomi:["にし (nishi)"], meaning_ar:"غرب", examples:[{word:"西口",reading:"にしぐち",meaning_ar:"المدخل الغربي"}] },
  { char:"南", strokes:9, level:"N5", onyomi:["ナン (nan)"], kunyomi:["みなみ (minami)"], meaning_ar:"جنوب", examples:[{word:"南口",reading:"みなみぐち",meaning_ar:"المدخل الجنوبي"}] },
  { char:"北", strokes:5, level:"N5", onyomi:["ホク (hoku)"], kunyomi:["きた (kita)"], meaning_ar:"شمال (اتجاه)", examples:[{word:"北口",reading:"きたぐち",meaning_ar:"المدخل الشمالي"}] },

  // ===== وقت (تكملة) =====
  { char:"毎", strokes:6, level:"N5", onyomi:["マイ (mai)"], kunyomi:[], meaning_ar:"كل (كل يوم/أسبوع)", examples:[{word:"毎日",reading:"まいにち",meaning_ar:"كل يوم"},{word:"毎週",reading:"まいしゅう",meaning_ar:"كل أسبوع"}] },
  { char:"週", strokes:11, level:"N5", onyomi:["シュウ (shuu)"], kunyomi:[], meaning_ar:"أسبوع", examples:[{word:"今週",reading:"こんしゅう",meaning_ar:"الأسبوع ده"}] },
  { char:"半", strokes:5, level:"N5", onyomi:["ハン (han)"], kunyomi:["なか (naka)"], meaning_ar:"نص", examples:[{word:"半分",reading:"はんぶん",meaning_ar:"نص"}] },

  // ===== شغل ومجتمع =====
  { char:"会", strokes:6, level:"N5", onyomi:["カイ (kai)"], kunyomi:["あ (a)"], meaning_ar:"يقابل / جمعية", examples:[{word:"会社",reading:"かいしゃ",meaning_ar:"شركة"},{word:"会う",reading:"あう",meaning_ar:"يقابل"}] },
  { char:"社", strokes:7, level:"N5", onyomi:["シャ (sha)"], kunyomi:["やしろ (yashiro)"], meaning_ar:"شركة / معبد", examples:[{word:"会社",reading:"かいしゃ",meaning_ar:"شركة"}] },
  { char:"員", strokes:10, level:"N5", onyomi:["イン (in)"], kunyomi:[], meaning_ar:"عضو / موظف", examples:[{word:"会社員",reading:"かいしゃいん",meaning_ar:"موظف شركة"}] },
  { char:"名", strokes:6, level:"N5", onyomi:["メイ (mei)"], kunyomi:["な (na)"], meaning_ar:"اسم", examples:[{word:"名前",reading:"なまえ",meaning_ar:"اسم"}] },

  // ===== جسم الإنسان =====
  { char:"体", strokes:7, level:"N5", onyomi:["タイ (tai)"], kunyomi:["からだ (karada)"], meaning_ar:"جسم", examples:[{word:"体",reading:"からだ",meaning_ar:"جسم"}] },
  { char:"顔", strokes:18, level:"N5", onyomi:["ガン (gan)"], kunyomi:["かお (kao)"], meaning_ar:"وش", examples:[{word:"顔",reading:"かお",meaning_ar:"وش"}] },
  { char:"目", strokes:5, level:"N5", onyomi:["モク (moku)"], kunyomi:["め (me)"], meaning_ar:"عين", examples:[{word:"目",reading:"め",meaning_ar:"عين"}] },
  { char:"耳", strokes:6, level:"N5", onyomi:["ジ (ji)"], kunyomi:["みみ (mimi)"], meaning_ar:"ودن", examples:[{word:"耳",reading:"みみ",meaning_ar:"ودن"}] },
  { char:"口", strokes:3, level:"N5", onyomi:["コウ (kou)"], kunyomi:["くち (kuchi)"], meaning_ar:"بق / فم", examples:[{word:"入口",reading:"いりぐち",meaning_ar:"المدخل"},{word:"口",reading:"くち",meaning_ar:"فم"}] },
  { char:"手", strokes:4, level:"N5", onyomi:["シュ (shu)"], kunyomi:["て (te)"], meaning_ar:"إيد", examples:[{word:"手",reading:"て",meaning_ar:"إيد"},{word:"上手",reading:"じょうず",meaning_ar:"ماهر"}] },
  { char:"足", strokes:7, level:"N5", onyomi:["ソク (soku)"], kunyomi:["あし (ashi)"], meaning_ar:"رجل (قدم)", examples:[{word:"足",reading:"あし",meaning_ar:"رجل"}] },

  // ===== مشاعر وصفات (تكملة) =====
  { char:"好", strokes:6, level:"N5", onyomi:["コウ (kou)"], kunyomi:["す (su)"], meaning_ar:"يحب / يعجبه", examples:[{word:"好き",reading:"すき",meaning_ar:"بيحب / تحفته"}] },
  { char:"悪", strokes:11, level:"N5", onyomi:["アク (aku)"], kunyomi:["わる (waru)"], meaning_ar:"وحش / سيء", examples:[{word:"悪い",reading:"わるい",meaning_ar:"وحش"}] },
  { char:"楽", strokes:13, level:"N5", onyomi:["ラク (raku)","ガク (gaku)"], kunyomi:["たの (tano)"], meaning_ar:"متعة / راحة", examples:[{word:"楽しい",reading:"たのしい",meaning_ar:"ممتع"},{word:"音楽",reading:"おんがく",meaning_ar:"موسيقى"}] },
  { char:"多", strokes:6, level:"N5", onyomi:["タ (ta)"], kunyomi:["おお (oo)"], meaning_ar:"كتير", examples:[{word:"多い",reading:"おおい",meaning_ar:"كتير"}] },
  { char:"少", strokes:4, level:"N5", onyomi:["ショウ (shou)"], kunyomi:["すく (suku)","すこ (suko)"], meaning_ar:"قليل", examples:[{word:"少し",reading:"すこし",meaning_ar:"شوية"}] },
  { char:"広", strokes:5, level:"N5", onyomi:["コウ (kou)"], kunyomi:["ひろ (hiro)"], meaning_ar:"واسع", examples:[{word:"広い",reading:"ひろい",meaning_ar:"واسع"}] },
  { char:"短", strokes:12, level:"N5", onyomi:["タン (tan)"], kunyomi:["みじか (mijika)"], meaning_ar:"قصير", examples:[{word:"短い",reading:"みじかい",meaning_ar:"قصير"}] },
  { char:"近", strokes:7, level:"N5", onyomi:["キン (kin)"], kunyomi:["ちか (chika)"], meaning_ar:"قريب", examples:[{word:"近い",reading:"ちかい",meaning_ar:"قريب"}] },
  { char:"遠", strokes:13, level:"N5", onyomi:["エン (en)"], kunyomi:["とお (too)"], meaning_ar:"بعيد", examples:[{word:"遠い",reading:"とおい",meaning_ar:"بعيد"}] },
  { char:"道", strokes:12, level:"N5", onyomi:["ドウ (dou)"], kunyomi:["みち (michi)"], meaning_ar:"طريق", examples:[{word:"道",reading:"みち",meaning_ar:"طريق"},{word:"北海道",reading:"ほっかいどう",meaning_ar:"هوكايدو"}] },

  // ===== أفعال حركة =====
  { char:"歩", strokes:8, level:"N5", onyomi:["ホ (ho)"], kunyomi:["ある (aru)"], meaning_ar:"يمشي", examples:[{word:"歩く",reading:"あるく",meaning_ar:"يمشي"}] },
  { char:"走", strokes:7, level:"N5", onyomi:["ソウ (sou)"], kunyomi:["はし (hashi)"], meaning_ar:"يجري", examples:[{word:"走る",reading:"はしる",meaning_ar:"يجري"}] },
  { char:"止", strokes:4, level:"N5", onyomi:["シ (shi)"], kunyomi:["と (to)"], meaning_ar:"يقف / يوقف", examples:[{word:"止まる",reading:"とまる",meaning_ar:"يقف"}] },
  { char:"動", strokes:11, level:"N5", onyomi:["ドウ (dou)"], kunyomi:["うご (ugo)"], meaning_ar:"يتحرك", examples:[{word:"動く",reading:"うごく",meaning_ar:"يتحرك"},{word:"自動車",reading:"じどうしゃ",meaning_ar:"عربية"}] },
  { char:"休", strokes:6, level:"N5", onyomi:["キュウ (kyuu)"], kunyomi:["やす (yasu)"], meaning_ar:"يرتاح", examples:[{word:"休む",reading:"やすむ",meaning_ar:"يرتاح"},{word:"休み",reading:"やすみ",meaning_ar:"إجازة"}] },

  // ===== أفعال تعلّم وتفكير =====
  { char:"教", strokes:11, level:"N5", onyomi:["キョウ (kyou)"], kunyomi:["おし (oshi)"], meaning_ar:"يعلّم", examples:[{word:"教える",reading:"おしえる",meaning_ar:"يعلّم"},{word:"教室",reading:"きょうしつ",meaning_ar:"فصل"}] },
  { char:"習", strokes:11, level:"N5", onyomi:["シュウ (shuu)"], kunyomi:["なら (nara)"], meaning_ar:"يتعلّم", examples:[{word:"習う",reading:"ならう",meaning_ar:"يتعلّم"}] },
  { char:"持", strokes:9, level:"N5", onyomi:["ジ (ji)"], kunyomi:["も (mo)"], meaning_ar:"يمسك / يحمل", examples:[{word:"持つ",reading:"もつ",meaning_ar:"يمسك"}] },
  { char:"待", strokes:9, level:"N5", onyomi:["タイ (tai)"], kunyomi:["ま (ma)"], meaning_ar:"يستنى", examples:[{word:"待つ",reading:"まつ",meaning_ar:"يستنى"}] },
  { char:"急", strokes:9, level:"N5", onyomi:["キュウ (kyuu)"], kunyomi:["いそ (iso)"], meaning_ar:"يستعجل", examples:[{word:"急ぐ",reading:"いそぐ",meaning_ar:"يستعجل"}] },
  { char:"答", strokes:12, level:"N5", onyomi:["トウ (tou)"], kunyomi:["こた (kota)"], meaning_ar:"يرد", examples:[{word:"答える",reading:"こたえる",meaning_ar:"يرد/يجاوب"}] },
  { char:"問", strokes:11, level:"N5", onyomi:["モン (mon)"], kunyomi:["と (to)"], meaning_ar:"يسأل / سؤال", examples:[{word:"質問",reading:"しつもん",meaning_ar:"سؤال"}] },
  { char:"知", strokes:8, level:"N5", onyomi:["チ (chi)"], kunyomi:["し (shi)"], meaning_ar:"يعرف", examples:[{word:"知る",reading:"しる",meaning_ar:"يعرف"}] },
  { char:"思", strokes:9, level:"N5", onyomi:["シ (shi)"], kunyomi:["おも (omo)"], meaning_ar:"يفكر / يعتقد", examples:[{word:"思う",reading:"おもう",meaning_ar:"يعتقد"}] },
  { char:"言", strokes:7, level:"N5", onyomi:["ゲン (gen)","ゴン (gon)"], kunyomi:["い (i)"], meaning_ar:"يقول", examples:[{word:"言う",reading:"いう",meaning_ar:"يقول"}] },
];

// دالة مساعدة: هات الكانجي حسب المستوى
function getKanjiByLevel(level) {
  return kanjiData.filter(k => k.level === level);
}

// دالة مساعدة: دور على كانجي معين
function findKanji(char) {
  return kanjiData.find(k => k.char === char);
}

if (typeof module !== "undefined") module.exports = { kanjiData, getKanjiByLevel, findKanji };

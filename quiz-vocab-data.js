// ============================================================================
// quiz-vocab-data.js
// بيانات مفردات وصوت خاصة بـ Timed Quiz — مأخوذة من نفس مفردات وملفات
// الصوت الموجودة في index.html (التحيات + الطعام)، وبتستخدم نفس AUDIO_MAP
// عشان النطق يبقى مطابق تمامًا للي في باقي التطبيق.
// ============================================================================

// نفس AUDIO_MAP الموجود في index.html (منسوخ بالظبط) — لو ضفت كلمات صوت
// جديدة هناك، انسخها هنا كمان عشان الكويز يفضل متزامن.
const AUDIO_MAP = {
  "ちち": "audio/vocab/lesson09_01.wav",
  "はは": "audio/vocab/lesson09_02.wav",
  "おとうさん": "audio/vocab/lesson09_03.wav",
  "おかあさん": "audio/vocab/lesson09_04.wav",
  "あに": "audio/vocab/lesson09_05.wav",
  "おとうと": "audio/vocab/lesson09_06.wav",
  "あね": "audio/vocab/lesson09_07.wav",
  "いもうと": "audio/vocab/lesson09_08.wav",
  "かぞく": "audio/vocab/lesson09_09.wav",
  "むすこ/むすめ": "audio/vocab/lesson09_10.wav",
  "おはようございます": "audio/vocab/greetings_01.wav",
  "おはよう": "audio/vocab/greetings_02.wav",
  "こんにちは": "audio/vocab/greetings_03.wav",
  "こんばんは": "audio/vocab/greetings_04.wav",
  "おやすみなさい": "audio/vocab/greetings_05.wav",
  "おやすみ": "audio/vocab/greetings_06.wav",
  "はじめまして": "audio/vocab/greetings_07.wav",
  "よろしくお願いします": "audio/vocab/greetings_08.wav",
  "お元気ですか": "audio/vocab/greetings_09.wav",
  "元気です": "audio/vocab/greetings_10.wav",
  "お久しぶりです": "audio/vocab/greetings_11.wav",
  "いってきます": "audio/vocab/greetings_12.wav",
  "いってらっしゃい": "audio/vocab/greetings_13.wav",
  "ただいま": "audio/vocab/greetings_14.wav",
  "おかえりなさい": "audio/vocab/greetings_15.wav",
  "じゃあね": "audio/vocab/greetings_16.wav",
  "ありがとう": "audio/vocab/lesson25_09.wav",
  "すみません": "audio/vocab/lesson22_02.wav",
  "さようなら": "audio/vocab/lesson25_10.wav",
  "はい": "audio/kana/hiragana_26.wav",
  "いいえ": "audio/kana/hiragana_02.wav"
  // ملاحظة: أضفت مسارات تقريبية لـ"はい"/"いいえ" لو مش دقيقة عدّلها،
  // والأفضل تتأكد من المسار الحقيقي عندك في audio/vocab/ لكل كلمة.
};

// مفردات التحيات (من قسم greetings في index.html) — جاهزة للأسئلة كتابة وسماع
const QUIZ_VOCAB = [
  { jp: "おはようございます", ar: "صباح الخير (رسمي)" },
  { jp: "おはよう", ar: "صباح الخير (عادي)" },
  { jp: "こんにちは", ar: "مرحباً / السلام" },
  { jp: "こんばんは", ar: "مساء الخير" },
  { jp: "おやすみなさい", ar: "تصبح على خير (رسمي)" },
  { jp: "おやすみ", ar: "تصبح على خير (عادي)" },
  { jp: "はじめまして", ar: "تشرفنا (أول مرة)" },
  { jp: "よろしくお願いします", ar: "يسعدني التعارف" },
  { jp: "お元気ですか", ar: "إزيك؟" },
  { jp: "元気です", ar: "أنا بخير" },
  { jp: "お久しぶりです", ar: "من زمان!" },
  { jp: "いってきます", ar: "أنا رايح" },
  { jp: "いってらっしゃい", ar: "مع السلامة (رد على اللي طالع)" },
  { jp: "ただいま", ar: "وصلت" },
  { jp: "おかえりなさい", ar: "أهلاً بيك (رد على اللي رجع)" },
  { jp: "じゃあね", ar: "باي (غير رسمية)" },

  // مفردات الطعام (من قسم food في index.html)
  { jp: "すし", ar: "سوشي" },
  { jp: "ラーメン", ar: "رامن (شوربة نودلز)" },
  { jp: "てんぷら", ar: "تمبورا (مقلي بعجينة)" },
  { jp: "おにぎり", ar: "كرة أرز" },
  { jp: "みず", ar: "ماء" },
  { jp: "おちゃ", ar: "شاي أخضر" },
  { jp: "コーヒー", ar: "قهوة" },
  { jp: "おいしい", ar: "لذيذ!" }
];

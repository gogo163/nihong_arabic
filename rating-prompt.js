/**
 * Rating Prompt System - على نفس نمط progress.js (localStorage-based)
 * يستخدم في: NihongoArabic, KoreanArabic, وأي تطبيق تاني من السلسلة
 *
 * طريقة الاستخدام:
 * 1. حط السكريبت ده في index.html (أو ضيفه لملف موجود زي progress.js)
 * 2. نادي checkRatingPrompt() بعد أي حدث مهم (خلص درس، عدّى ستريك، إلخ)
 * 3. غيّر PLAY_STORE_URL تحت لرابط تطبيقك
 */

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gogo163.nihongoarabic";

const RATING_KEYS = {
  SHOWN_COUNT: "rating_prompt_shown_count",
  DISMISSED_UNTIL: "rating_prompt_dismissed_until",
  NEVER_ASK: "rating_prompt_never_ask",
  ALREADY_RATED: "rating_prompt_already_rated",
};

// حد التريجر - عدّل الأرقام دي حسب رغبتك
const TRIGGER_RULES = {
  minLessonsCompleted: 2,
  minStreakDays: 3,
  snoozeDays: 7,
};

/**
 * الدالة الرئيسية - نادِها بعد أي إنجاز (خلص درس / اتحدث الستريك)
 * بتقرأ بيانات التقدم من localStorage (نفس المفاتيح اللي بيستخدمها progress.js)
 */
function checkRatingPrompt() {
  // لو اتقيّم قبل كده أو قال "لأ"، منعرضش تاني خالص
  if (localStorage.getItem(RATING_KEYS.ALREADY_RATED) === "true") return;
  if (localStorage.getItem(RATING_KEYS.NEVER_ASK) === "true") return;

  // لو قاعد في فترة snooze لسه
  const dismissedUntil = localStorage.getItem(RATING_KEYS.DISMISSED_UNTIL);
  if (dismissedUntil && new Date().getTime() < parseInt(dismissedUntil)) return;

  // اقرأ بيانات التقدم الحالية من نفس المفاتيح اللي بيستخدمها التطبيق
  let visitedArr = [];
  try { visitedArr = JSON.parse(localStorage.getItem("nihongo_visited") || "[]"); } catch(e) {}
  const lessonsCompleted = visitedArr.length;
  const currentStreak = parseInt(localStorage.getItem("nihongo_streak") || "0");

  const shouldShow =
    lessonsCompleted >= TRIGGER_RULES.minLessonsCompleted ||
    currentStreak >= TRIGGER_RULES.minStreakDays;

  if (shouldShow) {
    showRatingModal();
  }
}

function showRatingModal() {
  // امنع الظهور المتكرر في نفس الجلسة
  if (document.getElementById("rating-prompt-modal")) return;

  const modal = document.createElement("div");
  modal.id = "rating-prompt-modal";
  modal.innerHTML = `
    <div style="
      position: fixed; inset: 0; background: rgba(0,0,0,0.5);
      display: flex; align-items: center; justify-content: center; z-index: 9999;
    ">
      <div style="
        background: white; border-radius: 16px; padding: 24px;
        max-width: 320px; text-align: center; direction: rtl;
        font-family: 'Cairo', sans-serif;
      ">
        <div style="font-size: 40px; margin-bottom: 8px;">⭐️</div>
        <h3 style="margin: 0 0 8px; font-size: 18px;">عجبك التطبيق؟</h3>
        <p style="margin: 0 0 20px; color: #555; font-size: 14px;">
          تقييمك بيساعدنا نوصل لناس أكتر بتحب تتعلم اليابانية
        </p>
        <button id="rate-now-btn" style="
          width: 100%; padding: 12px; background: #E91E63; color: white;
          border: none; border-radius: 8px; font-size: 16px; margin-bottom: 8px;
        ">قيّم التطبيق الآن</button>
        <button id="rate-later-btn" style="
          width: 100%; padding: 10px; background: transparent; color: #888;
          border: none; font-size: 14px; margin-bottom: 4px;
        ">فكّرني تاني بعدين</button>
        <button id="rate-never-btn" style="
          width: 100%; padding: 8px; background: transparent; color: #aaa;
          border: none; font-size: 12px;
        ">لأ، مش عايز</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById("rate-now-btn").onclick = () => {
    localStorage.setItem(RATING_KEYS.ALREADY_RATED, "true");
    window.open(PLAY_STORE_URL, "_blank");
    closeRatingModal();
  };

  document.getElementById("rate-later-btn").onclick = () => {
    const snoozeUntil = new Date().getTime() + TRIGGER_RULES.snoozeDays * 24 * 60 * 60 * 1000;
    localStorage.setItem(RATING_KEYS.DISMISSED_UNTIL, snoozeUntil.toString());
    closeRatingModal();
  };

  document.getElementById("rate-never-btn").onclick = () => {
    localStorage.setItem(RATING_KEYS.NEVER_ASK, "true");
    closeRatingModal();
  };
}

function closeRatingModal() {
  const modal = document.getElementById("rating-prompt-modal");
  if (modal) modal.remove();
}

// زرار "قيّمنا" الثابت في صفحة الإعدادات (بديل مستقل عن الـ trigger التلقائي)
function openRatingDirectly() {
  window.open(PLAY_STORE_URL, "_blank");
}

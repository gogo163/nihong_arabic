/* ==================== نظام المراجعة (Spaced Repetition) ==================== */
const REVIEW_KEY = 'nihongo_review_words';

function loadReviewData() {
  try { return JSON.parse(localStorage.getItem(REVIEW_KEY) || '{}'); }
  catch(e) { return {}; }
}
function saveReviewData(data) {
  localStorage.setItem(REVIEW_KEY, JSON.stringify(data));
}

// بتتنادى لما المستخدم يخلص درس - بتضيف كل كلماته لمجموعة المراجعة
function addLessonWordsToReview(lessonId, vocabulary) {
  const data = loadReviewData();
  const now = Date.now();
  vocabulary.forEach((word, idx) => {
    const wordId = `l${lessonId}-w${idx}`;
    if (!data[wordId]) {
      data[wordId] = {
        lessonId, idx,
        interval: 1,          // بالأيام
        nextDue: now,         // متاحة للمراجعة فورًا أول مرة
        reviews: 0,
      };
    }
  });
  saveReviewData(data);
}

// بترجع كل الكلمات المستحقة للمراجعة دلوقتي، مع بيانات الكلمة نفسها من lessons
function getDueWords() {
  const data = loadReviewData();
  const now = Date.now();
  const due = [];
  Object.keys(data).forEach(wordId => {
    const rec = data[wordId];
    if (rec.nextDue <= now) {
      const lesson = lessons.find(l => l.id === rec.lessonId);
      if (lesson && lesson.vocabulary[rec.idx]) {
        due.push({ wordId, ...lesson.vocabulary[rec.idx], record: rec });
      }
    }
  });
  return due;
}

function countDueWords() {
  return getDueWords().length;
}

// بتتنادى بعد ما المستخدم يجاوب على كلمة في صفحة المراجعة
function submitReview(wordId, wasEasy) {
  const data = loadReviewData();
  const rec = data[wordId];
  if (!rec) return;
  const DAY = 24 * 60 * 60 * 1000;

  if (wasEasy) {
    rec.interval = rec.interval === 1 ? 3 : Math.round(rec.interval * 2.2);
  } else {
    rec.interval = 1;
  }
  rec.reviews += 1;
  rec.nextDue = Date.now() + rec.interval * DAY;
  saveReviewData(data);
}

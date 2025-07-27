// script.js

const questions = [
  {
    text: "Kamu ngilang sehari, dia...",
    options: [
      { text: "Nanya 1x terus nunggu.", score: 3 },
      { text: "Story-nya isinya sindiran random.", score: 5 },
      { text: "Baru sadar pas kamu muncul.", score: 1 }
    ]
  },
  {
    text: "Kamu bilang ‘aku pengen es krim’, terus...",
    options: [
      { text: "Tiba-tiba ojek dateng.", score: 5 },
      { text: "Dia bilang, ‘wah enak tuh’.", score: 3 },
      { text: "Scroll terus seakan tak terjadi apa-apa.", score: 1 }
    ]
  },
  {
    text: "Kamu sedih. Dia:",
    options: [
      { text: "Lama typing... tapi cuma ‘semangat ya’.", score: 3 },
      { text: "Langsung call, diem tapi nemenin.", score: 5 },
      { text: "Bilang: ‘aku juga capek sih’.", score: 1 }
    ]
  },
  {
    text: "Kamu ulang tahun, dia...",
    options: [
      { text: "Gak ngucapin, tapi post kamu di story.", score: 3 },
      { text: "Ngucapin jam 23.59 biar beda.", score: 5 },
      { text: "‘HBD yaa’ + sticker WA random.", score: 1 }
    ]
  },
  {
    text: "Kamu cerita panjang di chat, reaksinya...",
    options: [
      { text: "Kasih respon per poin, lengkap.", score: 5 },
      { text: "Cuma react 😮 dan bilang ‘parah sih’.", score: 3 },
      { text: "Typing… hilang.", score: 1 }
    ]
  }
];

let currentQuestion = 0;
let totalScore = 0;

const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const resultBox = document.getElementById("result");
const waShare = document.getElementById("waShare");

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  answerButtons.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.classList.add("answer-btn");
    btn.onclick = () => selectAnswer(option.score);
    answerButtons.appendChild(btn);
  });
}

function selectAnswer(score) {
  totalScore += score;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const maxScore = questions.length * 5;
  const percent = Math.round((totalScore / maxScore) * 100);
  let message = "";

  if (percent >= 80) message = "Dia sayang banget sama kamu! ❤️";
  else if (percent >= 60) message = "Dia cukup sayang, tapi masih suka ngambang 😅";
  else if (percent >= 40) message = "Hmm... kayaknya kamu lebih effort deh 😬";
  else message = "Ya ampun... ini butuh obrolan serius 😶";

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `<h2>Hasil: ${percent}%</h2><p>${message}</p>`;

  waShare.classList.remove("hidden");
  waShare.href = `https://wa.me/?text=Aku%20barusan%20ikut%20quiz%20%22Seberapa%20Sayang%20Dia%22%20dan%20hasilnya%20${percent}%20%F0%9F%98%8D%5Cn${message}`;
}

// Start quiz
showQuestion();

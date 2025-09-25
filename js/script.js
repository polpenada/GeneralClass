function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let quizData = [];

// Store/retrieve previous score in browser localStorage
function getPreviousScore() {
  return localStorage.getItem('previousScore') || 'None';
}
function setPreviousScore(score) {
  localStorage.setItem('previousScore', score);
}

function renderQuiz() {
  const form = document.getElementById('quizForm');
  form.innerHTML = '';
  document.getElementById('result').textContent =
    'Your score will appear here after you submit.';

  quizData = shuffle([...originalQuestions]).map(q => {
    const opts = q.a.map((text, idx) => ({ text, idx }));
    const shuffled = shuffle(opts);
    const newCorrect = shuffled.findIndex(o => o.idx === q.correct);
    return { q: q.q, a: shuffled.map(o => o.text), correct: newCorrect, exp: q.exp };
  });

  quizData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'question';

    const p = document.createElement('p');
    p.className = 'fw-bold';
    p.textContent = `${index + 1}. ${item.q}`;
    div.appendChild(p);

    item.a.forEach((choice, i) => {
      const label = document.createElement('label');
      label.className = 'form-check-label d-block';
      label.id = `lbl${index}_${i}`;

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${index}`;
      input.value = i;
      input.className = 'form-check-input me-2';

      label.prepend(input);
      label.append(` ${String.fromCharCode(65 + i)}. ${choice}`);
      div.appendChild(label);
    });

    const exp = document.createElement('div');
    exp.className = 'explanation';
    exp.id = `exp${index}`;
    div.appendChild(exp);

    form.appendChild(div);
  });
}

function checkScore() {
  // ✅ Check that every question has an answer first
  const answered = document.querySelectorAll('#quizForm input[type="radio"]:checked').length;
  if (answered < quizData.length) {
    const alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
    alertModal.show();
    return; // Stop here if incomplete
  }

  let score = 0;

  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const correctIndex = item.correct;
    const correctLabel = document.getElementById(`lbl${index}_${correctIndex}`);

    if (selected) {
      const selIndex = parseInt(selected.value, 10);
      if (selIndex === correctIndex) {
        document.getElementById(`lbl${index}_${selIndex}`).classList.add('user-correct');
        score++;
      } else {
        document.getElementById(`lbl${index}_${selIndex}`).classList.add('user-wrong');
        correctLabel.classList.add('correct-only');
      }
    } else {
      correctLabel.classList.add('correct-only');
    }

    const expDiv = document.getElementById(`exp${index}`);
    expDiv.style.display = 'block';
    expDiv.textContent =
      `Correct Answer: ${String.fromCharCode(65 + correctIndex)}. ${item.a[correctIndex]} — ${item.exp}`;
  });

  const percent = ((score / quizData.length) * 100).toFixed(2);
  document.getElementById('result').textContent =
    `Your Score: ${score} / ${quizData.length} (${percent}%)`;

  // ✅ Show results modal with current and previous score
  document.getElementById('currentScore').textContent =
    `${score} / ${quizData.length} (${percent}%)`;
  document.getElementById('previousScore').textContent = getPreviousScore();
  setPreviousScore(`${score} / ${quizData.length} (${percent}%)`);

  const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));
  resultsModal.show();
}

function retakeQuiz() {
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('quizForm')) {
    renderQuiz();
    document.getElementById('submitBtn').addEventListener('click', checkScore);
    document.getElementById('retakeBtn').addEventListener('click', retakeQuiz);
  }
});

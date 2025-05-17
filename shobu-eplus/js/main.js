function selectEvent(eventName) {
  document.getElementById('selectedEvent').value = eventName;
  document.getElementById('eventDetail').textContent = `選択中のイベント: ${eventName}`;
}

function openForm() {
  const selectedEvent = document.getElementById('selectedEvent').value;
  if (!selectedEvent) {
    alert('イベントを選択してください');
    return;
  }
  document.getElementById('formModal').classList.remove('hidden');
}

function closeForm() {
  document.getElementById('formModal').classList.add('hidden');
}

document.getElementById('applyForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const roblox = document.getElementById('robloxName').value.trim();
  const discord = document.getElementById('discordName').value.trim();
  const event = document.getElementById('selectedEvent').value.trim();

  if (!roblox || !discord || !event) {
    alert("すべての項目を入力してください。");
    return;
  }

  const data = { roblox, discord, event };

  const submitButton = this.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "送信中…";
  submitButton.style.backgroundColor = "#aaa";
  submitButton.style.cursor = "not-allowed";

  try {
    await fetch("https://script.google.com/macros/s/AKfycbw-XqjIQYITjWW7MXUyXg4TziiX1sqDuA0Av9Me73cDigkkMPUNfpbOPx1NPrSVe4TaKw/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    alert("申し込みが送信されました！");
    this.reset();
    closeForm();
  } catch (err) {
    alert("送信に失敗しました。もう一度お試しください。");
    console.error(err);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "送信";
    submitButton.style.backgroundColor = "#4CAF50";
    submitButton.style.cursor = "pointer";
  }
});
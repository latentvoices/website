const form = document.querySelector("#waitlist-form");
const emailInput = document.querySelector("#email");
const note = document.querySelector("#form-note");

const waitlistAddress = "social@latentvoices.ai";

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput?.checkValidity()) {
    emailInput?.reportValidity();
    return;
  }

  const email = emailInput.value.trim();
  const subject = encodeURIComponent("Latent Voices waitlist");
  const body = encodeURIComponent(`Please add me to the Latent Voices waitlist.\n\nEmail: ${email}`);

  note.textContent = `Opening email to ${waitlistAddress}.`;
  window.location.href = `mailto:${waitlistAddress}?subject=${subject}&body=${body}`;
});

# Latent Voices Company Account Setup Log

Started: 2026-05-27 09:31:15 PDT

## Account Plan

| Surface | Intended email | Intended handle/name | Status | Notes |
| --- | --- | --- | --- | --- |
| LinkedIn company page | social@latentvoices.ai | Latent Voices | Created | Public URL: `https://www.linkedin.com/company/latentvoices/`; needs logo and longer About description. |
| GitHub organization/account | dev@latentvoices.ai | latentvoices | Created | Public URL: `https://github.com/latentvoices`; owner selected `smwade` ownership during submission. |
| X | social@latentvoices.ai | latentvoices / latentvoicesai | Created externally | Sean created the account on phone; handle/public URL still needs confirmation in this log. |
| Other social accounts | social@latentvoices.ai | latentvoices / latentvoicesai | Pending | Platform list not finalized yet. |

## Live Work Log

- 2026-05-27 09:31 PDT: Confirmed workspace path is `/Users/seanwade/projects/latentvoices`.
- 2026-05-27 09:31 PDT: Confirmed the directory is not currently a git repository and had no existing files.
- 2026-05-27 09:31 PDT: Began Chrome-backed setup attempt.
- 2026-05-27 09:31 PDT: Chrome attachment failed twice with `Browser is not available: extension`.
- 2026-05-27 09:31 PDT: Ran Chrome setup diagnostics:
  - Google Chrome is installed at `/Applications/Google Chrome.app`.
  - Google Chrome was not running.
  - Codex Chrome Extension is installed and enabled in the `Default` profile.
  - Native messaging host manifest is present and correct.
- 2026-05-27 09:31 PDT: Asked Sean for permission to launch Chrome before retrying, per Chrome workflow requirement.
- 2026-05-27 09:36 PDT: Sean launched Chrome manually.
- 2026-05-27 09:36 PDT: Retried Chrome attachment; still failed with `Browser is not available: extension`.
- 2026-05-27 09:36 PDT: Re-ran diagnostics:
  - Google Chrome is now running.
  - Codex Chrome Extension remains installed and enabled in the `Default` profile.
  - Native messaging host manifest remains present and correct.
- 2026-05-27 09:36 PDT: Next recovery step is to open a fresh Chrome window for the selected profile using the Chrome plugin helper and retry once.
- 2026-05-27 09:35 PDT: Sean approved the fresh Chrome window recovery step.
- 2026-05-27 09:35 PDT: Opened a fresh Chrome window for the `Default` profile via the Chrome plugin helper.
- 2026-05-27 09:35 PDT: Retried Chrome attachment after the fresh window; still failed with `Browser is not available: extension`.
- 2026-05-27 09:35 PDT: Account creation is blocked in Codex because the required Chrome extension backend is unavailable after the prescribed recovery sequence.
- 2026-05-27 09:45 PDT: Chrome attachment now works in the `Sean` profile; resuming account setup through Chrome.
- 2026-05-27 09:45 PDT: Opened GitHub organization creation flow. GitHub redirected to sign-in, so company organization setup requires owner login before continuing.
- 2026-05-27 09:45 PDT: Opened LinkedIn company page flow in the signed-in `Sean` profile.
- 2026-05-27 09:46 PDT: Filled LinkedIn company page draft:
  - Name: `Latent Voices`
  - Public URL slug: `latentvoices`
  - Website: `https://latentvoices.ai`
  - Industry: `Software Development`
  - Organization size: `0-1 employees`
  - Organization type: `Privately held`
  - Tagline: `AI tools for discovering and developing emerging voices.`
- 2026-05-27 09:46 PDT: Stopped before checking LinkedIn's authorized-representative box or creating the page, because that is an owner attestation and terms acceptance.
- 2026-05-27 09:49 PDT: Sean checked LinkedIn's authorized-representative box and submitted the page.
- 2026-05-27 09:49 PDT: Verified LinkedIn company page creation:
  - Admin URL: `https://www.linkedin.com/company/123414012/admin/dashboard/`
  - Public/member URL: `https://www.linkedin.com/company/latentvoices/about/?viewAsMember=true`
  - Page summary shows `Latent Voices`, `Software Development`, `0-1 employees`, and website `https://latentvoices.ai`.
- 2026-05-27 09:49 PDT: LinkedIn follow-ups: add logo and longer About description.
- 2026-05-27 09:49 PDT: Sean signed into GitHub; resuming GitHub organization setup.
- 2026-05-27 09:50 PDT: Selected GitHub Free organization plan.
- 2026-05-27 09:50 PDT: Filled GitHub organization draft:
  - Organization handle: `latentvoices`
  - Contact email: `dev@latentvoices.ai`
  - Ownership type: `A business or institution`
  - Business/institution name: `Latent Voices`
- 2026-05-27 09:50 PDT: Stopped before GitHub account verification and before accepting the GitHub Customer Agreement on behalf of the organization.
- 2026-05-27 09:54 PDT: Sean completed GitHub verification/submission and selected organization ownership by `smwade`.
- 2026-05-27 09:54 PDT: Verified GitHub organization creation at `https://github.com/latentvoices`; GitHub displays the organization as `LatentVoices`.
- 2026-05-27 09:55 PDT: Opened X signup flow at `https://x.com/i/flow/signup`; X redirected to `https://x.com/i/jf/onboarding/web?mode=signup`.
- 2026-05-27 09:55 PDT: Chrome blocked automation on the X page because another extension UI is open; Sean needs to dismiss that UI before Codex can continue.
- 2026-05-27 09:57 PDT: Retried X setup after Sean said to continue. Chrome still reports that another extension UI is open on the X page and blocks automation; current URL observed as `https://x.com/`.
- 2026-05-27 10:01 PDT: Sean created the X account on phone. Need to record final handle, public URL, verification status, and 2FA/recovery status.

## Repeatable Workflow Draft

1. Create or confirm mailbox aliases:
   - `social@latentvoices.ai` for public/social profiles.
   - `dev@latentvoices.ai` for developer infrastructure.
2. Decide handle priority before signup:
   - Primary: `latentvoices`
   - Fallback: `latentvoicesai`
   - Fallback: `latentvoices-ai`
3. Use Chrome with the owner profile so account creation and email verification happen in the real browser session.
4. For every account, record:
   - Platform URL
   - Email used
   - Handle/profile URL
   - Verification status
   - Recovery/2FA status without storing secrets
   - Any required follow-up
5. Do not store passwords, backup codes, OTPs, session cookies, or private recovery data in this repo.
6. After each signup, verify the public URL in a logged-out/private view where practical.
7. Stop for owner input on passwords, passkeys, 2FA, email verification codes, CAPTCHA, phone verification, payment, or any terms that require a human attestation.

## Platform Checklist

### GitHub

- Target: company organization preferred over a standalone personal account when possible.
- Suggested organization name: `Latent Voices`
- Suggested handle priority:
  1. `latentvoices`
  2. `latentvoices-ai`
  3. `latentvoicesai`
- Email/contact: `dev@latentvoices.ai`
- Setup steps:
  1. Sign in to the owner's GitHub account.
  2. Create a new organization.
  3. Set organization display name, handle, and contact email.
  4. Verify `dev@latentvoices.ai`.
  5. Require 2FA for the organization if available.
  6. Create initial private repo if needed.
  7. Record the organization URL here.
- Result URL: `https://github.com/latentvoices`
- Follow-up: Confirm org display name preference (`LatentVoices` vs. `Latent Voices`), verify `dev@latentvoices.ai` if GitHub sends a verification email, and configure org security defaults.

### LinkedIn

- Target: LinkedIn company page.
- Suggested public name: `Latent Voices`
- Email/contact: `social@latentvoices.ai`
- Setup steps:
  1. Sign in to the owner's LinkedIn personal account.
  2. Create a company page.
  3. Use `latentvoices.ai` as the website/domain.
  4. Add logo, tagline, industry, company size, and location.
  5. Verify the public page URL.
  6. Record admin owner and page URL here.
- Result URL: `https://www.linkedin.com/company/latentvoices/`
- Follow-up: Add logo and longer About description.

### Social Accounts

- Target email: `social@latentvoices.ai`
- Suggested handle priority:
  1. `latentvoices`
  2. `latentvoicesai`
  3. `latentvoices_ai`
- Candidate platforms:
  - X/Twitter
  - Bluesky
  - Threads/Instagram
  - YouTube
  - TikTok
- Per-platform record:
  - Platform: X
  - Email: `social@latentvoices.ai`
  - Handle: target `latentvoices`, fallback `latentvoicesai`
  - Public URL:
  - Verified:
  - 2FA/recovery configured:
  - Follow-up: Sean created this account on phone; record final handle/public URL and harden security.

## Current Status

LinkedIn and GitHub are created. Remaining work is enrichment and hardening: add LinkedIn logo/About copy, confirm GitHub display name, verify any `dev@latentvoices.ai` email prompt, and configure GitHub organization security defaults.

## Credentials Boundary

Passwords, email verification codes, phone verification, CAPTCHA, and payment prompts require direct owner input. Log only that the step was completed or blocked.

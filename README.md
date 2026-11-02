# DeepCW BM (9M2PJU fork)

Live: **https://cw.hamradio.my** (Cloudflare Pages, also `https://deepcw.pages.dev`)

Real-time Morse code (CW) decoder powered by a neural network, in English by
default with a Bahasa Malaysia UI option, plus a Malay QSO aid.

> **Upstream credit:** all decoding technology, models, and the original web app are the
> work of **e04**. Original project: <https://github.com/e04/web-deep-cw-decoder>,
> live at <https://deepcw.cc/>. DeepCW engine reference:
> <https://github.com/e04/deepcw-engine>. This fork adds Malay UI localization and
> Malay operating aids only - no model changes. Original license (MIT)
> retained in `LICENSE`.

## What this fork adds

- **UI LANG switcher (EN / BM)** in the control panel, persisted to localStorage
  (default: EN). Covers MODE, ENGINE, INPUT, THRU, WINDOW, BANDWIDTH, CW LANG,
  START/STOP, RUN/benchmark text, and tooltips. See `src/i18n.ts`.
- **CW LANG note:** the `EN` acoustic model already decodes Malay because
  it uses Rumi Latin script (A-Z 0-9 `/?.,`). No new `.onnx` model is needed.
  `EN/JA` additionally loads the Japanese model, unchanged from upstream.
- **Malay QSO aid** (`src/cwPhrases.ts`): common Malay QSO phrases
  (Salam, Nama saya, QTH, RST 599, Terima kasih, Rig/antena, 73) plus prosigns
  (73, 88, OM, YL, QSB, QRM, QRN) with Malay meanings.
- **Footer credit bar** linking back to `e04/web-deep-cw-decoder`.
- **Deploy target:** Cloudflare Pages project `deepcw`, custom domain
  `cw.hamradio.my` (`CNAME cw -> deepcw.pages.dev`, proxied).

## Quick start

```bash
npm ci
npm run dev      # local dev
npm run build    # outputs dist/
```

Deploy (needs `CLOUDFLARE_API_TOKEN` + account ID; keys live in
`~/hamradio.my/.wp-credentials`):

```bash
rm -rf .wrangler && rm -f dist/wrangler.json
npx wrangler pages deploy dist --project-name deepcw --branch main
```

## Usage

1. Press **START (MULA)**, allow microphone access, pick INPUT device.
2. Click the scope to move the decode band; mouse wheel fine-tunes it.
3. CW LANG stays `EN` for Malay (Rumi). Use `EN/JA` only if you also
   want the Japanese (Wabun) transcript.
4. Try a Malay exchange on air:
   `SALAM APA KHABAR / NAMA SAYA 9M2PJU / QTH SAYA DI KUALA LUMPUR / RST 599 / JUMPA LAGI 73`

### Malay quick reference

| CW | Melayu | English |
|----|--------|---------|
| SALAM APA KHABAR | Salam, apa khabar? | Greetings, how are you? |
| NAMA SAYA ... | Nama saya ... | My name is ... |
| QTH SAYA DI ... | QTH saya di ... | My QTH is in ... |
| RST 599 | Laporan isyarat anda 599 | Your signal report is 599 |
| TERIMA KASIH PANGGILAN | Terima kasih kerana panggilan | Thanks for the call |
| RIG 100 W ANT DIPOL | Rig 100 watt, antena dipole | My rig is 100 watts, dipole antenna |
| JUMPA LAGI 73 | Selamat berjumpa lagi, 73 | See you again, 73 |

## Features (from upstream e04)

- Real-time Morse decoding with deep learning; robust for weak signals, QSB, noise.
- Multi-channel (pileup) decoding, audio pass-through with neural noise reduction.
- Cross-platform: Windows, macOS, Android, iOS. PWA with offline support.
- DeepRTTY mode (switch in settings) from <https://github.com/e04/DeepRTTY>.
- Noise reduction: <https://github.com/e04/HamNoise>.

## Benchmark (upstream results, HIGH mode)

Upstream reports 0.00% CER from 0 to -4 dB SNR at all tested speeds, nearly
error-free at -6 dB, under 1.5% at -8 dB and under 8% at -10 dB (AWGN,
2.5 kHz reference). Method: time-averaged signal power, ~50% keying duty
cycle. Full comparison tables (CW Skimmer, fldigi, ggmorse) and audio samples
are in the upstream README: <https://github.com/e04/web-deep-cw-decoder>.

## Credits

- **e04** - original DeepCW decoder, models (`model_en`, `model_ja`,
  `model_en_narrow`), engine, web app, benchmarks. Copyright (c) 2026 e04.
  <https://github.com/e04> / <https://deepcw.cc/>
- **9M2PJU** - this fork: BM localization, Malay phrasebook, README,
  and `cw.hamradio.my` hosting. <https://hamradio.my>

## License

MIT - see `LICENSE` (upstream e04 license retained).

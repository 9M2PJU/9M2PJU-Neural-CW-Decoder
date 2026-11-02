import { usePersistedState } from "./hooks/usePersistedState";
import { hasMatchingOption } from "./utils/optionUtils";

export type UILocale = "en" | "ms";

export const UI_LOCALE_OPTIONS: readonly UILocale[] = ["en", "ms"];

export const UI_LOCALE_LABELS: Record<UILocale, string> = {
  en: "EN",
  ms: "BM",
};

export type UIStrings = {
  mode: string;
  engine: string;
  input: string;
  thru: string;
  window: string;
  bandwidth: string;
  cwLang: string;
  uiLang: string;
  normal: string;
  pileup: string;
  benchmark: string;
  start: string;
  stop: string;
  run: string;
  running: string;
  inputTooltip: string;
  bandwidthTooltip: string;
  update: string;
  pressRun: string;
  cwNote: string;
};

export const STRINGS: Record<UILocale, UIStrings> = {
  en: {
    mode: "MODE",
    engine: "ENGINE",
    input: "INPUT",
    thru: "THRU",
    window: "WINDOW",
    bandwidth: "BANDWIDTH",
    cwLang: "CW LANG",
    uiLang: "UI LANG",
    normal: "Normal",
    pileup: "Pileup",
    benchmark: "Benchmark",
    start: "START",
    stop: "STOP",
    run: "RUN",
    running: "RUNNING...",
    inputTooltip: "Available after starting the decoder.",
    bandwidthTooltip:
      "Click the scope to move the decode band. Use the mouse wheel to fine-tune it.",
    update: "Update",
    pressRun: "Press RUN to start benchmark.",
    cwNote: "EN model decodes Malay (Rumi Latin script).",
  },
  ms: {
    mode: "MOD",
    engine: "ENJIN",
    input: "MASUKAN",
    thru: "LALUAN",
    window: "TINGKAP",
    bandwidth: "LEBAR JALUR",
    cwLang: "BHS CW",
    uiLang: "BHS UI",
    normal: "Biasa",
    pileup: "Tindan",
    benchmark: "Penanda Aras",
    start: "MULA",
    stop: "BERHENTI",
    run: "JALAN",
    running: "BERJALAN...",
    inputTooltip: "Tersedia selepas penyahkod dimulakan.",
    bandwidthTooltip:
      "Klik skop untuk mengalih jalur dekod. Guna roda tetikus untuk pelarasan halus.",
    update: "Kemas Kini",
    pressRun: "Tekan JALAN untuk mula penanda aras.",
    cwNote: "Model EN menyahkod Bahasa Melayu (tulisan Rumi).",
  },
};

export const useUILocale = () => {
  const [locale, setLocale] = usePersistedState<UILocale>(
    "ui.locale",
    "en",
    (value): value is UILocale => hasMatchingOption(value, UI_LOCALE_OPTIONS),
  );
  return { locale, setLocale, t: STRINGS[locale] };
};

// Common Malay CW QSO phrases (Rumi Latin script).
// The EN acoustic model already covers Rumi (A-Z 0-9 / ? . ,),
// so this file is a human operating aid, not a model vocabulary change.

export type CWPhrase = {
  ms: string;
  en: string;
  cw: string;
};

export const NUSANTARA_QSO_PHRASES: CWPhrase[] = [
  {
    ms: "Salam, apa khabar?",
    en: "Greetings, how are you?",
    cw: "SALAM APA KHABAR",
  },
  {
    ms: "Nama saya ...",
    en: "My name is ...",
    cw: "NAMA SAYA ...",
  },
  {
    ms: "QTH saya di ...",
    en: "My QTH is in ...",
    cw: "QTH SAYA DI ...",
  },
  {
    ms: "Laporan isyarat anda 599",
    en: "Your signal report is 599",
    cw: "RST 599",
  },
  {
    ms: "Terima kasih kerana panggilan",
    en: "Thanks for the call",
    cw: "TERIMA KASIH PANGGILAN",
  },
  {
    ms: "Cuaca di sini panas dan lembap",
    en: "Weather here is hot and humid",
    cw: "CUACA PANAS LEMBAP",
  },
  {
    ms: "Rig saya 100 watt, antena dipole",
    en: "My rig is 100 watts, dipole antenna",
    cw: "RIG 100 W ANT DIPOL",
  },
  {
    ms: "Selamat berjumpa lagi, 73",
    en: "See you again, 73",
    cw: "JUMPA LAGI 73",
  },
];

export const NUSANTARA_PROSIGNS: { sign: string; meaningMs: string }[] = [
  { sign: "73", meaningMs: "Salam mesra / tamat" },
  { sign: "88", meaningMs: "Pelukan dan cium (mesra)" },
  { sign: "OM", meaningMs: "Rakan tua (old man)" },
  { sign: "YL", meaningMs: "Wanita muda" },
  { sign: "QSB", meaningMs: "Isyarat turun naik" },
  { sign: "QRM", meaningMs: "Gangguan stesen lain" },
  { sign: "QRN", meaningMs: "Gangguan statik / petir" },
];

// Common Malay / Indonesian (Nusantara) CW QSO phrases.
// The EN acoustic model already covers Rumi Latin script (A-Z 0-9 / ? . ,),
// so this file is a human operating aid, not a model vocabulary change.

export type CWPhrase = {
  ms: string;
  id: string;
  en: string;
  cw: string;
};

export const NUSANTARA_QSO_PHRASES: CWPhrase[] = [
  {
    ms: "Salam, apa khabar?",
    id: "Salam, apa kabar?",
    en: "Greetings, how are you?",
    cw: "SALAM APA KHABAR",
  },
  {
    ms: "Nama saya ...",
    id: "Nama saya ...",
    en: "My name is ...",
    cw: "NAMA SAYA ...",
  },
  {
    ms: "QTH saya di ...",
    id: "QTH saya di ...",
    en: "My QTH is in ...",
    cw: "QTH SAYA DI ...",
  },
  {
    ms: "Laporan isyarat anda 599",
    id: "Laporan sinyal anda 599",
    en: "Your signal report is 599",
    cw: "RST 599",
  },
  {
    ms: "Terima kasih kerana panggilan",
    id: "Terima kasih atas panggilan",
    en: "Thanks for the call",
    cw: "TERIMA KASIH PANGGILAN",
  },
  {
    ms: "Cuaca di sini panas dan lembap",
    id: "Cuaca di sini panas dan lembap",
    en: "Weather here is hot and humid",
    cw: "CUACA PANAS LEMBAP",
  },
  {
    ms: "Rig saya 100 watt, antena dipole",
    id: "Rig saya 100 watt, antena dipole",
    en: "My rig is 100 watts, dipole antenna",
    cw: "RIG 100 W ANT DIPOL",
  },
  {
    ms: "Selamat berjumpa lagi, 73",
    id: "Sampai jumpa lagi, 73",
    en: "See you again, 73",
    cw: "JUMPA LAGI 73",
  },
];

export const NUSANTARA_PROSIGNS: { sign: string; meaningMs: string; meaningId: string }[] = [
  { sign: "73", meaningMs: "Salam mesra / tamat", meaningId: "Salam hormat / selesai" },
  { sign: "88", meaningMs: "Pelukan dan cium (mesra)", meaningId: "Peluk dan cium (akrab)" },
  { sign: "OM", meaningMs: "Rakan tua (old man)", meaningId: "Kawan lama (old man)" },
  { sign: "YL", meaningMs: "Wanita muda", meaningId: "Wanita muda" },
  { sign: "QSB", meaningMs: "Isyarat turun naik", meaningId: "Sinyal naik turun" },
  { sign: "QRM", meaningMs: "Gangguan stesen lain", meaningId: "Gangguan stasiun lain" },
  { sign: "QRN", meaningMs: "Gangguan statik / petir", meaningId: "Gangguan statik / petir" },
];

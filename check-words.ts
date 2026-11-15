import {
  kidemTazminatiTr,
  ihbarTazminatiTr,
  kidemVeIhbarTr,
  bruttenNeteMaasTr,
  nettenBruteMaasTr,
  asgariUcretTr,
  kidemTazminatiTavaniTr,
  gelirVergisiDilimleriTr,
  guideTrIstifaEdenKidem,
  guideTrKidemTazminatiSartlari,
  guideTrIhbarSuresi,
  guideTrEvlilikKidemTazminati,
} from './src/content/index';

const items = [
  { name: 'kidemTazminatiTr', content: kidemTazminatiTr, target: 900 },
  { name: 'ihbarTazminatiTr', content: ihbarTazminatiTr, target: 900 },
  { name: 'kidemVeIhbarTr', content: kidemVeIhbarTr, target: 900 },
  { name: 'bruttenNeteMaasTr', content: bruttenNeteMaasTr, target: 900 },
  { name: 'nettenBruteMaasTr', content: nettenBruteMaasTr, target: 900 },
  { name: 'asgariUcretTr', content: asgariUcretTr, target: 900 },
  { name: 'kidemTazminatiTavaniTr', content: kidemTazminatiTavaniTr, target: 900 },
  { name: 'gelirVergisiDilimleriTr', content: gelirVergisiDilimleriTr, target: 900 },
  { name: 'guideTrIstifaEdenKidem', content: guideTrIstifaEdenKidem, target: 1200 },
  { name: 'guideTrKidemTazminatiSartlari', content: guideTrKidemTazminatiSartlari, target: 1200 },
  { name: 'guideTrIhbarSuresi', content: guideTrIhbarSuresi, target: 1200 },
  { name: 'guideTrEvlilikKidemTazminati', content: guideTrEvlilikKidemTazminati, target: 1200 },
];

for (const item of items) {
  const count = item.content.articleSections.reduce(
    (acc, sec) => acc + sec.content.trim().split(/\s+/).length,
    0
  );
  console.log(`${item.name}: ${count} words (Target >= ${item.target}) -> ${count >= item.target ? 'PASS' : 'FAIL'}`);
}

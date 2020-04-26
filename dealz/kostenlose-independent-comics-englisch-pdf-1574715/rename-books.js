const fs = require("fs");
const path = require("path");

const books = [
  {
    "filename": "AOC-FF-Full-digi.pdf",
    "title": "Alexandria Ocasio-Cortez and the Freshman Force_ New Party Who Dis_ Digital"
  },
  {
    "filename": "AOC-SquadSpecial.pdf",
    "title": "AOC and the Freshman Force_ The Squad Special Digital"
  },
  {
    "filename": "BARACK_ElectionCollection-Digi.pdf",
    "title": "Barack The Barbarian_ No F__ks Left To Give Digital"
  },
  {
    "filename": "Bitcoin_Comic_Handbook-digi.pdf",
    "title": "The Bitcoin Comic Handbook Digital"
  },
  {
    "filename": "BoogilyHeads-01-digi.pdf",
    "title": "Boogily Heads #1"
  },
  {
    "filename": "BoogilyHeads02-DIGI.pdf",
    "title": "Boogily Heads #2 Digital"
  },
  {
    "filename": "Boogily_Heads_03 (1).pdf",
    "title": "Boogily Heads #3 Digital"
  },
  {
    "filename": "FS-01-DIGI 2.pdf",
    "title": "Final Street #1"
  },
  {
    "filename": "GFH-V1-tpb-digi.pdf",
    "title": "Galaxys for Hire Volume 1 Digital"
  },
  {
    "filename": "GFH_01.pdf",
    "title": "Galaxys For Hire #1 Digital"
  },
  {
    "filename": "GFH_02.pdf",
    "title": "Galaxys For Hire #2 Digital"
  },
  {
    "filename": "GFH_03.pdf",
    "title": "Galaxys For Hire #3 Digital"
  },
  {
    "filename": "GFH_04.pdf",
    "title": "Galaxys For Hire #4 Digital"
  },
  {
    "filename": "HowToSelfPub_Fifth.pdf",
    "title": "How to Self-Publish Comics_ Not Just Create Them - 5th Edition! Digital"
  },
  {
    "filename": "Igloobbq_01-digi (2).pdf",
    "title": "IglooBBQ_ Global Warming Party Digital"
  },
  {
    "filename": "Little_Girl_01_DIGI.pdf",
    "title": "Little Girl #1 Digital"
  },
  {
    "filename": "Little_Girl_02_DIGI.pdf",
    "title": "Little Girl #2 Digital"
  },
  {
    "filename": "Little_Girl_03_DIGI.pdf",
    "title": "Little Girl #3 Digital"
  },
  {
    "filename": "LoG-TP-Digi_2020.pdf",
    "title": "Lord of Gore Volume 1 Digital"
  },
  {
    "filename": "LordOfGore_Issue-1-DIGI.pdf",
    "title": "Lord of Gore #1 Digital"
  },
  {
    "filename": "LordOfGore_Issue-2-DIGI.pdf",
    "title": "Lord of Gore #2 Digital"
  },
  {
    "filename": "LordOfGore_Issue-3-digi.pdf",
    "title": "Lord of Gore #3 Digital"
  },
  {
    "filename": "LordOfGore_Issue-4-digi.pdf",
    "title": "Lord of Gore #4 Digital"
  },
  {
    "filename": "LordOfGore_Issue-5-digi.pdf",
    "title": "Lord of Gore #5 Digital"
  },
  {
    "filename": "LordOfGore_PreviewBook-fetch.pdf",
    "title": "Lord of Gore Sneak Peek Special"
  },
  {
    "filename": "MS-V4-digi.pdf",
    "title": "Mercy Sparx Volume 4 Killing the Gatekeepers Digital"
  },
  {
    "filename": "Mercy-Sparx-Omnibus-DIGI.pdf",
    "title": "Mercy Sparx Omnibus 1"
  },
  {
    "filename": "MercySparx13-DIGI.pdf",
    "title": "Mercy Sparx #13 Digital"
  },
  {
    "filename": "MercySparx_01_digital.pdf",
    "title": "Mercy Sparx #1 Digital"
  },
  {
    "filename": "MercySparx_02_digi.pdf",
    "title": "Mercy Sparx #2 Digital"
  },
  {
    "filename": "MercySparx_03_digi.pdf",
    "title": "Mercy Sparx #3 Digital"
  },
  {
    "filename": "MercySparx_04_digi.pdf",
    "title": "Meryc Sparx #4 Digital"
  },
  {
    "filename": "MercySparx_05_digi.pdf",
    "title": "Mercy Sparx #5 Digital"
  },
  {
    "filename": "MercySparx_11.pdf",
    "title": "Mercy Sparx #11 Digital"
  },
  {
    "filename": "Mercy_HDW_TPB_digi.pdf",
    "title": "Mercy Sparx Volume 1 Heaven's Dirty Work Digital"
  },
  {
    "filename": "Mercy_Sparx_06_digiKS.pdf",
    "title": "Mercy Sparx #6 Digital"
  },
  {
    "filename": "Mercy_Sparx_07_digi.pdf",
    "title": "Mercy Sparx #7 Digital"
  },
  {
    "filename": "Mercy_Sparx_08_digi.pdf",
    "title": "Mercy Sparx #8 Digital"
  },
  {
    "filename": "Mercy_Sparx_09-digi.pdf",
    "title": "Mercy Sparx #9 Digital"
  },
  {
    "filename": "Mercy_Sparx_10-digi.pdf",
    "title": "Mercy Sparx #10 Digital"
  },
  {
    "filename": "Mercy_Sparx_12-DIGI-060816.pdf",
    "title": "Mercy Sparx #12 Digital"
  },
  {
    "filename": "Mercy_Sparx_V3-digi.pdf",
    "title": "Mercy Sparx Volume 3 Family Roots [of All Evil] Digital"
  },
  {
    "filename": "Mercy_Sparx_WTF-digi.pdf",
    "title": "Mercy Sparx_ Who the F#¢k!_ Digital"
  },
  {
    "filename": "Mercy_Sparx_YRONE-01_digi.pdf",
    "title": "Mercy Sparx Year One #1 Digital"
  },
  {
    "filename": "Mercy_Sparx_YRONE-02-digi.pdf",
    "title": "Mercy Sparx Year One #2 Digital"
  },
  {
    "filename": "Mercy_Sparx_YRONE-03-DIGI.pdf",
    "title": "Mercy Sparx Year One #3 Digital"
  },
  {
    "filename": "Mercy_UNM_TPB_digi.pdf",
    "title": "Mercy Sparx Volume 2 Under New Management Digital"
  },
  {
    "filename": "Op_nem_digi.pdf",
    "title": "Operation Nemesis_ A Story of Genocide and Revenge Digital"
  },
  {
    "filename": "Plume-Omnibus-Digi.pdf",
    "title": "Plume Omnibus Digital"
  },
  {
    "filename": "Plume-V4-DIGI.pdf",
    "title": "Plume Volume 4 Digital"
  },
  {
    "filename": "Plume_2_digital.pdf",
    "title": "Plume #2 Digital"
  },
  {
    "filename": "Plume_3_digital.pdf",
    "title": "Plume #3 Digital"
  },
  {
    "filename": "Plume_TPB_digi.pdf",
    "title": "Plume Volume 1 Trade Paperback Digital"
  },
  {
    "filename": "Plume_TPB_vol2_digi.pdf",
    "title": "Plume Volume 2 Trade Paperback Digital"
  },
  {
    "filename": "Plume_issue_1 digital.pdf",
    "title": "Plume #1 Digital"
  },
  {
    "filename": "Plume_issue_4_digital.pdf",
    "title": "Plume #4 Digital"
  },
  {
    "filename": "Plume_issue_5_Digi.pdf",
    "title": "Plume #5 Digital"
  },
  {
    "filename": "Plume_v3_Digital.pdf",
    "title": "Plume Volume 3 Digital"
  },
  {
    "filename": "Plume_vol2_issue1_digi.pdf",
    "title": "Plume Volume 2 #1"
  },
  {
    "filename": "Plume_vol2_issue2_digi.pdf",
    "title": "Plume Volume 2 #2"
  },
  {
    "filename": "Plume_vol2_issue3_Digi.pdf",
    "title": "Plume Volume 2 #3"
  },
  {
    "filename": "Plume_vol2_issue4_digi.pdf",
    "title": "Plume Volume 2 #4 Digital"
  },
  {
    "filename": "SQ-V2-02-Digi.pdf",
    "title": "Squarriors Volume 2 Summer #2 Digital"
  },
  {
    "filename": "SQ-Vol1-SPRING-digi.pdf",
    "title": "Squarriors_ Spring Volume 1 Digital"
  },
  {
    "filename": "SQ_V2-03-digi 2.pdf",
    "title": "Squarriors Volume 2 Summer #3 Digital"
  },
  {
    "filename": "SQ_tinkin_special.pdf",
    "title": "Squarriors_ Tin Kin Convention Special Digital"
  },
  {
    "filename": "Scorch_TPB_digi.pdf",
    "title": "Scorch Digital"
  },
  {
    "filename": "Semantic-Lace_GhostStory-DIGI.pdf",
    "title": "Semantic Lace_ Ghost Story Digital"
  },
  {
    "filename": "Squarriors-V2-04-digi.pdf",
    "title": "Squarriors Volume 2 Summer #4 Digital"
  },
  {
    "filename": "Squarriors_01_digi.pdf",
    "title": "Squarriors #1 Digital"
  },
  {
    "filename": "Squarriors_02_digi.pdf",
    "title": "Squarriors #2 Digital"
  },
  {
    "filename": "Squarriors_03_digi.pdf",
    "title": "Squarriors #3 Digital"
  },
  {
    "filename": "Squarriors_04_digi.pdf",
    "title": "Squarriors #4 Digitai"
  },
  {
    "filename": "Squarriors_V2-01-DIGI.pdf",
    "title": "Squarriors Volume 2 Summer #1 Digital"
  }
];



books.forEach(book => {
  const oldName = path.resolve(__dirname, book.filename);
  const newName = path.resolve(__dirname, book.title + ".pdf");

  fs.exists(oldName, exists => {
    if (exists) {
      fs.rename(oldName, newName, err => {
        if (err) {
          console.error(`\x1b[31mFehler beim Umbenennen der Datei "${book.filename}"!\x1b[0m`);
          return;
        }
        console.log(`\x1b[32mDatei "${book.filename}" erfolgreich umbenannt!\x1b[0m`);
      })
    } else {
      console.warn(`\x1b[33mKonnte die Datei "${book.filename}" nicht finden!\x1b[0m`);
    }
  })
})
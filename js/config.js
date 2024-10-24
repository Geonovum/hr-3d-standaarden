let respecConfig = {
  useLogo: true,
  useLabel: true,
  // title is verplicht! Neem hier de titel van het document op ----------------------
  title: "Wegwijzer 3D standaarden",
  //-- specStatus is verplicht! (activeer 1 van de volgende) --------------------------
  specStatus: "wv",                   // Werkversie
  //specStatus: "cv",               // Consultatieversie
  //specStatus: "vv",               // Versie ter vaststelling
  //specStatus: "def",              // Vastgestelde versie
  //specStatus: "basis",            // Basis Document
  //-- specType is verplicht bij alle andere dan BASIS ---------------------------------
  //specType: "NO",                 // Norm
  //specType: "ST",                 // Standaard
  //specType: "IM",                 // Informatie Model
  //specType: "PR",                 // Praktijkrichtlijn
  specType: "HR",                     // HandReiking
  //specType: "WA",                 // Werkafspraak
  //specType: "BD",                 // Beheer Documentatie
  //specType: "AL",                 // Algemeen document
  //specType: "BP",                 // Best Practice
  //-- pubDomain is verplicht! (komt in de URL) -------------------------------------
  //-- zie: https://geonovum.github.io/handleiding-tooling/ReSpec/#pubdomain
  pubDomain: "TODO",
  //-- license: voor de geldende gebruiksvoorwaarden. Default is cc-by.
  //license: "cc-by-nd",            // bronvermelding, geen afgeleide werken (default)
  //license: "cc0",                 // Public Domain Dedication
  license: "cc-by",                 // Attribution, met bronvermelding
  //-- TODO shortName is verplicht! (komt in de URL: kies logische afkorting)--------------
  shortName: "hr-3d-standaarden",
  
  //edDraftURI = De URI van de draft version. Deze wordt automatisch afgeleid van de github URI; maar kan hier overschreven worden. 
	//edDraftURI: ["https://geonovum.github.io", "/", "shortName"],

  //-- publishDate is verplicht -------------------------------------------------------
  //-- NB: in de werkversie uitzetten, want dan pakt Respec de pushdate ---------------
  //publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  //-- Voor dit blok geldt: alleen als er eerdere versies zijn en altijd beiden aan/uit! 
  //previousPublishDate: "2014-05-01",
  //previousMaturity: "CV",
  //-- TODO: de namen van de Editor(s) / Redacteur(en)---------------------------------------
  //-- vul in: per Editor: name:, company:, companyURL: -------------------------------
  editors:
    [
      {
        name: "Yneke van Iersel",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //-- de namen van de auteur(s) ------------------------------------------------------
  //-- vul in: per auteur: name:, company:, companyURL: -------------------------------
  authors:
    [
      {
        name: "Yneke van Iersel",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }, 
      
      {
        name: "Linda van den Brink",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  // TODO: Vul de github URL in.
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/hr-3d-standaarden",
  // Create PDF and link to file in header (optional):
  // TODO: Change the filename as preferred.
  localBiblio: 
  {
    "3DTILES":
      {
        title:      "3D Tiles Specification 1.1",
        href:       "https://docs.ogc.org/cs/22-025r4/22-025r4.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Patrick Cozzi", "Sean Lilley"],
        date:       "2023-01-12",
    },    
    "I3S":
      {
        title:      "OGC Indexed 3d Scene Layer (I3S) and Scene Layer Package (*.slpk) Format Community Standard Version 1.3",
        href:       "https://docs.ogc.org/cs/17-014r9/17-014r9.html",
        status:     "Approved",
        publisher:  "Open Geospatial Consortium (OGC)",
        editors:    ["Carl Reed", "Tamrat Belayneh"],
        date:       "2023-01-11",
    },
    "CityGML3": 
      {
        title:    "OGC City Geography Markup Language (CityGML) Part 1: Conceptual Model Standard v3.0",
        href:     "https://docs.ogc.org/is/20-010/20-010.html",
        status:   "Approved",
        publisher:"Open Geospatial Consortium",
        editors:  ["Thomas H. Kolbe", "Tatjana Kutzner", "Carl Stephen Smyth", "Claus Nagel", "Carsten Roensdorf", "Charles Heazel"],
        date:     "2021-09-13",
    },
    "CityJSON": 
      {
        title:    "CityJSON Community Standard 2.0",
        href:     "https://docs.ogc.org/cs/20-072r5/20-072r5.html",
        status:   "Approved",
        publisher:"Open Geospatial Consortium",
        editors:  ["Hugo Ledoux"],
        date:     "2023-10-20",
    }, 
    "3DGeoVolumes":
    {      
      title:    "OGC API - 3D GeoVolumes",
      href:     "https://docs.ogc.org/DRAFTS/22-029.html",
      status:   "Draft",
      publisher:"Open Geospatial Consortium",
      editors:  ["Jeff Harrison", "Ignacio Correas", "Jerome Jacovella-St-Louis"],
      date:     "2022",
    }, 
    "glTF":
    {      
      title:    "glTF 2.0 Specification",
      href:     "https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html",
      status:   "Published",
      publisher:"Khronos Group",
      date:     "2021-10-11",
    },
    "Inventarisatie puntenwolken in Nederland":
    {      
      title:    "WP1: Inventarisatie van puntenwolken in Nederland",
      href:     "nog niet beschikbaar",
      status:   "In review",
      publisher:"Rijkswaterstaat, Het Waterschapshuis, Kadaster & TU Delft",
      editors:  ["D. van der Heide", "A. van Natijne", "I. Alkemade", "D. Hulskemper"],
      date:     "2024",
    }	  
  }
};

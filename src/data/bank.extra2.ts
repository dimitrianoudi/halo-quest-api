import type { QuestionSet } from "../types.js";

const W = [10,9,8,7,6,5,4,3,2,1];

// ---------- EASY (4) ----------
export const EXTRA_EASY_2: QuestionSet[] = [
  {
    id: "gr-modern-saints-a",
    questionByLang: {
      en: "Name 10 modern Greek Orthodox saints",
      el: "Ονομάστε 10 σύγχρονους Έλληνες Ορθόδοξους αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",             el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Paisios the Athonite",             el: "Άγιος Παΐσιος ο Αγιορείτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Porphyrios (Kafsokalivitis)",      el: "Άγιος Πορφύριος ο Καυσοκαλυβίτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Iakovos of Evia (Tsalikis)",       el: "Άγιος Ιάκωβος Τσαλίκης Ευβοίας" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ephraim of Nea Makri (New Martyr)",el: "Άγιος Εφραίμ ο Νεομάρτυς (Νέα Μάκρη)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Nicholas Planas",                  el: "Άγιος Νικόλαος Πλανάς" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Amphilochios (Makris) of Patmos",  el: "Άγιος Αμφιλόχιος (Μακρής) Πάτμου" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Arsenios of Cappadocia",           el: "Άγιος Αρσένιος ο Καππαδόκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Anthimos of Chios",                el: "Άγιος Άνθιμος Χίου" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Savvas of Kalymnos",               el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[9] },
    ],
  },
  
  {
    id: "athos-newly-glorified-a",
    questionByLang: {
      en: "Name 10 Athonite elders recently glorified",
      el: "Ονομάστε 10 νεοκαταγεγραμμένους αγιορείτες γέροντες",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Paisios the Athonite", el: "Άγιος Παΐσιος ο Αγιορείτης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ ο Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ ο Κατουνακιώτης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios (Athonite)", el: "Άγιος Πορφύριος (Αγιορείτης)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Silouan the Athonite", el: "Άγιος Σιλουανός ο Αθωνίτης" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Sophrony of Essex*",  el: "Άγιος Σωφρόνιος του Έσσεξ*" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Joseph of Vatopaidi*", el: "Άγιος Ιωσήφ Βατοπαιδινός*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint George of Drama*",     el: "Άγιος Γεώργιος Δράμας*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Savvas the New of Kalymnos", el: "Άγιος Σάββας ο Νέος της Καλύμνου" }, points: W[9] },
    ],
  },
  /* *Some connected to Athonite tradition though not all lived long on Athos. */
  
  {
    id: "recent-greek-wonderworkers-a",
    questionByLang: {
      en: "Name 10 modern Greek wonderworking saints",
      el: "Ονομάστε 10 σύγχρονους Έλληνες θαυματουργούς αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",  el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Raphael of Lesvos",    el: "Άγιος Ραφαήλ Μυτιλήνης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas of Lesvos",   el: "Άγιος Νικόλαος Μυτιλήνης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Irene of Lesvos",      el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ephraim of Nea Makri", el: "Άγιος Εφραίμ Νέας Μάκρης" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Savvas of Kalymnos",   el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos of Jacob’s Well", el: "Άγιος Φιλούμενος του Φρέατος του Ιακώβ" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Iakovos of Evia",      el: "Άγιος Ιάκωβος Ευβοίας" }, points: W[9] },
    ],
  },
  
  {
    id: "attica-modern-saints-a",
    questionByLang: {
      en: "Name 10 modern saints connected with Attica",
      el: "Ονομάστε 10 σύγχρονους αγίους συνδεδεμένους με την Αττική",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim (Nea Makri)", el: "Άγιος Εφραίμ (Νέα Μάκρη)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas Planas",     el: "Άγιος Νικόλαος Πλανάς" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Porphyrios (Athens)", el: "Άγιος Πορφύριος (Αθήνα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος της Αίγινας" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Meletios of Attica (V.L.)*", el: "Όσιος Μελέτιος Αττικής*" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Savvas the New (Relics venerated in Athens)", el: "Άγιος Σάββας ο Νέος (τίμια λείψανα στην Αθήνα)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Porphyrios—Kavsokalyvia link", el: "Άγιος Πορφύριος—σύνδεση Καυσοκαλυβίων" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Sophia of Kleisoura*", el: "Οσία Σοφία της Κλεισούρας*" }, points: W[9] },
    ],
  },
  /* *Venerated broadly; some resided/ministered beyond Attica but are closely linked pastorally. */
  
  {
    id: "patmos-elders-a",
    questionByLang: {
      en: "Name 10 elders/saints linked with Patmos & the Dodecanese",
      el: "Ονομάστε 10 γέροντες/αγίους συνδεδεμένους με Πάτμο & Δωδεκάνησα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Amphilochios (Makris) of Patmos", el: "Άγιος Αμφιλόχιος (Μακρής) Πάτμου" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Savvas of Kalymnos",              el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Christodoulos of Patmos",         el: "Όσιος Χριστόδουλος ο εν Πάτμω" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios (pilgrim to Dodecanese)",el: "Άγιος Νεκτάριος (προσκυνητής στα Δωδεκάνησα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Raphael (Lesvos link nearby)",    el: "Άγιος Ραφαήλ (κοντινή Μυτιλήνη)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Irene (Lesvos)",                   el: "Αγία Ειρήνη (Μυτιλήνη)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Nicholas (Lesvos)",                el: "Άγιος Νικόλαος (Μυτιλήνη)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Iakovos of Evia (pilgrim ties)",   el: "Άγιος Ιάκωβος Ευβοίας (δεσμοί προσκυνητή)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Porphyrios (visits to islands)",   el: "Άγιος Πορφύριος (επισκέψεις σε νησιά)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Paisios (Athonite visiting preacher)", el: "Άγιος Παΐσιος (Αγιορείτης επισκέπτης)" }, points: W[9] },
    ],
  },
  
  {
    id: "new-martyrs-hellas-a",
    questionByLang: {
      en: "Name 10 Greek new martyrs commonly commemorated",
      el: "Ονομάστε 10 Έλληνες νεομάρτυρες που τιμώνται ευρέως",
    },
    answers: [
      { id: "1",  textByLang: { en: "New Martyr Ephraim of Nea Makri", el: "Άγιος Εφραίμ ο Νεομάρτυς Νέας Μάκρης" }, points: W[0] },
      { id: "2",  textByLang: { en: "New Martyr George of Ioannina",   el: "Άγιος Γεώργιος ο Νεομάρτυς Ιωαννίνων" }, points: W[1] },
      { id: "3",  textByLang: { en: "New Martyr Constantine of Hydra", el: "Άγιος Κωνσταντίνος ο Υδραίος" }, points: W[2] },
      { id: "4",  textByLang: { en: "New Martyr Aquilina of Zagliveri",el: "Αγία Ακυλίνα της Ζαγκλιβερίου" }, points: W[3] },
      { id: "5",  textByLang: { en: "New Martyr Polydoros of Cyprus*", el: "Άγιος Πολύδωρος ο Νεομάρτυς (Κύπρος*)" }, points: W[4] },
      { id: "6",  textByLang: { en: "New Martyr Theodore of Mytilene", el: "Άγιος Θεόδωρος ο Νεομάρτυς Μυτιλήνης" }, points: W[5] },
      { id: "7",  textByLang: { en: "New Martyr Demetrios of Chios",   el: "Άγιος Δημήτριος ο Νεομάρτυς Χίου" }, points: W[6] },
      { id: "8",  textByLang: { en: "New Martyr Zograf of Kastoria*",  el: "Άγιος Ζωγράφος ο Νεομάρτυς Καστοριάς*" }, points: W[7] },
      { id: "9",  textByLang: { en: "New Martyr Nicholas of Karpenisi",el: "Άγιος Νικόλαος ο Νεομάρτυς Καρπενησίου" }, points: W[8] },
      { id: "10", textByLang: { en: "New Hieromartyr Philoumenos",     el: "Άγιος Ιερομάρτυς Φιλούμενος" }, points: W[9] },
    ],
  },
  /* *Greek world / broader Hellenic sphere included. */
  
  {
    id: "evia-saints-a",
    questionByLang: {
      en: "Name 10 saints closely linked with Evia (Euboea)",
      el: "Ονομάστε 10 αγίους στενά συνδεδεμένους με την Εύβοια",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Iakovos (Tsalikis) of Evia", el: "Άγιος Ιάκωβος (Τσαλίκης) Ευβοίας" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint David of Evia",              el: "Όσιος Δαβίδ ο εν Ευβοία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint John the Russian (Prokopi)", el: "Άγιος Ιωάννης ο Ρώσος (Προκόπι Ευβ.)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Porphyrios (visiting elder)",el: "Άγιος Πορφύριος (επισκέπτης γέροντας)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Nektarios (pilgrim ties)",   el: "Άγιος Νεκτάριος (δεσμοί προσκυνητή)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ephraim of Nea Makri (nearby)", el: "Άγιος Εφραίμ Νέας Μάκρης (κοντά)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint George the Wonderworker",    el: "Άγιος Γεώργιος ο Τροπαιοφόρος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Irene Chrysovalantou*",      el: "Αγία Ειρήνη Χρυσοβαλάντου*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Nicholas Planas*",           el: "Άγιος Νικόλαος Πλανάς*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa*",      el: "Άγιος Καλλίνικος Εδέσσης*" }, points: W[9] },
    ],
  },
  
  {
    id: "newly-recognized-greek-a",
    questionByLang: {
      en: "Name 10 recently recognized Greek elders/saints",
      el: "Ονομάστε 10 πρόσφατα αναγνωρισμένους Έλληνες γέροντες/αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Kallinikos of Edessa",    el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Joseph the Hesychast",    el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia",    el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Ephraim of Katounakia",   el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Sophrony of Essex",       el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",     el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Evmenios Saridakis",      el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Amphilochios (Makris)",   el: "Άγιος Αμφιλόχιος (Μακρής)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos of Jacob’s Well", el: "Άγιος Φιλούμενος του Φρέατος του Ιακώβ" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Porphyrios",              el: "Άγιος Πορφύριος" }, points: W[9] },
    ],
  },
  
  {
    id: "island-saints-modern-a",
    questionByLang: {
      en: "Name 10 modern saints associated with Greek islands",
      el: "Ονομάστε 10 σύγχρονους αγίους που συνδέονται με ελληνικά νησιά",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Raphael (Lesvos)",   el: "Άγιος Ραφαήλ (Λέσβος)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas (Lesvos)",  el: "Άγιος Νικόλαος (Λέσβος)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Irene (Lesvos)",     el: "Αγία Ειρήνη (Λέσβος)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Savvas (Kalymnos)",  el: "Άγιος Σάββας (Κάλυμνος)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Anthimos (Chios)",   el: "Άγιος Άνθιμος (Χίος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Irene Chrysovalantou*", el: "Αγία Ειρήνη Χρυσοβαλάντου*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos (Holy Land ties)", el: "Άγιος Φιλούμενος (Δεσμοί Αγ. Γης)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Porphyrios (Euboean & island pilgrimages)", el: "Άγιος Πορφύριος (Εύβοια & νησιά)" }, points: W[9] },
    ],
  },
  
  {
    id: "priests-modern-greece-a",
    questionByLang: {
      en: "Name 10 modern Greek parish-priest saints/confessors",
      el: "Ονομάστε 10 σύγχρονους Έλληνες εφημέριους αγίους/ομολογητές",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nicholas Planas", el: "Άγιος Νικόλαος Πλανάς" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Iakovos (Tsalikis)", el: "Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Porphyrios",     el: "Άγιος Πορφύριος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios*",     el: "Άγιος Νεκτάριος*" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Anthimos of Chios", el: "Άγιος Άνθιμος Χίου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Savvas of Kalymnos", el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios Saridakis", el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa", el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
  
  {
    id: "saints-linked-athens-a",
    questionByLang: {
      en: "Name 10 saints venerated especially in Athens/Attica",
      el: "Ονομάστε 10 αγίους που τιμώνται ιδιαίτερα στην Αθήνα/Αττική",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Nicholas Planas",    el: "Άγιος Νικόλαος Πλανάς" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Ephraim (Nea Makri)",el: "Άγιος Εφραίμ (Νέα Μάκρη)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Porphyrios (Kallisia)", el: "Άγιος Πορφύριος (Καλλισία)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Theodora of Athens*", el: "Αγία Θεοδώρα Αθηνών*" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Meletios of Kythira*", el: "Άγιος Μελέτιος Κυθήρων*" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios Saridakis",  el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa*", el: "Άγιος Καλλίνικος Εδέσσης*" }, points: W[9] },
    ],
  },
  
  {
    id: "saints-with-healing-a",
    questionByLang: {
      en: "Name 10 modern Greek saints known for healing",
      el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους γνωστούς για θεραπείες",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios", el: "Άγιος Νεκτάριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios",   el: "Άγιος Παΐσιος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Iakovos",   el: "Άγιος Ιάκωβος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Raphael",   el: "Άγιος Ραφαήλ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Nicholas (Lesvos)", el: "Άγιος Νικόλαος (Λέσβος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Irene (Lesvos)",    el: "Αγία Ειρήνη (Λέσβος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philoumenos",       el: "Άγιος Φιλούμενος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Savvas (Kalymnos)", el: "Άγιος Σάββας (Κάλυμνος)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint John the Russian*", el: "Άγιος Ιωάννης ο Ρώσος*" }, points: W[9] },
    ],
  },
  
  {
    id: "elders-of-love-mercy-a",
    questionByLang: {
      en: "Name 10 modern Greek elders noted for love and mercy",
      el: "Ονομάστε 10 σύγχρονους Έλληνες γέροντες γνωστούς για αγάπη και έλεος",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Paisios",    el: "Άγιος Παΐσιος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Iakovos",    el: "Άγιος Ιάκωβος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios",  el: "Άγιος Νεκτάριος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Amphilochios", el: "Άγιος Αμφιλόχιος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Savvas",       el: "Άγιος Σάββας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Anthimos",     el: "Άγιος Άνθιμος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Ieronymos",    el: "Όσιος Ιερώνυμος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios",     el: "Όσιος Ευμένιος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos",   el: "Άγιος Καλλίνικος" }, points: W[9] },
    ],
  },
  
  {
    id: "monastic-revival-greece-a",
    questionByLang: {
      en: "Name 10 figures tied to Greek monastic revival (20th–21st c.)",
      el: "Ονομάστε 10 πρόσωπα της ελληνικής μοναστικής αναγέννησης (20ός–21ος αι.)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Ieronymos of Aegina",  el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Sophrony of Essex",    el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Evmenios Saridakis",   el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[9] },
    ],
  },
  
  {
    id: "lesvos-contemporary-saints-a",
    questionByLang: {
      en: "Name 10 contemporary saints connected with Lesvos",
      el: "Ονομάστε 10 σύγχρονους αγίους συνδεδεμένους με τη Λέσβο",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Raphael",  el: "Άγιος Ραφαήλ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Nicholas", el: "Άγιος Νικόλαος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Irene",    el: "Αγία Ειρήνη" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Theophanes Sigrianos*", el: "Άγιος Θεοφάνης ο Σιγριανός*" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ignatios of Methymna*", el: "Άγιος Ιγνάτιος Μηθύμνης*" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Gabriel (Lesvos)",     el: "Άγιος Γαβριήλ (Λέσβος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Michael (Taxiarchis)", el: "Άγιος Μιχαήλ (Ταξιάρχης)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Nektarios (pilgrim ties)", el: "Άγιος Νεκτάριος (δεσμοί)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Paisios (visits)",     el: "Άγιος Παΐσιος (επισκέψεις)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Porphyrios (visits)",  el: "Άγιος Πορφύριος (επισκέψεις)" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-ascetics-20c-a",
    questionByLang: {
      en: "Name 10 Greek ascetics (20th–21st centuries)",
      el: "Ονομάστε 10 Έλληνες ασκητές (20ός–21ος αιώνας)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",  el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Evmenios Saridakis",   el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Sophrony of Essex*",   el: "Άγιος Σωφρόνιος του Έσσεξ*" }, points: W[9] },
    ],
  },
  
  {
    id: "recent-women-saints-el-a",
    questionByLang: {
      en: "Name 10 women saints revered in modern Greece",
      el: "Ονομάστε 10 γυναίκες αγίες που τιμώνται στη σύγχρονη Ελλάδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Irene of Lesvos", el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Sophia of Kleisoura*", el: "Οσία Σοφία της Κλεισούρας*" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Matrona of Chios",     el: "Αγία Ματρώνα Χίου" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Irene Chrysovalantou", el: "Αγία Ειρήνη Χρυσοβαλάντου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Paraskevi (Epivates)", el: "Αγία Παρασκευή (Επιβατών)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Kalliopi (New Martyr)", el: "Αγία Καλλιόπη (Νεομάρτυς)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Theodora of Vasta*",    el: "Αγία Θεοδώρα Βάστας*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Irene of Thessaloniki*", el: "Αγία Ειρήνη Θεσσαλονίκης*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kyriaki (New Martyr)",  el: "Αγία Κυριακή (Νεομάρτυς)" }, points: W[9] },
    ],
  },
  
  {
    id: "saints-with-uk-links-a",
    questionByLang: {
      en: "Name 10 saints with modern Greek/Greek-linked diaspora ties (UK)",
      el: "Ονομάστε 10 αγίους με ελληνικούς/διασπορικούς δεσμούς (Ην. Βασίλειο)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Sophrony of Essex", el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios (spiritual ties)", el: "Άγιος Πορφύριος (πνευματικοί δεσμοί)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios (influence abroad)", el: "Άγιος Παΐσιος (επίδραση στο εξωτερικό)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios (widespread veneration)", el: "Άγιος Νεκτάριος (ευρεία τιμή)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Iakovos (pilgrim ties)", el: "Άγιος Ιάκωβος (δεσμοί προσκυνητών)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Raphael (Lesvos)",     el: "Άγιος Ραφαήλ (Λέσβος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Nicholas Planas",       el: "Άγιος Νικόλαος Πλανάς" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Arsenios of Cappadocia",el: "Άγιος Αρσένιος Καππαδόκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos",           el: "Άγιος Φιλούμενος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa",  el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
  
  {
    id: "new-saints-2020s-greece-a",
    questionByLang: {
      en: "Name 10 saints whose veneration grew notably in the 2010s–2020s (Greece)",
      el: "Ονομάστε 10 αγίους με ιδιαίτερη άνθηση τιμής το 2010–2020 (Ελλάδα)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Kallinikos of Edessa", el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Evmenios Saridakis",  el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Sophrony of Essex",   el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Iakovos of Evia",     el: "Άγιος Ιάκωβος Ευβοίας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Porphyrios",          el: "Άγιος Πορφύριος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Paisios",             el: "Άγιος Παΐσιος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Philoumenos",         el: "Άγιος Φιλούμενος" }, points: W[9] },
    ],
  },
  
  {
    id: "pilgrimage-modern-greece-a",
    questionByLang: {
      en: "Name 10 major modern Greek pilgrimage sites tied to saints",
      el: "Ονομάστε 10 σημαντικά σύγχρονα ελληνικά προσκυνήματα συνδεδεμένα με αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Aegina—Saint Nektarios", el: "Αίγινα—Άγιος Νεκτάριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Nea Makri—Saint Ephraim", el: "Νέα Μάκρη—Άγιος Εφραίμ" }, points: W[1] },
      { id: "3",  textByLang: { en: "Lesvos—Saints Raphael, Nicholas, Irene", el: "Λέσβος—Άγιοι Ραφαήλ, Νικόλαος, Ειρήνη" }, points: W[2] },
      { id: "4",  textByLang: { en: "Kalymnos—Saint Savvas",    el: "Κάλυμνος—Άγιος Σάββας" }, points: W[3] },
      { id: "5",  textByLang: { en: "Patmos—Amphilochios & Saint John", el: "Πάτμος—Αμφιλόχιος & Άγ. Ιωάννης" }, points: W[4] },
      { id: "6",  textByLang: { en: "Evia—Saint Iakovos (Tsalikis)", el: "Εύβοια—Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Athens—Saint Nicholas Planas", el: "Αθήνα—Άγιος Νικόλαος Πλανάς" }, points: W[6] },
      { id: "8",  textByLang: { en: "Kavsokalyvia—Saint Porphyrios", el: "Καυσοκαλύβια—Άγιος Πορφύριος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Katounakia—Joseph & Ephraim", el: "Κατουνάκια—Ιωσήφ & Εφραίμ" }, points: W[8] },
      { id: "10", textByLang: { en: "Edessa—Saint Kallinikos",  el: "Έδεσσα—Άγιος Καλλίνικος" }, points: W[9] },
    ],
  },
  {
    id: "teachers-20c-greece-a",
    questionByLang: {
      en: "Name 10 20th–21st c. Greek spiritual teachers later glorified",
      el: "Ονομάστε 10 Έλληνες πνευματικούς διδασκάλους (20ός–21ος αι.) που αγιοποιήθηκαν",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Paisios",    el: "Άγιος Παΐσιος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Iakovos",    el: "Άγιος Ιάκωβος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios",  el: "Άγιος Νεκτάριος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Amphilochios", el: "Άγιος Αμφιλόχιος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Sophrony",   el: "Άγιος Σωφρόνιος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Kallinikos", el: "Άγιος Καλλίνικος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philoumenos",el: "Άγιος Φιλούμενος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[9] },
    ],
  },
  
  {
    id: "confessors-modern-hellas-a",
    questionByLang: {
      en: "Name 10 confessors/spiritual fathers in modern Greece",
      el: "Ονομάστε 10 ομολογητές/πνευματικούς πατέρες στη σύγχρονη Ελλάδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Iakovos (Tsalikis)", el: "Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios",         el: "Άγιος Πορφύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios",            el: "Άγιος Παΐσιος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Amphilochios",       el: "Άγιος Αμφιλόχιος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Nektarios",          el: "Άγιος Νεκτάριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Sophrony",           el: "Άγιος Σωφρόνιος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Kallinikos",         el: "Άγιος Καλλίνικος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Evmenios Saridakis", el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-miracles-icons-a",
    questionByLang: {
      en: "Name 10 Greek saints associated with famous miracle icons",
      el: "Ονομάστε 10 Έλληνες αγίους συνδεδεμένους με θαυματουργές εικόνες",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios", el: "Άγιος Νεκτάριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Raphael",   el: "Άγιος Ραφαήλ" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas",  el: "Άγιος Νικόλαος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Irene",     el: "Αγία Ειρήνη" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios",el: "Άγιος Πορφύριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Paisios",   el: "Άγιος Παΐσιος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Iakovos",   el: "Άγιος Ιάκωβος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Savvas",    el: "Άγιος Σάββας" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos", el: "Άγιος Φιλούμενος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Anthimos of Chios", el: "Άγιος Άνθιμος Χίου" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-by-virtue-a",
    questionByLang: {
      en: "Name 10 modern Greek saints by a known virtue",
      el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους με γνωστό χάρισμα/αρετή",
    },
    answers: [
      { id: "1",  textByLang: { en: "Nektarios—Patience",  el: "Νεκτάριος—Υπομονή" }, points: W[0] },
      { id: "2",  textByLang: { en: "Porphyrios—Discernment", el: "Πορφύριος—Διάκριση" }, points: W[1] },
      { id: "3",  textByLang: { en: "Paisios—Consolation", el: "Παΐσιος—Παρηγοριά" }, points: W[2] },
      { id: "4",  textByLang: { en: "Iakovos—Simplicity", el: "Ιάκωβος—Απλότης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Amphilochios—Love",  el: "Αμφιλόχιος—Αγάπη" }, points: W[4] },
      { id: "6",  textByLang: { en: "Savvas—Asceticism",  el: "Σάββας—Άσκηση" }, points: W[5] },
      { id: "7",  textByLang: { en: "Anthimos—Prayer",    el: "Άνθιμος—Προσευχή" }, points: W[6] },
      { id: "8",  textByLang: { en: "Sophrony—Theology",  el: "Σωφρόνιος—Θεολογία" }, points: W[7] },
      { id: "9",  textByLang: { en: "Joseph—Hesychia",    el: "Ιωσήφ—Ησυχία" }, points: W[8] },
      { id: "10", textByLang: { en: "Ephraim—Obedience",  el: "Εφραίμ—Υπακοή" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-elders-places-a",
    questionByLang: {
      en: "Match 10 saints to their well-known places (name the saint)",
      el: "Αντιστοιχίστε 10 αγίους με τον τόπο τους (πείτε τον άγιο)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Aegina (Monastery)",   el: "Αίγινα (Μοναστήρι)" }, points: W[0] }, // Nektarios
      { id: "2",  textByLang: { en: "Nea Makri (Amomon)",   el: "Νέα Μάκρη (Αμώμων)" }, points: W[1] }, // Ephraim
      { id: "3",  textByLang: { en: "Kavsokalyvia",         el: "Καυσοκαλύβια" }, points: W[2] },        // Porphyrios (ties)
      { id: "4",  textByLang: { en: "Katounakia",           el: "Κατουνάκια" }, points: W[3] },          // Joseph, Ephraim, Daniel
      { id: "5",  textByLang: { en: "Edessa (Greece)",      el: "Έδεσσα (Ελλάδα)" }, points: W[4] },      // Kallinikos
      { id: "6",  textByLang: { en: "Patmos (Monastery)",   el: "Πάτμος (Μονή)" }, points: W[5] },         // Amphilochios
      { id: "7",  textByLang: { en: "Kalymnos (Island)",    el: "Κάλυμνος (Νησί)" }, points: W[6] },       // Savvas
      { id: "8",  textByLang: { en: "Lesvos (Thermi/Karyes)", el: "Λέσβος (Θερμή/Καρυές)" }, points: W[7] }, // Raphael, Nicholas, Irene
      { id: "9",  textByLang: { en: "Athens (Plaka/Kifisia)", el: "Αθήνα (Πλάκα/Κηφισιά)" }, points: W[8] }, // Planas / Porphyrios
      { id: "10", textByLang: { en: "Jacob’s Well (Holy Land)", el: "Φρέαρ Ιακώβ (Αγ. Γη)" }, points: W[9] }, // Philoumenos
    ],
  },
  
  {
    id: "greek-saints-hymnographers-a",
    questionByLang: {
      en: "Name 10 hymnwriters or spiritual authors honored in Greece",
      el: "Ονομάστε 10 υμνογράφους ή πνευματικούς συγγραφείς τιμώμενους στην Ελλάδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Sophrony of Essex", el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios (counsels)", el: "Άγιος Πορφύριος (νουθεσίες)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios (counsels)",    el: "Άγιος Παΐσιος (λόγοι)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios (writings)",   el: "Άγιος Νεκτάριος (συγγράμματα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Anthimos of Chios",      el: "Άγιος Άνθιμος Χίου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",    el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Ephraim of Katounakia",  el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios Saridakis",     el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa",   el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-pastoral-a",
    questionByLang: {
      en: "Name 10 modern Greek saints famed for pastoral care",
      el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους με φήμη ποιμαντικής φροντίδας",
    },
    answers: [
      { id: "1",  textByLang: { en: "Nektarios of Aegina", el: "Νεκτάριος Αιγίνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Porphyrios",          el: "Πορφύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Paisios",             el: "Παΐσιος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Iakovos (Tsalikis)",  el: "Ιάκωβος (Τσαλίκης)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Amphilochios (Makris)", el: "Αμφιλόχιος (Μακρής)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Savvas of Kalymnos",  el: "Σάββας ο εν Καλύμνω" }, points: W[5] },
      { id: "7",  textByLang: { en: "Anthimos of Chios",   el: "Άνθιμος Χίου" }, points: W[6] },
      { id: "8",  textByLang: { en: "Ieronymos of Aegina", el: "Ιερώνυμος Αίγινας" }, points: W[7] },
      { id: "9",  textByLang: { en: "Evmenios Saridakis",  el: "Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Kallinikos of Edessa", el: "Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },


 
];

// ---------- MODERATE (3) ----------
export const EXTRA_MODERATE_2: QuestionSet[] = [
  /* ---------------- Newer Orthodox (Greek focus) ---------------- */

{
  id: "gr-modern-saints-a",
  questionByLang: {
    en: "Name 10 modern Greek Orthodox saints",
    el: "Ονομάστε 10 σύγχρονους Έλληνες Ορθόδοξους αγίους",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",             el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Paisios the Athonite",             el: "Άγιος Παΐσιος ο Αγιορείτης" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Porphyrios (Kafsokalivitis)",      el: "Άγιος Πορφύριος ο Καυσοκαλυβίτης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Iakovos of Evia (Tsalikis)",       el: "Άγιος Ιάκωβος Τσαλίκης Ευβοίας" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Ephraim of Nea Makri (New Martyr)",el: "Άγιος Εφραίμ ο Νεομάρτυς (Νέα Μάκρη)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Nicholas Planas",                  el: "Άγιος Νικόλαος Πλανάς" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Amphilochios (Makris) of Patmos",  el: "Άγιος Αμφιλόχιος (Μακρής) Πάτμου" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Arsenios of Cappadocia",           el: "Άγιος Αρσένιος ο Καππαδόκης" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Anthimos of Chios",                el: "Άγιος Άνθιμος Χίου" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Savvas of Kalymnos",               el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[9] },
  ],
},

{
  id: "athos-newly-glorified-a",
  questionByLang: {
    en: "Name 10 Athonite elders recently glorified",
    el: "Ονομάστε 10 νεοκαταγεγραμμένους αγιορείτες γέροντες",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Paisios the Athonite", el: "Άγιος Παΐσιος ο Αγιορείτης" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ ο Κατουνακιώτης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ ο Κατουνακιώτης" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Porphyrios (Athonite)", el: "Άγιος Πορφύριος (Αγιορείτης)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Silouan the Athonite", el: "Άγιος Σιλουανός ο Αθωνίτης" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Sophrony of Essex*",  el: "Άγιος Σωφρόνιος του Έσσεξ*" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Joseph of Vatopaidi*", el: "Άγιος Ιωσήφ Βατοπαιδινός*" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint George of Drama*",     el: "Άγιος Γεώργιος Δράμας*" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Savvas the New of Kalymnos", el: "Άγιος Σάββας ο Νέος της Καλύμνου" }, points: W[9] },
  ],
},
/* *Some connected to Athonite tradition though not all lived long on Athos. */

{
  id: "recent-greek-wonderworkers-a",
  questionByLang: {
    en: "Name 10 modern Greek wonderworking saints",
    el: "Ονομάστε 10 σύγχρονους Έλληνες θαυματουργούς αγίους",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",  el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Raphael of Lesvos",    el: "Άγιος Ραφαήλ Μυτιλήνης" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Nicholas of Lesvos",   el: "Άγιος Νικόλαος Μυτιλήνης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Irene of Lesvos",      el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Ephraim of Nea Makri", el: "Άγιος Εφραίμ Νέας Μάκρης" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Savvas of Kalymnos",   el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Philoumenos of Jacob’s Well", el: "Άγιος Φιλούμενος του Φρέατος του Ιακώβ" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Iakovos of Evia",      el: "Άγιος Ιάκωβος Ευβοίας" }, points: W[9] },
  ],
},

{
  id: "attica-modern-saints-a",
  questionByLang: {
    en: "Name 10 modern saints connected with Attica",
    el: "Ονομάστε 10 σύγχρονους αγίους συνδεδεμένους με την Αττική",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Ephraim (Nea Makri)", el: "Άγιος Εφραίμ (Νέα Μάκρη)" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Nicholas Planas",     el: "Άγιος Νικόλαος Πλανάς" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Porphyrios (Athens)", el: "Άγιος Πορφύριος (Αθήνα)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος της Αίγινας" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Meletios of Attica (V.L.)*", el: "Όσιος Μελέτιος Αττικής*" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Savvas the New (Relics venerated in Athens)", el: "Άγιος Σάββας ο Νέος (τίμια λείψανα στην Αθήνα)" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Porphyrios—Kavsokalyvia link", el: "Άγιος Πορφύριος—σύνδεση Καυσοκαλυβίων" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Sophia of Kleisoura*", el: "Οσία Σοφία της Κλεισούρας*" }, points: W[9] },
  ],
},
/* *Venerated broadly; some resided/ministered beyond Attica but are closely linked pastorally. */

{
  id: "patmos-elders-a",
  questionByLang: {
    en: "Name 10 elders/saints linked with Patmos & the Dodecanese",
    el: "Ονομάστε 10 γέροντες/αγίους συνδεδεμένους με Πάτμο & Δωδεκάνησα",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Amphilochios (Makris) of Patmos", el: "Άγιος Αμφιλόχιος (Μακρής) Πάτμου" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Savvas of Kalymnos",              el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Christodoulos of Patmos",         el: "Όσιος Χριστόδουλος ο εν Πάτμω" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Nektarios (pilgrim to Dodecanese)",el: "Άγιος Νεκτάριος (προσκυνητής στα Δωδεκάνησα)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Raphael (Lesvos link nearby)",    el: "Άγιος Ραφαήλ (κοντινή Μυτιλήνη)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Irene (Lesvos)",                   el: "Αγία Ειρήνη (Μυτιλήνη)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Nicholas (Lesvos)",                el: "Άγιος Νικόλαος (Μυτιλήνη)" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Iakovos of Evia (pilgrim ties)",   el: "Άγιος Ιάκωβος Ευβοίας (δεσμοί προσκυνητή)" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Porphyrios (visits to islands)",   el: "Άγιος Πορφύριος (επισκέψεις σε νησιά)" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Paisios (Athonite visiting preacher)", el: "Άγιος Παΐσιος (Αγιορείτης επισκέπτης)" }, points: W[9] },
  ],
},

{
  id: "new-martyrs-hellas-a",
  questionByLang: {
    en: "Name 10 Greek new martyrs commonly commemorated",
    el: "Ονομάστε 10 Έλληνες νεομάρτυρες που τιμώνται ευρέως",
  },
  answers: [
    { id: "1",  textByLang: { en: "New Martyr Ephraim of Nea Makri", el: "Άγιος Εφραίμ ο Νεομάρτυς Νέας Μάκρης" }, points: W[0] },
    { id: "2",  textByLang: { en: "New Martyr George of Ioannina",   el: "Άγιος Γεώργιος ο Νεομάρτυς Ιωαννίνων" }, points: W[1] },
    { id: "3",  textByLang: { en: "New Martyr Constantine of Hydra", el: "Άγιος Κωνσταντίνος ο Υδραίος" }, points: W[2] },
    { id: "4",  textByLang: { en: "New Martyr Aquilina of Zagliveri",el: "Αγία Ακυλίνα της Ζαγκλιβερίου" }, points: W[3] },
    { id: "5",  textByLang: { en: "New Martyr Polydoros of Cyprus*", el: "Άγιος Πολύδωρος ο Νεομάρτυς (Κύπρος*)" }, points: W[4] },
    { id: "6",  textByLang: { en: "New Martyr Theodore of Mytilene", el: "Άγιος Θεόδωρος ο Νεομάρτυς Μυτιλήνης" }, points: W[5] },
    { id: "7",  textByLang: { en: "New Martyr Demetrios of Chios",   el: "Άγιος Δημήτριος ο Νεομάρτυς Χίου" }, points: W[6] },
    { id: "8",  textByLang: { en: "New Martyr Zograf of Kastoria*",  el: "Άγιος Ζωγράφος ο Νεομάρτυς Καστοριάς*" }, points: W[7] },
    { id: "9",  textByLang: { en: "New Martyr Nicholas of Karpenisi",el: "Άγιος Νικόλαος ο Νεομάρτυς Καρπενησίου" }, points: W[8] },
    { id: "10", textByLang: { en: "New Hieromartyr Philoumenos",     el: "Άγιος Ιερομάρτυς Φιλούμενος" }, points: W[9] },
  ],
},
/* *Greek world / broader Hellenic sphere included. */

{
  id: "evia-saints-a",
  questionByLang: {
    en: "Name 10 saints closely linked with Evia (Euboea)",
    el: "Ονομάστε 10 αγίους στενά συνδεδεμένους με την Εύβοια",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Iakovos (Tsalikis) of Evia", el: "Άγιος Ιάκωβος (Τσαλίκης) Ευβοίας" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint David of Evia",              el: "Όσιος Δαβίδ ο εν Ευβοία" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint John the Russian (Prokopi)", el: "Άγιος Ιωάννης ο Ρώσος (Προκόπι Ευβ.)" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Porphyrios (visiting elder)",el: "Άγιος Πορφύριος (επισκέπτης γέροντας)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Nektarios (pilgrim ties)",   el: "Άγιος Νεκτάριος (δεσμοί προσκυνητή)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Ephraim of Nea Makri (nearby)", el: "Άγιος Εφραίμ Νέας Μάκρης (κοντά)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint George the Wonderworker",    el: "Άγιος Γεώργιος ο Τροπαιοφόρος" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Irene Chrysovalantou*",      el: "Αγία Ειρήνη Χρυσοβαλάντου*" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Nicholas Planas*",           el: "Άγιος Νικόλαος Πλανάς*" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kallinikos of Edessa*",      el: "Άγιος Καλλίνικος Εδέσσης*" }, points: W[9] },
  ],
},

{
  id: "newly-recognized-greek-a",
  questionByLang: {
    en: "Name 10 recently recognized Greek elders/saints",
    el: "Ονομάστε 10 πρόσφατα αναγνωρισμένους Έλληνες γέροντες/αγίους",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Kallinikos of Edessa",    el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Joseph the Hesychast",    el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Daniel of Katounakia",    el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Ephraim of Katounakia",   el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Sophrony of Essex",       el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",     el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Evmenios Saridakis",      el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Amphilochios (Makris)",   el: "Άγιος Αμφιλόχιος (Μακρής)" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Philoumenos of Jacob’s Well", el: "Άγιος Φιλούμενος του Φρέατος του Ιακώβ" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Porphyrios",              el: "Άγιος Πορφύριος" }, points: W[9] },
  ],
},

{
  id: "island-saints-modern-a",
  questionByLang: {
    en: "Name 10 modern saints associated with Greek islands",
    el: "Ονομάστε 10 σύγχρονους αγίους που συνδέονται με ελληνικά νησιά",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Raphael (Lesvos)",   el: "Άγιος Ραφαήλ (Λέσβος)" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Nicholas (Lesvos)",  el: "Άγιος Νικόλαος (Λέσβος)" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Irene (Lesvos)",     el: "Αγία Ειρήνη (Λέσβος)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Savvas (Kalymnos)",  el: "Άγιος Σάββας (Κάλυμνος)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Anthimos (Chios)",   el: "Άγιος Άνθιμος (Χίος)" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Irene Chrysovalantou*", el: "Αγία Ειρήνη Χρυσοβαλάντου*" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Philoumenos (Holy Land ties)", el: "Άγιος Φιλούμενος (Δεσμοί Αγ. Γης)" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Porphyrios (Euboean & island pilgrimages)", el: "Άγιος Πορφύριος (Εύβοια & νησιά)" }, points: W[9] },
  ],
},

{
  id: "priests-modern-greece-a",
  questionByLang: {
    en: "Name 10 modern Greek parish-priest saints/confessors",
    el: "Ονομάστε 10 σύγχρονους Έλληνες εφημέριους αγίους/ομολογητές",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nicholas Planas", el: "Άγιος Νικόλαος Πλανάς" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Iakovos (Tsalikis)", el: "Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Porphyrios",     el: "Άγιος Πορφύριος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Nektarios*",     el: "Άγιος Νεκτάριος*" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Anthimos of Chios", el: "Άγιος Άνθιμος Χίου" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Savvas of Kalymnos", el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Evmenios Saridakis", el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kallinikos of Edessa", el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
  ],
},

{
  id: "saints-linked-athens-a",
  questionByLang: {
    en: "Name 10 saints venerated especially in Athens/Attica",
    el: "Ονομάστε 10 αγίους που τιμώνται ιδιαίτερα στην Αθήνα/Αττική",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Nicholas Planas",    el: "Άγιος Νικόλαος Πλανάς" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Ephraim (Nea Makri)",el: "Άγιος Εφραίμ (Νέα Μάκρη)" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Porphyrios (Kallisia)", el: "Άγιος Πορφύριος (Καλλισία)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Theodora of Athens*", el: "Αγία Θεοδώρα Αθηνών*" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Meletios of Kythira*", el: "Άγιος Μελέτιος Κυθήρων*" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Evmenios Saridakis",  el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kallinikos of Edessa*", el: "Άγιος Καλλίνικος Εδέσσης*" }, points: W[9] },
  ],
},

{
  id: "saints-with-healing-a",
  questionByLang: {
    en: "Name 10 modern Greek saints known for healing",
    el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους γνωστούς για θεραπείες",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios", el: "Άγιος Νεκτάριος" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Paisios",   el: "Άγιος Παΐσιος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Iakovos",   el: "Άγιος Ιάκωβος" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Raphael",   el: "Άγιος Ραφαήλ" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Nicholas (Lesvos)", el: "Άγιος Νικόλαος (Λέσβος)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Irene (Lesvos)",    el: "Αγία Ειρήνη (Λέσβος)" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Philoumenos",       el: "Άγιος Φιλούμενος" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Savvas (Kalymnos)", el: "Άγιος Σάββας (Κάλυμνος)" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint John the Russian*", el: "Άγιος Ιωάννης ο Ρώσος*" }, points: W[9] },
  ],
},

{
  id: "elders-of-love-mercy-a",
  questionByLang: {
    en: "Name 10 modern Greek elders noted for love and mercy",
    el: "Ονομάστε 10 σύγχρονους Έλληνες γέροντες γνωστούς για αγάπη και έλεος",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Paisios",    el: "Άγιος Παΐσιος" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Iakovos",    el: "Άγιος Ιάκωβος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Nektarios",  el: "Άγιος Νεκτάριος" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Amphilochios", el: "Άγιος Αμφιλόχιος" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Savvas",       el: "Άγιος Σάββας" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Anthimos",     el: "Άγιος Άνθιμος" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Ieronymos",    el: "Όσιος Ιερώνυμος" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Evmenios",     el: "Όσιος Ευμένιος" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kallinikos",   el: "Άγιος Καλλίνικος" }, points: W[9] },
  ],
},

{
  id: "monastic-revival-greece-a",
  questionByLang: {
    en: "Name 10 figures tied to Greek monastic revival (20th–21st c.)",
    el: "Ονομάστε 10 πρόσωπα της ελληνικής μοναστικής αναγέννησης (20ός–21ος αι.)",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Ieronymos of Aegina",  el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Sophrony of Essex",    el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Evmenios Saridakis",   el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[9] },
  ],
},

{
  id: "lesvos-contemporary-saints-a",
  questionByLang: {
    en: "Name 10 contemporary saints connected with Lesvos",
    el: "Ονομάστε 10 σύγχρονους αγίους συνδεδεμένους με τη Λέσβο",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Raphael",  el: "Άγιος Ραφαήλ" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Nicholas", el: "Άγιος Νικόλαος" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Irene",    el: "Αγία Ειρήνη" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Theophanes Sigrianos*", el: "Άγιος Θεοφάνης ο Σιγριανός*" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Ignatios of Methymna*", el: "Άγιος Ιγνάτιος Μηθύμνης*" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Gabriel (Lesvos)",     el: "Άγιος Γαβριήλ (Λέσβος)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Michael (Taxiarchis)", el: "Άγιος Μιχαήλ (Ταξιάρχης)" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Nektarios (pilgrim ties)", el: "Άγιος Νεκτάριος (δεσμοί)" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Paisios (visits)",     el: "Άγιος Παΐσιος (επισκέψεις)" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Porphyrios (visits)",  el: "Άγιος Πορφύριος (επισκέψεις)" }, points: W[9] },
  ],
},

{
  id: "greek-ascetics-20c-a",
  questionByLang: {
    en: "Name 10 Greek ascetics (20th–21st centuries)",
    el: "Ονομάστε 10 Έλληνες ασκητές (20ός–21ος αιώνας)",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",  el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Evmenios Saridakis",   el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Sophrony of Essex*",   el: "Άγιος Σωφρόνιος του Έσσεξ*" }, points: W[9] },
  ],
},

{
  id: "recent-women-saints-el-a",
  questionByLang: {
    en: "Name 10 women saints revered in modern Greece",
    el: "Ονομάστε 10 γυναίκες αγίες που τιμώνται στη σύγχρονη Ελλάδα",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Irene of Lesvos", el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Sophia of Kleisoura*", el: "Οσία Σοφία της Κλεισούρας*" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Matrona of Chios",     el: "Αγία Ματρώνα Χίου" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Irene Chrysovalantou", el: "Αγία Ειρήνη Χρυσοβαλάντου" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Paraskevi (Epivates)", el: "Αγία Παρασκευή (Επιβατών)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Kalliopi (New Martyr)", el: "Αγία Καλλιόπη (Νεομάρτυς)" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Theodora of Vasta*",    el: "Αγία Θεοδώρα Βάστας*" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Irene of Thessaloniki*", el: "Αγία Ειρήνη Θεσσαλονίκης*" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kyriaki (New Martyr)",  el: "Αγία Κυριακή (Νεομάρτυς)" }, points: W[9] },
  ],
},

{
  id: "saints-with-uk-links-a",
  questionByLang: {
    en: "Name 10 saints with modern Greek/Greek-linked diaspora ties (UK)",
    el: "Ονομάστε 10 αγίους με ελληνικούς/διασπορικούς δεσμούς (Ην. Βασίλειο)",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Sophrony of Essex", el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Porphyrios (spiritual ties)", el: "Άγιος Πορφύριος (πνευματικοί δεσμοί)" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Paisios (influence abroad)", el: "Άγιος Παΐσιος (επίδραση στο εξωτερικό)" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Nektarios (widespread veneration)", el: "Άγιος Νεκτάριος (ευρεία τιμή)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Iakovos (pilgrim ties)", el: "Άγιος Ιάκωβος (δεσμοί προσκυνητών)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Raphael (Lesvos)",     el: "Άγιος Ραφαήλ (Λέσβος)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Nicholas Planas",       el: "Άγιος Νικόλαος Πλανάς" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Arsenios of Cappadocia",el: "Άγιος Αρσένιος Καππαδόκης" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Philoumenos",           el: "Άγιος Φιλούμενος" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kallinikos of Edessa",  el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
  ],
},

{
  id: "new-saints-2020s-greece-a",
  questionByLang: {
    en: "Name 10 saints whose veneration grew notably in the 2010s–2020s (Greece)",
    el: "Ονομάστε 10 αγίους με ιδιαίτερη άνθηση τιμής το 2010–2020 (Ελλάδα)",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Kallinikos of Edessa", el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Evmenios Saridakis",  el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Sophrony of Essex",   el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Iakovos of Evia",     el: "Άγιος Ιάκωβος Ευβοίας" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Porphyrios",          el: "Άγιος Πορφύριος" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Paisios",             el: "Άγιος Παΐσιος" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Philoumenos",         el: "Άγιος Φιλούμενος" }, points: W[9] },
  ],
},

{
  id: "pilgrimage-modern-greece-a",
  questionByLang: {
    en: "Name 10 major modern Greek pilgrimage sites tied to saints",
    el: "Ονομάστε 10 σημαντικά σύγχρονα ελληνικά προσκυνήματα συνδεδεμένα με αγίους",
  },
  answers: [
    { id: "1",  textByLang: { en: "Aegina—Saint Nektarios", el: "Αίγινα—Άγιος Νεκτάριος" }, points: W[0] },
    { id: "2",  textByLang: { en: "Nea Makri—Saint Ephraim", el: "Νέα Μάκρη—Άγιος Εφραίμ" }, points: W[1] },
    { id: "3",  textByLang: { en: "Lesvos—Saints Raphael, Nicholas, Irene", el: "Λέσβος—Άγιοι Ραφαήλ, Νικόλαος, Ειρήνη" }, points: W[2] },
    { id: "4",  textByLang: { en: "Kalymnos—Saint Savvas",    el: "Κάλυμνος—Άγιος Σάββας" }, points: W[3] },
    { id: "5",  textByLang: { en: "Patmos—Amphilochios & Saint John", el: "Πάτμος—Αμφιλόχιος & Άγ. Ιωάννης" }, points: W[4] },
    { id: "6",  textByLang: { en: "Evia—Saint Iakovos (Tsalikis)", el: "Εύβοια—Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[5] },
    { id: "7",  textByLang: { en: "Athens—Saint Nicholas Planas", el: "Αθήνα—Άγιος Νικόλαος Πλανάς" }, points: W[6] },
    { id: "8",  textByLang: { en: "Kavsokalyvia—Saint Porphyrios", el: "Καυσοκαλύβια—Άγιος Πορφύριος" }, points: W[7] },
    { id: "9",  textByLang: { en: "Katounakia—Joseph & Ephraim", el: "Κατουνάκια—Ιωσήφ & Εφραίμ" }, points: W[8] },
    { id: "10", textByLang: { en: "Edessa—Saint Kallinikos",  el: "Έδεσσα—Άγιος Καλλίνικος" }, points: W[9] },
  ],
},
{
  id: "teachers-20c-greece-a",
  questionByLang: {
    en: "Name 10 20th–21st c. Greek spiritual teachers later glorified",
    el: "Ονομάστε 10 Έλληνες πνευματικούς διδασκάλους (20ός–21ος αι.) που αγιοποιήθηκαν",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Paisios",    el: "Άγιος Παΐσιος" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Iakovos",    el: "Άγιος Ιάκωβος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Nektarios",  el: "Άγιος Νεκτάριος" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Amphilochios", el: "Άγιος Αμφιλόχιος" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Sophrony",   el: "Άγιος Σωφρόνιος" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Kallinikos", el: "Άγιος Καλλίνικος" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Philoumenos",el: "Άγιος Φιλούμενος" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[9] },
  ],
},

{
  id: "confessors-modern-hellas-a",
  questionByLang: {
    en: "Name 10 confessors/spiritual fathers in modern Greece",
    el: "Ονομάστε 10 ομολογητές/πνευματικούς πατέρες στη σύγχρονη Ελλάδα",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Iakovos (Tsalikis)", el: "Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Porphyrios",         el: "Άγιος Πορφύριος" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Paisios",            el: "Άγιος Παΐσιος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Amphilochios",       el: "Άγιος Αμφιλόχιος" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Nektarios",          el: "Άγιος Νεκτάριος" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Sophrony",           el: "Άγιος Σωφρόνιος" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Kallinikos",         el: "Άγιος Καλλίνικος" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Evmenios Saridakis", el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[9] },
  ],
},

{
  id: "greek-saints-miracles-icons-a",
  questionByLang: {
    en: "Name 10 Greek saints associated with famous miracle icons",
    el: "Ονομάστε 10 Έλληνες αγίους συνδεδεμένους με θαυματουργές εικόνες",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Nektarios", el: "Άγιος Νεκτάριος" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Raphael",   el: "Άγιος Ραφαήλ" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Nicholas",  el: "Άγιος Νικόλαος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Irene",     el: "Αγία Ειρήνη" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Porphyrios",el: "Άγιος Πορφύριος" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Paisios",   el: "Άγιος Παΐσιος" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Iakovos",   el: "Άγιος Ιάκωβος" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Savvas",    el: "Άγιος Σάββας" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Philoumenos", el: "Άγιος Φιλούμενος" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Anthimos of Chios", el: "Άγιος Άνθιμος Χίου" }, points: W[9] },
  ],
},

{
  id: "greek-saints-by-virtue-a",
  questionByLang: {
    en: "Name 10 modern Greek saints by a known virtue",
    el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους με γνωστό χάρισμα/αρετή",
  },
  answers: [
    { id: "1",  textByLang: { en: "Nektarios—Patience",  el: "Νεκτάριος—Υπομονή" }, points: W[0] },
    { id: "2",  textByLang: { en: "Porphyrios—Discernment", el: "Πορφύριος—Διάκριση" }, points: W[1] },
    { id: "3",  textByLang: { en: "Paisios—Consolation", el: "Παΐσιος—Παρηγοριά" }, points: W[2] },
    { id: "4",  textByLang: { en: "Iakovos—Simplicity", el: "Ιάκωβος—Απλότης" }, points: W[3] },
    { id: "5",  textByLang: { en: "Amphilochios—Love",  el: "Αμφιλόχιος—Αγάπη" }, points: W[4] },
    { id: "6",  textByLang: { en: "Savvas—Asceticism",  el: "Σάββας—Άσκηση" }, points: W[5] },
    { id: "7",  textByLang: { en: "Anthimos—Prayer",    el: "Άνθιμος—Προσευχή" }, points: W[6] },
    { id: "8",  textByLang: { en: "Sophrony—Theology",  el: "Σωφρόνιος—Θεολογία" }, points: W[7] },
    { id: "9",  textByLang: { en: "Joseph—Hesychia",    el: "Ιωσήφ—Ησυχία" }, points: W[8] },
    { id: "10", textByLang: { en: "Ephraim—Obedience",  el: "Εφραίμ—Υπακοή" }, points: W[9] },
  ],
},

{
  id: "greek-saints-elders-places-a",
  questionByLang: {
    en: "Match 10 saints to their well-known places (name the saint)",
    el: "Αντιστοιχίστε 10 αγίους με τον τόπο τους (πείτε τον άγιο)",
  },
  answers: [
    { id: "1",  textByLang: { en: "Aegina (Monastery)",   el: "Αίγινα (Μοναστήρι)" }, points: W[0] }, // Nektarios
    { id: "2",  textByLang: { en: "Nea Makri (Amomon)",   el: "Νέα Μάκρη (Αμώμων)" }, points: W[1] }, // Ephraim
    { id: "3",  textByLang: { en: "Kavsokalyvia",         el: "Καυσοκαλύβια" }, points: W[2] },        // Porphyrios (ties)
    { id: "4",  textByLang: { en: "Katounakia",           el: "Κατουνάκια" }, points: W[3] },          // Joseph, Ephraim, Daniel
    { id: "5",  textByLang: { en: "Edessa (Greece)",      el: "Έδεσσα (Ελλάδα)" }, points: W[4] },      // Kallinikos
    { id: "6",  textByLang: { en: "Patmos (Monastery)",   el: "Πάτμος (Μονή)" }, points: W[5] },         // Amphilochios
    { id: "7",  textByLang: { en: "Kalymnos (Island)",    el: "Κάλυμνος (Νησί)" }, points: W[6] },       // Savvas
    { id: "8",  textByLang: { en: "Lesvos (Thermi/Karyes)", el: "Λέσβος (Θερμή/Καρυές)" }, points: W[7] }, // Raphael, Nicholas, Irene
    { id: "9",  textByLang: { en: "Athens (Plaka/Kifisia)", el: "Αθήνα (Πλάκα/Κηφισιά)" }, points: W[8] }, // Planas / Porphyrios
    { id: "10", textByLang: { en: "Jacob’s Well (Holy Land)", el: "Φρέαρ Ιακώβ (Αγ. Γη)" }, points: W[9] }, // Philoumenos
  ],
},

{
  id: "greek-saints-hymnographers-a",
  questionByLang: {
    en: "Name 10 hymnwriters or spiritual authors honored in Greece",
    el: "Ονομάστε 10 υμνογράφους ή πνευματικούς συγγραφείς τιμώμενους στην Ελλάδα",
  },
  answers: [
    { id: "1",  textByLang: { en: "Saint Sophrony of Essex", el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[0] },
    { id: "2",  textByLang: { en: "Saint Porphyrios (counsels)", el: "Άγιος Πορφύριος (νουθεσίες)" }, points: W[1] },
    { id: "3",  textByLang: { en: "Saint Paisios (counsels)",    el: "Άγιος Παΐσιος (λόγοι)" }, points: W[2] },
    { id: "4",  textByLang: { en: "Saint Nektarios (writings)",   el: "Άγιος Νεκτάριος (συγγράμματα)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Saint Anthimos of Chios",      el: "Άγιος Άνθιμος Χίου" }, points: W[4] },
    { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",    el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
    { id: "7",  textByLang: { en: "Saint Ephraim of Katounakia",  el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[6] },
    { id: "8",  textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[7] },
    { id: "9",  textByLang: { en: "Saint Evmenios Saridakis",     el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
    { id: "10", textByLang: { en: "Saint Kallinikos of Edessa",   el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
  ],
},

{
  id: "greek-saints-pastoral-a",
  questionByLang: {
    en: "Name 10 modern Greek saints famed for pastoral care",
    el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους με φήμη ποιμαντικής φροντίδας",
  },
  answers: [
    { id: "1",  textByLang: { en: "Nektarios of Aegina", el: "Νεκτάριος Αιγίνης" }, points: W[0] },
    { id: "2",  textByLang: { en: "Porphyrios",          el: "Πορφύριος" }, points: W[1] },
    { id: "3",  textByLang: { en: "Paisios",             el: "Παΐσιος" }, points: W[2] },
    { id: "4",  textByLang: { en: "Iakovos (Tsalikis)",  el: "Ιάκωβος (Τσαλίκης)" }, points: W[3] },
    { id: "5",  textByLang: { en: "Amphilochios (Makris)", el: "Αμφιλόχιος (Μακρής)" }, points: W[4] },
    { id: "6",  textByLang: { en: "Savvas of Kalymnos",  el: "Σάββας ο εν Καλύμνω" }, points: W[5] },
    { id: "7",  textByLang: { en: "Anthimos of Chios",   el: "Άνθιμος Χίου" }, points: W[6] },
    { id: "8",  textByLang: { en: "Ieronymos of Aegina", el: "Ιερώνυμος Αίγινας" }, points: W[7] },
    { id: "9",  textByLang: { en: "Evmenios Saridakis",  el: "Ευμένιος Σαριδάκης" }, points: W[8] },
    { id: "10", textByLang: { en: "Kallinikos of Edessa", el: "Καλλίνικος Εδέσσης" }, points: W[9] },
  ],
},
  {
    id: "nt-titles-jesus-easy",
    questionByLang: {
      en: "Name 10 titles of Jesus from the New Testament",
      el: "Ονομάστε 10 τίτλους του Ιησού στην Καινή Διαθήκη"
    },
    answers: [
      { id: "1",  textByLang: { en: "Christ", el: "Χριστός" }, points: W[0] },
      { id: "2",  textByLang: { en: "Lord", el: "Κύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Savior", el: "Σωτήρας" }, points: W[2] },
      { id: "4",  textByLang: { en: "Rabbi/Teacher", el: "Ραββί/Διδάσκαλος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Son of David", el: "Υιός Δαβίδ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Son of God", el: "Υιός Θεού" }, points: W[5] },
      { id: "7",  textByLang: { en: "Son of Man", el: "Υιός Ανθρώπου" }, points: W[6] },
      { id: "8",  textByLang: { en: "Light of the World", el: "Φως του Κόσμου" }, points: W[7] },
      { id: "9",  textByLang: { en: "Bread of Life", el: "Άρτος της Ζωής" }, points: W[8] },
      { id: "10", textByLang: { en: "Good Shepherd", el: "Καλός Ποιμήν" }, points: W[9] }
    ]
  },
  {
    id: "acts-mission-places",
    questionByLang: {
      en: "Name 10 places from Paul’s missionary journeys (Acts)",
      el: "Ονομάστε 10 τόπους από τα ιεραποστολικά ταξίδια του Παύλου (Πράξεις)"
    },
    answers: [
      { id: "1",  textByLang: { en: "Antioch", el: "Αντιόχεια" }, points: W[0] },
      { id: "2",  textByLang: { en: "Cyprus", el: "Κύπρος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Philippi", el: "Φίλιπποι" }, points: W[2] },
      { id: "4",  textByLang: { en: "Corinth", el: "Κόρινθος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Ephesus", el: "Έφεσος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Thessalonica", el: "Θεσσαλονίκη" }, points: W[5] },
      { id: "7",  textByLang: { en: "Athens", el: "Αθήνα" }, points: W[6] },
      { id: "8",  textByLang: { en: "Berea", el: "Βέροια" }, points: W[7] },
      { id: "9",  textByLang: { en: "Malta", el: "Μάλτα" }, points: W[8] },
      { id: "10", textByLang: { en: "Rome", el: "Ρώμη" }, points: W[9] }
    ]
  },

  {
    id: "nt-virtues-paul",
    questionByLang: {
      en: "Name 10 Pauline virtues or fruits",
      el: "Ονομάστε 10 παυλιανές αρετές ή καρπούς"
    },
    answers: [
      { id: "1",  textByLang: { en: "Love", el: "Αγάπη" }, points: W[0] },
      { id: "2",  textByLang: { en: "Joy", el: "Χαρά" }, points: W[1] },
      { id: "3",  textByLang: { en: "Peace", el: "Ειρήνη" }, points: W[2] },
      { id: "4",  textByLang: { en: "Patience", el: "Μακροθυμία" }, points: W[3] },
      { id: "5",  textByLang: { en: "Kindness", el: "Χρηστότητα" }, points: W[4] },
      { id: "6",  textByLang: { en: "Goodness", el: "Αγαθωσύνη" }, points: W[5] },
      { id: "7",  textByLang: { en: "Faithfulness", el: "Πίστις" }, points: W[6] },
      { id: "8",  textByLang: { en: "Gentleness", el: "Πραότης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Self-control", el: "Εγκράτεια" }, points: W[8] },
      { id: "10", textByLang: { en: "Hope", el: "Ελπίδα" }, points: W[9] }
    ]
  },
  {
    id: "nt-prayers",
    questionByLang: {
      en: "Name 10 notable prayers in the New Testament",
      el: "Ονομάστε 10 σημαντικές προσευχές στην Καινή Διαθήκη"
    },
    answers: [
      { id: "1",  textByLang: { en: "The Lord’s Prayer", el: "Πάτερ ἡμῶν" }, points: W[0] },
      { id: "2",  textByLang: { en: "High Priestly Prayer (John 17)", el: "Αρχιερατική Προσευχή (Ιω. 17)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Mary’s Magnificat", el: "Μεγαλύνει η ψυχή μου" }, points: W[2] },
      { id: "4",  textByLang: { en: "Zechariah’s Benedictus", el: "Ευλογητός (Ζαχαρίας)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Simeon’s Nunc Dimittis", el: "Νυν απολύεις" }, points: W[4] },
      { id: "6",  textByLang: { en: "Stephen’s prayer", el: "Προσευχή Στεφάνου" }, points: W[5] },
      { id: "7",  textByLang: { en: "Paul’s doxologies", el: "Δοξολογίες Παύλου" }, points: W[6] },
      { id: "8",  textByLang: { en: "Prayer in Gethsemane", el: "Προσευχή στη Γεθσημανή" }, points: W[7] },
      { id: "9",  textByLang: { en: "The Church’s prayer in Acts 4", el: "Προσευχή Εκκλησίας στις Πράξεις 4" }, points: W[8] },
      { id: "10", textByLang: { en: "Come, Lord Jesus (Rev 22)", el: "Έλα, Κύριε Ιησού (Απ. 22)" }, points: W[9] }
    ]
  },
  {
    id: "christ-titles-a",
    questionByLang: {
      en: "Name 10 titles of Jesus Christ found in Scripture",
      el: "Ονομάστε 10 χριστολογικούς τίτλους από την Αγία Γραφή",
    },
    answers: [
      { id: "1",  textByLang: { en: "Son of God",        el: "Υιός του Θεού" }, points: W[0] },
      { id: "2",  textByLang: { en: "Son of Man",        el: "Υιός του Ανθρώπου" }, points: W[1] },
      { id: "3",  textByLang: { en: "Lord",              el: "Κύριος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Messiah/Christ",    el: "Μεσσίας/Χριστός" }, points: W[3] },
      { id: "5",  textByLang: { en: "Lamb of God",       el: "Αμνός του Θεού" }, points: W[4] },
      { id: "6",  textByLang: { en: "Logos/Word",        el: "Λόγος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Good Shepherd",     el: "Καλός Ποιμήν" }, points: W[6] },
      { id: "8",  textByLang: { en: "Light of the World",el: "Φως του κόσμου" }, points: W[7] },
      { id: "9",  textByLang: { en: "King of Kings",     el: "Βασιλέας των βασιλέων" }, points: W[8] },
      { id: "10", textByLang: { en: "Alpha and Omega",   el: "Άλφα και Ωμέγα" }, points: W[9] },
    ],
  },
  {
    id: "core-doctrines-a",
    questionByLang: {
      en: "Name 10 core Christian doctrines",
      el: "Ονομάστε 10 βασικά χριστιανικά δόγματα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Trinity",              el: "Αγία Τριάδα" }, points: W[0] },
      { id: "2",  textByLang: { en: "Incarnation",          el: "Ενσάρκωση" }, points: W[1] },
      { id: "3",  textByLang: { en: "Atonement",            el: "Εξιλέωση" }, points: W[2] },
      { id: "4",  textByLang: { en: "Resurrection",         el: "Ανάσταση" }, points: W[3] },
      { id: "5",  textByLang: { en: "Creation ex nihilo",   el: "Δημιουργία εκ του μηδενός" }, points: W[4] },
      { id: "6",  textByLang: { en: "Grace",                el: "Χάρις" }, points: W[5] },
      { id: "7",  textByLang: { en: "Justification",        el: "Δικαίωση" }, points: W[6] },
      { id: "8",  textByLang: { en: "Sanctification",       el: "Αγιασμός" }, points: W[7] },
      { id: "9",  textByLang: { en: "Theosis/Deification",  el: "Θέωση" }, points: W[8] },
      { id: "10", textByLang: { en: "Second Coming (Parousia)", el: "Δευτέρα Παρουσία" }, points: W[9] },
    ],
  },
  {
    id: "fathers-early-a",
    questionByLang: {
      en: "Name 10 early Church Fathers",
      el: "Ονομάστε 10 Πατέρες της αρχαίας Εκκλησίας",
    },
    answers: [
      { id: "1",  textByLang: { en: "Athanasius",               el: "Αθανάσιος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Basil the Great",          el: "Βασίλειος ο Μέγας" }, points: W[1] },
      { id: "3",  textByLang: { en: "Gregory the Theologian",   el: "Γρηγόριος ο Θεολόγος" }, points: W[2] },
      { id: "4",  textByLang: { en: "John Chrysostom",          el: "Ιωάννης ο Χρυσόστομος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Irenaeus",                 el: "Ειρηναίος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Ignatius of Antioch",      el: "Ιγνάτιος Αντιοχείας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Cyril of Alexandria",      el: "Κύριλλος Αλεξανδρείας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Gregory of Nyssa",         el: "Γρηγόριος Νύσσης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Tertullian",               el: "Τερτυλλιανός" }, points: W[8] },
      { id: "10", textByLang: { en: "Augustine of Hippo",       el: "Αυγουστίνος" }, points: W[9] },
    ],
  },
  {
    id: "beatitudes-a",
    questionByLang: {
      en: "Name 10 Beatitudes from the Sermon on the Mount",
      el: "Ονομάστε 10 Μακαρισμούς από την Επί του Όρους Ομιλία",
    },
    answers: [
      { id: "1",  textByLang: { en: "Poor in spirit",                 el: "Πτωχοί τῷ πνεύματι" }, points: W[0] },
      { id: "2",  textByLang: { en: "Those who mourn",                 el: "Οἱ πενθοῦντες" }, points: W[1] },
      { id: "3",  textByLang: { en: "The meek",                        el: "Οἱ πραεῖς" }, points: W[2] },
      { id: "4",  textByLang: { en: "Hunger & thirst for righteousness", el: "Οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην" }, points: W[3] },
      { id: "5",  textByLang: { en: "The merciful",                    el: "Οἱ ἐλεήμονες" }, points: W[4] },
      { id: "6",  textByLang: { en: "Pure in heart",                   el: "Οἱ καθαροὶ τῇ καρδίᾳ" }, points: W[5] },
      { id: "7",  textByLang: { en: "Peacemakers",                     el: "Οἱ εἰρηνοποιοί" }, points: W[6] },
      { id: "8",  textByLang: { en: "Persecuted for righteousness",    el: "Οἱ δεδιωγμένοι ἕνεκεν δικαιοσύνης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Reviled/falsely accused for Christ", el: "Οἱ ὀνειδιζόμενοι καὶ ψευδόμενοι ἕνεκεν Χριστοῦ" }, points: W[8] },
      { id: "10", textByLang: { en: "Rejoice & be glad (reward in heaven)", el: "Χαίρετε καὶ ἀγαλλιᾶσθε (μισθός ἐν οὐρανοῖς)" }, points: W[9] },
    ],
  },
  {
    id: "apostles-twelve-a",
    questionByLang: {
      en: "Name 10 of the Twelve Apostles",
      el: "Ονομάστε 10 από τους Δώδεκα Αποστόλους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Peter",                 el: "Πέτρος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Andrew",                el: "Ἀνδρέας" }, points: W[1] },
      { id: "3",  textByLang: { en: "James (son of Zebedee)",el: "Ἰάκωβος (τοῦ Ζεβεδαίου)" }, points: W[2] },
      { id: "4",  textByLang: { en: "John",                  el: "Ἰωάννης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Philip",                el: "Φίλιππος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Bartholomew",           el: "Βαρθολομαῖος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Thomas",                el: "Θωμᾶς" }, points: W[6] },
      { id: "8",  textByLang: { en: "Matthew",               el: "Ματθαῖος" }, points: W[7] },
      { id: "9",  textByLang: { en: "James (son of Alphaeus)", el: "Ἰάκωβος (τοῦ Ἀλφαίου)" }, points: W[8] },
      { id: "10", textByLang: { en: "Thaddaeus/Jude",        el: "Θαδδαῖος/Ἰούδας" }, points: W[9] },
    ],
  },

  {
    id: "pauline-recipients-a",
    questionByLang: {
      en: "Name 10 recipients/churches of Pauline letters",
      el: "Ονομάστε 10 παραλήπτες/εκκλησίες των επιστολών του Παύλου",
    },
    answers: [
      { id: "1",  textByLang: { en: "Romans",        el: "Ρωμαίους" }, points: W[0] },
      { id: "2",  textByLang: { en: "Corinthians",   el: "Κορινθίους" }, points: W[1] },
      { id: "3",  textByLang: { en: "Galatians",     el: "Γαλάτας" }, points: W[2] },
      { id: "4",  textByLang: { en: "Ephesians",     el: "Εφεσίους" }, points: W[3] },
      { id: "5",  textByLang: { en: "Philippians",   el: "Φιλιππησίους" }, points: W[4] },
      { id: "6",  textByLang: { en: "Colossians",    el: "Κολοσσαείς" }, points: W[5] },
      { id: "7",  textByLang: { en: "Thessalonians", el: "Θεσσαλονικείς" }, points: W[6] },
      { id: "8",  textByLang: { en: "Timothy",       el: "Τιμόθεο" }, points: W[7] },
      { id: "9",  textByLang: { en: "Titus",         el: "Τίτο" }, points: W[8] },
      { id: "10", textByLang: { en: "Philemon",      el: "Φιλήμονα" }, points: W[9] },
    ],
  },
  {
    id: "kings-israel-judah-a",
    questionByLang: {
      en: "Name 10 kings of Israel/Judah",
      el: "Ονομάστε 10 βασιλείς του Ισραήλ/Ιούδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saul",        el: "Σαούλ" }, points: W[0] },
      { id: "2",  textByLang: { en: "David",       el: "Δαβίδ" }, points: W[1] },
      { id: "3",  textByLang: { en: "Solomon",     el: "Σολομών" }, points: W[2] },
      { id: "4",  textByLang: { en: "Rehoboam",    el: "Ροβοάμ" }, points: W[3] },
      { id: "5",  textByLang: { en: "Jeroboam",    el: "Ιεροβοάμ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Hezekiah",    el: "Εζεκίας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Josiah",      el: "Ιωσίας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Ahab",        el: "Αχαάβ" }, points: W[7] },
      { id: "9",  textByLang: { en: "Jehoshaphat", el: "Ιωσαφάτ" }, points: W[8] },
      { id: "10", textByLang: { en: "Manasseh",    el: "Μανασσή" }, points: W[9] },
    ],
  },
  {
    id: "acts-events-a",
    questionByLang: {
      en: "Name 10 key events from the Acts of the Apostles",
      el: "Ονομάστε 10 σημαντικά γεγονότα από τις Πράξεις των Αποστόλων",
    },
    answers: [
      { id: "1",  textByLang: { en: "Pentecost",                      el: "Πεντηκοστή" }, points: W[0] },
      { id: "2",  textByLang: { en: "Healing at the Beautiful Gate",  el: "Ίαση στην Ωραία Πύλη" }, points: W[1] },
      { id: "3",  textByLang: { en: "Ananias and Sapphira",           el: "Ανανίας και Σαπφείρα" }, points: W[2] },
      { id: "4",  textByLang: { en: "Choosing the Seven",             el: "Εκλογή των Επτά" }, points: W[3] },
      { id: "5",  textByLang: { en: "Stoning of Stephen",             el: "Λιθοβολισμός του Στεφάνου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Conversion of Saul",             el: "Μεταστροφή του Σαύλου" }, points: W[5] },
      { id: "7",  textByLang: { en: "Peter and Cornelius",            el: "Πέτρος και Κορνήλιος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Council of Jerusalem",           el: "Σύνοδος των Ιεροσολύμων" }, points: W[7] },
      { id: "9",  textByLang: { en: "Philippian jailer converted",    el: "Ο δεσμοφύλακας των Φιλίππων" }, points: W[8] },
      { id: "10", textByLang: { en: "Shipwreck at Malta",             el: "Ναυάγιο στη Μάλτα" }, points: W[9] },
    ],
  },
  {
    id: "jesus-titles-a",
    questionByLang: {
      en: "Name 10 titles of Jesus",
      el: "Ονομάστε 10 τίτλους του Ιησού",
    },
    answers: [
      { id: "1",  textByLang: { en: "Son of God",         el: "Υιός του Θεού" }, points: W[0] },
      { id: "2",  textByLang: { en: "Son of Man",         el: "Υιός του Ανθρώπου" }, points: W[1] },
      { id: "3",  textByLang: { en: "Lamb of God",        el: "Αμνός του Θεού" }, points: W[2] },
      { id: "4",  textByLang: { en: "Light of the World", el: "Φως του κόσμου" }, points: W[3] },
      { id: "5",  textByLang: { en: "Bread of Life",      el: "Άρτος της ζωής" }, points: W[4] },
      { id: "6",  textByLang: { en: "Good Shepherd",      el: "Καλός Ποιμένας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Alpha and Omega",    el: "Άλφα και Ωμέγα" }, points: W[6] },
      { id: "8",  textByLang: { en: "King of Kings",      el: "Βασιλεύς των βασιλέων" }, points: W[7] },
      { id: "9",  textByLang: { en: "Lord",               el: "Κύριος" }, points: W[8] },
      { id: "10", textByLang: { en: "Emmanuel",           el: "Εμμανουήλ" }, points: W[9] },
    ],
  },
  {
    id: "divine-names-a",
    questionByLang: {
      en: "Name 10 biblical names/titles of God",
      el: "Ονομάστε 10 βιβλικά ονόματα/τίτλους του Θεού",
    },
    answers: [
      { id: "1",  textByLang: { en: "YHWH (the LORD)", el: "Κύριος (Γιαχβέ)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Elohim",          el: "Ελοχίμ" }, points: W[1] },
      { id: "3",  textByLang: { en: "El Shaddai",      el: "Θεός Παντοκράτωρ (Ελ Σανταΐ)" }, points: W[2] },
      { id: "4",  textByLang: { en: "El Elyon",        el: "Ύψιστος Θεός (Ελ Ελιόν)" }, points: W[3] },
      { id: "5",  textByLang: { en: "I AM",            el: "Εγώ ειμί" }, points: W[4] },
      { id: "6",  textByLang: { en: "Adonai",          el: "Αδωνάι (Κύριος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Rock",            el: "Πέτρα/Βράχος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Shepherd",        el: "Ποιμήν" }, points: W[7] },
      { id: "9",  textByLang: { en: "Father",          el: "Πατήρ" }, points: W[8] },
      { id: "10", textByLang: { en: "King",            el: "Βασιλεύς" }, points: W[9] },
    ],
  },
  {
    id: "luke-parables-a",
    questionByLang: {
      en: "Name 10 parables unique to Luke",
      el: "Ονομάστε 10 παραβολές που υπάρχουν μόνο στον Λουκά",
    },
    answers: [
      { id: "1",  textByLang: { en: "Good Samaritan",          el: "Ο Καλός Σαμαρείτης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Prodigal Son",            el: "Ο Άσωτος Υιός" }, points: W[1] },
      { id: "3",  textByLang: { en: "Rich Man and Lazarus",    el: "Ο Πλούσιος και ο Λάζαρος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Pharisee and Tax Collector", el: "Ο Φαρισαίος και ο Τελώνης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Friend at Midnight",      el: "Ο Φίλος τα Μεσάνυχτα" }, points: W[4] },
      { id: "6",  textByLang: { en: "Persistent Widow",        el: "Η Επίμονη Χήρα" }, points: W[5] },
      { id: "7",  textByLang: { en: "Lost Coin",               el: "Η Χαμένη Δραχμή" }, points: W[6] },
      { id: "8",  textByLang: { en: "Ten Minas",               el: "Οι Δέκα Μνᾶς" }, points: W[7] },
      { id: "9",  textByLang: { en: "Great Banquet",           el: "Ο Μέγας Δείπνος" }, points: W[8] },
      { id: "10", textByLang: { en: "Rich Fool",               el: "Ο Άφρων Πλούσιος" }, points: W[9] },
    ],
  },
  {
    id: "women-ot-a",
    questionByLang: {
      en: "Name 10 women from the Old Testament",
      el: "Ονομάστε 10 γυναίκες της Παλαιάς Διαθήκης",
    },
    answers: [
      { id: "1",  textByLang: { en: "Sarah",    el: "Σάρρα" }, points: W[0] },
      { id: "2",  textByLang: { en: "Rebekah",  el: "Ρεβέκκα" }, points: W[1] },
      { id: "3",  textByLang: { en: "Rachel",   el: "Ραχήλ" }, points: W[2] },
      { id: "4",  textByLang: { en: "Leah",     el: "Λεία" }, points: W[3] },
      { id: "5",  textByLang: { en: "Miriam",   el: "Μαριάμ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Deborah",  el: "Δεββώρα" }, points: W[5] },
      { id: "7",  textByLang: { en: "Hannah",   el: "Άννα" }, points: W[6] },
      { id: "8",  textByLang: { en: "Abigail",  el: "Αβιγαία" }, points: W[7] },
      { id: "9",  textByLang: { en: "Esther",   el: "Εσθήρ" }, points: W[8] },
      { id: "10", textByLang: { en: "Ruth",     el: "Ρουθ" }, points: W[9] },
    ],
  },
  {
    id: "psalms-quoted-nt-a",
    questionByLang: {
      en: "Name 10 Psalms frequently quoted in the New Testament",
      el: "Ονομάστε 10 Ψαλμούς που παρατίθενται συχνά στην Καινή Διαθήκη",
    },
    answers: [
      { id: "1",  textByLang: { en: "Psalm 2",   el: "Ψαλμός 2" }, points: W[0] },
      { id: "2",  textByLang: { en: "Psalm 8",   el: "Ψαλμός 8" }, points: W[1] },
      { id: "3",  textByLang: { en: "Psalm 16",  el: "Ψαλμός 16" }, points: W[2] },
      { id: "4",  textByLang: { en: "Psalm 22",  el: "Ψαλμός 22" }, points: W[3] },
      { id: "5",  textByLang: { en: "Psalm 40",  el: "Ψαλμός 40" }, points: W[4] },
      { id: "6",  textByLang: { en: "Psalm 41",  el: "Ψαλμός 41" }, points: W[5] },
      { id: "7",  textByLang: { en: "Psalm 69",  el: "Ψαλμός 69" }, points: W[6] },
      { id: "8",  textByLang: { en: "Psalm 95",  el: "Ψαλμός 95" }, points: W[7] },
      { id: "9",  textByLang: { en: "Psalm 110", el: "Ψαλμός 110" }, points: W[8] },
      { id: "10", textByLang: { en: "Psalm 118", el: "Ψαλμός 118" }, points: W[9] },
    ],
  },
  {
    id: "church-fathers-a",
    questionByLang: {
      en: "Name 10 prominent Church Fathers",
      el: "Ονομάστε 10 σημαντικούς Πατέρες της Εκκλησίας",
    },
    answers: [
      { id: "1",  textByLang: { en: "Athanasius the Great",      el: "Αθανάσιος ο Μέγας" }, points: W[0] },
      { id: "2",  textByLang: { en: "Basil the Great",           el: "Βασίλειος ο Μέγας" }, points: W[1] },
      { id: "3",  textByLang: { en: "Gregory the Theologian",    el: "Γρηγόριος ο Θεολόγος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Gregory of Nyssa",          el: "Γρηγόριος Νύσσης" }, points: W[3] },
      { id: "5",  textByLang: { en: "John Chrysostom",           el: "Ιωάννης ο Χρυσόστομος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Cyril of Alexandria",       el: "Κύριλλος Αλεξανδρείας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Maximus the Confessor",     el: "Μάξιμος ο Ομολογητής" }, points: W[6] },
      { id: "8",  textByLang: { en: "John of Damascus",          el: "Ιωάννης ο Δαμασκηνός" }, points: W[7] },
      { id: "9",  textByLang: { en: "Irenaeus of Lyons",         el: "Ειρηναίος Λουγδούνου" }, points: W[8] },
      { id: "10", textByLang: { en: "Ignatius of Antioch",       el: "Ιγνάτιος Αντιοχείας" }, points: W[9] },
    ],
  },
  {
    id: "tabernacle-items-a",
    questionByLang: {
      en: "Name 10 items related to the Tabernacle/Temple",
      el: "Ονομάστε 10 αντικείμενα της Σκηνής του Μαρτυρίου/του Ναού",
    },
    answers: [
      { id: "1",  textByLang: { en: "Ark of the Covenant",    el: "Κιβωτός της Διαθήκης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Mercy Seat",             el: "Ιλαστήριον" }, points: W[1] },
      { id: "3",  textByLang: { en: "Table of Showbread",     el: "Τράπεζα των Προθέσεων" }, points: W[2] },
      { id: "4",  textByLang: { en: "Lampstand (Menorah)",    el: "Λυχνία (Μενόρα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Altar of Incense",       el: "Θυσιαστήριο του θυμιάματος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Bronze Altar",           el: "Χάλκινο Θυσιαστήριο" }, points: W[5] },
      { id: "7",  textByLang: { en: "Bronze Laver/Basin",     el: "Χάλκινη Λεκάνη (Λουτήρας)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Veil",                   el: "Καταπέτασμα" }, points: W[7] },
      { id: "9",  textByLang: { en: "Holy of Holies",         el: "Άγια Αγίων" }, points: W[8] },
      { id: "10", textByLang: { en: "Priestly Garments",      el: "Ιερατικά Ενδύματα" }, points: W[9] },
    ],
  },
  {
    id: "judges-ot-a",
    questionByLang: {
      en: "Name 10 judges from the Book of Judges",
      el: "Ονομάστε 10 Κριτές από το βιβλίο των Κριτών",
    },
    answers: [
      { id: "1",  textByLang: { en: "Othniel",  el: "Οθνιήλ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Ehud",    el: "Αώδ" }, points: W[1] },
      { id: "3",  textByLang: { en: "Deborah", el: "Δεββώρα" }, points: W[2] },
      { id: "4",  textByLang: { en: "Gideon",  el: "Γεδεών" }, points: W[3] },
      { id: "5",  textByLang: { en: "Tola",    el: "Θωλά" }, points: W[4] },
      { id: "6",  textByLang: { en: "Jair",    el: "Ιαΐρ" }, points: W[5] },
      { id: "7",  textByLang: { en: "Jephthah",el: "Ιεφθά" }, points: W[6] },
      { id: "8",  textByLang: { en: "Ibzan",   el: "Αβσάν" }, points: W[7] },
      { id: "9",  textByLang: { en: "Elon",    el: "Αιλών" }, points: W[8] },
      { id: "10", textByLang: { en: "Samson",  el: "Σαμψών" }, points: W[9] },
    ],
  },
  {
    id: "paul-companions-a",
    questionByLang: {
      en: "Name 10 companions of the Apostle Paul",
      el: "Ονομάστε 10 συνεργάτες του Αποστόλου Παύλου",
    },
    answers: [
      { id: "1",  textByLang: { en: "Barnabas",     el: "Βαρνάβας" }, points: W[0] },
      { id: "2",  textByLang: { en: "Silas",        el: "Σίλας" }, points: W[1] },
      { id: "3",  textByLang: { en: "Timothy",      el: "Τιμόθεος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Titus",        el: "Τίτος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Luke",         el: "Λουκάς" }, points: W[4] },
      { id: "6",  textByLang: { en: "Mark (John Mark)", el: "Μάρκος (Ιωάννης ο καλούμενος Μάρκος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Aquila",       el: "Ακύλας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Priscilla",    el: "Πρίσκιλλα" }, points: W[7] },
      { id: "9",  textByLang: { en: "Epaphroditus", el: "Επαφρόδιτος" }, points: W[8] },
      { id: "10", textByLang: { en: "Onesimus",     el: "Ονήσιμος" }, points: W[9] },
    ],
  },
  {
    id: "elijah-elisha-miracles-a",
    questionByLang: {
      en: "Name 10 miracles of Elijah and Elisha",
      el: "Ονομάστε 10 θαύματα του Ηλία και του Ελισσαίου",
    },
    answers: [
      { id: "1",  textByLang: { en: "Fire on Mount Carmel (Elijah)", el: "Φωτιά στο Κάρμηλο (Ηλίας)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Widow’s oil & flour (Elijah)",  el: "Λάδι και αλεύρι της χήρας (Ηλίας)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Raising widow’s son (Elijah)",  el: "Ανάσταση υιού χήρας (Ηλίας)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Parting the Jordan (Elijah/Elisha)", el: "Διαχωρισμός Ιορδάνη (Ηλίας/Ελισσαίος)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Chariot of fire (Elijah taken up)", el: "Άρμα πυρός (Αναλήψη Ηλία)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Purifying Jericho’s water (Elisha)", el: "Καθαρισμός νερού Ιεριχούς (Ελισσαίος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Multiplying oil (Elisha)",       el: "Πολλαπλασιασμός ελαίου (Ελισσαίος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Raising Shunammite’s son (Elisha)", el: "Ανάσταση υιού Σωμανίτιδας (Ελισσαίος)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Healing Naaman (Elisha)",        el: "Ίαση Νεεμάν (Ελισσαίος)" }, points: W[8] },
      { id: "10", textByLang: { en: "Floating axe head (Elisha)",     el: "Το σιδερένιο τσεκούρι που επέπλευσε (Ελισσαίος)" }, points: W[9] },
    ],
  },
  {
    id: "virtues-classic-theology",
    questionByLang: {
      en: "Name 10 classic Christian virtues",
      el: "Ονομάστε 10 κλασικές χριστιανικές αρετές"
    },
    answers: [
      { id: "1",  textByLang: { en: "Faith", el: "Πίστη" }, points: W[0] },
      { id: "2",  textByLang: { en: "Hope", el: "Ελπίδα" }, points: W[1] },
      { id: "3",  textByLang: { en: "Love/Charity", el: "Αγάπη/Φιλανθρωπία" }, points: W[2] },
      { id: "4",  textByLang: { en: "Prudence", el: "Φρόνηση" }, points: W[3] },
      { id: "5",  textByLang: { en: "Justice", el: "Δικαιοσύνη" }, points: W[4] },
      { id: "6",  textByLang: { en: "Fortitude", el: "Ανδρεία" }, points: W[5] },
      { id: "7",  textByLang: { en: "Temperance", el: "Εγκράτεια" }, points: W[6] },
      { id: "8",  textByLang: { en: "Humility", el: "Ταπεινοφροσύνη" }, points: W[7] },
      { id: "9",  textByLang: { en: "Patience", el: "Υπομονή" }, points: W[8] },
      { id: "10", textByLang: { en: "Obedience", el: "Υπακοή" }, points: W[9] }
    ]
  },
  {
    id: "systematic-branches",
    questionByLang: {
      en: "Name 10 branches of systematic theology",
      el: "Ονομάστε 10 κλάδους της συστηματικής θεολογίας"
    },
    answers: [
      { id: "1",  textByLang: { en: "Theology Proper", el: "Θεολογία (Θεός καθ’ εαυτόν)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Christology", el: "Χριστολογία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Pneumatology", el: "Πνευματολογία" }, points: W[2] },
      { id: "4",  textByLang: { en: "Anthropology", el: "Ανθρωπολογία" }, points: W[3] },
      { id: "5",  textByLang: { en: "Hamartiology", el: "Αμαρτιολογία" }, points: W[4] },
      { id: "6",  textByLang: { en: "Soteriology", el: "Σωτηριολογία" }, points: W[5] },
      { id: "7",  textByLang: { en: "Ecclesiology", el: "Εκκλησιολογία" }, points: W[6] },
      { id: "8",  textByLang: { en: "Eschatology", el: "Εσχατολογία" }, points: W[7] },
      { id: "9",  textByLang: { en: "Bibliology", el: "Βιβλιολογία" }, points: W[8] },
      { id: "10", textByLang: { en: "Ethics", el: "Ηθική" }, points: W[9] }
    ]
  },
  {
    id: "greek-fathers-titles",
    questionByLang: {
      en: "Name 10 titles or epithets of Greek Fathers",
      el: "Ονομάστε 10 προσωνύμια/τίτλους Ελλήνων Πατέρων"
    },
    answers: [
      { id: "1",  textByLang: { en: "The Theologian (Gregory)", el: "Ο Θεολόγος (Γρηγόριος)" }, points: W[0] },
      { id: "2",  textByLang: { en: "The Golden-Mouthed (Chrysostom)", el: "Ο Χρυσόστομος" }, points: W[1] },
      { id: "3",  textByLang: { en: "The Great (Basil)", el: "Ο Μέγας (Βασίλειος)" }, points: W[2] },
      { id: "4",  textByLang: { en: "The Confessor (Maximus)", el: "Ο Ομολογητής (Μάξιμος)" }, points: W[3] },
      { id: "5",  textByLang: { en: "The Damascene (John)", el: "Ο Δαμασκηνός (Ιωάννης)" }, points: W[4] },
      { id: "6",  textByLang: { en: "The Wonderworker (Nicholas)", el: "Ο Θαυματουργός (Νικόλαος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "The New Theologian (Symeon)", el: "Ο Νέος Θεολόγος (Συμεών)" }, points: W[6] },
      { id: "8",  textByLang: { en: "The Hymnographer (Romanos)", el: "Ο Υμνογράφος (Ρωμανός)" }, points: W[7] },
      { id: "9",  textByLang: { en: "The Philosopher (Justinian era)", el: "Ο Φιλόσοφος" }, points: W[8] },
      { id: "10", textByLang: { en: "The Great Catechist (Cyril)", el: "Ο Μέγας Κατηχητής (Κύριλλος)" }, points: W[9] }
    ]
  }  
];

// ---------- HIGH (3) ----------
export const EXTRA_HIGH_2: QuestionSet[] = [
  {
    id: "gr-modern-saints-a",
    questionByLang: {
      en: "Name 10 modern Greek Orthodox saints",
      el: "Ονομάστε 10 σύγχρονους Έλληνες Ορθόδοξους αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",             el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Paisios the Athonite",             el: "Άγιος Παΐσιος ο Αγιορείτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Porphyrios (Kafsokalivitis)",      el: "Άγιος Πορφύριος ο Καυσοκαλυβίτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Iakovos of Evia (Tsalikis)",       el: "Άγιος Ιάκωβος Τσαλίκης Ευβοίας" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ephraim of Nea Makri (New Martyr)",el: "Άγιος Εφραίμ ο Νεομάρτυς (Νέα Μάκρη)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Nicholas Planas",                  el: "Άγιος Νικόλαος Πλανάς" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Amphilochios (Makris) of Patmos",  el: "Άγιος Αμφιλόχιος (Μακρής) Πάτμου" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Arsenios of Cappadocia",           el: "Άγιος Αρσένιος ο Καππαδόκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Anthimos of Chios",                el: "Άγιος Άνθιμος Χίου" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Savvas of Kalymnos",               el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[9] },
    ],
  },
  
  {
    id: "athos-newly-glorified-a",
    questionByLang: {
      en: "Name 10 Athonite elders recently glorified",
      el: "Ονομάστε 10 νεοκαταγεγραμμένους αγιορείτες γέροντες",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Paisios the Athonite", el: "Άγιος Παΐσιος ο Αγιορείτης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ ο Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ ο Κατουνακιώτης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios (Athonite)", el: "Άγιος Πορφύριος (Αγιορείτης)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Silouan the Athonite", el: "Άγιος Σιλουανός ο Αθωνίτης" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Sophrony of Essex*",  el: "Άγιος Σωφρόνιος του Έσσεξ*" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Joseph of Vatopaidi*", el: "Άγιος Ιωσήφ Βατοπαιδινός*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint George of Drama*",     el: "Άγιος Γεώργιος Δράμας*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Savvas the New of Kalymnos", el: "Άγιος Σάββας ο Νέος της Καλύμνου" }, points: W[9] },
    ],
  },
  /* *Some connected to Athonite tradition though not all lived long on Athos. */
  
  {
    id: "recent-greek-wonderworkers-a",
    questionByLang: {
      en: "Name 10 modern Greek wonderworking saints",
      el: "Ονομάστε 10 σύγχρονους Έλληνες θαυματουργούς αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",  el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Raphael of Lesvos",    el: "Άγιος Ραφαήλ Μυτιλήνης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas of Lesvos",   el: "Άγιος Νικόλαος Μυτιλήνης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Irene of Lesvos",      el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ephraim of Nea Makri", el: "Άγιος Εφραίμ Νέας Μάκρης" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Savvas of Kalymnos",   el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos of Jacob’s Well", el: "Άγιος Φιλούμενος του Φρέατος του Ιακώβ" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Iakovos of Evia",      el: "Άγιος Ιάκωβος Ευβοίας" }, points: W[9] },
    ],
  },
  
  {
    id: "attica-modern-saints-a",
    questionByLang: {
      en: "Name 10 modern saints connected with Attica",
      el: "Ονομάστε 10 σύγχρονους αγίους συνδεδεμένους με την Αττική",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim (Nea Makri)", el: "Άγιος Εφραίμ (Νέα Μάκρη)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas Planas",     el: "Άγιος Νικόλαος Πλανάς" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Porphyrios (Athens)", el: "Άγιος Πορφύριος (Αθήνα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος της Αίγινας" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Meletios of Attica (V.L.)*", el: "Όσιος Μελέτιος Αττικής*" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Savvas the New (Relics venerated in Athens)", el: "Άγιος Σάββας ο Νέος (τίμια λείψανα στην Αθήνα)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Porphyrios—Kavsokalyvia link", el: "Άγιος Πορφύριος—σύνδεση Καυσοκαλυβίων" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Sophia of Kleisoura*", el: "Οσία Σοφία της Κλεισούρας*" }, points: W[9] },
    ],
  },
  /* *Venerated broadly; some resided/ministered beyond Attica but are closely linked pastorally. */
  
  {
    id: "patmos-elders-a",
    questionByLang: {
      en: "Name 10 elders/saints linked with Patmos & the Dodecanese",
      el: "Ονομάστε 10 γέροντες/αγίους συνδεδεμένους με Πάτμο & Δωδεκάνησα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Amphilochios (Makris) of Patmos", el: "Άγιος Αμφιλόχιος (Μακρής) Πάτμου" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Savvas of Kalymnos",              el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Christodoulos of Patmos",         el: "Όσιος Χριστόδουλος ο εν Πάτμω" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios (pilgrim to Dodecanese)",el: "Άγιος Νεκτάριος (προσκυνητής στα Δωδεκάνησα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Raphael (Lesvos link nearby)",    el: "Άγιος Ραφαήλ (κοντινή Μυτιλήνη)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Irene (Lesvos)",                   el: "Αγία Ειρήνη (Μυτιλήνη)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Nicholas (Lesvos)",                el: "Άγιος Νικόλαος (Μυτιλήνη)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Iakovos of Evia (pilgrim ties)",   el: "Άγιος Ιάκωβος Ευβοίας (δεσμοί προσκυνητή)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Porphyrios (visits to islands)",   el: "Άγιος Πορφύριος (επισκέψεις σε νησιά)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Paisios (Athonite visiting preacher)", el: "Άγιος Παΐσιος (Αγιορείτης επισκέπτης)" }, points: W[9] },
    ],
  },
  
  {
    id: "new-martyrs-hellas-a",
    questionByLang: {
      en: "Name 10 Greek new martyrs commonly commemorated",
      el: "Ονομάστε 10 Έλληνες νεομάρτυρες που τιμώνται ευρέως",
    },
    answers: [
      { id: "1",  textByLang: { en: "New Martyr Ephraim of Nea Makri", el: "Άγιος Εφραίμ ο Νεομάρτυς Νέας Μάκρης" }, points: W[0] },
      { id: "2",  textByLang: { en: "New Martyr George of Ioannina",   el: "Άγιος Γεώργιος ο Νεομάρτυς Ιωαννίνων" }, points: W[1] },
      { id: "3",  textByLang: { en: "New Martyr Constantine of Hydra", el: "Άγιος Κωνσταντίνος ο Υδραίος" }, points: W[2] },
      { id: "4",  textByLang: { en: "New Martyr Aquilina of Zagliveri",el: "Αγία Ακυλίνα της Ζαγκλιβερίου" }, points: W[3] },
      { id: "5",  textByLang: { en: "New Martyr Polydoros of Cyprus*", el: "Άγιος Πολύδωρος ο Νεομάρτυς (Κύπρος*)" }, points: W[4] },
      { id: "6",  textByLang: { en: "New Martyr Theodore of Mytilene", el: "Άγιος Θεόδωρος ο Νεομάρτυς Μυτιλήνης" }, points: W[5] },
      { id: "7",  textByLang: { en: "New Martyr Demetrios of Chios",   el: "Άγιος Δημήτριος ο Νεομάρτυς Χίου" }, points: W[6] },
      { id: "8",  textByLang: { en: "New Martyr Zograf of Kastoria*",  el: "Άγιος Ζωγράφος ο Νεομάρτυς Καστοριάς*" }, points: W[7] },
      { id: "9",  textByLang: { en: "New Martyr Nicholas of Karpenisi",el: "Άγιος Νικόλαος ο Νεομάρτυς Καρπενησίου" }, points: W[8] },
      { id: "10", textByLang: { en: "New Hieromartyr Philoumenos",     el: "Άγιος Ιερομάρτυς Φιλούμενος" }, points: W[9] },
    ],
  },
  /* *Greek world / broader Hellenic sphere included. */
  
  {
    id: "evia-saints-a",
    questionByLang: {
      en: "Name 10 saints closely linked with Evia (Euboea)",
      el: "Ονομάστε 10 αγίους στενά συνδεδεμένους με την Εύβοια",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Iakovos (Tsalikis) of Evia", el: "Άγιος Ιάκωβος (Τσαλίκης) Ευβοίας" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint David of Evia",              el: "Όσιος Δαβίδ ο εν Ευβοία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint John the Russian (Prokopi)", el: "Άγιος Ιωάννης ο Ρώσος (Προκόπι Ευβ.)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Porphyrios (visiting elder)",el: "Άγιος Πορφύριος (επισκέπτης γέροντας)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Nektarios (pilgrim ties)",   el: "Άγιος Νεκτάριος (δεσμοί προσκυνητή)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ephraim of Nea Makri (nearby)", el: "Άγιος Εφραίμ Νέας Μάκρης (κοντά)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint George the Wonderworker",    el: "Άγιος Γεώργιος ο Τροπαιοφόρος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Irene Chrysovalantou*",      el: "Αγία Ειρήνη Χρυσοβαλάντου*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Nicholas Planas*",           el: "Άγιος Νικόλαος Πλανάς*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa*",      el: "Άγιος Καλλίνικος Εδέσσης*" }, points: W[9] },
    ],
  },
  
  {
    id: "newly-recognized-greek-a",
    questionByLang: {
      en: "Name 10 recently recognized Greek elders/saints",
      el: "Ονομάστε 10 πρόσφατα αναγνωρισμένους Έλληνες γέροντες/αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Kallinikos of Edessa",    el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Joseph the Hesychast",    el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia",    el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Ephraim of Katounakia",   el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Sophrony of Essex",       el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",     el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Evmenios Saridakis",      el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Amphilochios (Makris)",   el: "Άγιος Αμφιλόχιος (Μακρής)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos of Jacob’s Well", el: "Άγιος Φιλούμενος του Φρέατος του Ιακώβ" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Porphyrios",              el: "Άγιος Πορφύριος" }, points: W[9] },
    ],
  },
  
  {
    id: "island-saints-modern-a",
    questionByLang: {
      en: "Name 10 modern saints associated with Greek islands",
      el: "Ονομάστε 10 σύγχρονους αγίους που συνδέονται με ελληνικά νησιά",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Raphael (Lesvos)",   el: "Άγιος Ραφαήλ (Λέσβος)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas (Lesvos)",  el: "Άγιος Νικόλαος (Λέσβος)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Irene (Lesvos)",     el: "Αγία Ειρήνη (Λέσβος)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Savvas (Kalymnos)",  el: "Άγιος Σάββας (Κάλυμνος)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Anthimos (Chios)",   el: "Άγιος Άνθιμος (Χίος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Irene Chrysovalantou*", el: "Αγία Ειρήνη Χρυσοβαλάντου*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos (Holy Land ties)", el: "Άγιος Φιλούμενος (Δεσμοί Αγ. Γης)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Porphyrios (Euboean & island pilgrimages)", el: "Άγιος Πορφύριος (Εύβοια & νησιά)" }, points: W[9] },
    ],
  },
  
  {
    id: "priests-modern-greece-a",
    questionByLang: {
      en: "Name 10 modern Greek parish-priest saints/confessors",
      el: "Ονομάστε 10 σύγχρονους Έλληνες εφημέριους αγίους/ομολογητές",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nicholas Planas", el: "Άγιος Νικόλαος Πλανάς" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Iakovos (Tsalikis)", el: "Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Porphyrios",     el: "Άγιος Πορφύριος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios*",     el: "Άγιος Νεκτάριος*" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Anthimos of Chios", el: "Άγιος Άνθιμος Χίου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Savvas of Kalymnos", el: "Άγιος Σάββας ο εν Καλύμνω" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios Saridakis", el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa", el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
  
  {
    id: "saints-linked-athens-a",
    questionByLang: {
      en: "Name 10 saints venerated especially in Athens/Attica",
      el: "Ονομάστε 10 αγίους που τιμώνται ιδιαίτερα στην Αθήνα/Αττική",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios (Aegina)", el: "Άγιος Νεκτάριος (Αίγινα)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Nicholas Planas",    el: "Άγιος Νικόλαος Πλανάς" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Ephraim (Nea Makri)",el: "Άγιος Εφραίμ (Νέα Μάκρη)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Porphyrios (Kallisia)", el: "Άγιος Πορφύριος (Καλλισία)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Theodora of Athens*", el: "Αγία Θεοδώρα Αθηνών*" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Meletios of Kythira*", el: "Άγιος Μελέτιος Κυθήρων*" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Ieronymos of Aegina", el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios Saridakis",  el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa*", el: "Άγιος Καλλίνικος Εδέσσης*" }, points: W[9] },
    ],
  },
  
  {
    id: "saints-with-healing-a",
    questionByLang: {
      en: "Name 10 modern Greek saints known for healing",
      el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους γνωστούς για θεραπείες",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios", el: "Άγιος Νεκτάριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios",   el: "Άγιος Παΐσιος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Iakovos",   el: "Άγιος Ιάκωβος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Raphael",   el: "Άγιος Ραφαήλ" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Nicholas (Lesvos)", el: "Άγιος Νικόλαος (Λέσβος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Irene (Lesvos)",    el: "Αγία Ειρήνη (Λέσβος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philoumenos",       el: "Άγιος Φιλούμενος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Savvas (Kalymnos)", el: "Άγιος Σάββας (Κάλυμνος)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint John the Russian*", el: "Άγιος Ιωάννης ο Ρώσος*" }, points: W[9] },
    ],
  },
  
  {
    id: "elders-of-love-mercy-a",
    questionByLang: {
      en: "Name 10 modern Greek elders noted for love and mercy",
      el: "Ονομάστε 10 σύγχρονους Έλληνες γέροντες γνωστούς για αγάπη και έλεος",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Paisios",    el: "Άγιος Παΐσιος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Iakovos",    el: "Άγιος Ιάκωβος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios",  el: "Άγιος Νεκτάριος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Amphilochios", el: "Άγιος Αμφιλόχιος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Savvas",       el: "Άγιος Σάββας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Anthimos",     el: "Άγιος Άνθιμος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Ieronymos",    el: "Όσιος Ιερώνυμος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios",     el: "Όσιος Ευμένιος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos",   el: "Άγιος Καλλίνικος" }, points: W[9] },
    ],
  },
  
  {
    id: "monastic-revival-greece-a",
    questionByLang: {
      en: "Name 10 figures tied to Greek monastic revival (20th–21st c.)",
      el: "Ονομάστε 10 πρόσωπα της ελληνικής μοναστικής αναγέννησης (20ός–21ος αι.)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Ieronymos of Aegina",  el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Sophrony of Essex",    el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Evmenios Saridakis",   el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[9] },
    ],
  },
  
  {
    id: "lesvos-contemporary-saints-a",
    questionByLang: {
      en: "Name 10 contemporary saints connected with Lesvos",
      el: "Ονομάστε 10 σύγχρονους αγίους συνδεδεμένους με τη Λέσβο",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Raphael",  el: "Άγιος Ραφαήλ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Nicholas", el: "Άγιος Νικόλαος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Irene",    el: "Αγία Ειρήνη" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Theophanes Sigrianos*", el: "Άγιος Θεοφάνης ο Σιγριανός*" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Ignatios of Methymna*", el: "Άγιος Ιγνάτιος Μηθύμνης*" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Gabriel (Lesvos)",     el: "Άγιος Γαβριήλ (Λέσβος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Michael (Taxiarchis)", el: "Άγιος Μιχαήλ (Ταξιάρχης)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Nektarios (pilgrim ties)", el: "Άγιος Νεκτάριος (δεσμοί)" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Paisios (visits)",     el: "Άγιος Παΐσιος (επισκέψεις)" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Porphyrios (visits)",  el: "Άγιος Πορφύριος (επισκέψεις)" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-ascetics-20c-a",
    questionByLang: {
      en: "Name 10 Greek ascetics (20th–21st centuries)",
      el: "Ονομάστε 10 Έλληνες ασκητές (20ός–21ος αιώνας)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Paisios",              el: "Άγιος Παΐσιος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios",           el: "Άγιος Πορφύριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",  el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Amphilochios (Patmos)", el: "Άγιος Αμφιλόχιος (Πάτμος)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Evmenios Saridakis",   el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philotheos Zervakos*", el: "Όσιος Φιλόθεος Ζερβάκος*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Sophrony of Essex*",   el: "Άγιος Σωφρόνιος του Έσσεξ*" }, points: W[9] },
    ],
  },
  
  {
    id: "recent-women-saints-el-a",
    questionByLang: {
      en: "Name 10 women saints revered in modern Greece",
      el: "Ονομάστε 10 γυναίκες αγίες που τιμώνται στη σύγχρονη Ελλάδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Irene of Lesvos", el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Sophia of Kleisoura*", el: "Οσία Σοφία της Κλεισούρας*" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Matrona of Chios",     el: "Αγία Ματρώνα Χίου" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Irene Chrysovalantou", el: "Αγία Ειρήνη Χρυσοβαλάντου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Paraskevi (Epivates)", el: "Αγία Παρασκευή (Επιβατών)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Kalliopi (New Martyr)", el: "Αγία Καλλιόπη (Νεομάρτυς)" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Theodora of Vasta*",    el: "Αγία Θεοδώρα Βάστας*" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Irene of Thessaloniki*", el: "Αγία Ειρήνη Θεσσαλονίκης*" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kyriaki (New Martyr)",  el: "Αγία Κυριακή (Νεομάρτυς)" }, points: W[9] },
    ],
  },
  
  {
    id: "saints-with-uk-links-a",
    questionByLang: {
      en: "Name 10 saints with modern Greek/Greek-linked diaspora ties (UK)",
      el: "Ονομάστε 10 αγίους με ελληνικούς/διασπορικούς δεσμούς (Ην. Βασίλειο)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Sophrony of Essex", el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios (spiritual ties)", el: "Άγιος Πορφύριος (πνευματικοί δεσμοί)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios (influence abroad)", el: "Άγιος Παΐσιος (επίδραση στο εξωτερικό)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios (widespread veneration)", el: "Άγιος Νεκτάριος (ευρεία τιμή)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Iakovos (pilgrim ties)", el: "Άγιος Ιάκωβος (δεσμοί προσκυνητών)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Raphael (Lesvos)",     el: "Άγιος Ραφαήλ (Λέσβος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Nicholas Planas",       el: "Άγιος Νικόλαος Πλανάς" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Arsenios of Cappadocia",el: "Άγιος Αρσένιος Καππαδόκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos",           el: "Άγιος Φιλούμενος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa",  el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
  
  {
    id: "new-saints-2020s-greece-a",
    questionByLang: {
      en: "Name 10 saints whose veneration grew notably in the 2010s–2020s (Greece)",
      el: "Ονομάστε 10 αγίους με ιδιαίτερη άνθηση τιμής το 2010–2020 (Ελλάδα)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Joseph the Hesychast", el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Daniel of Katounakia", el: "Όσιος Δανιήλ Κατουνακιώτης" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Kallinikos of Edessa", el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Evmenios Saridakis",  el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Sophrony of Essex",   el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Iakovos of Evia",     el: "Άγιος Ιάκωβος Ευβοίας" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Porphyrios",          el: "Άγιος Πορφύριος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Paisios",             el: "Άγιος Παΐσιος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Philoumenos",         el: "Άγιος Φιλούμενος" }, points: W[9] },
    ],
  },
  
  {
    id: "pilgrimage-modern-greece-a",
    questionByLang: {
      en: "Name 10 major modern Greek pilgrimage sites tied to saints",
      el: "Ονομάστε 10 σημαντικά σύγχρονα ελληνικά προσκυνήματα συνδεδεμένα με αγίους",
    },
    answers: [
      { id: "1",  textByLang: { en: "Aegina—Saint Nektarios", el: "Αίγινα—Άγιος Νεκτάριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Nea Makri—Saint Ephraim", el: "Νέα Μάκρη—Άγιος Εφραίμ" }, points: W[1] },
      { id: "3",  textByLang: { en: "Lesvos—Saints Raphael, Nicholas, Irene", el: "Λέσβος—Άγιοι Ραφαήλ, Νικόλαος, Ειρήνη" }, points: W[2] },
      { id: "4",  textByLang: { en: "Kalymnos—Saint Savvas",    el: "Κάλυμνος—Άγιος Σάββας" }, points: W[3] },
      { id: "5",  textByLang: { en: "Patmos—Amphilochios & Saint John", el: "Πάτμος—Αμφιλόχιος & Άγ. Ιωάννης" }, points: W[4] },
      { id: "6",  textByLang: { en: "Evia—Saint Iakovos (Tsalikis)", el: "Εύβοια—Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[5] },
      { id: "7",  textByLang: { en: "Athens—Saint Nicholas Planas", el: "Αθήνα—Άγιος Νικόλαος Πλανάς" }, points: W[6] },
      { id: "8",  textByLang: { en: "Kavsokalyvia—Saint Porphyrios", el: "Καυσοκαλύβια—Άγιος Πορφύριος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Katounakia—Joseph & Ephraim", el: "Κατουνάκια—Ιωσήφ & Εφραίμ" }, points: W[8] },
      { id: "10", textByLang: { en: "Edessa—Saint Kallinikos",  el: "Έδεσσα—Άγιος Καλλίνικος" }, points: W[9] },
    ],
  },
  {
    id: "teachers-20c-greece-a",
    questionByLang: {
      en: "Name 10 20th–21st c. Greek spiritual teachers later glorified",
      el: "Ονομάστε 10 Έλληνες πνευματικούς διδασκάλους (20ός–21ος αι.) που αγιοποιήθηκαν",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Porphyrios", el: "Άγιος Πορφύριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Paisios",    el: "Άγιος Παΐσιος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Iakovos",    el: "Άγιος Ιάκωβος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios",  el: "Άγιος Νεκτάριος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Amphilochios", el: "Άγιος Αμφιλόχιος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Sophrony",   el: "Άγιος Σωφρόνιος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Kallinikos", el: "Άγιος Καλλίνικος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Philoumenos",el: "Άγιος Φιλούμενος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[9] },
    ],
  },
  
  {
    id: "confessors-modern-hellas-a",
    questionByLang: {
      en: "Name 10 confessors/spiritual fathers in modern Greece",
      el: "Ονομάστε 10 ομολογητές/πνευματικούς πατέρες στη σύγχρονη Ελλάδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Iakovos (Tsalikis)", el: "Άγιος Ιάκωβος (Τσαλίκης)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios",         el: "Άγιος Πορφύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios",            el: "Άγιος Παΐσιος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Amphilochios",       el: "Άγιος Αμφιλόχιος" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Nektarios",          el: "Άγιος Νεκτάριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Sophrony",           el: "Άγιος Σωφρόνιος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Kallinikos",         el: "Άγιος Καλλίνικος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Evmenios Saridakis", el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Ephraim of Katounakia", el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-miracles-icons-a",
    questionByLang: {
      en: "Name 10 Greek saints associated with famous miracle icons",
      el: "Ονομάστε 10 Έλληνες αγίους συνδεδεμένους με θαυματουργές εικόνες",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Nektarios", el: "Άγιος Νεκτάριος" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Raphael",   el: "Άγιος Ραφαήλ" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Nicholas",  el: "Άγιος Νικόλαος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Irene",     el: "Αγία Ειρήνη" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Porphyrios",el: "Άγιος Πορφύριος" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Paisios",   el: "Άγιος Παΐσιος" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Iakovos",   el: "Άγιος Ιάκωβος" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Savvas",    el: "Άγιος Σάββας" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Philoumenos", el: "Άγιος Φιλούμενος" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Anthimos of Chios", el: "Άγιος Άνθιμος Χίου" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-by-virtue-a",
    questionByLang: {
      en: "Name 10 modern Greek saints by a known virtue",
      el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους με γνωστό χάρισμα/αρετή",
    },
    answers: [
      { id: "1",  textByLang: { en: "Nektarios—Patience",  el: "Νεκτάριος—Υπομονή" }, points: W[0] },
      { id: "2",  textByLang: { en: "Porphyrios—Discernment", el: "Πορφύριος—Διάκριση" }, points: W[1] },
      { id: "3",  textByLang: { en: "Paisios—Consolation", el: "Παΐσιος—Παρηγοριά" }, points: W[2] },
      { id: "4",  textByLang: { en: "Iakovos—Simplicity", el: "Ιάκωβος—Απλότης" }, points: W[3] },
      { id: "5",  textByLang: { en: "Amphilochios—Love",  el: "Αμφιλόχιος—Αγάπη" }, points: W[4] },
      { id: "6",  textByLang: { en: "Savvas—Asceticism",  el: "Σάββας—Άσκηση" }, points: W[5] },
      { id: "7",  textByLang: { en: "Anthimos—Prayer",    el: "Άνθιμος—Προσευχή" }, points: W[6] },
      { id: "8",  textByLang: { en: "Sophrony—Theology",  el: "Σωφρόνιος—Θεολογία" }, points: W[7] },
      { id: "9",  textByLang: { en: "Joseph—Hesychia",    el: "Ιωσήφ—Ησυχία" }, points: W[8] },
      { id: "10", textByLang: { en: "Ephraim—Obedience",  el: "Εφραίμ—Υπακοή" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-elders-places-a",
    questionByLang: {
      en: "Match 10 saints to their well-known places (name the saint)",
      el: "Αντιστοιχίστε 10 αγίους με τον τόπο τους (πείτε τον άγιο)",
    },
    answers: [
      { id: "1",  textByLang: { en: "Aegina (Monastery)",   el: "Αίγινα (Μοναστήρι)" }, points: W[0] }, // Nektarios
      { id: "2",  textByLang: { en: "Nea Makri (Amomon)",   el: "Νέα Μάκρη (Αμώμων)" }, points: W[1] }, // Ephraim
      { id: "3",  textByLang: { en: "Kavsokalyvia",         el: "Καυσοκαλύβια" }, points: W[2] },        // Porphyrios (ties)
      { id: "4",  textByLang: { en: "Katounakia",           el: "Κατουνάκια" }, points: W[3] },          // Joseph, Ephraim, Daniel
      { id: "5",  textByLang: { en: "Edessa (Greece)",      el: "Έδεσσα (Ελλάδα)" }, points: W[4] },      // Kallinikos
      { id: "6",  textByLang: { en: "Patmos (Monastery)",   el: "Πάτμος (Μονή)" }, points: W[5] },         // Amphilochios
      { id: "7",  textByLang: { en: "Kalymnos (Island)",    el: "Κάλυμνος (Νησί)" }, points: W[6] },       // Savvas
      { id: "8",  textByLang: { en: "Lesvos (Thermi/Karyes)", el: "Λέσβος (Θερμή/Καρυές)" }, points: W[7] }, // Raphael, Nicholas, Irene
      { id: "9",  textByLang: { en: "Athens (Plaka/Kifisia)", el: "Αθήνα (Πλάκα/Κηφισιά)" }, points: W[8] }, // Planas / Porphyrios
      { id: "10", textByLang: { en: "Jacob’s Well (Holy Land)", el: "Φρέαρ Ιακώβ (Αγ. Γη)" }, points: W[9] }, // Philoumenos
    ],
  },
  
  {
    id: "greek-saints-hymnographers-a",
    questionByLang: {
      en: "Name 10 hymnwriters or spiritual authors honored in Greece",
      el: "Ονομάστε 10 υμνογράφους ή πνευματικούς συγγραφείς τιμώμενους στην Ελλάδα",
    },
    answers: [
      { id: "1",  textByLang: { en: "Saint Sophrony of Essex", el: "Άγιος Σωφρόνιος του Έσσεξ" }, points: W[0] },
      { id: "2",  textByLang: { en: "Saint Porphyrios (counsels)", el: "Άγιος Πορφύριος (νουθεσίες)" }, points: W[1] },
      { id: "3",  textByLang: { en: "Saint Paisios (counsels)",    el: "Άγιος Παΐσιος (λόγοι)" }, points: W[2] },
      { id: "4",  textByLang: { en: "Saint Nektarios (writings)",   el: "Άγιος Νεκτάριος (συγγράμματα)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Saint Anthimos of Chios",      el: "Άγιος Άνθιμος Χίου" }, points: W[4] },
      { id: "6",  textByLang: { en: "Saint Ieronymos of Aegina",    el: "Όσιος Ιερώνυμος Αίγινας" }, points: W[5] },
      { id: "7",  textByLang: { en: "Saint Ephraim of Katounakia",  el: "Άγιος Εφραίμ Κατουνακιώτης" }, points: W[6] },
      { id: "8",  textByLang: { en: "Saint Joseph the Hesychast",   el: "Άγιος Ιωσήφ ο Ησυχαστής" }, points: W[7] },
      { id: "9",  textByLang: { en: "Saint Evmenios Saridakis",     el: "Όσιος Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Saint Kallinikos of Edessa",   el: "Άγιος Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
  
  {
    id: "greek-saints-pastoral-a",
    questionByLang: {
      en: "Name 10 modern Greek saints famed for pastoral care",
      el: "Ονομάστε 10 σύγχρονους Έλληνες αγίους με φήμη ποιμαντικής φροντίδας",
    },
    answers: [
      { id: "1",  textByLang: { en: "Nektarios of Aegina", el: "Νεκτάριος Αιγίνης" }, points: W[0] },
      { id: "2",  textByLang: { en: "Porphyrios",          el: "Πορφύριος" }, points: W[1] },
      { id: "3",  textByLang: { en: "Paisios",             el: "Παΐσιος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Iakovos (Tsalikis)",  el: "Ιάκωβος (Τσαλίκης)" }, points: W[3] },
      { id: "5",  textByLang: { en: "Amphilochios (Makris)", el: "Αμφιλόχιος (Μακρής)" }, points: W[4] },
      { id: "6",  textByLang: { en: "Savvas of Kalymnos",  el: "Σάββας ο εν Καλύμνω" }, points: W[5] },
      { id: "7",  textByLang: { en: "Anthimos of Chios",   el: "Άνθιμος Χίου" }, points: W[6] },
      { id: "8",  textByLang: { en: "Ieronymos of Aegina", el: "Ιερώνυμος Αίγινας" }, points: W[7] },
      { id: "9",  textByLang: { en: "Evmenios Saridakis",  el: "Ευμένιος Σαριδάκης" }, points: W[8] },
      { id: "10", textByLang: { en: "Kallinikos of Edessa", el: "Καλλίνικος Εδέσσης" }, points: W[9] },
    ],
  },
    {
      id: "nt-titles-jesus-easy",
      questionByLang: {
        en: "Name 10 titles of Jesus from the New Testament",
        el: "Ονομάστε 10 τίτλους του Ιησού στην Καινή Διαθήκη"
      },
      answers: [
        { id: "1",  textByLang: { en: "Christ", el: "Χριστός" }, points: W[0] },
        { id: "2",  textByLang: { en: "Lord", el: "Κύριος" }, points: W[1] },
        { id: "3",  textByLang: { en: "Savior", el: "Σωτήρας" }, points: W[2] },
        { id: "4",  textByLang: { en: "Rabbi/Teacher", el: "Ραββί/Διδάσκαλος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Son of David", el: "Υιός Δαβίδ" }, points: W[4] },
        { id: "6",  textByLang: { en: "Son of God", el: "Υιός Θεού" }, points: W[5] },
        { id: "7",  textByLang: { en: "Son of Man", el: "Υιός Ανθρώπου" }, points: W[6] },
        { id: "8",  textByLang: { en: "Light of the World", el: "Φως του Κόσμου" }, points: W[7] },
        { id: "9",  textByLang: { en: "Bread of Life", el: "Άρτος της Ζωής" }, points: W[8] },
        { id: "10", textByLang: { en: "Good Shepherd", el: "Καλός Ποιμήν" }, points: W[9] }
      ]
    },
    {
      id: "acts-mission-places",
      questionByLang: {
        en: "Name 10 places from Paul’s missionary journeys (Acts)",
        el: "Ονομάστε 10 τόπους από τα ιεραποστολικά ταξίδια του Παύλου (Πράξεις)"
      },
      answers: [
        { id: "1",  textByLang: { en: "Antioch", el: "Αντιόχεια" }, points: W[0] },
        { id: "2",  textByLang: { en: "Cyprus", el: "Κύπρος" }, points: W[1] },
        { id: "3",  textByLang: { en: "Philippi", el: "Φίλιπποι" }, points: W[2] },
        { id: "4",  textByLang: { en: "Corinth", el: "Κόρινθος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Ephesus", el: "Έφεσος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Thessalonica", el: "Θεσσαλονίκη" }, points: W[5] },
        { id: "7",  textByLang: { en: "Athens", el: "Αθήνα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Berea", el: "Βέροια" }, points: W[7] },
        { id: "9",  textByLang: { en: "Malta", el: "Μάλτα" }, points: W[8] },
        { id: "10", textByLang: { en: "Rome", el: "Ρώμη" }, points: W[9] }
      ]
    },
  
    {
      id: "nt-virtues-paul",
      questionByLang: {
        en: "Name 10 Pauline virtues or fruits",
        el: "Ονομάστε 10 παυλιανές αρετές ή καρπούς"
      },
      answers: [
        { id: "1",  textByLang: { en: "Love", el: "Αγάπη" }, points: W[0] },
        { id: "2",  textByLang: { en: "Joy", el: "Χαρά" }, points: W[1] },
        { id: "3",  textByLang: { en: "Peace", el: "Ειρήνη" }, points: W[2] },
        { id: "4",  textByLang: { en: "Patience", el: "Μακροθυμία" }, points: W[3] },
        { id: "5",  textByLang: { en: "Kindness", el: "Χρηστότητα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Goodness", el: "Αγαθωσύνη" }, points: W[5] },
        { id: "7",  textByLang: { en: "Faithfulness", el: "Πίστις" }, points: W[6] },
        { id: "8",  textByLang: { en: "Gentleness", el: "Πραότης" }, points: W[7] },
        { id: "9",  textByLang: { en: "Self-control", el: "Εγκράτεια" }, points: W[8] },
        { id: "10", textByLang: { en: "Hope", el: "Ελπίδα" }, points: W[9] }
      ]
    },
    {
      id: "nt-prayers",
      questionByLang: {
        en: "Name 10 notable prayers in the New Testament",
        el: "Ονομάστε 10 σημαντικές προσευχές στην Καινή Διαθήκη"
      },
      answers: [
        { id: "1",  textByLang: { en: "The Lord’s Prayer", el: "Πάτερ ἡμῶν" }, points: W[0] },
        { id: "2",  textByLang: { en: "High Priestly Prayer (John 17)", el: "Αρχιερατική Προσευχή (Ιω. 17)" }, points: W[1] },
        { id: "3",  textByLang: { en: "Mary’s Magnificat", el: "Μεγαλύνει η ψυχή μου" }, points: W[2] },
        { id: "4",  textByLang: { en: "Zechariah’s Benedictus", el: "Ευλογητός (Ζαχαρίας)" }, points: W[3] },
        { id: "5",  textByLang: { en: "Simeon’s Nunc Dimittis", el: "Νυν απολύεις" }, points: W[4] },
        { id: "6",  textByLang: { en: "Stephen’s prayer", el: "Προσευχή Στεφάνου" }, points: W[5] },
        { id: "7",  textByLang: { en: "Paul’s doxologies", el: "Δοξολογίες Παύλου" }, points: W[6] },
        { id: "8",  textByLang: { en: "Prayer in Gethsemane", el: "Προσευχή στη Γεθσημανή" }, points: W[7] },
        { id: "9",  textByLang: { en: "The Church’s prayer in Acts 4", el: "Προσευχή Εκκλησίας στις Πράξεις 4" }, points: W[8] },
        { id: "10", textByLang: { en: "Come, Lord Jesus (Rev 22)", el: "Έλα, Κύριε Ιησού (Απ. 22)" }, points: W[9] }
      ]
    },
    {
      id: "christ-titles-a",
      questionByLang: {
        en: "Name 10 titles of Jesus Christ found in Scripture",
        el: "Ονομάστε 10 χριστολογικούς τίτλους από την Αγία Γραφή",
      },
      answers: [
        { id: "1",  textByLang: { en: "Son of God",        el: "Υιός του Θεού" }, points: W[0] },
        { id: "2",  textByLang: { en: "Son of Man",        el: "Υιός του Ανθρώπου" }, points: W[1] },
        { id: "3",  textByLang: { en: "Lord",              el: "Κύριος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Messiah/Christ",    el: "Μεσσίας/Χριστός" }, points: W[3] },
        { id: "5",  textByLang: { en: "Lamb of God",       el: "Αμνός του Θεού" }, points: W[4] },
        { id: "6",  textByLang: { en: "Logos/Word",        el: "Λόγος" }, points: W[5] },
        { id: "7",  textByLang: { en: "Good Shepherd",     el: "Καλός Ποιμήν" }, points: W[6] },
        { id: "8",  textByLang: { en: "Light of the World",el: "Φως του κόσμου" }, points: W[7] },
        { id: "9",  textByLang: { en: "King of Kings",     el: "Βασιλέας των βασιλέων" }, points: W[8] },
        { id: "10", textByLang: { en: "Alpha and Omega",   el: "Άλφα και Ωμέγα" }, points: W[9] },
      ],
    },
    {
      id: "core-doctrines-a",
      questionByLang: {
        en: "Name 10 core Christian doctrines",
        el: "Ονομάστε 10 βασικά χριστιανικά δόγματα",
      },
      answers: [
        { id: "1",  textByLang: { en: "Trinity",              el: "Αγία Τριάδα" }, points: W[0] },
        { id: "2",  textByLang: { en: "Incarnation",          el: "Ενσάρκωση" }, points: W[1] },
        { id: "3",  textByLang: { en: "Atonement",            el: "Εξιλέωση" }, points: W[2] },
        { id: "4",  textByLang: { en: "Resurrection",         el: "Ανάσταση" }, points: W[3] },
        { id: "5",  textByLang: { en: "Creation ex nihilo",   el: "Δημιουργία εκ του μηδενός" }, points: W[4] },
        { id: "6",  textByLang: { en: "Grace",                el: "Χάρις" }, points: W[5] },
        { id: "7",  textByLang: { en: "Justification",        el: "Δικαίωση" }, points: W[6] },
        { id: "8",  textByLang: { en: "Sanctification",       el: "Αγιασμός" }, points: W[7] },
        { id: "9",  textByLang: { en: "Theosis/Deification",  el: "Θέωση" }, points: W[8] },
        { id: "10", textByLang: { en: "Second Coming (Parousia)", el: "Δευτέρα Παρουσία" }, points: W[9] },
      ],
    },
    {
      id: "fathers-early-a",
      questionByLang: {
        en: "Name 10 early Church Fathers",
        el: "Ονομάστε 10 Πατέρες της αρχαίας Εκκλησίας",
      },
      answers: [
        { id: "1",  textByLang: { en: "Athanasius",               el: "Αθανάσιος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Basil the Great",          el: "Βασίλειος ο Μέγας" }, points: W[1] },
        { id: "3",  textByLang: { en: "Gregory the Theologian",   el: "Γρηγόριος ο Θεολόγος" }, points: W[2] },
        { id: "4",  textByLang: { en: "John Chrysostom",          el: "Ιωάννης ο Χρυσόστομος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Irenaeus",                 el: "Ειρηναίος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Ignatius of Antioch",      el: "Ιγνάτιος Αντιοχείας" }, points: W[5] },
        { id: "7",  textByLang: { en: "Cyril of Alexandria",      el: "Κύριλλος Αλεξανδρείας" }, points: W[6] },
        { id: "8",  textByLang: { en: "Gregory of Nyssa",         el: "Γρηγόριος Νύσσης" }, points: W[7] },
        { id: "9",  textByLang: { en: "Tertullian",               el: "Τερτυλλιανός" }, points: W[8] },
        { id: "10", textByLang: { en: "Augustine of Hippo",       el: "Αυγουστίνος" }, points: W[9] },
      ],
    },
    {
      id: "beatitudes-a",
      questionByLang: {
        en: "Name 10 Beatitudes from the Sermon on the Mount",
        el: "Ονομάστε 10 Μακαρισμούς από την Επί του Όρους Ομιλία",
      },
      answers: [
        { id: "1",  textByLang: { en: "Poor in spirit",                 el: "Πτωχοί τῷ πνεύματι" }, points: W[0] },
        { id: "2",  textByLang: { en: "Those who mourn",                 el: "Οἱ πενθοῦντες" }, points: W[1] },
        { id: "3",  textByLang: { en: "The meek",                        el: "Οἱ πραεῖς" }, points: W[2] },
        { id: "4",  textByLang: { en: "Hunger & thirst for righteousness", el: "Οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην" }, points: W[3] },
        { id: "5",  textByLang: { en: "The merciful",                    el: "Οἱ ἐλεήμονες" }, points: W[4] },
        { id: "6",  textByLang: { en: "Pure in heart",                   el: "Οἱ καθαροὶ τῇ καρδίᾳ" }, points: W[5] },
        { id: "7",  textByLang: { en: "Peacemakers",                     el: "Οἱ εἰρηνοποιοί" }, points: W[6] },
        { id: "8",  textByLang: { en: "Persecuted for righteousness",    el: "Οἱ δεδιωγμένοι ἕνεκεν δικαιοσύνης" }, points: W[7] },
        { id: "9",  textByLang: { en: "Reviled/falsely accused for Christ", el: "Οἱ ὀνειδιζόμενοι καὶ ψευδόμενοι ἕνεκεν Χριστοῦ" }, points: W[8] },
        { id: "10", textByLang: { en: "Rejoice & be glad (reward in heaven)", el: "Χαίρετε καὶ ἀγαλλιᾶσθε (μισθός ἐν οὐρανοῖς)" }, points: W[9] },
      ],
    },
    {
      id: "apostles-twelve-a",
      questionByLang: {
        en: "Name 10 of the Twelve Apostles",
        el: "Ονομάστε 10 από τους Δώδεκα Αποστόλους",
      },
      answers: [
        { id: "1",  textByLang: { en: "Peter",                 el: "Πέτρος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Andrew",                el: "Ἀνδρέας" }, points: W[1] },
        { id: "3",  textByLang: { en: "James (son of Zebedee)",el: "Ἰάκωβος (τοῦ Ζεβεδαίου)" }, points: W[2] },
        { id: "4",  textByLang: { en: "John",                  el: "Ἰωάννης" }, points: W[3] },
        { id: "5",  textByLang: { en: "Philip",                el: "Φίλιππος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Bartholomew",           el: "Βαρθολομαῖος" }, points: W[5] },
        { id: "7",  textByLang: { en: "Thomas",                el: "Θωμᾶς" }, points: W[6] },
        { id: "8",  textByLang: { en: "Matthew",               el: "Ματθαῖος" }, points: W[7] },
        { id: "9",  textByLang: { en: "James (son of Alphaeus)", el: "Ἰάκωβος (τοῦ Ἀλφαίου)" }, points: W[8] },
        { id: "10", textByLang: { en: "Thaddaeus/Jude",        el: "Θαδδαῖος/Ἰούδας" }, points: W[9] },
      ],
    },
  
    {
      id: "pauline-recipients-a",
      questionByLang: {
        en: "Name 10 recipients/churches of Pauline letters",
        el: "Ονομάστε 10 παραλήπτες/εκκλησίες των επιστολών του Παύλου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Romans",        el: "Ρωμαίους" }, points: W[0] },
        { id: "2",  textByLang: { en: "Corinthians",   el: "Κορινθίους" }, points: W[1] },
        { id: "3",  textByLang: { en: "Galatians",     el: "Γαλάτας" }, points: W[2] },
        { id: "4",  textByLang: { en: "Ephesians",     el: "Εφεσίους" }, points: W[3] },
        { id: "5",  textByLang: { en: "Philippians",   el: "Φιλιππησίους" }, points: W[4] },
        { id: "6",  textByLang: { en: "Colossians",    el: "Κολοσσαείς" }, points: W[5] },
        { id: "7",  textByLang: { en: "Thessalonians", el: "Θεσσαλονικείς" }, points: W[6] },
        { id: "8",  textByLang: { en: "Timothy",       el: "Τιμόθεο" }, points: W[7] },
        { id: "9",  textByLang: { en: "Titus",         el: "Τίτο" }, points: W[8] },
        { id: "10", textByLang: { en: "Philemon",      el: "Φιλήμονα" }, points: W[9] },
      ],
    },
    {
      id: "kings-israel-judah-a",
      questionByLang: {
        en: "Name 10 kings of Israel/Judah",
        el: "Ονομάστε 10 βασιλείς του Ισραήλ/Ιούδα",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saul",        el: "Σαούλ" }, points: W[0] },
        { id: "2",  textByLang: { en: "David",       el: "Δαβίδ" }, points: W[1] },
        { id: "3",  textByLang: { en: "Solomon",     el: "Σολομών" }, points: W[2] },
        { id: "4",  textByLang: { en: "Rehoboam",    el: "Ροβοάμ" }, points: W[3] },
        { id: "5",  textByLang: { en: "Jeroboam",    el: "Ιεροβοάμ" }, points: W[4] },
        { id: "6",  textByLang: { en: "Hezekiah",    el: "Εζεκίας" }, points: W[5] },
        { id: "7",  textByLang: { en: "Josiah",      el: "Ιωσίας" }, points: W[6] },
        { id: "8",  textByLang: { en: "Ahab",        el: "Αχαάβ" }, points: W[7] },
        { id: "9",  textByLang: { en: "Jehoshaphat", el: "Ιωσαφάτ" }, points: W[8] },
        { id: "10", textByLang: { en: "Manasseh",    el: "Μανασσή" }, points: W[9] },
      ],
    },
    {
      id: "acts-events-a",
      questionByLang: {
        en: "Name 10 key events from the Acts of the Apostles",
        el: "Ονομάστε 10 σημαντικά γεγονότα από τις Πράξεις των Αποστόλων",
      },
      answers: [
        { id: "1",  textByLang: { en: "Pentecost",                      el: "Πεντηκοστή" }, points: W[0] },
        { id: "2",  textByLang: { en: "Healing at the Beautiful Gate",  el: "Ίαση στην Ωραία Πύλη" }, points: W[1] },
        { id: "3",  textByLang: { en: "Ananias and Sapphira",           el: "Ανανίας και Σαπφείρα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Choosing the Seven",             el: "Εκλογή των Επτά" }, points: W[3] },
        { id: "5",  textByLang: { en: "Stoning of Stephen",             el: "Λιθοβολισμός του Στεφάνου" }, points: W[4] },
        { id: "6",  textByLang: { en: "Conversion of Saul",             el: "Μεταστροφή του Σαύλου" }, points: W[5] },
        { id: "7",  textByLang: { en: "Peter and Cornelius",            el: "Πέτρος και Κορνήλιος" }, points: W[6] },
        { id: "8",  textByLang: { en: "Council of Jerusalem",           el: "Σύνοδος των Ιεροσολύμων" }, points: W[7] },
        { id: "9",  textByLang: { en: "Philippian jailer converted",    el: "Ο δεσμοφύλακας των Φιλίππων" }, points: W[8] },
        { id: "10", textByLang: { en: "Shipwreck at Malta",             el: "Ναυάγιο στη Μάλτα" }, points: W[9] },
      ],
    },
    {
      id: "jesus-titles-a",
      questionByLang: {
        en: "Name 10 titles of Jesus",
        el: "Ονομάστε 10 τίτλους του Ιησού",
      },
      answers: [
        { id: "1",  textByLang: { en: "Son of God",         el: "Υιός του Θεού" }, points: W[0] },
        { id: "2",  textByLang: { en: "Son of Man",         el: "Υιός του Ανθρώπου" }, points: W[1] },
        { id: "3",  textByLang: { en: "Lamb of God",        el: "Αμνός του Θεού" }, points: W[2] },
        { id: "4",  textByLang: { en: "Light of the World", el: "Φως του κόσμου" }, points: W[3] },
        { id: "5",  textByLang: { en: "Bread of Life",      el: "Άρτος της ζωής" }, points: W[4] },
        { id: "6",  textByLang: { en: "Good Shepherd",      el: "Καλός Ποιμένας" }, points: W[5] },
        { id: "7",  textByLang: { en: "Alpha and Omega",    el: "Άλφα και Ωμέγα" }, points: W[6] },
        { id: "8",  textByLang: { en: "King of Kings",      el: "Βασιλεύς των βασιλέων" }, points: W[7] },
        { id: "9",  textByLang: { en: "Lord",               el: "Κύριος" }, points: W[8] },
        { id: "10", textByLang: { en: "Emmanuel",           el: "Εμμανουήλ" }, points: W[9] },
      ],
    },
    {
      id: "divine-names-a",
      questionByLang: {
        en: "Name 10 biblical names/titles of God",
        el: "Ονομάστε 10 βιβλικά ονόματα/τίτλους του Θεού",
      },
      answers: [
        { id: "1",  textByLang: { en: "YHWH (the LORD)", el: "Κύριος (Γιαχβέ)" }, points: W[0] },
        { id: "2",  textByLang: { en: "Elohim",          el: "Ελοχίμ" }, points: W[1] },
        { id: "3",  textByLang: { en: "El Shaddai",      el: "Θεός Παντοκράτωρ (Ελ Σανταΐ)" }, points: W[2] },
        { id: "4",  textByLang: { en: "El Elyon",        el: "Ύψιστος Θεός (Ελ Ελιόν)" }, points: W[3] },
        { id: "5",  textByLang: { en: "I AM",            el: "Εγώ ειμί" }, points: W[4] },
        { id: "6",  textByLang: { en: "Adonai",          el: "Αδωνάι (Κύριος)" }, points: W[5] },
        { id: "7",  textByLang: { en: "Rock",            el: "Πέτρα/Βράχος" }, points: W[6] },
        { id: "8",  textByLang: { en: "Shepherd",        el: "Ποιμήν" }, points: W[7] },
        { id: "9",  textByLang: { en: "Father",          el: "Πατήρ" }, points: W[8] },
        { id: "10", textByLang: { en: "King",            el: "Βασιλεύς" }, points: W[9] },
      ],
    },
    {
      id: "luke-parables-a",
      questionByLang: {
        en: "Name 10 parables unique to Luke",
        el: "Ονομάστε 10 παραβολές που υπάρχουν μόνο στον Λουκά",
      },
      answers: [
        { id: "1",  textByLang: { en: "Good Samaritan",          el: "Ο Καλός Σαμαρείτης" }, points: W[0] },
        { id: "2",  textByLang: { en: "Prodigal Son",            el: "Ο Άσωτος Υιός" }, points: W[1] },
        { id: "3",  textByLang: { en: "Rich Man and Lazarus",    el: "Ο Πλούσιος και ο Λάζαρος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Pharisee and Tax Collector", el: "Ο Φαρισαίος και ο Τελώνης" }, points: W[3] },
        { id: "5",  textByLang: { en: "Friend at Midnight",      el: "Ο Φίλος τα Μεσάνυχτα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Persistent Widow",        el: "Η Επίμονη Χήρα" }, points: W[5] },
        { id: "7",  textByLang: { en: "Lost Coin",               el: "Η Χαμένη Δραχμή" }, points: W[6] },
        { id: "8",  textByLang: { en: "Ten Minas",               el: "Οι Δέκα Μνᾶς" }, points: W[7] },
        { id: "9",  textByLang: { en: "Great Banquet",           el: "Ο Μέγας Δείπνος" }, points: W[8] },
        { id: "10", textByLang: { en: "Rich Fool",               el: "Ο Άφρων Πλούσιος" }, points: W[9] },
      ],
    },
    {
      id: "women-ot-a",
      questionByLang: {
        en: "Name 10 women from the Old Testament",
        el: "Ονομάστε 10 γυναίκες της Παλαιάς Διαθήκης",
      },
      answers: [
        { id: "1",  textByLang: { en: "Sarah",    el: "Σάρρα" }, points: W[0] },
        { id: "2",  textByLang: { en: "Rebekah",  el: "Ρεβέκκα" }, points: W[1] },
        { id: "3",  textByLang: { en: "Rachel",   el: "Ραχήλ" }, points: W[2] },
        { id: "4",  textByLang: { en: "Leah",     el: "Λεία" }, points: W[3] },
        { id: "5",  textByLang: { en: "Miriam",   el: "Μαριάμ" }, points: W[4] },
        { id: "6",  textByLang: { en: "Deborah",  el: "Δεββώρα" }, points: W[5] },
        { id: "7",  textByLang: { en: "Hannah",   el: "Άννα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Abigail",  el: "Αβιγαία" }, points: W[7] },
        { id: "9",  textByLang: { en: "Esther",   el: "Εσθήρ" }, points: W[8] },
        { id: "10", textByLang: { en: "Ruth",     el: "Ρουθ" }, points: W[9] },
      ],
    },
    {
      id: "psalms-quoted-nt-a",
      questionByLang: {
        en: "Name 10 Psalms frequently quoted in the New Testament",
        el: "Ονομάστε 10 Ψαλμούς που παρατίθενται συχνά στην Καινή Διαθήκη",
      },
      answers: [
        { id: "1",  textByLang: { en: "Psalm 2",   el: "Ψαλμός 2" }, points: W[0] },
        { id: "2",  textByLang: { en: "Psalm 8",   el: "Ψαλμός 8" }, points: W[1] },
        { id: "3",  textByLang: { en: "Psalm 16",  el: "Ψαλμός 16" }, points: W[2] },
        { id: "4",  textByLang: { en: "Psalm 22",  el: "Ψαλμός 22" }, points: W[3] },
        { id: "5",  textByLang: { en: "Psalm 40",  el: "Ψαλμός 40" }, points: W[4] },
        { id: "6",  textByLang: { en: "Psalm 41",  el: "Ψαλμός 41" }, points: W[5] },
        { id: "7",  textByLang: { en: "Psalm 69",  el: "Ψαλμός 69" }, points: W[6] },
        { id: "8",  textByLang: { en: "Psalm 95",  el: "Ψαλμός 95" }, points: W[7] },
        { id: "9",  textByLang: { en: "Psalm 110", el: "Ψαλμός 110" }, points: W[8] },
        { id: "10", textByLang: { en: "Psalm 118", el: "Ψαλμός 118" }, points: W[9] },
      ],
    },
    {
      id: "church-fathers-a",
      questionByLang: {
        en: "Name 10 prominent Church Fathers",
        el: "Ονομάστε 10 σημαντικούς Πατέρες της Εκκλησίας",
      },
      answers: [
        { id: "1",  textByLang: { en: "Athanasius the Great",      el: "Αθανάσιος ο Μέγας" }, points: W[0] },
        { id: "2",  textByLang: { en: "Basil the Great",           el: "Βασίλειος ο Μέγας" }, points: W[1] },
        { id: "3",  textByLang: { en: "Gregory the Theologian",    el: "Γρηγόριος ο Θεολόγος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Gregory of Nyssa",          el: "Γρηγόριος Νύσσης" }, points: W[3] },
        { id: "5",  textByLang: { en: "John Chrysostom",           el: "Ιωάννης ο Χρυσόστομος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Cyril of Alexandria",       el: "Κύριλλος Αλεξανδρείας" }, points: W[5] },
        { id: "7",  textByLang: { en: "Maximus the Confessor",     el: "Μάξιμος ο Ομολογητής" }, points: W[6] },
        { id: "8",  textByLang: { en: "John of Damascus",          el: "Ιωάννης ο Δαμασκηνός" }, points: W[7] },
        { id: "9",  textByLang: { en: "Irenaeus of Lyons",         el: "Ειρηναίος Λουγδούνου" }, points: W[8] },
        { id: "10", textByLang: { en: "Ignatius of Antioch",       el: "Ιγνάτιος Αντιοχείας" }, points: W[9] },
      ],
    },
    {
      id: "tabernacle-items-a",
      questionByLang: {
        en: "Name 10 items related to the Tabernacle/Temple",
        el: "Ονομάστε 10 αντικείμενα της Σκηνής του Μαρτυρίου/του Ναού",
      },
      answers: [
        { id: "1",  textByLang: { en: "Ark of the Covenant",    el: "Κιβωτός της Διαθήκης" }, points: W[0] },
        { id: "2",  textByLang: { en: "Mercy Seat",             el: "Ιλαστήριον" }, points: W[1] },
        { id: "3",  textByLang: { en: "Table of Showbread",     el: "Τράπεζα των Προθέσεων" }, points: W[2] },
        { id: "4",  textByLang: { en: "Lampstand (Menorah)",    el: "Λυχνία (Μενόρα)" }, points: W[3] },
        { id: "5",  textByLang: { en: "Altar of Incense",       el: "Θυσιαστήριο του θυμιάματος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Bronze Altar",           el: "Χάλκινο Θυσιαστήριο" }, points: W[5] },
        { id: "7",  textByLang: { en: "Bronze Laver/Basin",     el: "Χάλκινη Λεκάνη (Λουτήρας)" }, points: W[6] },
        { id: "8",  textByLang: { en: "Veil",                   el: "Καταπέτασμα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Holy of Holies",         el: "Άγια Αγίων" }, points: W[8] },
        { id: "10", textByLang: { en: "Priestly Garments",      el: "Ιερατικά Ενδύματα" }, points: W[9] },
      ],
    },
    {
      id: "judges-ot-a",
      questionByLang: {
        en: "Name 10 judges from the Book of Judges",
        el: "Ονομάστε 10 Κριτές από το βιβλίο των Κριτών",
      },
      answers: [
        { id: "1",  textByLang: { en: "Othniel",  el: "Οθνιήλ" }, points: W[0] },
        { id: "2",  textByLang: { en: "Ehud",    el: "Αώδ" }, points: W[1] },
        { id: "3",  textByLang: { en: "Deborah", el: "Δεββώρα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Gideon",  el: "Γεδεών" }, points: W[3] },
        { id: "5",  textByLang: { en: "Tola",    el: "Θωλά" }, points: W[4] },
        { id: "6",  textByLang: { en: "Jair",    el: "Ιαΐρ" }, points: W[5] },
        { id: "7",  textByLang: { en: "Jephthah",el: "Ιεφθά" }, points: W[6] },
        { id: "8",  textByLang: { en: "Ibzan",   el: "Αβσάν" }, points: W[7] },
        { id: "9",  textByLang: { en: "Elon",    el: "Αιλών" }, points: W[8] },
        { id: "10", textByLang: { en: "Samson",  el: "Σαμψών" }, points: W[9] },
      ],
    },
    {
      id: "paul-companions-a",
      questionByLang: {
        en: "Name 10 companions of the Apostle Paul",
        el: "Ονομάστε 10 συνεργάτες του Αποστόλου Παύλου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Barnabas",     el: "Βαρνάβας" }, points: W[0] },
        { id: "2",  textByLang: { en: "Silas",        el: "Σίλας" }, points: W[1] },
        { id: "3",  textByLang: { en: "Timothy",      el: "Τιμόθεος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Titus",        el: "Τίτος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Luke",         el: "Λουκάς" }, points: W[4] },
        { id: "6",  textByLang: { en: "Mark (John Mark)", el: "Μάρκος (Ιωάννης ο καλούμενος Μάρκος)" }, points: W[5] },
        { id: "7",  textByLang: { en: "Aquila",       el: "Ακύλας" }, points: W[6] },
        { id: "8",  textByLang: { en: "Priscilla",    el: "Πρίσκιλλα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Epaphroditus", el: "Επαφρόδιτος" }, points: W[8] },
        { id: "10", textByLang: { en: "Onesimus",     el: "Ονήσιμος" }, points: W[9] },
      ],
    },
    {
      id: "elijah-elisha-miracles-a",
      questionByLang: {
        en: "Name 10 miracles of Elijah and Elisha",
        el: "Ονομάστε 10 θαύματα του Ηλία και του Ελισσαίου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Fire on Mount Carmel (Elijah)", el: "Φωτιά στο Κάρμηλο (Ηλίας)" }, points: W[0] },
        { id: "2",  textByLang: { en: "Widow’s oil & flour (Elijah)",  el: "Λάδι και αλεύρι της χήρας (Ηλίας)" }, points: W[1] },
        { id: "3",  textByLang: { en: "Raising widow’s son (Elijah)",  el: "Ανάσταση υιού χήρας (Ηλίας)" }, points: W[2] },
        { id: "4",  textByLang: { en: "Parting the Jordan (Elijah/Elisha)", el: "Διαχωρισμός Ιορδάνη (Ηλίας/Ελισσαίος)" }, points: W[3] },
        { id: "5",  textByLang: { en: "Chariot of fire (Elijah taken up)", el: "Άρμα πυρός (Αναλήψη Ηλία)" }, points: W[4] },
        { id: "6",  textByLang: { en: "Purifying Jericho’s water (Elisha)", el: "Καθαρισμός νερού Ιεριχούς (Ελισσαίος)" }, points: W[5] },
        { id: "7",  textByLang: { en: "Multiplying oil (Elisha)",       el: "Πολλαπλασιασμός ελαίου (Ελισσαίος)" }, points: W[6] },
        { id: "8",  textByLang: { en: "Raising Shunammite’s son (Elisha)", el: "Ανάσταση υιού Σωμανίτιδας (Ελισσαίος)" }, points: W[7] },
        { id: "9",  textByLang: { en: "Healing Naaman (Elisha)",        el: "Ίαση Νεεμάν (Ελισσαίος)" }, points: W[8] },
        { id: "10", textByLang: { en: "Floating axe head (Elisha)",     el: "Το σιδερένιο τσεκούρι που επέπλευσε (Ελισσαίος)" }, points: W[9] },
      ],
    },
    {
      id: "virtues-classic-theology",
      questionByLang: {
        en: "Name 10 classic Christian virtues",
        el: "Ονομάστε 10 κλασικές χριστιανικές αρετές"
      },
      answers: [
        { id: "1",  textByLang: { en: "Faith", el: "Πίστη" }, points: W[0] },
        { id: "2",  textByLang: { en: "Hope", el: "Ελπίδα" }, points: W[1] },
        { id: "3",  textByLang: { en: "Love/Charity", el: "Αγάπη/Φιλανθρωπία" }, points: W[2] },
        { id: "4",  textByLang: { en: "Prudence", el: "Φρόνηση" }, points: W[3] },
        { id: "5",  textByLang: { en: "Justice", el: "Δικαιοσύνη" }, points: W[4] },
        { id: "6",  textByLang: { en: "Fortitude", el: "Ανδρεία" }, points: W[5] },
        { id: "7",  textByLang: { en: "Temperance", el: "Εγκράτεια" }, points: W[6] },
        { id: "8",  textByLang: { en: "Humility", el: "Ταπεινοφροσύνη" }, points: W[7] },
        { id: "9",  textByLang: { en: "Patience", el: "Υπομονή" }, points: W[8] },
        { id: "10", textByLang: { en: "Obedience", el: "Υπακοή" }, points: W[9] }
      ]
    },
    {
      id: "systematic-branches",
      questionByLang: {
        en: "Name 10 branches of systematic theology",
        el: "Ονομάστε 10 κλάδους της συστηματικής θεολογίας"
      },
      answers: [
        { id: "1",  textByLang: { en: "Theology Proper", el: "Θεολογία (Θεός καθ’ εαυτόν)" }, points: W[0] },
        { id: "2",  textByLang: { en: "Christology", el: "Χριστολογία" }, points: W[1] },
        { id: "3",  textByLang: { en: "Pneumatology", el: "Πνευματολογία" }, points: W[2] },
        { id: "4",  textByLang: { en: "Anthropology", el: "Ανθρωπολογία" }, points: W[3] },
        { id: "5",  textByLang: { en: "Hamartiology", el: "Αμαρτιολογία" }, points: W[4] },
        { id: "6",  textByLang: { en: "Soteriology", el: "Σωτηριολογία" }, points: W[5] },
        { id: "7",  textByLang: { en: "Ecclesiology", el: "Εκκλησιολογία" }, points: W[6] },
        { id: "8",  textByLang: { en: "Eschatology", el: "Εσχατολογία" }, points: W[7] },
        { id: "9",  textByLang: { en: "Bibliology", el: "Βιβλιολογία" }, points: W[8] },
        { id: "10", textByLang: { en: "Ethics", el: "Ηθική" }, points: W[9] }
      ]
    },
    {
      id: "greek-fathers-titles",
      questionByLang: {
        en: "Name 10 titles or epithets of Greek Fathers",
        el: "Ονομάστε 10 προσωνύμια/τίτλους Ελλήνων Πατέρων"
      },
      answers: [
        { id: "1",  textByLang: { en: "The Theologian (Gregory)", el: "Ο Θεολόγος (Γρηγόριος)" }, points: W[0] },
        { id: "2",  textByLang: { en: "The Golden-Mouthed (Chrysostom)", el: "Ο Χρυσόστομος" }, points: W[1] },
        { id: "3",  textByLang: { en: "The Great (Basil)", el: "Ο Μέγας (Βασίλειος)" }, points: W[2] },
        { id: "4",  textByLang: { en: "The Confessor (Maximus)", el: "Ο Ομολογητής (Μάξιμος)" }, points: W[3] },
        { id: "5",  textByLang: { en: "The Damascene (John)", el: "Ο Δαμασκηνός (Ιωάννης)" }, points: W[4] },
        { id: "6",  textByLang: { en: "The Wonderworker (Nicholas)", el: "Ο Θαυματουργός (Νικόλαος)" }, points: W[5] },
        { id: "7",  textByLang: { en: "The New Theologian (Symeon)", el: "Ο Νέος Θεολόγος (Συμεών)" }, points: W[6] },
        { id: "8",  textByLang: { en: "The Hymnographer (Romanos)", el: "Ο Υμνογράφος (Ρωμανός)" }, points: W[7] },
        { id: "9",  textByLang: { en: "The Philosopher (Justinian era)", el: "Ο Φιλόσοφος" }, points: W[8] },
        { id: "10", textByLang: { en: "The Great Catechist (Cyril)", el: "Ο Μέγας Κατηχητής (Κύριλλος)" }, points: W[9] }
      ]
    },
  {
    id: "virtues-classic-theology",
    questionByLang: {
      en: "Name 10 classic Christian virtues",
      el: "Ονομάστε 10 κλασικές χριστιανικές αρετές"
    },
    answers: [
      { id: "1",  textByLang: { en: "Faith", el: "Πίστη" }, points: W[0] },
      { id: "2",  textByLang: { en: "Hope", el: "Ελπίδα" }, points: W[1] },
      { id: "3",  textByLang: { en: "Love/Charity", el: "Αγάπη/Φιλανθρωπία" }, points: W[2] },
      { id: "4",  textByLang: { en: "Prudence", el: "Φρόνηση" }, points: W[3] },
      { id: "5",  textByLang: { en: "Justice", el: "Δικαιοσύνη" }, points: W[4] },
      { id: "6",  textByLang: { en: "Fortitude", el: "Ανδρεία" }, points: W[5] },
      { id: "7",  textByLang: { en: "Temperance", el: "Εγκράτεια" }, points: W[6] },
      { id: "8",  textByLang: { en: "Humility", el: "Ταπεινοφροσύνη" }, points: W[7] },
      { id: "9",  textByLang: { en: "Patience", el: "Υπομονή" }, points: W[8] },
      { id: "10", textByLang: { en: "Obedience", el: "Υπακοή" }, points: W[9] }
    ]
  },
  {
    id: "systematic-branches",
    questionByLang: {
      en: "Name 10 branches of systematic theology",
      el: "Ονομάστε 10 κλάδους της συστηματικής θεολογίας"
    },
    answers: [
      { id: "1",  textByLang: { en: "Theology Proper", el: "Θεολογία (Θεός καθ’ εαυτόν)" }, points: W[0] },
      { id: "2",  textByLang: { en: "Christology", el: "Χριστολογία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Pneumatology", el: "Πνευματολογία" }, points: W[2] },
      { id: "4",  textByLang: { en: "Anthropology", el: "Ανθρωπολογία" }, points: W[3] },
      { id: "5",  textByLang: { en: "Hamartiology", el: "Αμαρτιολογία" }, points: W[4] },
      { id: "6",  textByLang: { en: "Soteriology", el: "Σωτηριολογία" }, points: W[5] },
      { id: "7",  textByLang: { en: "Ecclesiology", el: "Εκκλησιολογία" }, points: W[6] },
      { id: "8",  textByLang: { en: "Eschatology", el: "Εσχατολογία" }, points: W[7] },
      { id: "9",  textByLang: { en: "Bibliology", el: "Βιβλιολογία" }, points: W[8] },
      { id: "10", textByLang: { en: "Ethics", el: "Ηθική" }, points: W[9] }
    ]
  },
  {
    id: "greek-fathers-titles",
    questionByLang: {
      en: "Name 10 titles or epithets of Greek Fathers",
      el: "Ονομάστε 10 προσωνύμια/τίτλους Ελλήνων Πατέρων"
    },
    answers: [
      { id: "1",  textByLang: { en: "The Theologian (Gregory)", el: "Ο Θεολόγος (Γρηγόριος)" }, points: W[0] },
      { id: "2",  textByLang: { en: "The Golden-Mouthed (Chrysostom)", el: "Ο Χρυσόστομος" }, points: W[1] },
      { id: "3",  textByLang: { en: "The Great (Basil)", el: "Ο Μέγας (Βασίλειος)" }, points: W[2] },
      { id: "4",  textByLang: { en: "The Confessor (Maximus)", el: "Ο Ομολογητής (Μάξιμος)" }, points: W[3] },
      { id: "5",  textByLang: { en: "The Damascene (John)", el: "Ο Δαμασκηνός (Ιωάννης)" }, points: W[4] },
      { id: "6",  textByLang: { en: "The Wonderworker (Nicholas)", el: "Ο Θαυματουργός (Νικόλαος)" }, points: W[5] },
      { id: "7",  textByLang: { en: "The New Theologian (Symeon)", el: "Ο Νέος Θεολόγος (Συμεών)" }, points: W[6] },
      { id: "8",  textByLang: { en: "The Hymnographer (Romanos)", el: "Ο Υμνογράφος (Ρωμανός)" }, points: W[7] },
      { id: "9",  textByLang: { en: "The Philosopher (Justinian era)", el: "Ο Φιλόσοφος" }, points: W[8] },
      { id: "10", textByLang: { en: "The Great Catechist (Cyril)", el: "Ο Μέγας Κατηχητής (Κύριλλος)" }, points: W[9] }
    ]
  },
  {
    id: "beatitudes-people",
    questionByLang: {
      en: "Name 10 types of people mentioned in the Beatitudes",
      el: "Ονομάστε 10 κατηγορίες ανθρώπων στους Μακαρισμούς"
    },
    answers: [
      { id: "1",  textByLang: { en: "Poor in spirit", el: "Πτωχοί τω πνεύματι" }, points: W[0] },
      { id: "2",  textByLang: { en: "Those who mourn", el: "Οι πενθούντες" }, points: W[1] },
      { id: "3",  textByLang: { en: "The meek", el: "Οι πραείς" }, points: W[2] },
      { id: "4",  textByLang: { en: "Hungry for righteousness", el: "Πεινώντες τη δικαιοσύνη" }, points: W[3] },
      { id: "5",  textByLang: { en: "Merciful", el: "Ελεήμονες" }, points: W[4] },
      { id: "6",  textByLang: { en: "Pure in heart", el: "Καθαροί τη καρδία" }, points: W[5] },
      { id: "7",  textByLang: { en: "Peacemakers", el: "Ειρηνοποιοί" }, points: W[6] },
      { id: "8",  textByLang: { en: "Persecuted", el: "Διωκόμενοι" }, points: W[7] },
      { id: "9",  textByLang: { en: "Reviled for Christ", el: "Ονειδιζόμενοι για τον Χριστό" }, points: W[8] },
      { id: "10", textByLang: { en: "The righteous", el: "Οι δίκαιοι" }, points: W[9] }
    ]
  },
  {
    id: "nt-metaphors-church",
    questionByLang: {
      en: "Name 10 New Testament metaphors for the Church",
      el: "Ονομάστε 10 μεταφορές της Καινής Διαθήκης για την Εκκλησία"
    },
    answers: [
      { id: "1",  textByLang: { en: "Body of Christ", el: "Σώμα Χριστού" }, points: W[0] },
      { id: "2",  textByLang: { en: "Bride of Christ", el: "Νύμφη του Χριστού" }, points: W[1] },
      { id: "3",  textByLang: { en: "Temple of the Holy Spirit", el: "Ναός του Αγίου Πνεύματος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Household of God", el: "Οίκος του Θεού" }, points: W[3] },
      { id: "5",  textByLang: { en: "Holy Nation", el: "Έθνος Άγιον" }, points: W[4] },
      { id: "6",  textByLang: { en: "Royal Priesthood", el: "Βασίλειον Ιεράτευμα" }, points: W[5] },
      { id: "7",  textByLang: { en: "Flock", el: "Ποίμνιο" }, points: W[6] },
      { id: "8",  textByLang: { en: "Branches/Vine", el: "Κλήματα/Άμπελος" }, points: W[7] },
      { id: "9",  textByLang: { en: "Living Stones", el: "Λίθοι ζώντες" }, points: W[8] },
      { id: "10", textByLang: { en: "New Jerusalem", el: "Νέα Ιερουσαλήμ" }, points: W[9] }
    ]
  },
  {
    id: "plagues-egypt-a",
    questionByLang: {
      en: "Name the 10 plagues of Egypt",
      el: "Ονομάστε τις 10 πληγές της Αιγύπτου",
    },
    answers: [
      { id: "1",  textByLang: { en: "Water to blood", el: "Μετατροπή νερού σε αίμα" }, points: W[0] },
      { id: "2",  textByLang: { en: "Frogs",          el: "Βάτραχοι" }, points: W[1] },
      { id: "3",  textByLang: { en: "Lice/Gnats",     el: "Σκνίπες" }, points: W[2] },
      { id: "4",  textByLang: { en: "Flies",          el: "Μύγες" }, points: W[3] },
      { id: "5",  textByLang: { en: "Livestock pestilence", el: "Θάνατος των κτηνών" }, points: W[4] },
      { id: "6",  textByLang: { en: "Boils",          el: "Έλκη" }, points: W[5] },
      { id: "7",  textByLang: { en: "Hail",           el: "Χαλάζι" }, points: W[6] },
      { id: "8",  textByLang: { en: "Locusts",        el: "Ακρίδες" }, points: W[7] },
      { id: "9",  textByLang: { en: "Darkness",       el: "Σκότος" }, points: W[8] },
      { id: "10", textByLang: { en: "Death of the firstborn", el: "Θάνατος των πρωτοτόκων" }, points: W[9] },
    ],
  },
];

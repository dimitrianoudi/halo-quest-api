import type { QuestionSet } from "../types.js";

const W = [10,9,8,7,6,5,4,3,2,1];

export const EXTRA_EASY: QuestionSet[] = [
  {
    id: "two-saints-same-day",
    questionByLang: {
      en: "10 feast days with 2 or more saints being honored simultaneously",
      el: "10 γιορτές αγίων με 2 άγιους και πάνω να τιμούνται ταυτόχρονα",
    },
    answers: [
      { id: "1",  textByLang: { en: "January 30, The Three Hierarchs, Basil the Great, Gregory the Theologian, John Chrysostom", el: "30 Ιανουαρίου, Τριών Ιεραρχών, Μέγας Βασίλειος, Γρηγόριος ο Θεολόγος, Ιωάννης ο Χρυσόστομος" }, points: W[0] },
      { id: "2",  textByLang: { en: "January 18, Saints Athanasius and Cyril, Patriarchs of Alexandria",                         el: "18 Ιανουαρίου, Αθανασίου και Κυρίλλου, Πατριάρχες Αλεξανδρείας" }, points: W[1] },
      { id: "3",  textByLang: { en: "May 21, Saints Constantine and Helen, Equals-to-the-Apostles",                              el: "21 Μαΐου, Κωνσταντίνου και Ελένης, οι Ισαπόστολοι" }, points: W[2] },
      { id: "4",  textByLang: { en: "June 29, Saints Peter and Paul, the foremost Apostles",                                     el: "29 Ιουνίου, Πέτρου και Παύλου, οι κορυφαίοι Απόστολοι" }, points: W[3] },
      { id: "5",  textByLang: { en: "June 30, Synaxis of the Twelve Holy Apostles",                                              el: "30 Ιουνίου, Σύναξη των Αγίων Δώδεκα Αποστόλων" }, points: W[4] },
      { id: "6",  textByLang: { en: "November 8, Synaxis of the Archangels Michael and Gabriel",                                 el: "8 Νοεμβρίου, Σύναξη των Αρχαγγέλων Μιχαήλ και Γαβριήλ" }, points: W[5] },
      { id: "7",  textByLang: { en: "November 1, Saints Cosmas and Damian, the Unmercenary Physicians",                          el: "1 Νοεμβρίου, Κοσμά και Δαμιανού των Αναργύρων" }, points: W[6] },
      { id: "8",  textByLang: { en: "September 9, Synaxis of the Righteous Ancestors of God Joachim and Anna",                   el: "9 Σεπτεμβρίου, Σύναξη των Θεοπατόρων Ιωακείμ και Άννης" }, points: W[7] },
      { id: "9",  textByLang: { en: "June 11, Saints Bartholomew and Barnabas, Holy Apostles",                                   el: "11 Ιουνίου, Βαρθολομαίου και Βαρνάβα, Άγιοι Απόστολοι" }, points: W[8] },
      { id: "10", textByLang: { en: "October 7, Saints Sergius and Bacchus, Holy Martyrs",                                       el: "7 Οκτωβρίου, Σεργίου και Βάκχου, Άγιοι Μάρτυρες" }, points: W[9] },
    ],
  },
    {
      id: "gr-modern-saints-a",
      questionByLang: {
        en: "Name 10 modern Greek Orthodox saints",
        el: "Ονομάστε 10 σύγχρονους Έλληνες Ορθόδοξους αγίους",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint Nektarios of Aegina",              el: "Άγιος Νεκτάριος Αιγίνης" }, points: W[0] },
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
      id: "new-martyrs-hellas-a",
      questionByLang: {
        en: "Name 10 Greek new martyrs commonly commemorated",
        el: "Ονομάστε 10 Έλληνες νεομάρτυρες που τιμώνται ευρέως",
      },
      answers: [
        { id: "1",  textByLang: { en: "New Martyr Ephraim of Nea Makri", el: "Άγιος Εφραίμ ο Νεομάρτυς Νέας Μάκρης" }, points: W[0] },
        { id: "2",  textByLang: { en: "New Martyr George of Ioannina",   el: "Άγιος Γεώργιος ο Νεομάρτυς Ιωαννίνων" }, points: W[1] },
        { id: "3",  textByLang: { en: "New Martyr Constantine of Hydra", el: "Άγιος Κωνσταντίνος ο Υδραίος" }, points: W[2] },
        { id: "4",  textByLang: { en: "New Martyr Aquilina of Zagliveri",el: "Αγία Ακυλίνα η Ζαγκλιβερινή" }, points: W[3] },
        { id: "5",  textByLang: { en: "New Martyr Polydoros of Cyprus", el: "Άγιος Πολύδωρος ο Νεομάρτυς (Κύπρος)" }, points: W[4] },
        { id: "6",  textByLang: { en: "New Martyr Theodore of Mytilene", el: "Άγιος Θεόδωρος ο Νεομάρτυς Μυτιλήνης" }, points: W[5] },
        { id: "7",  textByLang: { en: "New Martyr Demetrios of Chios",   el: "Άγιος Δημήτριος ο Νεομάρτυς Χίου" }, points: W[6] },
        { id: "8",  textByLang: { en: "New Martyr Zograf of Kastoria",  el: "Άγιος Ζωγράφος ο Νεομάρτυς Καστοριάς" }, points: W[7] },
        { id: "9",  textByLang: { en: "New Martyr Nicholas of Karpenisi",el: "Άγιος Νικόλαος ο Νεομάρτυς Καρπενησίου" }, points: W[8] },
        { id: "10", textByLang: { en: "New Hieromartyr Philoumenos",     el: "Άγιος Ιερομάρτυς Φιλούμενος" }, points: W[9] },
      ],
    },
    /* *Greek world / broader Hellenic sphere included. */
    
    {
      id: "recent-women-saints-el-a",
      questionByLang: {
        en: "Name 10 women saints revered in modern Greece",
        el: "Ονομάστε 10 γυναίκες αγίες που τιμώνται στη σύγχρονη Ελλάδα",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint Irene of Lesvos", el: "Αγία Ειρήνη Μυτιλήνης" }, points: W[0] },
        { id: "2",  textByLang: { en: "Saint Philothei of Athens", el: "Αγία Φιλοθέη Αθηναία" }, points: W[1] },
        { id: "3",  textByLang: { en: "Saint Sophia of Kleisoura", el: "Οσία Σοφία της Κλεισούρας" }, points: W[2] },
        { id: "4",  textByLang: { en: "Saint Matrona of Chios",     el: "Αγία Ματρώνα Χίου" }, points: W[3] },
        { id: "5",  textByLang: { en: "Saint Irene Chrysovalantou", el: "Αγία Ειρήνη Χρυσοβαλάντου" }, points: W[4] },
        { id: "6",  textByLang: { en: "Saint Paraskevi (Epivates)", el: "Αγία Παρασκευή (Επιβατών)" }, points: W[5] },
        { id: "7",  textByLang: { en: "Saint Kalliopi (New Martyr)", el: "Αγία Καλλιόπη (Νεομάρτυς)" }, points: W[6] },
        { id: "8",  textByLang: { en: "Saint Theodora of Vasta",    el: "Αγία Θεοδώρα Βάστας" }, points: W[7] },
        { id: "9",  textByLang: { en: "Saint Irene of Thessaloniki", el: "Αγία Ειρήνη Θεσσαλονίκης" }, points: W[8] },
        { id: "10", textByLang: { en: "Saint Kyriaki (New Martyr)",  el: "Αγία Κυριακή (Νεομάρτυς)" }, points: W[9] },
      ],
    },
    
    {
      id: "greek-saints-hymnographers-a",
      questionByLang: {
        en: "Name 10 hymnwriters",
        el: "Ονομάστε 10 υμνογράφους",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint Romanos the Melodist",      el: "Άγιος Ρωμανός ο Μελωδός" }, points: W[0] },
        { id: "2",  textByLang: { en: "Saint John of Damascus",          el: "Άγιος Ιωάννης ο Δαμασκηνός" }, points: W[1] },
        { id: "3",  textByLang: { en: "Saint Andrew of Crete",           el: "Άγιος Ανδρέας Κρήτης" }, points: W[2] },
        { id: "4",  textByLang: { en: "Saint Cosmas of Maiuma",          el: "Άγιος Κοσμάς ο Μαϊουμά" }, points: W[3] },
        { id: "5",  textByLang: { en: "Saint Joseph the Hymnographer",   el: "Άγιος Ιωσήφ ο Υμνογράφος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Saint Theophanes the Branded",    el: "Άγιος Θεοφάνης ο Γραπτός" }, points: W[5] },
        { id: "7",  textByLang: { en: "Saint Theodore the Studite",      el: "Άγιος Θεόδωρος ο Στουδίτης" }, points: W[6] },
        { id: "8",  textByLang: { en: "Saint Kassiani the Hymnographer", el: "Οσία Κασσιανή η Υμνογράφος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Saint Anatolius of Constantinople", el: "Άγιος Ανατόλιος Κωνσταντινουπόλεως" }, points: W[8] },
        { id: "10", textByLang: { en: "Saint Germanus of Constantinople", el: "Άγιος Γερμανός Κωνσταντινουπόλεως" }, points: W[9] },
      ],
    },

    {
      id: "ot-books-a",
      questionByLang: {
        en: "Name 10 books of the Old Testament",
        el: "Ονομάστε 10 βιβλία της Παλαιάς Διαθήκης",
      },
      answers: [
        { id: "1",  textByLang: { en: "Genesis", el: "Γένεσις" }, points: W[0] },
        { id: "2",  textByLang: { en: "Exodus", el: "Έξοδος" }, points: W[1] },
        { id: "3",  textByLang: { en: "Leviticus", el: "Λευιτικό" }, points: W[2] },
        { id: "4",  textByLang: { en: "Numbers", el: "Αριθμοί" }, points: W[3] },
        { id: "5",  textByLang: { en: "Deuteronomy", el: "Δευτερονόμιο" }, points: W[4] },
        { id: "6",  textByLang: { en: "Joshua", el: "Ιησούς του Ναυή" }, points: W[5] },
        { id: "7",  textByLang: { en: "Judges", el: "Κριτές" }, points: W[6] },
        { id: "8",  textByLang: { en: "Ruth", el: "Ρουθ" }, points: W[7] },
        { id: "9",  textByLang: { en: "1 Samuel", el: "Α΄ Σαμουήλ" }, points: W[8] },
        { id: "10", textByLang: { en: "2 Samuel", el: "Β΄ Σαμουήλ" }, points: W[9] },
      ],
    },

    {
      id: "parables-jesus-a",
      questionByLang: {
        en: "Name 10 parables of Jesus",
        el: "Ονομάστε 10 παραβολές του Ιησού",
      },
      answers: [
        { id: "1",  textByLang: { en: "Sower", el: "Ο Σπορέας" }, points: W[0] },
        { id: "2",  textByLang: { en: "Good Samaritan", el: "Ο Καλός Σαμαρείτης" }, points: W[1] },
        { id: "3",  textByLang: { en: "Prodigal Son", el: "Ο Άσωτος Υιός" }, points: W[2] },
        { id: "4",  textByLang: { en: "Lost Sheep", el: "Το Απολωλός Πρόβατο" }, points: W[3] },
        { id: "5",  textByLang: { en: "Mustard Seed", el: "Ο Κόκκος Σινάπεως" }, points: W[4] },
        { id: "6",  textByLang: { en: "Hidden Treasure", el: "Ο Κρυμμένος Θησαυρός" }, points: W[5] },
        { id: "7",  textByLang: { en: "Pearl of Great Price", el: "Το Πολύτιμο Μαργαριτάρι" }, points: W[6] },
        { id: "8",  textByLang: { en: "Talents", el: "Τα Τάλαντα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Unforgiving Servant", el: "Ο Ανελεήμων Δούλος" }, points: W[8] },
        { id: "10", textByLang: { en: "Ten Virgins", el: "Οι Δέκα Παρθένες" }, points: W[9] },
      ],
    },

    {
      id: "miracles-jesus-a",
      questionByLang: {
        en: "Name 10 miracles of Jesus",
        el: "Ονομάστε 10 θαύματα του Ιησού",
      },
      answers: [
        { id: "1",  textByLang: { en: "Water into wine", el: "Μετατροπή νερού σε κρασί" }, points: W[0] },
        { id: "2",  textByLang: { en: "Feeding 5000", el: "Χορτασμός των 5000" }, points: W[1] },
        { id: "3",  textByLang: { en: "Walking on water", el: "Περπάτημα επί των υδάτων" }, points: W[2] },
        { id: "4",  textByLang: { en: "Calming the storm", el: "Καταπράυνση της τρικυμίας" }, points: W[3] },
        { id: "5",  textByLang: { en: "Raising Lazarus", el: "Ανάσταση του Λαζάρου" }, points: W[4] },
        { id: "6",  textByLang: { en: "Healing blind man", el: "Ίαση τυφλού" }, points: W[5] },
        { id: "7",  textByLang: { en: "Healing paralytic", el: "Ίαση παραλυτικού" }, points: W[6] },
        { id: "8",  textByLang: { en: "Cleansing lepers", el: "Καθαρισμός λεπρών" }, points: W[7] },
        { id: "9",  textByLang: { en: "Healing centurion's servant", el: "Θεραπεία του δούλου του εκατοντάρχη" }, points: W[8] },
        { id: "10", textByLang: { en: "Raising Jairus' daughter", el: "Ανάσταση της κόρης του Ιαείρου" }, points: W[9] },
      ],
    },

    {
      id: "ten-commandments",
      questionByLang: {
        en: "Name 10 Commandments",
        el: "Ονομάστε τις 10 Εντολές",
      },
      answers: [
        { id: "1",  textByLang: { en: "No other gods", el: "Ουκ έσονται σοι θεοί έτεροι" }, points: W[0] },
        { id: "2",  textByLang: { en: "No idols", el: "Ου ποιήσεις ειδώλον" }, points: W[1] },
        { id: "3",  textByLang: { en: "Do not take the Lord's name in vain", el: "Ου λήψει το όνομα Κυρίου επί ματαίω" }, points: W[2] },
        { id: "4",  textByLang: { en: "Keep the Sabbath holy", el: "Μνήσθητι την ημέρα του Σαββάτου" }, points: W[3] },
        { id: "5",  textByLang: { en: "Honor your father and mother", el: "Τίμα τον πατέρα και τη μητέρα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Do not murder", el: "Ου φονεύσεις" }, points: W[5] },
        { id: "7",  textByLang: { en: "Do not commit adultery", el: "Ου μοιχεύσεις" }, points: W[6] },
        { id: "8",  textByLang: { en: "Do not steal", el: "Ου κλέψεις" }, points: W[7] },
        { id: "9",  textByLang: { en: "Do not bear false witness", el: "Ου ψευδομαρτυρήσεις" }, points: W[8] },
        { id: "10", textByLang: { en: "Do not covet", el: "Ουκ επιθυμήσεις" }, points: W[9] },
      ],
    },

    {
      id: "church-feasts",
      questionByLang: {
        en: "Name 10 major feasts of the Church",
        el: "Ονομάστε 10 μεγάλες εορτές της Εκκλησίας",
      },
      answers: [
        { id: "1",  textByLang: { en: "Nativity", el: "Χριστούγεννα" }, points: W[0] },
        { id: "2",  textByLang: { en: "Theophany", el: "Θεοφάνεια" }, points: W[1] },
        { id: "3",  textByLang: { en: "Annunciation", el: "Ευαγγελισμός" }, points: W[2] },
        { id: "4",  textByLang: { en: "Palm Sunday", el: "Κυριακή των Βαΐων" }, points: W[3] },
        { id: "5",  textByLang: { en: "Pascha", el: "Πάσχα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Ascension", el: "Ανάληψη" }, points: W[5] },
        { id: "7",  textByLang: { en: "Pentecost", el: "Πεντηκοστή" }, points: W[6] },
        { id: "8",  textByLang: { en: "Transfiguration", el: "Μεταμόρφωση" }, points: W[7] },
        { id: "9",  textByLang: { en: "Dormition of the Theotokos", el: "Κοίμηση της Θεοτόκου" }, points: W[8] },
        { id: "10", textByLang: { en: "Exaltation of the Cross", el: "Ύψωση του Τιμίου Σταυρού" }, points: W[9] },
      ],
    },

    {
      id: "women-nt",
      questionByLang: {
        en: "Name 10 women from the New Testament",
        el: "Ονομάστε 10 γυναίκες της Καινής Διαθήκης",
      },
      answers: [
        { id: "1",  textByLang: { en: "Mary the Theotokos", el: "Μαρία η Θεοτόκος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Mary Magdalene", el: "Μαρία η Μαγδαληνή" }, points: W[1] },
        { id: "3",  textByLang: { en: "Elizabeth", el: "Ελισάβετ" }, points: W[2] },
        { id: "4",  textByLang: { en: "Anna the Prophetess", el: "Άννα η Προφήτις" }, points: W[3] },
        { id: "5",  textByLang: { en: "Martha", el: "Μάρθα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Mary of Bethany", el: "Μαρία της Βηθανίας" }, points: W[5] },
        { id: "7",  textByLang: { en: "Joanna", el: "Ιωάννα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Susanna", el: "Σουσάννα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Lydia", el: "Λυδία" }, points: W[8] },
        { id: "10", textByLang: { en: "Phoebe", el: "Φοίβη" }, points: W[9] },
      ],
    },

    {
      id: "theotokos-titles-a",
      questionByLang: {
        en: "Name 10 titles of the Theotokos",
        el: "Ονομάστε 10 προσωνύμια της Θεοτόκου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Theotokos", el: "Θεοτόκος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Panagia", el: "Παναγία" }, points: W[1] },
        { id: "3",  textByLang: { en: "Mother of God", el: "Μητέρα του Θεού" }, points: W[2] },
        { id: "4",  textByLang: { en: "Ever-Virgin", el: "Αειπάρθενος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Platytera", el: "Πλατυτέρα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Hodegetria", el: "Οδηγήτρια" }, points: W[5] },
        { id: "7",  textByLang: { en: "Eleousa", el: "Ελεούσα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Gorgoepikoos", el: "Γοργοεπήκοος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Life-Giving Spring", el: "Ζωοδόχος Πηγή" }, points: W[8] },
        { id: "10", textByLang: { en: "Myrtidiotissa", el: "Μυρτιδιώτισσα" }, points: W[9] },
      ],
    },

    {
      id: "warrior-saints-a",
      questionByLang: {
        en: "Name 10 warrior saints",
        el: "Ονομάστε 10 στρατιωτικούς αγίους",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint George", el: "Άγιος Γεώργιος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Saint Demetrios", el: "Άγιος Δημήτριος" }, points: W[1] },
        { id: "3",  textByLang: { en: "Saint Theodore Tiron", el: "Άγιος Θεόδωρος ο Τήρων" }, points: W[2] },
        { id: "4",  textByLang: { en: "Saint Theodore Stratelates", el: "Άγιος Θεόδωρος ο Στρατηλάτης" }, points: W[3] },
        { id: "5",  textByLang: { en: "Saint Mercurius", el: "Άγιος Μερκούριος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Saint Menas", el: "Άγιος Μηνάς" }, points: W[5] },
        { id: "7",  textByLang: { en: "Saint Nestor", el: "Άγιος Νέστορας" }, points: W[6] },
        { id: "8",  textByLang: { en: "Saint Procopius", el: "Άγιος Προκόπιος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Saint Artemius", el: "Άγιος Αρτέμιος" }, points: W[8] },
        { id: "10", textByLang: { en: "Saint Eustathius", el: "Άγιος Ευστάθιος" }, points: W[9] },
      ],
    },

    {
      id: "women-martyrs-a",
      questionByLang: {
        en: "Name 10 women martyrs",
        el: "Ονομάστε 10 γυναίκες μάρτυρες",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint Catherine", el: "Αγία Αικατερίνη" }, points: W[0] },
        { id: "2",  textByLang: { en: "Saint Barbara", el: "Αγία Βαρβάρα" }, points: W[1] },
        { id: "3",  textByLang: { en: "Saint Marina", el: "Αγία Μαρίνα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Saint Paraskevi", el: "Αγία Παρασκευή" }, points: W[3] },
        { id: "5",  textByLang: { en: "Saint Kyriaki", el: "Αγία Κυριακή" }, points: W[4] },
        { id: "6",  textByLang: { en: "Saint Euphemia", el: "Αγία Ευφημία" }, points: W[5] },
        { id: "7",  textByLang: { en: "Saint Christina", el: "Αγία Χριστίνα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Saint Irene", el: "Αγία Ειρήνη" }, points: W[7] },
        { id: "9",  textByLang: { en: "Saint Tatiana", el: "Αγία Τατιανή" }, points: W[8] },
        { id: "10", textByLang: { en: "Saint Photini", el: "Αγία Φωτεινή" }, points: W[9] },
      ],
    },

    {
      id: "holy-week-days-a",
      questionByLang: {
        en: "Name 10 days or services from Holy Week and Pascha",
        el: "Ονομάστε 10 ημέρες ή ακολουθίες της Μεγάλης Εβδομάδας και του Πάσχα",
      },
      answers: [
        { id: "1",  textByLang: { en: "Lazarus Saturday", el: "Σάββατο του Λαζάρου" }, points: W[0] },
        { id: "2",  textByLang: { en: "Palm Sunday", el: "Κυριακή των Βαΐων" }, points: W[1] },
        { id: "3",  textByLang: { en: "Holy Monday", el: "Μεγάλη Δευτέρα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Holy Tuesday", el: "Μεγάλη Τρίτη" }, points: W[3] },
        { id: "5",  textByLang: { en: "Holy Wednesday", el: "Μεγάλη Τετάρτη" }, points: W[4] },
        { id: "6",  textByLang: { en: "Holy Thursday", el: "Μεγάλη Πέμπτη" }, points: W[5] },
        { id: "7",  textByLang: { en: "Holy Friday", el: "Μεγάλη Παρασκευή" }, points: W[6] },
        { id: "8",  textByLang: { en: "Holy Saturday", el: "Μεγάλο Σάββατο" }, points: W[7] },
        { id: "9",  textByLang: { en: "Pascha Matins", el: "Ακολουθία της Αναστάσεως" }, points: W[8] },
        { id: "10", textByLang: { en: "Agape Vespers", el: "Εσπερινός της Αγάπης" }, points: W[9] },
      ],
    },

    {
      id: "desert-fathers-a",
      questionByLang: {
        en: "Name 10 Desert Fathers or Mothers",
        el: "Ονομάστε 10 Πατέρες ή Μητέρες της ερήμου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint Anthony the Great", el: "Άγιος Αντώνιος ο Μέγας" }, points: W[0] },
        { id: "2",  textByLang: { en: "Saint Pachomius the Great", el: "Άγιος Παχώμιος ο Μέγας" }, points: W[1] },
        { id: "3",  textByLang: { en: "Saint Macarius the Great", el: "Άγιος Μακάριος ο Μέγας" }, points: W[2] },
        { id: "4",  textByLang: { en: "Saint Arsenius the Great", el: "Άγιος Αρσένιος ο Μέγας" }, points: W[3] },
        { id: "5",  textByLang: { en: "Saint Moses the Ethiopian", el: "Άγιος Μωυσής ο Αιθίοπας" }, points: W[4] },
        { id: "6",  textByLang: { en: "Saint Poemen the Great", el: "Άγιος Ποιμήν ο Μέγας" }, points: W[5] },
        { id: "7",  textByLang: { en: "Saint Sisoes the Great", el: "Άγιος Σισώης ο Μέγας" }, points: W[6] },
        { id: "8",  textByLang: { en: "Saint Syncletica", el: "Οσία Συγκλητική" }, points: W[7] },
        { id: "9",  textByLang: { en: "Saint Sarah of the Desert", el: "Οσία Σάρρα της ερήμου" }, points: W[8] },
        { id: "10", textByLang: { en: "Saint John the Dwarf", el: "Άγιος Ιωάννης ο Κολοβός" }, points: W[9] },
      ],
    },
    {
      id: "psalms-themes",
      questionByLang: {
        en: "Name 10 themes from the Psalms",
        el: "Ονομάστε 10 θέματα από τους Ψαλμούς",
      },
      answers: [
        { id: "1",  textByLang: { en: "Praise",            el: "Δοξολογία" }, points: W[0] },
        { id: "2",  textByLang: { en: "Thanksgiving",      el: "Ευχαριστία" }, points: W[1] },
        { id: "3",  textByLang: { en: "Lament",            el: "Θρήνος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Trust",             el: "Εμπιστοσύνη" }, points: W[3] },
        { id: "5",  textByLang: { en: "Wisdom",            el: "Σοφία" }, points: W[4] },
        { id: "6",  textByLang: { en: "Kingship",          el: "Βασιλεία" }, points: W[5] },
        { id: "7",  textByLang: { en: "Creation",          el: "Δημιουργία" }, points: W[6] },
        { id: "8",  textByLang: { en: "Torah/Law",         el: "Νόμος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Zion/Temple",       el: "Σιών/Ναός" }, points: W[8] },
        { id: "10", textByLang: { en: "Messianic hope",    el: "Μεσσιανική ελπίδα" }, points: W[9] },
      ],
    },
    {
      id: "fruits-spirit",
      questionByLang: {
        en: "Name 10 Christian virtues (including fruits of the Spirit)",
        el: "Ονομάστε 10 χριστιανικές αρετές (μαζί με τους καρπούς του Πνεύματος)",
      },
      answers: [
        { id: "1",  textByLang: { en: "Love",        el: "Αγάπη" }, points: W[0] },
        { id: "2",  textByLang: { en: "Joy",         el: "Χαρά" }, points: W[1] },
        { id: "3",  textByLang: { en: "Peace",       el: "Ειρήνη" }, points: W[2] },
        { id: "4",  textByLang: { en: "Patience",    el: "Μακροθυμία" }, points: W[3] },
        { id: "5",  textByLang: { en: "Kindness",    el: "Χρηστότητα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Goodness",    el: "Αγαθωσύνη" }, points: W[5] },
        { id: "7",  textByLang: { en: "Faithfulness",el: "Πίστη" }, points: W[6] },
        { id: "8",  textByLang: { en: "Gentleness",  el: "Πραότητα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Self-control",el: "Εγκράτεια" }, points: W[8] },
        { id: "10", textByLang: { en: "Humility",    el: "Ταπείνωση" }, points: W[9] },
      ],
    },



  ];
  
  // ---------- MODERATE (3) ----------
  export const EXTRA_MODERATE: QuestionSet[] = [
  
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
      id: "prophets-major-minor",
      questionByLang: {
        en: "Name 10 biblical prophets (major/minor)",
        el: "Ονομάστε 10 βιβλικούς προφήτες (μεγάλους/μικρούς)",
      },
      answers: [
        { id: "1",  textByLang: { en: "Isaiah",     el: "Ησαΐας" }, points: W[0] },
        { id: "2",  textByLang: { en: "Jeremiah",   el: "Ιερεμίας" }, points: W[1] },
        { id: "3",  textByLang: { en: "Ezekiel",    el: "Ιεζεκιήλ" }, points: W[2] },
        { id: "4",  textByLang: { en: "Daniel",     el: "Δανιήλ" }, points: W[3] },
        { id: "5",  textByLang: { en: "Hosea",      el: "Ωσηέ" }, points: W[4] },
        { id: "6",  textByLang: { en: "Joel",       el: "Ιωήλ" }, points: W[5] },
        { id: "7",  textByLang: { en: "Amos",       el: "Αμώς" }, points: W[6] },
        { id: "8",  textByLang: { en: "Obadiah",    el: "Αβδιού" }, points: W[7] },
        { id: "9",  textByLang: { en: "Jonah",      el: "Ιωνάς" }, points: W[8] },
        { id: "10", textByLang: { en: "Micah",      el: "Μιχαίας" }, points: W[9] },
      ],
    },
    {
      id: "patristic-virtues",
      questionByLang: {
        en: "Name 10 virtues taught by the Church Fathers",
        el: "Ονομάστε 10 αρετές των Πατέρων της Εκκλησίας",
      },
      answers: [
        { id: "1",  textByLang: { en: "Almsgiving",  el: "Ελεημοσύνη" }, points: W[0] },
        { id: "2",  textByLang: { en: "Fasting",     el: "Νηστεία" }, points: W[1] },
        { id: "3",  textByLang: { en: "Prayer",      el: "Προσευχή" }, points: W[2] },
        { id: "4",  textByLang: { en: "Watchfulness",el: "Νηπτικότητα" }, points: W[3] },
        { id: "5",  textByLang: { en: "Chastity",    el: "Αγνεία" }, points: W[4] },
        { id: "6",  textByLang: { en: "Obedience",   el: "Υπακοή" }, points: W[5] },
        { id: "7",  textByLang: { en: "Meekness",    el: "Πραότητα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Compunction", el: "Κατάνυξη" }, points: W[7] },
        { id: "9",  textByLang: { en: "Detachment",  el: "Αποταγή" }, points: W[8] },
        { id: "10", textByLang: { en: "Silence",     el: "Σιωπή" }, points: W[9] },
      ],
    },
    {
      id: "nt-cities",
      questionByLang: {
        en: "Name 10 cities from the New Testament",
        el: "Ονομάστε 10 πόλεις της Καινής Διαθήκης",
      },
      answers: [
        { id: "1",  textByLang: { en: "Jerusalem",   el: "Ιερουσαλήμ" }, points: W[0] },
        { id: "2",  textByLang: { en: "Bethlehem",   el: "Βηθλεέμ" }, points: W[1] },
        { id: "3",  textByLang: { en: "Nazareth",    el: "Ναζαρέτ" }, points: W[2] },
        { id: "4",  textByLang: { en: "Capernaum",   el: "Καπερναούμ" }, points: W[3] },
        { id: "5",  textByLang: { en: "Bethany",     el: "Βηθανία" }, points: W[4] },
        { id: "6",  textByLang: { en: "Damascus",    el: "Δαμασκός" }, points: W[5] },
        { id: "7",  textByLang: { en: "Antioch",     el: "Αντιόχεια" }, points: W[6] },
        { id: "8",  textByLang: { en: "Ephesus",     el: "Έφεσος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Corinth",     el: "Κόρινθος" }, points: W[8] },
        { id: "10", textByLang: { en: "Philippi",    el: "Φίλιπποι" }, points: W[9] },
      ],
    }  
  ];
  
  // ---------- HIGH (3) ----------
  export const EXTRA_HIGH: QuestionSet[] = [
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
    {
      id: "byz-chant-history-figures-a",
      questionByLang: {
        en: "Name 10 major figures in Byzantine chant history",
        el: "Ονομάστε 10 σημαντικές μορφές της ιστορίας της βυζαντινής μουσικής",
      },
      answers: [
        { id: "1",  textByLang: { en: "Saint Romanos the Melodist", el: "Άγιος Ρωμανός ο Μελωδός" }, points: W[0] },
        { id: "2",  textByLang: { en: "Saint John of Damascus", el: "Άγιος Ιωάννης ο Δαμασκηνός" }, points: W[1] },
        { id: "3",  textByLang: { en: "Saint Andrew of Crete", el: "Άγιος Ανδρέας Κρήτης" }, points: W[2] },
        { id: "4",  textByLang: { en: "John Koukouzelis", el: "Ιωάννης Κουκουζέλης" }, points: W[3] },
        { id: "5",  textByLang: { en: "John Kladas", el: "Ιωάννης Κλαδάς" }, points: W[4] },
        { id: "6",  textByLang: { en: "Manuel Chrysaphes", el: "Μανουήλ Χρυσάφης" }, points: W[5] },
        { id: "7",  textByLang: { en: "Petros Bereketis", el: "Πέτρος Μπερεκέτης" }, points: W[6] },
        { id: "8",  textByLang: { en: "Petros Peloponnesios", el: "Πέτρος Πελοποννήσιος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Chourmouzios Chartophylax", el: "Χουρμούζιος Χαρτοφύλαξ" }, points: W[8] },
        { id: "10", textByLang: { en: "Chrysanthos of Madytos", el: "Χρύσανθος εκ Μαδύτων" }, points: W[9] },
      ],
    },
    {
      id: "byz-chant-books-a",
      questionByLang: {
        en: "Name 10 books used in Byzantine chant tradition",
        el: "Ονομάστε 10 βιβλία της βυζαντινής μουσικής παράδοσης",
      },
      answers: [
        { id: "1",  textByLang: { en: "Octoechos / Parakletike", el: "Οκτώηχος / Παρακλητική" }, points: W[0] },
        { id: "2",  textByLang: { en: "Menaion", el: "Μηναίον" }, points: W[1] },
        { id: "3",  textByLang: { en: "Triodion", el: "Τριώδιον" }, points: W[2] },
        { id: "4",  textByLang: { en: "Pentecostarion", el: "Πεντηκοστάριον" }, points: W[3] },
        { id: "5",  textByLang: { en: "Irmologion", el: "Ειρμολόγιον" }, points: W[4] },
        { id: "6",  textByLang: { en: "Sticherarion", el: "Στιχηράριον" }, points: W[5] },
        { id: "7",  textByLang: { en: "Doxastarion", el: "Δοξαστάριον" }, points: W[6] },
        { id: "8",  textByLang: { en: "Anastasimatarion", el: "Αναστασιματάριον" }, points: W[7] },
        { id: "9",  textByLang: { en: "Papadike", el: "Παπαδική" }, points: W[8] },
        { id: "10", textByLang: { en: "Anthologion", el: "Ανθολόγιον" }, points: W[9] },
      ],
    },
    {
      id: "byz-notation-signs-a",
      questionByLang: {
        en: "Name 10 signs or terms from Byzantine notation",
        el: "Ονομάστε 10 σημεία ή όρους της βυζαντινής σημειογραφίας",
      },
      answers: [
        { id: "1",  textByLang: { en: "Ison", el: "Ίσον" }, points: W[0] },
        { id: "2",  textByLang: { en: "Oligon", el: "Ολίγον" }, points: W[1] },
        { id: "3",  textByLang: { en: "Petaste", el: "Πεταστή" }, points: W[2] },
        { id: "4",  textByLang: { en: "Apostrophos", el: "Απόστροφος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Kentemata", el: "Κεντήματα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Elaphron", el: "Ελαφρόν" }, points: W[5] },
        { id: "7",  textByLang: { en: "Hypsile", el: "Υψηλή" }, points: W[6] },
        { id: "8",  textByLang: { en: "Gorgon", el: "Γοργόν" }, points: W[7] },
        { id: "9",  textByLang: { en: "Klasma", el: "Κλάσμα" }, points: W[8] },
        { id: "10", textByLang: { en: "Psifiston", el: "Ψηφιστόν" }, points: W[9] },
      ],
    },
    {
      id: "byz-hymn-genres-a",
      questionByLang: {
        en: "Name 10 hymn or chant genres in Byzantine tradition",
        el: "Ονομάστε 10 είδη ύμνων ή μελών της βυζαντινής παράδοσης",
      },
      answers: [
        { id: "1",  textByLang: { en: "Troparion", el: "Τροπάριο" }, points: W[0] },
        { id: "2",  textByLang: { en: "Kontakion", el: "Κοντάκιο" }, points: W[1] },
        { id: "3",  textByLang: { en: "Canon", el: "Κανών" }, points: W[2] },
        { id: "4",  textByLang: { en: "Irmos", el: "Ειρμός" }, points: W[3] },
        { id: "5",  textByLang: { en: "Sticheron", el: "Στιχηρό" }, points: W[4] },
        { id: "6",  textByLang: { en: "Idiomelon", el: "Ιδιόμελο" }, points: W[5] },
        { id: "7",  textByLang: { en: "Automelon", el: "Αυτόμελο" }, points: W[6] },
        { id: "8",  textByLang: { en: "Kathisma hymn", el: "Κάθισμα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Exaposteilarion", el: "Εξαποστειλάριο" }, points: W[8] },
        { id: "10", textByLang: { en: "Theotokion", el: "Θεοτοκίον" }, points: W[9] },
      ],
    },
    {
      id: "byz-chant-terms-a",
      questionByLang: {
        en: "Name 10 technical terms from Byzantine chant theory",
        el: "Ονομάστε 10 τεχνικούς όρους της θεωρίας της βυζαντινής μουσικής",
      },
      answers: [
        { id: "1",  textByLang: { en: "Echos", el: "Ήχος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Apechema", el: "Απήχημα" }, points: W[1] },
        { id: "3",  textByLang: { en: "Martyria", el: "Μαρτυρία" }, points: W[2] },
        { id: "4",  textByLang: { en: "Phthora", el: "Φθορά" }, points: W[3] },
        { id: "5",  textByLang: { en: "Thesis", el: "Θέσις" }, points: W[4] },
        { id: "6",  textByLang: { en: "Melos", el: "Μέλος" }, points: W[5] },
        { id: "7",  textByLang: { en: "Kratema", el: "Κράτημα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Kalophonic melos", el: "Καλοφωνικό μέλος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Heirmologic melos", el: "Ειρμολογικό μέλος" }, points: W[8] },
        { id: "10", textByLang: { en: "Sticheraric melos", el: "Στιχηραρικό μέλος" }, points: W[9] },
      ],
    },
    {
      id: "byz-chant-centers-a",
      questionByLang: {
        en: "Name 10 important centers, churches, or monasteries in Byzantine chant history",
        el: "Ονομάστε 10 σημαντικά κέντρα, ναούς ή μονές στην ιστορία της βυζαντινής μουσικής",
      },
      answers: [
        { id: "1",  textByLang: { en: "Constantinople", el: "Κωνσταντινούπολη" }, points: W[0] },
        { id: "2",  textByLang: { en: "Hagia Sophia", el: "Αγία Σοφία" }, points: W[1] },
        { id: "3",  textByLang: { en: "Stoudios Monastery", el: "Μονή Στουδίου" }, points: W[2] },
        { id: "4",  textByLang: { en: "Mount Athos", el: "Άγιον Όρος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Great Lavra", el: "Μεγίστη Λαύρα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Vatopaidi Monastery", el: "Μονή Βατοπαιδίου" }, points: W[5] },
        { id: "7",  textByLang: { en: "Saint Catherine's Sinai", el: "Αγία Αικατερίνη Σινά" }, points: W[6] },
        { id: "8",  textByLang: { en: "Jerusalem", el: "Ιεροσόλυμα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Thessaloniki", el: "Θεσσαλονίκη" }, points: W[8] },
        { id: "10", textByLang: { en: "Patmos", el: "Πάτμος" }, points: W[9] },
      ],
    },
    {
      id: "divine-liturgy-parts-a",
      questionByLang: {
        en: "Name 10 major parts or sections of the Divine Liturgy",
        el: "Ονομάστε 10 κύρια μέρη ή ενότητες της Θείας Λειτουργίας",
      },
      answers: [
        { id: "1",  textByLang: { en: "Proskomide / Liturgy of Preparation", el: "Προσκομιδή / Λειτουργία της Προθέσεως" }, points: W[0] },
        { id: "2",  textByLang: { en: "Great Litany", el: "Μεγάλη Συναπτή" }, points: W[1] },
        { id: "3",  textByLang: { en: "Antiphons", el: "Αντίφωνα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Little Entrance", el: "Μικρή Είσοδος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Trisagion", el: "Τρισάγιος Ύμνος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Epistle Reading", el: "Αποστολικό Ανάγνωσμα" }, points: W[5] },
        { id: "7",  textByLang: { en: "Gospel Reading", el: "Ευαγγελικό Ανάγνωσμα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Cherubic Hymn", el: "Χερουβικός Ύμνος" }, points: W[7] },
        { id: "9",  textByLang: { en: "Great Entrance", el: "Μεγάλη Είσοδος" }, points: W[8] },
        { id: "10", textByLang: { en: "Anaphora", el: "Αναφορά" }, points: W[9] },
      ],
    },
    {
      id: "divine-liturgy-chants-a",
      questionByLang: {
        en: "Name 10 hymns or chanted texts commonly heard in the Divine Liturgy",
        el: "Ονομάστε 10 ύμνους ή ψαλλόμενα κείμενα που ακούγονται συχνά στη Θεία Λειτουργία",
      },
      answers: [
        { id: "1",  textByLang: { en: "Antiphons", el: "Αντίφωνα" }, points: W[0] },
        { id: "2",  textByLang: { en: "Only-Begotten Son", el: "Μονογενής Υιός" }, points: W[1] },
        { id: "3",  textByLang: { en: "Trisagion", el: "Τρισάγιος Ύμνος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Cherubic Hymn", el: "Χερουβικός Ύμνος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Nicene Creed", el: "Σύμβολο της Πίστεως" }, points: W[4] },
        { id: "6",  textByLang: { en: "Sanctus (Holy, Holy, Holy)", el: "Άγιος, Άγιος, Άγιος" }, points: W[5] },
        { id: "7",  textByLang: { en: "\"We hymn Thee\"", el: "\"Σε υμνούμεν\"" }, points: W[6] },
        { id: "8",  textByLang: { en: "\"It is Truly Meet\" / Axion Estin", el: "\"Άξιόν εστιν\"" }, points: W[7] },
        { id: "9",  textByLang: { en: "Communion Hymn (Koinonikon)", el: "Κοινωνικόν" }, points: W[8] },
        { id: "10", textByLang: { en: "\"Let Our Mouths Be Filled\"", el: "\"Πληρωθήτω το στόμα ημών\"" }, points: W[9] },
      ],
    },
    {
      id: "divine-liturgy-vessels-a",
      questionByLang: {
        en: "Name 10 liturgical vessels or objects used in the Divine Liturgy",
        el: "Ονομάστε 10 λειτουργικά σκεύη ή αντικείμενα που χρησιμοποιούνται στη Θεία Λειτουργία",
      },
      answers: [
        { id: "1",  textByLang: { en: "Diskos", el: "Δισκάριο" }, points: W[0] },
        { id: "2",  textByLang: { en: "Chalice", el: "Άγιο Ποτήριο" }, points: W[1] },
        { id: "3",  textByLang: { en: "Lance / Spear", el: "Λόγχη" }, points: W[2] },
        { id: "4",  textByLang: { en: "Asterisk", el: "Αστερίσκος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Spoon", el: "Λαβίδα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Aer", el: "Αήρ" }, points: W[5] },
        { id: "7",  textByLang: { en: "Veils / Covers", el: "Καλύμματα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Antimension", el: "Αντιμήνσιο" }, points: W[7] },
        { id: "9",  textByLang: { en: "Censer", el: "Θυμιατό" }, points: W[8] },
        { id: "10", textByLang: { en: "Zeon", el: "Ζέον" }, points: W[9] },
      ],
    },
    {
      id: "proskomide-commemorations-a",
      questionByLang: {
        en: "Name 10 commemorations or groups remembered in the Proskomide",
        el: "Ονομάστε 10 μνήμες ή ομάδες που μνημονεύονται στην Προσκομιδή",
      },
      answers: [
        { id: "1",  textByLang: { en: "The Lamb", el: "Ο Αμνός" }, points: W[0] },
        { id: "2",  textByLang: { en: "Theotokos", el: "Η Θεοτόκος" }, points: W[1] },
        { id: "3",  textByLang: { en: "John the Baptist", el: "Ο Άγιος Ιωάννης ο Πρόδρομος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Prophets", el: "Οι Προφήτες" }, points: W[3] },
        { id: "5",  textByLang: { en: "Apostles", el: "Οι Απόστολοι" }, points: W[4] },
        { id: "6",  textByLang: { en: "Hierarchs", el: "Οι Ιεράρχες" }, points: W[5] },
        { id: "7",  textByLang: { en: "Martyrs", el: "Οι Μάρτυρες" }, points: W[6] },
        { id: "8",  textByLang: { en: "Monastics / Ascetics", el: "Οι Όσιοι / Ασκητές" }, points: W[7] },
        { id: "9",  textByLang: { en: "The Living", el: "Οι Ζώντες" }, points: W[8] },
        { id: "10", textByLang: { en: "The Departed", el: "Οι Κεκοιμημένοι" }, points: W[9] },
      ],
    },
    {
      id: "anaphora-elements-a",
      questionByLang: {
        en: "Name 10 priestly exclamations from the Divine Liturgy",
        el: "Ονομάστε 10 ιερατικές εκφωνήσεις από τη Θεία Λειτουργία",
      },
      answers: [
        { id: "1",  textByLang: { en: "Blessed is the Kingdom", el: "Ευλογημένη η Βασιλεία" }, points: W[0] },
        { id: "2",  textByLang: { en: "In peace let us pray to the Lord", el: "Εν ειρήνη του Κυρίου δεηθώμεν" }, points: W[1] },
        { id: "3",  textByLang: { en: "Wisdom! Aright!", el: "Σοφία. Ορθοί." }, points: W[2] },
        { id: "4",  textByLang: { en: "Peace be unto all", el: "Ειρήνη πάσι" }, points: W[3] },
        { id: "5",  textByLang: { en: "The doors! The doors!", el: "Τας θύρας, τας θύρας" }, points: W[4] },
        { id: "6",  textByLang: { en: "Let us stand aright", el: "Στώμεν καλώς" }, points: W[5] },
        { id: "7",  textByLang: { en: "Lift up your hearts", el: "Άνω σχώμεν τας καρδίας" }, points: W[6] },
        { id: "8",  textByLang: { en: "Let us give thanks unto the Lord", el: "Ευχαριστήσωμεν τω Κυρίω" }, points: W[7] },
        { id: "9",  textByLang: { en: "Holy things are for the holy", el: "Τα Άγια τοις αγίοις" }, points: W[8] },
        { id: "10", textByLang: { en: "In peace let us depart", el: "Εν ειρήνη προέλθωμεν" }, points: W[9] },
      ],
    },
    {
      id: "divine-liturgy-actions-a",
      questionByLang: {
        en: "Name 10 liturgical actions or ritual moments in the Divine Liturgy",
        el: "Ονομάστε 10 λειτουργικές πράξεις ή τελετουργικές στιγμές στη Θεία Λειτουργία",
      },
      answers: [
        { id: "1",  textByLang: { en: "Censing", el: "Θυμίαση" }, points: W[0] },
        { id: "2",  textByLang: { en: "Opening Blessing of the Kingdom", el: "Ευλογία της Βασιλείας" }, points: W[1] },
        { id: "3",  textByLang: { en: "Little Entrance", el: "Μικρή Είσοδος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Great Entrance", el: "Μεγάλη Είσοδος" }, points: W[3] },
        { id: "5",  textByLang: { en: "Kiss of Peace", el: "Ασπασμός της Ειρήνης" }, points: W[4] },
        { id: "6",  textByLang: { en: "Elevation of the Holy Gifts", el: "Ύψωση των Τιμίων Δώρων" }, points: W[5] },
        { id: "7",  textByLang: { en: "Fraction of the Lamb", el: "Κλάση του Αμνού" }, points: W[6] },
        { id: "8",  textByLang: { en: "Zeon", el: "Ζέον" }, points: W[7] },
        { id: "9",  textByLang: { en: "Commingling", el: "Ένωση των Τιμίων Δώρων" }, points: W[8] },
        { id: "10", textByLang: { en: "Holy Communion", el: "Θεία Κοινωνία" }, points: W[9] },
      ],
    },
    {
      id: "matins-parts-a",
      questionByLang: {
        en: "Name 10 major parts of Matins (Orthros)",
        el: "Ονομάστε 10 κύρια μέρη του Όρθρου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Hexapsalmos", el: "Εξάψαλμος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Great Litany", el: "Μεγάλη Συναπτή" }, points: W[1] },
        { id: "3",  textByLang: { en: "\"God is the Lord\"", el: "\"Θεός Κύριος\"" }, points: W[2] },
        { id: "4",  textByLang: { en: "Kathismata", el: "Καθίσματα" }, points: W[3] },
        { id: "5",  textByLang: { en: "Evlogetaria", el: "Ευλογητάρια" }, points: W[4] },
        { id: "6",  textByLang: { en: "Polyeleos", el: "Πολυέλεος" }, points: W[5] },
        { id: "7",  textByLang: { en: "Hypakoe", el: "Υπακοή" }, points: W[6] },
        { id: "8",  textByLang: { en: "Anabathmoi", el: "Αναβαθμοί" }, points: W[7] },
        { id: "9",  textByLang: { en: "Canon", el: "Κανών" }, points: W[8] },
        { id: "10", textByLang: { en: "Great Doxology", el: "Μεγάλη Δοξολογία" }, points: W[9] },
      ],
    },
    {
      id: "sunday-matins-elements-a",
      questionByLang: {
        en: "Name 10 Sunday Matins resurrectional elements",
        el: "Ονομάστε 10 αναστάσιμα στοιχεία του Κυριακάτικου Όρθρου",
      },
      answers: [
        { id: "1",  textByLang: { en: "Resurrection Apolytikion", el: "Αναστάσιμο Απολυτίκιο" }, points: W[0] },
        { id: "2",  textByLang: { en: "Resurrection Evlogetaria", el: "Αναστάσιμα Ευλογητάρια" }, points: W[1] },
        { id: "3",  textByLang: { en: "Hypakoe", el: "Υπακοή" }, points: W[2] },
        { id: "4",  textByLang: { en: "Anabathmoi", el: "Αναβαθμοί" }, points: W[3] },
        { id: "5",  textByLang: { en: "Prokeimenon", el: "Προκείμενον" }, points: W[4] },
        { id: "6",  textByLang: { en: "Eothinon Gospel", el: "Εωθινό Ευαγγέλιο" }, points: W[5] },
        { id: "7",  textByLang: { en: "Psalm 50", el: "Ψαλμός 50" }, points: W[6] },
        { id: "8",  textByLang: { en: "Resurrection Canon", el: "Αναστάσιμος Κανών" }, points: W[7] },
        { id: "9",  textByLang: { en: "Exaposteilarion", el: "Εξαποστειλάριον" }, points: W[8] },
        { id: "10", textByLang: { en: "Praises (Ainoi)", el: "Αίνοι" }, points: W[9] },
      ],
    },
    {
      id: "matins-biblical-canticles-a",
      questionByLang: {
        en: "Name 10 biblical canticles associated with Matins",
        el: "Ονομάστε 10 βιβλικές ωδές που συνδέονται με τον Όρθρο",
      },
      answers: [
        { id: "1",  textByLang: { en: "First Song of Moses", el: "Α΄ Ωδή Μωυσέως" }, points: W[0] },
        { id: "2",  textByLang: { en: "Second Song of Moses", el: "Β΄ Ωδή Μωυσέως" }, points: W[1] },
        { id: "3",  textByLang: { en: "Prayer of Hannah", el: "Προσευχή της Άννας" }, points: W[2] },
        { id: "4",  textByLang: { en: "Prayer of Habakkuk", el: "Προσευχή του Αββακούμ" }, points: W[3] },
        { id: "5",  textByLang: { en: "Prayer of Isaiah", el: "Προσευχή του Ησαΐα" }, points: W[4] },
        { id: "6",  textByLang: { en: "Prayer of Jonah", el: "Προσευχή του Ιωνά" }, points: W[5] },
        { id: "7",  textByLang: { en: "Prayer of the Three Holy Children", el: "Προσευχή των Τριών Παίδων" }, points: W[6] },
        { id: "8",  textByLang: { en: "Song of the Three Holy Children", el: "Ύμνος των Τριών Παίδων" }, points: W[7] },
        { id: "9",  textByLang: { en: "Magnificat", el: "Μεγαλύνει η ψυχή μου" }, points: W[8] },
        { id: "10", textByLang: { en: "Benedictus", el: "Ευλογητός Κύριος" }, points: W[9] },
      ],
    },
    {
      id: "matins-chant-elements-a",
      questionByLang: {
        en: "Name 10 chant elements or hymn types found in Matins",
        el: "Ονομάστε 10 ψαλτικά στοιχεία ή είδη ύμνων που βρίσκονται στον Όρθρο",
      },
      answers: [
        { id: "1",  textByLang: { en: "Apolytikion", el: "Απολυτίκιον" }, points: W[0] },
        { id: "2",  textByLang: { en: "Kathisma hymn", el: "Κάθισμα" }, points: W[1] },
        { id: "3",  textByLang: { en: "Hypakoe", el: "Υπακοή" }, points: W[2] },
        { id: "4",  textByLang: { en: "Kontakion", el: "Κοντάκιον" }, points: W[3] },
        { id: "5",  textByLang: { en: "Oikos", el: "Οίκος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Katavasia", el: "Καταβασία" }, points: W[5] },
        { id: "7",  textByLang: { en: "Exaposteilarion", el: "Εξαποστειλάριον" }, points: W[6] },
        { id: "8",  textByLang: { en: "Aposticha", el: "Απόστιχα" }, points: W[7] },
        { id: "9",  textByLang: { en: "Doxastikon", el: "Δοξαστικόν" }, points: W[8] },
        { id: "10", textByLang: { en: "Theotokion", el: "Θεοτοκίον" }, points: W[9] },
      ],
    },
    {
      id: "nt-epistles-topics",
      questionByLang: {
        en: "Name 10 theological topics emphasized in the epistles",
        el: "Ονομάστε 10 θεολογικά θέματα που τονίζονται στις επιστολές",
      },
      answers: [
        { id: "1",  textByLang: { en: "Grace",           el: "Χάρις" }, points: W[0] },
        { id: "2",  textByLang: { en: "Faith",           el: "Πίστη" }, points: W[1] },
        { id: "3",  textByLang: { en: "Works",           el: "Έργα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Law",             el: "Νόμος" }, points: W[3] },
        { id: "5",  textByLang: { en: "New Creation",    el: "Καινή Κτίσις" }, points: W[4] },
        { id: "6",  textByLang: { en: "Body of Christ",  el: "Σώμα Χριστού" }, points: W[5] },
        { id: "7",  textByLang: { en: "Adoption",        el: "Υιοθεσία" }, points: W[6] },
        { id: "8",  textByLang: { en: "Sanctification",  el: "Αγιασμός" }, points: W[7] },
        { id: "9",  textByLang: { en: "Perseverance",    el: "Υπομονή/Επιμονή" }, points: W[8] },
        { id: "10", textByLang: { en: "Unity",           el: "Ενότητα" }, points: W[9] },
      ],
    },
    {
      id: "church-orders",
      questionByLang: {
        en: "Name 10 terms related to church orders/offices",
        el: "Ονομάστε 10 όρους σχετικούς με την εκκλησιαστική τάξη/αξιώματα",
      },
      answers: [
        { id: "1",  textByLang: { en: "Bishop/Episkopos", el: "Επίσκοπος" }, points: W[0] },
        { id: "2",  textByLang: { en: "Presbyter",        el: "Πρεσβύτερος" }, points: W[1] },
        { id: "3",  textByLang: { en: "Deacon",           el: "Διάκονος" }, points: W[2] },
        { id: "4",  textByLang: { en: "Laity",            el: "Λαϊκοί" }, points: W[3] },
        { id: "5",  textByLang: { en: "Synod",            el: "Σύνοδος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Canon Law",        el: "Κανονικό Δίκαιο" }, points: W[5] },
        { id: "7",  textByLang: { en: "Monasticism",      el: "Μοναχισμός" }, points: W[6] },
        { id: "8",  textByLang: { en: "Patriarchate",     el: "Πατριαρχείο" }, points: W[7] },
        { id: "9",  textByLang: { en: "Diocese",          el: "Επισκοπή" }, points: W[8] },
        { id: "10", textByLang: { en: "Parish",           el: "Ενορία" }, points: W[9] },
      ],
    },
    {
      id: "monastic-virtues",
      questionByLang: {
        en: "Name 10 monastic virtues or practices",
        el: "Ονομάστε 10 μοναστικές αρετές ή πρακτικές",
      },
      answers: [
        { id: "1",  textByLang: { en: "Asceticism",  el: "Άσκηση" }, points: W[0] },
        { id: "2",  textByLang: { en: "Hesychasm",   el: "Ησυχασμός" }, points: W[1] },
        { id: "3",  textByLang: { en: "Obedience",   el: "Υπακοή" }, points: W[2] },
        { id: "4",  textByLang: { en: "Poverty",     el: "Πτωχεία" }, points: W[3] },
        { id: "5",  textByLang: { en: "Chastity",    el: "Αγνεία" }, points: W[4] },
        { id: "6",  textByLang: { en: "Vigil",       el: "Αγρυπνία" }, points: W[5] },
        { id: "7",  textByLang: { en: "Pilgrimage",  el: "Προσκύνημα" }, points: W[6] },
        { id: "8",  textByLang: { en: "Manual labor",el: "Χειρωνακτική εργασία" }, points: W[7] },
        { id: "9",  textByLang: { en: "Hospitality", el: "Φιλοξενία" }, points: W[8] },
        { id: "10", textByLang: { en: "Confession",  el: "Εξομολόγηση" }, points: W[9] },
      ],
    },
    {
      id: "greek-terms-theology",
      questionByLang: {
        en: "Name 10 key Greek theological terms",
        el: "Ονομάστε 10 βασικούς ελληνικούς θεολογικούς όρους",
      },
      answers: [
        { id: "1",  textByLang: { en: "Theosis",        el: "Θέωση" }, points: W[0] },
        { id: "2",  textByLang: { en: "Kenosis",        el: "Κένωση" }, points: W[1] },
        { id: "3",  textByLang: { en: "Oikonomia",      el: "Οικονομία" }, points: W[2] },
        { id: "4",  textByLang: { en: "Hypostasis",     el: "Υπόστασις" }, points: W[3] },
        { id: "5",  textByLang: { en: "Homoousios",     el: "Ομοούσιος" }, points: W[4] },
        { id: "6",  textByLang: { en: "Prosopon",       el: "Πρόσωπον" }, points: W[5] },
        { id: "7",  textByLang: { en: "Physis",         el: "Φύσις" }, points: W[6] },
        { id: "8",  textByLang: { en: "Energeia",       el: "Ενέργεια" }, points: W[7] },
        { id: "9",  textByLang: { en: "Synergia",       el: "Συνεργία" }, points: W[8] },
        { id: "10", textByLang: { en: "Anamnesis",      el: "Ανάμνησις" }, points: W[9] },
      ],
    },
    {
      id: "orthodox-icons",
      questionByLang: {
        en: "Name 10 well-known Orthodox icons (titles)",
        el: "Ονομάστε 10 γνωστές ορθόδοξες εικόνες (τίτλοι)",
      },
      answers: [
        { id: "1",  textByLang: { en: "Pantocrator",          el: "Παντοκράτωρ" }, points: W[0] },
        { id: "2",  textByLang: { en: "Theotokos Hodegetria", el: "Θεοτόκος Οδηγήτρια" }, points: W[1] },
        { id: "3",  textByLang: { en: "Theotokos Eleousa",    el: "Θεοτόκος Ελεούσα" }, points: W[2] },
        { id: "4",  textByLang: { en: "Nativity",             el: "Γέννησις" }, points: W[3] },
        { id: "5",  textByLang: { en: "Transfiguration",      el: "Μεταμόρφωσις" }, points: W[4] },
        { id: "6",  textByLang: { en: "Crucifixion",          el: "Σταύρωσις" }, points: W[5] },
        { id: "7",  textByLang: { en: "Resurrection",         el: "Ανάστασις" }, points: W[6] },
        { id: "8",  textByLang: { en: "Ascension",            el: "Ἀνάληψις" }, points: W[7] },
        { id: "9",  textByLang: { en: "Pentecost",            el: "Πεντηκοστή" }, points: W[8] },
        { id: "10", textByLang: { en: "Dormition",            el: "Κοίμησις" }, points: W[9] },
      ],
    },
  ];
  

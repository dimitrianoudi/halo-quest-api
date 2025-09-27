import type { QuestionSet } from "../types.js";

const W = [10,9,8,7,6,5,4,3,2,1];

// ---------- EASY (4) ----------
export const EXTRA_EASY_2: QuestionSet[] = [
  {
    id: "psalms-themes-a",
    questionByLang: {
      en: "Name 10 themes found in the Psalms",
      el: "Ονομάστε 10 θέματα που βρίσκονται στους Ψαλμούς"
    },
    answers: [
      { id: "1",  textByLang: { en: "Praise", el: "Αίνεση" }, points: W[0] },
      { id: "2",  textByLang: { en: "Thanksgiving", el: "Ευχαριστία" }, points: W[1] },
      { id: "3",  textByLang: { en: "Lament", el: "Θρήνος" }, points: W[2] },
      { id: "4",  textByLang: { en: "Trust", el: "Εμπιστοσύνη" }, points: W[3] },
      { id: "5",  textByLang: { en: "Wisdom", el: "Σοφία" }, points: W[4] },
      { id: "6",  textByLang: { en: "Royal", el: "Βασιλικοί" }, points: W[5] },
      { id: "7",  textByLang: { en: "Creation", el: "Δημιουργία" }, points: W[6] },
      { id: "8",  textByLang: { en: "Repentance", el: "Μετάνοια" }, points: W[7] },
      { id: "9",  textByLang: { en: "Deliverance", el: "Λύτρωση" }, points: W[8] },
      { id: "10", textByLang: { en: "Covenant", el: "Διαθήκη" }, points: W[9] }
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
  }
];

// ---------- MODERATE (3) ----------
export const EXTRA_MODERATE_2: QuestionSet[] = [
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
  }
];

// ---------- HIGH (3) ----------
export const EXTRA_HIGH_2: QuestionSet[] = [
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

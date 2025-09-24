import type { Difficulty, QuestionSet } from "../types.js";

const W = [10,9,8,7,6,5,4,3,2,1]; // default weights

export const BANK: Record<Difficulty, QuestionSet[]> = {
  easy: [
    {
      id: "nt-books",
      question: "Name 10 books of the New Testament",
      answers: [
        { id: "1", text: "Matthew", points: W[0] },
        { id: "2", text: "Mark", points: W[1] },
        { id: "3", text: "Luke", points: W[2] },
        { id: "4", text: "John", points: W[3] },
        { id: "5", text: "Acts", points: W[4] },
        { id: "6", text: "Romans", points: W[5] },
        { id: "7", text: "1 Corinthians", points: W[6] },
        { id: "8", text: "2 Corinthians", points: W[7] },
        { id: "9", text: "Galatians", points: W[8] },
        { id: "10", text: "Ephesians", points: W[9] }
      ]
    },
    {
      id: "virtues",
      question: "Name 10 Christian virtues",
      answers: [
        { id: "1", text: "Faith", points: W[0] },
        { id: "2", text: "Hope", points: W[1] },
        { id: "3", text: "Love", points: W[2] },
        { id: "4", text: "Prudence", points: W[3] },
        { id: "5", text: "Justice", points: W[4] },
        { id: "6", text: "Fortitude", points: W[5] },
        { id: "7", text: "Temperance", points: W[6] },
        { id: "8", text: "Humility", points: W[7] },
        { id: "9", text: "Patience", points: W[8] },
        { id: "10", text: "Charity", points: W[9] }
      ]
    }
  ],
  moderate: [
    {
      id: "fathers",
      question: "Name 10 Church Fathers",
      answers: [
        { id: "1", text: "Augustine", points: W[0] },
        { id: "2", text: "Athanasius", points: W[1] },
        { id: "3", text: "Jerome", points: W[2] },
        { id: "4", text: "Gregory of Nazianzus", points: W[3] },
        { id: "5", text: "Basil the Great", points: W[4] },
        { id: "6", text: "John Chrysostom", points: W[5] },
        { id: "7", text: "Irenaeus", points: W[6] },
        { id: "8", text: "Tertullian", points: W[7] },
        { id: "9", text: "Cyril of Alexandria", points: W[8] },
        { id: "10", text: "Origen", points: W[9] }
      ]
    },
    {
      id: "councils",
      question: "Name 10 Ecumenical Councils",
      answers: [
        { id: "1", text: "Nicaea I (325)", points: W[0] },
        { id: "2", text: "Constantinople I (381)", points: W[1] },
        { id: "3", text: "Ephesus (431)", points: W[2] },
        { id: "4", text: "Chalcedon (451)", points: W[3] },
        { id: "5", text: "Constantinople II (553)", points: W[4] },
        { id: "6", text: "Constantinople III (680–681)", points: W[5] },
        { id: "7", text: "Nicaea II (787)", points: W[6] },
        { id: "8", text: "Lateran IV (1215)", points: W[7] },
        { id: "9", text: "Trent (1545–1563)", points: W[8] },
        { id: "10", text: "Vatican II (1962–1965)", points: W[9] }
      ]
    }
  ],
  high: [
    {
      id: "concepts",
      question: "Name 10 key concepts in systematic theology",
      answers: [
        { id: "1", text: "Trinity", points: W[0] },
        { id: "2", text: "Incarnation", points: W[1] },
        { id: "3", text: "Atonement", points: W[2] },
        { id: "4", text: "Justification", points: W[3] },
        { id: "5", text: "Sanctification", points: W[4] },
        { id: "6", text: "Ecclesiology", points: W[5] },
        { id: "7", text: "Eschatology", points: W[6] },
        { id: "8", text: "Creation", points: W[7] },
        { id: "9", text: "Providence", points: W[8] },
        { id: "10", text: "Sacraments", points: W[9] }
      ]
    },
    {
      id: "post-1500",
      question: "Name 10 theologians after 1500",
      answers: [
        { id: "1", text: "Martin Luther", points: W[0] },
        { id: "2", text: "John Calvin", points: W[1] },
        { id: "3", text: "Karl Barth", points: W[2] },
        { id: "4", text: "Thomas Aquinas (earlier but influential)", points: W[3] },
        { id: "5", text: "John Henry Newman", points: W[4] },
        { id: "6", text: "Hans Urs von Balthasar", points: W[5] },
        { id: "7", text: "Jürgen Moltmann", points: W[6] },
        { id: "8", text: "Dietrich Bonhoeffer", points: W[7] },
        { id: "9", text: "Karl Rahner", points: W[8] },
        { id: "10", text: "N. T. Wright", points: W[9] }
      ]
    }
  ]
};

export default class UserData {
  constructor(generalInfo, activity, averageSessions, performance) {
    this.generalInfo = generalInfo;
    this._score = this.generalInfo.score || this.generalInfo.todayScore;
    this.activity = activity;
    this.averageSessions = averageSessions;
    this._performance = performance;
  }

  set score(score) {
    this._score = score;
  }

  get score() {
    return [
      {
        name: "",
        todayScore: 100, // Utilisez `todayScore` pour correspondre à `dataKey` dans RadialBar
        fill: "#ffffff",
      },
      {
        name: "Score",
        todayScore: this._score * 100, // Utilisez `todayScore` pour correspondre à `dataKey`
        fill: "#ff0000",
      },
    ];
  }

  set performance(performance) {
    this._performance = performance;
  }

  get performance() {
    return {
      kinds: this._performance.kind,
      data: this._performance.data,
    };
  }
}

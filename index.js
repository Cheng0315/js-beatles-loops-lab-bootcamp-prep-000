function theBeatlesPlay(MusicianArr, instArr) {
  var resultArr = [];

  for (var i = 0; i < musicianArr.length; i++) {
    var musician = musicianArr[i];
    var instrument = instArr[i];
    var str = `${musician} plays ${instrument}`;

    resultArr.push(str);
  }

  return resultArr;
}

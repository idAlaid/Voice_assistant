  // Создаем распознаватель
  var recognizer = new webkitSpeechRecognition(); 

  // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
  recognizer.interimResults = true;

  // Какой язык будем распознавать?
  recognizer.lang = 'ru-Ru';
  var utterance;

  // Используем колбек для обработки результатов
  recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
        if(result[0].transcript==='главная')
        {
      alert(result[0].transcript);
      document.location.href = "http://localhost:8383/Hackaton/index.html";
        }
        else if(result[0].transcript==='профиль')
        {
      alert(result[0].transcript);
      document.location.href = "http://localhost:8383/Hackaton/profile.html";
        }
        else if(result[0].transcript==='вакансии')
        {
      alert(result[0].transcript);
      document.location.href = "http://localhost:8383/Hackaton/job.html";
        }
        else{
            utterance= new SpeechSynthesisUtterance('Такой команды нет, вот список доступных команд: главная, профиль, вакансии');
            talkError ();
        }
    } else {
      console.log('Промежуточный результат: ', result[0].transcript);
    }
  };

  function speech () {
    // Начинаем слушать микрофон и распознавать голос
    recognizer.start();
  }

  var synth = window.speechSynthesis;
  function talk () {
      utterance= new SpeechSynthesisUtterance('Вот список доступных команд: главная, профиль, вакансии');
    synth.speak (utterance);
  }
  function talkError () {
    synth.speak (utterance);
  }

  function stop () {
    synth.pause();
  }
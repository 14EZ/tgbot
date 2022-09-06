const keyboard1 = [
  [
    {
      text: 'Куда идти голосовать в Куркино?',
      callback_data: 'where'
    }
  ],
  [
      {
        text: 'Кандидаты команды жителей Куркино',
        callback_data: 'info'
      }
  ],
  [
      {
        text: 'Чат нашего района Куркино',
        url: 'https://t.me/UE8QyXL3QS5iZDcy'
      }
  ]
];

  const keyboard2 = [
  [
    {
      text: 'Воротынская',
      callback_data: 'vor'
    }
  ],
  [                                                                                                                           
      {
        text: 'Куркинское шоссе',
        callback_data: 'kur'
      }
  ],
  [                                                                                                                           
    {
      text: 'Родионовская',
      callback_data: 'rod'
    }
],
[                                                                                                                           
  {
    text: 'Соловьиная Роща',
    callback_data: 'sol'
  }
],
[                                                                                                                           
  {
    text: 'Захарьинская',
    callback_data: 'zah'
  }
],
[                                                                                                                           
  {
    text: 'Соколово-Мещерская',
    callback_data: 'some'
  }
],
[                                                                                                                           
  {
    text: 'Ландышевая',
    callback_data: 'lan'
  }
],
[                                                                                                                           
  {
    text: 'Новогорская',
    callback_data: 'nov'
  }
],
[                                                                                                                           
  {
    text: 'Новокуркинское шоссе',
    callback_data: 'novkur'
  }
],
[                                                                                                                           
  {
    text: 'Юровская',
    callback_data: 'uro'
  }
],
[                                                                                                                           
  {
    text: 'Машкинское шоссе',
    callback_data: 'mash'
  }
],
  ];

  const keyboard3 = [
    [
      {
        text: 'Грищенко Дмитрий Сергеевич',
        callback_data: 'grish'
      }
    ],
    [
      {
        text: 'Лахина Ольга Павловна',
        callback_data: 'lah'
      }
    ],
    [
      {
        text: 'Савельев Владислав Викторович',
        callback_data: 'sav'
      }
    ],
    [
      {
        text: 'Светиков Илья Анатольевич',
        callback_data: 'svet'
      }
    ],
    [
      {
        text: 'Лукасик Анна Владиславовна',
        callback_data: 'luka'
      }
    ],
    [
      {
        text: 'Свергун Наталья Ивановна',
        callback_data: 'sverg'
      }
    ],
    [
      {
        text: 'Сидельникова Елена Васильевна',
        callback_data: 'sid'
      }
    ],
    [
      {
        text: 'Шумидуб Дмитрий Павлович',
        callback_data: 'shum'
      }
    ],
  ];

module.exports = {keyboard1, keyboard2, keyboard3};

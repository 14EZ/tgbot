const KeyboardKeys = {
    where: {
        key: 'where',
        text: '📌В этом разделе вы сможете найти свой избирательный участок для голосования (УИК) по адресу вашей регистрации (прописки). \n ❗️Вам нужно выбрать вашу улицу и номер дома через кнопки на экране, а я подскажу Вам куда, когда и в какое время приходить. \n До встречи на избирательных участках!'
    },
    info: {
        key: 'info',
        text: 'Про какого кандидата Вы хотите узнать?'
    },
}

const District2905Keys = ['vor', 'kur', 'rod', 'sol', 'zah', 'some', 'lan', 'nov', 'novkur', 'uro', 'mash'];
const Vor2905Adress = ['2к1', '3', '4к1', '5', '6к1', '7', '7к1', '7к2', '7к3', '7к4', '7к5', '8/1', '9', '9к1', '9к2', '9к3', '9к4', '9к5', '10', '10к1', '11', '11к1', '11к2', '11к3', '12', '13/2', '14'];
const Kur2905Adress = ['32', '34', '36', '38', '40', '40к1', '40к2', '40к3', '40к4', '42', '42к1', '42к2', '44', '48', '48к1'];
const Sol2905Adress = ['2', '4'];

const District2906Keys = ['kur', 'lan'];
const Kur2906Adress = ['17', '17к1', '17к4', '17к5', '17к6', '17к7', '17к8', '17к9', '17к11', '27', '27к1', '27к2', '27к3', '27к4', '27к5', '27к6', '27к7', '27к8', '27к9', '27к10', '27к11', '27к12', '27к14', '27к15', '27к16', '27к17', '27к18', '27к19', '27к20', '27к21', '33в29'];
const Lan2906Adress = ['12', '12к1', '14', '14к1', '14к2', '14к3'];

const District2907Keys = ['vor', 'some', 'nov', 'zah', 'kur', 'rod'];
const Vor2907Adress = ['15', '16', '16к1', '19', '23', '25'];
const Some2907Adress = ['2', '2к1', '4', '4к2', '6/19'];
const Nov2907Adress = ['1', '3', '4с1', '5', '6', '7', '7с1', '7Б', '8', '9', '10', '10с1', '10с2', '11', '11с1', '12', '13', '14', '14с1', '15', '16', '16с1', '17', '18', '19с1', '19А', '20', '20А', '21', '22', '23', '24', '24с1', '25', '26', '27', '27к1', '28', '29А', '29с1', '29с2', '30', '31', '31с1', '32', '32А', '33', '34', '36', '37с3', '38', '41', '41А', '41с1', '41Б', '42', '42с1', '43', '43с1', '43А', '43Ас1', '43Б', '44', '45', '46', '47', '48', '49', '49А', '49Б', '50', '51', '52', '52с1', '53', '54', '55', '55с1', '56', '56А', '57', '58с1', '59', '59Аc1', '60', '61', '62', '63', '64', '64с1', '64А', '64Б', '66', '68', '68А', '70', '72', '74с2'];
const Zah2907Adress = ['1', '2', '2', '2с1', '2А', '2Б', '4', '4А', '5', '5А', '5Ас1', '5Бс1', '6', '7', '8с1', '13', '13Б', '15', '15А', '15Ас1', '17', '17А', '17Б', '19', '21'];
const Kur2907Adress = ['52', '52с1', '54', '54А', '54Б', '56', '56с1', '58', '58с1', '60', '60с1', '60Ас1', '60Ас2', '60Б/1', '64', '66', '68', '68с1', '70', '70с1', '72', '74', '76', '78', '78с1', '84', '86', '88', '90', '92', '94', '96', '100', '102с1', '104', '106', '106к1', '108', '110', '110А', '118'];
const Rod2907Adress = ['16', '16к3', '16к4', '16к5', '16к6', '18', '18к1', '18к2'];

const District2908Keys = ['rod', 'sol', 'vor'];
const Rod2908Adress = ['2', '2к1', '3', '5', '7', '9', '11', '13', '13к1', '13к2', '13к3', '13к4', '13к5', '15', '15к1', '15к2', '15к3', '15к4', '15к5', '15к6', '17', '17к1', '17к2', '17к3', '17к4', '17к5', '17к6', '17к7'];
const Sol2908Adress = ['3', '3к1', '9', '9к1', '11', '11к1', '12/4'];
const Vor2908Adress = ['12к1'];

const District2909Keys = ['sol'];
const Sol2909Adress = ['6', '8', '8к2', '10'];

const District2910Keys = ['rod', 'some', 'sol', 'novkur'];
const Rod2910Adress = ['10', '10к1', '12', '12к1', '14'];
const Some2910Adress = ['14', '14к1', '16/114'];
const Novkur2910Adress = ['23/15'];

const District2911Keys = ['novkur', 'nov', 'uro'];
const Novkur2911Adress = ['25к1', '25к2', '27', '31', '33', '35к1', '35к2'];
const Nov2911Adress = ['69', '69к1', '69к2', '69к3', '71к1', '71к2', '71к3', '71к4', '71к5', '73', '73к1', '73к2', '73к3', '73к4', '73к5'];
const Uro2911Adress = ['2А', '3', '4', '4с1', '6', '8', '9', '9к1', '10', '10А', '11А', '12', '13', '14', '14с1', '15', '15c1', '16', '17', '18', '19', '20с1', '21', '22', '23', '24', '25', '26', '27', '27с2', '28', '30', '31', '32', '32с1', '33', '34', '35', '36', '39', '39А', '40', '40А', '41Ас1', '42', '43', '43с1', '43с2', '44', '45с1', '45А', '47', '49', '51', '52', '53', '55', '57', '59', '59А', '61', '63', '65', '67', '69', '71', '92', '92к1', '92к2', '92к3', '82к4', '92к5', '92к6', '92к7', '92к8', '92к9', '92к10', '92к11', '92к12', '92к13', '92к14', '92к15', '92к16', '92к17', '92к18', '92к19', '92к20', '92к21', '92к22', '92к23', '92к24', '92к25', '92к26', '92к27', '93к2', '93к3', '93к4', '93к5', '93к6', '93к7', '93к8', '93к9', '93к10', '93к11', '93к12', '93к13', '93к14', '93к15', '93к16', '93к17', '93к18', '93к19', '93к20', '93к21', '93к22', '93к23', '93к24', '93к25', '93к28', '93к31', '93к33', '93к34', '93к35', '93к36', '93к40', '94', '94к1', '94к2', '94к3', '94к4', '94к5', '94к6', '94к7', '95', '95к1', '95к2', '95к3'];

const District2912Keys = ['novkur', 'some'];
const Novkur2912Adress = ['35', '43', '45', '47'];
const Some2912Adress = ['26', '26к1', '28', '30', '32', '34', '36'];

const District2913Keys = ['mash', 'novkur', 'some'];
const Mash2913Adress = ['23', '23к2', '23к3', '23к4', '23к5', '23к6', '23к7', '23к8', '23к9', '23к10', '23к11', '23к12', '23к13', '23к14', '23к15', '23к16', '23к17', '23к18', '23к19', '23к20', '23к21', '23к23', '23к25', '23к27', '23к29', '23к31', '23к33', '23к35', '23к37'];
const Novkur2913Adress = ['51'];
const Some2913Adress = ['25', '25к1', '25к3', '25к4', '25к5', '25к6', '25к7', '25к8', '25к9', '25к10', '25к11', '25к13', '25к14', '25к15', '25к16', '25к17', '25к20', '25к21', '25к22', '25к23', '25к25', '25к26', '27к3', '27к4', '27к5', '29', '29к1', '29к2', '29к3', '29к4', '29к5', '29к7', '29к8', '29к9', '29к10', '29к11', '29к12', '29к13', '29к14', '29к15', '29к16', '29к17', '29к18', '29к19', '29к20', '29к21', '29к22', '29к23', '29к25', '29к26', '29к27', '29к28', '29к29', '29к30', '29к31', '29к32', '29к33', '29к34', '29к35', '31'];

const Sovet = ['grish', 'lah', 'sav', 'svet', 'luka', 'sverg', 'sid', 'shum'];

const Candidates = {
    grish: {
        text: '✅ Грищенко Дмитрий Сергеевич \n (07.02.1996) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2003 года \n \n 🔍 Образование \n Федеральное государственное бюджетное образовательное учреждение высшего образования «Российский государственный гуманитарный университет» \n \n 🔍 Работа/род занятий \n Юрист в АО «Загрузка», публицист-культуролог, победитель литературных конкурсов МГО Союза писателей России  \n \n 🔍 Семейное положение \n Не женат \n \n 🔍 Принадлежность к партиям \n Беспартийный',
        img: './img/grish.jpg'
    },
    lah: {
        text: '✅ Лахина Ольга Павловна \n (27.07.1967) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2005 года \n \n 🔍 Образование \n Московский государственный университет им. М.В. Ломоносова \n \n 🔍 Работа/род занятий \n Организатор художественных выставок, Волонтёр зоозащиты, индивидуальный предприниматель \n \n 🔍 Семейное положение \n Имеет троих детей \n \n 🔍 Принадлежность к партиям \n Беспартийная',
        img: './img/lah.jpg'
    },
    sav: {
        text: '✅ Савельев Владислав Викторович \n (31.12.1969) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2004 года \n \n 🔍 Образование \n Московский институт электронного машиностроения, Инженер-системотехник \n \n 🔍 Работа/род занятий \n Генеральный директор ООО "Современные проектные решения"  \n \n 🔍 Семейное положение \n Женат, многодетный отец, воспитывает трех сыновей и двух дочерей \n \n 🔍 Принадлежность к партиям \n Беспартийный',
        img: './img/sav.jpg'
    },
    svet: {
        text: '✅ Светиков Илья Анатольевич \n (09.12.1977) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2003 года \n \n 🔍 Образование \n МИФИ (инженер-физик), Финансовая академия при Правительстве РФ (финансовый менеджер), Университет СИНЕРГИЯ (Государственное и муниципальное управление)  \n \n 🔍 Работа/род занятий \n Глава муниципального округа Куркино в городе Москве   \n \n 🔍 Семейное положение \n Женат, воспитывает сына и дочь \n \n 🔍 Принадлежность к партиям \n Беспартийный',
        img: './img/svet.jpg'
    },
    luka: {
        text: '✅ Лукасик Анна Владиславовна \n (30.09.1974) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2008 года \n \n 🔍 Образование \n Московский государственный университет им. М.В. Ломоносова, психолог, кандидат психологических наук  \n \n 🔍 Работа/род занятий \n Председатель совета МКД №25 по ул. Соколово-Мещерская   \n \n 🔍 Семейное положение \n Замужем, воспитывает дочь \n \n 🔍 Принадлежность к партиям \n Беспартийная',
        img: './img/luka.jpg'
    },
    sverg: {
        text: '✅ Свергун Наталья Ивановна \n (05.10.1979) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2005 года \n \n 🔍 Образование \n Донской государственный технический университет (инженер-технолог), МГУ им. М.В.Ломоносова (экономический факультет, управление персоналом современной организации)  \n \n 🔍 Работа/род занятий \nЧлен Совета МКД №51 По Новокуркинскому шоссе   \n \n 🔍 Семейное положение \n Замужем, воспитывает сына \n \n 🔍 Принадлежность к партиям \n Беспартийная',
        img: './img/sverg.jpg'
    },
    sid: {
        text: '✅ Сидельникова Елена Васильевна \n (07.01.1972) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2003 года \n \n 🔍 Образование \n Высшее экономическое (РГАУ МСХА им К.А.Тимирязева) и высшее техническое (МГАПБ), по профессии бухгалтер/аудитор  \n \n 🔍 Работа/род занятий \n Председатель совета МКД №26/1 По ул. Соколово-Мещерская   \n \n 🔍 Семейное положение \n Замужем, многодетная мама трёх сыновей \n \n 🔍 Принадлежность к партиям \n Беспартийная',
        img: './img/sid.jpg'
    },
    shum: {
        text: '✅ Шумидуб Дмитрий Павлович \n (21.06.1972) \n \n 🔍 Живёт ли в Куркино? \n Да, с 2012 года \n \n 🔍 Образование \n Государственный университет по землеустройству  \n \n 🔍 Работа/род занятий \n Архитектор, член Союза Дизайнеров России, Индивидуальный Предприниматель   \n \n 🔍 Семейное положение \n Женат, многодетный отец, воспитывает двух дочерей и двух сыновей \n \n 🔍 Принадлежность к партиям \n Беспартийный',
        img: './img/shum.jpg'
    },
}
module.exports = {KeyboardKeys, District2905Keys, Vor2905Adress, Kur2905Adress, Sol2905Adress, Kur2906Adress, Lan2906Adress, Kur2907Adress, Vor2907Adress, Vor2908Adress, Rod2907Adress, Rod2908Adress, Rod2910Adress, Some2907Adress, Some2910Adress, Nov2907Adress, Nov2911Adress, Zah2907Adress, Sol2908Adress, Sol2909Adress, Novkur2910Adress, Novkur2911Adress, Uro2911Adress, Novkur2912Adress, Some2912Adress, Mash2913Adress, Novkur2913Adress, Some2913Adress, Sovet, Candidates };
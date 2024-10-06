import { createSlice } from "@reduxjs/toolkit";


const postSlice = createSlice({
    name:'post',
    initialState:{
        allPosts:[
            {
                title:'ГЛОБАЛ ИҚЛИМ ЎЗГАРИШИ ШАРОИТИДА АМАРАНT ЎСИМЛИГИНИ ЕТИШТИРИШ ВА ҚАЙТА ИШЛАШ САМАРАДОРЛИГИ',
                linkPdf:'https://drive.google.com/file/d/1JUAS9OKh4zQC5sjHmeczrNcILDQnaOux/view?usp=sharing',
                img:`url(./post/amarant.jpg)`,
                image:`./post/amarant.jpg`,
                author:['Халилова Саида Усмонжановна','Турғунов Азизибек Нормат уғли'],
                description:`Аннотация. Ушбу мақолада сув танқислиги, тупроқ структурасини
                ўзгариб бориши ва қишлоқ хўжалиги ўртасидаги ўзаро боғлиқлик уларнинг
                бир-бирига қандай таъсир қилишини таҳлил қилиш, ушбу муаммоларни ҳал
                қилишнинг янги стратегияларини ишлаб чиқиш билан биргаликда географик
                жиҳатдан мақбул ўсимликларни танлаб экишга асосланади. Қолаверса
                ресурстежамкор технологиялардан фойдаланиш, суғориш ва ўғитлашда мақбул
                меъёрни аниқлаш, инновацион ёндашув билан глобал қурғоқчилик ва тупроқ
                унумдорлигига таъсир этувчи омилларни бартараф этиш, махаллий ва доривор
                ўсимликлардан хавфсиз озиқ-овқат хом-ашёларини олиш мақсади илгари
                сурилди.`
            },
            {
                title:'УЗУМНИНГ ТОВАРБОПЛИГИ, ВАЗН ЙЎҚОТИШИ ВА САҚЛАШ МУДДАТИНИ АНИҚЛАШ УСУЛИ',
                linkPdf:'https://drive.google.com/file/d/1LyAdvKWZxdg9YfYz8dpFUlwB4_39rPm7/view?usp=sharing',
                img:`url(./post/grapes.jpg)`,
                image:`./post/grapes.jpg`,
                author:['Юсупов Нурали Шералиевич','Бозарова Гулноза Каримжон кизи','Юсупова Навруза Равшанбек қизи','Қурбонов Улуғбек Фарход ўғли'],
                description:`Аннотация: Мақола Фарғона вилоятида етиштирилган узумнинг
                товарбоплиги, вазн йўқотиши ва сақлаш муддатини аниқлаш ва сақлашга
                яроқлий узум навларини аниқлаш усулларини ўрганишдан иборат.`

            },
            {
                title:'МАЙМУНЖОН ВА МАЛИНА КЎЧАТЛАРИНИ ЯРИМ ЁГОЧЛАНГАН ҚАЛАМЧАЛАРНИНГ ИЛДИЗ ОТИШИГА СТИМУЛИЯТОРЛАРНИ ТАЪСИРИ',
                linkPdf:'https://drive.google.com/file/d/15QOMGDQYgOjfLMpbxFFi2e61us7JRExE/view?usp=sharing',
                img:`url(./post/raspberry.jpg)`,
                image:`./post/raspberry.jpg`,
                author:['Валиева Шоира Абдивосиовна'],
                description:`Ушбу маколадa республикамизга кириб келаётган ва
                иқлимлаштиришдан ўтган резавор мевалар кўчатларини тайёрлашда стимулятор
                ва субстратларнинг ахамияти бир нечта усуллари, уларнинг афзаллик томонлари
                келтириб ўтилган.
                Хар бир усулнинг ижобий ва камчилик томонлари кенг ёритилиб ўтилган.
                Шу билан бирга бугунги кунда мевачилик сохасининг иқтисодий
                самарадорлигини ошириш ва мевали ўсимликлар турлари ассортиментини
                кенгайтириш асосида аҳоли озиқ-овқат хавфсизлигини таъминлаш ва
                витаминларга бой бўлган сифатли меваларга бўлган таълабни қондириш бўйича
                қатор илмий ва амалий ишлар олиб борилмоқда. Республикамиз ва дунё
                хамжамияти томонидан озиқ-овқат хавфсизлиги ва ахолини сифатли озиқ-
                овкатларига бўлган таълабини қондиришда, аввалом бор боғлар ва
                плантацияларни яратилиши шартлиги ва ушбу плантациялар учун соглом
                сифатли кўчат етиштириш кераклиги таъкидлаб ўтилган.
                Резавор мева бўлган маймунжон ва малина навларини ярим ёғочланган
                қаламчалари корневинда (назорат), Янтарная (Бурштиновая) кислотасининг
                ишчи эритмасида, Radifarm стимуляторнинг ишчи эритмасида, Giren Belt
                стимуляторнинг ишчи эритмасида маймунжон ва малина қаламчаларда илдиз
                отиш кўрсаткичлари аникланган.`
            },{
                title:'ФОРМИРОВАНИЕ СТИМУЛ-ЧУВСТВИТЕЛЬНЫХ НАНОКОНТЕЙНЕРОВ МИКРОГЕЛЬ-ЛИПОСОМЫ И ИЗУЧЕНИЕ ИХ СВОЙСТВ.',
                linkPdf:'https://drive.google.com/file/d/1sQXxNj_Y0gw3BPmcG7FegFLPZObISiUk/view?usp=sharing',
                img:`url(./post/formmik.jpg)`,
                image:`./post/formmik.jpg`,
                author:['Бозарова Гулноза Каримжон кизи','Юсупов Нурали Шералиевич'],
                description:`Аннотация: в этой статье проводится исследование по формированию
                стимул-чувствительных наноконтейнеров микрогель-липосомы и изучение их
                свойств. Прежде всего проводится исследование по влиянию поверхностной
                плотности заряда и размера липосом на свойства комплексов микрогель-
                липосомы. Для достижения цели исследуется агрегация в системе микрогель-
                липосомы; высвобождение веществ из липосом, адсорбированных на микрогеле
                при 25 и 50 С; также устойчивость в водно-солевых средах.`

            },{
                title:'СПОСОБЫ ХРАНЕНИЯ РАЗНЫХ СТОЛОВЫХ СОРТОВ ВИНОГРАДА ОТ МИКРОБИОЛОГИЧЕСКОГО ВОЗДЕЙСТВИЯ ПРИ ДЛИТЕЛЬНОМ ХРАНЕНИИ.',
                linkPdf:'https://drive.google.com/file/d/1E7d9l7mKibX1yHmINnDsH3Cuvd5_Ohtj/view?usp=sharing',
                img:`url(./post/vinog.jpg)`,
                image:`./post/vinog.jpg`,
                author:['Юсупов Нурали Шералиевич','Бозарова Гулноза Каримжон кизи','Юсупова Навруза Равшанбек қизи'],
                description:`Аннотация. В этой статье рассматривается воздействие влажности и
                температуры воздуха на микробиологические изменения, происходящие в
                процессе транспортирвоки, а также при длительном классическим и
                современном способами хранения. Подбирается оптимальная температура,
                влажность воздуха и применяется защитная бумага, пропитанная
                метабисульфатом натрия для удлинения срока хранения разных столовых сортов
                винограда широко распространённых в Ферганской области республики
                Узбекистан.`

            },{
                title:'РАЗРАБОТКА УСЛОВИЙ СТАБИЛИЗАЦИИ ИММУНОГЛОБУЛИНОВ В СИСТЕМЕ RPR-ТЕСТОВ НА СИФИЛИС',
                linkPdf:'https://drive.google.com/file/d/180L-zVDaWzAc1S2RiASAR9ZbPh4yWuWa/view?usp=sharing',
                img:`url(./post/molek.jpg)`,
                image:`./post/molek.jpg`,
                author:['Юсупов Нурали Шералиевич','Бозарова Гулноза Каримжон кизи','Юсупова Навруза Равшанбек қизи'],
                description:`Аннотация: в статье рассмотрены вопросы изучения условий
                стабилизации иммуноглобулинов в системе RPR-теста на сифилис. Проведены
                экспериментальные исследования по стабилизации иммуноглобулинов в
                исследуемых образцах.`

            },{
                title:'ВЛИЯНИЕ ТЯЖЕЛЫХ МЕТАЛЛОВ (Ni, Zn и Cd) НА РОСТОВЫЕ ПРОЦЕССЫ КАРТОФЕЛЯ СОРТА ДЕЗИРЕ',
                linkPdf:'https://drive.google.com/file/d/19b3v3TAbBNauVOJPSwkLDsnet3-rR-Bm/view?usp=sharing',
                img:`url(./post/potata.jpg)`,
                image:`./post/potata.jpg`,
                author:['Юсупов Нурали Шералиевич','Бозарова Гулноза Каримжон кизи','Юсупова Навруза Равшанбек қизи'],
                description:`Аннотация: в статье рассматривается влияние тяжёлых металлов Ni, Zn и
                Cd на ростовые процессы и физиологические развития картофеля Дезире с
                применением микрочеренкового метода в питательной среде Мурасиге и Скуга,
                с разными концентрациями солей цинка, никеля и кадмия в культуре in vitro.`

            },{
                title:'ҚУРИТИШБОП ОЛХЎРИ НАВЛАРИНИНГ ТЕХНОЛОГИК ХУСУСИЯТЛАРИ ВА БИОКИМЁВИЙ ТАРКИБИНИ ТАҲЛИЛ ҚИЛИШ',
                linkPdf:'https://drive.google.com/file/d/1Nh6wLIJ5iEl-RKj66tzyllTI1-cuREu-/view?usp=sharing',
                img:`url(./post/plum.jpg)`,
                image:`./post/plum.jpg`,
                author:['Исламов Соҳиб Яхшибекович','Эрмакова Жамилахон Мухаммадовна'],
                description:`Аннотация. Мазкур мақолада қуритишбоп олхўри навларинининг
                технологик хусусиятлари ва биокимёвий таркибини ўрганиш бўйича
                тадқиқотлар натижалари берилган. Бу мақолада, тажрибалар учун танлаб
                олинган қуритишбоп олхўри навларининг асосий кўрсаткичлари таҳлил
                қилинган ҳамда тадқиот натижасида илмий асосланган хулосалар берилган.`

            },{
                title:'ҚУРИТИШБОП ОЛХЎРИ НАВЛАРИНИ АГРОБИОЛОГИК ХУСУСИЯТЛАРИНИНГ ТАҲЛИЛИ',
                linkPdf:'https://drive.google.com/file/d/17ao8kSXw-fN_ZKpUfk1vM3qiS4SMMmqD/view?usp=sharing',
                img:`url(./post/driedplum.jpg)`,
                image:`./post/driedplum.jpg`,
                author:['Исламов Соҳиб Яхшибекович','Эрмакова Жамилахон Мухаммадовна'],
                description:`Аннотация. Мазкур мақолада қуритишбоп олхўри навларинининг
                технологик хусусиятлари ва биокимёвий таркибини ўрганиш бўйича
                тадқиқотлар натижалари берилган. Бу мақолада, тажрибалар учун танлаб
                олинган қуритишбоп олхўри навларининг асосий кўрсаткичлари таҳлил
                қилинган ҳамда тадқиот натижасида илмий асосланган хулосалар берилган.`

            },{
                title:'ҚУРИТИШБОП ЎРИК НАВЛАРИНИ ҚУРИТИШДА ДАСТЛАБКИ ИШЛОВ БЕРИШНИ ТАКОМИЛЛАШТИРИШ',
                linkPdf:'https://drive.google.com/file/d/16xj61O97cXoDxem3KtQiGjWMRjC95dka/view?usp=sharing',
                img:`url(./post/abrocos.jpg)`,
                image:`./post/abrocos.jpg`,
                author:['Эрмакова Жамилахон Мухаммадовна'],
                description:`Аннотация. Бу мақолада қуритишбоп ўрик навлари ҳосилини штабел
                усулида қуритганда ишқор билан ишлов беришнинг маҳсулот сифати ва
                жараённинг жаддаллигига таъсирини ўрганиш бўйича тажрибалар
                натижалари таҳлил қилиб чиқилган. Тажрибалар натижасида қуритишбоп
                ўрик навларини штабел усулида қуритилгандан кейин унинг органолептик
                хусусиятларини баҳолаш учун муҳим бўлган кўрсаткичларнинг мезонлари
                ўрганилган. Тадқиқот натижасида илмий асосланган хулосалар баён қилинган.`

            },{
                title:'1-MCP ETILEN INGIBITORI BILAN ISHLOV BERILGAN BEHI MEVASINI SAQLASHDA SIFAT O‘ZGARISHLARI',
                linkPdf:'https://drive.google.com/file/d/1QujkrMko8IX8jcajw73SPrIUeuoCcCVG/view?usp=sharing',
                img:`url(./post/quince.jpg)`,
                image:`./post/quince.jpg`,
                author:['Uzoqov Islom Toshpulat o‘g‘li','Turg‘unov Azizbek Normat o‘g‘li'],
                description:`Annotatsiya. Meva-sabzavotchilik xo‘jaligining muvaffaqiyati nafaqat yuqori
                hosil, balki ularni asrab-avaylash qobiliyati bilan ham belgilanadi. Yaroqlilik
                muddatini yaxshilash saqlash va tashish paytida yo‘qotishlarni kamaytiradi. 35% gacha
                vazn yo‘qotish nafas olish paytida suv yo‘qotilishi tufayli sodir bo‘ladi. Har bir meva
                va sabzavot turi uchun ruxsat etilgan namlikni yo‘qotish normasi mavjud. Agar
                me’yordan oshib ketgan bo‘lsa, mahsulot iste’mol sifatini yo‘qotadi va uni sotish
                mumkin emas. Kasallik tufayli yo‘qotishlar 100% ga yetishi mumkin. Mikozlar va
                bakterial infektsiyalar chirishga va mog‘orga olib keladi. Mexanik shikastlanish ham
                yo‘qotishlarning sabablaridan biridir. Ayniqsa, saqlash oxirida va tashish paytida.
                Sabzavotlar va mevalar yumshoqroq bo‘lib, kuchini yo‘qotadi. Ushbu maqolada behi
                mevasini 1-MCP etilen ingibitori bilan saqlashning samodorligi aniqlashga oid
                tadqiqot natijalari keltirilgan.`

            },{
                title:'XORAZM VILOYATI SHAROITIDA NOK KO‘CHATLARINI YETISHTIRISH TEXNOLOGIYASI TAKOMILLASHTIRISH',
                linkPdf:'https://drive.google.com/file/d/1bYJp6AvBtZ0Ot3FzCPihZv1PAQ3WvId-/view?usp=sharing',
                img:`url(./post/pear.jpg)`,
                image:`./post/pear.jpg`,
                author:['Botirov Alisher Erkinovich q.x.f.f.d(phD)','Saporbayev Ko‘palboy','Ro‘zmetov Anvarbek'],
                description:`Annotatsiya: Nok ko‘chatlarini urug’idan ekib ko‘paytiriladi ammo uni bir
                qancha ularlari mavjud ko‘paytirish uchun ularni eng asosiysi bu vegetativ o‘rganlari
                yordamida ko‘paytirish bo‘lib chunki bu ona organizmni o‘zi hisoblanadi. Vegetativ
                ko‘paytirish generativ usulga qaraganda tez bo‘ladi generativ ko‘paytirishda faqat
                yangi nav yaratish uchun ishlatiladi lekin buning uchun bir necha o‘n yil vaqt sarflanadi
                vegetativda esa faqat ona belgilarini nomoyon etadi. Generativda ham otani ham onani
                yaxshi belgilarini o‘zida mujassam etgan yangi organizm vujudga keledi bu organizm
                ota-onaga qaraganda kuchli hayotchan bo‘ladi. O‘simlikning o‘sib rivojlanishiga ekish
                sxemasi va payvandtaglarni ta’sirini o‘rganiladi.`

            },{
                title:'RESPUBLIKAMIZ SHAROITIDA QOVUN DALALARIDA ZAMBURUG‘LAR QO‘ZG‘ATADIGAN KASALLIKLARNING O‘RGANILGANLIK DARAJASI VA HOZIRGI HOLATI',
                linkPdf:'https://drive.google.com/file/d/1IpI_DsIJKKFAKmg6mCSsu3vbeyy7hQkd/view?usp=sharing',
                img:`url(./post/melon.jpg)`,
                image:`./post/melon.jpg`,
                author:['Shomirzoyev Asliddin Avazovich','Raxmonov Ubaydullo Normamadovich2','Turg‘unov Azizbek Normat o‘g‘li'],
                description:`Annotatsiya. Qovun dalalarida o‘simliklarning vegetatsiya davrida qovunlarni
                yig‘ib olgungacha kuzatish ishlari olib borildi. Shu vaqt ichida yig‘ilgan gerbariy
                namunalarini mikologiya va fitopatologiyada qabul qilingan uslublar asosida gerbariy
                namunalari tayyorlab borildi. Tayyorlab borilgan namunalardan kaslliklar ajratib
                olindi`

            },{
                title:'ORGANIK USULDA YETISHTIRILGAN QULUPNAY MEVASINI SAQLASH VA QAYTA ISHLASHNI TAKOMILLASHTIRISH',
                linkPdf:'https://drive.google.com/file/d/1bYJp6AvBtZ0Ot3FzCPihZv1PAQ3WvId-/view?usp=sharing',
                image:`./post/strawberry.jpg`,
                author:['Turg‘unov Azizbek Normat o‘g‘li','Bo‘riyeva Sojida Eshmurod qizi'],
                description:`Annotatsiya. Qulupnay - qisqa muddatli hosilga ega meva. Qulupnay o‘ziga xos
                ta’mi, ozuqaviy qiymati va nozikligi bilan butun dunyoda mashhur. Boshqa tomondan,
                qulupnayni saqlash muddatini uzaytirish ularning tez buziladigan tabiati tufayli katta
                qiyinchilik tug‘dirdi. Mavjud oziq-ovqat mahsulotlarini qayta ishlash va saqlash
                texnologiyasidan samarali va barqaror foydalanish uchun vaqt kerak. Mevalarni
                uzoqroq muddatga saqlash uchun tadqiqotchilar sovuqxona, o‘zgartirilgan atmosfera
                qadoqlash (MAP), salqin do‘kon, boshqariladigan atmosfera ombori (CA), turli
                qadoqlash usullari va turli fizik-kimyoviy ishlov berish kabi ilg‘or usullardan
                foydalanish texnologiyalarini ishlab chiqmoqda. Saqlash usullaridan tashqari,
                polisaxaridga asoslangan iste’mol qilish mumkin bo‘lgan ba’zi qoplamalar mavjud
                bo‘lib, ular mevaning yumshatilishini, mevalarning parchalanishini kechiktirish,
                askorbin kislotasi va fenollarning yuqori darajasini saqlab turish, antioksidant
                fermentlarning faolligini oshirish va membrana shikastlanishini kamaytirishda hal
                qiluvchi rol o‘ynaydi. Meva yig‘ishtirib olingandan keyingi bosqichlarda
                qulupnayning xavfsizligi va sifati bilan bog‘liq ko‘plab tahdidlar mavjud. Ushbu
                maqolada biz turli xil saqlash texnologiyalarining afzalliklari va kamchiliklarini,
                shuningdek, yangi hosil qilingan qulupnayni uzoq muddat saqlash uchun ularni qayta
                ishlashning zamonaviy texnologiyalarini muhokama qilamiz.`
            },{
                title:'PROSPECTS FOR IMPROVING THE RISK MANAGEMENT SYSTEM IN FOOD PRODUCTION',
                linkPdf:'https://drive.google.com/file/d/1DAYndZJt5xcSZV6s1UdL5glDmpVIsFRY/view?usp=sharing',
                img:`url(./post/food.jpg)`,
                image:`./post/food.jpg`,
                author:['D.V.Khakimov','Kh.J.Roziokhunova','D.B.Rajabov'],
                description:`Abstract: In this article, the general issues and hypotheses of improving the
                quality system based on risk management in food enterprises are considered. To
                improve risk management, develop a risk assessment plan taking into account all
                possible risks associated with food production, a systematic approach to identify and
                control potential risks during the production process, and throughout the production
                process it is necessary to develop and implement a comprehensive food safety training
                program for employees to ensure effective risk reduction.`
            },{
                title:'SAQLASHDAN OLDIN ANTIMIKROBIAL MODDALAR BILAN LIMON MEVASIGA ISHLOV BERISH',
                linkPdf:'https://drive.google.com/file/d/14ELZ3UQPJ4D7CtN2rHeuyrNCCXjzCGEZ/view?usp=sharing',
                img:`url(./post/lemon.jpg)`,
                image:`./post/lemon.jpg`,
                author:['Raximova Dilfuza'],
                description:`Annotatsiya. Muammo mevalarni yig‘ib olingandan keyin xavfsiz va samarali
                qayta ishlash texnologiyalarini aniqlashdir. Maqsadga erishish uchun limon mevalari
                kesilib, har bir bo‘lak Miramistin va Dekasanning 0,1 %, 0,3 %, va 0,5 %
                konsentratsiyalardagi eritmalari bilan ishlov berildi. Namunalari patogenlarning sof
                madaniyatlari bo‘lgan agar bloklariga joylashtirilib, nam Petri idishlariga solindi va
                termostatda 25 °C haroratda 6-10 kun davomida saqlandi, tajriba uch marta takrorlandi.
                Tadqiqot limonlarni qayta ishlash uchun antimikrob preparatlarning konsentratsiyasini
                aniqlash, saqlash haroratiga qarab limon mevalarining massa yo‘qotilishini aniqlashga
                qaratilgan. Limon mevalarini saqlash vaqtida ko‘k va yashil mog‘or rivojlanishini
                to‘xtatish maqsadida ularni 0,3 % va 0,5 % konsentratsiyalarda Miramistin va Dekasan
                bilan ishlov berish taklif etiladi. Saqlash harorati 10 °C bo‘lganda mevalar 40–45 kun
                saqlanadi. Shu bilan birga, kunlik yo‘qotishlar 0,49 % ni tashkil etadi. Saqlash
                haroratini 4 °C ga tushirish saqlash muddatini 90-100 kungacha uzaytiradi, kunlik
                massa yo‘qotilishi esa 0,08 % ni tashkil etadi. Antiseptiklar bilan ishlov berish
                kimyoviy sintez qilingan fungitsidlarni chiqarib tashlash va hosil yig‘ib olingandan
                keyin yangi sitrus mevalarining tabiiy xususiyatlarini saqlab qolish, shuningdek
                ularning saqlash muddatini uzaytirish imkonini beradigan ekologik toza echimlarni
                amalga oshirish imkonini beradi. Yangi, arzon, ekologik toza va qulay texnologiyalarni
                ishlab chiqishda bu muhim usul hisoblanadi.`
            },{
                title:'O‘RIK MEVALARINI SOVUTIB SAQLASh JARAYoNIDA SIFATINI BAHOLASh USULLARI',
                linkPdf:'https://drive.google.com/file/d/1OOmcNnrz1HiMFoB-LSrFI7rjOE2HxdK_/view?usp=sharing',
                img:`url(./post/apricot.jpg)`,
                image:`./post/apricot.jpg`,
                author:['Odinaev Mirzahmad Isaevich','Turg‘unov Azizbek Normat o‘g‘li'],
                description:`Аnnоtatsiya: Ushbu maqolada Respublikamizda yetishtirilayotgan saqlashga
                mo‘ljallangan o‘rik mevalarini orgonaliptik ko‘rsatkichlari to‘g‘risida ilmiy
                mulohazalar, amaliyotga asoslangan va sinalgan amaliy takliflar va tavsiyalar
                keltirilgan. Maqola eksportga yo‘naltirilgan danakli mahsulotlardan biri bo‘lgan o‘rik
                turini amaliy tadqiqotlaridan kelib chiqan natijalarga asoslangan.`
            },{
                title:'POMIDORGA QOʻYILGAN STANDART TALABLARINI QIYOSIY TAHLILI',
                linkPdf:'https://drive.google.com/file/d/18gqMWId4b4ZBEOZwnSED3SLba0gVaFkl/view?usp=sharing',
                img:`url(./post/tomato.jpg)`,
                image:`./post/tomato.jpg`,
                author:['Xakimov Dilmurod Valijon oʻgʻli','Abdurahmanov Obidjon Xamidovich','Rajabov Doniyorbek Bahtiyorovich'],
                description:`Annotatsiya: Ushbu maqolada yurtimizda yetishtirilib eksportga tayyorlangan
                yangi uzulgan pomidorlarga qo’yilgan milliy, davlatlararo va xalqaro standartlarning
                qiyosiy tahlili keltirilgan bo’lib, bu orqali savdodagi texnik to’siqlarni oldini olish
                hamda mahsulotni eksport qilishda import qilib olayotgan davlatning talablari asosida
                tayyorlash masalalari ko’rib chiqilgan.`

            },{
                title:'MAXSAR NAVLARINING POYA BALANDLIGIGA EKISH SXEMASI VA MUDDATINING TA’SIRI',
                linkPdf:'https://drive.google.com/file/d/1MofZw0dzMr0fa3a2OmTxhUUwF1fEvPzs/view?usp=sharing',
                img:`url(./background/post_background_5.jpg)`,
                image:`./post/post_background_5.jpg`,
                author:['Saporbayev Ko‘palboy','Ro‘zmetov Anvarbek'],
                description:`Anatatsiya: Maxsar o’simligi urug’ida moy bo’lib asason bu o’simlikning o’sib
                rivojlanishiga ekish sxemasi va muddatining ta’sirini Jizzax-1 va Milyutinskiy-114
                navlarida olib borildi va olib borilgan fenologik kuzatuvlar natijasiga ko’ra ekish
                sxemasidan 60x15 va ekish muddatidan 10.-03 muddatda ekilgan urug’larning
                biometerik ko’rsatgichlari yuqori bo’lganligi isbotlandi.`

            },{
                title:'AHOLINI SIFATLI OZIQ –OVQAT MAXSULOTLARI BILAN TA’MINLASHNI TAKOMILLASHTIRISH',
                linkPdf:'https://drive.google.com/file/d/1UiDoo5pxwRFkZozeo-XxHbbkucJmnenc/view?usp=sharing',
                img:`url(./post/food3.jpg)`,
                image:`./post/food3.jpg`,
                author:['Mo‘ydinov Boburjon Muzzafar o‘g‘li','Anarbayev Muhammad Pardaboy o‘g‘li','Aminov In’omjon Sobir o‘g‘li'],
                description:`Annotatsiya: Maqolada aholining oziq-ovqat mahsulotlari bilan
                ta'minlanishidagi muammolar va ularni hal qilish yo'llari ko‘rib chiqilgan. Maqolada
                aholi sonining o‘sishi, iqlim o‘zgarishlari va iqtisodiy tangliklar natijasida oziq-ovqat
                mahsulotlariga talab oshayotgani ta’kidlanadi. BMT va Butunjahon sog‘liqni saqlash
                tashkilotlari ma'lumotlariga ko‘ra, dunyoda 840 milliondan ortiq odam to‘yib
                ovqatlanmayapti, bu esa jiddiy global muammolarga sabab bo‘lmoqda. Maqolada
                O‘zbekiston Respublikasida oziq-ovqat xavfsizligini ta’minlash bo‘yicha olib
                borilayotgan islohotlar va amalga oshirilgan chora-tadbirlar ham keng yoritilgan.
                Shuningdek, meva-sabzavot mahsulotlarini saqlash va qayta ishlash sohasida
                modernizatsiya jarayonlari va innovatsion yondashuvlarning ahamiyati ham ko‘rsatib
                o‘tilgan`

            },{
                title:'INNOVATSION TEXNOLOGIYALARNI QO’LLAGAN HOLDA URUG‘LI MEVALARNI QURITISH',
                linkPdf:'https://drive.google.com/file/d/1Ef1yXC1Jn_5v95hhjMLhvHDHqdbCpJB_/view?usp=sharing',
                img:`url(./post/fruits22.jpg)`,
                image:`./post/fruits22.jpg`,
                author:['Safarov Asqar Asadullayevich','Mo‘ydinov Boburjon Muzzafar o‘g‘li','Anarbayev Muhammad Pardaboy o‘g‘li'],
                description:`Annotatsiya: Ushbu maqolada urug‘li mevalarni innovatsion texnologiyalar
                asosida quritish jarayonlari o‘rganilgan. Tadqiqotda yuqori chastotali nur beruvchi
                uskunalar yordamida mevalarni qayta ishlash usullari va mahsulot sifatini yaxshilash
                imkoniyatlari ko‘rib chiqilgan. Quritish jarayonining mahsulot sifatiga, uning saqlash
                muddatiga va tayyor mahsulot chiqishiga ta’siri tadqiq qilingan. Natijalar shuni
                ko‘rsatadiki, yuqori chastotali nurlar bilan ishlov berish mahsulotning namligini
                pasaytiradi va saqlash muddatini uzaytiradi. Ushbu texnologiya mevalarni isrof
                qilmasdan qayta ishlashda samarali hisoblanadi va oziq-ovqat mahsulotlarining
                eksport salohiyatini oshirishga yordam beradi.`

            }
        ]
    }
})

export default postSlice.reducer
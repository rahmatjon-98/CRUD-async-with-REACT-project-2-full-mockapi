import "./App.css";
import "@ant-design/v5-patch-for-react-19";
import { unstableSetRender } from "antd";
import { createRoot } from "react-dom/client";

unstableSetRender((node, container) => {
  container._reactRoot ||= createRoot(container);
  const root = container._reactRoot;
  root.render(node);
  return async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    root.unmount();
  };
});

import img1 from "./assets/image 5 (1).png";
import img2 from "./assets/portrait-man-visiting-luxurious-city-dubai 1.png";
import img3 from "./assets/side-view-woman-with-red-swimsuit 1.png";
import img4 from "./assets/image 5 (2).png";

import img5 from "./assets/Union.png";
import img6 from "./assets/Union (1).png";
import img7 from "./assets/Union (2).png";
import img8 from "./assets/Vector 1.png";
import img9 from "./assets/Vector 3.png";
import img10 from "./assets/Ellipse 2.png";
import img11 from "./assets/Ellipse 2 (1).png";
import img12 from "./assets/Union (3).png";
import img13 from "./assets/Ellipse 2 (2).png";
import img14 from "./assets/Ellipse 2 (3).png";
import img15 from "./assets/image 1604.png";
import img16 from "./assets/image 1605.png";
import img17 from "./assets/image 1604 (1).png";
import img18 from "./assets/image 1605 (1).png";
import img19 from "./assets/RU.png";
import img20 from "./assets/logo-1_site-2048x545 1.png";
import img21 from "./assets/WhatsApp.png";
import img22 from "./assets/Telegram.png";
import img23 from "./assets/Container (1).png";

import Crud from "./components/crud";

function App() {
  return (
    <div>
      <header>
        <div className="bgimage">
          <div className="text-center pt-42 lg:pt-32 bglinegradient w-full h-[50vh]">
            <div className="text-2xl lg:text-5xl font-bold">
              <span className="text-white">Полет на </span>
              <span className="text-[#FE9A4C]">Lujo BlackJet</span>
            </div>
            <p className="text-[#8C8F87] lg:w-1/5 m-auto py-5">
              Новейший самолёт, оборудованный 72 креслами только бизнес-класса
            </p>
          </div>
        </div>
      </header>

      <h1 className="lg:text-[28px] w-9/10 lg:w-3/5 my-10 mx-auto">
        Lujo BlackJet доставляет путешественников в <b>Турцию</b> и на
        <b> Мальдивы</b>:
      </h1>

      <section className="w-9/10 lg:w-6/10 m-auto my-10">
        <img className="mt-20 rounded-xl" src={img1} alt="" />
        <img
          className="absolute lg:-mt-[260px] -mt-[168px] w-3/5 lg:w-auto "
          src={img2}
          alt=""
        />
        <p className="text-white text-2xl lg:text-[40px] font-bold absolute -mt-16 lg:-mt-24 ml-[200px] lg:ml-[550px] ">
          Турция
        </p>

        <div>
          <p className="py-10">
            Рейсы проходят по маршруту Москва — Бодрум, аэропорт Milas Bodrum.
            Максимальная частота вылетов в летний сезон — 5 раз в неделю.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Вылет — <b>09:00</b>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Прибытие в Бодрум — <b>14:35</b>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Обратный вылет в Москву — <b>16:10</b>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Возвращение в столицу — <b>21:20</b>
            </div>
          </div>
        </div>

        <img
          className="absolute -z-1 -ml-5 lg:-ml-72 -mt-64"
          src={img5}
          alt=""
        />
      </section>

      <section className="w-9/10 lg:w-6/10 m-auto my-10">
        <img className="mt-20 rounded-xl" src={img4} alt="" />
        <img
          className="absolute lg:-mt-[260px] -mt-[168px] w-3/5 lg:w-auto  "
          src={img3}
          alt=""
        />
        <p className="text-white text-2xl lg:text-[40px] font-bold absolute -mt-16 lg:-mt-24 ml-[200px] lg:ml-[550px]  ">
          Мальдивы
        </p>

        <div>
          <p className="py-10">
            Рейсы проходят по маршруту Москва — Бодрум, аэропорт Milas Bodrum.
            Максимальная частота вылетов в летний сезон — 5 раз в неделю.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Вылет — <b>09:00</b>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Прибытие в Бодрум — <b>14:35</b>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Обратный вылет в Москву — <b>16:10</b>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 border border-[#6091B1] rounded-full"></div>
            <div>
              Возвращение в столицу — <b>21:20</b>
            </div>
          </div>
        </div>
        <img
          className="absolute -z-1 ml-[90px] lg:ml-[806px] -mt-64"
          src={img6}
          alt=""
        />
      </section>

      <h1 className="text-[20px] lg:text-[28px] w-9/10 lg:w-3/5 mt-10 mx-auto">
        <b>Lujo BlackJet</b> — cтоит один раз оказаться в небе на борту
        уникального лайнера, и вам не захочется соглашаться на другие варианты.
      </h1>

      <section className="w-9/10 lg:w-6/10 m-auto py-5 border-b border-b-[#E7E7E7] flex items-center justify-between">
        <p className="text-[50px] lg:text-[110px] font-bold text-[#FE9A4C]">
          7250 <span className="text-[20px] text-black ">км</span>
        </p>
        <p className="w-2/4">
          <b>дальность полета</b> - что позволяет долететь до желаемого пункта
          назначения без пересадок
        </p>
      </section>

      <section className="w-9/10 lg:w-6/10 m-auto my-10">
        <p className="py-2.5">
          Это Boeing 757-200, единственный в России самолёт, в котором нет
          экономического и бизнес-класса, только 72 места бизнес-класса.
        </p>
        <p className="py-2.5">
          Точнее — Ultimate Business Class. А это значит, что вас ждет
          персональный подход, люксовые удобства и партнёрство с мировыми
          брендами.
        </p>
        <img className="absolute -z-1 lg:-ml-56 -mt-60" src={img7} alt="" />
      </section>

      <section className="w-9/10 lg:w-6/10 m-auto my-10 mb-32 lg:mb-60 flex flex-wrap lg:flex-nowrap  gap-10">
        <div className="bg-[#F0F9FF] border w-[150px] lg:w-[190px] h-[150px] lg:h-[190px] border-[#6091B1] rounded-2xl text-center p-5 ">
          <p className="text-[#6091B1] text-[20px] lg:text-[64px] font-bold ">
            72
          </p>
          <p className="text-[#6091B1] text-[12px]">
            кресла только <br /> бизнес-класса
          </p>
        </div>

        <div className="bg-[#F0F9FF] border w-[150px] lg:w-[190px] h-[150px] lg:h-[190px] border-[#6091B1] rounded-2xl text-center p-5 ">
          <p className="text-[#6091B1] text-[20px] lg:text-[64px] font-bold ">
            850
          </p>
          <p className="text-[#6091B1] text-[12px]">
            км/ч - Средняя <br /> крейсерская скорость
          </p>
        </div>

        <div className="bg-[#F0F9FF] border w-[150px] lg:w-[190px] h-[150px] lg:h-[190px] border-[#6091B1] rounded-2xl text-center p-5 ">
          <p className="text-[#6091B1] text-[20px] lg:text-[64px] font-bold ">
            18
          </p>
          <p className="text-[#6091B1] text-[12px]">
            видов горячих и <br /> холодных блюд
          </p>
        </div>

        <div className="bg-[#F0F9FF] border w-[150px] lg:w-[190px] h-[150px] lg:h-[190px] border-[#6091B1] rounded-2xl text-center p-5 ">
          <p className="text-[#6091B1] text-[20px] lg:text-[64px] font-bold ">
            5
          </p>
          <p className="text-[#6091B1] text-[12px]">
            бортпроводников - по 1 <br /> на 14 пассажиров
          </p>
        </div>
      </section>

      <section className="px-[5%] lg:px-[20%] py-10 lg:py-[14vh]  lg:my-20 bg-[#3E403B]">
        <img
          className="absolute lg:-ml-14 -ml-[25px] -mt-[118px] lg:-mt-[270px]"
          src={img8}
          alt=""
        />
        <img
          className="absolute -mt-[50px] lg:-mt-[130px] ml-[50px] lg:ml-32 z-1 lg:w-auto w-6/10"
          src={img9}
          alt=""
        />

        <div className="flex flex-col gap-8">
          <p className="relative z-2 text-2xl lg:text-3xl text-white ">
            Здесь <b>Moët & Chandon</b>, гаджеты <b>Apple</b> <br /> и
            косметические travel-наборы от <b>Bvlgari</b>.
          </p>

          <p className="text-[#8C8F87] text-[12px]">
            Все кресла раскладываются в полноценное место для сна с помощью
            одного нажатия на панель управления, а также откидываются и
            фиксируются в положении для отдыха. Каждое сиденье оборудовано
            компактными лампами для чтения, розетками и USB, а также функцией
            массажа. Вам обязательно предложат мягкое одеяло, подушку под шею и
            голову, тапочки и маску для сна для комфортного отдыха.
          </p>

          <p className="text-[#8C8F87] text-[12px]">
            Мультимедийная система развлечений доступна на протяжении всего
            полёта. Фильмы, стендап-шоу, сериалы из коллекции Premier,
            мультфильмы для детей — выбирайте на свой вкус. На протяжении всего
            полета в вашем распоряжении планшеты iPad самой последней модели, а
            также наушники AirPods Max с активным шумоподавлением.
          </p>
        </div>

        <div className="flex items-center gap-5 my-8">
          <img src={img10} alt="" />

          <div className="text-white font-semibold">
            <p>Комфортный отдых</p>

            <p className="text-[12px] py-2.5 pb-4">
              Lujo BlackJet — это Boeing 757-200, оборудованный 72 креслами
              только бизнес-класса. Все сиденья раскладываются в полноценные
              места для сна, оснащены лампами для чтения, розетками и USB для
              гаджетов. Расслабиться помогут одеяла и мягкие подушки.
            </p>

            <button className="flex items-center text-[#FFFDFF] text-[12px] border border-[#FE9A4C] rounded-[10px] px-3 py-1">
              Подробнее
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <hr className="text-[#8C8F87] " />

        <div className="flex items-center gap-5 my-8">
          <img src={img11} alt="" />

          <div className="text-white font-semibold">
            <p>Современные гаджеты</p>

            <p className="text-[12px] py-2.5 pb-4">
              Для пассажиров Lujo BlackJet — система мультимедийных развлечений
              на борту, планшеты iPad самой последней модели и наушники AirPods
              Max.
            </p>

            <button className="flex items-center text-[#FFFDFF] text-[12px] bg-[#FFFFFF1A] rounded-[10px] px-3 py-1">
              Свернуть
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-[#8C8F87] my-8">
          <p>
            Мультимедийная система развлечений доступна на протяжении всего
            полёта. Смотрите фильмы, стендап-шоу, сериалы из коллекции Premier,
            мультфильмы для детей — всё, что вам захочется.
          </p>
          <br />
          <p>
            Гаджеты на борту — это планшеты iPad самой последней модели. А также
            наушники AirPods Max с активным шумоподавлением — с ними комфортный
            отдых и ощущение уединения в полёте обеспечены.
          </p>
          <br />
          <div className="flex items-center bg-[#FFFFFF1A] my-1 p-3 gap-2 rounded-xl">
            <img src={img12} alt="" />
            <p>iPad 12.9 Pro</p>
          </div>
          <div className="flex items-center bg-[#FFFFFF1A] my-1 p-3 gap-2 rounded-xl">
            <img src={img12} alt="" />
            <p>AirPods Max</p>
          </div>
        </div>

        <hr className="text-[#8C8F87] " />

        <div className="flex items-center gap-5 my-8">
          <img src={img13} alt="" />

          <div className="text-white font-semibold">
            <p>Забота о себе</p>

            <p className="text-[12px] py-2.5 pb-4">
              Комплимент каждому гостю — косметичка от Bvlgari. В дорожный набор
              входят влажные салфетки, парфюм, лосьон для кожи и бальзам для
              губ. Приятное напоминание о прошедшем путешествии!
            </p>

            <button className="flex items-center text-[#FFFDFF] text-[12px] border border-[#FE9A4C] rounded-[10px] px-3 py-1">
              Подробнее
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <hr className="text-[#8C8F87] " />

        <div className="flex items-center gap-5 my-8">
          <img src={img14} alt="" />

          <div className="text-white font-semibold">
            <p>Специальное меню от поваров lujo</p>

            <p className="text-[12px] py-2.5 pb-4">
              За питание на борту отвечает шеф-повар. Для гостей готовят блюда
              ресторанного уровня из свежайших продуктов. Дополняют меню
              алкогольные и безалкогольные напитки премиум-класса, десерты и
              деликатесы, специальные блюда для детей и вегетарианцев.
            </p>

            <button className="flex items-center text-[#FFFDFF] text-[12px] border border-[#FE9A4C] rounded-[10px] px-3 py-1">
              Подробнее
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="mx-[5%] lg:mx-[20%] my-10">
        <h1 className=" text-3xl  ">Меню на борту Lujo BlackJet</h1>

        <div className="lg:flex justify-between py-10 ">
          <div className="flex flex-col text-[#3E403B] uppercase lg:w-3/6 justify-between mb-10">
            <select className="uppercase border-b border-[#E7E7E7] py-5 ">
              <option value="">Завтрак</option>
            </select>
            <select className="uppercase border-b border-[#E7E7E7] py-5 ">
              <option value="">Обед</option>
            </select>
            <select className="uppercase border-b border-[#E7E7E7] py-5 ">
              <option value="">Детское меню</option>
            </select>
            <select className="uppercase border-b border-[#E7E7E7] py-5 ">
              <option value="">Вегетарианское меню</option>
            </select>
            <select className="uppercase border-b border-[#E7E7E7] py-5 ">
              <option value="">Барное меню Lujo BlackJet</option>
            </select>
          </div>

          <img src={img15} alt="" />
        </div>
      </section>

      <section className="mx-[5%] lg:mx-[20%] my-10">
        <h1 className=" text-3xl  ">Регистрация и ожидание полёта</h1>

        <div className="lg:flex items-center gap-5 py-10 ">
          <img src={img16} alt="" />

          <div className="text-[15px] mt-10">
            <p>
              Полёт на бизнес-джете — минимум спешки и ожиданий, максимум
              привилегий и бережного отношения к вашему времени. Регистрация на
              борт происходит <b>на отдельных стойках 101 и 102</b>, так что в
              аэропорт Внуково можно прибыть всего <b>за 1,5 часа до вылета</b>.
            </p>
            <br />
            <p>
              После регистрации и сдачи багажа гостей ждёт отдых в
              бизнес-лаундже ART Lounge: шведский стол с закусками, напитки,
              Wi-Fi, душ, детский уголок, зона с массажными креслами, камера
              хранения для ручной клади и другие удобства.
            </p>
            <br />
            <p>
              При вылете из Бодрума лаундж также к вашим услугам — при входе в
              зону отдыха нужно лишь показать посадочный талон.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-[5%] lg:mx-[20%] my-10">
        <h1 className="text-3xl ">Трансфер</h1>

        <div className="py-10 lg:flex items-start gap-10">
          <div className="text-[15px] mb-10">
            <p>
              Тип трансфера зависит от отеля, в котором вы планируете
              остановиться.
            </p>

            <p className="border-l border-[#FE9A4C] my-5 px-5">
              <b>Для гостей Lujo Bodrum</b> в стоимость тура включён
              индивидуальный трансфер аэропорт—отель—аэропорт. В зависимости от
              числа путешественников используются автомобили Mercedes Sprinter,
              Mercedes Vito.
            </p>

            <p className="border-l border-[#FE9A4C] my-5 px-5">
              <b>Для гостей других отелей</b> — трансфер Comfort Class. По пути
              из аэропорта в отель и обратно туристы заезжают максимум в 2
              отеля. В зависимости от числа гостей используются автомобили
              Mercedes Tourismo или Travego, Mercedes Sprinter.
            </p>

            <div className="flex flex-col">
              <select className="uppercase border-b border-[#E7E7E7] py-5 ">
                <option value="">Индивидуальный трансфер</option>
              </select>
              <select className="uppercase border-b border-[#E7E7E7] py-5 ">
                <option value="">Эксклюзивный трансфер</option>
              </select>
            </div>
          </div>
          <img src={img17} alt="" />
        </div>
      </section>

      <section className="mx-[5%] lg:mx-[20%] my-10">
        <h1 className="text-3xl ">Можно на борт Lujo BlackJet с животными?</h1>

        <div className="py-10 lg:flex items-start gap-10">
          <img src={img18} alt="" />

          <div className="text-[15px] mt-10">
            <p>
              Да, на борту Lujo BlackJet рады гостям с питомцами — важно лишь
              знать о нескольких правилах.
            </p>

            <p className="border-l border-[#FE9A4C] my-5 px-5">
              <b>Питомцы массой до 8 кг</b> с учётом веса переноски летят в
              салоне. Максимальные габариты последней — не более 115 см в трёх
              измерениях.
            </p>

            <p className="border-l border-[#FE9A4C] my-5 px-5">
              <b>Питомцы массой до 8 кг</b> с учётом веса переноски летят в
              салоне. Максимальные габариты последней — не более 115 см в трёх
              измерениях.
            </p>

            <div className="flex flex-col">
              <p>
                В любом случае клетка должна быть достаточных для вашего любимца
                размеров, обеспечивать ему комфортное расположение и доступ
                воздуха. Убедитесь, что переноска имеет ручки, а
                водонепроницаемое дно покрыто абсорбирующим материалом.
              </p>
            </div>
          </div>
        </div>

        <div>
          <b>Другие детали:</b>

          <div className="flex items-center gap-2 pt-3">
            <div className="w-2 h-2 bg-[#FE9A4C] rounded-full"></div>
            <p>перевозка животных согласовывается с авиакомпанией заранее;</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FE9A4C] rounded-full"></div>
            <p>
              услуга платная, актуальные цены указаны на 
               <span className="text-[#FE9A4C] font-bold pl-2">
                 сайте перевозчика
              </span>
              ;
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FE9A4C] rounded-full"></div>
            <p>
              важно, чтобы страна въезда, выезда, транзита разрешала ввоз
              животных;
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FE9A4C] rounded-full"></div>
            <p>
              необходимы
              <span className="text-[#FE9A4C] font-bold pl-2">документы</span> для
              животного и
              <span className="text-[#FE9A4C] font-bold pl-2">сертификаты</span> о
              его здоровье;
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FE9A4C] rounded-full"></div>
            <p>
              в аэропорту пассажиру нужно будет пройти ветеринарный контроль.
            </p>
          </div>
        </div>
      </section>

      {/* //crud */}
      <section className="mx-[5%] lg:mx-[20%] my-20">
        <Crud />
      </section>

      <section className="px-[5%] lg:px-[20%] py-10 lg:py-[14vh] m-auto my-20 bg-[#3E403B]">
        <h1 className="font-bold text-2xl lg:text-5xl text-white">
          Лёгкий способ <br /> осуществить мечту
        </h1>

        <p className="text-[#FFFDFF] text-[18px] py-10">
          Заполните форму обратной связи, напишите ваши контакты и пожелания к
          туру. Мы свяжемся с вами в ближайшее время!
        </p>

        <form className="text-white">
          <div className="flex flex-col py-2">
            <p className="text-[#FE9A4C] text-[18px] font-semibold py-2 ">
              Имя
            </p>
            <input
              className="border border-[#8C8F87] placeholder:text-[#8C8F87] p-2.5 rounded-[8px] outline-none"
              type="text"
              placeholder="Как к вам обращаться?"
            />
          </div>

          <div className="flex flex-col py-2">
            <p className="text-[#FE9A4C] text-[18px] font-semibold py-2 ">
              Телефон
            </p>
            <label className="border border-[#8C8F87] p-2.5 rounded-[8px] flex gap-2 items-center ">
              <img src={img19} alt="" />
              <p className="text-white">+7</p>
              <input
                className=" placeholder:text-[#8C8F87] outline-none"
                type="text"
                placeholder="(xxx) xxx-xx-xx"
              />
            </label>
          </div>

          <div className="flex flex-col py-2">
            <p className="text-[#FE9A4C] text-[18px] font-semibold py-2 ">
              Ваши пожелания
            </p>
            <textarea
              className="max-w-full min-h-[150px] max-h-[150px] placeholder:text-[#8C8F87] border border-[#8C8F87] p-2.5 rounded-[8px] flex gap-2 items-center outline-none"
              type="text"
              placeholder="Опишите ваше идеальное путешествие"
            ></textarea>
          </div>

          <button className="bg-[#FE9A4C] rounded-xl px-6 my-5 py-2 text-[18px] text-white">
            Отправить
          </button>
        </form>

        <p className="text-[#8C8F87] text-[13px]">
          Нажимая на кнопку, вы даете
          <span className="text-[#FFFDFF]">
            {" "}
            согласие на обработку персональных данных
          </span>{" "}
          и соглашаетесь c{" "}
          <span className="text-[#FFFDFF]"> политикой конфиденциальности</span>
        </p>
      </section>

      <footer className="lg:flex mx-[5%] lg:mx-[20%] justify-between pb-20">
        <div className="w-[4/5]">
          <img src={img20} alt="" />

          <div className="flex gap-10 w-full  py-10">
            <div className="w-2/5">
              <p className="pb-5 text-[#6091B1] uppercase text-[18px] ">
                Информация
              </p>
              <div className="flex flex-col text-[12px] gap-2">
                <a href="">Контакты</a>
                <a href="">О компании</a>
                <a href="">Наши новости</a>
                <a href="">Клиентам</a>
                <a href="">Сервис</a>
                <a href="">Отзывы</a>
              </div>
            </div>

            <div className="w-2/5">
              <p className="pb-5 text-[#6091B1] uppercase text-[18px] ">
                Контакты
              </p>
              <div className="flex flex-col text-[12px] gap-2">
                <div className="flex gap-2">
                  <img src={img21} alt="" />
                  <img src={img22} alt="" />
                </div>
                <a className="text-[15px]" href="">
                  + 7 (495) 374 77 88
                </a>
                <a href="">Москва, Лесная 8а (м. Белорусская)</a>
                <a href="">
                  Парковка для клиентов турагентства "Бутик Путешествий"
                </a>
              </div>
            </div>
          </div>
        </div>

        <img src={img23} alt="" />
      </footer>
    </div>
  );
}

export default App;

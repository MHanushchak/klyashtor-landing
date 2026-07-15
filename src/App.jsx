import { useState } from "react";
import "./App.css";
import GymIcon from "./components/icons/GymIcon";
import PersonalIcon from "./components/icons/PersonalIcon";
import GroupIcon from "./components/icons/GroupIcon";
import MMAIcon from "./components/icons/MMAIcon";
import BoxIcon from "./components/icons/BoxIcon";
import DancingIcon from "./components/icons/DancingIcon";
import MassageIcon from "./components/icons/MassageIcon";
import RehabIcon from "./components/icons/RehabIcon";
import NutritionIcon from "./components/icons/NutritionIcon";

const asset = (file) => `/${file}`;

const services = [
  [
    "Тренажерний зал",
    "Професійне обладнання для сили, витривалості та набору форми.",
    <GymIcon />,
    "gym",
  ],
  [
    "Персональні тренери",
    "Індивідуальний супровід, програми під цілі та контроль прогресу.",
    <PersonalIcon />,
    "trainers-section",
  ],
  [
    "Групові тренування",
    "Динамічні заняття для мотивації, дисципліни та стабільного темпу.",
    <GroupIcon />,
    "group-training",
  ],
  [
    "MMA",
    "Техніка, сила, характер і витривалість для бійцівського прогресу.",
    <MMAIcon />,
    "mma",
  ],
  [
    "Fitbox",
    "Постановка удару, робота ніг, витривалість і концентрація.",
    <BoxIcon />,
    "boxing",
  ],
  [
    "Break Dance",
    "Пластика, координація, вибуховість і власний стиль у русі.",
    <DancingIcon />,
    "breakdance",
  ],
  [
    "Масаж",
    "Відновлення після навантажень і турбота про тіло.",
    <MassageIcon />,
    "massage",
  ],
  [
    "Реабілітація",
    "Безпечне повернення до активності після травм чи перевантажень.",
    <RehabIcon />,
    "rehab",
  ],
  [
    "Спортивне харчування",
    "Рішення для енергії, відновлення та підтримки результату.",
    <NutritionIcon />,
    "nutrition",
  ],
];

const serviceDetails = [
  [
    "gym",
    "Напрямок 01",
    "Тренажерний зал",
    "Повноцінний простір для силових і функціональних тренувань: базові вправи, робота на масу, розвиток витривалості та підготовка під конкретні цілі.",
    "pic1.jpg",
  ],
  [
    "trainers-section",
    "Напрямок 02",
    "Персональні тренери",
    "Індивідуальні програми, контроль техніки, адаптація навантаження та постійний супровід для швидшого і точнішого прогресу.",
    "personal.jpg",
  ],
  [
    "group-training",
    "Напрямок 03",
    "Групові тренування",
    "Заняття з енергією команди, зрозумілою структурою і темпом, який допомагає тримати мотивацію та регулярність.",
    "crossfit.jpg",
  ],
  [
    "mma",
    "Напрямок 04",
    "MMA",
    "Тут відпрацьовують прийоми, характер і силу духу. MMA — це про впевненість, дисципліну і контроль над собою.",
    "mma.jpg",
  ],
  [
    "boxing",
    "Напрямок 05",
    "Fitbox",
    "Ударна техніка, робота ніг, захист і концентрація для тих, хто любить енергійний темп тренування.",
    "fitbox.png",
  ],
  [
    "breakdance",
    "Напрямок 06",
    "Break Dance",
    "Пластика, контроль тіла, вибухова координація та ритм для розвитку рухливості й стилю.",
    "breakdance.jpg",
  ],
  [
    "massage",
    "Напрямок 07",
    "Масаж",
    "Відновлення після навантажень, зменшення напруги та краща готовність до наступних тренувань.",
    "massage.avif",
  ],
  [
    "rehab",
    "Напрямок 08",
    "Реабілітація",
    "Поступове повернення до активності після травм або перевантаження з акцентом на безпечну техніку.",
    "rehab.jpg",
  ],
  [
    "nutrition",
    "Напрямок 09",
    "Спортивне харчування",
    "Базові та робочі рішення для енергії, добору добавок і підтримки відновлення.",
    "nutrition.avif",
  ],
];

function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          href="#hero"
          className="logo"
          aria-label="Кляштор — на головну"
          onClick={closeMenu}
        >
          <img
            src={asset("logo.png")}
            alt="Логотип Кляштор"
            className="logo-mark"
          />
          <span>Кляштор</span>
        </a>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          id="main-nav"
          aria-label="Головна навігація"
        >
          {["Про нас", "Напрямки", "Тренери", "Прайс", "Контакти"].map(
            (label, index) => (
              <a
                key={label}
                href={
                  [
                    "#about",
                    "#services",
                    "#coach-picker",
                    "#pricing",
                    "#contacts",
                  ][index]
                }
                onClick={closeMenu}
              >
                {label}
              </a>
            ),
          )}
          <a
            href="#pricing"
            className="btn btn-primary mobile-header-cta"
            onClick={closeMenu}
          >
            Купити абонемент
          </a>
        </nav>
        <a href="#pricing" className="btn btn-primary header-cta">
          Купити абонемент
        </a>
      </div>
    </header>
  );
}

function TrainerShowcase() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="section trainers-showcase" id="coach-picker">
      <div className="container">
        <div className="eyebrow">Обери тренера</div>
        <h2 className="section-heading">Тренер, який підходить саме тобі</h2>

        <div
          className={`trainer-grid ${expanded ? "" : "is-collapsed"}`}
          aria-label="Список тренерів"
        >
          {Array.from({ length: 21 }, (_, index) => (
            <article
              className={`trainer-card ${[1, 7, 13, 18].includes(index) ? "featured-trainer" : ""}`}
              key={index}
            >
              <div className="trainer-card-image">
                <img
                  src={asset(`trainers/${index + 1}.jpg`)}
                  alt={`Тренер ${index + 1}`}
                />
              </div>
            </article>
          ))}
        </div>
        <div className="trainer-actions">
          <button
            className="btn btn-secondary trainer-toggle"
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Сховати частину команди" : "Показати всю команду"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [activeTab, setActiveTab] = useState("gym");

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="eyebrow">Абонементи</div>
        <h2 className="section-heading">Прайс-лист</h2>
        <p className="section-lead">
          Оберіть напрямок, щоб переглянути актуальні тарифи. На мобільних
          пристроях таблиці можна гортати вліво-вправо.
        </p>

        <div className="css-tabs-wrapper">
          <nav className="pricing-tabs" aria-label="Категорії прайсу">
            <button
              type="button"
              className={activeTab === "gym" ? "active" : ""}
              onClick={() => setActiveTab("gym")}
            >
              Тренажерний зал
            </button>
            <button
              type="button"
              className={activeTab === "groups" ? "active" : ""}
              onClick={() => setActiveTab("groups")}
            >
              Групові & Fitbox
            </button>
            <button
              type="button"
              className={activeTab === "crossfit" ? "active" : ""}
              onClick={() => setActiveTab("crossfit")}
            >
              ММА & CrossFit
            </button>
            <button
              type="button"
              className={activeTab === "trainers" ? "active" : ""}
              onClick={() => setActiveTab("trainers")}
            >
              Тренери
            </button>
            <button
              type="button"
              className={activeTab === "massage" ? "active" : ""}
              onClick={() => setActiveTab("massage")}
            >
              Масаж
            </button>
          </nav>

          <div className="pricing-content">
            {/* ТАБЛИЦЯ: Тренажерний зал */}
            <div
              className={`pricing-panel panel-gym ${activeTab === "gym" ? "active" : ""}`}
            >
              <div className="pricing-table-wrapper">
                <h3>Абонементи тренажерного залу</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Послуга</th>
                        <th>08:00 - 16:00</th>
                        <th>08:00 - 21:00</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">1 тренування</td>
                        <td colSpan="2">300</td>
                      </tr>
                      <tr>
                        <td className="text-left">8 тренувань</td>
                        <td>1250</td>
                        <td>1390</td>
                      </tr>
                      <tr>
                        <td className="text-left">12 тренувань</td>
                        <td>1450</td>
                        <td>1550</td>
                      </tr>
                      <tr>
                        <td className="text-left">36 тренувань</td>
                        <td colSpan="2">3500</td>
                      </tr>
                      <tr>
                        <td className="text-left">Безлімітний 1 місяць</td>
                        <td>1550</td>
                        <td>1650</td>
                      </tr>
                      <tr>
                        <td className="text-left">Безлімітний 3 місяці</td>
                        <td>3600</td>
                        <td>4200</td>
                      </tr>
                      <tr>
                        <td className="text-left">Безлімітний 6 місяців</td>
                        <td colSpan="2">6500</td>
                      </tr>
                      <tr>
                        <td className="text-left">Безлімітний 12 місяців</td>
                        <td colSpan="2">12 000</td>
                      </tr>
                      <tr className="highlight-row">
                        <td
                          colSpan="3"
                          className="text-left"
                          style={{
                            backgroundColor: "#fef3c7",
                            textAlign: "center",
                          }}
                        >
                          <strong>VIP Basic</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic тренажерний зал 1 тр.
                        </td>
                        <td colSpan="2">400</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic тренажерний зал 8 тр.
                        </td>
                        <td colSpan="2">1650</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic тренажерний зал 12 тр.
                        </td>
                        <td colSpan="2">1750</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic тренажерний зал 36 тр.
                        </td>
                        <td colSpan="2">4600</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic безлімітний 1 місяць (до 16:00)
                        </td>
                        <td colSpan="2">1750</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic безлімітний 1 місяць
                        </td>
                        <td colSpan="2">1900</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          VIP Basic безлімітний 3 місяці
                        </td>
                        <td colSpan="2">4600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ТАБЛИЦЯ: Групові */}
            <div
              className={`pricing-panel panel-groups ${activeTab === "groups" ? "active" : ""}`}
            >
              <div className="pricing-table-wrapper">
                <h3>Абонементи групових дисциплін</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Послуга</th>
                        <th>Групові тр-ння</th>
                        <th>Sky Jumping</th>
                        <th>Fitbox</th>
                        <th>Fitbox індивід.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">1 тренування</td>
                        <td>300</td>
                        <td>300</td>
                        <td>250</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td className="text-left">8 тренувань (1 міс.)</td>
                        <td>1500</td>
                        <td>1500</td>
                        <td>1400</td>
                        <td>2500</td>
                      </tr>
                      <tr>
                        <td className="text-left">12 тренувань (1 міс.)</td>
                        <td>1700</td>
                        <td>1600</td>
                        <td>1500</td>
                        <td>2950</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pricing-table-wrapper mt-4">
                <h3>Брейк Данс</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <tbody>
                      <tr>
                        <td className="text-left w-75">1 тренування</td>
                        <td>250</td>
                      </tr>
                      <tr>
                        <td className="text-left">1 місяць (12 тренувань)</td>
                        <td>1300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ТАБЛИЦЯ: MMA & CrossFit */}
            <div
              className={`pricing-panel panel-crossfit ${activeTab === "crossfit" ? "active" : ""}`}
            >
              <div className="pricing-table-wrapper">
                <h3>Абонементи бійцівського залу (ММА)</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <tbody>
                      <tr>
                        <td className="text-left w-75">1 тренування</td>
                        <td>250</td>
                      </tr>
                      <tr>
                        <td className="text-left">1 місяць (8 тренувань)</td>
                        <td>1400</td>
                      </tr>
                      <tr>
                        <td className="text-left">1 місяць (12 тренувань)</td>
                        <td>1500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pricing-table-wrapper mt-4">
                <h3>CrossFit</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Послуга</th>
                        <th>
                          Дитячий абонемент
                          <br />
                          <small>(8-12 років)</small>
                        </th>
                        <th>Дорослий абонемент</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">1 тренування</td>
                        <td>200</td>
                        <td>300</td>
                      </tr>
                      <tr>
                        <td className="text-left">1 місяць (8 трен.)</td>
                        <td>1200</td>
                        <td>1450</td>
                      </tr>
                      <tr>
                        <td className="text-left">1 місяць (12 трен.)</td>
                        <td>1300</td>
                        <td>1650</td>
                      </tr>
                      <tr>
                        <td className="text-left">Безлімітний (1 міс.)</td>
                        <td colSpan="2">1700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ТАБЛИЦЯ: Тренери */}
            <div
              className={`pricing-panel panel-trainers ${activeTab === "trainers" ? "active" : ""}`}
            >
              <div className="pricing-table-wrapper">
                <h3>Послуги персонального тренера (тренажерний зал)</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Категорія тренера</th>
                        <th>1 тр-ня</th>
                        <th>8 тр-нь</th>
                        <th>12 тр-нь</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">
                          Персональний тренер - 1 категорія
                        </td>
                        <td>250</td>
                        <td>1700</td>
                        <td>2300</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          Персональний тренер - 2 категорія
                        </td>
                        <td>300</td>
                        <td>2100</td>
                        <td>2900</td>
                      </tr>
                      <tr>
                        <td className="text-left">
                          Персональний тренер - 3 категорія
                        </td>
                        <td>350</td>
                        <td>2400</td>
                        <td>3200</td>
                      </tr>
                      <tr className="highlight-row">
                        <td className="text-left">Спліт тренування</td>
                        <td colSpan="3">-10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pricing-table-wrapper mt-4">
                <h3>Послуги персонального тренера (ММА)</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Тренер</th>
                        <th>1 тр-ня</th>
                        <th>8 тр-нь</th>
                        <th>12 тр-нь</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">Остап</td>
                        <td>400</td>
                        <td>3200</td>
                        <td>4800</td>
                      </tr>
                      <tr>
                        <td className="text-left">Максим</td>
                        <td>500</td>
                        <td>3600</td>
                        <td>4800</td>
                      </tr>
                      <tr className="highlight-row">
                        <td className="text-left">Спліт тренування (Остап)</td>
                        <td colSpan="3">-20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ТАБЛИЦЯ: Масаж */}
            <div
              className={`pricing-panel panel-massage ${activeTab === "massage" ? "active" : ""}`}
            >
              <div className="pricing-table-wrapper">
                <h3>Класичний та спеціалізований масаж</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Вид масажу</th>
                        <th>30 хвилин</th>
                        <th>60 хвилин</th>
                        <th>90 хвилин</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">Класичний масаж</td>
                        <td>450 грн</td>
                        <td>500 грн</td>
                        <td>700 грн</td>
                      </tr>
                      <tr>
                        <td className="text-left">Релакс-масаж</td>
                        <td>—</td>
                        <td>4800 грн</td>
                        <td>600 грн</td>
                      </tr>
                      <tr>
                        <td className="text-left">Лімфодренажний масаж</td>
                        <td>300 грн</td>
                        <td>4800 грн</td>
                        <td>—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pricing-table-wrapper mt-4">
                <h3>Міні-масаж (окремі зони)</h3>
                <div className="table-responsive">
                  <table className="pricing-matrix">
                    <thead>
                      <tr>
                        <th className="col-service">Зона масажу</th>
                        <th>Тривалість</th>
                        <th>Вартість</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">Шия + спина + руки</td>
                        <td>45 хвилин</td>
                        <td>450 грн</td>
                      </tr>
                      <tr>
                        <td className="text-left">Спина</td>
                        <td>30 хвилин</td>
                        <td>2900 грн</td>
                      </tr>
                      <tr>
                        <td className="text-left">Ноги</td>
                        <td>30 хвилин</td>
                        <td>250 грн</td>
                      </tr>
                      <tr>
                        <td className="text-left">Масаж стоп</td>
                        <td>15 хвилин</td>
                        <td>100 грн</td>
                      </tr>
                      <tr>
                        <td className="text-left">Масаж рук</td>
                        <td>15 хвилин</td>
                        <td>100 грн</td>
                      </tr>
                      <tr className="highlight-row">
                        <td
                          colSpan="3"
                          className="text-left"
                          style={{
                            backgroundColor: "#fef3c7",
                            textAlign: "center",
                          }}
                        >
                          <strong>Пакети масажів (знижки)</strong>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left" colSpan="2">
                          При купівлі пакета з 10 сеансів
                        </td>
                        <td>Знижка 15%</td>
                      </tr>
                      <tr>
                        <td className="text-left" colSpan="2">
                          При купівлі пакета з 20 сеансів
                        </td>
                        <td>Знижка 20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВИЛА */}
        <article className="pricing-rules mt-4" id="price-rules">
          <div className="pricing-group-head">
            <span
              className="price-tag"
              style={{ background: "#ef4444", color: "white" }}
            >
              Важливо
            </span>
            <h3>ТЕРМІН ДІЇ АБОНЕМЕНТА — 1 місяць з дня активації.</h3>
          </div>
          <ul className="rules-list">
            <li>
              Персональні тренування з інструктором проводяться за попереднім
              записом, або за наявності вільного тренера.
            </li>
            <li>
              Повідомляти про відсутність на індивідуальному та груповому
              тренуванні не пізніше, ніж за 3 години, у протилежному випадку
              заняття буде записано з абонементом.
            </li>
            <li>
              Групові тренування проводяться за попереднім записом та за умовами
              присутності на занятті не менше двох осіб.
            </li>
            <li>
              Можливість відвідування тренерського залу за груповим абонементом
              поза графіком тренування, при цьому знімається заняття.
            </li>
            <li>
              Абонементи є іменними та не підлягають передачі іншим особам.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Спортивний комплекс у Коломиї</div>
              <h1 className="hero-title">
                Твій простір <span>сили</span> у Коломиї
              </h1>
              <p className="hero-text">
                Понад 1000 м² для твоїх досягнень. Тренажерний зал, бойові
                мистецтва, фітнес та реабілітація.
              </p>
              <div className="hero-actions">
                <a href="#pricing" className="btn btn-primary">
                  Купити абонемент
                </a>
                <a href="#services" className="btn btn-secondary">
                  Обрати напрямок
                </a>
              </div>
            </div>
            <aside className="hero-panel">
              <h3>Енергія. Дисципліна. Результат.</h3>
              <p>
                Простір для тих, хто хоче більше: від силових тренувань і
                Fitboxу до реабілітації та персонального супроводу.
              </p>
              <div className="panel-stats">
                {[
                  ["1000+", "м² простору"],
                  ["9", "напрямків"],
                  ["7/7", "днів на тиждень"],
                  ["PRO", "тренерський склад"],
                ].map(([value, label]) => (
                  <div className="stat" key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container about-grid">
            <div>
              <div className="eyebrow">Про комплекс</div>
              <h2 className="section-heading">
                Масштаб, який відчувається з першого кроку
              </h2>
              <p className="section-lead">
                Фітнес-центр «Кляштор» — це простір, де спорт поєднується з
                комфортом. Понад 1000 м² тренажерного залу, сучасне обладнання,
                зони для різних форматів тренувань і професійна команда.
              </p>
            </div>
            <article className="about-card">
              <div className="about-highlight">
                <img src={asset("gym.jpg")} alt="Спортивний комплекс Кляштор" />
              </div>
            </article>
          </div>
        </section>
        <section className="section" id="services">
          <div className="container">
            <div className="eyebrow">Напрямки</div>
            <h2 className="section-heading">
              Усе для сили, техніки та відновлення
            </h2>
            <p className="section-lead">
              Обирай свій ритм: тренуйся самостійно, працюй із тренером або
              занурюйся у бойові дисципліни.
            </p>
            <div className="service-grid">
              {services.map(([name, description, icon, id]) => (
                <a className="service-card" href={`#${id}`} key={name}>
                  <div className="service-icon" aria-hidden="true">
                    {icon}
                  </div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        {serviceDetails
          .slice(0, 2)
          .map(([id, eyebrow, title, text, image], index) => (
            <section
              className={`section service-detail ${index % 2 ? "alt" : ""}`}
              id={id}
              key={id}
            >
              <div
                className={`container service-detail-grid ${index % 2 ? "reverse" : ""}`}
              >
                <div className="service-detail-copy">
                  <div className="eyebrow">{eyebrow}</div>
                  <h2 className="section-heading">{title}</h2>
                  <p className="section-lead">{text}</p>
                </div>
                <div className="service-detail-image">
                  <img src={asset(image)} alt={title} />
                </div>
              </div>
            </section>
          ))}
        <TrainerShowcase />
        {serviceDetails
          .slice(2)
          .map(([id, eyebrow, title, text, image], index) => (
            <section
              className={`section service-detail ${index % 2 ? "alt" : ""}`}
              id={id}
              key={id}
            >
              <div
                className={`container service-detail-grid ${index % 2 ? "reverse" : ""}`}
              >
                <div className="service-detail-copy">
                  <div className="eyebrow">{eyebrow}</div>
                  <h2 className="section-heading">{title}</h2>
                  <p className="section-lead">{text}</p>
                </div>
                <div className="service-detail-image">
                  <img src={asset(image)} alt={title} />
                </div>
              </div>
            </section>
          ))}
        <Pricing />
      </main>
      <footer className="footer" id="contacts">
        <div className="container footer-grid">
          <section className="footer-card">
            <div className="eyebrow">Контакти</div>
            <h3>Кляштор — твоя точка сили у Коломиї</h3>
            <p>вул. Йосипа Сліпого, 4б, м. Коломия, 78200</p>
            <ul>
              <li>
                <strong>Години роботи:</strong> Пн–Пт 07:00–21:00
              </li>
              <li>
                <strong>Вихідні:</strong> Сб–Нд 09:00–20:00
              </li>
              <li>
                <strong>Телефон:</strong> +38 066 690 1715
              </li>
            </ul>
            <div className="socials">
              <a href="https://www.instagram.com/fitness_klyashtor/">
                Instagram
              </a>
              <a href="https://www.facebook.com/fitness.klyashtor/?locale=uk_UA">
                Facebook
              </a>
            </div>
          </section>
          <section className="map-card">
            <div className="eyebrow">Локація</div>
            <h3>Зручно дістатися з будь-якої частини міста</h3>
            <p>
              Знайдіть нас на карті та прокладіть свій маршрут до комплексу.
            </p>
            <div className="map-placeholder">
              <iframe
                title="Кляштор на карті"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018.8088764420412!2d25.033846608093505!3d48.52435758666355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736d287d65635c7%3A0xbec47757eaeffa42!2z0KTRltGC0L3QtdGBLdGG0LXQvdGC0YAg0JrQu9GP0YjRgtC-0YA!5e0!3m2!1suk!2sua!4v1783199383213!5m2!1suk!2sua"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </section>
        </div>
        <div className="container footer-bottom">
          © 2026 Кляштор. Спортивний комплекс у Коломиї. Усі права захищено.
        </div>
      </footer>
    </>
  );
}

export default App;

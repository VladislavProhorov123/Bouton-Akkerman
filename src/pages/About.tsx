// src/pages/About.tsx
import img1 from "/flower5.jpg";
import img2 from "/flower4.jpg";
import img3 from "/flower6.jpg";

export default function About() {
  return (
    <div className="mt-[72px] py-20">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col gap-24">

        {/* Блок 1 */}
        <section className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша історія</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Bouton Akkerman — це більше ніж просто магазин квітів. Це місце,
              де народжуються емоції, створюються особливі моменти та
              з’являються красиві історії. Наш шлях почався з простої ідеї —
              дарувати людям радість через квіти.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Кожен букет, який створюється нашими флористами, має свою
              атмосферу та настрій. Ми уважно підбираємо квіти, кольори та
              форми, щоб композиція виглядала гармонійно та передавала
              справжні почуття.
            </p>

            <p className="text-gray-700 leading-relaxed">
              За час роботи ми допомогли сотням людей зробити свої події
              особливими: освідчення, дні народження, весілля або просто
              маленькі приємні сюрпризи для близьких.
            </p>
          </div>

          <img
            src={img1}
            alt=""
            className="w-full h-[360px] object-cover rounded-xl shadow-lg"
          />
        </section>

        {/* Блок 2 */}
        <section className="grid md:grid-cols-2 items-center gap-12">
          <img
            src={img2}
            alt=""
            className="w-full h-[360px] object-cover rounded-xl shadow-lg md:order-1"
          />

          <div className="md:order-2">
            <h2 className="text-3xl font-bold mb-6">Якість та свіжість квітів</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Ми приділяємо особливу увагу якості кожної квітки. Усі рослини
              постачаються від перевірених партнерів, які дотримуються
              високих стандартів вирощування та транспортування.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Наші флористи мають досвід створення різноманітних композицій —
              від класичних букетів із троянд до сучасних авторських
              аранжувань. Кожна робота створюється вручну з великою увагою
              до деталей.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Саме тому букети від Bouton Akkerman довго зберігають свою
              свіжість, яскравість та естетичний вигляд, радуючи своїх
              власників не один день.
            </p>
          </div>
        </section>

        {/* Блок 3 */}
        <section className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наші цінності</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Ми переконані, що квіти можуть сказати більше, ніж слова.
              Саме тому наша команда працює над тим, щоб кожен букет був
              не просто красивим, а й передавав справжні емоції.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Наші головні принципи — це якість, уважність до клієнтів та
              любов до своєї справи. Ми прагнемо створювати композиції,
              які викликають щирі посмішки та залишають теплі спогади.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Bouton Akkerman — це місце, де кожен букет створюється з
              натхненням. Ми хочемо, щоб наші квіти допомагали людям
              виражати свої почуття та робити життя трохи красивішим.
            </p>
          </div>

          <img
            src={img3}
            alt=""
            className="w-full h-[360px] object-cover rounded-xl shadow-lg"
          />
        </section>

      </div>
    </div>
  );
}
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 bg-[var(--button-bg-color)]">
      <div className="container mx-auto px-4 max-w-6xl text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Знайдіть ідеальний букет для особливої події
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Оберіть композицію, яка передасть ваші емоції та зробить день незабутнім
        </p>
        <Link
          to="/catalog"
          className="bg-white text-[var(--button-bg-color)] font-bold py-3 px-8 rounded shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          Перейти до каталогу
        </Link>
      </div>
    </section>
  )
}

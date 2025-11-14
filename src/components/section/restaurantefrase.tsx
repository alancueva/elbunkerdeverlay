
export default function RestaurantFrase(){
    const quote = "La comida es nuestro lenguaje universal. En cada plato, servimos una porción de nuestra pasión, un recuerdo y un sabor inolvidable.";
    const author = "Chef Isabella Rossi";
    return (
    <section className="bg-gray-900 py-20 sm:py-32 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Símbolo de comillas para énfasis visual */}
        <span className="text-6xl  font-serif mb-4 block leading-none">
          &ldquo;
        </span>

        {/* Frase Principal */}
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-serif italic tracking-wide mb-8">
          {quote}
        </blockquote>

        {/* Autor/Fuente */}
        <footer className="text-lg font-medium tracking-wider uppercase ">
          — {author}
        </footer>

      </div>
    </section>
  );
}
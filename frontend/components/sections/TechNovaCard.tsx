export function TechNovaCard() {
    return (
        <article className="rounded-2xl border border-gray-800 bg-[#0b1220] overflow-hidden">
            <div className="aspect-[16/9] w-full bg-[#111827] flex items-center justify-center text-gray-500">
                Preview do TechNova
            </div>

            <div className="p-6">
                <span className="inline-block text-xs uppercase tracking-wider text-emerald-400 mb-3">
                    Projeto em destaque
                </span>

                <h3 className="text-2xl font-bold mb-3">TechNova Lab</h3>

                <p className="text-gray-400 mb-5 leading-relaxed">
                    E-commerce simulado para testes automatizados e validação de qualidade
                    de software, com fluxo de compra, carrinho dinâmico e cenários reais
                    de negócio.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-gray-900 text-sm text-gray-300">
                        Cypress
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-900 text-sm text-gray-300">
                        Postman
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-900 text-sm text-gray-300">
                        Node.js
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-900 text-sm text-gray-300">
                        PostgreSQL
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-900 text-sm text-gray-300">
                        JavaScript
                    </span>
                </div>

                <div className="flex gap-3">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-5 py-3 font-medium text-black"
                    >
                        Ver projeto
                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-5 py-3 font-medium text-white"
                    >
                        Código
                    </a>
                </div>
            </div>
        </article>
    );
}
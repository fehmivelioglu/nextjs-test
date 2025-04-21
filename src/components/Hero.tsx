interface HeroProps {
    title: string;
    description: string;
}

export default function Hero({title, description}: HeroProps){
    return (
        <section className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>
        </section>
    )
}

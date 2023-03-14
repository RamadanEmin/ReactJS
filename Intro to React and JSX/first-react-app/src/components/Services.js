import ServicesCard from './ServiceCard';

export default function Services() {
    return (
        <div className="page-section">
            <div className="container">
                <div className="row">
                    <ServicesCard
                        title="SEO Consultancy"
                        description = "We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl = "/img/services/service-1.svg"
                    />
                    <ServicesCard
                        title="Content Marketing"
                        description = "We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl = "/img/services/service-2.svg"
                    />
                    <ServicesCard
                        title="Keyword Research"
                        description = "We help you define your SEO objective & develop a realistic strategy with you"
                        imageUrl = "/img/services/service-3.svg"
                    />
                </div>
            </div>
        </div>
    );
}
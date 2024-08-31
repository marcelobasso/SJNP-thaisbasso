import * as React from "react";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import Header from "../components/common/Header";
import AboutMe from "../components/AboutMe";
import Treatment from "../components/Treatment";
import Woman from "../images/undraw/undraw_woman_white.svg";
import ActionBanner from "../components/common/ActionBanner";
import Flowery from "../components/Flowery";
import { Link, graphql } from "gatsby";
import SpecialFeatures from "../components/SpecialFeatures";
import './index.css';
import { CallToAction, Container, Row, SectionTitle } from "../components/common/interface/UI";

export default function sejaRealNaoPerfeito(props) {
    // links to kiwify
    const Link_1 = { name: "Assinatura Mensal (Passo Inicial)", url: "https://pay.kiwify.com.br/Vpfi86k", price: "R$ 178,88"}
    const Link_2 = { name: "Assinatura Trimestral (Caminho da Transformação)", url: "https://pay.kiwify.com.br/iYgvDlt", price: "R$ 447,00 (R$ 149,00/mês)"}
    const Link_3 = { name: "Assinatura Semestral (Rota do Sucesso)", url: "https://pay.kiwify.com.br/MqxlBNP", price: "R$ 789,00 (R$ 131,50/mês)"}

    const image = props.data.ProfileImageCampaign.childImageSharp.gatsbyImageData;
    const treatmentSection = [
        {
            title: "POR QUE NUTRIÇÃO 3.0?",
            content: (
                <>
                    <p className="header-text">
                        A Nutrição 3.0 é sobre antecipação, prevenção e longevidade. Diferente da abordagem tradicional que trata doenças já estabelecidas, aqui focamos em retardar ou evitar o aparecimento das principais doenças crônicas que afetam nossa qualidade de vida. Sabemos que, embora o envelhecimento nos torne mais suscetíveis a doenças, podemos viver mais e melhor, cuidando ativamente dos pilares do estilo de vida: alimentação, sono, exercício, manejo do estresse, controle de vícios e relacionamentos saudáveis.
                    </p>
                </>
            ),
            images: null
        },
        {
            title: "PARA QUEM É A COMUNIDADE?",
            content: (
                <>
                    <p className="header-text">
                        Esta comunidade é para quem deseja tomar as rédeas da sua saúde, adotando um estilo de vida que promove a prevenção e o bem-estar a longo prazo. Se você está cansado de dietas da moda e quer construir hábitos saudáveis de verdade, sem comparações ou pressões irreais, este é o seu lugar. Aqui, você encontrará as ferramentas para começar sua jornada de mudança, com base em ciência e práticas comprovadas, deixando de lado as fake news e informações superficiais.
                    </p>
                    
                </>
            ),
            images: null
        }
    ];

    const specialFeatures = [
        {
            icon: "fa-solid fa-user-clock",
            title: "Conteúdos Semanais",
            description: "Aulas gravadas e liberação semanal dos novos conteúdos e módulos."
        },
        {
            icon: "fa-solid fa-users",
            title: "Acompanhamento Ativo",
            description: "Desafios práticos e check-ins mensais para garantir que você está aplicando o que aprendeu."
        },
        {
            icon: "fa-solid fa-headset",
            title: "Encontros Mensais ao Vivo",
            description: "Sessões interativas para tirar dúvidas e compartilhar experiências com toda a comunidade, além do suporte da sua mentora."
        }

    ];

    return (
        <Layout page="seja-real-nao-perfeito">
            <Header title="Thaís Basso" className="home" page="seja-real-nao-perfeito">
                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <img className="logo-home" src="logo-with-name.png" alt="Logo Thaís Basso" />
                    </Link>
                </div>
            </Header>
            
            <Flowery />
            
            <AboutMe 
                title="SEJA REAL, NÃO PERFEITO"  
                subtitle={<>UMA COMUNIDADE SOBRE SAÚDE, NUTRIÇÃO E ESTILO DE VIDA, BASEADA EM EVIDÊNCIAS</>}
                content={<>Olá, sou Thaís Basso, nutricionista pós-graduada em Nutrição Funcional e Comportamento Alimentar. Minha paixão pela nutrição vem da crença de que ela é uma ferramenta poderosa para transformar vidas, promovendo não apenas longevidade, mas uma vida plena e livre de doenças.</>} 
                image={image}
                callToAction="Inscreva-se agora"
                href={Link_1.url}
            />
            
            <Treatment 
                sections={treatmentSection} 
                query={props.data}  
            />
            
            <SpecialFeatures specialFeatures={specialFeatures} />

            <section className="investimento my-4">
                <Container>
                    <div className="m-3">
                        <Row>
                            <div className="col-lg-6 col-md-12">
                                <div className="my-5">
                                    <SectionTitle className="text-center">VOCÊ IRÁ APRENDER NA COMUNIDADE:</SectionTitle>
                                </div>
                                <div className="my-3 mx-3">
                                    <ul className="formas-pagamento">
                                        <li><b>Saúde Integrada</b>: Entenda como alimentação, sono, exercício e manejo do estresse se conectam para manter sua saúde e prevenir doenças.</li>
                                        <li><b>Nutrição Baseada em Evidências</b>: Desmistifique dietas radicais e descubra a verdade sobre o que realmente funciona para uma vida saudável.</li>
                                        <li><b>Autonomia Alimentar</b>: Aprenda a organizar sua alimentação de forma que você tenha liberdade para fazer escolhas conscientes, sem depender de dietas restritivas.</li>
                                        <li><b>Construção de Hábitos</b>: Descubra como criar e manter hábitos saudáveis que irão sustentar seu bem-estar ao longo da vida.</li>
                                    </ul>
                                    <p className="mt-3">INDO ALÉM... Porque aqui acreditamos que o <b>conhecimento é a chave para transformar vidas</b>. Para mudar, primeiro é preciso ter consciência, acesso a informações de qualidade, e a coragem para <b>conquistar a autonomia e liberdade</b> necessárias para fazer <b>mudanças reais e duradouras</b>. Estamos aqui para te guiar nessa jornada!</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="my-5">
                                    <SectionTitle className="text-center">QUAL O INVESTIMENTO?</SectionTitle>
                                </div>
                                <div className="my-3">
                                    <div className="bigger shadow-custom">
                                        <div>
                                            <h3>{Link_1.name}</h3>
                                            <span className="price">{Link_1.price}</span>
                                        </div>
                                        <div className="text-center">
                                            <CallToAction 
                                                text="Inscrever-me"
                                                href={Link_1.url}
                                            />
                                        </div>
                                    </div>
                                    <div className="inline shadow-custom">
                                        <div>
                                            <h3>{Link_2.name}</h3>
                                            <span className="price">{Link_2.price}</span>
                                        </div>
                                        <CallToAction 
                                            text="Inscrever-me"
                                            href={Link_2.url}
                                        />
                                    </div>
                                    <div className="inline shadow-custom">
                                        <div>
                                            <h3>{Link_3.name}</h3>
                                            <span className="price">{Link_3.price}</span>
                                        </div>
                                        <CallToAction 
                                            text="Inscrever-me"
                                            href={Link_3.url}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <h4 className="effect-phrase">"Estamos aqui para ajudar você a construir uma vida que não seja apenas longa, mas que seja <b>vivida com qualidade, saúde e equilíbrio.</b> Não há momento certo para começar, o melhor momento é agora, quando você decide mudar. Invista no seu futuro hoje!"</h4>
                </Container>
            </section>

            <ActionBanner 
                callToAction="Venha fazer parte do nosso grupo" 
                href={Link_1.url}
                content={<>Não existe hora certa para começar, a melhor hora é quando você decide mudar.<br/>Comece a investir no seu eu do futuro agora mesmo!</>} 
                text="SERÁ UM PRAZER COMPARTILHAR E APRENDER CONTIGO!" 
                image={<Woman />} 
            />
        </Layout>
    );
}

export const Head = () => <Seo title="Seja Real, Não Perfeito | Thaís Basso" />;

export const query = graphql`
    query Campaing {
        ProfileImageCampaign: file(relativePath: { eq: "fotos-thais/waiting-room-square.png" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
            }
        }

        plates: allFile(filter: { relativePath: { regex: "/campaign-first-section/" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                    }
                }
            }
        }

        foods: allFile(filter: { relativePath: { regex: "/campaign-second-section/" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                    }
                }
            }
        }
    }
`;
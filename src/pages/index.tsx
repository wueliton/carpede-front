import React from 'react';
import Carousel from 'react-slick';
import { Head, Button } from '../components';

const Home = (): JSX.Element => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <Head
        title="Sua empresa com um aplicativo exclusivo de Delivery"
        description="Seu aplicativo exclusivo de Delivery, sem comissões por pedido, sem concorrência e a melhor experiência em entregas com atualizações em tempo real."
        keywords="aplicativo delivery, app delivery, aplicativo personalizado delivery, aplicativo de entregas, aplicativo, app, negócio, entregas, aplicativo para meu negócio, aplicativo para negócios"
      />
      <section className="container yourApp">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h1>
                seu aplicativo de delivery com a sua
                <span> marca</span>
              </h1>
              <h3>
                Tenha a sua própria plataforma de pedidos, sem concorrência, sem
                taxas por pedido e a identidade de sua Empresa.
              </h3>
              <Button text="Começar agora" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mobile">
              <img src="./images/phone.jpg" alt="Celular" />
              <span className="screen">
                <Carousel {...settings}>
                  <div>
                    <img src="./images/screen1.jpeg" alt="Screen 1" />
                  </div>
                  <div>
                    <img src="./images/screen2.jpg" alt="Screen 1" />
                  </div>
                  <div>
                    <img src="./images/screen3.jpg" alt="Screen 1" />
                  </div>
                  <div>
                    <img src="./images/screen4.jpg" alt="Screen 1" />
                  </div>
                  <div>
                    <img src="./images/screen5.jpg" alt="Screen 1" />
                  </div>
                  <div>
                    <img src="./images/screen6.jpg" alt="Screen 1" />
                  </div>
                </Carousel>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container calculadora">
        <div className="row">
          <div className="col-md-12 title">
            <h2>
              calculadora de
              <span> taxas</span>
            </h2>
          </div>
          <div className="col-md-6">
            <h3>
              Faça o comparativo e veja quanto é o custo do comissionamento
              pagos para outros aplicativos.
            </h3>
            <p>
              Além do valor de comissionamento, você divide espaço com muitos
              outros concorrentes e valores nada competitivos.
            </p>
          </div>
          <div className="col-md-6 calculate">
            <div className="goCalc">
              <p>Qual valor aproximado mensal de pedidos em aplicativos?</p>
              <input type="range" />
              <p>Qual aplicativo sua empresa utiliza?</p>
              <div className="row">
                <div className="col-md-4">Ifood</div>
                <div className="col-md-4">Rappi</div>
                <div className="col-md-4">Uber Eats</div>
              </div>
              <Button text="Calcular" />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>
              tenha um aplicativo
              <span> sem taxas</span>
            </h2>
            <h3>
              Com o Carpede você obtém muitas vantagens, além de possuir um
              aplicativo exclusivo de sua empresa.
            </h3>
          </div>
        </div>
        <div className="row cards">
          <div className="col-md-6">
            <div className="row">
              <div className="col-auto">
                <img
                  src="./images/grafico-de-linha.png"
                  alt="Sem taxa de comissionamento"
                />
              </div>
              <div className="col">
                <h3>Sem taxa de comissionamento</h3>
                <p>
                  Você paga somente a assinatura mensal, e nada mais além
                  disso.*
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-auto">
                <img
                  src="./images/relogio.png"
                  alt="Sem tempo mínimo de adesão"
                />
              </div>
              <div className="col">
                <h3>Sem tempo mínimo de adesão</h3>
                <p>O cancelamento pode ser realizado a qualquer momento.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-auto">
                <img
                  src="./images/estrela.png"
                  alt="Aplicativo personalizado"
                />
              </div>
              <div className="col">
                <h3>Aplicativo personalizado</h3>
                <p>
                  O aplicativo de sua Empresa será desenvolvido com a sua Marca.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-auto">
                <img src="./images/atendimento.png" alt="Suporte exclusivo" />
              </div>
              <div className="col">
                <h3>Suporte exclusivo</h3>
                <p>
                  Atendimento personalizado, com todo o suporte para começar a
                  usar em seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>
              Mais que somente um aplicativo de Delivery, um novo processo para
              o seu negócio!
            </h3>
            <p>
              A sua assinatura Carpede possui três aplicativos, um para o seu
              cliente, um para o seu restaurante e um aplicativo para o seu
              entregador, para que seu cliente acompanhe todo o processo de
              preparo, até a entrega!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

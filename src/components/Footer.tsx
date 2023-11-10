import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.div`
  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
`;

const FooterContainer = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  @media(max-width: 900px) {
    grid-template-columns: repeat(2, auto);
  }
  @media(max-width: 688px) {
    grid-template-columns: repeat(1, auto);
    
  }
`;

const Section = styled.div`
  > h2 {
    color: #fff;
    text-align: start;
  }

`;

const SubFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8e8e9d;
  font-size: 10px;
  margin-top: 20px;
  padding-bottom: 15px;
  cursor: default;
  user-select: none;
  > span {
    margin: 0 5px;
    color: #cdcbcb;
  }
`;

const Hr = styled.hr`
  width: 90%; 
  margin: auto;
  border: none;
  border-top: 1px solid #afafbf33;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #fff;
`;

const NewsSection = styled.div``;

const NewsRow = styled.div`
    color: #cdcbcb;
    width: 300px;
    height: 250px;
    overflow: auto;
    >div {
        padding: 5px 0;
        >h4 {
            display: flex;
            color: #8e8e9d;
        }
        .BrandsIcon_news {
            color: #cdcbcb;
            margin-right: 10px;
        }
    }
    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background: #adadbf33;
        border: none;
        border-radius: 10px;
        &:hover{
            background: #636363;
        } 
    }
`;

const LinkRow = styled.div`
  display: flex;
  min-width: 200px;
  align-items: center;
  justify-content: start;
  margin-top: 2px;
  padding: 3px 0;
  cursor: pointer;
  > h4 {
    color: #cdcbcb;
    font-size: 12px;
    > span {
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background: #afafbf50;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    &:hover {
      color: #fff;
      > span {
        > i {
          color: #cdcbcb;
        }
      }
    }
  }

  .BrandsIcon {
    padding-right: 5px;
    font-size: 18px;
    &:hover {
      color: #cdcbcb;
      > span {
        > i {
          color: #cdcbcb;
        }
      }
    }
  }
`;

const FooterObj = [
  {
    id: "section1",
    title: "Ayuda y Soporte 🖥️",
    links: [
      {
        name: "Contacta con Nosotros",
        link: "#",
      },
    ],
  },
  {
    id: "section2",
    title: "Sobre Nosotros",
    links: [
      {
        name: "Equipo",
        link: "#",
      },
      {
        name: "Nuestro Objetivo",
        link: "#",
      },
    ],
  },
  {
    id: "section3",
    title: "Siguenos en 👇🏼",
    links: [
      {
        name: "Facebook",
        link: "https://www.facebook.es",
        icon: faFacebook,
      },
      {
        name: "Instagram",
        link: "#",
        icon: faInstagram,
      },
      {
        name: "Twitter",
        link: "#",
        icon: faTwitter,
      },
    ],
  },
];

const newObj = [
  {
    title: "Últimas Notícias",
    news: [
      {
        platform: "Twitter",
        icon: faTwitter,
        news: "Vogue acaba de subir una exclusica a la sey colaboración de Rabanne con H&M.",
        link: "#",
      },
      {
        platform: "Twitter",
        icon: faTwitter,
        news: "La superestrella del estilismo Harry Lambert toma la calle con una colección de Zara de inspiración vintage.",
        link: "#",
      },
      {
        platform: "Facebook",
        icon: faFacebook,
        news: "¡YOVISTOASÍ ha subido una nueva publicación!",
        link: "#",
      },
      {
        platform: "Twitter",
        icon: faTwitter,
        news: "‘Fashion Law’ es una de las profesiones más demandadas de la moda y que más empleo está generando en el sector.",
        link: "#",
      },
      {
        platform: "Instagram",
        icon: faInstagram,
        news: "¡YOVISTOASI ha subido una nueva publicación!",
        link: "#",
      },
      {
        platform: "Twitter",
        icon: faTwitter,
        news: "Lefties y la colección de Navidad que tiene todo lo que querrás para estas fiestas.",
        link: 'https://www.vogue.es/articulos/lefties-coleccion-navidad-2023-jersey-pijama-navideno',
      }
    ],
  },
];

const SocialIcon = styled.em`
  color: #141414;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        {FooterObj.map((elem, i) => (
          <Section key={i}>
            <h2>{elem.title}</h2>
            {elem.links.map((link, j) => (
              <LinkRow key={j}>
                <SocialIcon className="BrandsIcon">
                  <FontAwesomeIcon icon={link.icon} />
                </SocialIcon>
                <h4>{link.name}</h4>
              </LinkRow>
            ))}
          </Section>
        ))}
        {newObj.map((elem, i) => (
          <NewsSection key={i}>
            <Title>{elem.title}</Title>
            <NewsRow>
                {elem.news.map((newOne, j)=> (
                <div key={j}>
                    <h4>
                        <SocialIcon className="BrandsIcon_news">
                            <FontAwesomeIcon icon={newOne.icon} />
                        </SocialIcon>
                        {newOne.news}
                    </h4> 
                    <Hr style={{margintop: '40px'}}></Hr>
                </div>
                               
                ))}
            </NewsRow>
          </NewsSection>
        ))}
      </FooterContainer>
      <Hr></Hr>
      <SubFooter>
        © {new Date().getFullYear()} Copyright <span> YOVISTOASÍ Team </span>
      </SubFooter>
    </FooterWrapper>
  );
}

export default Footer;

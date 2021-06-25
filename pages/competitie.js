import { Heading, Box, Text } from "@chakra-ui/react";
import Wedstrijd from "../components/wedstrijden/wedstrijd";
import { NextSeo } from "next-seo";

export default function wedstrijd({ wedstrijds }) {
  const SEO = {
    title: "Wedstrijden | VW Korfbalplatform",
    description:
      "De pagina waar je alle gespeelde en nog te spelen wedstrijden terug kan vinden van voorwaarts",
    openGraph: {
      url: "https://front-end-eindwerk.vercel.app/competitie",
      title: "Wedstrijden | VW Korfbalplatform",
    },
  };
  const sortedMatchen = wedstrijds
    .sort((a, b) => a.datum.slice(5, 7) - b.datum.slice(5, 7))
    .map((wedstrijd) => wedstrijd.datum.slice(5, 7))
    .filter((el, index, array) => array.indexOf(el) === index);
  return (
    <>
      <NextSeo {...SEO} />
      <Box p={["0 6px 6px", "0 9px 9px", "0 14px 14px", "0px 18px 18px"]}>
        <Heading
          as='h1'
          fontSize={["22px", "26px", "30px", "34px"]}
          padding={["22px", "26px", "30px", "34px"]}
          textAlign='center'
        >
          <Box>
            <Text>
              <div className='color'>Wedstrijden</div> van Voorwaarts KKc
            </Text>
          </Box>
        </Heading>
        {sortedMatchen.map((e) =>
          (() => {
            switch (e) {
              case "01":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Januari 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "01",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Jan'
                        />
                      ))}
                  </>
                );
              case "02":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Februari 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "02",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Feb'
                        />
                      ))}
                  </>
                );
              case "03":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Maart 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "03",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Mar'
                        />
                      ))}
                  </>
                );
              case "04":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      April 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "04",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Apr'
                        />
                      ))}
                  </>
                );
              case "05":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Mei 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "05",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Mei'
                        />
                      ))}
                  </>
                );
              case "06":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Juni 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "06",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Jun'
                        />
                      ))}
                  </>
                );
              case "07":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Juli 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "07",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Jul'
                        />
                      ))}
                  </>
                );
              case "08":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Augustus 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "08",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Aug'
                        />
                      ))}
                  </>
                );
              case "09":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      September 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "09",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Sep'
                        />
                      ))}
                  </>
                );
              case "10":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      Oktober 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "10",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Okt'
                        />
                      ))}
                  </>
                );
              case "11":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      November 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "11",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Nov'
                        />
                      ))}
                  </>
                );
              case "12":
                return (
                  <>
                    <Box
                      className='divider'
                      fontSize={["12px", "14px", "16px", "16px"]}
                    >
                      December 2021
                    </Box>
                    {wedstrijds
                      .filter(
                        (wedstrijd) => wedstrijd.datum.slice(5, 7) == "12",
                      )
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((wedstrijd) => (
                        <Wedstrijd
                          key={wedstrijd.id}
                          wedstrijd={wedstrijd}
                          startuur={wedstrijd.startuur.slice(11, 16)}
                          stopuur={wedstrijd.stopuur.slice(11, 16)}
                          dag={wedstrijd.datum.slice(8, 10)}
                          maand={wedstrijd.datum.slice(5, 7)}
                          jaar={wedstrijd.datum.slice(0, 4)}
                          maandnaam='Dec'
                        />
                      ))}
                  </>
                );
            }
          })(),
        )}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wdev2.be/lars21/eindwerk/api/wedstrijds.json",
  );
  const wedstrijds = await response.json();
  return {
    props: {
      wedstrijds,
    },
    revalidate: 3600,
  };
}

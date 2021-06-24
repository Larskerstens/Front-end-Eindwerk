import Head from "next/head";
import { Heading, Box, Text } from "@chakra-ui/react";
import Agenda from "../components/agenda/agendapunt";

export default function index({ agendas }) {
  const sortedAgendas = agendas
    .sort((a, b) => a.datum.slice(5, 7) - b.datum.slice(5, 7))
    .map((agenda) => agenda.datum.slice(5, 7))
    .filter((el, index, array) => array.indexOf(el) === index);
  return (
    <>
      <Head>
        <title>Agenda pagina | Korfbalplatform</title>
      </Head>
      <Box p={["0 6px 6px", "0 9px 9px", "0 14px 14px", "0px 18px 18px"]}>
        <Heading
          as='h1'
          fontSize={["22px", "26px", "30px", "34px"]}
          padding={["22px", "26px", "30px", "34px"]}
          textAlign='center'
        >
          <Box>
            <Text>
              <div className='color'>Agenda</div> van Voorwaarts KKc
            </Text>
          </Box>
        </Heading>
        {sortedAgendas.map((e) =>
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "01")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "02")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "03")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "04")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "05")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "06")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "07")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "08")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "09")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "10")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "11")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
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
                    {agendas
                      .filter((agenda) => agenda.datum.slice(5, 7) == "12")
                      .sort(
                        (a, b) => a.datum.slice(8, 10) - b.datum.slice(8, 10),
                      )
                      .map((agenda) => (
                        <Agenda
                          key={agenda.id}
                          agenda={agenda}
                          startuur={agenda.startuur.slice(11, 16)}
                          stopuur={agenda.stopuur.slice(11, 16)}
                          dag={agenda.datum.slice(8, 10)}
                          maand={agenda.datum.slice(5, 7)}
                          jaar={agenda.datum.slice(0, 4)}
                          maandnaam='Dec'
                        />
                      ))}
                  </>
                );
            }
          })(),
        )}
        {/* <Box className='divider' fontSize={["12px", "14px", "16px", "16px"]}>
          Vandaag
        </Box>
        <Agenda />
        <Agenda />
        <Agenda />
        <Box className='divider' fontSize={["12px", "14px", "16px", "16px"]}>
          Juni 2021
        </Box>
        <Agenda />
        <Box className='divider' fontSize={["12px", "14px", "16px", "16px"]}>
          Juli 2021
        </Box>
        <Agenda />
        <Agenda /> */}
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wdev2.be/lars21/eindwerk/api/agendas.json",
  );
  const agendas = await response.json();
  //console.log(clubs);
  return {
    props: {
      agendas,
    },
    revalidate: 3600,
  };
}

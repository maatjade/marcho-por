/*
  MOTIVOS DE MARCHO POR
  Para agregar un motivo, copia un bloque { ... } dentro de MOTIVOS, pégalo antes del "];" final y cambia sus datos.
  - id: palabra corta sin espacios ni tildes (será el enlace: marchopor.com/#tu-id)
  - cat: una de las secciones de CATEGORIAS (seguridad, transporte, congreso, justicia, mujeres, educacion, salud, economia, clima, ambiente)
  - regiones: una o más de REGIONES
  - frase: lo que sale grande en el cartel (máximo ~8 palabras)
  - dato: la cifra o hecho, con fecha
  - contexto: la otra versión o la aclaración
  - fuentes: la primera es la que va en el QR del cartel
*/
const REGIONES = ["Nacional", "Lima y Callao", "Norte", "Sur andino", "Amazonía"];
const CATEGORIAS = [
  { id: "seguridad", nombre: "Seguridad ciudadana", desc: "Extorsión, sicariato y miedo cotidiano" },
  { id: "transporte", nombre: "Transporte", desc: "Choferes, paros y gremios" },
  { id: "congreso", nombre: "Congreso y leyes", desc: "Normas aprobadas o en debate" },
  { id: "justicia", nombre: "Justicia y derechos humanos", desc: "Víctimas, fiscales y tribunales" },
  { id: "mujeres", nombre: "Mujeres", desc: "Violencia de género y feminicidio" },
  { id: "educacion", nombre: "Educación", desc: "Presupuesto, docentes y escuelas" },
  { id: "salud", nombre: "Salud", desc: "Atención, medicinas y niñez" },
  { id: "economia", nombre: "Economía y costo de vida", desc: "Pobreza, empleo y precios" },
  { id: "clima", nombre: "Clima y desastres", desc: "El Niño, incendios y prevención" },
  { id: "ambiente", nombre: "Ambiente y agua", desc: "Minería ilegal, derrames y agua potable" }
];
const MOTIVOS = [
  {
    id: "extorsion", cat: "seguridad", regiones: ["Nacional"], tema: "Extorsión",
    frase: "Queremos vivir sin pagar cupos",
    dato: "La Fiscalía registró cerca de 14 mil denuncias por extorsión en el Perú entre enero y julio de 2026.",
    contexto: "La PNP sostiene que homicidios y extorsiones bajaron frente al mismo periodo de 2025. Aun así, el volumen de denuncias sigue siendo muy alto.",
    fuentes: [
      { medio: "América Noticias", fecha: "2026", titulo: "Fiscalía reporta 14 mil casos de extorsión en 2026", url: "https://www.americatv.com.pe/noticias/actualidad/fiscalia-reporta-14-mil-casos-extorsion-2026-n522272" },
      { medio: "Caretas", fecha: "mayo 2026", titulo: "Extorsiones y secuestros disminuyeron en 2026, según reportes policiales", url: "https://caretas.pe/nacional/seguridad-ciudadana-extorsiones-y-secuestros-disminuyeron-en-2026-segun-reportes-policiales/" }
    ]
  },
  {
    id: "presos", cat: "seguridad", regiones: ["Nacional"], tema: "Extorsión",
    frase: "Más extorsión, casi los mismos presos",
    dato: "Según el Observatorio del Crimen y la Violencia, las personas encarceladas por extorsión aumentaron en apenas 475 desde 2024, mientras el delito sigue expandiéndose.",
    contexto: "El mismo observatorio registra una evolución preocupante de homicidios y homicidios fallidos en los primeros ocho meses de 2026.",
    fuentes: [
      { medio: "Gestión", fecha: "2026", titulo: "Extorsión se expande pero los presos apenas crecen: solo 475 más desde 2024", url: "https://gestion.pe/peru/inseguridad-en-peru-extorsion-se-expande-pero-los-presos-apenas-crecen-solo-475-mas-desde-2024-segun-observatorio-del-crimen-y-la-violencia-noticia/" }
    ]
  },
  {
    id: "ansiedad", cat: "seguridad", regiones: ["Nacional"], tema: "Salud mental",
    frase: "El miedo también enferma",
    dato: "El 36% de adultos dice que la inseguridad aumentó su ansiedad y estrés en 2026. En 2025 la cifra era 29%.",
    contexto: "Es una encuesta del Observatorio del Crimen y la Violencia del BCP y Credicorp. Según el mismo reporte, 45% de peruanos conoce negocios que cerraron o redujeron su actividad por la inseguridad.",
    fuentes: [
      { medio: "Infomercado", fecha: "2026", titulo: "45% de peruanos conoce negocios que cerraron o restringieron sus actividades por la inseguridad", url: "https://infomercado.pe/45-de-peruanos-conoce-negocios-que-cerraron-o-restringieron-sus-actividades-por-la-inseguridad/" }
    ]
  },
  {
    id: "choferes", cat: "transporte", regiones: ["Nacional", "Lima y Callao"], tema: "Choferes",
    frase: "Ni un chofer más asesinado",
    dato: "Según la Policía Nacional, 64 choferes fueron asesinados por presuntos sicarios y extorsionadores en lo que va de 2026.",
    contexto: "Los gremios de transporte exigen acciones contra la extorsión; el Ejecutivo ha anunciado nuevas medidas de seguridad.",
    fuentes: [
      { medio: "Caretas", fecha: "2026", titulo: "Más de 60 choferes fueron asesinados en lo que va del 2026, según la PNP", url: "https://caretas.pe/?p=829452" }
    ]
  },
  {
    id: "paro-transporte", cat: "transporte", regiones: ["Lima y Callao"], tema: "Gremios",
    frase: "Manejar no debería costar la vida",
    dato: "El gremio de transporte urbano de Lima y Callao convocó un paro para el 25 de agosto tras pedir, sin respuesta, una audiencia con la presidenta para tratar la extorsión y el sicariato.",
    contexto: "El gremio propuso reforzar unidades policiales especializadas, controlar las comunicaciones en los penales y poner agentes en paraderos de alto riesgo.",
    fuentes: [
      { medio: "El Búho", fecha: "18 ago 2026", titulo: "Transportistas de Lima y Callao convocan a paro el 25 de agosto", url: "https://elbuho.pe/?p=432832" }
    ]
  },
  {
    id: "leyes-crimen", cat: "congreso", regiones: ["Nacional"], tema: "Crimen organizado",
    frase: "Leyes que no protejan al crimen",
    dato: "El fiscal Jorge Chávez Cotrina pidió una comisión para revisar normas como la Ley 32108, que según él dejó unos 35 delitos fuera de la figura de crimen organizado.",
    contexto: "En 2024 el propio Congreso ajustó esa norma con la Ley 32138. En agosto de 2026, una diputada de Juntos por el Perú anunció un proyecto para derogar estas leyes.",
    fuentes: [
      { medio: "La República", fecha: "1 mar 2026", titulo: "Fiscal Jorge Chávez pide creación de una comisión para revisar leyes pro crimen", url: "https://larepublica.pe/politica/2026/03/01/fiscal-jorge-chavez-pide-creacion-de-una-comision-para-revisar-leyes-pro-crimenhnews-1378972" },
      { medio: "La República", fecha: "1 ago 2026", titulo: "Diputada de Juntos por el Perú presentará proyecto para derogar leyes procrimen", url: "https://larepublica.pe/politica/2026/08/01/diputada-de-juntos-por-el-peru-presentara-proyecto-de-ley-para-derogar-leyes-procrimen-hnews-1555456" }
    ]
  },
  {
    id: "fuero-militar", cat: "congreso", regiones: ["Nacional"], tema: "Fuero militar",
    frase: "Justicia ordinaria para todos",
    dato: "Expertos de la ONU pidieron al Perú no aprobar un proyecto que amplía el fuero militar policial y limita el papel de los jueces ordinarios en casos con policías y militares.",
    contexto: "Su principal defensor, Fernando Rospigliosi, sostiene que estas normas buscan evitar la persecución judicial contra policías y militares.",
    fuentes: [
      { medio: "El Búho", fecha: "19 jun 2026", titulo: "La ONU exhorta al Congreso a frenar la ley que amplía el fuero militar", url: "https://elbuho.pe/?p=426764" }
    ]
  },
  {
    id: "victimas-protestas", cat: "justicia", regiones: ["Sur andino", "Nacional"], tema: "Protestas 2022-2023",
    frase: "49 muertos esperan justicia",
    dato: "Familiares de las 49 personas fallecidas en las protestas de 2022 y 2023 hicieron un plantón en junio de 2026 frente al Palacio de Justicia para exigir justicia.",
    contexto: "Además de justicia, el plantón incluyó pedidos políticos, como rechazar al nuevo gobierno y liberar al expresidente Pedro Castillo.",
    fuentes: [
      { medio: "El Financiero (EFE)", fecha: "16 jun 2026", titulo: "Víctimas de protestas en Perú rechazan a Keiko Fujimori como presidenta", url: "https://www.elfinanciero.com.mx/mundo/2026/06/16/victimas-de-protestas-en-peru-rechazan-a-keiko-fujimori-como-presidenta-es-hija-de-un-dictador/" }
    ]
  },
  {
    id: "lizeth", cat: "justicia", regiones: ["Lima y Callao"], tema: "Caso Lizeth Marzano",
    frase: "Justicia para Lizeth",
    dato: "La deportista nacional Lizeth Marzano Noguera murió atropellada el 17 de febrero mientras corría en San Isidro. El conductor huyó sin auxiliarla. Su familia pide que el caso avance antes de que venza la prisión preventiva, el 25 de noviembre.",
    contexto: "El investigado, Adrián Villar, cumple prisión preventiva por homicidio culposo, omisión de socorro y fuga; su defensa dice que no la auxilió porque entró en shock. La periodista Marisel Linares, investigada por presunto encubrimiento, pidió archivar su caso: la audiencia es el 28 de octubre.",
    fuentes: [
      { medio: "La República", fecha: "27 oct 2026", titulo: "Caso Lizeth Marzano: Marisel Linares pide archivar investigación en su contra", url: "https://larepublica.pe/sociedad/2026/10/27/caso-lizeth-marzano-periodista-marisel-linares-pide-archivar-investigacion-en-su-contra-por-atropello-de-deportista-en-san-isidro-1676565" },
      { medio: "El Peruano", fecha: "31 mar 2026", titulo: "PJ ratifica 9 meses de prisión preventiva para Adrián Villar", url: "https://www.elperuano.pe/noticia/292472-pj-ratifica-9-meses-de-prision-preventiva-para-adrian-villar-por-muerte-de-lizeth-marzano" },
      { medio: "RPP", fecha: "26 feb 2026", titulo: "Caso Lizeth Marzano: atropello, fuga y presunto encubrimiento", url: "https://rpp.pe/peru/actualidad/caso-lizeth-marzano-atropello-fuga-y-presunto-encubrimiento-complican-a-adrian-villar-y-su-entorno-noticia-1677602" }
    ]
  },
  {
    id: "javier-prado", cat: "justicia", regiones: ["Lima y Callao"], tema: "Caso Javier Prado",
    frase: "Justicia para Christian y Joseph",
    dato: "En 2019, la camioneta que conducía Melisa González Gagliuffi atropelló a varios jóvenes en la avenida Javier Prado. Murieron Christian Buitrón y Joseph Huashuayo. Fue condenada a seis años de prisión en 2022, pero en 2023 la pena se cambió por un grillete electrónico.",
    contexto: "Es un caso de 2019 que sigue vigente como reclamo de las familias. En 2022 figuró como no habida y el Mininter ofreció S/30.000 por información; la jueza que aprobó el grillete sostuvo que no estuvo prófuga. El padre de Joseph cuestiona la medida.",
    fuentes: [
      { medio: "RPP", fecha: "7 jun 2022", titulo: "Melisa Gonzáles Gagliuffi es condenada a 6 años de cárcel por causar la muerte de dos personas", url: "https://rpp.pe/lima/judiciales/melisa-gonzales-gagliuffi-es-condenada-a-6-anos-de-carcel-por-causar-la-muerte-de-dos-personas-noticia-1410218" },
      { medio: "Exitosa", fecha: "19 may 2023", titulo: "Melisa González Gagliuffi siempre ha estado en la clandestinidad, señaló padre de Joseph Huashuayo", url: "https://www.exitosanoticias.pe/actualidad/melisa-gonzalez-gagliuffi-siempre-ha-estado-clandestinidad-asi-lo-senalo-padre-joseph-huashuayo-n99396/amp" }
    ]
  },
  {
    id: "fiscales", cat: "justicia", regiones: ["Nacional"], tema: "Instituciones",
    frase: "Independencia para fiscales y jueces",
    dato: "El Congreso inhabilitó por 10 años a la fiscal suprema Delia Espinoza en diciembre de 2025 y de nuevo en mayo de 2026. Un juzgado declaró inaplicable la primera sanción.",
    contexto: "El Congreso la acusó de no aplicar correctamente la Ley 32130. La segunda inhabilitación sigue vigente.",
    fuentes: [
      { medio: "RPP", fecha: "28 may 2026", titulo: "PJ declara inaplicable una primera inhabilitación que el Congreso le impuso a Delia Espinoza", url: "https://rpp.pe/politica/judiciales/pj-declara-inaplicable-una-primera-inhabilitacion-que-el-congreso-le-impuso-a-delia-espinoza-noticia-1690565" }
    ]
  },
  {
    id: "feminicidios", cat: "mujeres", regiones: ["Nacional"], tema: "Feminicidio",
    frase: "Ni una menos",
    dato: "El Ministerio de la Mujer registró 67 feminicidios en el primer semestre de 2026: aproximadamente uno cada tres días.",
    contexto: "En todo 2025 se registraron 134 feminicidios.",
    fuentes: [
      { medio: "Infobae Perú", fecha: "14 set 2026", titulo: "Feminicidios en Perú: 67 víctimas en seis meses", url: "https://www.infobae.com/peru/2026/09/14/feminicidios-en-peru-67-victimas-en-seis-meses-y-casos-que-siguen-sin-justicia-por-fugas-demoras-y-decisiones-judiciales-pendientes/" },
      { medio: "ATV", fecha: "2026", titulo: "Feminicidios en Perú: 134 casos en 2025", url: "https://www.atv.pe/noticia/feminicidios-peru-2025-2026/" }
    ]
  },
  {
    id: "borrar-feminicidio", cat: "mujeres", regiones: ["Nacional"], tema: "Proyecto de ley",
    frase: "El feminicidio existe: no lo borren",
    dato: "Un proyecto de la congresista Milagros Jáuregui (Renovación Popular) propone sacar el delito de feminicidio del Código Penal y reemplazarlo por el de asesinato de la pareja.",
    contexto: "El proyecto aún no se debate en comisión. Se apoya en un argumento de igualdad; organizaciones de mujeres advierten que debilitaría las estadísticas y la prevención.",
    fuentes: [
      { medio: "La República", fecha: "3 may 2026", titulo: "Feminicidios en 2026 y un proyecto del Congreso que busca borrarlos del Código Penal", url: "https://larepublica.pe/sociedad/2026/05/03/hasta-38-feminicidios-en-2026-y-un-proyecto-del-congreso-que-busca-borrarlos-del-codigo-penal-ntpe-299133" }
    ]
  },
  {
    id: "educacion", cat: "educacion", regiones: ["Nacional"], tema: "Presupuesto",
    frase: "6% del PBI para educación",
    dato: "El Sutep afirma que el presupuesto educativo propuesto para 2027 equivale a 4,9% del PBI, por debajo del 6% que reclama. Convoca paro nacional el 29 de octubre.",
    contexto: "<b>Dato de parte:</b> el 4,9% es cálculo del sindicato. El presupuesto 2027 todavía se debate en el Congreso.",
    fuentes: [
      { medio: "Infobae Perú", fecha: "26 oct 2026", titulo: "SUTEP anuncia paro nacional contra el Gobierno para el 29 de octubre", url: "https://www.infobae.com/peru/2026/10/26/sutep-anuncia-paro-nacional-contra-el-gobierno-durante-el-viaje-de-keiko-fujimori-a-el-salvador/" }
    ]
  },
  {
    id: "essalud", cat: "salud", regiones: ["Lima y Callao", "Nacional"], tema: "EsSalud",
    frase: "Citas y medicinas para los asegurados",
    dato: "Pacientes de EsSalud denuncian esperas de meses y falta de medicinas; reportes citan un desabastecimiento de más de 55% en algunas regiones. EsSalud ha tenido 13 presidentes ejecutivos desde 2019.",
    contexto: "El presidente ejecutivo de EsSalud aseguró que existe presupuesto para mejorar el abastecimiento, y la institución anunció que llevaría el desabastecimiento a cero.",
    fuentes: [
      { medio: "Panamericana", fecha: "23 jun 2026", titulo: "EsSalud en crisis: pacientes denuncian falta de citas y medicamentos", url: "https://panamericana.pe/24horas/locales/470262-essalud-crisis-pacientes-denuncian-falta-citas-medicamentos-colapso-hospitales" },
      { medio: "El Peruano", fecha: "2026", titulo: "EsSalud anuncia que al 31 de julio se habrá reducido a cero desabastecimiento de medicinas", url: "https://elperuano.pe/noticia/300348-essalud-anuncia-que-al-31-de-julio-se-habra-reducido-a-cero-desabastecimiento-de-medicinas" }
    ]
  },
  {
    id: "anemia", cat: "salud", regiones: ["Nacional"], tema: "Niñez",
    frase: "Ningún niño con anemia",
    dato: "Según la ENDES 2025, el 34,9% de niñas y niños de 6 a 35 meses tiene anemia: más de uno de cada tres.",
    contexto: "La cifra bajó desde 43,1% en 2023.",
    fuentes: [
      { medio: "El Peruano", fecha: "19 jun 2026", titulo: "Resultados de la ENDES 2025 destacan reducción de la anemia", url: "https://elperuano.pe/noticia/298332-resultados-de-la-endes-2025-destaca-avances-en-vacunacion-infantil-y-reduccion-de-la-anemia" }
    ]
  },
  {
    id: "pobreza", cat: "economia", regiones: ["Nacional"], tema: "Pobreza",
    frase: "Uno de cada cuatro peruanos es pobre",
    dato: "El INEI informó que la pobreza monetaria alcanzó al 25,7% de la población en 2025. La pobreza extrema afecta a 1,6 millones de personas.",
    contexto: "La pobreza bajó 1,9 puntos frente a 2024, pero todavía no regresa a los niveles de hace seis años.",
    fuentes: [
      { medio: "El Peruano", fecha: "5 may 2026", titulo: "INEI: pobreza se redujo en 1.9% en el 2025 y afecta al 25.7% de peruanos", url: "https://elperuano.pe/noticia/295035-inei-pobreza-se-redujo-en-19-en-el-2025-y-afecta-al-257-de-peruanos" },
      { medio: "La República", fecha: "5 may 2026", titulo: "Pobreza baja a 25,7% pero no logra romper el rezago de hace seis años", url: "https://larepublica.pe/economia/2026/05/05/pobreza-golpea-a-88-millones-de-peruanos-baja-a-257-pero-no-logra-romper-el-rezago-de-hace-seis-anos-hnews-260760" }
    ]
  },
  {
    id: "informalidad", cat: "economia", regiones: ["Nacional"], tema: "Empleo",
    frase: "Trabajo formal, con derechos",
    dato: "Según el INEI, el 69,8% de los trabajadores ocupados fue informal entre abril de 2025 y marzo de 2026.",
    contexto: "Solo el 30,2% tuvo un empleo formal en ese periodo.",
    fuentes: [
      { medio: "Infomercado", fecha: "21 may 2026", titulo: "Informalidad laboral en Perú llega al 70% según el INEI", url: "https://infomercado.pe/informalidad-laboral-en-peru-llega-al-70-segun-el-inei/" }
    ]
  },
  {
    id: "combustible", cat: "economia", regiones: ["Lima y Callao"], tema: "Combustible",
    frase: "Combustible a precio justo",
    dato: "En agosto de 2026, el galón de diésel llegó a S/26,49 en grifos de La Victoria, en Lima.",
    contexto: "Especialistas atribuyen el alza al conflicto en Medio Oriente y a que el Perú depende de importar crudo y derivados.",
    fuentes: [
      { medio: "Panamericana", fecha: "13 ago 2026", titulo: "Alza de combustible: precio de la gasolina en Lima llega a S/24", url: "https://panamericana.pe/buenosdiasperu/locales/472683-alza-combustible-precio-gasolina-lima-llega-s-24-petroleo-s-25" }
    ]
  },
  {
    id: "elnino", cat: "clima", regiones: ["Norte", "Nacional"], tema: "El Niño",
    frase: "Prevenir cuesta menos que reconstruir",
    dato: "En junio, casi 800 municipios fueron declarados en emergencia por lluvias de El Niño. Credicorp Capital estima un costo de unos S/16 mil millones entre 2026 y 2027.",
    contexto: "El Gobierno anunció una estrategia de prevención de unos US$1.231 millones y bonos para familias afectadas.",
    fuentes: [
      { medio: "Primicias (EFE)", fecha: "jun 2026", titulo: "Casi 800 municipios en Perú son declarados en emergencia por El Niño", url: "https://www.primicias.ec/internacional/peru-declara-emergencia-municipios-fenomeno-nino-lluvias-126994/" },
      { medio: "El Comercio", fecha: "2026", titulo: "Fenómeno El Niño: el costo de llegar tarde", url: "https://elcomercio.pe/opinion/editorial/fenomeno-el-nino-el-costo-de-llegar-tarde-noticia/" },
      { medio: "Expreso (Ecuador)", fecha: "2026", titulo: "Gobierno interino de Perú anuncia medidas ante El Niño", url: "https://www.expreso.ec/internacional/gobierno-peru-anuncia-medidas-afrontar-fenomeno-nino-288506.html" }
    ]
  },
  {
    id: "incendios", cat: "clima", regiones: ["Sur andino"], tema: "Incendios",
    frase: "El fuego en los Andes también es emergencia",
    dato: "En octubre, incendios en el sur andino arrasaron cientos de hectáreas y dejaron víctimas entre comuneros y bomberos. Colectivos piden una comisión investigadora.",
    contexto: "A escala nacional, datos satelitales de Copernicus ubican el área quemada en 2026 por debajo del promedio de 20 años. El daño se concentra en zonas puntuales.",
    fuentes: [
      { medio: "Infobae Perú", fecha: "25 oct 2026", titulo: "Marcha contra la inseguridad y por efectos del Fenómeno El Niño", url: "https://www.infobae.com/peru/2026/10/25/marcha-contra-la-inseguridad-y-por-efectos-del-fenomeno-el-nino-se-realiza-este-sabado-24-de-octubre-en-lima-cusco-arequipa/" },
      { medio: "Current Wildfires (Copernicus GWIS)", fecha: "oct 2026", titulo: "Incendio cerca de Cahuanuyo y panorama nacional", url: "https://currentwildfires.com/es/incendio/wildfire-near-cahuanuyo-pe-2026/" }
    ]
  },
  {
    id: "mineria", cat: "ambiente", regiones: ["Amazonía", "Norte"], tema: "Minería ilegal",
    frase: "Fuera la minería ilegal de nuestros ríos",
    dato: "La PCM estima que la minería ilegal mueve más de US$12 mil millones, ha depredado más de 140 mil hectáreas de bosque y contaminado con mercurio al menos 225 cuerpos de agua.",
    contexto: "Son cifras oficiales presentadas en un evento del sector. El Gobierno reporta más de 130 operativos al mes en 2026.",
    fuentes: [
      { medio: "Reporte Minero", fecha: "5 may 2026", titulo: "Minería ilegal en Perú: interdicciones y estrategia de la PCM", url: "https://www.reporteminero.cl/noticia/noticias/2026/05/mineria-ilegal-peru-interdicciones-pcm-proexplo-2026" }
    ]
  },
  {
    id: "derrame", cat: "ambiente", regiones: ["Amazonía"], tema: "Derrame",
    frase: "El Amazonas no es un basurero",
    dato: "En abril de 2026 una embarcación que llevaba crudo a Brasil derramó más de 285 barriles en el río Amazonas, en Maynas (Loreto), según el OEFA. Cientos de familias se quedaron sin agua.",
    contexto: "El OEFA ordenó la limpieza total de las zonas afectadas.",
    fuentes: [
      { medio: "Infobae Perú", fecha: "14 abr 2026", titulo: "Río Amazonas: más de 285 barriles de petróleo crudo vertidos", url: "https://www.infobae.com/peru/2026/04/14/rio-amazonas-sufre-grave-contaminacion-mas-de-285-barriles-de-petroleo-crudo-fueron-vertidos-y-dejan-a-familias-sin-agua/" },
      { medio: "Gestión", fecha: "2026", titulo: "OEFA ordena limpieza total de áreas afectadas por derrame en el río Amazonas", url: "https://gestion.pe/peru/oefa-ordena-limpieza-total-de-areas-afectadas-por-derrame-de-petroleo-en-el-rio-amazonas-noticia/" }
    ]
  },
  {
    id: "agua", cat: "ambiente", regiones: ["Nacional"], tema: "Agua",
    frase: "Agua segura en cada casa",
    dato: "Más de 21 millones de peruanos, el 61,5% de la población, no tienen agua gestionada de manera segura, según el Ministerio de Vivienda.",
    contexto: "Segura quiere decir disponible dentro de la casa, todo el día y libre de contaminación. Mucha gente tiene acceso al agua, pero no con esas tres condiciones.",
    fuentes: [
      { medio: "Caretas", fecha: "1 oct 2026", titulo: "Más de 21 millones de peruanos no acceden a agua potable gestionada de manera segura", url: "https://caretas.pe/?p=837271" }
    ]
  },
  {
    id: "homicidios", cat: "seguridad", regiones: ["Nacional"], tema: "Homicidios",
    frase: "Cinco asesinatos al día no son normales",
    dato: "Entre el 28 de julio y el 30 de agosto de 2026 se registraron 180 homicidios en el Sinadef. El 74% fue con arma de fuego.",
    contexto: "El Sinadef todavía actualiza sus registros, así que la cifra puede subir. El Gobierno dice que podrá mostrar resultados en 2027 si el Congreso le da las facultades que pidió.",
    fuentes: [
      { medio: "El Búho", fecha: "2 set 2026", titulo: "Homicidios siguen imparables en el Perú durante la gestión de Keiko Fujimori", url: "https://elbuho.pe/2026/09/homicidios-siguen-imparables-en-el-peru-durante-la-gestion-de-keiko-fujimori/" }
    ]
  },
  {
    id: "transito", cat: "transporte", regiones: ["Nacional"], tema: "Seguridad vial",
    frase: "Llegar vivo no debería ser suerte",
    dato: "Según la Policía Nacional, 1.881 personas murieron en accidentes de tránsito en el Perú en lo que va de 2026, al 27 de julio.",
    contexto: "La PNP desplegó operativos en la Red Vial Nacional por Fiestas Patrias.",
    fuentes: [
      { medio: "El Peruano", fecha: "27 jul 2026", titulo: "Registran 1,881 fallecidos por accidentes de tránsito", url: "https://elperuano.pe/noticia/301124-registran-1881-fallecidos-por-accidentes-de-transito" }
    ]
  },
  {
    id: "ninas-madres", cat: "mujeres", regiones: ["Nacional"], tema: "Niñez",
    frase: "Niñas, no madres",
    dato: "Según el Minsa, 993 niñas menores de 14 años fueron madres en el Perú en 2025.",
    contexto: "Plan International advirtió que más de 70 niñas de hasta 14 años dieron a luz solo en los dos primeros meses de 2026.",
    fuentes: [
      { medio: "El Búho", fecha: "22 feb 2026", titulo: "En el 2025, 993 niñas menores de 14 años fueron madres en el Perú", url: "https://elbuho.pe/?p=413944" },
      { medio: "RPP", fecha: "26 feb 2026", titulo: "En lo que va del 2026, más de 70 niñas de hasta 14 años fueron madres", url: "https://rpp.pe/lima/actualidad/cifra-alarmante-solo-en-lo-que-va-del-2026-mas-de-70-ninas-de-hasta-14-anos-fueron-madres-noticia-1677691" }
    ]
  },
  {
    id: "colegios", cat: "educacion", regiones: ["Nacional"], tema: "Infraestructura",
    frase: "Colegios que no se caigan",
    dato: "Más de 26 mil colegios públicos tienen daños estructurales: casi la mitad de los cerca de 55 mil locales escolares que administra el Minedu.",
    contexto: "El Gobierno formalizó medidas para atenderlos mediante un decreto supremo.",
    fuentes: [
      { medio: "El Búho", fecha: "27 ago 2026", titulo: "Más de 26 mil colegios públicos en todo el Perú presentan daños estructurales", url: "https://elbuho.pe/?p=433735" }
    ]
  },
  {
    id: "hospitales", cat: "salud", regiones: ["Nacional", "Sur andino", "Norte"], tema: "Obras",
    frase: "Hospitales terminados, no abandonados",
    dato: "La Contraloría reporta 55 obras de salud paralizadas, con una inversión de S/4.574 millones. Piura, Puno y Cusco tienen siete cada una.",
    contexto: "Según la Contraloría, las causas principales son contratos incumplidos, falta de recursos y expedientes técnicos deficientes.",
    fuentes: [
      { medio: "La República", fecha: "1 ago 2026", titulo: "S/4.574 millones atrapados: 55 hospitales y centros de salud siguen paralizados", url: "https://larepublica.pe/sociedad/2026/08/01/s4574-millones-atrapados-55-hospitales-y-centros-de-salud-siguen-paralizados-en-el-peru-1029180" }
    ]
  },
  {
    id: "dengue", cat: "salud", regiones: ["Norte"], tema: "Dengue",
    frase: "El dengue también mata",
    dato: "Hasta el 22 de agosto, el dengue causó 57 muertes en 2026, más que en todo 2025 (49). Piura concentra la mayor cantidad de casos.",
    contexto: "Según el CDC-Minsa, los casos subieron 53% frente al mismo periodo del año anterior.",
    fuentes: [
      { medio: "Exitosa", fecha: "28 ago 2026", titulo: "Perú supera en ocho meses de 2026 el récord de fallecidos por dengue de todo 2025", url: "https://www.exitosanoticias.pe/actualidad/peru-supera-ocho-meses-2026-record-fallecidos-dengue-todo-2025-n182564" }
    ]
  },
  {
    id: "gasto-congreso", cat: "congreso", regiones: ["Nacional"], tema: "Presupuesto",
    frase: "Menos gasto en el Congreso",
    dato: "El presupuesto de apertura del Congreso para 2026 es de S/1.768 millones, frente a unos S/589 millones en 2021.",
    contexto: "El cálculo es de un analista que usó datos de Transparencia. Parte del aumento responde a la vuelta a la bicameralidad, con 130 diputados y 60 senadores.",
    fuentes: [
      { medio: "La República", fecha: "15 ene 2026", titulo: "Congreso duplicó su gasto anual en solo cuatro años", url: "https://larepublica.pe/politica/2026/01/13/congreso-duplico-su-gasto-anual-de-600-millones-de-soles-paso-a-1200-millones-en-solo-4-anos-hnews-414284" }
    ]
  },
  {
    id: "petroperu", cat: "economia", regiones: ["Nacional"], tema: "Petroperú",
    frase: "Nuestros impuestos, no más salvatajes",
    dato: "En mayo de 2026 el Gobierno aprobó un nuevo rescate de hasta US$2.500 millones para Petroperú, que ya recibió unos S/18.400 millones en ayudas en los últimos cuatro años.",
    contexto: "El presidente de Petroperú sostiene que es financiamiento privado y no un aporte del Estado. La SNMPE advierte que el Estado asume el riesgo sin una reestructuración real.",
    fuentes: [
      { medio: "Energiminas", fecha: "11 may 2026", titulo: "Aprueban nuevo rescate financiero por US$2,500 millones para Petroperú", url: "https://energiminas.com/2026/05/11/aprueban-nuevo-rescate-financiero-por-us2500-millones-para-petroperu/" }
    ]
  },
  {
    id: "lluvias", cat: "clima", regiones: ["Nacional"], tema: "Lluvias",
    frase: "Que la lluvia no nos deje sin casa",
    dato: "En los primeros tres meses de 2026, las lluvias dejaron 74 muertos y 27.555 damnificados. El 62% de los distritos del país fue declarado en emergencia.",
    contexto: "Las cifras son del Centro de Operaciones de Emergencia Nacional (COEN) y fueron presentadas por el jefe de Indeci.",
    fuentes: [
      { medio: "Exitosa", fecha: "20 mar 2026", titulo: "Lluvias y huaycos en Perú: 74 fallecidos y más de 27 mil damnificados", url: "https://www.exitosanoticias.pe/actualidad/lluvias-huaycos-peru-74-fallecidos-mas-27-mil-damnificados-coen-n171668" }
    ]
  },
  {
    id: "deforestacion", cat: "ambiente", regiones: ["Amazonía"], tema: "Bosques",
    frase: "El oro no vale más que el bosque",
    dato: "En 2025 el Perú fue el país amazónico con más deforestación por minería de oro: 18.200 hectáreas, según el monitoreo MAAP.",
    contexto: "Es más del doble que Brasil, el segundo de la lista, con 7.900 hectáreas.",
    fuentes: [
      { medio: "Actualidad Ambiental (SPDA)", fecha: "24 jun 2026", titulo: "Perú registra la mayor cifra de deforestación amazónica por minería aurífera en el 2025", url: "https://www.actualidadambiental.pe/peru-registra-mayor-cifra-de-deforestacion-amazonica-por-mineria-en-el-2025/" }
    ]
  }
];

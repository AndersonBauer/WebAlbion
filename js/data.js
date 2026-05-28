import { Tabua } from "./Data/Recursos/RecursosRefinados/dataTabua.js";
import { Tecido } from "./Data/Recursos/RecursosRefinados/dataTecido.js";
import { CouroCurtido } from "./Data/Recursos/RecursosRefinados/dataCouroCurtido.js";
import { Pedra } from "./Data/Recursos/RecursosBrutos/dataPedra.js";
import { CouroCru } from "./Data/Recursos/RecursosBrutos/dataCouroCru.js";
import { Fibra } from "./Data/Recursos/RecursosBrutos/dataFibra.js";
import { Barra } from "./Data/Recursos/RecursosRefinados/dataBarra.js";
import { BlocoDePedra } from "./Data/Recursos/RecursosRefinados/dataBlocoDePedra.js";
import { Tronco } from "./Data/Recursos/RecursosBrutos/dataTronco.js";
import { Minerio } from "./Data/Recursos/RecursosBrutos/dataMinerio.js";
import { Arco } from "./Data/Armas/Arcos/dataArco.js";
import { ArcoLongo } from "./Data/Armas/Arcos/dataArcoLongo.js";
import { ArcoDeGuerra } from "./Data/Armas/Arcos/dataArcoDeGuerra.js";
import { ArcoSussurrante } from "./Data/Armas/Arcos/dataArcoSussurrante.js";
import { ArcoPlangente } from "./Data/Armas/Arcos/dataArcoPlangente.js";
import { ArcoBadonico } from "./Data/Armas/Arcos/dataArcoBadonico.js";
import { FuraBruma } from "./Data/Armas/Arcos/dataFuraBruma.js";
import { ArcoAndarilhoCeleste } from "./Data/Armas/Arcos/dataArcoAndarilhoCeleste.js";
import { Adaga } from "./Data/Armas/Adagas/dataAdagas.js";
import { Runas } from "./Data/Recursos/Runas/dataRunas.js";
import { FlechasSinistras } from "./Data/Artefatos/dataFlechasSinistras.js";
import { Alma } from "./Data/Recursos/Almas/dataAlma.js";
import { PontasDeFlechasDemoniacas } from "./Data/Artefatos/dataPontasDeFlechaDemoniacas.js";
import { OssoEntalhado } from "./Data/Artefatos/dataOssoEntalhado.js";
import { Reliquia } from "./Data/Recursos/Reliquias/dataReliquia.js";
import { TuboImpecavelmenteTrabalhado } from "./Data/Artefatos/dataTuboImpecavel.js";
import { FragmentosAvalon } from "./Data/Recursos/Fragmentos/dataFragmentosAvalon.js";
import { CristalVentoso } from "./Data/Artefatos/dataCristalVentoso.js";
import { FragmentoDeCristal } from "./Data/Recursos/Fragmentos/dataFragmentosDeCristal.js";

export const mercado = [

    // Recursos
    ...Tabua,
    ...Tecido,
    ...CouroCurtido,
    ...Pedra,
    ...CouroCru,
    ...Fibra,
    ...Barra,
    ...BlocoDePedra,
    ...Tronco,
    ...Minerio,

    // Relíquias
    ...Reliquia,

    // Runas
    ...Runas,

    // Almas
    ...Alma,

    // Fragmentos
    ...FragmentosAvalon,
    ...FragmentoDeCristal,

    // Artefatos
    ...FlechasSinistras,
    ...PontasDeFlechasDemoniacas,
    ...OssoEntalhado,
    ...TuboImpecavelmenteTrabalhado,
    ...CristalVentoso,

    // Armas
    ...Arco,
    ...ArcoLongo,
    ...ArcoDeGuerra,
    ...ArcoSussurrante,
    ...ArcoPlangente,
    ...ArcoBadonico,
    ...FuraBruma,
    ...ArcoAndarilhoCeleste,
    ...Adaga
];
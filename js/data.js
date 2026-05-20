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

export const mercado = [
    ...Tabua,
    ...Tecido,
    ...CouroCurtido,
    ...Pedra,
    ...CouroCru,
    ...Fibra,
    ...Barra,
    ...BlocoDePedra,
    ...Tronco,
    ...Minerio
];
import { createBrowserRouter, redirect } from "react-router-dom";
import Main from "../layouts/Main";
import Index from "./Index";
import Register from "./Register";
import SignIn from "./SignIn";
import Buttons from "./Buttons";
import Schema from "./Schema";
import Noticias from "../schema/Noticias";
import NotiView from "./NotiView";
import Cursos from "../schema/Cursos";
import Extintores from "../schema/Extintores";
import Capacitaciones from "../schema/Capacitaciones";
import Psicologia from "../schema/Psicologia";
import { Courseview } from "./Courseview";
import { CardPost } from "./CardPost";
import { Extinguisher } from "../services/extinguisher";
import { Ambulance } from "../services/Ambulance";
import { Inspection } from "../services/Inspection";
import { Training } from "../services/Training";
import { TrainingView } from "../services/TrainingView";
import { Card } from "./EditNoticias/Card";
import { CardCourseEdit } from "./EditCursos/CardCourseEdit";
import { CardPostEdit } from "./EditPost/CardPostEdit";
import { CardExtintoresEdit } from "./EditExtintores/CardExtintoresEdit";
import { CardCapacitacionEdit } from "./EditCapacitaciones/CardCapacitacionEdit";
import { ViewNoticia } from "../components/Noticias/ViewNoticia";
import { ViewCursos } from "../components/Cursos/ViewCursos";
import { ViewComponent } from "../components/Psicologia/ViewComponent";
import { ViewCapacitacion } from "../components/Capacitaciones/ViewCapacitacion";
import { ViewExtintores } from "../components/Extintores/ViewExtintores";
import { ViewAmbulancia } from "../components/Ambulancia/ViewAmbulancia";
import { ViewInspeccion } from "../components/Inspeccion.jsx/ViewInspeccion";
import { Cart } from "./carrito/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/register", element: <Register /> },
      { path: "/ingresar", element: <SignIn /> },
      { path: "/botones", element: <Buttons /> },
      { path: "/noticias", element: <ViewNoticia /> },
      { path: "/cursos", element: <ViewCursos /> },
      { path: "/psicologia", element: <ViewComponent /> },
      { path: "/capacitaciones", element: <ViewCapacitacion /> },
      { path: "/extintores", element: <ViewExtintores /> },
      { path: "/ambulancia", element: <ViewAmbulancia /> },
      { path: "/inspeccion", element: <ViewInspeccion /> },
      { path: "/noticias_vista/:_id", element: <NotiView /> },
      { path: "/course_vista/:_id", element: <Courseview /> },
      { path: "/post_view", element: <CardPost /> },
      { path: "/servicios_extintores", element: <Extinguisher /> },
      { path: "/servicios_ambulancia", element: <Ambulance /> },
      { path: "/servicios_inspecciones", element: <Inspection /> },
      { path: "/capacitaciones_vista", element: <Training /> },
      { path: "/capacitaciones/:_id", element: <TrainingView /> },
      {
        path: "/schema",
        element: <Schema />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/noticias_crud",
        element: <Noticias />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/curso",
        element: <Cursos />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/extintor",
        element: <Extintores />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/capacitacion",
        element: <Capacitaciones />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/psicologia_crud",
        element: <Psicologia />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },

      {
        path: "/noticias_editar",
        element: <Card />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/cursos_editar",
        element: <CardCourseEdit />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/post_editar",
        element: <CardPostEdit />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/extintores_editar",
        element: <CardExtintoresEdit />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      {
        path: "/capacitaciones_editar",
        element: <CardCapacitacionEdit />,
        loader: () => {
          let user = JSON.parse(localStorage.getItem("user"));
          return !user && redirect("/not-allowed");
        },
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;

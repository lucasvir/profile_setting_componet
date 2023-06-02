import { Container } from "./styles";

import avatar from "../../assets/img/avatar.png";

import {
  UserCircle,
  Key,
  Bell,
  PersonArmsSpread,
  Devices,
  UserSwitch,
  Question,
  SignOut,
  CaretRight,
} from "@phosphor-icons/react";

export function ProfileMenu() {
  return (
    <Container>
      <div id="head-menu">
        <img src={avatar} alt="foto do usuário" />
        <div>
          <h1>Marvin McKinney</h1>
          <span>marvin.mckinney@example.com</span>
        </div>
      </div>
      <nav>
        <menu id="acc-menu">
          <p>Conta</p>
          <li>
            <UserCircle />
            <a href="#">Dados pessoais</a>
            <CaretRight />
          </li>
          <li>
            <Key />
            <a href="#">Informações de login</a>
            <CaretRight />
          </li>
        </menu>
        <menu id="pref-menu">
          <p>Preferências</p>
          <li>
            <Bell />
            <a href="#">Notificações</a>
            <CaretRight />
          </li>
          <li>
            <PersonArmsSpread />
            <a href="#">Acessibilidade</a>
            <CaretRight />
          </li>
        </menu>
        <menu id="priv-menu">
          <p>Privacidade</p>
          <li>
            <Devices />
            <a href="#">Aparelhos conectados</a>
            <CaretRight />
          </li>
          <li>
            <UserSwitch />
            <a href="#">Contas vinculadas</a>
            <CaretRight />
          </li>
        </menu>
        <menu id="signout-menu">
          <li>
            <Question />
            <a href="#">Central de Ajuda</a>
          </li>
          <li>
            <SignOut />
            <a href="#">Sair</a>
          </li>
        </menu>
      </nav>
    </Container>
  );
}

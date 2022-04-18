import { merge } from "lodash";
import Card from "./Card";
import Grid from "./Grid";
import Lists from "./Lists";
import Alert from "./Alert";
import Paper from "./Paper";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";

import Container from "./Container";
import Accordion from "./Accordion";
import Typography from "./Typography";
import IconButton from "./IconButton";

export default function ComponentsOverrides(theme) {
  return merge(Card(theme), Grid(theme), Input(theme), Lists(theme), Paper(theme), Alert(theme), Select(theme), Button(theme), Container(theme), Accordion(theme), IconButton(theme), Typography(theme));
}

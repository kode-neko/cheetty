import type { Link } from "./Link";

interface Cheat {
  title: string;
  content: string[] | string;
  tags: string[];
  pic?: Link;
}

export type { Cheat };
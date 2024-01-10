interface Link {
  name: string,
  links?: Link[],
  path?: string;
  icon?: string,
  alt?: string,
}

export type { Link };
type Mods = Record<string, boolean | string>

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...Object.entries(mods)
    .filter(([className, v]) => Boolean(v))
    .map(([className]) => className),
    ...additional,
  ].join(' ')
}

console.log(classNames('hello', { h: true, g: false }, ['another']))

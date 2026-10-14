export function toCsv(header: string[], rows: string[][]): string {
  const escape = (v: string) => {
    const safe = /^[=+\-@]/.test(v) ? `'${v}` : v;
    return `"${safe.replaceAll('"', '""')}"`;
  };
  return [header, ...rows].map((r) => r.map(escape).join(',')).join('\n');
}

export function safeFilename(title: string): string {
  return title
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/\s+/g, '_')
    .replace(/[^\p{L}\p{N}_-]/gu, '');
}

export function exportFilename(title?: string): string {
  return `${safeFilename(title ?? 'References')}.csv`;
}

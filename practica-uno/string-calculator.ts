export function add(input: string): number {
  if (!input || input.trim() === '') return 0;
  return input.split(',').map(s => parseInt(s.trim(), 10)).reduce((a,b)=>a+b,0);
}
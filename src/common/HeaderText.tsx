export default function HeaderText({ children }: { children: string }) {
  return (
    <p className='uppercase font-medium text-2xl text-slate-600 mb-3'>
      {children}
    </p>
  );
}

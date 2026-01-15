export default function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 z-[1] pointer-events-none opacity-[0.04]"
      style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
    />
  );
}

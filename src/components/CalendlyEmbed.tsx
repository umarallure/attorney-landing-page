type CalendlyEmbedProps = {
  url: string;
  title?: string;
  height?: number | string;
};

export function CalendlyEmbed({ url, title = 'Calendly Scheduling', height = 650 }: CalendlyEmbedProps) {
  return (
    <div className="overflow-hidden rounded-smooth border border-white/10 bg-black/40">
      <iframe
        className="w-full"
        style={{ minHeight: typeof height === 'number' ? `${height}px` : height }}
        src={url}
        title={title}
        allowFullScreen
      ></iframe>
    </div>
  );
}
